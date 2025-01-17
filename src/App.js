import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage.component'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component.jsx';



function App()  {
  
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />

          </Switch>
        </BrowserRouter>
      </div>
    )
  
}

export default App;
