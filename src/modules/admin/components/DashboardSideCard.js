import React from "react";
import { cn } from "../../../utls/utlis";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CustomText } from "../../common/components/CustomText";
const DashboardSideCard = React.forwardRef(
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
            <div class="py-2  px-5 flex justify-start items-center">
              <div>
                <CustomText
                  className="font-custom font-bold text-cblue text-2xl"
                  text={textHeading}
                ></CustomText>

                <CustomText
                  className="font-custom pt-2 font-semibold text-cdardgray text-xl"
                  text={pertext}
                ></CustomText>
                <CustomText
                  className="font-custom font-semibold text-cgray text-lg"
                  text={valuetext}
                ></CustomText>
                <CustomText
                  className="font-custom pt-2 font-semibold text-cdardgray text-xl"
                  text={subText}
                ></CustomText>
                <CustomText
                  className="font-custom font-semibold text-cgray text-lg"
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

DashboardSideCard.displayName = "DashboardSideCard";

export { DashboardSideCard };
