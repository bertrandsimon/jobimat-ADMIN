import React from "react";
// import "./App.css";
import { useState, useEffect } from "react";
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false }); 

const ChartJobsByBranch = () => {
  const [jobsByBranch, setJobsByBranch] = useState([]);
  const [branch, setBranch] = useState([]);



  useEffect(() => {
    const getData = async () => {
      const url = "http://localhost:3000/stats/jobsByBranch";
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setJobsByBranch(Object.values(data.adherent));
        setBranch(Object.keys(data.adherent));
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
  ]
  const options = {
    chart: {
      type: 'bar',
      // height: 200,
      // width: 200,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories:branch,
    }
  };
 
    return (
        <div className="title">
        <h3 >TOP MAGASINS</h3>
        <div>
        <Chart
          options={options}
          series={series}
          type="bar"
          height={500}
          width={500}
        />
      </div>
      </div>
    );
  }


export default ChartJobsByBranch;
