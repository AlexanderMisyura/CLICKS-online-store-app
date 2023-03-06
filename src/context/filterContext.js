import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/filterReducer";
import {
  INITIAL_PRODUCTS_LOAD,
  CLEAR_ALL_FILTERS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  UPDATE_SORT,
  SORT_PRODUCTS,
} from "../actions";
import { useProductsContext } from "./productsContext";

const initialState = {
  filteredProducts: [],
  allProducts: [],
  sortBy: "rating-high",
  filters: {
    brand: [],
    category: [],
    search: "",
    minPrice: 0,
    minPriceFilter: "",
    maxPrice: 0,
    maxPriceFilter: "",
    rating: 0,
  },
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: INITIAL_PRODUCTS_LOAD, payload: products });
  }, [products]);

  const clearFilters = () => {
    dispatch({ type: CLEAR_ALL_FILTERS });
  };

  const updateFilters = (filters) => {
    dispatch({ type: UPDATE_FILTERS, payload: filters });
  };

  const updateSort = (e) => {
    const sortValue = e.target.dataset.sortValue;
    dispatch({ type: UPDATE_SORT, payload: sortValue });
  };

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS });
  }, [products, state.sortProducts, state.filters]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        clearFilters,
        updateFilters,
        updateSort,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
