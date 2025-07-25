import React, { useEffect, useState } from "react";
import { cn } from "../../../utls/utlis";
import DataTable, { createTheme } from "react-data-table-component";
import userData from "../../../data/exercise.json";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PopModal from "./Modal";
import { CustomText } from "../../common/components/CustomText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faArrowUp,
  faShoppingBasket,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
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
const ExerciseList = React.forwardRef(
  ({ className, cardImage, bgPopular, ...props }, ref) => {
    const [search, setSearch] = useState("");
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [id, setId] = useState("");
    const [show, setShow] = useState(false);
    let data = userData;

    const customStyles = {
      headRow: {
        style: {
          color: "#223336",
          backgroundColor: "#92c3ff",
          minHeight: "35px",
        },
      },
      rows: {
        style: {
          color: "#5E5E5E",
          backgroundColor: "#FFFFFF",
          "&:nth-child(2n)": {
            backgroundColor: "#FFFFFF",
          },
          minHeight: "30px",
        },
      },

      headCells: {
        style: {
          paddingLeft: "8px", // override the cell padding for head cells
          paddingRight: "8px",
          minHeight: "30px",
        },
        head: {
          style: {
            minHeight: "30px",
          },
        },
      },
      cells: {
        style: {
          paddingLeft: "8px", // override the cell padding for data cells
          paddingRight: "8px",
        },
      },
    };
    useEffect(() => {
      const result = users.filter((item) => {
        return item.name.toLowerCase().match(search.toLowerCase());
      });
      setFilteredUsers(result);
    }, [search]);
    useEffect(() => {
      setUsers(data);
      setFilteredUsers(data);
    }, []);

    const columns = [
      {
        id: "name",
        name: "Exercise Name",
        sortable: true,
        width: "320px",
        cell: (row) => (
          <div className=" flex items-center py-2   text-wrap ">
            <img
              class="  h-8 w-12  rounded-md "
              src={require("../../../assets/images/ex4.jpg")}
              alt={row.name}
            />
            <div>
              <CustomText
                className=" font-custom font-bold text-xs pl-3      text-cblack"
                text="Barbell Bench Press"
              ></CustomText>
            </div>
          </div>
        ),
      },
      {
        name: "Equipment",

        selector: (row) => row.email,
        sortable: true,
        cell: (row) => (
          <CustomText
            className=" font-custom font-bold text-xs     text-cblack"
            text="Barbell"
          ></CustomText>
        ),
      },
      {
        name: "Primary Muscle",
        selector: (row) => row.name,
        sortable: true,
        cell: (row) => (
          <CustomText
            className=" font-custom font-bold text-xs   text-cblack"
            text="Chest, deltoids"
          ></CustomText>
        ),
      },
      {
        name: "Mechanics",
        selector: (row) => row.postalCode,
        cell: (row) => (
          <CustomText
            className=" font-custom font-bold text-xs       text-cblack"
            text="Compound"
          ></CustomText>
        ),
      },
      {
        name: "Force",
        selector: (row) => row.postalCode,
        cell: (row) => (
          <CustomText
            className=" font-custom font-bold text-xs       text-cblack"
            text="Push"
          ></CustomText>
        ),
      },
      {
        name: "",
        selector: (row) => row.postalCode,
        cell: (row) => (
          <div className="w-full pr-5">
            <FontAwesomeIcon
              icon={faCog}
              className=" float-right text-cblack "
              size="xl"
            />
          </div>
        ),
      },
    ];

    return (
      <div>
        <ToastContainer />
        <PopModal
          open={show}
          onClose={() => setShow(false)}
          onCancel={() => setShow(false)}
          onYes={() => {
            setShow(false);
            deleteUser();
          }}
        />
        <DataTable
          className="font-custom "
          columns={columns}
          data={filteredUsers}
          pagination
          fixedHeader
          fixedHeaderScrollHeight="420px"
          highlightOnHover
          subHeader
          customStyles={customStyles}
          subHeaderComponent={
            <input
              type="text"
              className={`font-custom  block w-full lg:w-1/2 pl-2 rounded-md border-0 py-1.5 text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-active hover:ring-active sm:text-sm sm:leading-6`}
              // className=" font-custom  block w-full text-text rounded-md border pl-2 py-1.5   border-gray-300  sm:text-xs focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search here"
              onChange={(e) => setSearch(e.target.value)}
            />
          }
        />
      </div>
    );
  }
);

ExerciseList.displayName = "ExerciseList";

export { ExerciseList };
