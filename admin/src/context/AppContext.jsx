import React, { createContext, useState } from "react"; // ✅ Import React and hooks

// Create the context
export const AppContext = createContext();

// Context Provider component
const AppContextProvider = ({ children }) => {
  // Example state you can share via context
  const [appState, setAppState] = useState(null);

  // Context value
  const value = { appState, setAppState };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
