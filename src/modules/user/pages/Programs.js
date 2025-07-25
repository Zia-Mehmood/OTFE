import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { CustomButton } from "../../common/components/CustomButton";
import { ProgramList } from "../components/ProgramList";

function Programs(props) {
  const [loading, setLoading] = useState(false);
  const onSubmit = () => {
    // setFromErrors(validate());
    // setIsSubmit(true);
  };
  useEffect(() => {
    // change background color with a random color
  }, []);

  return (
    <>
      <div className="pt-5 pb-2 ">
        <div className=" flex justify-end me-2  ">
          <CustomButton
            disabled={loading}
            loading={loading}
            name="Create New"
            width="28"
            source={""}
            className=" py-2 text-sm  px-2 w-40 font-bold focus:outline-none text-cwhite bg-cblue  border-cblack border-solid border rounded-md "
            click={() => onSubmit()}
          ></CustomButton>
        </div>
        <div>
          <ProgramList></ProgramList>
        </div>
      </div>
    </>
  );
}

export default Programs;
