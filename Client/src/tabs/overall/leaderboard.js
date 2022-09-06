import React, { useEffect, useState } from 'react';
import Axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';



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

      position: 'top',
          font: {
              family:'Sans-serif',             
              weight: 'bold',
              size:'10',
              position:'bottom'

          }
      }
  },

    title: {
      display: true,
      text: 'Overall Leading Board',
      
    }, 
  },
  maintainAspectRatio:false, 
  responsive: true,
  indexAxis: 'y',
  scales: {
    xAxes: {
      stacked: true,  
      ticks:
      {
        font: function (context) {
          var avgSize = Math.round((context.chart.height + context.chart.width) / 2);
          var size = Math.round(avgSize / 32);
          size = size > 12 ? 12 : size; // setting max limit to 12
          return {
              size: size,
              weight: 'bold'
          };
      },
      }
              
    },
    y: {
      
        ticks:
      {
        font: function (context) {
          var avgSize = Math.round((context.chart.height + context.chart.width) / 2);
          var size = Math.round(avgSize / 45);
          size = size > 12 ? 12 : size; // setting max limit to 12
          return {
              size: size,
              weight: 'bold'
          };
      },

    },

      stacked: true,
      grid: {
        display: false,
        borderColor: 'black',
     },
    
    },  
  },
};



const leader = () => {
  const [scores,setscores] = useState([]);
  useEffect(()=>{
    Axios.get('http://localhost:4000/leaderboard').then((response)=>{
            setscores(response.data);
        })
    setInterval(()=>{
        Axios.get('http://localhost:4000/leaderboard').then((response)=>{
            setscores(response.data);
        })
    },5000)
    
},[])
  const labels = ['Aryabhatta','Bhaskara','Maitreyi','Gargi', 'CHARAKA', 'SUSURUTA', 'KAUTILYA', 'VYASA', 'BRAHMAGUPTA', 'VARAHAMIHIRA', 'RAMANUJA','KAPILA'];
  const data = {
    labels,
    
    datasets: [
      {
        
        label: 'Sports',
        data: scores[1],
        backgroundColor:'#D79922',
        categoryPercentage: 1.1, // notice here 
        barPercentage: 0.8,
        
      },
      {
        label: 'Culty',
        data:  scores[2],
        backgroundColor: 'rgb(75, 192, 192)',
        categoryPercentage: 1.1, // notice here 
        barPercentage: 0.8,
      },
      {
        label: 'Techy',
        data: scores[3],
        backgroundColor: 'rgb(203, 16, 35)',
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
export default leader;