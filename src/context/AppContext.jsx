/* eslint-disable camelcase */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useContext, useState } from "react";
import axios from "axios";

const AppContext = React.createContext();

// eslint-disable-next-line react/prop-types
function AppProvider({ children }) {
  const [subcategoryId, setSubcategoryId] = useState("");

  return (
    <AppContext.Provider value={{ subcategoryId, setSubcategoryId }}>
      {children}
    </AppContext.Provider>
  );
}

// make sure use
export const useAppContext = () => useContext(AppContext);

export { AppContext, AppProvider };
