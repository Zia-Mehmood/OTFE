import React from "react";

function TextBox(props) {
  return (
    <input
      value={props.value}
      id={props.id}
      name={props.name}
      type={props.type}
      autoComplete={props.autocomplete}
      required={props.required}
      className={`font-custom block w-full pl-2 rounded-md border-0 py-1.5 text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-active hover:ring-active sm:text-sm sm:leading-6 `}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
}

export default TextBox;
