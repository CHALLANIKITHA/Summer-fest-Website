import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero";
import About from "./Components/About/about";
import Sponsors from "./Components/Sponsors/sponsors";
import Team from "./Components/Team/team";
import Footer from "./Components/Footer/footer"

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Sponsors />
      <Team />
      <Footer />
    </>
  );
}

export default App;
