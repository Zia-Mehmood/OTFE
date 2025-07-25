import "../../../App.css";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPieChart,
  faUsers,
  faCaretDown,
  faDumbbell,
  faDatabase,
  faFile,
  faMoneyCheck,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { initModals, initDrawers } from "flowbite";
function Sidebar(props) {
  const navigate = useNavigate();
  const [menu, setMenu] = useState("dashboard");
  const [menuChild, setMenuChild] = useState("");
  const [userMenuShow, setUserMenuSHow] = useState(false);
  const [exerciseMenuShow, setExerciseMenuSHow] = useState(false);
  useEffect(() => {
    initModals();
    initDrawers();
    // change background color with a random color
  }, []);
  const chooseActive = (item) => {
    console.log(item);
    navigate(`/${item}`, { replace: true });
  };
  const selectedMenu = (val) => {
    // change background color with a random color

    setMenu(val);
    setMenuChild("");
    if (val === "dashboard") {
      chooseActive("admin/dashboard");
    } else if (val === "exercise") {
      chooseActive("admin/programs");
      setMenuChild("prgorams");
    } else if (val === "users") {
      chooseActive("admin/employees");
      setMenuChild("employees");
    } else if (val === "reports") {
      chooseActive("admin/reports");
    }
  };
  const selectedMenuChild = (val, parent) => {
    // change background color with a random color
    if (parent === "p1") {
      setMenu(parent);
    } else {
      setMenu(parent);
    }
    if (val === "prgorams") {
      chooseActive("admin/programs");
    } else if (val === "exerciselib") {
      chooseActive("admin/exericse");
    } else if (val === "employees") {
      chooseActive("admin/employees");
    } else if (val === "usersDir") {
      chooseActive("admin/users");
    }
    setMenuChild(val);
  };

  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="mt-12  inline-flex items-center p-2  ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <FontAwesomeIcon
          icon={faBars}
          size="xl"
          className={
            "text-cdardgray group-hover:text-cwhite transition duration-75"
          }
        />
        {/* <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg> */}
      </button>
      <aside
        id="default-sidebar"
        class="fixed top-0 left-0 z-40 pt-14 md:pt-20 lg:pt-20 w-64 md:w-52  lg:w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="default-sidebar"
        tabindex="-2"
        aria-hidden="true"
      >
        <div className="h-full px-2 md:px-2 lg:px-3 pt-5 md:pt-0 lg:pt-0 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                role="button"
                onClick={() => selectedMenu("dashboard")}
                className={
                  menu == "dashboard"
                    ? "bg-cblue flex items-center p-2 text-cwhite rounded-lg dark:text-white hover:bg-cblue hover:text-cwhite dark:hover:bg-gray-700 group"
                    : "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-cblue hover:text-cwhite dark:hover:bg-gray-700 group"
                }
              >
                <FontAwesomeIcon
                  icon={faPieChart}
                  size="xl"
                  className={
                    menu == "dashboard"
                      ? "text-cwhite  group-hover:text-cwhite transition duration-75"
                      : "text-cdardgray group-hover:text-cwhite transition duration-75"
                  }
                />
                <span className="ms-3">Dashboard</span>
              </a>
            </li>
            <li>
              <div id="exerciseheading">
                <button
                  type="button"
                  aria-controls="exercise"
                  data-collapse-toggle="exercise"
                  className={
                    menu == "exercise"
                      ? "bg-cblue flex items-center w-full p-2 text-base text-cwhite transition duration-75 rounded-lg group hover:bg-cblue hover:text-cwhite dark:text-white dark:hover:bg-gray-700"
                      : "flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-cblue hover:text-cwhite dark:text-white dark:hover:bg-gray-700"
                  }
                  onClick={() => selectedMenu("exercise")}
                >
                  <FontAwesomeIcon
                    icon={faDumbbell}
                    size="xl"
                    className={
                      menu == "exercise"
                        ? "text-cwhite  group-hover:text-cwhite transition duration-75"
                        : "text-cdardgray group-hover:text-cwhite transition duration-75"
                    }
                  />
                  <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                    Exercise
                  </span>
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    size="sm"
                    className={
                      menu == "exercise"
                        ? "text-cwhite  group-hover:text-cwhite transition duration-75"
                        : "text-cdardgray group-hover:text-cwhite transition duration-75"
                    }
                  />
                </button>
                <ul
                  id="exercise"
                  aria-labelledby="exercise"
                  className={
                    menuChild === "prgorams" ||
                    menuChild === "exerciselib" ||
                    menu === "exercise"
                      ? " py-2 space-y-2"
                      : " hidden py-2 space-y-2"
                  }
                >
                  <li>
                    <a
                      role="button"
                      onClick={() => selectedMenuChild("prgorams", "exercise")}
                      className={
                        menuChild == "prgorams"
                          ? "bg-cblue flex items-center w-full p-2 text-cwhite hover:text-cwhite transition duration-75 rounded-lg pl-11 group hover:bg-cblue dark:text-white dark:hover:bg-gray-700"
                          : "flex items-center w-full p-2 text-cblack hover:text-cwhite transition duration-75 rounded-lg pl-11 group hover:bg-cblue dark:text-white dark:hover:bg-gray-700"
                      }
                    >
                      Programs
                    </a>
                  </li>
                  <li>
                    <a
                      role="button"
                      onClick={() =>
                        selectedMenuChild("exerciselib", "exercise")
                      }
                      className={
                        menuChild == "exerciselib"
                          ? "bg-cblue flex items-center w-full p-2 text-cwhite hover:text-cwhite transition duration-75 rounded-lg pl-11 group hover:bg-cblue dark:text-white dark:hover:bg-gray-700"
                          : "flex items-center w-full p-2 text-cblack hover:text-cwhite transition duration-75 rounded-lg pl-11 group hover:bg-cblue dark:text-white dark:hover:bg-gray-700"
                      }
                    >
                      Exercise Library
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div>
                <button
                  type="button"
                  aria-controls="users"
                  data-collapse-toggle="users"
                  className={
                    menu == "users"
                      ? "bg-cblue flex items-center w-full p-2 text-base text-cwhite transition duration-75 rounded-lg group hover:bg-cblue hover:text-cwhite dark:text-white dark:hover:bg-gray-700"
                      : "flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-cblue hover:text-cwhite dark:text-white dark:hover:bg-gray-700"
                  }
                  onClick={() => selectedMenu("users")}
                >
                  <FontAwesomeIcon
                    icon={faUsers}
                    size="xl"
                    className={
                      menu == "users"
                        ? "text-cwhite  group-hover:text-cwhite transition duration-75"
                        : "text-cdardgray group-hover:text-cwhite transition duration-75"
                    }
                  />
                  <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                    Users
                  </span>
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    size="sm"
                    className={
                      menu == "users"
                        ? "text-cwhite  group-hover:text-cwhite transition duration-75"
                        : "text-cdardgray group-hover:text-cwhite transition duration-75"
                    }
                  />
                </button>
                <ul
                  id="users"
                  aria-labelledby="users"
                  className={
                    menuChild === "employees" ||
                    menuChild === "usersDir" ||
                    menu === "users"
                      ? " py-2 space-y-2"
                      : " hidden py-2 space-y-2"
                  }
                >
                  <li>
                    <a
                      role="button"
                      onClick={() => selectedMenuChild("employees", "users")}
                      className={
                        menuChild == "employees"
                          ? "bg-cblue flex items-center w-full p-2 text-cwhite hover:text-cwhite transition duration-75 rounded-lg pl-11 group hover:bg-cblue dark:text-white dark:hover:bg-gray-700"
                          : "flex items-center w-full p-2 text-cblack hover:text-cwhite transition duration-75 rounded-lg pl-11 group hover:bg-cblue dark:text-white dark:hover:bg-gray-700"
                      }
                    >
                      Employees
                    </a>
                  </li>
                  <li>
                    <a
                      role="button"
                      onClick={() => selectedMenuChild("usersDir", "users")}
                      className={
                        menuChild == "usersDir"
                          ? "bg-cblue flex items-center w-full p-2 text-cwhite hover:text-cwhite transition duration-75 rounded-lg pl-11 group hover:bg-cblue dark:text-white dark:hover:bg-gray-700"
                          : "flex items-center w-full p-2 text-cblack hover:text-cwhite transition duration-75 rounded-lg pl-11 group hover:bg-cblue dark:text-white dark:hover:bg-gray-700"
                      }
                    >
                      User Directory
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                role="button"
                onClick={() => selectedMenu("backend")}
                className={
                  menu == "backend"
                    ? "bg-cblue flex items-center p-2 text-cwhite rounded-lg dark:text-white hover:bg-cblue hover:text-cwhite dark:hover:bg-gray-700 group"
                    : "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-cblue hover:text-cwhite dark:hover:bg-gray-700 group"
                }
              >
                <FontAwesomeIcon
                  icon={faDatabase}
                  className={
                    menu == "backend"
                      ? "text-cwhite  group-hover:text-cwhite transition duration-75"
                      : "text-cdardgray group-hover:text-cwhite transition duration-75"
                  }
                  size="xl"
                />
                <span className="ms-3">Backend</span>
              </a>
            </li>
            <li>
              <a
                role="button"
                onClick={() => selectedMenu("reports")}
                className={
                  menu == "reports"
                    ? "bg-cblue flex items-center p-2 text-cwhite rounded-lg dark:text-white hover:bg-cblue hover:text-cwhite dark:hover:bg-gray-700 group"
                    : "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-cblue hover:text-cwhite dark:hover:bg-gray-700 group"
                }
              >
                <FontAwesomeIcon
                  icon={faFile}
                  className={
                    menu == "reports"
                      ? "text-cwhite  group-hover:text-cwhite transition duration-75"
                      : "text-cdardgray group-hover:text-cwhite transition duration-75"
                  }
                  size="xl"
                />
                <span className="ms-3">Reports</span>
              </a>
            </li>
            <li>
              <a
                role="button"
                onClick={() => selectedMenu("payments")}
                className={
                  menu == "payments"
                    ? "bg-cblue flex items-center p-2 text-cwhite rounded-lg dark:text-white hover:bg-cblue hover:text-cwhite dark:hover:bg-gray-700 group"
                    : "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-cblue hover:text-cwhite dark:hover:bg-gray-700 group"
                }
              >
                <FontAwesomeIcon
                  icon={faMoneyCheck}
                  className={
                    menu == "payments"
                      ? "text-cwhite  group-hover:text-cwhite transition duration-75"
                      : "text-cdardgray group-hover:text-cwhite transition duration-75"
                  }
                  size="xl"
                />
                <span className="ms-3">Payments</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
