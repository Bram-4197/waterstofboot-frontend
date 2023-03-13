import React from "react";
import "./Timeline.scss";
function Timeline() {
  return (
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
  );
}

export default Timeline;
