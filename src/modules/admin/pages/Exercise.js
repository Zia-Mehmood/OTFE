import "../../../App.css";
import React, { useEffect, useState } from "react";
import { CustomButton } from "../../common/components/CustomButton";
import { ProgramList } from "../components/ProgramList";
import { ExerciseList } from "../components/ExerciseList";
import { FilterList } from "../components/FilterList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { CustomText } from "../../common/components/CustomText";
import { initModals, initDrawers } from "flowbite";
function Exercise(props) {
  const [loading, setLoading] = useState(false);
  const onSubmit = () => {
    // setFromErrors(validate());
    // setIsSubmit(true);
  };
  useEffect(() => {
    initModals();
    //initDrawers();
    // change background color with a random color
  }, []);
  return (
    <div>
      <div className=" pb-2 pt-0 md:pt-5 lg:pt-0 ">
        <div className=" flex justify-end me-2  ">
          <CustomButton
            disabled={loading}
            loading={loading}
            name="Add Exercise"
            width="28"
            source={""}
            className=" py-2 text-sm  px-2 w-40 font-bold focus:outline-none text-cwhite bg-cblue  border-cblack border-solid border rounded-md "
            click={() => onSubmit()}
          ></CustomButton>
        </div>
        <div className="lg:flex w-full justify-around">
          <div>
            <button
              data-drawer-target="filterbox"
              data-drawer-toggle="filterbox"
              aria-controls="filterbox"
              data-drawer-placement="right"
              type="button"
              className=" hidden md:hidden  lg:hidden items-center p-2  ms-3 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
              id="filterbox"
              class=" fixed top-0 right-0 block  lg:hidden z-40 pt-14 md:pt-20 lg:pt-20 w-64 md:w-52  lg:w-64 h-screen transition-transform translate-x-full "
              aria-label="filterbox"
            >
              <FilterList></FilterList>
            </div>
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
          <div className="lg:w-10/12">
            <ExerciseList></ExerciseList>
          </div>
          <div className="hidden md:hidden lg:block w-2/3 lg:w-2/12">
            <FilterList></FilterList>
          </div>
        </div>
      </div>
    </div>
  );
}
Exercise.displayName = "AdminExercise";
export default Exercise;
