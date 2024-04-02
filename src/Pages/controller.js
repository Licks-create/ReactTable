// const selectAll = (ele) => {
  //   if (ele.target.checked) {
  //     setCurrentPageData(
  //       currentPageData.map((ele, i) => ({
  //         ...ele,
  //         select: true,
  //       }))
  //     );
  //     setLocalData(
  //       localData.map((ele, i) => {
  //         if (i >= (currentPage - 1) * 10 && i < (currentPage - 1) * 10 + 10)
  //           return {
  //             ...ele,
  //             select: true,
  //           };
  //         else return { ...ele };
  //       })
  //     );
  //     setSelectAll(true);
  //   } else {
  //     setCurrentPageData(
  //       currentPageData.map((ele, i) => ({
  //         ...ele,
  //         select: false,
  //       }))
  //     );
  //     setLocalData(
  //       localData.map((ele, i) => {
  //         if (i >= (currentPage - 1) * 10 && i <= (currentPage - 1) * 10 + 10)
  //           return {
  //             ...ele,
  //             select: false,
  //           };
  //         else return { ...ele };
  //       })
  //     );
  //     setSelectAll(false);
  //   }
  // };

  // const selectOne = (id) => {
  //   setCurrentPageData(
  //     currentPageData.map((ele, i) => {
  //       if (ele.id === id) {
  //         let select = !ele.select;
  //         return { ...ele, select };
  //       } else
  //         return {
  //           ...ele,
  //         };
  //     })
  //   );
  //   setLocalData(
  //     localData.map((ele, i) => {
  //       if (ele.id === id) {
  //         let select = !ele.select;
  //         return { ...ele, select };
  //       } else
  //         return {
  //           ...ele,
  //         };
  //     })
  //   );
  // };

  // const editOne = (id) => {
  //   setEditShow(true);
  //   let filterData = currentPageData.filter((ele, i) => ele.id === id);
  //   let formData = filterData[0];
  //   setName(formData.name);
  //   setEmail(formData.email);
  //   setRole(formData.role);
  //   setFormDate(formData);
  // };

  // const deleteOne = (id) => {
  //   setDeleteShow(true);
  //   let obj = {};
  //   let dataAfterDeletion = currentPageData.filter((ele, i) => {
  //     if (ele.id !== id) {
  //       return true;
  //     } else {
  //       obj = ele;
  //       return false;
  //     }
  //   });
  //   setCurrentPageData(dataAfterDeletion);

  //   let localDataAfterDeletion = localData.filter((ele, i) => {
  //     if (ele.id !== id) {
  //       return true;
  //     } else return false;
  //   });
  //   let deleteInSeach = searchedData.filter((ele, i) => {
  //     if (ele.id !== id) {
  //       return true;
  //     } else return false;
  //   });
  //   setLocalData(localDataAfterDeletion);
  //   setSearchedData(deleteInSeach);
  //   toast.success(`details of user ${obj.name} deleted`);
  // };



















// const pageChange = (ele) => {
  //   let pageNo = ele.target.id.split("-")[1];
  //   setcurrentPage(Number(pageNo) + 1);
  //   setCurrentPageData(localData.slice(pageNo * 10, pageNo * 10 + 10));
  //   setDataTillNow((Number(pageNo) + 1) * 10);
  //   removeButtonStyling();
  //   document.getElementById(ele.target.id).classList.add("selected");
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   let id = formData.id;
  //   setCurrentPageData(
  //     currentPageData.map((ele, i) => {
  //       if (ele.id === id)
  //         return {
  //           ...ele,
  //           name,
  //           role,
  //           email,
  //         };
  //       else
  //         return {
  //           ...ele,
  //         };
  //     })
  //   );
  //   setLocalData(
  //     localData.map((ele, i) => {
  //       if (ele.id === id)
  //         return {
  //           ...ele,
  //           name,
  //           role,
  //           email,
  //         };
  //       else
  //         return {
  //           ...ele,
  //         };
  //     })
  //   );
  //   setSearchedData(
  //     searchedData.map((ele, i) => {
  //       if (ele.id === id)
  //         return {
  //           ...ele,
  //           name,
  //           role,
  //           email,
  //         };
  //       else
  //         return {
  //           ...ele,
  //         };
  //     })
  //   );
  //   toast.success(`Submission Succesfull`);
  //   setEditShow(false);
  // };

  // useEffect(() => {
  //   let isSelectAll = currentPageData.every((e) => {
  //     return e.select === true;
  //   });
  //   if (isSelectAll) setSelectAll(true);
  //   else setSelectAll(false);

  //   let multiSel = currentPageData.filter((ele) => {
  //     return ele.select;
  //   });
  //   setMultiSelect(multiSel.length > 1 ? true : false);
  //   setRowsSelected(
  //     localData.filter((ele) => {
  //       return ele.select;
  //     }).length
  //   );
  // }, [currentPageData]);

  // const handleClose = () => {
  //   setEditShow(false);
  // };

  // const searchRelated = (e) => {
  //   setSearchValue(e.target.value);
  //   let value = e.target.value;
  //   let searchedData = localData.filter((ele) => {
  //     return (
  //       ele.name.includes(value) ||
  //       ele.email.includes(value) ||
  //       ele.role.includes(value)
  //     );
  //   });
  //   setSearchedData(searchedData);
  // };

  // const delMultiple = () => {
  //   setDeleteShow(true);
  //   let dataAfterDeletion = currentPageData.filter((ele, i) => {
  //     return !ele.select;
  //   });
  //   setCurrentPageData(dataAfterDeletion);

  //   let localDataAfterDeletion = localData.filter((ele, i) => {
  //     if (i >= (currentPage - 1) * 10 && i < (currentPage - 1) * 10 + 10)
  //       return !ele.select;
  //     return true;
  //   });
  //   setLocalData(localDataAfterDeletion);
  //   toast.success(`${10 - dataAfterDeletion.length} rows deleted`);
  // };


  