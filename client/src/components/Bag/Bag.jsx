import React, {useState, useEffect } from 'react';
import { BrowserRouter, Link, Routes, Route, Switch, HashRouter, Navigate, useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom'
import { IoAddCircleOutline} from "react-icons/io5";
import { GiEagleEmblem} from "react-icons/gi";
import { IconContext } from "react-icons";
import $ from 'jquery';
import Showcase from './Showcase.jsx'
import Checkout from './Checkout.jsx'
const Popup = require('../Notify.js')
const Bag = ({item, onDelete}) =>{



  const navigate = useNavigate()


  useEffect(() =>{
    console.log('BAG ITEM', item)
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
         <input type="checkbox" id="click" />
         <label for="click" class="menu-btn" >
         <i class="fas fa-bars"></i>
         </label>
         <ul>
         <li onClick = {() =>{navigate('/')}}><a  href="#">Home</a></li>
            <li onClick = {() =>{navigate('/bag')}}><a  class="active" href="#">Bag</a></li>
            <li onClick = {() =>{navigate('/favorites')}} ><a href="#">Favorites</a></li>
            <li onClick = {() =>{navigate('/search')}}><a href="#">Search</a></li>
            <li onClick = {() =>{navigate('/settings')}}><a href="#">Account Settings</a></li>
         </ul>
      </nav>
      <div class = 'bagOverview'>
      <Showcase show = {item}/>
      </div>
      <div class = 'checkOverview'>
        <Checkout check = {item} onDelete = {onDelete}/>
      </div>

    </div>
  )
}

export default Bag