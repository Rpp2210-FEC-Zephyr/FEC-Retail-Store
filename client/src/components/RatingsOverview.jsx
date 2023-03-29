import React, { useState, useEffect } from "react";
import RatingSystem from "./RatingSystem.jsx";

const RatingsOverview = (props) => {
  console.log("inside ratings overview", props.obj);

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

  return (
    <div>
      {averageRating ? (
        <div>
          {averageRating.rating}
          <RatingSystem obj={averageRating} />
        </div>
      ) : null}
      <h4>{percentRecommended}% of reviews recommend this product</h4>
      {Object.keys(props.obj.ratings)
        .reverse()
        .map((ele) => {
          return (
            <div>
              {ele} Stars
              <progress value={props.obj.ratings[ele]} max={totalRatingCount} />
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
