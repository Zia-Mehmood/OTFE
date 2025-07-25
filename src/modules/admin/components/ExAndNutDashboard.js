import React from "react";
import { ExAndNutDashboardCard } from "./ExAndNutDashboardCard";
import { LineChart } from "../components/LineChart";
import { ExAndNutLineChart } from "./ExAndNutLineChart";
import { ExAndNutBarChart } from "./ExAndNutBarChart";
import { CustomText } from "../../common/components/CustomText";
function ExAndNutDashboard(props) {
  return (
    <div className="bg-bodyBg px-3 py-4">
      <div className="flex flex-wrap  items-center">
        <div className="w-full md:w-1/2 lg:w-1/3 px-2 py-2">
          <ExAndNutDashboardCard
            cardImage={require("../../../assets/images/fire.png")}
            textHeading="Exercise Minutes "
            valuetext="45"
            subText="min"
          ></ExAndNutDashboardCard>
        </div>
        <div className="w-full md:w-1/2  lg:w-1/3 px-2 py-2">
          <ExAndNutDashboardCard
            cardImage={require("../../../assets/images/fire.png")}
            textHeading="Walking + Running Distance "
            valuetext="3.2"
            subText="min"
          ></ExAndNutDashboardCard>
        </div>
        <div className="w-full md:w-1/2  lg:w-1/3 px-2 py-2 ">
          <ExAndNutDashboardCard
            cardImage={require("../../../assets/images/walking.png")}
            textHeading="Steps "
            valuetext="12,456"
            subText="steps"
          ></ExAndNutDashboardCard>
        </div>
        <div className="w-full md:w-1/2  lg:w-1/3 px-2 py-2">
          <ExAndNutDashboardCard
            cardImage={require("../../../assets/images/fire.png")}
            textHeading="Resting Energy "
            valuetext="1,104"
            subText="cal"
          ></ExAndNutDashboardCard>
        </div>
        <div className="w-full md:w-1/2  lg:w-1/3 px-2 py-2">
          <ExAndNutDashboardCard
            cardImage={require("../../../assets/images/fire.png")}
            textHeading="Active Energy"
            valuetext="236"
            subText="cal"
          ></ExAndNutDashboardCard>
        </div>
      </div>

      <div className="lg:flex justify-between items-end gap-3 px-2  mt-5">
        <div className="w-full lg:w-8/12  bg-cwhite rounded-lg">
          <div className="px-5 py-2">
            <CustomText
              className="font-custom font-bold text-black text-lg"
              text="Calories In vs Calories Out"
            ></CustomText>
          </div>

          <div className=" flex flex-wrap md:flex-nowrap lg:flex-nowrap items-center justify-around py-2 px-10">
            <div className="flex items-center">
              <div className="border-8 border-cchartInzone border-solid w-6 rounded-sm"></div>
              <CustomText
                className="font-custom font-bold text-cblack text-sm pl-2 "
                text="In Zone"
              ></CustomText>
            </div>
            <div className="flex items-center">
              <div className="border-8 border-cchartunder border-solid w-6 rounded-sm"></div>
              <CustomText
                className="font-custom font-bold text-cblack text-sm pl-2 "
                text="In Zone"
              ></CustomText>
            </div>
            <div className="flex items-center">
              <div className="border-8 border-cchartover border-solid w-6 rounded-sm"></div>
              <CustomText
                className="font-custom font-bold text-cblack text-sm pl-2 "
                text="In Zone"
              ></CustomText>
            </div>
            <div className="flex items-center">
              <div className="border-8 border-cchartburnt border-solid w-6 rounded-sm"></div>
              <CustomText
                className="font-custom font-bold text-cblack text-sm pl-2 "
                text="In Zone"
              ></CustomText>
            </div>
          </div>
          <ExAndNutBarChart className=""></ExAndNutBarChart>
        </div>
        <div className="w-full lg:w-4/12  bg-cwhite px-2 rounded-lg">
          <div className="px-5 py-2">
            <CustomText
              className="font-custom font-bold text-black text-lg"
              text="Body Weight"
            ></CustomText>
          </div>

          <div className="flex items-center justify-around"></div>
          <ExAndNutLineChart className=""></ExAndNutLineChart>
        </div>
      </div>
    </div>
  );
}

export default ExAndNutDashboard;
