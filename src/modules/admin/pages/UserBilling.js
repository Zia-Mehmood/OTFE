import React from "react";
import { UserDetailHeader } from "../components/UserDetailHeader";
import { UserDetailInformation } from "../components/UserDetailInformation";
import { UserAccountNotes } from "../components/UserAccountNotes";
import { UserBills } from "../components/UserBills";

function UserBilling(props) {
  return (
    <div>
      <div>
        <div className="px-2  ">
          <UserDetailHeader></UserDetailHeader>
        </div>
        <div className="px-2 pt-4  ">
          <UserBills></UserBills>
        </div>
      </div>
    </div>
  );
}

export default UserBilling;
