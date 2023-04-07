import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
const axios = require("axios");
const formatDate = require("./formatDate.jsx");

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
    <div class="a-individual-entry">
      <div class="a-body">{answer.body}</div>
      <div class="a-photos">
        {answer.photos.map((photoURL) => {
          return <img class="answer-photo" src={photoURL}></img>;
        })}
      </div>
      <span>{`by ${answer.answerer_name}, ${formatDate(
        answer.date
      )}  |  Helpful? `}</span>
      <span class="underline" onClick={handleAnswerHelpfulClick}>
        Yes
      </span>
      <span>{` (${answer.helpfulness})`}</span>
      <span>{"  |  "}</span>
      <span class="underline" onClick={handleAnswerReportClick}>
        Report
      </span>
    </div>
  );
};

export default Answer;
