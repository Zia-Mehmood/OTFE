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
      ...props
    },
    ref
  ) => {
    return (
      <div>
        <div className=" flex-1 w-full md:w-60 lg:w-60 ">
          <div class="md:max-w-60 lg:max-w-60 rounded-xl bg-cwhite overflow-hidden shadow-lg ">
            <div class="py-2 px-3 flex justify-between items-center">
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
                  <div className="text-sm overflow-hidden">
                    <CustomText
                      className="font-custom font-bold text-cblue text-xl "
                      text={pertext}
                    ></CustomText>
                  </div>
                  <FontAwesomeIcon icon={sideIcon} color="green" size="xl" />
                </div>
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
