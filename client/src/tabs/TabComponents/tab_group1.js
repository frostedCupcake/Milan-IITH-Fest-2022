import React, { useState } from "react";
import FirstTab from "../overall/leaderboard";
import SecondTab from "../overall/racebar";

const Tabs = () => {
  return (
    <div className="Tabs">
      <ul className="nav">
        <li
          className={activeTab === "tab1" ? "active" : ""}
          onClick={handleTab1}
        >
          leaderboard
        </li>
        <li
          className={activeTab === "tab2" ? "active" : ""}
          onClick={handleTab2}
        >
            BLOCKS RACE
        </li>
      </ul>

      <div className="outlet">
        {activeTab === "tab1" ? <FirstTab /> : <SecondTab />}
      </div>
    </div>
  );
};
export default Tabs;
