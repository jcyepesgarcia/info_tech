import React from 'react';
import './App.css';
import './assets/js/script';
import Header from './components/header/Header';
import WhatWeDo from './components/whatWeDo/WhatWeDo';
import Features from './components/features/Features';
import Packages from './components/packages/Packages';
import Projects from './components/projects/Projects';

function App() {

  return (
    <div className="App">
      <Header/>
      <WhatWeDo />
      <Features />
      <Packages/>
      <Projects/>
    </div>
  );
}

export default App;
