import React from "react";
// import "./App.css";
import { useState, useEffect } from "react";

// import dynamic from 'next/dynamic'
// const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

// import Chart from "react-apexcharts";

const Charts = () => {
  const [offersGlobal, setOffersGlobal] = useState([]);
  const [offersTop, setOffersTop] = useState([]);
  const [offersApplied, setOffersApplied] = useState([]);
  const [date, setDate] = useState([]);

 

  useEffect(() => {
    const getData = async () => {
      const url = "http://localhost:3000/stats/job/stat";
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        
        setOffersGlobal(Object.values(data.allOffersByYear.all));
        setOffersTop(Object.values(data.allOffersByYear.top));
        setOffersApplied(Object.values(data.allOffersByYear.applied));
        setDate(Object.keys(data.allOffersByYear.all));
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const series = [
    {
      name: "Globales",
      type: "area",
      data: offersGlobal,
    },
    {
      name: "Nouvelles",
      type: "column",
      data: offersTop,
    },
    {
      name: "Pourvues",
      type: "column",
      data: offersApplied,
    },
  ];
  const options = {
    chart: {
      height: 350,
      type: "line",
      stacked: false,
      toolbar: { show: true },
    },
    stroke: {
      width: [3, 2, 2],
      curve: "smooth",
    },
    plotOptions: {
      bar: {
        columnWidth: "50%",
      },
    },

    colors: ["#C9DCFF", "#E63622", "#002466"],
    fill: {
      opacity: [0.25, 0.75, 0.75],
      gradient: {
        inverseColors: false,
        shade: "light",
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100],
      },
    },
    markers: {
      size: 0,
    },
    legend: {
      position: "top",
      offsetY: 10,
      offsetX: -300,
    },
    yaxis: {
      title: {
        text: "Nombre d'offres",
      },
      min: 0,
    },
    xaxis: {
      // type: 'datetime',
      title: "Années",
      categories:date,
    },
  };
  return (
    <div id="chart">
      <h3>OFFRES GEDIMAT</h3>
      <div>
        <Chart
          options={options}
          series={series}
          type="line"
          width="800"
          height="400"
        />
      </div>
    </div>
  );
};

export default Charts;