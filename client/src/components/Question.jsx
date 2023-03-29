import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Answer from "./Answer.jsx";

const Question = ({ question }) => {
  const [answers, setAnswers] = useState([]);
  const [showAnswerForm, setAnswerShowForm] = useState(false);
  const [answer, setAnswer] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [photos, setPhotos] = useState([]);

  const handleAddAnswer = () => {
    setAnswerShowForm(true);
  };

  const handleSubmitAnswer = () => {};

  useEffect(() => {
    var tempArr = [];
    for (var key in question.answers) {
      tempArr.push(question.answers[key]);
    }
    setAnswers(tempArr);
  }, []);

  return (
    <div class="qa-card">
      <div>{`Q: ${question.question_body}`}</div>
      <div>{`by ${question.asker_name}, ${new Date(
        question.question_date
      )} | Helpful? Yes (${question.question_helpfulness})`}</div>
      <div>
        {answers.map((answer) => {
          return <Answer answer={answer} />;
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
        </form>
      ) : null}
    </div>
  );
};

export default Question;
