import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

import IndividualReview from "./IndividualReviews.jsx";
import exampleData from "./../exampleReviewsData.js"; // used as
import SortBy from "./SortBy.jsx";
import WriteAReview from "./WriteAReview.jsx";
import RatingsOverview from "./RatingsOverview.jsx";

const RatingsAndReviews = (props) => {
  const [reviews, setReviews] = useState([]);
  const [reviewsCount, setReviewsCount] = useState(0);
  const [shownReviews, setShownReviews] = useState(2);
  const [sortby, setSortBy] = useState("relevant");
  const [reviewMeta, setReviewMeta] = useState({});
  const [helpful, setHelpful] = useState(true);

  const getReviews = (id, sortby) => {
    $.ajax({
      type: "GET",
      url: "/reviews",
      // url: `/reviews?product_id=${id}&sort=${sortby}`,
      data: {
        product_id: id,
        sortby: sortby, // NEED VARIABLE PRODUCT_ID
      },
      success: (data) => {
        console.log("Data reviewed in the client side!", data);
        setReviews(data.results);
        setReviewsCount(data.results.length);
      },
    });
  };

  const getReviewData = (id) => {
    $.ajax({
      type: "GET",
      url: "/reviews/meta",
      data: {
        product_id: id,
      },
      success: (data) => {
        console.log("Meta Data received on client side,", data);
        setReviewMeta(data);
      },
    });
  };

  useEffect(() => {
    if (props.main && props.main.id != undefined) {
      console.log("RATING MAIN ID", props.main.id);
      getReviews(props.main.id);
      getReviewData(props.main.id);
    }
  }, [props.main, helpful]);

  var currentSelectionReviews = reviews.slice(0, shownReviews);

  const handleMoreReviews = () => {
    setShownReviews(shownReviews + 2);
  };

  return (
    <div class="RatingsAndReviews">
      <div>
        <h1>Rating And Reviews!</h1>
        <h4>
          {reviewsCount} reviews, sorted by{" "}
          <SortBy id={props.main.id} sortFunc={setSortBy} resort={getReviews} />
        </h4>

        <div class="overview-container">
          {reviewMeta.product_id ? <RatingsOverview obj={reviewMeta} /> : null}
        </div>
        <div class="reviews-container">
          {currentSelectionReviews.map((review) => {
            return (
              <IndividualReview
                setHelpful={setHelpful}
                helpful={helpful}
                obj={review}
              />
            );
          })}

          {reviewsCount > 2 ? (
            shownReviews > reviewsCount ? null : (
              <div>
                <button class="review-buttons" onClick={handleMoreReviews}>
                  MORE REVIEWS
                </button>
              </div>
            )
          ) : null}
          <WriteAReview />
        </div>
      </div>
    </div>
  );
};

export default RatingsAndReviews;
