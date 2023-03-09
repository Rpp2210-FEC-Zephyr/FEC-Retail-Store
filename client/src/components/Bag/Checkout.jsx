import React, {useState, useEffect } from 'react';
import { BrowserRouter, Link, Routes, Route, Switch, HashRouter, Navigate, useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom'
import $ from 'jquery';
import { IconContext } from "react-icons";
import { GiEagleEmblem} from "react-icons/gi";


const Checkout = ({check}) =>{
  const [total, setTotal] = useState(null)


  const onTotal = () =>{
    var sum = 0
    for (var i in check){

      sum += parseInt(check[i].cloth.original_price) * check[i].quant


    }
    setTotal(sum)
  }

  useEffect(() =>{
    if(check != undefined){
     onTotal()
    }

  }, [check])





    return (
      <div class ='checkout'>
        <div class = 'checkTitle'> CHECKOUT </div>
        <div class = 'checkFormat'> Item <div class = 'cost'> Cost</div></div>
        <ul>
        {check ?  check.map((item) => <li class = 'checkList'>{item.name} ({item.cloth.name}) x {item.quant}  <div class = 'total'> ${parseInt(item.cloth.original_price) * item.quant} ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ </div></li>) : null}
        </ul>
        <div class = 'checkTotal'> TOTAL ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ<div class = 'checkNumber'>{total ? `$ ${total}` : null}</div></div>
      </div>
    )
  }

export default Checkout