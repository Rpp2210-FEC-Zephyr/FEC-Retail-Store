import React, {useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import $ from 'jquery';
import Answer from './Answer.jsx';

const Question = ({question}) => {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    var tempArr = [];
    for (var key in question.answers) {
      tempArr.push(question.answers[key]);
    }
    setAnswers(tempArr);
  }, []);

  return (
    <div>
      <div>{`Q: ${question.question_body}`}</div>
      <div>{`by ${question.asker_name}, ${new Date(question.question_date)} | Helpful? Yes (${question.question_helpfulness})`}</div>
      <div>{answers.map((answer) => {
        return <Answer answer={answer} />
      })}</div>
    </div>
  )
}

export default Question;
