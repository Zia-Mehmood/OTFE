import React from "react";
import { cn } from "../../../utls/utlis";

const CustomText = React.forwardRef(({ className, text, ...props }, ref) => {
  return (
    <div
      className={cn("block font-custom  font-normal  ", className)}
      ref={ref}
      {...props}
    >
      {text}
    </div>
  );
});
CustomText.displayName = "CustomText";
export { CustomText };
