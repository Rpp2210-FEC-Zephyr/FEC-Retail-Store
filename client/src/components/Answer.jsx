import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
const axios = require("axios");
const formatDate = require("./formatDate.js");

const Answer = ({ answer, refreshKey, setRefreshKey }) => {
  const handleAnswerHelpfulClick = () => {
    axios
      .put("/AnswerHelpful", {
        answer_id: answer.id,
      })
      .then((data) => {
        console.log(data.data);
        setRefreshKey(!refreshKey);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAnswerReportClick = () => {
    axios
      .put("/AnswerReport", {
        answer_id: answer.id,
      })
      .then((data) => {
        console.log(data.data);
        setRefreshKey(!refreshKey);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div>{`A: ${answer.body}`}</div>
      <div>
        {answer.photos.map((photoURL) => {
          return <img class="answer-photo" src={photoURL}></img>;
        })}
      </div>
      <span>{`by ${answer.answerer_name}, ${formatDate(
        answer.date
      )} | Helpful? `}</span>
      <span
        onClick={handleAnswerHelpfulClick}
      >{`Yes (${answer.helpfulness})`}</span>
      <span> | </span>
      <span onClick={handleAnswerReportClick}>Report</span>
    </div>
  );
};

export default Answer;
