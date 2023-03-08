import React, {useState, useEffect } from 'react';
import { BrowserRouter, Link, Routes, Route, Switch, HashRouter, Navigate, useNavigate } from 'react-router-dom';
import { IoAddCircleOutline} from "react-icons/io5";
import { GiEagleEmblem} from "react-icons/gi";
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

<<<<<<< HEAD
        setStyle(data)
=======
       setData(data)
       setMain(data[2])




>>>>>>> 04a0696ce0abc10ccc2266a1eab24688131e3739
      }
    })
  }

<<<<<<< HEAD
  const getProducts = () =>{
    $.ajax({
      type: 'GET',
      url: '/Products',
      success: (data) =>{

       setData(data)
      }
    })
  }
=======



>>>>>>> 04a0696ce0abc10ccc2266a1eab24688131e3739



  useEffect(() =>{
<<<<<<< HEAD
    getStyles('71697');
    getProducts();
=======
    getProducts()
    Popup.Notify()


>>>>>>> 04a0696ce0abc10ccc2266a1eab24688131e3739
  }, [])


    return (
      <div>
<nav>
         <div class="logo">
            Zephyr Store
            <IconContext.Provider value={{ color: "white", size:"40px" }}>
            < GiEagleEmblem />
              </IconContext.Provider>

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
      <RelatedItems item = {style} getProducts = {getProducts} data = {data} getStyles = {getStyles}/>
      </div>
    )
  }

<<<<<<< HEAD
  //style contains the current product

//export default App

ReactDOM.render(
  <App />
, document.getElementById('app'))
=======
export default App
>>>>>>> 04a0696ce0abc10ccc2266a1eab24688131e3739
