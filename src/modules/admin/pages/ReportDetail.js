import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { CustomText } from "../../common/components/CustomText";
import { CustomDropDown } from "../../common/components/CustomDropDown";
import { CustomButton } from "../../common/components/CustomButton";
import { CustomTextArea } from "../../common/components/CustomTextArea";
function ReportDetail(props) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const onSubmit = () => {
    // setFromErrors(validate());
    // setIsSubmit(true);
  };
  const onChangeCalled = () => {
    console.log("on change called");
  };
  const onChangeText = () => {
    console.log("on change text called");
  };
  const options = [
    { value: "hold", name: "Hold" },
    { value: "unhold", name: "Unhold" },
  ];
  return (
    <div className="bg-bodyBg pb-5  ">
      <div className=" pt-4 px-3">
        <CustomText
          className="font-custom font-bold text-black text-2xl pl-2 "
          text="Reports"
        ></CustomText>
      </div>

      <div className="bg-cwhite rounded-lg my-2 pb-5 mx-5">
        <div className="px-5 py-3">
          <div
            role="button"
            onClick={() => {
              navigate("/admin/reports");
            }}
            className="flex  items-center space-x-1 rtl:space-x-reverse group"
          >
            <a href="#" className="text-sm overflow-hidden ">
              <FontAwesomeIcon
                icon={faAngleLeft}
                className="text-cblue group-hover:text-cblue"
                size="xl"
              />
            </a>
            <CustomText
              className="text-cblue group-hover:text-cblue  font-bold text-sm"
              text="Back"
            ></CustomText>
          </div>
        </div>
        <div className="lg:flex w-full ">
          <div className="w-auto md:w-full lg:w-6/12 border border-solid border-gray-300 rounded-md mx-2 ">
            <div className="flex mt-1.5 items-center">
              <CustomText
                className="text-black text-xs font-bold pl-3 w-3/12 "
                text="Reason:"
              ></CustomText>
              <CustomText
                className="text-black font-semibold text-xs leading-5 w-9/12 pr-1 "
                text="Disordered eating and unhealthy body image"
              ></CustomText>
            </div>
            <div className="flex mt-1.5  items-center">
              <CustomText
                className="text-black text-xs font-bold pl-3 w-3/12"
                text="Details:"
              ></CustomText>
              <CustomText
                className="text-black font-semibold text-xs leading-5 w-9/12  pr-1 "
                text="Disordered eating and unhealthy body image Disor dered eating and unhealthy body image Disordered eating and unhealthy body image"
              ></CustomText>
            </div>
            <div className="flex mt-1.5 items-center">
              <CustomText
                className="text-black text-xs font-bold pl-3 w-3/12 "
                text="Report Created:"
              ></CustomText>
              <CustomText
                className="text-black font-semibold text-xs leading-5 w-9/12  pr-1 "
                text="12/5/2024 8:23 AM"
              ></CustomText>
            </div>
            <div className="flex mt-1.5 items-center">
              <CustomText
                className="text-black text-xs font-bold pl-3 w-3/12 "
                text="Report Id:"
              ></CustomText>
              <CustomText
                className="text-black font-semibold text-xs leading-5 w-9/12   pr-1"
                text="P1542"
              ></CustomText>
            </div>
            <div className="flex mt-1.5 items-center">
              <CustomText
                className="text-black text-xs font-bold pl-3 w-3/12 "
                text="Report against:"
              ></CustomText>
              <CustomText
                className="text-black font-semibold text-xs leading-5 w-9/12  pr-1"
                text="Rock_Ready"
              ></CustomText>
            </div>
          </div>
          <div className=" w-auto px-5 pb-3 lg:px-0 md:full lg:w-2/12 rounded-md mx-1">
            <div className="flex mt-1.5 items-center">
              <CustomText
                className="text-black text-xs font-bold  w-2/6 "
                text="Reason:"
              ></CustomText>
              <div className="flex items-center">
                <div class="rounded-full  bg-cgreen w-4 h-3"></div>
                <CustomText
                  className="py-1  pl-1 text-sm w-full"
                  text="Completed"
                ></CustomText>
              </div>
            </div>
            <div className="flex mt-1.5 items-center">
              <CustomText
                className="text-black text-xs font-bold  w-2/6 "
                text="Action:"
              ></CustomText>

              <CustomDropDown
                className="w-full ml-1 py-1 text-xm"
                onChange={() => onChangeCalled()}
                options={options}
              ></CustomDropDown>
            </div>
          </div>
          <div className=" w-auto lg:w-4/12  border border-solid border-gray-300 rounded-md mx-2">
            <div className=" mt-1.5 ">
              <CustomText
                className="text-black text-xs font-bold  pl-4"
                text="Post Type: Image"
              ></CustomText>
            </div>
            <div className=" mt-2 ">
              <div className="px-4">
                <img
                  class="  "
                  src={require("../../../assets/images/ex1.jpg")}
                  alt="user image"
                />
              </div>
            </div>
            <div className=" mt-1.5  pb-3">
              <CustomText
                className="text-black text-xs font-bold  pl-4"
                text="Caption:"
              ></CustomText>
              <div className=" mt-1.5 ">
                <CustomText
                  className="text-black text-xs font-semibold  pl-4 "
                  text="Disordered eating and unhealthy body image Disor dered eating and unhealthy body image Disordered eating and unhealthy body image"
                ></CustomText>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex justify-between items-end py-5 px-3">
          <div className="w-auto  lg:w-2/3">
            <CustomText
              className="text-black text-xs font-bold  w-2/6 "
              text="Administrative Notes:"
            ></CustomText>
            <CustomTextArea
              className="mt-2"
              onChange={() => onChangeText()}
            ></CustomTextArea>
          </div>
          <div className="flex md:flex lg:block justify-end pt-3 lg:pt-0 ">
            <CustomButton
              disabled={loading}
              loading={loading}
              name="Complete"
              source={""}
              className=" py-2 text-sm  px-2 w-32 font-bold focus:outline-none text-cwhite bg-cblue  border-cblue border-solid border rounded-md "
              click={() => onSubmit()}
            ></CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportDetail;
