import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import HeroSections from "./Components/HeroSections";
import Header from "./Components/Header";
import { Divider } from "@chakra-ui/react";

function App() {
  return (
    <div>
      <Header />

      <HeroSections />
    </div>
  );
}

export default App;
