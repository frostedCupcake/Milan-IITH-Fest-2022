import * as React from "react";
import "../sass/main.css";
import logo1 from "../assets/sponsors/sk.png";
import logo2 from "../assets/sponsors/gouravs.png";
import logo3 from "../assets/sponsors/redbull.png";
import logo4 from "../assets/sponsors/pure.png";
import logo5 from "../assets/sponsors/sbi.png";
import logo6 from "../assets/sponsors/isthara.jpeg";
import logo7 from "../assets/sponsors/icic.png";
import logo8 from "../assets/sponsors/hdfc.png";

const Sponsors = () => {
  return (
    <section className="sponsors">
      <h2 className="heading-secondary sponsors__heading">Sponsors</h2>
      <div class="grid grid-3">
        <div
          class="card card__zoom"
          style={{
            backgroundColor: "#1b1a17",
          }}
        >
          <h3 class="title">Sbi</h3>
          <div class="square">
            <img class="square__image" src={logo5} alt="" />
          </div>
        </div>
        <div
          class="card card__zoom"
          style={{
            backgroundColor: "#1b1a17",
          }}
        >
          <h3 class="title ">pure ev</h3>
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
          <h3 class="title">Icici</h3>
          <div class="square">
            <img class="square__image" src={logo7} alt="" />
          </div>
        </div>
        <div
          class="card"
          style={{
            backgroundColor: "#1b1a17",
          }}
        >
          <h3 class="title">redbull</h3>
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
          <h3 class="title">isthara</h3>
          <div class="square">
            <img class="square__image" src={logo6} alt="" />
          </div>
        </div>
        <div
          class="card"
          style={{
            backgroundColor: "#1b1a17",
          }}
        >
          <h3 class="title">hdfc</h3>
          <div
            class="square"
            style={{
              width: "22rem",
            }}
          >
            <img class="square__image" src={logo8} alt="" />
          </div>
        </div>
        <div
          class="card"
          style={{
            backgroundColor: "#1b1a17",
          }}
        >
          <h3 class="title">Sakhti</h3>
          <div class="square">
            <img class="square__image" src={logo1} alt="" />
          </div>
        </div>
        <div
          class="card "
          style={{
            backgroundColor: "#1b1a17",
          }}
        >
          <h3 class="title">rgouras</h3>
          <div class="square">
            <img class="square__image" src={logo2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
