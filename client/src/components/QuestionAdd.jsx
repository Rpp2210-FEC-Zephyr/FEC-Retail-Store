import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
const axios = require("axios");

const QuestionAdd = ({ main, refreshKey, setRefreshKey }) => {
  const [showQuestionForm, setQuestionShowForm] = useState(false);
  const [question, setQuestion] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleAddQuestion = () => {
    setQuestionShowForm(true);
  };

  const handleSubmitQuestion = (e) => {
    e.preventDefault();
    setQuestionShowForm(false);

    axios
      .post("/Question", {
        question: question,
        username: username,
        email: email,
        product_id: main.id,
      })
      .then((data) => {
        setQuestion("");
        setUsername("");
        setEmail("");
        setRefreshKey(!refreshKey);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div id="qa-q-add">
      {showQuestionForm ? null : (
        <button class="q-add" onClick={handleAddQuestion}>
          ADD QUESTION +
        </button>
      )}
      {showQuestionForm ? (
        <div id="q-add-form">
          <form>
            <div>Question:</div>
            <input
              value={question}
              onChange={(e) => {
                setQuestion(e.target.value);
              }}
            ></input>
            <div>Username:</div>
            <input
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            ></input>
            <div>Email:</div>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
            <button type="button" onClick={handleSubmitQuestion}>
              Submit
            </button>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default QuestionAdd;
