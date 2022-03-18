import React from "react";
import { Route, Routes } from "react-router-dom";
import { StatisticsBtn } from "./StatisticsBtn/StatisticsBtn";
import { BarChart } from "./StatisticsChart/BarChart";
import "chart.js/auto";
import { SecondPieChart } from "./StatisticsChart/SecondPieChart";

export const StatisticsRoute = () => {
  return (
    <div>
      <StatisticsBtn />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "150px",
        }}
      >
        <BarChart />
        <SecondPieChart />
      </div>
    </div>
  );
};
