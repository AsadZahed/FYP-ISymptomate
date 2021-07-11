// import Reaxt from 'react';

// export default function Analysis(){
//     return (
//         <div><h1>Analysis</h1></div>
//     )
// }

import React,{useEffect} from "react";
import axios from 'axios';
import Header from "../Navbar/header";
import ReactApexChart from "react-apexcharts";
import AnalysisTemplate from "./analysis-template";
import "../../styles.css";

export default function Analysis() {

  const options = {
    plotOptions: {
      bar: {
        dataLabels: {
          position: "top" // top, center, bottom
        }
      }
    },
   dataLabels: {
    enabled: true,
    formatter: function (val) {
      return Number(val).toLocaleString() ;
    },
    offsetY: -20,
    style: {
      fontSize: "12px",
      colors: ["#304758"]
    }
  },
 xaxis : {
    categories: [
      ' Actinic keratoses',
      'Basal cell carcinoma',
      ' lesions',
      'Dermatofibroma',
      'Melanocytic nevi',
      'Melanoma',
      'Vascular lesions'
    ],
    position: "bottom",
    labels: {
      offsetY: 0
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    crosshairs_: {
      fill: {
        type: "gradient",
        gradient: {
          colorFrom: "#D8E3F0",
          colorTo: "#BED1E6",
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5
        }
      }
    },
    tooltip: {
      enabled: false,
      offsetY: -35
    }
  },
   fill: {
    gradient: {
      shade: "light",
      type: "horizontal",
      shadeIntensity: 0.25,
      gradientToColors: undefined,
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [50, 0, 100, 100]
    }
  },
   yaxis : {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      show: true,
      formatter: function (val) {
        return Number(val).toLocaleString() + "%";
      }
    }
  },
   title : {
    text: "Skin cancer analysis men",
    floating: true,
    offsetY: 0,
    align: "center",
    style: {
      color: "#444"
    }
  },
   chart : {
    animations: {
      enabled: false
    }
  }

};
  const [series, setSeries] = React.useState([
    {
      name: "No of Skin Cancer Patients",
      data: [100, 100, 100, 100, 100, 100, 100]
    }
  ]);
  setTimeout(() => {
    setSeries([
      {
        name: "Effects",
        data: [49, 80, 50, 50, 50,50,50]
      }
    ]);
  }, 4000);

  // setTimeout(() => {
  //   setSeries([
  //     {
  //       name: "Effects",
  //       data: [28, 80, 50, 50, 50,50,50,]
  //     }
  //   ]);
  // }, 4000);


  const [patients, setPatients] = React.useState([]);
  var i=0;

  // useEffect(() => {


  //   axios.get("http://localhost:9000/users/totalPatients")
  //     .then((res, i) => {
  //       const patient = res.data;
  //       setPatients(patient)
  //     });
  // })
  // axios.get('http://localhost:9000/users/totalPatients', {
  //   headers: {
  //     'Access-Control-Allow-Origin': '*',
  //     'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  //   }
  // })
  //   .then((res) => {
  //     const patient = res.data;
  //     setPatients(patient)
  //     i=i+1
  //   })
  // })

  const type="line";

  return (
    <div style={{ backgroundColor: "#F8F8F8" }}>
      <Header />
      <div
        style={{
          paddingLeft: "12%",
          paddingRight: "12%",
          paddingTop: "5%",
          paddingBottom: "5%",
          textAlign: "center"
        }}
      >
        <div
          style={{
            border: "1px solid #DCDCDC",
            backgroundColor: "#fff",
            padding: "7%"
          }}
        >
          <div id="chart">
            {/* <ReactApexChart
              options={options}
              series={series}
              type="line"
              height="300"
            /> */}
            <AnalysisTemplate 
              options={options}
              series={series}
              type={type}
            />
          </div>
       
        <div id="chart" style={{boderTop: "1px solid black" }}>
            {/* <ReactApexChart
              options={options}
              series={series}
              type="line"
              height="300"
            /> */}
            <AnalysisTemplate 
              options={options}
              series={series}
              type="bar"
            />
          </div>
          <h2>Skin cancer Categories</h2>
        </div>
                
        {/* <ul>
        {patients.map(person => i++)}
        {i}
        </ul> */}
      </div>
      </div>

    
  );
}


