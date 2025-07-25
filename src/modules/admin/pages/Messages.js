import React from "react";
import { UserChat } from "../components/UserChat";

function Messages(props) {
  return (
    <div>
      <div>
        <div className="px-2  ">
          <UserChat></UserChat>
        </div>
      </div>
    </div>
  );
}

export default Messages;
