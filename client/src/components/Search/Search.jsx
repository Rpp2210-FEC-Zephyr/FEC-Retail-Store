import React, {useState, useEffect } from 'react';
import { BrowserRouter, Link, Routes, Route, Switch, HashRouter, Navigate, useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom'
import $ from 'jquery';
import { IconContext } from "react-icons";
import { GiEagleEmblem} from "react-icons/gi";
const Search = () =>{



  const navigate = useNavigate()

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
            <li onClick = {() =>{navigate('/bag')}}><a  href="#">Bag</a></li>
            <li onClick = {() =>{navigate('/favorites')}} ><a href="#">Favorites</a></li>
            <li onClick = {() =>{navigate('/search')}}><a  class="active" href="#">Search</a></li>
            <li onClick = {() =>{navigate('/settings')}}><a href="#">Account Settings</a></li>
         </ul>
      </nav>
    Search
    </div>
  )
}

export default Search