import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { convertToTable } from "../helpers/convertToTable";
import { getJobs } from "../store/reducers/jobSlice";
import { GoogleChart } from "../componets/jobPage";

const JobPage = () => {
  const dispatch = useDispatch();
  const { jobs, status } = useSelector((s) => s.jobs);

  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);
  
  let dataToGoogle = jobs ? convertToTable(jobs) : "";

  return (
    <>{dataToGoogle ? <GoogleChart data={dataToGoogle} /> : <>{status}</>}</>
  );
};

export default JobPage;
