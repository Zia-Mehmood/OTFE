import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Navbar(props) {
  const navigate = useNavigate();
  const [exerciseMenu, setExerciseMenu] = useState(false);
  const show = exerciseMenu ? "show" : "";
  const chooseActive = (item) => {
    console.log(item);
    navigate(`/${item}`, { replace: true });
  };
  return (
    <div className="">
      <nav className="fixed top-0 px-5 md:px-8 lg:px-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <nav className="bg-white border-gray-200 dark:bg-gray-900 ">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl  py-2 ">
            <a
              role="button"
              onClick={() => chooseActive("user/dashboard")}
              className="flex items-center space-x-1 rtl:space-x-reverse"
            >
              <img
                src={require("../../../assets/images/LogoFull.jpeg")}
                className="h-8"
                alt="Orum Traning Logo"
              />
              {/* <span className="self-center  text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span> */}
            </a>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <a
                href="tel:5541251234"
                className="text-sm  text-gray-500 bg-cwhite dark:text-white hover:underline"
              >
                <img
                  src={require("../../../assets/icons/heart-gray.png")}
                  className="h-8 bg-cwhite"
                  alt="Heart Logo"
                />
              </a>
              <div className="h-6 bg-cwhite border-2 broder-s-1  border-dashed"></div>

              <a
                href="#"
                className="text-sm text-blue-600 dark:text-blue-500 hover:underline"
              >
                <img
                  src={require("../../../assets/icons/user.png")}
                  className="h-8"
                  alt="User Icon"
                />
              </a>
            </div>
          </div>
        </nav>
      </nav>
    </div>
  );
}

export default Navbar;
