import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  FILTER_OPEN,
  FILTER_CLOSE,
  SET_VIEW_LIST,
  SET_VIEW_TILES,
} from "../actions";

const functionalReducer = (state, action) => {
  switch (action.type) {
    case SIDEBAR_OPEN:
      return { ...state, isSidebarOpen: true };
    case SIDEBAR_CLOSE:
      return { ...state, isSidebarOpen: false };

    case FILTER_OPEN:
      return { ...state, isFilterOpen: true };
    case FILTER_CLOSE:
      return { ...state, isFilterOpen: false };

    case SET_VIEW_LIST:
      return { ...state, productsView: "list" };
    case SET_VIEW_TILES:
      return { ...state, productsView: "tiles" };

    default:
      throw new Error(`No action type matching ${action.type}`);
  }
};

export default functionalReducer;
