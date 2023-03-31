import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import QuestionsList from "./QuestionsList.jsx";
import QuestionsSearch from "./QuestionsSearch.jsx";
import QuestionAdd from "./QuestionAdd.jsx";

const QuestionsAndAnswers = ({ main }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [refreshKey, setRefreshKey] = useState(true);

  return (
    <div id="qa-main">
      <h1>Questions & Answers</h1>
      <QuestionsSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <QuestionsList
        main={main}
        searchTerm={searchTerm}
        refreshKey={refreshKey}
        setRefreshKey={setRefreshKey}
      />
      <QuestionAdd
        main={main}
        refreshKey={refreshKey}
        setRefreshKey={setRefreshKey}
      />
    </div>
  );
};

export default QuestionsAndAnswers;
