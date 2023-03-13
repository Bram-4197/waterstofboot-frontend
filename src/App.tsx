import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";
import HeroSections from "./Components/HeroSections";
import Header from "./Components/Header";
import { Divider } from "@chakra-ui/react";
import { Badge } from "@chakra-ui/react";

function App() {
  return (
    <div>
      <Header />
      <HeroSections />

      <div className="timeline-container">
        <div className="timeline-event">
          <div className="timeline-event-date">January 1, 2023</div>
          <div className="timeline-event-description">
            Event description goes here
          </div>
        </div>
        <div className="timeline-event">
          <div className="timeline-event-date">February 15, 2023</div>
          <div className="timeline-event-description">
            Event description goes here
          </div>
        </div>
        <div className="timeline-event">
          <div className="timeline-event-date">March 13, 2023</div>
          <div className="timeline-event-description">
            Event description goes here
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
