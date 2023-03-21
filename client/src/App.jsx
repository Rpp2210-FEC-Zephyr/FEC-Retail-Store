import React, {useState, useEffect } from 'react';
import { BrowserRouter, Link, Routes, Route, Switch, HashRouter, Navigate, useNavigate, useSearchParams} from 'react-router-dom';
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

  const [queryParameters] = useSearchParams()

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

  const getProductsID = (id) =>{
    $.ajax({
      type: 'GET',
      url: '/ProductsID',
      data: {id, id},
      success: (data) =>{

       setMain(data)




      }
    })
  }

  const Change = (obj) =>{
    setMain(obj)
  }

  const Outfits = (obj) =>{
    setOutfit(obj)
  }

  const URL = (id) =>{
    window.location.href = `/?ProdID=${id}`;
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
    if(queryParameters.get('ProdID')){
      getProductsID(queryParameters.get('ProdID'))
    }else{
      getProducts()
    }
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
      <RelatedItems main = {main} URL = {URL}/>
      <YourOutfits outfit = {outfit} URL = {URL}/>
      <QuestionsAndAnswers />
      <RatingsAndReviews currentProduct={reviews} count={reviewsCount}/>

      </div>
    )
  }

export default App
