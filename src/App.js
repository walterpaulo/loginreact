import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import Header from './components/Herder'
import Footer from './components/Footer'
import { Routes } from './Routes';

function App(){
  return (
      <BrowserRouter>
          <Header/>
          
          <Routes/>

          <Footer/>
      
      </BrowserRouter>
  );
}

export default App;