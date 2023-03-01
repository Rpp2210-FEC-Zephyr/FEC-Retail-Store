import React, {useState, useEffect } from 'react';
import { BrowserRouter, Link, Routes, Route, Switch, HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom'
import $ from 'jquery';
import Index from './Index.jsx'



const App = () =>{


    return (

      <Routes>
        <Route path ='/' element = {<Index/>} />
      </Routes>



    )
  }

//export default App

ReactDOM.render(

  <BrowserRouter >
  <App />
  </BrowserRouter>

, document.getElementById('app'))