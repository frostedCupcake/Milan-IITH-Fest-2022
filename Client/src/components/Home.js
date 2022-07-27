import * as React from "react";
import "../sass/main.css";
import Section1 from "../components/Section1";
import Leaderboard from "../components/Leaderboard";
import Carousel from "../components/Carousel";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Section1 />
      <Leaderboard />
      <Carousel />
    </div>
  );
};

export default Home;
