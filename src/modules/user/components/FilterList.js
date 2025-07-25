import React, { useEffect, useState } from "react";
import { cn } from "../../../utls/utlis";
import DataTable, { createTheme } from "react-data-table-component";
import userData from "../../../data/exercise.json";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PopModal from "./Modal";
import { CustomText } from "../../common/components/CustomText";
const deleteUser = async () => {
  // const dbRef = doc(db, "Users", id);
  // await updateDoc(dbRef, {
  //   isDeleted: true,
  // });
  // getUsers();
  // toast.success("user deleted", {
  //   position: "top-right",
  //   theme: "colored",
  // });
};
const FilterList = React.forwardRef(
  ({ className, cardImage, bgPopular, ...props }, ref) => {
    const [users, setUsers] = useState([]);
    let data = userData;

    useEffect(() => {
      setUsers(data);
    }, []);

    return (
      <div className=" pr-5   ">
        <div class="flex items-center pt-2 pb-2 rounded-tr-lg rounded-tl-lg  bg-cwhite">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 ml-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <CustomText
            className="my-1 font-custom font-bold text-xs pl-3  text-cblack"
            text={"Favorites"}
          ></CustomText>
        </div>

        <div>
          <div className="pb-2 bg-cwhite rounded-br-lg rounded-bl-lg">
            <CustomText
              className="font-custom font-bold text-sm pl-2 py-1  text-cblack "
              text={"Muscle Group"}
            ></CustomText>
            <div class="flex items-center   bg-cwhite">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 ml-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <CustomText
                className="my-1 font-custom font-bold text-xs pl-3  text-cblack"
                text={"Chest"}
              ></CustomText>
            </div>
            <div class="flex items-center   bg-cwhite">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 ml-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <CustomText
                className="my-1 font-custom font-bold text-xs pl-3  text-cblack"
                text={"Biceps"}
              ></CustomText>
            </div>{" "}
            <div class="flex items-center   bg-cwhite">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 ml-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <CustomText
                className="my-1 font-custom font-bold text-xs pl-3  text-cblack"
                text={"Triceps"}
              ></CustomText>
            </div>{" "}
            <div class="flex items-center   bg-cwhite">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 ml-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <CustomText
                className="my-1 font-custom font-bold text-xs pl-3  text-cblack"
                text={"Shoulders"}
              ></CustomText>
            </div>{" "}
            <div class="flex items-center   bg-cwhite">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 ml-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <CustomText
                className="my-1 font-custom font-bold text-xs pl-3  text-cblack"
                text={"Lats"}
              ></CustomText>
            </div>{" "}
            <div class="flex items-center   bg-cwhite">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 ml-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <CustomText
                className="my-1 font-custom font-bold text-xs pl-3  text-cblack"
                text={"Middle Back"}
              ></CustomText>
            </div>{" "}
            <div class="flex items-center   bg-cwhite">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 ml-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <CustomText
                className="my-1 font-custom font-bold text-xs pl-3  text-cblack"
                text={"Low Back"}
              ></CustomText>
            </div>{" "}
            <div class="flex items-center   bg-cwhite">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 ml-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <CustomText
                className="my-1 font-custom font-bold text-xs pl-3  text-cblack"
                text={"Upper Back"}
              ></CustomText>
            </div>{" "}
            <div class="flex items-center   bg-cwhite">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 ml-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <CustomText
                className="my-1 font-custom font-bold text-xs pl-3  text-cblack"
                text={"Quadriceps"}
              ></CustomText>
            </div>{" "}
            <div class="flex items-center   bg-cwhite">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 ml-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <CustomText
                className="my-1 font-custom font-bold text-xs pl-3  text-cblack"
                text={"Hamstrings"}
              ></CustomText>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

FilterList.displayName = "FilterList";

export { FilterList };
