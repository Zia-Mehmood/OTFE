import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Navbar(props) {
  const [menu, setMenu] = useState("marketplace");
  const [menuChild, setMenuChild] = useState("");
  const navigate = useNavigate();
  const chooseActive = (item) => {
    console.log(item);
    navigate(`/${item}`, { replace: true });
  };
  const selectedMenu = (val) => {
    // change background color with a random color

    setMenu(val);

    if (val === "marketplace") {
      chooseActive("user/marketplace");
    } else if (val === "dashboard") {
      chooseActive("user/dashboard");
    } else if (val === "programs") {
      chooseActive("user/programs");
    } else if (val === "myprograms") {
      chooseActive("user/myprograms");
    } else if (val === "exerciselib") {
      chooseActive("user/exerciselib");
    } else if (val === "admin") {
      chooseActive("admin/dashboard");
    }
  };
  return (
    // <div>
    //   <nav className="bg-white border-gray-200 dark:bg-gray-900 border-b border-b-1 border-b-solid border-b-cgray">
    //     <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 py-2 ">
    //       <a
    //         role="button"
    //         onClick={() => selectedMenu("admin")}
    //         className="flex items-center space-x-1 rtl:space-x-reverse"
    //       >
    //         <img
    //           src={require("../../../assets/images/LogoFull.jpeg")}
    //           className="h-8"
    //           alt="Orum Traning Logo"
    //         />
    //         {/* <span className="self-center  text-2xl font-semibold whitespace-nowrap dark:text-white">
    //           Flowbite
    //         </span> */}
    //       </a>
    //       <div className="flex items-center space-x-2 rtl:space-x-reverse">
    //         <a
    //           href="tel:5541251234"
    //           className="text-sm  text-gray-500 bg-cwhite dark:text-white hover:underline"
    //         >
    //           <img
    //             src={require("../../../assets/icons/heart-gray.png")}
    //             className="h-8 bg-cwhite"
    //             alt="Heart Logo"
    //           />
    //         </a>
    //         <div className="h-6 bg-cwhite border-2 broder-s-1  border-dashed"></div>

    //         <a
    //           href="#"
    //           className="text-sm text-blue-600 dark:text-blue-500 hover:underline"
    //         >
    //           <img
    //             src={require("../../../assets/icons/user.png")}
    //             className="h-8"
    //             alt="User Icon"
    //           />
    //         </a>
    //       </div>
    //     </div>
    //   </nav>
    //   <nav className="bg-cwhite border-b border-b-1 border-solid border-b-cgray">
    //     <div className="max-w-screen-xl px-4 py-1.5 text-center mx-auto">
    //       <div className="flex items-center justify-center">
    //         <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse font-custom text-sm">
    //           <li>
    //             <a
    //               role="button"
    //               onClick={() => selectedMenu("marketplace")}
    //               className={
    //                 menu == "marketplace"
    //                   ? "text-black underline hover:text-black hover:underline"
    //                   : "text-cgray hover:text-black hover:underline"
    //               }
    //               aria-current="page"
    //             >
    //               Marketplace
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               role="button"
    //               onClick={() => selectedMenu("dashboard")}
    //               className={
    //                 menu == "dashboard"
    //                   ? "text-black underline hover:text-black hover:underline"
    //                   : "text-cgray hover:text-black hover:underline"
    //               }
    //               aria-current="page"
    //             >
    //               Dashboard
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               role="button"
    //               onClick={() => selectedMenu("programs")}
    //               className={
    //                 menu == "programs"
    //                   ? "text-black underline hover:text-black hover:underline"
    //                   : "text-cgray hover:text-black hover:underline"
    //               }
    //               aria-current="page"
    //             >
    //               My Programs
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               role="button"
    //               onClick={() => selectedMenu("myprograms")}
    //               className={
    //                 menu == "myprograms"
    //                   ? "text-black underline hover:text-black hover:underline"
    //                   : "text-cgray hover:text-black hover:underline"
    //               }
    //               aria-current="page"
    //             >
    //               Purchased Programs
    //             </a>
    //           </li>

    //           <li>
    //             <a
    //               role="button"
    //               onClick={() => selectedMenu("exerciselib")}
    //               className={
    //                 menu == "exerciselib"
    //                   ? "text-black underline hover:text-black hover:underline"
    //                   : "text-cgray hover:text-black hover:underline"
    //               }
    //               aria-current="page"
    //             >
    //               Exercise Library
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
    <div className="">
      <nav className="fixed top-0 px-5 md:px-8 lg:px-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <nav className="bg-white border-gray-200 dark:bg-gray-900 ">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl  py-2 ">
            <a
              role="button"
              onClick={() => chooseActive("admin/dashboard")}
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
