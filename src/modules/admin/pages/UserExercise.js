import React, { useEffect, useState } from "react";
import { UserDetailHeader } from "../components/UserDetailHeader";
import { UserReports } from "../components/UserReports";
import { NutritionHeader } from "../components/NutritionHeader";
import { CustomText } from "../../common/components/CustomText";
import { CustomButton } from "../../common/components/CustomButton";
import userData from "../../../data/exercise.json";
import { UserExerciseHeader } from "../components/UserExerciseHeader";
import ExAndNutDashboard from "../components/ExAndNutDashboard";
function UserExercise(props) {
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
    <div>
      <div>
        <div className="px-2  ">
          <CustomText
            className="text-black text-lg font-bold  pt-2 "
            text="Nutrition"
          ></CustomText>
          <NutritionHeader></NutritionHeader>
        </div>
        <div className="px-2 pt-4  ">
          <div className="flex justify-between items-end">
            <CustomText
              className="text-black text-lg font-bold pt-1   "
              text="Exercise"
            ></CustomText>
            <CustomButton
              disabled={loading}
              loading={loading}
              name="Assign New "
              width="28"
              source={""}
              className=" py-1 text-sm    w-32 font-semibold focus:outline-none text-cwhite bg-cblue  border-cblack border-solid border rounded-md "
              click={() => onSubmit()}
            ></CustomButton>
          </div>

          <UserExerciseHeader></UserExerciseHeader>
        </div>
        <div className="px-2 pt-4  ">
          <ExAndNutDashboard></ExAndNutDashboard>
        </div>
      </div>
    </div>
  );
}

export default UserExercise;
