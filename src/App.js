/* eslint-disable */

import React, {useState} from 'react';
import './App.css';

import Header from './Layout/header';
import Footer from './Layout/footer';

import Main from './pages/main';
import Main_en from './pages/main_en'


import Tthing from './pages/tthing';
import Tthing_en from './pages/tthing _en.js';

import {Link , Route , Switch} from 'react-router-dom';
import member from './pages/member';
import member_en from './pages/member_en';

function App() {

  return (
    <div className="App">
      <Route exact path="/" component={Main}></Route>
      <Route path="/en" component={Main_en}></Route>

      <Route path="/member" component={member}></Route>
      <Route path="/member_en" component={member_en}></Route>

      <Route path="/tthing" component={Tthing}></Route>
      <Route path="/tthing_en" component={Tthing_en}></Route>
      </div>

  );

}

export default App;
