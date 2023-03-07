import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const ChartJobsByType = () => {
  const [jobsByTypes, setJobsByTypes] = useState([]);
  const [type, setType] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const url = "http://localhost:3000/stats/jobsByType";
      try {
        const response = await fetch(url);
        const data = await response.json();
        setJobsByTypes(Object.values(data.jobsByType));
        setType(Object.keys(data.jobsByType));
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const options = 
  {
    series:jobsByTypes,
    labels:type,
    chart: {
    type: 'polarArea',
  },
  stroke: {
    colors: ['#fff']
  },
  fill: {
    opacity: 0.8
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
  }; 
  

  return (
    <div id="chart">
    <h3>ANNONCES PAR TYPES</h3>
    <div>
    <Chart
        options={options}
        series={options.series}
        type="polarArea"
        width="400"
        height="400"
      />
    </div>
  </div>
  );
};

export default ChartJobsByType;
