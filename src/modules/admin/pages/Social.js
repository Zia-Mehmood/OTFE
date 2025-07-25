import React from "react";
import { SocialCard } from "../components/SocialCard";
import { SocialActivityList } from "../components/SocialActivityList";

function Social(props) {
  return (
    <div>
      <div>
        <div className="px-2 w-full lg:w-4/12 py-3">
          <SocialCard></SocialCard>
        </div>
        <div className="px-2 w-full lg:w-2/5 pb-6 ">
          <SocialActivityList></SocialActivityList>
        </div>
      </div>
    </div>
  );
}

export default Social;
