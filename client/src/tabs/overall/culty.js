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
    Axios.get("http://localhost:4000/culty").then((response) => {
      setscores(response.data);
    });
    setInterval(() => {
      Axios.get("http://localhost:4000/culty").then((response) => {
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
    "SUSURUTA",
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
        label: "Solo Dance",
        data: scores[1],
        backgroundColor: "#C71585",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "Duo-Trio Dance",
        data: scores[2],
        backgroundColor: "#8B008B",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "Group Dance",
        data: scores[3],
        backgroundColor: "#8A2BE2",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "Drama",
        data: scores[4],
        backgroundColor: "#000080",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "Photography",
        data: scores[5],
        backgroundColor: "#6495ED",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "Low effort Comp",
        data: scores[6],
        backgroundColor: "#40E0D0",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "BMC Codenames",
        data: scores[7],
        backgroundColor: "#20B2AA",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "Dumb Charades",
        data: scores[8],
        backgroundColor: "#6B8E23",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "General Quiz",
        data: scores[9],
        backgroundColor: "#9ACD32",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "Not so sorry",
        data: scores[10],
        backgroundColor: "#EEE8AA",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "Bands",
        data: scores[11],
        backgroundColor: "#9ACD32",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "Solo Sing",
        data: scores[12],
        backgroundColor: "#6B8E23",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },

      {
        label: "Poetry",
        data: scores[13],
        backgroundColor: "#6495ED",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "Junk Art",
        data: scores[14],
        backgroundColor: "#000080",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "Navarasa",
        data: scores[15],
        backgroundColor: "#8A2BE2",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "Rap",
        data: scores[16],
        backgroundColor: "#8B008B",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "Treasure Hunt",
        data: scores[17],
        backgroundColor: "#C71585",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "Fashion show",
        data: scores[18],
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
