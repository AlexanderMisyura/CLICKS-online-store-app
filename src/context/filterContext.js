import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/filterReducer";
import {
  INITIAL_PRODUCTS_LOAD,
  CLEAR_ALL_FILTERS,
  CLEAR_SPECIFIC_FILTER,
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
    brand: "all",
    category: "all",
    search: "",
    minPrice: 0,
    minPriceValue: 0,
    maxPrice: 0,
    maxPriceValue: 0,
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
  const clearSpecificFilter = (e) => {
    const filterName = e.target.name;
    dispatch({ type: CLEAR_SPECIFIC_FILTER, payload: filterName });
  };

  const updateFilters = (e) => {
    const filterName = e.target.name;
    const filterValue = e.target.value;
    dispatch({ type: UPDATE_FILTERS, payload: { [filterName]: filterValue } });
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
        clearSpecificFilter,
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
