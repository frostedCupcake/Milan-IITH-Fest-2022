import * as React from "react";
import "../sass/main.css";
import logo1 from "../assets/sponsors/sk.png";
import logo2 from "../assets/sponsors/gouravs.png";
import logo3 from "../assets/sponsors/redbull.png";
import logo4 from "../assets/sponsors/pure.png";
import logo5 from "../assets/sponsors/sbi.png";
import logo6 from "../assets/sponsors/siang.png";
import logo7 from "../assets/sponsors/icic.png";

const Sponsors = () => {
  return (
    <section className="sponsors">
      <h2 className="heading-secondary sponsors__heading">Sponsors</h2>
      <div class="grid grid-3">
        <div
          class="card"
          style={{
            backgroundColor: "#1b1a17",
          }}
        >
          <h3 class="title">Sakthi</h3>
          <div class="square">
            <img class="square__image" src={logo1} alt="" />
          </div>
        </div>
        <div
          class="card"
          style={{
            backgroundColor: "#1b1a17",
          }}
        >
          <h3 class="title">gouravs</h3>
          <div class="square">
            <img class="square__image" src={logo2} alt="" />
          </div>
        </div>

        <div
          class="card"
          style={{
            backgroundColor: "#1b1a17",
          }}
        >
          <h3 class="title">Redbull</h3>
          <div class="square">
            <img class="square__image" src={logo3} alt="" />
          </div>
        </div>
        <div
          class="card"
          style={{
            backgroundColor: "#1b1a17",
          }}
        >
          <h3 class="title">Pure</h3>
          <div class="square">
            <img class="square__image" src={logo4} alt="" />
          </div>
        </div>

        <div
          class="card"
          style={{
            backgroundColor: "#1b1a17",
          }}
        >
          <h3 class="title">SBI</h3>
          <div class="square">
            <img class="square__image" src={logo5} alt="" />
          </div>
        </div>
        <div
          class="card"
          style={{
            backgroundColor: "#1b1a17",
          }}
        >
          <h3 class="title">Siang</h3>
          <div class="square">
            <img class="square__image" src={logo6} alt="" />
          </div>
        </div>
        <div
          class="card "
          style={{
            backgroundColor: "#1b1a17",
          }}
        >
          <h3 class="title">Icic</h3>
          <div class="square">
            <img class="square__image" src={logo7} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
