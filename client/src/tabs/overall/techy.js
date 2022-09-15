import React, { useEffect, useState } from "react";
import Axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    legend: {
      labels: {
        // This more specific font property overrides the global property

        position: "top",
        font: {
          family: "Sans-serif",
          weight: "bold",
          size: "10",
          position: "bottom",
        },
      },
    },

    title: {
      display: true,
      text: "Overall Leading Board",
    },
  },
  maintainAspectRatio: false,
  responsive: true,
  indexAxis: "y",
  scales: {
    xAxes: {
      stacked: true,
      ticks: {
        font: function (context) {
          var avgSize = Math.round(
            (context.chart.height + context.chart.width) / 2
          );
          var size = Math.round(avgSize / 32);
          size = size > 12 ? 12 : size; // setting max limit to 12
          return {
            size: size,
            weight: "bold",
          };
        },
      },
    },
    y: {
      ticks: {
        font: function (context) {
          var avgSize = Math.round(
            (context.chart.height + context.chart.width) / 2
          );
          var size = Math.round(avgSize / 45);
          size = size > 12 ? 12 : size; // setting max limit to 12
          return {
            size: size,
            weight: "bold",
          };
        },
      },

      stacked: true,
      grid: {
        display: false,
        borderColor: "black",
      },
    },
  },
};

const Leader = () => {
  const [scores, setscores] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:4000/techy").then((response) => {
      setscores(response.data);
    });
    setInterval(() => {
      Axios.get("http://localhost:4000/techy").then((response) => {
        setscores(response.data);
      });
    }, 5000);
  }, []);
  const labels = [
    "ARYABHATTA",
    "BHASKARA",
    "MAITREYI",
    "GARGI",
    "CHARAKA",
    "SUSRUTA",
    "KAUTILYA",
    "VYASA",
    "BRAHMAGUPTA",
    "VARAHAMIHIRA",
    "RAMANUJA",
    "KAPILA",
  ];
  const data = {
    labels,

    datasets: [
      {
        label: "Game Jam",
        data: scores[1],
        backgroundColor: "#eb1527",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "Robo-soccer",
        data: scores[2],
        backgroundColor: "#EEE8AA",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "Capture the flag",
        data: scores[3],
        backgroundColor: "#9ACD32",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "Hackathon",
        data: scores[4],
        backgroundColor: "#dceb15",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "Astronomy Quiz",
        data: scores[5],
        backgroundColor: "#6495ED",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "Ideathon",
        data: scores[6],
        backgroundColor: "rgb(103, 162, 23)",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "Codegolf",
        data: scores[7],
        backgroundColor: "#000080",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "Water Rocketry",
        data: scores[8],
        backgroundColor: "#8A2BE2",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "CAD",
        data: scores[9],
        backgroundColor: "#8B008B",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "RC Car Racing",
        data: scores[10],
        backgroundColor: "#C71585",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },

      {
        label: "Solve the case",
        data: scores[11],
        backgroundColor: "#FFC0CB",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
    ],
  };

  return (
    <div className="FirstTab">
      <div className="canvas-container">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};
export default Leader;
