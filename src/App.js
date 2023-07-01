import React from 'react';
import './App.css';
import './assets/js/script';
import Header from './components/header/Header';
import WhatWeDo from './components/whatWeDo/WhatWeDo';

function App() {

  return (
    <div className="App">
      <Header/>
      <WhatWeDo />
    </div>
  );
}

export default App;
