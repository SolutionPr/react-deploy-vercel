import "chart.js/auto";
import React from "react";
import { Bar } from "react-chartjs-2";

const ChartComponent = () => {
  //===========================================----Graph Data----=====================================

  const data = {
    labels: ["Apr, 27", "Apr, 29", "May, 01", "May, 04", "May, 07", "May, 10", "May, 13", "May, 16", "May, 19", "May, 22", "May, 25"],
    datasets: [
      {
        label: "run 1",
        borderWidth: 13,
        barPercentage: 0.5,
        backgroundColor: "#6fd392",
        data: [0, 0, 0, 0, 0, 0, 0, 1, 3, 0, 0],
      },
    ],
  };

  //===========================================----Graph Options----==================================

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        border: { dash: [4, 4] },
        grid: {
          display: true,
          color: (context, scale) => {
            const index = context.index;
            const ctx = context.chart.ctx;
            const chart = context.chart.chartArea;

            const { top, bottom } = chart;
            const axis = scale._context.scale.chart.scales.x;
            const gradient = ctx.createLinearGradient(0, top, 0, bottom);

            if (index === 0 || index === 1 || index === axis.ticks.length - 1) {
              gradient.addColorStop(0, "black");
              gradient.addColorStop(0.5, "#1f1f1f");
              gradient.addColorStop(1, "black");
              return gradient;
            } else {
              gradient.addColorStop(0, "black");
              gradient.addColorStop(0.5, "#777777");
              gradient.addColorStop(1, "black");
            }
            return gradient;
          },
        },
        ticks: {
          color: "#7a7a7a",
        },
      },
      y: {
        beginAtZero: true,
        border: { dash: [4, 4] },
        grid: {
          display: true,
          color: (context) => {
            const index = context.index;
            const ctx = context.chart.ctx;
            const chart = context.chart.chartArea;

            const { left, right } = chart;
            const gradient = ctx.createLinearGradient(left, 0, right, 0);

            if (index === 4) {
              gradient.addColorStop(0, "black");
              gradient.addColorStop(0.5, "#1f1f1f");
              gradient.addColorStop(0.4, "#535353");
              gradient.addColorStop(1, "#272727");
              return "transparent";
            } else {
              gradient.addColorStop(0, "black");
              gradient.addColorStop(0.5, "#777777");
              gradient.addColorStop(0.4, "#535353");
              gradient.addColorStop(1, "#272727");
            }
            return gradient;
          },
        },
        ticks: {
          min: 0,
          max: 3,
          stepSize: 0.75,
          color: "#7a7a7a",
          callback: (value) => value,
        },
        position: "right",
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  //==================================================================================================

  return (
    <>
      <div className="d-section">
        <div className="d-label">
          <div className="d">D</div>
          <div className="d active-d">7D</div>
        </div>
      </div>
      <div className="chart-container">
        <Bar data={data} options={options} />
      </div>
      <div className="data-section">
        <div>Data</div>
        <div className="labels">
          <div className="label run1">
            <span></span>run 1
          </div>
          <div className="label run2">
            <span></span>run 2
          </div>
        </div>
      </div>
    </>
  );
};

export default ChartComponent;
