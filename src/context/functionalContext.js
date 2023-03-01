import React, { useContext, useReducer } from "react";

import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  FILTER_OPEN,
  FILTER_CLOSE,
  SET_VIEW_TILES,
  SET_VIEW_LIST,
} from "../actions";
import reducer from "../reducers/functionalReducer";

const initialState = {
  isSidebarOpen: false,
  isFilterOpen: false,
  productsView: "tiles",
};

export const FunctionalContext = React.createContext();

export const FunctionalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const openFilter = () => {
    dispatch({ type: FILTER_OPEN });
  };
  const closeFilter = () => {
    dispatch({ type: FILTER_CLOSE });
  };

  const setViewList = () => {
    dispatch({ type: SET_VIEW_LIST });
  };
  const setViewTiles = () => {
    dispatch({ type: SET_VIEW_TILES });
  };

  return (
    <FunctionalContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        openFilter,
        closeFilter,
        setViewList,
        setViewTiles,
      }}
    >
      {children}
    </FunctionalContext.Provider>
  );
};

export const useFunctionalContext = () => {
  return useContext(FunctionalContext);
};
