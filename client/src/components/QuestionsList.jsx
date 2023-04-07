import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Question from "./Question.jsx";
import QuestionAdd from "./QuestionAdd.jsx";

const QuestionsList = ({ main, searchTerm, refreshKey, setRefreshKey }) => {
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [renderedQuestions, setRenderedQuestions] = useState([]);
  const [numberRenderedQuestions, setNumberRenderedQuestions] = useState(2);

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

  const filterQuestions = () => {
    if (searchTerm.length >= 3) {
      let tempArr = [];
      for (let i = 0; i < questions.length; i++) {
        if (questions[i].question_body.includes(searchTerm)) {
          tempArr.push(questions[i]);
        }
      }
      setFilteredQuestions(tempArr);
    } else {
      setFilteredQuestions(questions);
    }
  };

  const updateRenderedQuestions = () => {
    if (filteredQuestions.length <= numberRenderedQuestions) {
      setRenderedQuestions(filteredQuestions);
    } else {
      let tempArr = [];
      for (let i = 0; i < numberRenderedQuestions; i++) {
        tempArr.push(filteredQuestions[i]);
      }
      setRenderedQuestions(tempArr);
    }
  };

  const handleMoreAnsweredQuestions = () => {
    setNumberRenderedQuestions(numberRenderedQuestions + 2);
  };

  useEffect(() => {
    if (main.id) {
      getQuestions(main.id);
    }
  }, [main.id, refreshKey]);

  useEffect(() => {
    filterQuestions();
  }, [questions, searchTerm]);

  useEffect(() => {
    updateRenderedQuestions();
  }, [filteredQuestions]);

  useEffect(() => {
    if (numberRenderedQuestions > 2) {
      updateRenderedQuestions();
    }
  }, [numberRenderedQuestions]);

  return (
    <div>
      <div id="qa-list">
        {renderedQuestions.map((question) => {
          return (
            <Question
              question={question}
              refreshKey={refreshKey}
              setRefreshKey={setRefreshKey}
            />
          );
        })}
      </div>
      <div class="flex">
        {numberRenderedQuestions < questions.length ? (
          <button
            class="qa-more-questions"
            onClick={handleMoreAnsweredQuestions}
          >
            MORE ANSWERED QUESTIONS
          </button>
        ) : null}

        <QuestionAdd
          main={main}
          refreshKey={refreshKey}
          setRefreshKey={setRefreshKey}
        />
      </div>
    </div>
  );
};

export default QuestionsList;
