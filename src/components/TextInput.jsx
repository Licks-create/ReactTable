/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";

import "../styles/Textinput.css";
const TextInput = ({ updateNewUser, type, prop, bydefault }) => {
  const [dataDefault, setData] = useState(bydefault);
  // console.log(dataDefault);
  useEffect(() => {
    setData(bydefault);
  }, [bydefault]);
  return (
    <div className="dropdownBtn">
      <input
        className="InputText"
        type={`${type}`}
        name="name"
        id="name"
        placeholder={`Type your ${type} here...`}
        onChange={(e) => {
          updateNewUser({ prop: prop, value: e.target.value });
          setData(e.target.value);
        }}
        value={dataDefault || bydefault}
      />
    </div>
  );
};

export default TextInput;
