import React from "react";
import { UserDetailHeader } from "../components/UserDetailHeader";
import { UserDetailInformation } from "../components/UserDetailInformation";
import { UserAccountNotes } from "../components/UserAccountNotes";

function UserProfile(props) {
  return (
    <div>
      <div className="px-2  ">
        <UserDetailHeader></UserDetailHeader>
      </div>
      <div className="px-2 pt-4">
        <UserDetailInformation></UserDetailInformation>
      </div>
      <div className="px-2 pt-4 pb-3">
        <UserAccountNotes></UserAccountNotes>
      </div>
    </div>
  );
}

export default UserProfile;
