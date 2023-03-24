import React from "react";
// import "./App.css";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ChartJobsByBranch = () => {
  const [jobsByBranch, setJobsByBranch] = useState([]);
  const [branch, setBranch] = useState([]);

  // useEffect(() => {
  //   const getData = async () => {
  //     const url = "https://jobimat-backend-final.vercel.app/stats/jobsByBranch";
  //     try {
  //       const response = await fetch(url);
  //       const data = await response.json();
  //       console.log(data);
  //       setJobsByBranch(Object.values(data.adherent));
  //       setBranch(Object.keys(data.adherent));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getData();
  // }, []);

  useEffect(() => {
    const getData = async () => {
      const url = "https://jobimat-backend-final.vercel.app/stats/jobsByBranch";
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        const jobs = Object.values(data.adherent).slice(0, 10); // limit to 10 results
        const branches = Object.keys(data.adherent).slice(0, 10); // limit to 10 results
        setJobsByBranch(jobs);
        setBranch(branches);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const series = [
    //data on the y-axis
    {
      name: "Annonces",
      type: "bar",
      data: jobsByBranch,
    },
  ];
  const options = {
    chart: {
      type: "bar",
      // height: 200,
      // width: 200,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
      style: {
        fontSize: "9px",
        colors: ["#fff"],
      },
    },

    xaxis: {
      categories: branch,
      dataLabels: {
        style: {
          fontSize: 4,
        },
      },
    },
  };

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <h4 style={{ fontSize: '16px', color: 'grey', textTransform: 'uppercase' }}>TOP 10 MAGASINS</h4>
      <div style={{ height: "95%", width: "100%" }}>
        <Chart
          options={options}
          series={series}
          type="bar"
          height="100%"
          // width="100%"
        />
      </div>
    </div>
  );
};

export default ChartJobsByBranch; 