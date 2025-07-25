import * as React from "react";

import { cn } from "../../../utls/utlis";

const CustomInput = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "font-custom block w-full pl-2 rounded-md border-0  text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-cblue hover:ring-cblue sm:text-sm sm:leading-6 ",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
CustomInput.displayName = "CustomInput";

export { CustomInput };
