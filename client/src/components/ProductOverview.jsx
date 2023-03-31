import React, { useState, useEffect } from "react";
import { TbStarsFilled } from "react-icons/tb";
import { IoAddCircleOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsCheck2Square } from "react-icons/bs";
import { IconContext } from "react-icons";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";
import RatingSystem from "./RatingSystem.jsx";
import ReactDOM from "react-dom";
import $ from "jquery";
import ProductLeft from "./Products/ProductLeft.jsx";
import ProductRight from "./Products/ProductRight.jsx";

const Popup = require("./Notification.jsx");
const Favorites = require("./Favorites.jsx");

const ProductOverview = ({ main, Outfits }) => {
  const [show, setShow] = useState([]);
  const [style, setStyle] = useState([]);
  const [skus, setSkus] = useState([]);
  const [feature, setFeature] = useState([]);
  const [cSize, setCSize] = useState(null);
  const [cQuant, setCQuant] = useState(null);
  const [cPrice, setCPrice] = useState(null);
  const [quantity, setQuantity] = useState([]);
  const [rating, setRating] = useState(null);

  const getStyles = (id) => {
    $.ajax({
      type: "GET",
      url: "/Styles",
      data: { id: id },
      success: (data) => {
        console.log("Style Data", data);

        setStyle(data);
        setShow(data.results[0]);
        setCPrice(data.results[0].original_price);
        setSkus(data.results[0].skus);
      },
    });
  };

  const getFeatures = (id) => {
    $.ajax({
      type: "GET",
      url: "/Features",
      data: { id: id },
      success: (data) => {
        console.log("Feature Data", data.features);

        setFeature(data.features);
      },
    });
  };

  const onQuan = (quan) => {
    quan = quan.split(" ")[0];

    quan = parseInt(quan);
    quan = quan + 1;

    var results = [];

    for (var i = 1; i < quan; i++) {
      results.push(i);
    }

    setQuantity(results);
    return;
  };

  const onCSize = (csize) => {
    csize = csize.split(" ")[1];

    if (csize == "Size") {
      setCSize(null);
      setCQuant(null);
    } else {
      setCSize(csize);
      setCQuant(1);
    }
  };
  const onCQuan = (cquan) => {
    cquan = parseInt(cquan);
    setCQuant(cquan);
  };

  const Favor = () => {
    main.photo = style.results[0].photos[0].url;
    main.reviews = rating;

    const Star = JSON.parse(localStorage.getItem("favorites"));
    if (Star != null) {
      localStorage.setItem("favorites", JSON.stringify([Star, main]));
      Outfits(Favorites.Toggle(main));
    } else {
      localStorage.setItem("favorites", JSON.stringify([main]));
      Outfits(Favorites.Toggle(main));
    }
  };

  const Change = (item, index) => {
    const mySelect = document.getElementById(`${index}`);

    const Selecet = document.querySelectorAll(".StyleChoose");
    const check = document.querySelectorAll(".selected");

    Selecet.forEach((element) => {
      element.addEventListener("click", () => {
        check.forEach((el) => {
          el.style.visibility = "hidden";
        });
      });
    });

    mySelect.style.visibility = "visible";

    setShow(item);
    Favorites.Status(main);
    setSkus(item.skus);
  };
  const addBag = () => {
    if (cSize == null || cQuant == null) {
      Popup.Alert("error");
    } else {
      const bag = JSON.parse(localStorage.getItem("bag"));

      if (bag != null) {
        if (bag.length == 10) {
          Popup.Alert("warning");
        } else {
          Popup.Alert("success");
          localStorage.setItem(
            "bag",
            JSON.stringify([
              bag,
              { cloth: show, size: cSize, quant: cQuant, name: main.name },
            ]),
          );
        }
      } else {
        Popup.Alert("success");
        localStorage.setItem(
          "bag",
          JSON.stringify([
            { cloth: show, size: cSize, quant: cQuant, name: main.name },
          ]),
        );
      }
      getBag();
    }
  };

  const ImageExpander = () => {
    setTimeout(() => {
      // Your logic here
      Popup.ImageExpander();
      Popup.Selected();

      ImageExpander();
    }, 1000);
  };
  const getReviews = (id) => {
    $.ajax({
      type: "GET",
      url: "/reviews",
      data: {
        product_id: id, // NEED VARIABLE PRODUCT_ID
        count: 10,
        sort: "relevant",
      },
      success: (data) => {
        var sum = 0;

        for (var i = 0; i < data.results.length; i++) {
          sum += data.results[i].rating;
        }

        setRating(sum / data.results.length);
      },
    });
  };

  useEffect(() => {
    if (main.id != undefined) {
      console.log("THE MAIN", main);
      getStyles(main.id);
      getFeatures(main.id);
      getReviews(main.id);
      ImageExpander();
      Popup.Selected();
      Favorites.Status(main);
      Outfits(Favorites.showOutfit());
    }
  }, [main]);

  return (
    <div className="productOverview">
      <ProductLeft main={main} show={show} />

      <ProductRight
        main={main}
        show={show}
        rating={rating}
        style={style}
        Change={Change}
        onQuan={onQuan}
        onCSize={onCSize}
        addBag={addBag}
        feature={feature}
        Favor={Favor}
        skus={skus}
        quantity={quantity}
        onCQuan={onCQuan}
      />
    </div>
  );
};

export default ProductOverview;
