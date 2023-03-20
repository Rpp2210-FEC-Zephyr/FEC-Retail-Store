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
import YourOutfits from './components/YourOutfits.jsx'
const Popup = require('./Notification.jsx')


const App = () =>{
  const [data, setData] = useState([]);
  const [main, setMain] = useState([]);
  const [prodID, setProdID] = useState(71697);
  const [reviews, setReviews] = useState([]);
  const [reviewsCount, setReviewsCount] = useState(0);
  const [outfit , setOutfit] = useState(null)


  const navigate = useNavigate()


  const getProducts = () =>{
    $.ajax({
      type: 'GET',
      url: '/Products',
      success: (data) =>{

       setData(data)
       console.log('ALL DATA', data)
       setMain(data[0])




      }
    })
  }

  const Change = (obj) =>{
    setMain(obj)
  }

  const Outfits = (obj) =>{
    setOutfit(obj)
  }

  const getReviews = () => {
    $.ajax({
      type: 'GET',
      url: '/reviews',
      data: {
        product_id: prodID, // NEED VARIABLE PRODUCT_ID
        count: 10,
        sort: 'relevant',
      },
      success: (data) => {
        console.log('Data reviewed in the client side!', data);
        setReviews(data.results);
        setReviewsCount(data.count);
      }
    })
  }









  useEffect(() =>{
    getProducts()
    getReviews()
    Popup.Notify()


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

      </nav>
      <ProductOverview main = {main} Outfits = {Outfits}/>
      <RelatedItems main = {main} Change = {Change}/>
      <YourOutfits outfit = {outfit} Change = {Change}/>
      <QuestionsAndAnswers />
      <RatingsAndReviews currentProduct={reviews} count={reviewsCount}/>

      </div>
    )
  }

export default App
