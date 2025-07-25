import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { DashboardCard } from "../components/DashboardCard";
import {
  faArrowTrendUp,
  faArrowUp,
  faShoppingBasket,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { LineChart } from "../components/LineChart";
import { ProgramCard } from "../components/ProgramCard";
function Dashboard(props) {
  useEffect(() => {
    // change background color with a random color
    document.body.style.background = props.bodyBg;
  }, []);
  return (
    <>
      <div className="pt-5 pb-2  ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  justify-between ">
          <DashboardCard
            cardImage={require("../../../assets/images/ex4.jpg")}
            textHeading="Sales of year"
            pertext="2.4%"
            valuetext="215"
            mainIcon={faArrowTrendUp}
            sideIcon={faArrowUp}
          ></DashboardCard>
          <DashboardCard
            cardImage={require("../../../assets/images/ex4.jpg")}
            textHeading="Total subscribers "
            pertext="1.4%"
            valuetext="40"
            mainIcon={faShoppingBasket}
            sideIcon={faArrowUp}
          ></DashboardCard>
          <DashboardCard
            cardImage={require("../../../assets/images/ex4.jpg")}
            textHeading="Active users"
            pertext="0.4%"
            valuetext="15"
            mainIcon={faUsers}
            sideIcon={faArrowUp}
          ></DashboardCard>
          <DashboardCard
            cardImage={require("../../../assets/images/ex4.jpg")}
            textHeading="Active users"
            pertext="0.4%"
            valuetext="15"
            mainIcon={faArrowTrendUp}
            sideIcon={faArrowUp}
          ></DashboardCard>
        </div>
        <div className="lg:flex w-full mt-10 gap-3 ">
          <div className="lg:w-7/12 px-5 bg-cwhite rounded-lg">
            <LineChart className=""></LineChart>
          </div>
          <div className="lg:w-5/12 bg-cwhite rounded-lg">
            <ProgramCard mainIcon={faUsers} valuetext="15"></ProgramCard>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
