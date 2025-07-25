import React, { useEffect, useState } from "react";
import { cn } from "../../../utls/utlis";
import DataTable, { createTheme } from "react-data-table-component";
import userData from "../../../data/exercise.json";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PopModal from "./Modal";
import { CustomText } from "../../common/components/CustomText";
import { useNavigate } from "react-router-dom";

const UserTabs = React.forwardRef(
  ({ className, cardImage, bgPopular, ...props }, ref) => {
    const [menu, setMenu] = useState("profile");
    const navigate = useNavigate();
    const chooseActive = (item) => {
      console.log(item);
      navigate(`/${item}`, { replace: true });
    };
    const selectedMenu = (val) => {
      // change background color with a random color

      setMenu(val);

      if (val === "profile") {
        chooseActive("admin/user/profile");
      } else if (val === "message") {
        chooseActive("admin/user/messages");
      } else if (val === "exercise") {
        chooseActive("admin/user/exercise");
      } else if (val === "social") {
        chooseActive("admin/user/social");
      } else if (val === "reports") {
        chooseActive("admin/user/reports");
      } else if (val === "billing") {
        chooseActive("admin/user/billing");
      }
    };
    return (
      <div className=" pr-4 py-2   ">
        <div class="flex items-center   group  ">
          <CustomText
            role="button"
            onClick={() => selectedMenu("profile")}
            className={
              menu == "profile"
                ? "mt-1 rounded-md font-custom font-bold text-xs py-2 w-full cursor-pointer pl-2 ml-2 group-hover:bg-csubMenu bg-csubMenu group-hover:text-cblue text-cblue"
                : "mt-1 rounded-md font-custom font-bold text-xs py-2 w-full cursor-pointer pl-2 ml-2 group-hover:bg-csubMenu group-hover:text-cblue text-cblack"
            }
            text={"Profile"}
          ></CustomText>
        </div>
        <div class="flex items-center pt-1   rounded-tr-lg rounded-tl-lg group  ">
          <CustomText
            role="button"
            onClick={() => selectedMenu("message")}
            className={
              menu == "message"
                ? "mt-1 rounded-md font-custom font-bold text-xs py-2 w-full cursor-pointer pl-2 ml-2 group-hover:bg-csubMenu bg-csubMenu group-hover:text-cblue text-cblue"
                : "mt-1 rounded-md font-custom font-bold text-xs py-2 w-full cursor-pointer pl-2 ml-2 group-hover:bg-csubMenu group-hover:text-cblue text-cblack"
            }
            text={"Message"}
          ></CustomText>
        </div>
        <div class="flex items-center pt-1  rounded-tr-lg rounded-tl-lg group  ">
          <CustomText
            role="button"
            onClick={() => selectedMenu("exercise")}
            className={
              menu == "exercise"
                ? "mt-1 rounded-md font-custom font-bold text-xs py-2 w-full cursor-pointer pl-2 ml-2 group-hover:bg-csubMenu bg-csubMenu group-hover:text-cblue text-cblue"
                : "mt-1 rounded-md font-custom font-bold text-xs py-2 w-full cursor-pointer pl-2 ml-2 group-hover:bg-csubMenu group-hover:text-cblue text-cblack"
            }
            text={"Exercise and Nutrition"}
          ></CustomText>
        </div>{" "}
        <div class="flex items-center pt-1  rounded-tr-lg rounded-tl-lg group  ">
          <CustomText
            role="button"
            onClick={() => selectedMenu("social")}
            className={
              menu == "social"
                ? "mt-1 rounded-md font-custom font-bold text-xs py-2 w-full cursor-pointer ml-2 pl-2 group-hover:bg-csubMenu bg-csubMenu group-hover:text-cblue text-cblue"
                : "mt-1 rounded-md font-custom font-bold text-xs py-2 w-full cursor-pointer pl-2 ml-2 group-hover:bg-csubMenu group-hover:text-cblue text-cblack"
            }
            text={"Social"}
          ></CustomText>
        </div>{" "}
        <div class="flex items-center pt-1 rounded-tr-lg rounded-tl-lg group  ">
          <CustomText
            role="button"
            onClick={() => selectedMenu("reports")}
            className={
              menu == "reports"
                ? "mt-1 rounded-md font-custom font-bold text-xs py-2 w-full cursor-pointer pl-2  ml-2 group-hover:bg-csubMenu bg-csubMenu group-hover:text-cblue text-cblue"
                : "mt-1 rounded-md font-custom font-bold text-xs py-2 w-full cursor-pointer pl-2 ml-2 group-hover:bg-csubMenu group-hover:text-cblue text-cblack"
            }
            text={"Reports"}
          ></CustomText>
        </div>{" "}
        <div class="flex items-center pt-1  rounded-tr-lg rounded-tl-lg group  ">
          <CustomText
            role="button"
            onClick={() => selectedMenu("billing")}
            className={
              menu == "billing"
                ? "mt-1 rounded-md font-custom font-bold text-xs py-2 w-full cursor-pointer pl-2 ml-2 group-hover:bg-csubMenu bg-csubMenu group-hover:text-cblue text-cblue"
                : "mt-1 rounded-md font-custom font-bold text-xs py-2 w-full cursor-pointer pl-2 ml-2 group-hover:bg-csubMenu group-hover:text-cblue text-cblack"
            }
            text={"Billing"}
          ></CustomText>
        </div>
      </div>
    );
  }
);

UserTabs.displayName = "UserTabs";

export { UserTabs };
