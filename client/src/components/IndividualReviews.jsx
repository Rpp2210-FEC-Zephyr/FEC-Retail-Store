import React, { useState } from "react";
import RatingSystem from "./RatingSystem.jsx";
import ReviewResponse from "./ReviewResponse.jsx";
import $ from "jquery";

const IndividualReview = (props) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const updateReviewHelpful = (reviewId) => {
    $.ajax({
      url: `/reviews/${reviewId}/helpful`,
      method: "PUT",
      success: (data) => {
        props.setHelpful(!props.helpful);
      },
      error: (err) => {},
    });
  };

  return (
    <div class="individual-review" id={props.id} key={props.id}>
      <RatingSystem obj={props.obj} review={true} />
      <div>
        <h3 class="review-summary">
          {props.obj.summary.length > 60
            ? props.obj.summary.slice(0, 60) + "..."
            : props.obj.summary.slice(0, 60)}
        </h3>
      </div>
      {props.obj.body.length > 250 ? (
        <div>{props.obj.body.slice(0, 250) + "..."}</div>
      ) : (
        <div>{props.obj.body.slice(0, 250)}</div>
      )}

      <div>
        Helpful?{" "}
        <span onClick={() => updateReviewHelpful(props.obj.review_id)}>
          Yes
        </span>{" "}
        ({props.obj.helpfulness}) | Report
      </div>
      {props.obj.recommend ? (
        <div>
          <i class="fa-solid fa-check"></i> I recommend this product!
        </div>
      ) : null}
      {props.obj.response ? (
        <ReviewResponse response={props.obj.response} />
      ) : null}
      <div className="review">
        {props.obj.photos.length > 0 ? (
          <div className="review-images">
            {props.obj.photos.map((photo, index) => (
              <img
                key={index}
                className="review-image"
                src={photo.url}
                alt="Review"
                onClick={() => setSelectedImage(photo.url)}
              />
            ))}
          </div>
        ) : null}

        {selectedImage && (
          <div id="fullpage" onClick={() => setSelectedImage(null)}>
            <img src={selectedImage} alt="Full page" />
          </div>
        )}
      </div>
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
