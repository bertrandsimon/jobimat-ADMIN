import React from "react";
// import "./App.css";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Charts = () => {
  const [offersGlobal, setOffersGlobal] = useState([]);
  const [offersTop, setOffersTop] = useState([]);
  const [offersApplied, setOffersApplied] = useState([]);
  const [date, setDate] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const url = "https://jobimat-backend-final.vercel.app/stats/perYears";
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        setOffersGlobal(Object.values(data.sortedJobs.all));
        setOffersTop(Object.values(data.sortedJobs.top));
        setOffersApplied(Object.values(data.sortedJobs.filled));
        setDate(Object.keys(data.sortedJobs.all));
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
      horizontalAlign: "center",
      // offsetY: 10,
      // offsetX: -300,
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
      categories: date,
    },
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <h3>OFFRES GEDIMAT</h3>
      <div style={{ width: "100%", height: "100%" }}>
        <Chart
          options={options}
          series={series}
          type="line"
          // width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default Charts;
