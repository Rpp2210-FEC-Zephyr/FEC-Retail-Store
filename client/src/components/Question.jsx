import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Answer from "./Answer.jsx";
const axios = require("axios");
const formatDate = require("./formatDate.jsx");

const Question = ({ prod_name, question, refreshKey, setRefreshKey }) => {
  const [answers, setAnswers] = useState([]);
  const [showAnswerForm, setAnswerShowForm] = useState(false);
  const [answer, setAnswer] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [photos, setPhotos] = useState("");
  const [showAllAnswers, setShowAllAnswers] = useState(false);

  const handleAddAnswer = () => {
    setAnswerShowForm(true);
  };

  const handleCloseAnswer = () => {
    setAnswerShowForm(false);
  };

  const handleSubmitAnswer = (e) => {
    e.preventDefault();
    setAnswerShowForm(false);

    var parsedPhotos = photos.split("\n");
    console.log(question.question_id);
    console.log(photos);
    console.log(parsedPhotos);

    axios
      .post("/Answer", {
        question_id: question.question_id,
        body: answer,
        name: username,
        email: email,
        photos: parsedPhotos,
      })
      .then((data) => {
        console.log(data.data);
        setAnswer("");
        setUsername("");
        setEmail("");
        setPhotos("");
        setRefreshKey(!refreshKey);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleQuestionHelpfulClick = () => {
    axios
      .put("/QuestionHelpful", {
        question_id: question.question_id,
      })
      .then((data) => {
        console.log(data.data);
        setRefreshKey(!refreshKey);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAnswersFullOrCollapseClick = () => {
    setShowAllAnswers(!showAllAnswers);
  };

  useEffect(() => {
    var helpfulness = [];
    for (var key in question.answers) {
      helpfulness.push(question.answers[key].helpfulness);
    }
    helpfulness.sort((a, b) => {
      return b - a;
    });
    var sortedAnswers = [];
    for (var i = 0; i < helpfulness.length; i++) {
      for (var key in question.answers) {
        if (
          helpfulness[i] === question.answers[key].helpfulness &&
          !sortedAnswers.includes(question.answers[key])
        ) {
          sortedAnswers.push(question.answers[key]);
        }
      }
    }
    setAnswers(sortedAnswers);
  }, [question]);

  return (
    <div class="qa-card">
      <div class="q-card">
        <div class="q-Q">Q:</div>
        <div class="q-body">{question.question_body}</div>
        <div class="q-help-and-report">
          <span>Helpful? </span>
          <span class="underline" onClick={handleQuestionHelpfulClick}>
            Yes
          </span>
          <span>{` (${question.question_helpfulness})`}</span>
          <span>{"  |  "}</span>
          <span class="underline" onClick={handleAddAnswer}>
            Add Answer
          </span>
        </div>
      </div>
      <div class="a-card">
        {answers.length === 0 ? null : <div class="a-A">A:</div>}
        <div>
          <div class="a-list">
            {showAllAnswers
              ? answers.map((answer) => {
                  return (
                    <Answer
                      answer={answer}
                      refreshKey={refreshKey}
                      setRefreshKey={setRefreshKey}
                    />
                  );
                })
              : answers.slice(0, 2).map((answer) => {
                  return (
                    <Answer
                      answer={answer}
                      refreshKey={refreshKey}
                      setRefreshKey={setRefreshKey}
                    />
                  );
                })}
          </div>
          {answers.length > 2 ? (
            !showAllAnswers ? (
              <button
                class="a-full-or-collapse"
                onClick={handleAnswersFullOrCollapseClick}
              >
                SEE MORE ANSWERS
              </button>
            ) : (
              <button
                class="a-full-or-collapse"
                onClick={handleAnswersFullOrCollapseClick}
              >
                COLLAPSE ANSWERS
              </button>
            )
          ) : null}
        </div>
      </div>
      {showAnswerForm ? (
        <div id="a-add-form-overlay">
          <span class="qa-form-close-x" onClick={handleCloseAnswer}>
            &times;
          </span>
          <div id="a-add-form-container">
            <form>
              <h1 id="a-form-title">Submit your Answer</h1>
              <h2 id="a-form-subtitle">{`${prod_name}: ${question.question_body}`}</h2>
              <div>Your answer</div>
              <textarea
                value={answer}
                onChange={(e) => {
                  setAnswer(e.target.value);
                }}
                maxlength="1000"
                rows="5"
              ></textarea>
              <div>What is your nickname</div>
              <input
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                placeholder="Example: jack543!"
                maxlength="60"
              ></input>
              <div id="a-username-privacy-note">
                For privacy reasons, do not use your full name or email address
              </div>
              <div>Your email</div>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Example: jack@email.com"
                maxlength="60"
              ></input>
              <div id="a-email-privacy-note">
                For authentication reasons, you will not be emailed
              </div>
              <div>Upload your photos</div>
              <div>
                <textarea
                  rows="5"
                  value={photos}
                  onChange={(e) => {
                    setPhotos(e.target.value);
                  }}
                  placeholder="Paste image links here"
                ></textarea>
              </div>
              <button type="button" onClick={handleSubmitAnswer}>
                Submit
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Question;
