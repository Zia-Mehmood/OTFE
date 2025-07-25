import React, { useEffect, useState } from "react";
import { cn } from "../../../utls/utlis";
import userData from "../../../data/exercise.json";
import "react-toastify/dist/ReactToastify.css";

import { CustomText } from "../../common/components/CustomText";
import { CustomButton } from "../../common/components/CustomButton";

const UserAccountNotes = React.forwardRef(
  ({ className, cardImage, bgPopular, ...props }, ref) => {
    const [users, setUsers] = useState([]);
    let data = userData;
    const [loading, setLoading] = useState(false);
    const onSubmit = () => {
      // setFromErrors(validate());
      // setIsSubmit(true);
    };
    useEffect(() => {
      setUsers(data);
    }, []);

    return (
      <div className="w-full border border-solid pb-4 border-gray-300 rounded-md ">
        <div className="flex px-3 pt-2 justify-between items-center ">
          <CustomText
            className="text-black text-lg font-bold "
            text="Account Notes"
          ></CustomText>
          <CustomButton
            disabled={loading}
            loading={loading}
            name="Add New Note"
            width="28"
            source={""}
            className=" py-2 text-sm  px-2 w-40 font-bold focus:outline-none text-cwhite bg-cblue  border-cblack border-solid border rounded-md "
            click={() => onSubmit()}
          ></CustomButton>
        </div>

        <div className="flex justify-start py-3 pb-2 border-b border-b-solid border-b-gray-300 mx-4  ">
          <div className=" mt-1.5">
            <CustomText
              className="text-black text-xs leading-0 font-bold  "
              text="Billing question on account"
            ></CustomText>
            <div className="flex justify-normal">
              <CustomText
                className="text-black text-xs font-bold leading-0  "
                text="2/15/2022"
              ></CustomText>
              <CustomText
                className="text-cblack text-xs leading-0 pl-3"
                text="Patrick spoke with Laura regarding her billing question. We got it "
              ></CustomText>
            </div>
          </div>
        </div>

        <div className="flex justify-start py-3 pb-2  border-b border-b-solid border-b-gray-300 mx-4   ">
          <div className=" mt-1.5">
            <CustomText
              className="text-black text-xs leading-0 font-bold  "
              text="Report on a post"
            ></CustomText>
            <div className="flex justify-normal">
              <CustomText
                className="text-black text-xs font-bold leading-0  "
                text="2/15/2022"
              ></CustomText>
              <CustomText
                className="text-cblack text-xs leading-0 pl-3"
                text="Patrick spoke with Laura regarding her billing question. We got it "
              ></CustomText>
            </div>
          </div>
        </div>

        <div className="flex justify-start py-3 pb-2 border-b border-b-solid border-b-gray-300 mx-4  ">
          <div className=" mt-1.5">
            <CustomText
              className="text-black text-xs leading-0 font-bold  "
              text="Billing question on account"
            ></CustomText>
            <div className="flex justify-normal">
              <CustomText
                className="text-black text-xs font-bold leading-0  "
                text="2/15/2022"
              ></CustomText>
              <CustomText
                className="text-cblack text-xs leading-0 pl-3"
                text="Patrick spoke with Laura regarding her billing question. We got it "
              ></CustomText>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

UserAccountNotes.displayName = "UserAccountNotes";

export { UserAccountNotes };
