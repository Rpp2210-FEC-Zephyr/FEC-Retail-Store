import React, {useState, useEffect } from 'react';
import { BrowserRouter, Link, Routes, Route, Switch, HashRouter, Navigate, useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom'
import $ from 'jquery';
import { IconContext } from "react-icons";
import { GiEagleEmblem} from "react-icons/gi";

const Bag = () =>{



  const navigate = useNavigate()

  const getLocalStorage = () =>{
    const user = JSON.parse(localStorage.getItem('user'));
    console.log('USER', user)

    localStorage.setItem('dark-mode', true);
    const dark = localStorage.getItem('dark-mode');

    console.log('DARK', dark)

  }

  useEffect(() =>{

    getLocalStorage()




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
    Bag
    </div>
  )
}

export default Bag