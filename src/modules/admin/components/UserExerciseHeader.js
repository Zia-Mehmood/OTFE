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
const UserExerciseHeader = React.forwardRef(
  ({ className, cardImage, bgPopular, ...props }, ref) => {
    return (
      <div className="w-full border border-solid border-gray-300 rounded-lg mt-1">
        <div className="flex flex-wrap justify-start  items-center pt-5 pb-3">
          <div className="">
            <CustomText
              className="text-cgray text-xs  px-3  "
              text="Workout Frequency"
            ></CustomText>
            <CustomText
              className="text-black text-xs  px-3  "
              text="4 days"
            ></CustomText>
          </div>
          <div className="">
            <CustomText
              className="text-cgray text-xs  px-3  "
              text="Body Type"
            ></CustomText>
            <CustomText
              className="text-black text-xs  px-3  "
              text="Mesomorph"
            ></CustomText>
          </div>
          <div className="">
            <CustomText
              className="text-cgray text-xs  px-3  "
              text="Current Program"
            ></CustomText>
            <CustomText
              className="text-black text-xs  px-3  "
              text="Intermediate Fat Loss Trainer"
            ></CustomText>
          </div>
          <div className="">
            <CustomText
              className="text-cgray text-xs  px-3  "
              text="Activity Level"
            ></CustomText>
            <CustomText
              className="text-black text-xs  px-3  "
              text="Active"
            ></CustomText>
          </div>
        </div>
        <div className="flex justify-start  items-center pt-5 pb-3">
          <div className="">
            <CustomText
              className="text-cgray text-xs  px-3  "
              text="Fitness Goal"
            ></CustomText>
            <CustomText
              className="text-black text-xs  px-3  "
              text="Fat Loss"
            ></CustomText>
          </div>
          <div className="">
            <CustomText
              className="text-cgray text-xs  px-3  "
              text="Starting Body"
            ></CustomText>
            <CustomText
              className="text-black text-xs  px-3  "
              text="156 lbs"
            ></CustomText>
          </div>
          <div className="">
            <CustomText
              className="text-cgray text-xs  px-3  "
              text="Current Body"
            ></CustomText>
            <CustomText
              className="text-black text-xs  px-3  "
              text="145 lbs"
            ></CustomText>
          </div>
        </div>
      </div>
    );
  }
);

UserExerciseHeader.displayName = "UserExerciseHeader";

export { UserExerciseHeader };
