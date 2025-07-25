import React, { useEffect, useState } from "react";
import { cn } from "../../../utls/utlis";
import DataTable, { createTheme } from "react-data-table-component";
import userData from "../../../data/programs.json";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PopModal from "./Modal";
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
        name: "Name",
        sortable: true,
        width: "320px",
        cell: (row) => (
          <div className=" py-1   text-wrap ">
            <Link
              to={`/instructorprofileview/${row.uid}`}
              className="font-custom text-cblue text-sm py-1 w-full  text-balance  hover:underline mr-1 md:mr-3 lg:mr-5 "
            >
              {row.name}
            </Link>
          </div>
        ),
      },
      {
        name: "Duration",
        selector: (row) => row.duration,
        sortable: true,
        cell: (row) => (
          <div className="py-1  text-sm w-full ">{row.duration}</div>
        ),
      },
      {
        name: "Level",
        selector: (row) => row.level,
        cell: (row) => <div className="py-1  text-sm w-full ">{row.level}</div>,
      },
      {
        name: "Goal",
        selector: (row) => row.goal,
        cell: (row) => <div className="py-1  text-sm w-full ">{row.goal}</div>,
      },
      {
        name: "Location",
        selector: (row) => row.location,
        cell: (row) => (
          <div className="py-1  text-sm w-full ">{row.location}</div>
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
          className="font-custom  "
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
              className={`font-custom  block w-full md:w-full lg:w-1/2 pl-2 rounded-md border-0 py-1.5 text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-active hover:ring-active sm:text-sm sm:leading-6`}
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
