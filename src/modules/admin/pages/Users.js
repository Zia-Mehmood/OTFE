import React, { useEffect, useState } from "react";
import { CustomButton } from "../../common/components/CustomButton";
import { ProgramList } from "../components/ProgramList";
import { UsersList } from "../components/UsersList";

function Users(props) {
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
          <UsersList></UsersList>
        </div>
      </div>
    </div>
  );
}
Users.displayName = "AdminUsers";
export default Users;
