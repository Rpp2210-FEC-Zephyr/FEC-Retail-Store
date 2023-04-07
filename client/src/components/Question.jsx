import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Answer from "./Answer.jsx";
const axios = require("axios");
const formatDate = require("./formatDate.jsx");

const Question = ({ question, refreshKey, setRefreshKey }) => {
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

  // const handleQuestionReportClick = () => {
  //   axios
  //     .put("/QuestionReport", {
  //       question_id: question.question_id,
  //     })
  //     .then((data) => {
  //       console.log(data.data);
  //       setRefreshKey(!refreshKey);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

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

  //make answers load more and name the button to load more answers "See more answers"

  return (
    <div class="qa-card">
      <div class="q-card">
        <div class="q-Q">Q:</div>
        <div class="q-body">{question.question_body}</div>
        <div class="q-help-and-report">
          <span>Helpful? </span>
          <span
            onClick={handleQuestionHelpfulClick}
          >{`Yes (${question.question_helpfulness})`}</span>
          <span>{"  |  "}</span>
          <span onClick={handleAddAnswer}>Add Answer</span>
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
        <form>
          <div>Answer:</div>
          <input
            value={answer}
            onChange={(e) => {
              setAnswer(e.target.value);
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
          <div>Photos:</div>
          <textarea
            rows="5"
            value={photos}
            onChange={(e) => {
              setPhotos(e.target.value);
            }}
          ></textarea>
          <button type="button" onClick={handleSubmitAnswer}>
            Submit
          </button>
        </form>
      ) : null}
    </div>
  );
};

export default Question;
