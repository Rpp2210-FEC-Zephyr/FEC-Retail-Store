import React, {useState, useEffect } from 'react';
import { BrowserRouter, Link, Routes, Route, Switch, HashRouter, Navigate, useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom'
import $ from 'jquery';
import App from './App.jsx'
import Bag from './components/Bag/Bag.jsx'
import Favorites from './components/Favorites/Favorites.jsx'
import Search from './components/Search/Search.jsx'
import Settings from './components/Settings/Settings.jsx'
const Popup = require('./Notification.js')
const Index = () =>{
  const [bag, setBag] = useState([])
  const navigate = useNavigate()

  const onBag = (Items) =>{
    setBag(Items)
    console.log('ITS SET', Items)

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
        <Route path ='/bag' element = {<Bag item = {bag} onDelete = {deleteBag}/>} />
        <Route path ='/favorites' element = {<Favorites />} />
        <Route path ='/search' element = {<Search />} />
        <Route path ='/settings' element = {<Settings />} />

      </Routes>



    )
  }

//export default App

ReactDOM.render(

  <BrowserRouter >
  <Index />
  </BrowserRouter>

, document.getElementById('app'))