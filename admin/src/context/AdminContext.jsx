import React, { createContext, useState } from "react"; // ✅ Import React and hooks
import axios from "axios";
import { toast } from "react-toastify";

// Create the context
export const AdminContext = createContext();

// Context Provider component
const AdminContextProvider = ({ children }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [aToken, setAToken] = useState(
    localStorage.getItem("aToken") ? localStorage.getItem("aToken") : ""
  );
  const [doctors, setDoctors] = useState([]);

  const getAllDoctors = async () => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/admin/all-doctors",
        {},
        { headers: { aToken } }
      );
      if (data.success) {
        setDoctors(data.data);
        console.log("API Response:", data.data);
        console.log("API TERAN");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const changeAvailability = async (docId) =>{
    try {
      const {data} = await axios.post(backendUrl + "/api/admin/change-availability",{docId},{ headers: { aToken } });
      if (data.success) {
        toast.success(data.message);
        getAllDoctors()
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  const value = {
    aToken,
    setAToken,
    backendUrl,
    doctors,
    getAllDoctors,
    changeAvailability,
  };

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
};

export default AdminContextProvider;
