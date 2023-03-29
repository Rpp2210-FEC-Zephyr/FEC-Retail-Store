import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Question from "./Question.jsx";

const QuestionsList = ({ main, refreshKey }) => {
  const [questions, setQuestions] = useState([]);
  const [renderedQuestions, setRenderedQuestions] = useState([]);
  const [numberRenderedQuestions, setNumberRenderedQuestions] = useState(2);
  const [isInitialMount, setIsInitialMount] = useState(true);

  const getQuestions = (product_id) => {
    $.ajax({
      type: "GET",
      url: "/Questions",
      data: { product_id: product_id },
      success: (data) => {
        setQuestions(data.results);
      },
    });
  };

  const updateRenderedQuestions = () => {
    if (questions.length <= numberRenderedQuestions) {
      setRenderedQuestions(questions);
    } else {
      let tempArr = [];
      for (let i = 0; i < numberRenderedQuestions; i++) {
        tempArr.push(questions[i]);
      }
      setRenderedQuestions(tempArr);
    }
  };

  const handleLoadMoreQuestions = () => {
    setNumberRenderedQuestions(numberRenderedQuestions + 2);
  };

  useEffect(() => {
    if (main.id) {
      getQuestions(main.id);
    }
  }, [main.id, refreshKey]);

  useEffect(() => {
    if (isInitialMount) {
      setIsInitialMount(false);
    } else {
      updateRenderedQuestions();
    }
  }, [questions]);

  useEffect(() => {
    if (numberRenderedQuestions > 2) {
      updateRenderedQuestions();
    }
  }, [numberRenderedQuestions]);

  return (
    <div>
      <div>
        {renderedQuestions.map((question) => {
          return <Question question={question} />;
        })}
      </div>
      <button onClick={handleLoadMoreQuestions}>Load more questions</button>
    </div>
  );
};

export default QuestionsList;
