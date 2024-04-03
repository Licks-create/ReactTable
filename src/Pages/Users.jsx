/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

import "../styles/Users.css";
import toast from "react-hot-toast";
import UserRow from "./UserRow";
import { useDispatch, useSelector } from "react-redux";
import { setEditable, setUserDetails } from "../app/api/userSlice";
import { setSlider } from "../app/api/userSlice";

const Users = () => {
  const dataAPI = useSelector((state) => state.userData.userDetails);
  const dispatch = useDispatch();

  const [loader, setLoader] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [Entries, setEntries] = useState(5);
  const [pageActive, setActivePage] = useState(0);

  const addCustRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      setLoader(true);
      try {
        const res1 = await fetch(
          "https://reacttablebackend-1.onrender.com/users"
        );
        const data2 = await res1.json();
        setLoader(false);
        if (data2) {
          dispatch(setUserDetails(data2));
        }
        toast.success("data fetched");
      } catch (error) {
        toast.error("could not fetch");
      }
    };
    fetchData();
    setTimeout(() => {
      document.getElementById(`page-${pageActive}`)?.classList.add("active");
      document.getElementById(`next`)?.classList.add("mover");
      document.getElementById(`previous`)?.classList.add("mover");
    }, 2000);
  }, []);

  useEffect(() => {
    document.querySelectorAll(".pageNo").forEach((element) => {
      element.classList.remove("active");
    });
    document.getElementById(`page-${pageActive}`)?.classList.add("active");
  }, [pageActive]);
  return (
    <main className="userDetail">
      <div className="above"></div>

      {loader ? (
        <h3>Please wait ...</h3>
      ) : (
        <div className="below">
          <section className="searchFilter">
            <div>
              <div>
                <SearchIcon className="search" />
                <input
                  type="text"
                  style={{ width: "100%" }}
                  placeholder="Search"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </div>
            </div>
          </section>
          <div>
            <section className="pages">
              <div>
                Show{" "}
                <select
                  name="entrie"
                  id="entries"
                  className="select"
                  onChange={(e) => {
                    setEntries(Number(e.target.value));
                    setActivePage(0);
                  }}
                >
                  {new Array(5, 10, 15, 20).map((count) => (
                    <option key={count} value={count} className="selectOption">
                      {count}
                    </option>
                  ))}
                </select>{" "}
                entries
              </div>

              <div
                className="addCust"
                ref={addCustRef}
                onClick={() => {
                  dispatch(setSlider(true));
                  dispatch(setEditable(null));
                }}
              >
                {" "}
                <AddIcon /> Add Customer
              </div>
            </section>
          </div>
          <section className="table">
            <table>
              <thead>
                <tr className="selectALL">
                  <th>Transaction ID</th>
                  <th>Product</th>
                  <th>Customer</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Payment Mode</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <UserRow
                data={dataAPI}
                searchValue={searchValue}
                entries={Entries}
                pageActive={pageActive * Entries}
              />
            </table>
            <section className="pagination">
              <div
                id="previous"
                onClick={() =>
                  setActivePage((pre) => (pre - 1 > 0 ? pre - 1 : 0))
                }
              >
                previous
              </div>
              <div className="pageCount">
                {new Array(Math.ceil(dataAPI.length / Entries))
                  .fill(0)
                  .map((pageNo, index) => (
                    <span
                      key={index}
                      className="pageNo"
                      id={`page-${index}`}
                      onClick={() => setActivePage(index)}
                    >
                      {index + 1}{" "}
                    </span>
                  ))}
              </div>
              <span
                id="next"
                onClick={() =>
                  setActivePage((pre) =>
                    pre + 1 < Math.ceil(dataAPI.length / Entries) - 1
                      ? pre + 1
                      : Math.ceil(dataAPI.length / Entries) - 1
                  )
                }
              >
                {" "}
                next
              </span>
            </section>
          </section>
        </div>
      )}
    </main>
  );
};

export default Users;
