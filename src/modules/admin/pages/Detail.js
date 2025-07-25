import "../../../App.css";
import React, { useEffect, onMounted } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { CustomText } from "../../common/components/CustomText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faList,
  faShoppingBasket,
  faUsers,
  faMobileAndroid,
  faAppleAlt,
  faSackDollar,
  faCartPlus,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { UserTabs } from "../components/UserTabs";
import { initModals } from "flowbite";
function Detail(props) {
  const navigate = useNavigate();
  const { history } = props;

  useEffect(() => {
    initModals();
    // change background color with a random color
    document.getElementById("mainDiv").className = document
      .getElementById("mainDiv")
      .className.replace("p-4", "");
    document.getElementById("uperDiv").className = document
      .getElementById("uperDiv")
      .className.replace("p-4", "");
  }, []);
  return (
    <div className="bg-bodyBg  p-4 pl-5 pt-7">
      <div className="">
        <div
          role="button"
          onClick={() => {
            navigate("/admin/users");
          }}
          className="flex  items-center space-x-1 rtl:space-x-reverse group"
        >
          <a href="#" className="text-sm overflow-hidden ">
            <FontAwesomeIcon
              icon={faAngleLeft}
              className="text-cblack group-hover:text-cblue"
              size="xl"
            />
            {/* <img
                src={require("../../../assets/icons/backButton.png")}
                className="h-4 max-w-4 overflow-hidden  "
                style={{ borderRadius: 50 }}
                alt="User Icon"
              /> */}
          </a>
          <CustomText
            className="text-cblack group-hover:text-cblue  font-bold text-sm"
            text="Back"
          ></CustomText>
        </div>
      </div>
      <div className="bg-cwhite rounded-lg mt-5">
        <div>
          <button
            data-modal-target="select-modal"
            data-modal-toggle="select-modal"
            className="block md:block lg:hidden  z-40  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            <span className="sr-only">Open sidebar</span>
            <FontAwesomeIcon
              icon={faList}
              size="xl"
              className={
                "text-cdardgray group-hover:text-cwhite transition duration-75"
              }
            />
          </button>

          <div
            id="select-modal"
            tabindex="-1"
            aria-hidden="true"
            className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-baseline mt-32 w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
          >
            <div className="relative  bg-cwhite rounded-lg  p-4 l md:w-1/3 max-w-md max-h-full">
              <div className="relative rounded-lg shadow dark:bg-gray-700">
                <UserTabs></UserTabs>
              </div>
            </div>
          </div>
        </div>

        <div className="flex pt-2 p-2">
          <div className="hidden md:hidden lg:block w-full md:w-full lg:w-2/12">
            <UserTabs></UserTabs>
          </div>
          <div className=" w-full md:w-full lg:w-10/12">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
