import React from 'react'
import { Link } from 'react-router-dom';
import "./index.scss";
const index = () => {
  return (
    <div id="header">
      <div className="container">
   
        <Link to="/">
               
               <img
                 style={{ maxHeight: 50 }}
                 src="/img/logo.png"
                 alt="shopdi"
               />
         
           </Link>
 
      </div>
    </div>
  )
}

export default index
