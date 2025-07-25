import React from "react";
import { cn } from "../../../utls/utlis";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CustomText } from "../../common/components/CustomText";
const ExAndNutDashboardCard = React.forwardRef(
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
        <div className=" flex-1 w-full ">
          <div class=" w-auto rounded-xl bg-cwhite overflow-hidden shadow-lg ">
            <div class="pt-2 px-3 flex justify-between items-center">
              <div>
                <div className="flex justify-between pt-2 ">
                  <div className="flex items-center justify-between  space-x-1 rtl:space-x-reverse">
                    <div className="text-sm overflow-hidden">
                      <img class="  h-6 w-6  " src={cardImage} alt="" />
                    </div>
                    <CustomText
                      className="font-custom font-bold text-corange text-sm"
                      text={textHeading}
                    ></CustomText>
                  </div>
                </div>
                {/* <CustomText
                  className="font-custom font-semibold text-cgray text"
                  text={textHeading}
                ></CustomText> */}
              </div>
            </div>
            <div className="pt-2 pb-2 px-3">
              <div className="flex items-center    space-x-1 rtl:space-x-reverse">
                <div className="text-sm overflow-hidden">
                  <CustomText
                    className="font-custom font-bold text-black pl-2 text-lg"
                    text={valuetext}
                  ></CustomText>
                </div>
                <CustomText
                  className="font-custom font-bold text-cgray text-sm"
                  text={subText}
                ></CustomText>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

ExAndNutDashboardCard.displayName = "ExAndNutDashboardCard";

export { ExAndNutDashboardCard };
