import React, { useEffect, useState } from "react";
import { cn } from "../../../utls/utlis";
import DataTable, { createTheme } from "react-data-table-component";
import userData from "../../../data/exercise.json";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PopModal from "./Modal";
import { CustomText } from "../../common/components/CustomText";
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
const SocialActivityList = React.forwardRef(
  ({ className, cardImage, bgPopular, ...props }, ref) => {
    return (
      <div className="w-full border border-solid border-cblueScond rounded-lg mt-5">
        <CustomText
          className="text-cblueScond text-lg font-bold px-3 pt-2 "
          text="Reports"
        ></CustomText>
        <div className="border border-solid border-b-cblueScond w-full"></div>
        <div className="flex justify-between items-center">
          <div className="flex">
            <CustomText
              className="text-cblack text-xs pl-3  py-2 "
              text=" Liked"
            ></CustomText>
            <CustomText
              className="text-black text-xs font-bold pl-1 py-2 "
              text="The_Rock "
            ></CustomText>
            <CustomText
              className="text-cblack text-xs pl-1  py-2 "
              text="post"
            ></CustomText>{" "}
          </div>
          <div>
            <CustomText
              className="text-cblack text-xs  px-3 py-2 "
              text="10/10/2023"
            ></CustomText>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex">
            <CustomText
              className="text-cblack text-xs pl-3  py-2 "
              text=" Created a post"
            ></CustomText>
          </div>
          <div>
            <CustomText
              className="text-cblack text-xs  px-3 py-2 "
              text="10/10/2023"
            ></CustomText>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex">
            <CustomText
              className="text-cblack text-xs pl-3  py-2 "
              text=" Commented on"
            ></CustomText>
            <CustomText
              className="text-black text-xs font-bold pl-1 py-2 "
              text="GolfGirl247 "
            ></CustomText>
            <CustomText
              className="text-cblack text-xs pl-1  py-2 "
              text="post"
            ></CustomText>{" "}
          </div>
          <div>
            <CustomText
              className="text-cblack text-xs  px-3 py-2 "
              text="10/10/2023"
            ></CustomText>
          </div>
        </div>
      </div>
    );
  }
);

SocialActivityList.displayName = "SocialActivityList";

export { SocialActivityList };
