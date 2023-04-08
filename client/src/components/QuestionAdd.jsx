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

  const handleCloseQuestion = () => {
    setQuestionShowForm(false);
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
      <button class="q-add" onClick={handleAddQuestion}>
        ADD QUESTION +
      </button>
      {showQuestionForm ? (
        <div id="q-add-form-overlay">
          <span class="qa-form-close-x" onClick={handleCloseQuestion}>
            &times;
          </span>
          <div id="q-add-form-container">
            <form>
              <h1 id="q-form-title">Ask your Question</h1>
              <h2 id="q-form-subtitle">{`About the ${main.name}`}</h2>
              <div>Your question</div>
              <textarea
                value={question}
                onChange={(e) => {
                  setQuestion(e.target.value);
                }}
                placeholder="What do you want to know about this product?"
                maxlength="1000"
                rows="5"
              ></textarea>
              <div>What is your nickname</div>
              <input
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                placeholder="Example: jackson11!"
                maxlength="60"
              ></input>
              <div id="q-username-privacy-note">
                For privacy reasons, do not use your full name or email address
              </div>
              <div>Your email</div>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Please enter your email"
                maxlength="60"
              ></input>
              <div id="q-email-privacy-note">
                For authentication reasons, you will not be emailed
              </div>
              <button type="button" onClick={handleSubmitQuestion}>
                Submit
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default QuestionAdd;
