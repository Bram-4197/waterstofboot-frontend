import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import HeroSections from "./Components/HeroSections";
import Header from "./Components/Header";
import { Divider } from "@chakra-ui/react";
import { Badge } from "@chakra-ui/react";
import Home from "./Page/Home";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
