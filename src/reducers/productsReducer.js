import {
  GET_PRODUCTS_START,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from "../actions";

const productsReducer = (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS_START:
      return { ...state, productsLoading: true, productsError: false };

    case GET_PRODUCTS_SUCCESS:
      const topRated = action.payload
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 10);
      const topDiscount = action.payload
        .sort((a, b) => b.discountPercentage - a.discountPercentage)
        .slice(0, 10);
      return {
        ...state,
        productsLoading: false,
        productsError: false,
        products: action.payload,
        topRated,
        topDiscount
      };

    case GET_PRODUCTS_ERROR:
      return { ...state, productsLoading: false, productsError: true };

    default:
      throw new Error(`No action type matching ${action.type}`);
  }
};

export default productsReducer;
