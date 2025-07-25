import React from "react";
import { cn } from "../../../utls/utlis";

const Line = React.forwardRef(({ className, ...props }, ref) => {
  return <div className={cn("  ", className)} ref={ref} {...props}></div>;
});
Line.displayName = "Line";
export { Line };
