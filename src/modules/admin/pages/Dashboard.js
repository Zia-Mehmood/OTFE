import React from "react";
import { DashboardCard } from "../components/DashboardCard";
import { DashboardSideCard } from "../components/DashboardSideCard";
import { LineChart } from "../components/LineChart";
import {
  faArrowTrendUp,
  faArrowUp,
  faShoppingBasket,
  faUsers,
  faMobileAndroid,
  faAppleAlt,
  faSackDollar,
  faCartPlus,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
function Dashboard(props) {
  return (
    <div>
      <div className=" lg:flex justify-around w-full">
        <DashboardCard
          cardImage={require("../../../assets/images/ex4.jpg")}
          textHeading="Subscribers "
          pertext="1.4%"
          valuetext="24,236"
          mainIcon={faShoppingBasket}
          sideIcon={faArrowUp}
          subIcon={faAppleAlt}
          subSideIcon={faMobileAndroid}
          subText="13,250"
          subSideText="10,986"
        ></DashboardCard>
        <DashboardCard
          cardImage={require("../../../assets/images/ex4.jpg")}
          textHeading="Subscription sales this month"
          pertext="2.4%"
          valuetext="$296,201.67"
          mainIcon={faArrowTrendUp}
          sideIcon={faArrowUp}
          subIcon={faAppleAlt}
          subSideIcon={faMobileAndroid}
          subText="$167,201.36"
          subSideText="$129,000.31 "
        ></DashboardCard>

        <DashboardCard
          cardImage={require("../../../assets/images/ex4.jpg")}
          textHeading="Marketplace sales this month"
          pertext="0.4%"
          valuetext="$135,521.55"
          mainIcon={faCartShopping}
          sideIcon={faArrowUp}
          subIcon={faSackDollar}
          subText="$20,328.23"
        ></DashboardCard>
      </div>
      <div className="lg:flex w-full mt-10 gap-3 ">
        <div className="w-full md:w-full lg:w-8/12 px-5 bg-cwhite rounded-lg">
          <LineChart className=""></LineChart>
        </div>
        <div className="w-full md:w-full lg:w-4/12 px-5 mt-5 md:mt-5 lg:mt-0 ">
          <div className="bg-cwhite rounded-lg">
            <DashboardSideCard
              cardImage={require("../../../assets/images/ex4.jpg")}
              textHeading="App Store "
              pertext="5,214"
              valuetext="Premium Subscriptions"
              subText="4,034"
              subSideText="Free Subscriptions"
            ></DashboardSideCard>
          </div>
          <div className="bg-cwhite mt-3 rounded-lg">
            <DashboardSideCard
              cardImage={require("../../../assets/images/ex4.jpg")}
              textHeading="Google Play "
              pertext="5,214"
              valuetext="Premium Subscriptions"
              subText="4,034"
              subSideText="Free Subscriptions"
            ></DashboardSideCard>
          </div>
        </div>
      </div>
    </div>
  );
}
Dashboard.displayName = "AdminDashboard";
export default Dashboard;
