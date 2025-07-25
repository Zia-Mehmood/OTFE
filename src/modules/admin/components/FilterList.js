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
const FilterList = React.forwardRef(
  ({ className, cardImage, bgPopular, ...props }, ref) => {
    const [users, setUsers] = useState([]);
    let data = userData;

    useEffect(() => {
      setUsers(data);
    }, []);

    return (
      <div className=" pl-5 pt-5 ">
        <CustomText
          className="font-custom pl-3 py-1 bg-cblue text-cwhite "
          text={"Filters"}
        ></CustomText>
        <div>
          <div className="pb-2 bg-clightgray">
            <CustomText
              className="font-custom font-bold text-sm pl-3 py-1 border-l-4  border-solid border-clightgray  text-cblack "
              text={"Muscle Group"}
            ></CustomText>
            <CustomText
              className="my-1 font-custom font-bold text-xs pl-3  border-l-4  border-solid border-cblue text-cblue cursor-pointer"
              text={"All"}
            ></CustomText>
            <CustomText
              className=" my-1 font-custom font-bold text-xs pl-3  border-l-4  border-solid border-clightgray hover:border-cblue hover:text-cblue  cursor-pointer  text-cblack"
              text={"Core"}
            ></CustomText>
            <CustomText
              className=" my-1 font-custom font-bold text-xs pl-3  border-l-4  border-solid border-clightgray hover:border-cblue hover:text-cblue  cursor-pointer  text-cblack"
              text={"Calf"}
            ></CustomText>
            <CustomText
              className=" my-1 font-custom font-bold text-xs pl-3  border-l-4  border-solid border-clightgray hover:border-cblue hover:text-cblue  cursor-pointer  text-cblack"
              text={"Glutes"}
            ></CustomText>
            <CustomText
              className=" my-1 font-custom font-bold text-xs pl-3  border-l-4  border-solid border-clightgray hover:border-cblue hover:text-cblue  cursor-pointer  text-cblack"
              text={"Biceps"}
            ></CustomText>
            <CustomText
              className=" my-1 font-custom font-bold text-xs pl-3  border-l-4  border-solid border-clightgray hover:border-cblue hover:text-cblue  cursor-pointer  text-cblack"
              text={"Chest"}
            ></CustomText>
            <CustomText
              className=" my-1 font-custom font-bold text-xs pl-3  border-l-4  border-solid border-clightgray hover:border-cblue hover:text-cblue  cursor-pointer  text-cblack"
              text={"Quads"}
            ></CustomText>
            <CustomText
              className=" my-1 font-custom font-bold text-xs pl-3  border-l-4  border-solid border-clightgray hover:border-cblue hover:text-cblue  cursor-pointer  text-cblack"
              text={"Lats"}
            ></CustomText>
            <CustomText
              className=" my-1 font-custom font-bold text-xs pl-3  border-l-4  border-solid border-clightgray hover:border-cblue hover:text-cblue  cursor-pointer  text-cblack"
              text={"Low Back"}
            ></CustomText>
            <CustomText
              className=" my-1 font-custom font-bold text-xs pl-3  border-l-4  border-solid border-clightgray hover:border-cblue hover:text-cblue  cursor-pointer  text-cblack"
              text={"Middle Back"}
            ></CustomText>
            <CustomText
              className=" my-1 font-custom font-bold text-xs pl-3  border-l-4  border-solid border-clightgray hover:border-cblue hover:text-cblue  cursor-pointer  text-cblack"
              text={"Shoulders"}
            ></CustomText>
            <CustomText
              className=" my-1 font-custom font-bold text-xs pl-3  border-l-4  border-solid border-clightgray hover:border-cblue hover:text-cblue  cursor-pointer  text-cblack"
              text={"Hamstrings"}
            ></CustomText>
            <CustomText
              className=" my-1 font-custom font-bold text-xs pl-3  border-l-4  border-solid border-clightgray hover:border-cblue hover:text-cblue  cursor-pointer  text-cblack"
              text={"Triceps"}
            ></CustomText>
            <CustomText
              className=" my-1 font-custom font-bold text-xs pl-3  border-l-4  border-solid border-clightgray hover:border-cblue hover:text-cblue  cursor-pointer  text-cblack"
              text={"Alternative"}
            ></CustomText>
            <CustomText
              className=" my-1 font-custom font-bold text-xs pl-3  border-l-4  border-solid border-clightgray hover:border-cblue hover:text-cblue  cursor-pointer  text-cblack"
              text={"Cardio"}
            ></CustomText>
          </div>
        </div>
      </div>
    );
  }
);

FilterList.displayName = "FilterList";

export { FilterList };
