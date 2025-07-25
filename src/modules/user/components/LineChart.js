import React from "react";
import { cn } from "../../../utls/utlis";
import { Chart as Chartjs, defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import revenueData from "../../../data/revenueData.json";

defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "center";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "blue";
defaults.plugins.title.padding = 15;

const LineChart = React.forwardRef(
  (
    {
      className,

      ...props
    },
    ref
  ) => {
    return (
      <div>
        <div className=" flex  ">
          <div class=" rounded-xl h-full shadow-lg "></div>
          <Line
            style={{ height: "380px" }}
            data={{
              labels: revenueData.map((data) => data.Label),
              datasets: [
                {
                  label: "Revenue",
                  data: revenueData.map((data) => data.revenue),
                  backgroundColor: "#064FF0",
                  borderColor: "#064FF0",
                },
                {
                  label: "Cost",
                  data: revenueData.map((data) => data.cost),
                  backgroundColor: "#FF3030",
                  borderColor: "#FF3030",
                },
              ],
            }}
            options={{
              plugins: {
                title: { text: "Sales" },
              },
            }}
          ></Line>
        </div>
      </div>
    );
  }
);

LineChart.displayName = "LineChart";

export { LineChart };
