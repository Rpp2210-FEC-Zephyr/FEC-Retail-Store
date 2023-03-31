import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Link,
  Routes,
  Route,
  Switch,
  HashRouter,
  Navigate,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";
import { GiEagleEmblem } from "react-icons/gi";
import { IconContext } from "react-icons";
import ReactDOM from "react-dom";
import $ from "jquery";
import ProductOverview from "./components/ProductOverview.jsx";
import RatingsAndReviews from "./components/RatingsAndReviews.jsx";
import QuestionsAndAnswers from "./components/QuestionsAndAnswers.jsx";
import RelatedItems from "./components/RelatedItemsAndOutfitCreation.jsx";
import YourOutfits from "./components/YourOutfits.jsx";
import Favorites from "./components/Favorites.jsx";

const Popup = require("./components/Notification.jsx");

const App = () => {
  const [data, setData] = useState([]);
  const [main, setMain] = useState({});

  const [outfit, setOutfit] = useState([]);

  const [queryParameters] = useSearchParams();

  const navigate = useNavigate();

  const getProducts = () => {
    $.ajax({
      type: "GET",
      url: "/Products",
      success: (data) => {
        setData(data);
        console.log("ALL DATA", data);
        setMain(data[0]);
      },
    });
  };

  const getProductsID = (id) => {
    $.ajax({
      type: "GET",
      url: "/ProductsID",
      data: { id, id },
      success: (data) => {
        setMain(data);
      },
    });
  };

  const Change = (obj) => {
    setMain(obj);
  };

  const Outfits = (obj) => {
    setOutfit(obj);
  };

  const URL = (id) => {
    window.location.href = `/?ProdID=${id}`;
  };

  const Toggle = (obj) => {
    const Star = JSON.parse(localStorage.getItem("favorites"));
    if (Star != null) {
      localStorage.setItem("favorites", JSON.stringify([Star, obj]));
    } else {
      localStorage.setItem("favorites", JSON.stringify([obj]));
    }

    Favorites.Toggle(obj);
    setOutfit(Favorites.showOutfit());
    Popup.Alert("info");
  };
  const DetailModal = (product) => {
    Popup.DetailExpander(product, main);
  };

  useEffect(() => {
    if (queryParameters.get("ProdID")) {
      getProductsID(queryParameters.get("ProdID"));
    } else {
      getProducts();
    }

    Popup.Notify();
  }, []);

  return (
    <div>
      {/* <nav>
        <div class="logo">
          Zephyr Store
          <IconContext.Provider value={{ color: "white", size: "40px" }}>
            <GiEagleEmblem />
          </IconContext.Provider>
        </div>
      </nav> */}
      {/* <ProductOverview main={main} Outfits={Outfits} /> */}
      {/* <RelatedItems main={main} URL={URL} DetailModal={DetailModal} /> */}
      {/* <YourOutfits outfit={outfit} URL={URL} Toggle={Toggle} /> */}
      {/* <QuestionsAndAnswers main={main} /> */}
      <RatingsAndReviews main={main} />
    </div>
  );
};

export default App;
