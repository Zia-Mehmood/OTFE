import React, { useEffect, useState } from "react";
import { cn } from "../../../utls/utlis";
import DataTable, { createTheme } from "react-data-table-component";
import userData from "../../../data/reports.json";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PopModal from "./Modal";
import { useNavigate } from "react-router-dom";
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
const ReportList = React.forwardRef(
  ({ className, cardImage, bgPopular, ...props }, ref) => {
    const [search, setSearch] = useState("");
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [id, setId] = useState("");
    const [show, setShow] = useState(false);
    let data = userData;
    const navigate = useNavigate();
    const chooseActive = (item) => {
      console.log(item);
      navigate(`/admin/reports/detail`, { replace: true });
      // navigate(`/${item}`, { replace: true });
    };
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
          cursor: "pointer",
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
        name: "Type",
        sortable: true,

        width: "250px",
        selector: (row) => row.udid,
        cell: (row) => (
          <div
            onClick={(e) => chooseActive(e)}
            className=" flex items-center py-1  cursor-pointer  text-wrap "
          >
            <CustomText
              className=" font-custom font-bold text-sm pl-3      text-cblue"
              text={row.type}
            ></CustomText>
          </div>
        ),
      },
      {
        name: "Reason",
        width: "250px",
        selector: (row) => row.udid,
        sortable: true,
        cell: (row) => (
          <div
            onClick={(e) => chooseActive(e)}
            className="py-1  text-sm w-full "
          >
            {row.reason}
          </div>
        ),
      },
      {
        name: "Date & Time",
        selector: (row) => row.udid,
        sortable: true,
        cell: (row) => (
          <div
            onClick={(e) => chooseActive(e)}
            className="py-1  text-sm w-full "
          >
            {row.date}
          </div>
        ),
      },
      {
        name: "Id",
        selector: (row) => row.udid,
        cell: (row) => (
          <div
            onClick={(e) => chooseActive(e)}
            className="py-1  text-sm w-full "
          >
            {row.id}
          </div>
        ),
      },
      {
        name: "Staus",
        selector: (row) => row.udid,
        cell: (row) =>
          row.status == "Completed" ? (
            <div className="flex items-center">
              <div class="rounded-full  bg-cgreen w-4 h-3"></div>
              <CustomText
                className="py-1  pl-1 text-sm w-full"
                text={row.status}
              ></CustomText>
            </div>
          ) : (
            <div className="flex items-center">
              <div class="rounded-full   bg-red-600 w-4 h-3"></div>
              <CustomText
                className="py-1 pl-1  text-sm w-full"
                text={row.status}
              ></CustomText>
            </div>
          ),
      },
      {
        name: "Outcome",
        selector: (row) => row.udid,
        cell: (row) => (
          <div
            onClick={(e) => chooseActive(e)}
            className="py-1  text-sm w-full "
          >
            {row.outcome}
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
          className="font-custom  "
          columns={columns}
          data={filteredUsers}
          pagination
          fixedHeader
          fixedHeaderScrollHeight="420px"
          highlightOnHover
          subHeader
          onRowClicked={(e) => chooseActive(e)}
          customStyles={customStyles}
          subHeaderComponent={
            <input
              type="text"
              className={`font-custom   block w-full md:w-full lg:w-1/2 pl-2 rounded-md border-0 py-1.5 text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-active hover:ring-active sm:text-sm sm:leading-6`}
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

ReportList.displayName = "ReportList";

export { ReportList };
