// import Reaxt from 'react';

// export default function Analysis(){
//     return (
//         <div><h1>Analysis</h1></div>
//     )
// }

import React,{useEffect} from "react";
import axios from 'axios';
import Header from "../../Navbar/header";
import ReactApexChart from "react-apexcharts";

import "../../../styles.css";

export default function AnalysisTemplate(props) {
  return (
          <div id="chart">
            <ReactApexChart
              options={props.options}
              series={props.series}
              type={props.type}
              height="300"
            />
          </div>

  );
}


