import React, {useState, useEffect } from 'react';
import { BrowserRouter, Link, Routes, Route, Switch, HashRouter, Navigate, useNavigate } from 'react-router-dom';
import { IoAddCircleOutline} from "react-icons/io5";
import { GiHamburgerMenu} from "react-icons/gi";
import { IconContext } from "react-icons";
import ReactDOM from 'react-dom'
import $ from 'jquery';
import ProductOverview from './components/ProductOverview.jsx';
import RatingsAndReviews from './components/RatingsAndReviews.jsx';
import QuestionsAndAnswers from './components/QuestionsAndAnswers.jsx';
import RelatedItems from './components/RelatedItemsAndOutfitCreation.jsx';
const Popup = require('./Notification.js')


const App = () =>{
  const [data, setData] = useState([])
  const [main, setMain] = useState([])

  const navigate = useNavigate()
  const getProducts = () =>{
    $.ajax({
      type: 'GET',
      url: '/Products',
      success: (data) =>{

       setData(data)
       setMain(data[0])




      }
    })
  }





  useEffect(() =>{
    getProducts()
    Popup.Notify()


  }, [])




    return (
      <div>
<nav>
         <div class="logo">
            Zephyr Store
         </div>
         <input type="checkbox" id="click" />
         <label for="click" class="menu-btn" >
         <i class="fas fa-bars"></i>
         </label>
         <ul>
            <li onClick = {() =>{navigate('/')}}><a class="active" href="#">Home</a></li>
            <li onClick = {() =>{navigate('/bag')}}><a  href="#">Bag</a></li>
            <li onClick = {() =>{navigate('/favorites')}} ><a href="#">Favorites</a></li>
            <li onClick = {() =>{navigate('/search')}}><a href="#">Search</a></li>
            <li onClick = {() =>{navigate('/settings')}}><a href="#">Account Settings</a></li>
         </ul>
      </nav>
      <ProductOverview main = {main}/>
      <RatingsAndReviews />
      <QuestionsAndAnswers />
      <RelatedItems />
      </div>
    )
  }

export default App
