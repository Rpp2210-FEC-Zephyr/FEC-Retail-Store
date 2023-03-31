import React from "react";

const ReviewResponse = (props) => {
  return (
    <div class="response-box">
      <h3>Response from seller: </h3>
      <div>{props.response}</div>
    </div>
  );
};

export default ReviewResponse;
