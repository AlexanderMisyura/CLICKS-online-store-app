import {
  INITIAL_PRODUCTS_LOAD,
  CLEAR_ALL_FILTERS,
  CLEAR_SPECIFIC_FILTER,
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
      return {
        ...state,
        allProducts: [...products],
        filteredProducts: [...products],
        filters: {
          ...state.filters,
          maxPrice,
          maxPriceValue: maxPrice,
        },
      };

    case CLEAR_ALL_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          brand: "all",
          category: "all",
          search: "",
          minPrice: 0,
          minPriceValue: 0,
          maxPrice: 0,
          maxPriceValue: state.filters.maxPrice,
        },
      };

    case CLEAR_SPECIFIC_FILTER:
      const filterName = action.payload;
      console.log("filterName clear", filterName);
      return {
        ...state,
      };

    case UPDATE_FILTERS:
      const updatedFilter = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          ...updatedFilter,
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
