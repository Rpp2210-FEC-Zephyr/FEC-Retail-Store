import React, {useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import $ from 'jquery';
import Question from './Question.jsx';

const QuestionsList = () =>{
  return (
    <div>
      Questions List
      <Question />
      <button>Load more answers</button>
    </div>
  )
}

export default QuestionsList;
