import React, { useEffect, useState } from "react";
import { cn } from "../../../utls/utlis";
import DataTable, { createTheme } from "react-data-table-component";
import userData from "../../../data/exercise.json";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PopModal from "./Modal";
import { CustomText } from "../../common/components/CustomText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
const deleteUser = async () => {
  // const dbRef = doc(db, "Users", id);
  // await updateDoc(dbRef, {
  //   isDeleted: true,
  // });
  // getUsers();
  // toast.success("user deleted", {
  //   position: "top-right",
  //   theme: "colored",
  // });
};
const NutritionHeader = React.forwardRef(
  ({ className, cardImage, bgPopular, ...props }, ref) => {
    return (
      <div className="w-full border border-solid border-gray-300 rounded-lg mt-2">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex items-center">
            <CustomText
              className="text-black text-lg font-bold pl-3 py-2 "
              text="Calories and Macros "
            ></CustomText>
            <CustomText
              className="text-cblack text-lg pl-1  py-2 "
              text=" 10/10/2023"
            ></CustomText>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faEllipsisH}
              className="text-2xl text-black px-3"
              role="button"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-start lg:justify-between items-center">
          <div className="w-auto lg:w-2/12">
            <CustomText
              className="text-cgray text-lg  px-3  "
              text="Calories"
            ></CustomText>
            <div className="flex items-center">
              <CustomText
                className="text-black text-lg  pl-3  "
                text="1227"
              ></CustomText>
              <CustomText
                className="text-cgray text-lg  pl-1 pr-3 "
                text="/ 2000"
              ></CustomText>
            </div>
            <div className="px-3">
              <div className=" w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700 ">
                <div className="bg-gray-600 h-1.5 w-4/6 rounded-full dark:bg-gray-300"></div>
              </div>
            </div>
          </div>
          <div className="w-auto lg:w-2/12">
            <CustomText
              className="text-cgray text-lg  px-3  "
              text="Protein"
            ></CustomText>
            <div className="flex items-center">
              <CustomText
                className="text-black text-lg  pl-3  "
                text="127"
              ></CustomText>
              <CustomText
                className="text-cgray text-lg  pl-1 pr-3 "
                text="/  190 g"
              ></CustomText>
            </div>
            <div className="px-3">
              <div className=" w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700 ">
                <div className="bg-cblue h-1.5 w-4/5 rounded-full dark:bg-gray-300"></div>
              </div>
            </div>
          </div>
          <div className="w-auto lg:w-2/12">
            <CustomText
              className="text-cgray text-lg  px-3  "
              text="Fats"
            ></CustomText>
            <div className="flex items-center">
              <CustomText
                className="text-black text-lg  pl-3  "
                text="127"
              ></CustomText>
              <CustomText
                className="text-cgray text-lg  pl-1 pr-3 "
                text="/ 190 g"
              ></CustomText>
            </div>
            <div className="px-3">
              <div className=" w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700 ">
                <div className="bg-red-600 h-1.5 w-2/5 rounded-full dark:bg-gray-300"></div>
              </div>
            </div>
          </div>
          <div className="w-auto lg:w-2/12">
            <CustomText
              className="text-cgray text-lg  px-3  "
              text="Carbs"
            ></CustomText>
            <div className="flex items-center">
              <CustomText
                className="text-black text-lg  pl-3  "
                text="127"
              ></CustomText>
              <CustomText
                className="text-cgray text-lg  pl-1 pr-3 "
                text="/ 190 g"
              ></CustomText>
            </div>
            <div className="px-3">
              <div className=" w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700 ">
                <div className="bg-yellow-400 h-1.5 w-3/5 rounded-full dark:bg-gray-300"></div>
              </div>
            </div>
          </div>
          <div className="w-auto lg:w-2/12">
            <CustomText
              className="text-cgray text-lg  px-3  "
              text="Water"
            ></CustomText>
            <div className="flex items-center">
              <CustomText
                className="text-black text-lg  pl-3  "
                text="75"
              ></CustomText>
              <CustomText
                className="text-cgray text-lg  pl-1 pr-3 "
                text="/ 100 oz"
              ></CustomText>
            </div>
            <div className="px-3">
              <div className=" w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700 ">
                <div className="bg-cblue h-1.5 w-4/5 rounded-full dark:bg-gray-300"></div>
              </div>
            </div>
          </div>
          <div className="w-auto lg:w-2/12"></div>
        </div>
        <div className="flex px-3 justify-end">
          <CustomText
            className="text-cblueScond text-xs font-bold pl-1  py-2 "
            text="View History"
            role="button"
          ></CustomText>
        </div>
      </div>
    );
  }
);

NutritionHeader.displayName = "NutritionHeader";

export { NutritionHeader };
