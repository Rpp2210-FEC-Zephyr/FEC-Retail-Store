import React, {useState, useEffect } from 'react';
import { IoAddCircleOutline} from "react-icons/io5";
import { GiHamburgerMenu} from "react-icons/gi";
import { IconContext } from "react-icons";
import ReactDOM from 'react-dom'
import $ from 'jquery';
import ProductOverview from './components/ProductOverview.jsx';
import RatingsAndReviews from './components/RatingsAndReviews.jsx';
import QuestionsAndAnswers from './components/QuestionsAndAnswers.jsx';
import RelatedItems from './components/RelatedItemsAndOutfitCreation.jsx';


const App = () =>{

  const [data, setData] = useState([])
  const [main, setMain] = useState([])


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



  }, [])




    return (
      <div>
          <div class = 'menu'>
         <div class="dropdown">
         <IconContext.Provider value={{ color: "#40D3DC", size:"40px" }}>
  <span><GiHamburgerMenu /></span>
  </IconContext.Provider>
  <div class="dropdown-content">
    <p class = 'nav'>Checkout</p>
    <p class = 'nav'> Search</p>
  </div>
  </div>

</div>
      <ProductOverview main = {main}/>
      <RatingsAndReviews />
      <QuestionsAndAnswers />
      <RelatedItems />
      </div>
    )
  }

export default App
