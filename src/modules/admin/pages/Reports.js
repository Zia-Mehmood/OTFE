import React, { useState } from "react";
import { ReportList } from "../components/ReportList";
import { CustomButton } from "../../common/components/CustomButton";
import { CustomText } from "../../common/components/CustomText";
import { CustomDropDown } from "../../common/components/CustomDropDown";

function Reports(props) {
  const [loading, setLoading] = useState(false);
  const onSubmit = () => {
    // setFromErrors(validate());
    // setIsSubmit(true);
  };
  const onChangeCalled = () => {
    console.log("on change called");
  };
  const options = [
    { value: "all", name: "All" },
    { value: "posts", name: "Posts" },
    { value: "comments", name: "Comments" },
    { value: "profile", name: "Profile" },
  ];

  return (
    <div className="bg-bodyBg pb-4">
      <div className=" pt-4 px-3">
        <CustomText
          className="font-custom font-bold text-black text-2xl pl-2 "
          text="Reports"
        ></CustomText>
      </div>
      <div className=" bg-white  rounded-lg py-3  my-2 px-1 mx-5">
        <div className="flex flex-wrap items-center  justify-between">
          <div className="4/12">
            <CustomDropDown
              className="w-full mx-3 py-1 md:my-0 lg:my-0 my-2"
              onChange={() => onChangeCalled()}
              options={options}
            ></CustomDropDown>
          </div>
          <div className=" flex justify-end items-center  me-2  ">
            <CustomText
              className="font-custom font-bold text-cblack text-xs px-2 "
              text="Last Update: 1/1/2021 8:30 am"
            ></CustomText>
            <CustomButton
              disabled={loading}
              loading={loading}
              name="Refresh"
              width="28"
              source={""}
              className=" py-2 text-sm  px-2 w-40 font-bold focus:outline-none text-cblue bg-cwhite  border-cblue border-solid border rounded-md "
              click={() => onSubmit()}
            ></CustomButton>
          </div>
        </div>

        <div>
          <ReportList></ReportList>
        </div>
      </div>
    </div>
  );
}

export default Reports;
