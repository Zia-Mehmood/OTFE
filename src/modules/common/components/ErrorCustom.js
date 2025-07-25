import React from "react";

function ErrorCustom(props) {
  return (
    <div className={props.className}>
      <p className="text-textError font-sm font-custom">{props.name}</p>
    </div>
  );
}

export default ErrorCustom;
