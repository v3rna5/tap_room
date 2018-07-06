import React from 'react'
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

function Nav(){
  return(

      <div className="topnav">
        <a class="active" href="/">Home</a>
        <a href="/">Tap List</a>
        <div className="search-container">
        </div>
      </div>

  )
}

export default Nav
