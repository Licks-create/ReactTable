/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { setEditable, setSlider, setUserDetails } from "../app/api/userSlice";
import { possibleUpdation } from "../../constants/products";
import DropDown from "../components/DropDown";
import TextInput from "../components/TextInput";
import axios from "axios";
import toast from "react-hot-toast";
const AddCustomer = ({ userData }) => {
  const data = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  const newCustomer = useRef({});

  function updateNewUser({ prop, value }) {
    if (userData) {
      let updatedUserData = { ...userData };
      updatedUserData[prop] = value;
      dispatch(setEditable(updatedUserData));
    } else {
      newCustomer.current[prop] = value;
    }
  }

  async function postData(param) {
    if (
      !param?.amount ||
      !param.customerName ||
      !param.product ||
      !param.status ||
      !param.date
    )
      return toast.error("All Fields are required");
    const toastLoad = toast.loading("Adding...");
    let lastItem = data.userDetails[data.userDetails.length - 1];
    const id = Number(lastItem.id) + 1;
    const transactionID = Number(lastItem.transactionID) + 1;
    try {
      const res = await axios.post(
        "https://reacttablebackend-1.onrender.com/users",
        {
          id,
          transactionID,
          ...param,
        }
      );
      dispatch(setUserDetails(res.data));
      toast.dismiss(toastLoad);
      dispatch(setSlider(false));
      toast.success("Customer Successfully Added");
    } catch (error) {
      toast.dismiss(toastLoad);
      toast.error(error.message);
    }
  }

  async function updateData(param) {
    if (
      !param?.amount ||
      !param.customerName ||
      !param.product ||
      !param.status ||
      !param.date
    )
      return toast.error("All Fields are required");
    const toastLoad = toast.loading("Updating...");
    try {
      const res = await axios.put(
        `https://reacttablebackend-1.onrender.com/users/${param.id}`,
        {
          ...param,
        }
      );
      console.log(res);
      dispatch(setUserDetails(res.data));
      dispatch(setSlider(false));
      toast.dismiss(toastLoad);
      toast.success("Customer Successfully updated");
    } catch (error) {
      toast.dismiss(toastLoad);
      toast.error(error.message);
    }
  }
  return (
    <div className="customerPage">
      <CloseIcon
        className="closeAddCust"
        onClick={() => {
          dispatch(setEditable(null));
          dispatch(setSlider(false));
        }}
      />
      <section className="header">
        {userData ? "Update User" : "Add Cusomer"}
      </section>
      <div className="props">
        <section className="propHeader">Select Product</section>
        <DropDown
          data={possibleUpdation.products}
          updateNewUser={updateNewUser}
          prop={"product"}
          bydefault={!userData?.product ? null : userData?.product}
        />
      </div>
      <div className="props">
        <section className="propHeader">Customer Name</section>
        <TextInput
          updateNewUser={updateNewUser}
          type={"text"}
          prop={"customerName"}
          bydefault={!userData?.customerName ? "" : userData?.customerName}
        />
      </div>
      <div className="props">
        <section className="propHeader">Date</section>
        <TextInput
          updateNewUser={updateNewUser}
          type={"Date"}
          prop={"date"}
          bydefault={!userData?.date ? "" : userData?.date}
        />
      </div>
      <div className="props">
        <section className="propHeader">Amount</section>
        <TextInput
          updateNewUser={updateNewUser}
          type={"Number"}
          prop={"amount"}
          bydefault={!userData?.amount ? "" : userData?.amount}
        />
      </div>
      <div className="props">
        <section className="propHeader"> Payment Mode</section>
        <DropDown
          data={possibleUpdation.paymentMode}
          updateNewUser={updateNewUser}
          type={"textOnly"}
          prop="payment"
          bydefault={!userData?.payment ? "" : userData?.payment}
        />
      </div>
      <div className="props">
        <section className="propHeader">Status</section>
        <DropDown
          data={possibleUpdation.status}
          updateNewUser={updateNewUser}
          type={"textOnly"}
          prop="status"
          bydefault={userData?.status}
        />
      </div>
      <div
        className="action"
        onClick={() => {
          if (userData) {
            updateData(data.editableUSer);
          } else {
            postData(newCustomer.current);
          }
        }}
      >
        <button className="actionButton">
          {" "}
          {userData ? "Update" : "+Add"}
        </button>
      </div>
    </div>
  );
};

export default AddCustomer;
