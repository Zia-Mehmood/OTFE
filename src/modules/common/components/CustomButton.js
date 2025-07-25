import * as React from "react";
import Loader from "react-js-loader";

import { cn } from "../../../utls/utlis";

const CustomButton = React.forwardRef(
  ({ className, source, width, height, ...props }, ref) => {
    return (
      <button className={cn("   leading-4 ", className)} ref={ref} {...props}>
        {props.loading ? (
          <div>
            <Loader
              type="bubble-loop"
              bgColor="#FFFFFF"
              color="#FFFFFF"
              //title={"bubble-loop"}
              size={30}
            />
          </div>
        ) : source ? (
          <div className="flex  items-center space-x-2 rtl:space-x-reverse">
            <a href="#" className="text-sm overflow-hidden ">
              <img
                src={source}
                className="h-5 max-w-5 overflow-hidden  "
                style={{ borderRadius: 50 }}
                alt="User Icon"
              />
            </a>
            <div className="">{props.name}</div>
          </div>
        ) : (
          props.name
        )}
      </button>
    );
  }
);
CustomButton.displayName = "CustomButton";

export { CustomButton };
