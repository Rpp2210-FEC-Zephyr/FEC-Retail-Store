import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

const QuestionsSearch = ({ searchTerm, setSearchTerm }) => {
  return (
    <div>
      <input
        id="qa-search-bar"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        placeholder="Have a question? Search for answers…"
      ></input>
    </div>
  );
};

export default QuestionsSearch;
