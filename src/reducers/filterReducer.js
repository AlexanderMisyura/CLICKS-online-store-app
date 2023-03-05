import {
  INITIAL_PRODUCTS_LOAD,
  CLEAR_ALL_FILTERS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  UPDATE_SORT,
  SORT_PRODUCTS,
} from "../actions";

const filterReducer = (state, action) => {
  switch (action.type) {
    case INITIAL_PRODUCTS_LOAD:
      const products = action.payload;
      const maxPrice = Math.max(...products.map((product) => product.price));
      const minPrice = Math.min(...products.map((product) => product.price));
      return {
        ...state,
        allProducts: [...products],
        filteredProducts: [...products],
        filters: {
          ...state.filters,
          minPrice,
          minPriceFilter: minPrice,
          maxPrice,
          maxPriceFilter: maxPrice,
        },
      };

    case CLEAR_ALL_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          brand: [],
          category: [],
          search: "",
          minPriceFilter: state.filters.minPrice,
          maxPriceFilter: state.filters.maxPrice,
          rating: 0,
        },
      };

    case UPDATE_FILTERS:
      const updatedFilters = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          ...updatedFilters,
        },
      };

    case FILTER_PRODUCTS:
      // console.log("filter products", state.filteredProducts);
      return {
        ...state,
      };

    case UPDATE_SORT:
      const sortValue = action.payload;
      console.log("sort by ", sortValue);
      return {
        ...state,
      };

    case SORT_PRODUCTS:
      // console.log("sort products", state.filteredProducts);
      return {
        ...state,
      };

    default:
      throw new Error(`No action type matching ${action.type}`);
  }
};

export default filterReducer;
