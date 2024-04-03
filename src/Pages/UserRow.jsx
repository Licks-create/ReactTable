/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { statusColor } from "../../constants/StatusColor";
import { setEditable, setSlider, setUserDetails } from "../app/api/userSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";
const UserRow = ({ data, searchValue, entries, pageActive }) => {
  const [searchedData, setSearchedData] = useState([]);
  const dispatch = useDispatch();
  async function deleteCustmer(data) {
    const toastLoad=toast.loading("Deleting...")
    try {
      const res = await axios.delete(
        `https://reacttablebackend-1.onrender.com/users/${data.id}`
      );
      toast.dismiss(toastLoad)
      dispatch(setUserDetails(res.data));
      toast.success("User Deleted")
    } catch (error) {
      toast.dismiss(toastLoad)
      toast.error(error?.message)
    }
  }
  useEffect(() => {
    let mySearch = data.filter(
      (user) =>
        user?.product?.Name?.toLowerCase()?.includes(
          searchValue.toLowerCase()
        ) ||
        user?.customerName
          ?.toLowerCase()
          ?.includes(searchValue.toLowerCase()) ||
        user?.payment?.toLowerCase()?.includes(searchValue.toLowerCase()) ||
        user?.status?.toLowerCase()?.includes(searchValue.toLowerCase()) ||
        user?.amount >= searchValue
    );
    setSearchedData(mySearch);
  }, [searchValue, data]);

  const ref = useRef();
  if (searchValue) {
    ref.current = searchedData;
  } else ref.current = data;

  return (
    <>
      <tbody>
        {ref.current.slice(pageActive, pageActive + entries).map((data, i) => {
          return (
            <tr
              id={data.id}
              key={data.id}
              style={{
                color: "black",
                fontWeight: "500",
              }}
            >
              <td>{data.transactionID} </td>
              <td>
                <section className="product">
                  <div
                    className="prodImg"
                    style={{
                      borderRadius: "8px",
                      overflow: "hidden",
                      background: `url(${data.product?.img_url}) center center/contain`,
                    }}
                  ></div>
                  <section>{data?.product?.Name}</section>
                </section>
              </td>
              <td>{data?.customerName}</td>
              <td>{data?.date}</td>
              <td>{data?.amount}</td>
              <td>{data?.payment}</td>
              <td>
                <span
                  style={{
                    backgroundColor: statusColor[data.status]?.backGround,
                    color: statusColor[data.status]?.font,
                    padding: ".5rem",
                    borderRadius: "16px",
                  }}
                >
                  {data.status}
                </span>
              </td>
              <td>
                <div className="actions">
                  <div
                    title="edit"
                    onClick={() => {
                      dispatch(setSlider(true));
                      dispatch(setEditable(data));
                    }}
                  >
                    <DriveFileRenameOutlineIcon className="hoverAction edit" />
                  </div>

                  <div
                    title="Delete"
                    onClick={() => {
                      const bool = window.confirm(
                        "Are you sure to delete the user"
                      );
                      if (bool) deleteCustmer(data);
                    }}
                  >
                    <DeleteOutlineIcon className="hoverAction delete" />
                  </div>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </>
  );
};

export default UserRow;
