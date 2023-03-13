import React, {useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import $ from 'jquery';
import QuestionsList from './QuestionsList.jsx';
import QuestionsSearch from './QuestionsSearch.jsx';
import QuestionAdd from './QuestionAdd.jsx';

const QuestionsAndAnswers = () =>{
  return (
    <div>
      <h1>Questions & Answers</h1>
      <QuestionsSearch />
      <QuestionsList />
      <QuestionAdd />
    </div>
  )
}

export default QuestionsAndAnswers;
