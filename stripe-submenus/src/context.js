import React, { useState, useContext } from "react";
import sublinks from "./data";

export const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [submenu, setSubmenu] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", links: [] });
  // close Submenu
  const closeSubmenu = () => {
    setSubmenu(false);
  };
  // open Submenu
  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((el) => el.page === text);
    setPage(page);
    setLocation(coordinates);
    setSubmenu(true);
  };
  // close sidebar
  const closeSidebar = () => {
    setSidebar(false);
  };
  // open sidebar
  const openSidebar = () => {
    setSidebar(true);
  };

  return (
    <AppContext.Provider
      value={{
        submenu,
        sidebar,
        location,
        page,
        closeSubmenu,
        openSubmenu,
        closeSidebar,
        openSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
