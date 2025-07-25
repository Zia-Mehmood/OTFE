import React, { useEffect, useState } from "react";
import { cn } from "../../../utls/utlis";
import DataTable from "react-data-table-component";
import userData from "../../../data/userData.json";
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
const ProgramList = React.forwardRef(
  ({ className, cardImage, bgPopular, ...props }, ref) => {
    const [search, setSearch] = useState("");
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [id, setId] = useState("");
    const [show, setShow] = useState(false);
    let data = userData;
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
    const customStyles = {
      headRow: {
        style: {
          color: "#223336",
          backgroundColor: "#e7eef0",
          minHeight: "35px",
        },
      },
      rows: {
        style: {
          color: "#5E5E5E",
          backgroundColor: "#FFFFFF",
          "&:nth-child(2n)": {
            backgroundColor: "#f6f6f6",
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
    const columns = [
      {
        id: "name",
        name: "Name",
        sortable: true,
        width: "320px",
        cell: (row) => (
          <div className=" flex items-center py-2   text-wrap ">
            <img
              class="  h-12 w-16  rounded-lg  "
              src={require("../../../assets/images/ex4.jpg")}
              alt={row.name}
            />
            <div>
              <CustomText
                className=" font-custom font-bold text-xs pl-3      text-cblack"
                text="Intermediate Hypertrophy Trainer"
              ></CustomText>
              <div className="flex pt-2 pl-3  items-center space-x-2 rtl:space-x-reverse">
                <div class="flex items-center">
                  <svg
                    class="w-4 h-4 text-yellow-300 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    class="w-4 h-4 text-yellow-300 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    class="w-4 h-4 text-yellow-300 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    class="w-4 h-4 text-yellow-300 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </div>
                <CustomText
                  className=" font-custom pt-0.5 font-bold text-xs       text-cblack"
                  text="330"
                ></CustomText>
              </div>
            </div>
          </div>
        ),
      },
      {
        name: "Subscribers",

        selector: (row) => row.email,
        sortable: true,
        cell: (row) => (
          <CustomText
            className=" font-custom font-bold text-xs     text-cblack"
            text="2.1k"
          ></CustomText>
        ),
      },
      {
        name: "Revenue",
        selector: (row) => row.name,
        sortable: true,
        cell: (row) => (
          <CustomText
            className=" font-custom font-bold text-xs       text-green-500"
            text="$25.7k"
          ></CustomText>
        ),
      },
      {
        name: "Duration",
        selector: (row) => row.postalCode,
        cell: (row) => (
          <CustomText
            className=" font-custom font-bold text-xs       text-cblack"
            text="12 weeks"
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

ProgramList.displayName = "ProgramList";

export { ProgramList };
