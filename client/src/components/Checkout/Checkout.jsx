import React, {useState, useEffect } from 'react';
import { BrowserRouter, Link, Routes, Route, Switch, HashRouter, Navigate, useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom'
import $ from 'jquery';



const Checkout = () =>{





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
            <li><a class="active" href="#">Home</a></li>
            <li><a  href="#">Bag</a></li>
            <li><a href="#">Favorites</a></li>
            <li><a href="#">Search</a></li>
            <li><a href="#">Account Settings</a></li>
         </ul>
      </nav>
      Checkout !!
      </div>
    )
  }

export default Checkout