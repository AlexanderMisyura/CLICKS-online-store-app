import React, { useContext, useReducer, useEffect } from "react";
import axios from "axios";

import reducer from "../reducers/productsReducer";
import {
  GET_PRODUCTS_START,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_START,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";

const url = "https://dummyjson.com/products?limit=100";

const initialState = {
  products: [],
  topRated: [],
  topDiscount: [],
  productsLoading: false,
  productsError: false,
  singleProduct: {},
  singleProductLoading: true,
  singleProductError: false,
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_START });
    try {
      const { data } = await axios(url);
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data.products });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  useEffect(() => {
    fetchProducts(url);
  }, []);

  const fetchSingleProduct = async (url) => {
    dispatch({ type: GET_SINGLE_PRODUCT_START });
    try {
      const { data } = await axios(url);
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };

  return (
    <ProductsContext.Provider value={{ ...state, fetchSingleProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
