import React, {useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import $ from 'jquery';
import Question from './Question.jsx';

const QuestionsList = ({main}) => {
  const [questions, setQuestions] = useState([]);

  const getQuestions = (id) => {
    console.log(id)
    $.ajax({
      type: 'GET',
      url: '/Questions',
      // data: {id: id},
      data: {id: id},
      success: (data) => {
        setQuestions(data.results);
        console.log('ayo', data.results)
      }
    })
  }

  useEffect(() => {
    if (main.id) {
      getQuestions(main.id);
    }
  }, [main]);

  return (
    <div>
      <div>{questions.map((question) => {
        return <Question question={question}/>
      })}</div>
      <button>Load more answers</button>
    </div>
  )
}

export default QuestionsList;
