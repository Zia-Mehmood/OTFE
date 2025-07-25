import React from "react";

function TextLable(props) {
  return (
    <label
      htmlFor={props.for}
      className="block font-custom  font-semibold text-base  tracking-wide text-text "
    >
      {props.text}
    </label>
  );
}

export default TextLable;
