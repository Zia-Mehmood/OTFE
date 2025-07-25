import React, { useEffect, useState } from "react";
import { cn } from "../../../utls/utlis";
import { CustomButton } from "../../common/components/CustomButton";
const ProductDetailCard = React.forwardRef(
  ({ className, cardImage, bgPopular, ...props }, ref) => {
    const [loading, setLoading] = useState(false);
    const onSubmit = () => {
      // setFromErrors(validate());
      // setIsSubmit(true);
    };
    useEffect(() => {
      // change background color with a random color
    }, []);
    return (
      <div>
        <a href="#" class="mt-5 lg:flex  w-full items-start">
          <div className="w-full lg:w-1/2 py-3 lg:py-0 ">
            <img
              class="  h-full w-auto rounded-lg "
              style={{ objectFit: "fill" }}
              src={cardImage}
              alt=""
            />
          </div>
          <div className="w-full lg:w-1/2 md:flex lg:flex items-start">
            <div class="flex flex-col justify-between px-0 md:px-4 lg:px-4 leading-normal">
              <div className=" flex lg:block justify-between">
                <div className="font-bold text-cblack text-2xl">$ 75</div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <a href="#" className="text-sm overflow-hidden ">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
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
                    </div>
                  </a>

                  <div className="text-cblack text-sm font-semibold">
                    5<span className="text-xs text-cgray">(10.1k)</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between pt-2 ">
                <div class="font-bold text-cblack text-3xl ">
                  2021 Mr. Olympia Trainer
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <a href="#" className="text-sm overflow-hidden ">
                    <img
                      src={require("../../../assets/icons/users-gray.png")}
                      className="h-4 max-w-4 overflow-hidden  "
                      style={{ borderRadius: 50 }}
                      alt="User Icon"
                    />
                  </a>
                  <div className="text-cgray text-xs font-semibold">12.5k</div>
                </div>
              </div>
              <div className="flex mt-2 items-center space-x-2 rtl:space-x-reverse">
                <a href="#" className="text-sm overflow-hidden ">
                  <img
                    src={require("../../../assets/images/ex5.jpg")}
                    className="h-8 max-w-8 overflow-hidden  "
                    style={{ borderRadius: 50 }}
                    alt="User Icon"
                  />
                </a>
                <div className="">CBUM</div>
              </div>
              <div class="text-cgray text-xs pt-2 ">
                Unlock your full potential with CBUM’s comprehensive 12-week
                workout program, designed to sculpt and build your body to its
                peak. This program combines classic bodybuilding techniques with
                modern training strategies for maximum results.
              </div>
              <div class="text-cblack font-bold text-sm pt-1 ">
                Program Highlights:
              </div>
              <div class="text-cblack font-bold px-5 text-sm pt-1 ">
                • Week 1-4: Foundation Building
              </div>
              <div class="text-cgray text-xs px-8  ">
                Unlock your full potential with CBUM’s comprehensive 12-week
                workout program, designed to sculpt and build your body to its
                peak. This program combines classic bodybuilding techniques with
                modern training strategies for maximum results.
              </div>
              <div class="text-cblue text-center text-xs  pt-2 ">More</div>
              <div className=" w-full flex justify-around gap-4 md:gap-0 lg:gap-0 pt-5">
                <CustomButton
                  disabled={loading}
                  loading={loading}
                  name="Purchase"
                  width="28"
                  source={""}
                  className=" py-2 text-sm  px-2 w-48 font-bold focus:outline-none text-cblack bg-cgreen  border-cblack border-solid border rounded-md "
                  click={() => onSubmit()}
                ></CustomButton>

                <CustomButton
                  disabled={loading}
                  loading={loading}
                  name="Add to Favorites"
                  width="25"
                  source={require("../../../assets/icons/heart-gray.png")}
                  className="py-2 text-sm flex justify-center  px-2 w-48   font-bold text-cblack focus:outline-none bg-cwhite border-cblack border-solid border rounded-md"
                  click={() => onSubmit()}
                ></CustomButton>
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  }
);

ProductDetailCard.displayName = "ProductDetailCard";

export { ProductDetailCard };
