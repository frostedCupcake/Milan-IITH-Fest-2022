import * as React from "react";
import "../sass/main.css";
import Section1 from "../components/Section1";
import Leaderboard from "../components/Leaderboard";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <div>
      <Section1 />
      <Leaderboard />
      <Carousel />
    </div>
  );
};

export default Home;
