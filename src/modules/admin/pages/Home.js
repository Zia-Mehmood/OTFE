import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "flowbite";
import { Route, Routes, Outlet } from "react-router-dom";

function Home(props, bodyBg) {
  useEffect(() => {
    // change background color with a random color
    // document.getElementById("mainDiv").style.background = ;
  }, []);
  return (
    <div>
      <Navbar></Navbar>

      <Sidebar></Sidebar>
      <div
        id="mainDiv"
        className={
          bodyBg == "#efefef"
            ? "bg-bodyBg px-1 md:px-4 lg:px-4 p-4 ml-0 md:ml-52 lg:ml-64"
            : " p-4 px-1 md:px-4 lg:px-4 ml-0 md:ml-52 lg:ml-64"
        }
      >
        <div
          id="uperDiv"
          className="p-4  rounded-lg dark:border-gray-700 pt-0 md:pt-4 lg:pt-4 mt-0 md:mt-8 lg:mt-10"
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}
Home.displayName = "AdminHome";
export default Home;
