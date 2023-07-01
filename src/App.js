import React from 'react';
import './App.css';
import './assets/js/script';
import Header from './components/header/Header';
import WhatWeDo from './components/whatWeDo/WhatWeDo';
import Features from './components/features/Features';

function App() {

  return (
    <div className="App">
      <Header/>
      <WhatWeDo />
      <Features />
    </div>
  );
}

export default App;
