import React, { useEffect, useState } from "react";
import { cn } from "../../../utls/utlis";
import userData from "../../../data/exercise.json";
import "react-toastify/dist/ReactToastify.css";

import { CustomText } from "../../common/components/CustomText";

const UserDetailInformation = React.forwardRef(
  ({ className, cardImage, bgPopular, ...props }, ref) => {
    const [users, setUsers] = useState([]);
    let data = userData;

    useEffect(() => {
      setUsers(data);
    }, []);

    return (
      <div className="w-full border border-solid border-gray-300 rounded-md ">
        <CustomText
          className="text-black text-lg font-bold px-3 pt-2"
          text="Personal information"
        ></CustomText>
        <div className="flex flex-wrap justify-start py-3 px-4  ">
          <div className=" mt-1.5">
            <CustomText
              className="text-cblack text-xs leading-5  "
              text="First Name"
            ></CustomText>
            <CustomText
              className="text-black text-xs font-bold "
              text="Laura"
            ></CustomText>
          </div>
          <div className="mt-1.5 ml-3 md:ml-14 lg:ml-14">
            <CustomText
              className="text-cblack text-xs leading-5  "
              text="Last Name"
            ></CustomText>
            <CustomText
              className="text-black text-xs font-bold "
              text="Hughes"
            ></CustomText>
          </div>
          <div className="mt-1.5 ml-3 md:ml-14 lg:ml-14">
            <CustomText
              className="text-cblack text-xs leading-5"
              text="UUID"
            ></CustomText>
            <CustomText
              className="text-black text-xs font-bold "
              text="000000002"
            ></CustomText>
          </div>
        </div>
        <div className="flex flex-wrap  justify-start py-1 md:py-2 lg:py-3 px-4  ">
          <div className="mt-1.5 ">
            <CustomText
              className="text-cblack text-xs leading-5  "
              text="Email address"
            ></CustomText>
            <CustomText
              className="text-black text-xs font-bold"
              text="lhughes@gmail.com"
            ></CustomText>
          </div>
          <div className="mt-1.5 ml-3 md:ml-14 lg:ml-14">
            <CustomText
              className="text-cblack text-xs leading-5 "
              text="Username"
            ></CustomText>
            <CustomText
              className="text-black text-xs font-bold "
              text="FitGirl"
            ></CustomText>
          </div>
          <div className="mt-1.5 ml-0 md:ml-14 lg:ml-14">
            <CustomText
              className="text-cblack text-xs leading-5  "
              text="Stripe Customer ID"
            ></CustomText>
            <CustomText
              className="text-black text-xs font-bold"
              text="65485321597"
            ></CustomText>
          </div>
        </div>
        <div className="px-4 pb-4">
          <CustomText
            className="text-cblack text-xs leading-5  "
            text="Bio"
          ></CustomText>
          <CustomText
            className="text-black text-xs font-bold"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
mollit anim id est laborum."
          ></CustomText>
        </div>
      </div>
    );
  }
);

UserDetailInformation.displayName = "UserDetailInformation";

export { UserDetailInformation };
