import React, {useState, useEffect } from 'react';
import { BrowserRouter, Link, Routes, Route, Switch, HashRouter, Navigate, useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom'
import $ from 'jquery';
import { IconContext } from "react-icons";
import { FaMoneyCheckAlt} from "react-icons/fa";

const Popup = require('../Notify.js')

const Checkout = ({check, onDelete}) =>{
  const [total, setTotal] = useState(null)


  const onTotal = () =>{
    var sum = 0
    for (var i in check){

      sum += parseInt(check[i].cloth.original_price) * check[i].quant


    }
    setTotal(sum)
  }

  const deleteNotify = () =>{
    Popup.Alert("success")
    Popup.Alert("info")

  }

  const onPurchase = () =>{

    if(check != null){
      if(check.length != 0){
        onDelete()
        deleteNotify()
      }else{
        Popup.Alert("error")
      }

    }else{
      Popup.Alert("error")
    }
  }

  useEffect(() =>{
    if(check != undefined){
     onTotal()
    }

  }, [check])





    return (
      <div class ='checkout'>
        <ul class="notifications"></ul>
        <div class = 'checkTitle'> ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤCHECKOUT </div>
        <div class = 'checkFormat'> Items <div class = 'cost'> Cost</div></div>
        <ul>
        {check ?  check.map((item) => <li class = 'checkList'>{item.name} ({item.cloth.name}) x {item.quant}  <div class = 'total'> ${parseInt(item.cloth.original_price) * item.quant} ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ </div></li>) : null}
        </ul>
        <div class = 'checkTotal'> TOTAL ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ<div class = 'checkNumber'>{total ? `$ ${total}` : null}</div></div>
        <button class = 'Add buttons btn' onClick = {() =>{onPurchase()}}>Purchase <div>
          <FaMoneyCheckAlt />
          </div></button>

      </div>
    )
  }

export default Checkout