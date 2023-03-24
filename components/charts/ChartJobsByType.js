import React from "react";
// import "./App.css";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ChartJobsByType = () => {
  const [jobsByTypes, setJobsByTypes] = useState([]);
  const [type, setType] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const url = "https://jobimat-backend-final.vercel.app/stats/jobsByType";
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

  const options = {
    series: jobsByTypes,
    labels: type,
    legend: { position: "bottom" },
    chart: {
      type: "polarArea",
    },
    stroke: {
      colors: ["#fff"],
    },
    fill: {
      opacity: 0.8,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: "100%",
          },
          legend: {
            position: "top",
          },
        },
      },
    ],
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h3>ANNONCES PAR TYPES</h3>
      <div>
        <Chart
          options={options}
          series={options.series}
          type="polarArea"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default ChartJobsByType;
