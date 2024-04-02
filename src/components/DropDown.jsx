/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { availableOptions, statusColor } from "../../constants/StatusColor";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "../styles/Dropdown.css";
const DropDown = ({ data, updateNewUser, type, prop, bydefault }) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelect] = useState(
    type === "textOnly" ? prop : { Name: "Choose one product" }
  );
  const iconUp = useRef();
  data = availableOptions[bydefault] || data;
  useEffect(() => {
    if (bydefault) {
      setSelect(bydefault);
    } else
      setSelect(type === "textOnly" ? prop : { Name: "Choose one product" });
  }, [bydefault]);
  const dropDown = useRef();
  return (
    <div>
      <div className="dropdown">
        <div
          ref={dropDown}
          onClick={(e) => {
            setIsActive(!isActive);
            iconUp.current.classList.toggle("arrowUp");
          }}
          onBlur={() => setIsActive(false)}
          className="dropdownBtn"
        >
          <div className="selected">
            <PreElement product={selected} type={type} prop={prop} />
          </div>
          <span className="arrowIcon" ref={iconUp}>
            <ArrowBackIosIcon />
          </span>
        </div>
        <div
          className="dropdownContent"
          style={{ display: isActive ? "block" : "none" }}
        >
          {data.map((product) => (
            <div
              key={type === "textOnly" ? product : product.Name}
              onClick={(e) => {
                iconUp.current.classList.toggle("arrowUp");
                updateNewUser({
                  prop: prop,
                  value:
                    type === "textOnly"
                      ? product
                      : { Name: product?.Name, img_url: product?.img_url },
                });
                setIsActive(false);
                dropDown.current.style.color = "#000";
                setSelect(
                  type === "textOnly"
                    ? product
                    : {
                        img_url: product.img_url,
                        Name: product.Name,
                      }
                );
              }}
              className="item"
            >
              {product?.img_url && (
                <div
                  style={{
                    borderRadius: "8px",
                    overflow: "hidden",
                    background: `url(${product.img_url}) center center/contain`,
                    width: "32px",
                    height: "32px",
                  }}
                >
                  {" "}
                </div>
              )}
              <div style={prop === "status" ? statusShow(product) : {}}>
                {type === "textOnly" ? product : product.Name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropDown;

const PreElement = ({ product, type, prop }) => {
  return (
    <>
      {product?.img_url && (
        <div
          style={{
            borderRadius: "8px",
            overflow: "hidden",
            background: `url(${product.img_url}) center center/contain`,
            width: "32px",
            height: "32px",
          }}
        >
          {" "}
        </div>
      )}
      <div style={prop === "status" ? statusShow(product) : {}}>
        {type === "textOnly" ? product : product.Name}
      </div>
    </>
  );
};

const statusShow = (product) => {
  return {
    color: statusColor[product]?.font,
    backgroundColor: statusColor[product]?.backGround,
    padding: ".5rem",
    borderRadius: "16px",
  };
};
