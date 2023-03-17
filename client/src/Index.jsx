import React, {useState, useEffect } from 'react';
import { BrowserRouter, Link, Routes, Route, Switch, HashRouter, Navigate, useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom'
import $ from 'jquery';
import App from './App.jsx'
const Popup = require('./Notification.jsx')
const Index = () =>{
  const [bag, setBag] = useState([])
  const navigate = useNavigate()

  const onBag = (Items) =>{
    setBag(Items)


  }


  const deleteBag = () =>{
    localStorage.removeItem("bag")
    setTimeout(function() {
      setBag(null)
      navigate('/')
    }, 5000);


  }


    return (

      <Routes>
        <Route path ='/' element = {<App setBag = {onBag}/>} />

      </Routes>



    )
  }

//export default App

ReactDOM.render(

  <BrowserRouter >
  <Index />
  </BrowserRouter>

, document.getElementById('app'))