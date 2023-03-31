import React, { useState, useEffect } from "react";
import RatingSystem from "./RatingSystem.jsx";

const RatingsOverview = (props) => {
  const [averageRating, setAverageRating] = useState(null);
  const [percentRecommended, setpercentRecommended] = useState(0);
  const [totalRatingCount, setTotalRatingCount] = useState(0);

  // percentage recommended calculation
  const settingPercentage = () => {
    setpercentRecommended(
      Math.trunc(
        (parseInt(props.obj.recommended.true) /
          (parseInt(props.obj.recommended.true) +
            parseInt(props.obj.recommended.false))) *
          100
      )
    );
  };

  const settingsAverageRating = () => {
    var total = 0;
    var count = 0;
    Object.keys(props.obj.ratings).forEach((ele) => {
      total += ele * parseInt(props.obj.ratings[ele]); // {5:'38'} ==>  5 * 38
      count += parseInt(props.obj.ratings[ele]); // 5: '38'
    });
    var average = total / count;
    setTotalRatingCount(count);
    setAverageRating({ rating: average });
  };

  useEffect(() => {
    settingPercentage();
    settingsAverageRating();
  }, []);

  const handleClickedProgress = (ele) => {
    console.log("Clicked on rating of: ", ele);
  };

  return (
    <div>
      {averageRating ? (
        <div class="PracFlex">
          <h1 class="margin-right">
            {Math.round(averageRating.rating * 10) / 10}{" "}
          </h1>
          <h1>
            <RatingSystem obj={averageRating} />
          </h1>
        </div>
      ) : null}
      <h4>
        {percentRecommended ? percentRecommended : 0}% of reviews recommend this
        product
      </h4>
      {Object.keys(props.obj.ratings)
        .reverse()
        .map((ele) => {
          return (
            <div
              class="progress-outer"
              onClick={() => handleClickedProgress(ele)}
            >
              {ele} Stars
              <progress
                value={props.obj.ratings[ele]}
                max={totalRatingCount}
              />{" "}
              {props.obj.ratings[ele]}
            </div>
          );
        })}
      {Object.keys(props.obj.characteristics).map((ele) => {
        return (
          <div>
            {ele}
            <div>
              <progress value={props.obj.characteristics[ele].value} max="5" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RatingsOverview;
