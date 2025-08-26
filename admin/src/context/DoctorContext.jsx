import React, { createContext, useState } from "react"; // ✅ Import React and hooks

// Create the context
export const DoctorContext = createContext();

// Context Provider component
const DoctorContextProvider = ({ children }) => {
  // Example state you can share via context
  const [doctor, setDoctor] = useState(null);

  // Context value
  const value = { doctor, setDoctor };

  return (
    <DoctorContext.Provider value={value}>
      {children}
    </DoctorContext.Provider>
  );
};

export default DoctorContextProvider;
