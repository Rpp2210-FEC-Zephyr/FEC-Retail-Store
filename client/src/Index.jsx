import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Link,
  Routes,
  Route,
  Switch,
  HashRouter,
  Navigate,
  useNavigate,
} from "react-router-dom";
import ReactDOM from "react-dom";
import $ from "jquery";
import App from "./App.jsx";
const Popup = require("./Notification.jsx");
const Index = () => {
  const navigate = useNavigate();
  const [main, setMain] = useState(null);

  return (
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  );
};

//export default App

ReactDOM.render(
  <BrowserRouter>
    <Index />
  </BrowserRouter>,

  document.getElementById("app")
);
