import React from "react";
import { cn } from "../../../utls/utlis";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CustomText } from "../../common/components/CustomText";
const DashboardCard = React.forwardRef(
  (
    {
      className,
      cardImage,
      textHeading,
      pertext,
      valuetext,
      bgPopular,
      mainIcon,
      sideIcon,
      subIcon,
      subSideIcon,
      subText,
      subSideText,
      ...props
    },
    ref
  ) => {
    return (
      <div>
        <div className=" flex-1 pb-4 md:pb-4 lg:pb-0 w-full ">
          <div class=" w-auto rounded-xl bg-cwhite overflow-hidden shadow-lg ">
            <div class="pt-2 px-3 flex justify-between items-center">
              <div>
                <div className="flex justify-between pt-2 ">
                  <div className="flex items-center justify-between  space-x-2 rtl:space-x-reverse">
                    <div className="text-sm overflow-hidden">
                      <FontAwesomeIcon icon={mainIcon} color="blue" size="xl" />
                    </div>
                    <CustomText
                      className="font-custom font-bold text-cblack text-2xl"
                      text={valuetext}
                    ></CustomText>
                  </div>
                </div>
                <CustomText
                  className="font-custom font-semibold text-cgray text"
                  text={textHeading}
                ></CustomText>
              </div>
              <div>
                <div className="flex items-center justify-between  space-x-2 rtl:space-x-reverse">
                  <div className="text-sm pl-5 overflow-hidden">
                    <CustomText
                      className="font-custom font-bold text-cblue text-xl "
                      text={pertext}
                    ></CustomText>
                  </div>
                  <FontAwesomeIcon icon={sideIcon} color="green" size="xl" />
                </div>
              </div>
            </div>
            <div className="flex px-3 pb-2 justify-between">
              <div className="flex items-center justify-between  space-x-2 rtl:space-x-reverse">
                <div className="text-sm overflow-hidden">
                  <FontAwesomeIcon icon={subIcon} color="gray" size="sm" />
                </div>
                <CustomText
                  className="font-custom font-bold text-cgray text-sm"
                  text={subText}
                ></CustomText>
              </div>
              <div className="flex items-center justify-between  space-x-2 rtl:space-x-reverse">
                <div className="text-sm overflow-hidden">
                  <FontAwesomeIcon icon={subSideIcon} color="gray" size="sm" />
                </div>
                <CustomText
                  className="font-custom font-bold text-cgray text-sm"
                  text={subSideText}
                ></CustomText>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

DashboardCard.displayName = "DashboardCard";

export { DashboardCard };
