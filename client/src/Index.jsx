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
  const [bag, setBag] = useState([])

  const onBag = (Items) =>{
    setBag(Items)
    console.log('ITS SET', Items)

  }


    return (

      <Routes>
        <Route path ='/' element = {<App setBag = {onBag}/>} />
        <Route path ='/bag' element = {<Bag item = {bag}/>} />
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