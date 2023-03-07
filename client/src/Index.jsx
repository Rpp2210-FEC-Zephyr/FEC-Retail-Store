import React, {useState, useEffect } from 'react';
import { BrowserRouter, Link, Routes, Route, Switch, HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom'
import $ from 'jquery';
import App from './App.jsx'
import Checkout from './components/Checkout/Checkout.jsx'
const Index = () =>{


    return (

      <Routes>
        <Route path ='/' element = {<App />} />
        <Route path ='/checkout' element = {<Checkout />} />

      </Routes>



    )
  }

//export default App

ReactDOM.render(

  <BrowserRouter >
  <Index />
  </BrowserRouter>

, document.getElementById('app'))