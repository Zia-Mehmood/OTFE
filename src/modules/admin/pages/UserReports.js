import React from "react";
import { UserDetailHeader } from "../components/UserDetailHeader";
import { UserReports as UserReport } from "../components/UserReports";
function UserReports(props) {
  return (
    <div>
      <div>
        <div className="px-2  ">
          <UserDetailHeader></UserDetailHeader>
        </div>
        <div className="px-2 pt-4 w-full lg:w-2/5 pb-6 ">
          <UserReport></UserReport>
        </div>
      </div>
    </div>
  );
}

export default UserReports;
