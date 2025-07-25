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

const ExAndNutLineChart = React.forwardRef(
  (
    {
      className,

      ...props
    },
    ref
  ) => {
    return (
      <div>
        <div className=" flex  max-h-40  ">
          <div class=" rounded-xl h-full shadow-lg "></div>
          <Line
            style={{ height: "380px" }}
            data={{
              labels: revenueData.map((data) => data.Label),
              datasets: [
                {
                  label: "",
                  data: revenueData.map((data) => data.revenue),
                  backgroundColor: "#007EFE",
                  borderColor: "#007EFE",
                },
              ],
            }}
            options={{
              plugins: {
                legend: {
                  display: false,
                },
                title: {
                  text: "Body Weight",
                  color: "black",
                  display: false,
                },
              },
            }}
          ></Line>
        </div>
      </div>
    );
  }
);

ExAndNutLineChart.displayName = "ExAndNutLineChart";

export { ExAndNutLineChart };
