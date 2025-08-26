import React, { createContext, useState } from "react"; // ✅ Import React and hooks

// Create the context
export const AdminContext = createContext();

// Context Provider component
const AdminContextProvider = ({ children }) => {

  const backendUrl = import.meta.env.VITE_BACKEND_URL
  // Example state you can share via context
  const [aToken, setAToken] = useState(localStorage.getItem('aToken')?localStorage.getItem('aToken'):'');

  // Context value
  const value = { aToken, setAToken ,backendUrl};

  return (
    <AdminContext.Provider value={value}> 
      {children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
