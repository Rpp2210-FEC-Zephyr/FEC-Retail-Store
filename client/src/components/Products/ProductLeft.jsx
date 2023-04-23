import React, { useState, useEffect } from "react";
import { TbStarsFilled } from "react-icons/tb";
import { IoAddCircleOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsCheck2Square } from "react-icons/bs";
import { IconContext } from "react-icons";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";
import ReactDOM from "react-dom";
import $ from "jquery";

const ProductLeft = ({ main, show }) => {
  const [selected, setSelected] = useState(1);

  useEffect(() => {
    if (main.id != undefined) {
    }
  }, [main]);

  return (
    <div className="left">
      <div className="slider">
        <div class="vSlider">
          {show.length != 0
            ? show.photos.map((photo, index) => (
                <div
                  id={`scroll${index + 1}`}
                  onClick={() => {
                    setSelected(index + 1);
                  }}
                  className="vslide"
                >
                  <img
                    src={photo.url}
                    alt=""
                    className="ScrollIMG"
                    style={{
                      border:
                        selected == index + 1 ? "3px solid #40d3dc" : "none",
                    }}
                  />
                </div>
              ))
            : null}
        </div>
        <div className="slides">
          {show.length != 0
            ? show.photos.map((photo, index) => (
                <input
                  onClick={() => {
                    setSelected(index + 1);
                  }}
                  type="radio"
                  name="radio-btn"
                  id={`radio${index + 1}`}
                />
              ))
            : null}

          <div className="slide first">
            <img src={show.length != 0 ? show.photos[0].url : null} alt="" />
          </div>
          {/* show.photos.slice(1, 4) */}
          {show.length != 0
            ? show.photos.slice(1).map((photo) => (
                <div className="slide">
                  <img src={photo.url} alt="" className="ProductOverviewIMG" />
                </div>
              ))
            : null}

          <div className="Popup">
            <span>&times;</span>
          </div>

          <div className="navigation-auto">
            {show.length != 0
              ? show.photos.map((photo, index) => (
                  <div className={`auto-btn${index + 1}`}></div>
                ))
              : null}
          </div>
        </div>

        <div className="navigation-manual">
          {show.length != 0
            ? show.photos.map((photo, index) => (
                <label
                  key={`${photo} ${index}`}
                  onClick={() => {
                    setSelected(index + 1);
                  }}
                  htmlFor={`radio${index + 1}`}
                  className="manual-btn"
                  checked={selected === index + 1}
                ></label>
              ))
            : null}
        </div>
      </div>
      <div className="slogan">{main.slogan}</div>
      <div className="desc">{main.description}</div>
    </div>
  );
};

export default ProductLeft;
