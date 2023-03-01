export const getFilterValues = (products) => {
  const filterValues = products.reduce(
    (result, product) => {
      const { category, brand } = product;
      return {
        ...result,
        allCategories: [...result.allCategories, category],
        allBrands: [...result.allBrands, brand],
      };
    },
    {
      allCategories: [],
      allBrands: [],
    }
  );

  filterValues.allCategories = [...new Set(filterValues.allCategories)].sort(
    (a, b) => a.toLowerCase().localeCompare(b.toLowerCase())
  );
  filterValues.allBrands = [...new Set(filterValues.allBrands)].sort((a, b) =>
    a.toLowerCase().localeCompare(b.toLowerCase())
  );
  filterValues.allCategories.unshift("ALL");
  filterValues.allBrands.unshift("ALL");

  return filterValues;
};
