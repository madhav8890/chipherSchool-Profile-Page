import React from 'react'
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

function generateData(count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = (i + 1).toString();
    var y =
    Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
  
    series.push({
      x: x,
      y: y
    });
    i++;
  }
  return series;
  }
export default class Heatmap extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
        
          series: [{
            name: '',
            data: generateData(40, {
              min: 0,
              max: 90
            })
          },
          {
            name: 'Mon',
            data: generateData(40, {
              min: 0,
              max: 90
            })
          },
          {
            name: '',
            data: generateData(40, {
              name:'jan',
              min: 0,
              max: 90
            })
          },
          {
            name: 'Wed',
            data: generateData(40, {
              min: 0,
              max: 90
            })
          },
          {
            name: '',
            data: generateData(40, {
              min: 0,
              max: 90
            })
          },
          {
            name: 'Fri',
            data: generateData(40, {
              min: 0,
              max: 90
            })
          },
          {
            name: '',
            data: generateData(40, {
              min: 0,
              max: 90
            })
          },
       
          ],
          options: {
            chart: {
              height: 250,
              type: 'heatmap',
            },
            dataLabels: {
              enabled: false
            },
            colors: ["#f3912e"],
            title: {
              text: 'CIPHER MAP'
            },
          },
        
        
        };
      }

    

      render() {
        return (
          

    <div id="chart" style={{padding:'20px', backgroundColor:'#edf2f7'}} >
<ReactApexChart options={this.state.options} series={this.state.series} type="heatmap" height={250} />
</div>
  )
}}