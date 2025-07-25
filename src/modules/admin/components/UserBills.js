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
const UserBills = React.forwardRef(
  ({ className, cardImage, bgPopular, ...props }, ref) => {
    const [search, setSearch] = useState("");
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [id, setId] = useState("");
    const [show, setShow] = useState(false);
    let data = userData;

    const customStyles = {
      header: {
        backgroundColor: "red",
      },
      headRow: {
        style: {
          color: "#223336",
          backgroundColor: "#e7eef0",
          minHeight: "35px",
          border: "none",
          boxShadow: "none",
        },
      },
      striped: {
        default: "red",
      },
      rows: {
        style: {
          color: "#5E5E5E",
          //   backgroundColor: "#FFFFFF",
          //   "&:nth-child(2n)": {
          //     backgroundColor: "#FFFFFF",
          //   },
          minHeight: "30px",
          border: "none",
          boxShadow: "none",
          broderBottom: "0px",
          marginBottom: "10px",
        },
        stripedStyle: {
          color: "#223336",
          backgroundColor: "#223336",
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
          border: "none",
          boxShadow: "none",
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
        name: "Invoice ID",
        selector: (row) => row.muscleGroup,
        cell: (row) => (
          <div className="py-1  text-sm w-full ">{row.muscleGroup}</div>
        ),
      },
      {
        name: "Billing Date",
        selector: (row) => row.exerciseID,
        sortable: true,
        cell: (row) => (
          <div className="py-1  text-sm w-full ">{row.exerciseID}</div>
        ),
      },
      {
        name: "Plan",
        selector: (row) => row.exerciseID,
        sortable: true,
        cell: (row) => (
          <div className="py-1  text-sm w-full ">{row.exerciseID}</div>
        ),
      },
      {
        name: "Amount",
        selector: (row) => row.exerciseID,
        sortable: true,
        cell: (row) => (
          <div className="py-1  text-sm w-full ">{row.exerciseID}</div>
        ),
      },
      {
        name: "Status",
        selector: (row) => row.equipment,
        cell: (row) => (
          <div className="py-1  text-sm w-full ">{row.equipment}</div>
        ),
      },
    ];

    return (
      <div className="w-full border border-solid border-gray-300 rounded-lg mt-10 bg-bodyBg">
        <div className="hidden md:block lg:block  px-3 pt-2 justify-between items-center ">
          <CustomText
            className="text-black text-lg font-bold "
            text="Invoice"
          ></CustomText>
        </div>
        <div className="hidden md:block lg:block px-3 pt-5">
          <div className="flex justify-between items-center  pl-2">
            <CustomText
              className=" text-cblack text-xs font-bold w-2/12"
              text="Invoice Id"
            ></CustomText>
            <CustomText
              className="text-cblack text-xs font-bold w-2/12"
              text="Billing Date"
            ></CustomText>
            <CustomText
              className="text-cblack text-xs font-bold w-2/12"
              text="Plan"
            ></CustomText>
            <CustomText
              className="text-cblack text-xs font-bold w-2/12"
              text="Amount"
            ></CustomText>
            <CustomText
              className="text-cblack text-xs font-bold w-2/12"
              text="Status"
            ></CustomText>
          </div>
        </div>
        <div className="hidden md:block lg:block  px-3 py-3">
          <div className="flex justify-between items-center bg-cwhite rounded-md py-3 pl-2">
            <CustomText
              className=" text-cblack text-xs font-bold w-2/12 "
              text="#12345"
            ></CustomText>
            <CustomText
              className="text-cblack text-xs font-bold w-2/12   "
              text="7/24/2024"
            ></CustomText>
            <CustomText
              className="text-cblack text-xs font-bold w-2/12  "
              text="Premium Subscription"
            ></CustomText>
            <CustomText
              className="text-cblack text-xs font-bold w-2/12  "
              text="$12.99"
            ></CustomText>
            <div className="w-2/12">
              <CustomText
                className="text-xs font-bold  w-fit px-4 py-1.5 rounded-lg  text-cgreen bg-clightgreen "
                text="Paid"
              ></CustomText>
            </div>
          </div>
        </div>{" "}
        <div className="hidden md:block lg:block  px-3 py-3">
          <div className="flex justify-between items-center bg-cwhite rounded-md py-3 pl-2">
            <CustomText
              className=" text-cblack text-xs font-bold w-2/12 "
              text="#12345"
            ></CustomText>
            <CustomText
              className="text-cblack text-xs font-bold w-2/12   "
              text="7/24/2024"
            ></CustomText>
            <CustomText
              className="text-cblack text-xs font-bold w-2/12  "
              text="Premium Subscription"
            ></CustomText>
            <CustomText
              className="text-cblack text-xs font-bold w-2/12  "
              text="$12.99"
            ></CustomText>
            <div className="w-2/12">
              <CustomText
                className="text-xs font-bold  w-fit px-4 py-1.5 rounded-lg  text-cgreen bg-clightgreen "
                text="Paid"
              ></CustomText>
            </div>
          </div>
        </div>{" "}
        <div className="hidden md:block lg:block  px-3 py-3">
          <div className="flex justify-between items-center bg-cwhite rounded-md py-3 pl-2">
            <CustomText
              className=" text-cblack text-xs font-bold w-2/12 "
              text="#12345"
            ></CustomText>
            <CustomText
              className="text-cblack text-xs font-bold w-2/12   "
              text="7/24/2024"
            ></CustomText>
            <CustomText
              className="text-cblack text-xs font-bold w-2/12  "
              text="Premium Subscription"
            ></CustomText>
            <CustomText
              className="text-cblack text-xs font-bold w-2/12  "
              text="$12.99"
            ></CustomText>
            <div className="w-2/12">
              <CustomText
                className="text-xs font-bold  w-fit px-4 py-1.5 rounded-lg  text-cgreen bg-clightgreen "
                text="Paid"
              ></CustomText>
            </div>
          </div>
        </div>{" "}
        <div className="hidden md:block lg:block  px-3 py-3">
          <div className="flex justify-between items-center bg-cwhite rounded-md py-3 pl-2">
            <CustomText
              className=" text-cblack text-xs font-bold w-2/12 "
              text="#12345"
            ></CustomText>
            <CustomText
              className="text-cblack text-xs font-bold w-2/12   "
              text="7/24/2024"
            ></CustomText>
            <CustomText
              className="text-cblack text-xs font-bold w-2/12  "
              text="Premium Subscription"
            ></CustomText>
            <CustomText
              className="text-cblack text-xs font-bold w-2/12  "
              text="$12.99"
            ></CustomText>
            <div className="w-2/12">
              <CustomText
                className="text-xs font-bold  w-fit px-4 py-1.5 rounded-lg  text-cgreen bg-clightgreen "
                text="Paid"
              ></CustomText>
            </div>
          </div>
        </div>
        <div className="block md:hidden lg:hidden px-3 py-3">
          <div className="bg-cwhite rounded-lg shadow-md py-3 px-2">
            <div>
              <CustomText
                className="text-black text-lg font-bold "
                text="Invoice"
              ></CustomText>
            </div>
            <div className="flex flex-wrap items-center justify-start">
              <div className="flex items-center py-1">
                <CustomText
                  className="text-black text-sm font-bold "
                  text="Invoice"
                ></CustomText>
                <CustomText
                  className=" text-cblack text-sm font-bold pl-1 "
                  text="#12345"
                ></CustomText>
              </div>
              <div className="flex items-center pl-2 py-1">
                <CustomText
                  className="text-black text-sm font-bold "
                  text="Billing Date"
                ></CustomText>
                <CustomText
                  className=" text-cblack text-sm font-bold pl-1 "
                  text="7/24/2024"
                ></CustomText>
              </div>
              <div className="flex items-center py-1 ">
                <CustomText
                  className="text-black text-sm font-bold "
                  text="Plan"
                ></CustomText>
                <CustomText
                  className=" text-cblack text-sm font-bold pl-2 "
                  text="Premium Subscription"
                ></CustomText>
              </div>
            </div>
            <div className="flex items-center justify-between pr-2">
              <div className="flex items-center py-1">
                <CustomText
                  className="text-black text-sm font-bold "
                  text="Invoice"
                ></CustomText>
                <CustomText
                  className=" text-cblack text-sm font-bold pl-2 "
                  text="#12345"
                ></CustomText>
              </div>
              <div className="flex items-center py-1 pl-3">
                <CustomText
                  className="text-black text-sm font-bold  "
                  text="Status"
                ></CustomText>
                <div className="pl-3">
                  <CustomText
                    className="text-sm font-bold  w-fit px-4 py-1.5 rounded-lg  text-cgreen bg-clightgreen "
                    text="Paid"
                  ></CustomText>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="block md:hidden lg:hidden px-3 py-3">
          <div className="bg-cwhite rounded-lg shadow-md py-3 px-2">
            <div>
              <CustomText
                className="text-black text-lg font-bold "
                text="Invoice"
              ></CustomText>
            </div>
            <div className="flex flex-wrap items-center justify-start">
              <div className="flex items-center py-1">
                <CustomText
                  className="text-black text-sm font-bold "
                  text="Invoice"
                ></CustomText>
                <CustomText
                  className=" text-cblack text-sm font-bold pl-1 "
                  text="#12345"
                ></CustomText>
              </div>
              <div className="flex items-center pl-2 py-1">
                <CustomText
                  className="text-black text-sm font-bold "
                  text="Billing Date"
                ></CustomText>
                <CustomText
                  className=" text-cblack text-sm font-bold pl-1 "
                  text="7/24/2024"
                ></CustomText>
              </div>
              <div className="flex items-center py-1 ">
                <CustomText
                  className="text-black text-sm font-bold "
                  text="Plan"
                ></CustomText>
                <CustomText
                  className=" text-cblack text-sm font-bold pl-2 "
                  text="Premium Subscription"
                ></CustomText>
              </div>
            </div>
            <div className="flex items-center justify-between pr-2">
              <div className="flex items-center py-1">
                <CustomText
                  className="text-black text-sm font-bold "
                  text="Invoice"
                ></CustomText>
                <CustomText
                  className=" text-cblack text-sm font-bold pl-2 "
                  text="#12345"
                ></CustomText>
              </div>
              <div className="flex items-center py-1 pl-3">
                <CustomText
                  className="text-black text-sm font-bold  "
                  text="Status"
                ></CustomText>
                <div className="pl-3">
                  <CustomText
                    className="text-sm font-bold  w-fit px-4 py-1.5 rounded-lg  text-cgreen bg-clightgreen "
                    text="Paid"
                  ></CustomText>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="block md:hidden lg:hidden px-3 py-3">
          <div className="bg-cwhite rounded-lg shadow-md py-3 px-2">
            <div>
              <CustomText
                className="text-black text-lg font-bold "
                text="Invoice"
              ></CustomText>
            </div>
            <div className="flex flex-wrap items-center justify-start">
              <div className="flex items-center py-1">
                <CustomText
                  className="text-black text-sm font-bold "
                  text="Invoice"
                ></CustomText>
                <CustomText
                  className=" text-cblack text-sm font-bold pl-1 "
                  text="#12345"
                ></CustomText>
              </div>
              <div className="flex items-center pl-2 py-1">
                <CustomText
                  className="text-black text-sm font-bold "
                  text="Billing Date"
                ></CustomText>
                <CustomText
                  className=" text-cblack text-sm font-bold pl-1 "
                  text="7/24/2024"
                ></CustomText>
              </div>
              <div className="flex items-center py-1 ">
                <CustomText
                  className="text-black text-sm font-bold "
                  text="Plan"
                ></CustomText>
                <CustomText
                  className=" text-cblack text-sm font-bold pl-2 "
                  text="Premium Subscription"
                ></CustomText>
              </div>
            </div>
            <div className="flex items-center justify-between pr-2">
              <div className="flex items-center py-1">
                <CustomText
                  className="text-black text-sm font-bold "
                  text="Invoice"
                ></CustomText>
                <CustomText
                  className=" text-cblack text-sm font-bold pl-2 "
                  text="#12345"
                ></CustomText>
              </div>
              <div className="flex items-center py-1 pl-3">
                <CustomText
                  className="text-black text-sm font-bold  "
                  text="Status"
                ></CustomText>
                <div className="pl-3">
                  <CustomText
                    className="text-sm font-bold  w-fit px-4 py-1.5 rounded-lg  text-cgreen bg-clightgreen "
                    text="Paid"
                  ></CustomText>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="block md:hidden lg:hidden px-3 py-3">
          <div className="bg-cwhite rounded-lg shadow-md py-3 px-2">
            <div>
              <CustomText
                className="text-black text-lg font-bold "
                text="Invoice"
              ></CustomText>
            </div>
            <div className="flex flex-wrap items-center justify-start">
              <div className="flex items-center py-1">
                <CustomText
                  className="text-black text-sm font-bold "
                  text="Invoice"
                ></CustomText>
                <CustomText
                  className=" text-cblack text-sm font-bold pl-1 "
                  text="#12345"
                ></CustomText>
              </div>
              <div className="flex items-center pl-2 py-1">
                <CustomText
                  className="text-black text-sm font-bold "
                  text="Billing Date"
                ></CustomText>
                <CustomText
                  className=" text-cblack text-sm font-bold pl-1 "
                  text="7/24/2024"
                ></CustomText>
              </div>
              <div className="flex items-center py-1 ">
                <CustomText
                  className="text-black text-sm font-bold "
                  text="Plan"
                ></CustomText>
                <CustomText
                  className=" text-cblack text-sm font-bold pl-2 "
                  text="Premium Subscription"
                ></CustomText>
              </div>
            </div>
            <div className="flex items-center justify-between pr-2">
              <div className="flex items-center py-1">
                <CustomText
                  className="text-black text-sm font-bold "
                  text="Invoice"
                ></CustomText>
                <CustomText
                  className=" text-cblack text-sm font-bold pl-2 "
                  text="#12345"
                ></CustomText>
              </div>
              <div className="flex items-center py-1 pl-3">
                <CustomText
                  className="text-black text-sm font-bold  "
                  text="Status"
                ></CustomText>
                <div className="pl-3">
                  <CustomText
                    className="text-sm font-bold  w-fit px-4 py-1.5 rounded-lg  text-cgreen bg-clightgreen "
                    text="Paid"
                  ></CustomText>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <ToastContainer />
        <PopModal
          open={show}
          onClose={() => setShow(false)}
          onCancel={() => setShow(false)}
          onYes={() => {
            setShow(false);
            deleteUser();
          }}
        />
        <div className=" px-3 pt-2 ">
          <DataTable
            className="font-custom  bg-cgreen"
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
                className={`font-custom  bg-bodyBg block w-1/2 pl-2 rounded-md border-0 py-1.5 text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-active hover:ring-active sm:text-sm sm:leading-6`}
                // className=" font-custom  block w-full text-text rounded-md border pl-2 py-1.5   border-gray-300  sm:text-xs focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search here"
                onChange={(e) => setSearch(e.target.value)}
              />
            }
          />
        </div> */}
      </div>
    );
  }
);

UserBills.displayName = "UserBills";

export { UserBills };
