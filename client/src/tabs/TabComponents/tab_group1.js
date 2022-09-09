import React, { useState } from "react";
import FirstTab from "../overall/leaderboard";
import SecondTab from "../overall/racebar";

const Tabs = () => {
  return (
    <div className="Tabs">
      <div className="outlet">
        <FirstTab />
      </div>
    </div>
  );
};
export default Tabs;
