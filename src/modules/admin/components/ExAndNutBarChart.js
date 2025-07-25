import React from "react";
import { cn } from "../../../utls/utlis";
import { Chart as Chartjs, defaults } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import revenueData from "../../../data/nuitrition.json";
import { CustomText } from "../../common/components/CustomText";

defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "center";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "blue";
defaults.plugins.title.padding = 15;

const ExAndNutBarChart = React.forwardRef(
  (
    {
      className,

      ...props
    },
    ref
  ) => {
    return (
      <div>
        <div className=" flex px-5 max-h-48   ">
          <div class=" rounded-xl h-full shadow-lg "></div>

          <Bar
            style={{ height: "380px" }}
            data={{
              labels: revenueData.map((data) => data.Label),
              datasets: [
                {
                  label: "In Zone",
                  data: revenueData.map((data) => data.inZone),
                  backgroundColor: "#85d996",
                  borderColor: "#85d996",
                  order: 2,
                },
                {
                  label: "Under",
                  data: revenueData.map((data) => data.under),
                  backgroundColor: "#fce994",
                  borderColor: "#fce994",
                  order: 2,
                },
                {
                  label: "Over",
                  data: revenueData.map((data) => data.over),
                  backgroundColor: "#ed6772",
                  borderColor: "#ed6772",
                  order: 2,
                },
                {
                  label: "Cals Burned",
                  data: revenueData.map((data) => data.calsBurned),

                  borderColor: "#adadad",
                  order: 2,
                },
                {
                  label: "",
                  data: revenueData.map((data) => data.line),
                  borderColor: "rgb(75, 192, 192)",
                  type: "line",
                  order: 1,
                  borderDash: [5, 5],
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
          ></Bar>
        </div>
      </div>
    );
  }
);

ExAndNutBarChart.displayName = "ExAndNutBarChart";

export { ExAndNutBarChart };
