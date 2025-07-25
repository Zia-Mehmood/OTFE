import React, { useEffect, useState } from "react";
import { CustomButton } from "../../common/components/CustomButton";
import { ProgramList } from "../components/ProgramList";
import { EmployeesList } from "../components/EmployeesList";

function Employees(props) {
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
      <div className=" pb-2 ">
        <div>
          <EmployeesList></EmployeesList>
        </div>
      </div>
    </div>
  );
}
Employees.displayName = "AdminEmployees";
export default Employees;
