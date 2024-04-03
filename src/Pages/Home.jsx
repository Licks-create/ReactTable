/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "../styles/Home.css";
import "../styles/addcustomer.css";
import AddCustomer from "./AddCustomer";
import { useDispatch, useSelector } from "react-redux";
import { setSlider } from "../app/api/userSlice";
import SpaIcon from "@mui/icons-material/Spa";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import ImageNotSupportedIcon from "@mui/icons-material/ImageNotSupported";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import PieChartIcon from "@mui/icons-material/PieChart";
import SettingsIcon from "@mui/icons-material/Settings";
const Home = () => {
  const sliderElement = useRef();
  const mainElement = useRef();
  const dataDetails = useSelector((state) => state.userData);
  const editables = useSelector((state) => state.userData.editableUSer);
  // console.log(editables);
  const dispatch = useDispatch();
  useEffect(() => {
    dataDetails.wantToUpdate
      ? ((sliderElement.current.style.right = "0px"),
        mainElement.current.style.setProperty(
          "--color",
          "rgba(5, 6, 8, 0.181)"
        ),
        mainElement.current.style.setProperty("--index", "2"))
      : ((sliderElement.current.style.right = "-500px"),
        mainElement.current.style.setProperty("--color", "none"),
        mainElement.current.style.setProperty("--index", "-2"));
  }, [dataDetails.wantToUpdate]);

  return (
    <section className="head">
      <div className="left">
        <div className="first">
          <SpaIcon style={{ color: "white" }} />
        </div>
        <div className="second">
          <PersonOutlineIcon
            className="secondIcon"
            style={{ color: "white" }}
          />
          <CloudDownloadIcon className="secondIcon" />
          <ShowChartIcon className="secondIcon" />
          <ImageNotSupportedIcon className="secondIcon" />
          <CalendarMonthIcon className="secondIcon" />
          <LocalFireDepartmentIcon className="secondIcon" />
          <PieChartIcon className="secondIcon" />
        </div>
        <div className="third">
          <SettingsIcon className="third" />
        </div>
      </div>
      <main
        ref={mainElement}
        id="main"
        className="home"
        onClick={() => dataDetails.wantToUpdate && dispatch(setSlider(false))}
      >
        <div className="right">
          <div className="userHeader">
            <h1>Customer Details</h1>
            <div className="img" />
          </div>
          <section className="outlet">
            <Outlet />
          </section>
        </div>
        <div className="about">
          <Link to="https://funny-truffle-75736f.netlify.app/" target="_blank">
            {" "}
            About The Developer{" "}
          </Link>
        </div>
      </main>
      <section ref={sliderElement} className="addCustomer">
        <AddCustomer userData={editables} />
      </section>
    </section>
  );
};

export default Home;
