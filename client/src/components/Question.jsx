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

  const handleQuestionReportClick = () => {
    axios
      .put("/QuestionReport", {
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

  useEffect(() => {
    var tempArr = [];
    for (var key in question.answers) {
      tempArr.push(question.answers[key]);
    }
    setAnswers(tempArr);
  }, [question]);

  return (
    <div class="qa-card">
      <div>{`Q: ${question.question_body}`}</div>
      <span>{`by ${question.asker_name}, ${formatDate(
        question.question_date,
      )} | Helpful? `}</span>
      <span
        onClick={handleQuestionHelpfulClick}
      >{`Yes (${question.question_helpfulness})`}</span>
      <span> | </span>
      <span onClick={handleQuestionReportClick}>Report</span>
      <div>
        {answers.map((answer) => {
          return (
            <Answer
              answer={answer}
              refreshKey={refreshKey}
              setRefreshKey={setRefreshKey}
            />
          );
        })}
      </div>
      {showAnswerForm ? null : (
        <button onClick={handleAddAnswer}>Add Answer</button>
      )}
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
