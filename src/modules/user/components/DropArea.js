import React, { useState } from "react";
import { CustomText } from "../../common/components/CustomText";

function DropArea({ onDrop, ...props }) {
  const [showDrop, setShowDrop] = useState(false);

  return (
    <div
      className={
        showDrop
          ? "w-full h-24 border border-dashed border-gray-500 rounded-lg mx-0.1 mt-1 px-2 p-4 mb-3 opacity-100 transition-all ease-in-out ts duration-700"
          : "opacity-0"
      }
      onDragEnter={() => setShowDrop(true)}
      onDragLeave={() => setShowDrop(false)}
      onDragOver={(e) => e.preventDefault()}
      onDrop={() => {
        onDrop();
        setShowDrop(false);
      }}
    >
      Drop Here
    </div>
    // <CustomText

    //   className={
    //     showDrop
    //       ? "w-full h-24 border border-dashed border-gray-500 rounded-lg mx-0.1 mt-1 px-2 p-4 mb-3 opacity-100 transition-all ease-in-out ts duration-700"
    //       : "opacity-0"
    //   }
    //   onDragEnter={() => setShowDrop(true)}
    //   onDragLeave={() => setShowDrop(false)}
    //   onDragOver={}
    //   onDrop={() => {
    //     onDrop();
    //     setShowDrop(false);
    //   }}
    //   text="Drop Here"
    // >

    // </CustomText>
  );
}

export default DropArea;
