import React, { useState, useEffect } from "react";
import { TbStarsFilled } from "react-icons/tb";
import { IoAddCircleOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsCheck2Square } from "react-icons/bs";
import { IconContext } from "react-icons";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";
import RatingSystem from "../RatingSystem.jsx";
import ReactDOM from "react-dom";
import $ from "jquery";

const Popup = require("../Notification.jsx");

const ProductFeature = ({ main }) => {
  const [feature, setFeature] = useState([]);

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
  useEffect(() => {
    if (main.id != undefined) {
      console.log("THE MAIN", main);
      getFeatures(main.id);
    }
  }, [main]);
  return (
    <div className="feature">
      <div className="vertical-divider"> ㅤ</div>

      <ul className="featurelist">
        {feature.length != 0
          ? feature.map((feat, index) => (
              <li className="featureitem" key={`${feat.value} ${index}`}>
                <BsCheck2Square /> ㅤ{feat.value}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default ProductFeature;
