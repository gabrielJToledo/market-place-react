import './App.css';
import { Routes, Route } from 'react-router-dom';
import React from 'react'

import Header from './components/template/Header';
import ProductListing from './components/template/ProductListing';

function App() {
  return (
    <>
      <Header/>
        <Routes>
          <Route path="/" exact element={<ProductListing/>}/>
          <Route path="/product/:productId"/>
          <Route>404 Not Found</Route>
        </Routes>
    </>
  );
}

export default App;
