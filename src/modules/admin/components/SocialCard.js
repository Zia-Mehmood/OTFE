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
const SocialCard = React.forwardRef(
  ({ className, cardImage, bgPopular, ...props }, ref) => {
    const [users, setUsers] = useState([]);
    let data = userData;

    useEffect(() => {
      setUsers(data);
    }, []);

    return (
      <div className="w-full border border-solid border-gray-300 rounded-md  pb-2 pt-1">
        <div className="flex justify-start lg:justify-around items-center py-2 px-4  ">
          <div className=" ">
            <a href="#" className="text-sm overflow-hidden ">
              <img
                src={require("../../../assets/images/user1.jfif")}
                className="h-20 max-w-20 overflow-hidden  "
                style={{ borderRadius: 50 }}
                alt="User Icon"
              />
            </a>
          </div>
          <div className=" pl-5 md:pl-5 lg:pl-0 ">
            <CustomText
              className="text-black text-lg font-bold"
              text="Laura Hughes"
            ></CustomText>
            <CustomText
              className="text-cblack text-sm mt-2"
              text="@FitGir"
            ></CustomText>
          </div>
        </div>
        <div className="flex justify-around items-center px-3">
          <div className="">
            <CustomText
              className="text-black text-xs font-bold mt-2"
              text="Followers"
            ></CustomText>
            <CustomText
              className="text-cblack text-xs leading-5 pt-0.5 "
              text="100k"
            ></CustomText>
          </div>
          <div className="">
            <CustomText
              className="text-black text-xs font-bold mt-2"
              text="Posts"
            ></CustomText>
            <CustomText
              className="text-cblack text-xs leading-5 pt-0.5 "
              text="250"
            ></CustomText>
          </div>
          <div className="">
            <CustomText
              className="text-black text-xs font-bold mt-2"
              text="Likes"
            ></CustomText>
            <CustomText
              className="text-cblack text-xs leading-5 pt-0.5 "
              text="24m"
            ></CustomText>
          </div>
        </div>
      </div>
    );
  }
);

SocialCard.displayName = "SocialCard";

export { SocialCard };
