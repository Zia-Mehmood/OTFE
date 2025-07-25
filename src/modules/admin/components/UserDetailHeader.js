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
const UserDetailHeader = React.forwardRef(
  ({ className, cardImage, bgPopular, ...props }, ref) => {
    const [users, setUsers] = useState([]);
    let data = userData;

    useEffect(() => {
      setUsers(data);
    }, []);

    return (
      <div className="w-full border border-solid border-gray-300 rounded-md ">
        <div className="flex flex-wrap justify-start md:justify-start lg:justify-between py-2 px-4  ">
          <div className="flex  items-center space-x-2 ">
            <a href="#" className="text-sm overflow-hidden ">
              <img
                src={require("../../../assets/images/user1.jfif")}
                className="h-14 max-w-14 overflow-hidden  "
                style={{ borderRadius: 50 }}
                alt="User Icon"
              />
            </a>
            <div className="">
              <CustomText
                className="text-black text-sm font-bold"
                text="Laura Hughes"
              ></CustomText>
              <CustomText
                className="text-cblack text-xs mt-2"
                text="@FitGir"
              ></CustomText>
            </div>
          </div>

          <div className=" mt-1.5">
            <CustomText
              className="text-cblack text-xs leading-5 px-2 md:px-2 lg:px-0 pt-0.5 "
              text="Status"
            ></CustomText>
            <CustomText
              className="text-cgreen text-xs font-bold  mt-2 px-2 md:px-2 lg:px-0"
              text="Active"
            ></CustomText>
          </div>
          <div className="mt-1.5">
            <CustomText
              className="text-cblack text-xs leading-5 px-2 md:px-2 lg:px-0 pt-0.5 "
              text="Social Media Staus"
            ></CustomText>
            <CustomText
              className="text-cgreen text-xs font-bold mt-2 px-2 md:px-2 lg:px-0"
              text="Active"
            ></CustomText>
          </div>
          <div className="mt-1.5">
            <CustomText
              className="text-cblack text-xs leading-5 px-2 md:px-2 lg:px-0 pt-0.5 "
              text="Subscription"
            ></CustomText>
            <CustomText
              className="text-black text-xs font-bold mt-2 px-2 md:px-2 lg:px-0"
              text="Premium"
            ></CustomText>
          </div>
          <div className="mt-1.5">
            <CustomText
              className="text-cblack text-xs leading-5 px-2 md:px-2 lg:px-0 pt-0.5 "
              text="L.O.L."
            ></CustomText>
            <CustomText
              className="text-black text-xs font-bold mt-2 px-2 md:px-2 lg:px-0"
              text="Accepted"
            ></CustomText>
          </div>
          <div className="mt-1.5">
            <CustomText
              className="text-cblack text-xs leading-5 px-2 md:px-2 lg:px-0 pt-0.5 "
              text="Joined"
            ></CustomText>
            <CustomText
              className="text-black text-xs font-bold mt-2 px-2 md:px-2 lg:px-0"
              text="1/1/2021"
            ></CustomText>
          </div>
          <div className="mt-1.5">
            <CustomText
              className="text-cblack text-xs leading-5 px-2 md:px-2 lg:px-0 pt-0.5 "
              text="Device"
            ></CustomText>
            <CustomText
              className="text-black text-xs font-bold mt-2 px-2 md:px-2 lg:px-0"
              text="iOS"
            ></CustomText>
          </div>
        </div>
      </div>
    );
  }
);

UserDetailHeader.displayName = "UserDetailHeader";

export { UserDetailHeader };
