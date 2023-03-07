import React, {useState, useEffect } from 'react';
import { BrowserRouter, Link, Routes, Route, Switch, HashRouter, Navigate, useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom'
import $ from 'jquery';
import App from './App.jsx'
import Bag from './components/Bag/Bag.jsx'
import Favorites from './components/Favorites/Favorites.jsx'
import Search from './components/Search/Search.jsx'
import Settings from './components/Settings/Settings.jsx'
const Index = () =>{


    return (

      <Routes>
        <Route path ='/' element = {<App />} />
        <Route path ='/bag' element = {<Bag />} />
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