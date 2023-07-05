import React from "react";
import "./App.css";
import "./assets/js/script";
import Header from "./components/header/Header";
import WhatWeDo from "./components/whatWeDo/WhatWeDo";
import Features from "./components/features/Features";
import Packages from "./components/packages/Packages";
import Projects from "./components/projects/Projects";
import Team from "./components/team/Team";
import Support from "./components/support/Support";
import Footer from "./components/footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  offset: 120, // offset (in px) from the original trigger point
  delay: 500, // values from 0 to 3000, with step 50ms
  duration: 3000, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

function App() {
  return (
    <div className="App">
      <Header />
      <WhatWeDo />
      <Features />
      <Packages />
      <Projects />
      <Team />
      <Support />
      <Footer />
    </div>
  );
}

export default App;
