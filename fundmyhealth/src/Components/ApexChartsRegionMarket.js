import React from 'react';
import Chart from "react-apexcharts";

class Apex extends React.Component {
    constructor(props) {
      super(props);
      this.updateCharts =  this.updateCharts.bind(this);
      this.state = {
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
          }
        },
        series: [
          {
            name: "series-1",
            data: [10, 30, 25, 33, 49, 49, 60, 55]
          }
        ]
      };
    }

    updateCharts() {
        const max = 90;
        const min = 30;
        const newMixedSeries = [];
    
        this.state.series.forEach(s => {
          const data = s.data.map(() => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
          });
          newMixedSeries.push({ data: data, type: s.type });
        });
    
        this.setState({
          series: newMixedSeries,
        });
    }
  
    render() {
      return (
        <div className="app">
          <div className="row">
            <div className="mixed-chart">
            <Chart
                options={this.state.options}
                series={this.state.series}
                type="line"
                width="500"
            />
            </div>
            <p className="update-btn">
                <button onClick={this.updateCharts}>Update!</button>
                {/* <button onClick={this.selectRegionUSA}>USA</button>
                <button onClick={this.selectMarket}>NYSE</button>
                <button onClick={this.selectMarket}>AMEX</button>
                <button onClick={this.selectDrug}>Ativan</button> */}
            </p>
          </div>
        </div>
      );
    }
  }
  export default Apex;

