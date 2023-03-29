import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

const Answer = ({ answer }) => {
  return (
    <div>
      <div>{`A: ${answer.body}`}</div>
      <div>{`by ${answer.answerer_name}, ${new Date(
        answer.date
      )} | Helpful? Yes (${answer.helpfulness})`}</div>
    </div>
  );
};

export default Answer;
