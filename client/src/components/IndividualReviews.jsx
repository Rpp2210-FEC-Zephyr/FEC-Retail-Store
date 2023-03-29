import React from "react";
import RatingSystem from "./RatingSystem.jsx";

const IndividualReview = (props) => {
  return (
    <div id={props.id}>
      <RatingSystem obj={props.obj} review={true} />
      <div>
        <div>
          <h3 class="review-summary">
            {props.obj.summary.length > 60
              ? props.obj.summary.slice(0, 60) + "..."
              : props.obj.summary.slice(0, 60)}
          </h3>
        </div>
        <div>{props.obj.body}</div>
      </div>
      <div>Helpful? Yes({props.obj.helpfulness}) | Report</div>
      {props.obj.recommend ? (
        <div>
          <i class="fa-solid fa-check"></i> I recommend this product!
        </div>
      ) : null}
      {props.obj.photos.length > 0
        ? props.obj.photos.map((photo) => {
            return <img class="review-image" src={photo.url} alt="IMAGE!!!" />;
          })
        : null}
      {props.obj.response !== null ? (
        <div>
          <h3>Response: </h3>
          <div>{props.obj.response}</div>
        </div>
      ) : null}
    </div>
  );
};

export default IndividualReview;
