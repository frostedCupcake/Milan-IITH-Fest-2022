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
    Axios.get("http://localhost:4000/sports_girls").then((response) => {
      setscores(response.data);
    });
    setInterval(() => {
      Axios.get("http://localhost:4000/sports_girls").then((response) => {
        setscores(response.data);
      });
    }, 5000);
  }, []);
  var colorArray = [
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6",
    "#999966",
    "#99FF99",
    "#B34D4D",
    "#80B300",
    "#809900",
    "#E6B3B3",
    "#6680B3",
    "#66991A",
    "#FF99E6",
    "#CCFF1A",
    "#FF1A66",
    "#E6331A",
    "#33FFCC",
    "#66994D",
    "#B366CC",
    "#4D8000",
    "#B33300",
    "#CC80CC",
    "#66664D",
    "#991AFF",
    "#E666FF",
    "#4DB3FF",
    "#1AB399",
    "#E666B3",
    "#33991A",
    "#CC9999",
    "#B3B31A",
    "#00E680",
    "#4D8066",
    "#809980",
    "#E6FF80",
    "#1AFF33",
    "#999933",
    "#FF3380",
    "#CCCC00",
    "#66E64D",
    "#4D80CC",
    "#9900B3",
    "#E64D66",
    "#4DB380",
    "#FF4D4D",
    "#99E6E6",
    "#6666FF",
  ];
  const labels = ["Aryabhatta", "Bhaskara", "Maitreyi", "Gargi"];
  const data = {
    labels,

    datasets: [
      {
        label: "Cricket",
        data: scores[1],
        backgroundColor: "#f64432",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.6,
      },
      {
        label: "Football",
        data: scores[2],
        backgroundColor: "#FF7F50",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.6,
      },
      {
        label: "DodgeBall",
        data: scores[3],
        backgroundColor: "#FA8072",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.6,
      },
      {
        label: "VolleyBall",
        data: scores[4],
        backgroundColor: "#FF8C00",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.6,
      },
      {
        label: "Basketball",
        data: scores[5],
        backgroundColor: "#FFD700",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.6,
      },
      {
        label: "Badminton",
        data: scores[6],
        backgroundColor: "#EEE8AA",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.6,
      },
      {
        label: "Tennis",
        data: scores[7],
        backgroundColor: "#9ACD32",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.6,
      },
      {
        label: "Table Tennis",
        data: scores[8],
        backgroundColor: "#6B8E23",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.6,
      },
      {
        label: "Carrom",
        data: scores[9],
        backgroundColor: "#20B2AA",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.6,
      },
      {
        label: "Chess",
        data: scores[10],
        backgroundColor: "#40E0D0	",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.6,
      },
      {
        label: "Squash",
        data: scores[11],
        backgroundColor: "#6495ED",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.6,
      },
      {
        label: "Weightlifting",
        data: scores[12],
        backgroundColor: "#000080",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.6,
      },
      {
        label: "Esports",
        data: scores[13],
        backgroundColor: "#8A2BE2",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.6,
      },
      {
        label: "Aquatics",
        data: scores[14],
        backgroundColor: "#8B008B",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.6,
      },
      {
        label: "Athletics",
        data: scores[15],
        backgroundColor: "#C71585",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.6,
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
