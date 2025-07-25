import React, { useEffect, useState } from "react";
import { CustomButton } from "../../common/components/CustomButton";
import { ProgramList } from "../components/ProgramList";
import { ExerciseList } from "../components/ExerciseList";
import { FilterList } from "../components/FilterList";
import { initModals, initDrawers } from "flowbite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
function Exercise(props) {
  const [loading, setLoading] = useState(false);
  const onSubmit = () => {
    // setFromErrors(validate());
    // setIsSubmit(true);
  };
  useEffect(() => {
    initModals();
  }, []);
  return (
    <div className="pt-5  bg-clightgray ">
      <div className=" pb-2 ">
        <div className=" pb-2 flex justify-end me-2  ">
          <CustomButton
            disabled={loading}
            loading={loading}
            name="Add Custom"
            width="28"
            source={""}
            className=" py-2 text-sm  px-2 w-40 font-bold focus:outline-none text-cwhite bg-cblue  border-cblack border-solid border rounded-md "
            click={() => onSubmit()}
          ></CustomButton>
        </div>
        <div>
          <button
            data-modal-target="select-modal"
            data-modal-toggle="select-modal"
            className="block md:block lg:hidden text-white   focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            <span className="sr-only">Open sidebar</span>
            <FontAwesomeIcon
              icon={faFilter}
              size="xl"
              className={
                "text-cdardgray group-hover:text-cwhite transition duration-75"
              }
            />
          </button>

          <div
            id="select-modal"
            tabindex="-1"
            aria-hidden="true"
            className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-baseline w-full mt-10 md:inset-0 h-[calc(100%-1rem)] max-h-full"
          >
            <div className="relative  p-4 w-full max-w-md max-h-full">
              <div className="relative rounded-lg shadow dark:bg-gray-700">
                <FilterList></FilterList>
              </div>
            </div>
          </div>
        </div>
        <div className="px-2 lg:flex w-full justify-around">
          <div className="w-full hidden md:hidden lg:block lg:w-2/12">
            <FilterList></FilterList>
          </div>
          <div className="w-full lg:w-10/12">
            <ExerciseList></ExerciseList>
          </div>
        </div>
      </div>
    </div>
  );
}
Exercise.displayName = "AdminExercise";
export default Exercise;
