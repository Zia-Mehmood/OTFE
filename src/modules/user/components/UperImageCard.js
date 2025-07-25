import React from "react";
import { cn } from "../../../utls/utlis";
import { useNavigate } from "react-router-dom";
const UperImageCard = React.forwardRef(
  ({ className, cardImage, bgPopular, ...props }, ref) => {
    const navigate = useNavigate();
    const chooseActive = (item) => {
      console.log(item);
      navigate(`/${item}`, { replace: true });
    };
    return (
      <div>
        <div
          role="button"
          onClick={() => {
            chooseActive("user/productDetails");
          }}
          className=" flex-1  "
        >
          <div class=" lg:max-w-60 rounded-xl overflow-hidden shadow-lg ">
            <div dir="rtl">
              <div class="relative">
                <img
                  class="w-full h-40 "
                  src={cardImage}
                  alt="Program Image"
                ></img>
                <div class="absolute h-14 w-14 top-0 start-0">
                  <img
                    src={require("../../../assets/icons/heart-gray.png")}
                    className="h-8   inset-y-0 cursor-pointer ps-1"
                    style={{ borderRadius: 50 }}
                    alt="User Icon"
                  />
                </div>
              </div>
            </div>

            <div class="py-2 px-1">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
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
              <div className="flex justify-between pt-2 ">
                <div class="font-bold text-cblack text-lg ">
                  Size Up with Sam
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

              <div class="text-cgray text-xs pt-2 ">
                Unlock your full potential with CBUM’s comprehensive 12-week
                workout pro…
              </div>
              <div className="flex justify-between pt-3">
                <div className="font-bold text-cblack text-lg">$ 75</div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <a href="#" className="text-sm overflow-hidden ">
                    <img
                      src={require("../../../assets/icons/star.png")}
                      className="h-4 max-w-4 overflow-hidden  "
                      style={{ borderRadius: 50 }}
                      alt="User Icon"
                    />
                  </a>
                  <div className="text-cblack text-sm font-semibold">
                    5<span className="text-xs text-cgray">(10.1k)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

UperImageCard.displayName = "UperImageCard";

export { UperImageCard };
