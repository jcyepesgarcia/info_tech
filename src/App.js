import React from 'react';
import './App.css';
import './assets/js/script';
import Header from './components/header/Header';
import WhatWeDo from './components/whatWeDo/WhatWeDo';
import Features from './components/features/Features';
import Packages from './components/packages/Packages';
import Projects from './components/projects/Projects';
import Team from './components/team/Team';

function App() {

  return (
    <div className="App">
      <Header/>
      <WhatWeDo />
      <Features />
      <Packages/>
      <Projects/>
      <Team/>
    </div>
  );
}

export default App;
