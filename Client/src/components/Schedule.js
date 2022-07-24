import * as React from "react";
import "../sass/main.css";

const Schedule = () => {
  return (
    <div className="Tabs2 events">
      <h2 className="heading-secondary leaderboard__heading">Schedule</h2>
      <ul className="nav2">
        <li className="active">Sports</li>
        <li className="tab2">Culty</li>
        <li className="tab3">Techy</li>
      </ul>
    </div>
  );
};

export default Schedule;
