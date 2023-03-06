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
          minPriceFilter: "",
          maxPrice,
          maxPriceFilter: "",
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
          minPriceFilter: "",
          maxPriceFilter: "",
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
      const {
        brand,
        category,
        search,
        minPriceFilter,
        maxPriceFilter,
        rating,
      } = state.filters;

      const filtered = state.allProducts.filter((item) => {
        const brandFilter = brand.length === 0 || brand.includes(item.brand);

        const categoryFilter =
          category.length === 0 || category.includes(item.category);

        const searchFilter =
          search === "" ||
          item.brand.toLowerCase().includes(search.toLowerCase()) ||
          item.description.toLowerCase().includes(search.toLowerCase()) ||
          item.title.toLowerCase().includes(search.toLowerCase());

        const priceFilter =
          (minPriceFilter === "" || Number(minPriceFilter) <= item.price) &&
          (maxPriceFilter === "" || item.price <= Number(maxPriceFilter));

        const ratingFilter = item.rating >= rating;

        return (
          brandFilter &&
          categoryFilter &&
          searchFilter &&
          priceFilter &&
          ratingFilter
        );
      });

      return {
        ...state,
        filteredProducts: filtered,
      };

    case UPDATE_SORT:
      return {
        ...state,
        sortValue: action.payload,
      };

    case SORT_PRODUCTS:
      const sortValue = state.sortValue;
      const sortedProducts = [...state.filteredProducts];
      switch (sortValue) {
        case "price-low":
          sortedProducts.sort((a, b) => a.price - b.price);
          break;
        case "price-high":
          sortedProducts.sort((a, b) => b.price - a.price);
          break;
        case "rating-low":
          sortedProducts.sort((a, b) => a.rating - b.rating);
          break;
        case "rating-high":
          sortedProducts.sort((a, b) => b.rating - a.rating);
          break;
        case "name-a":
          sortedProducts.sort((a, b) =>
            a.title.toLowerCase().localeCompare(b.title)
          );
          break;
        case "name-z":
          sortedProducts.sort((a, b) =>
            b.title.toLowerCase().localeCompare(a.title)
          );
          break;
        case "discount-low":
          sortedProducts.sort(
            (a, b) => a.discountPercentage - b.discountPercentage
          );
          break;
        case "discount-high":
          sortedProducts.sort(
            (a, b) => b.discountPercentage - a.discountPercentage
          );
          break;

        default:
          break;
      }

      return { ...state, filteredProducts: sortedProducts };

    default:
      throw new Error(`No action type matching ${action.type}`);
  }
};

export default filterReducer;
