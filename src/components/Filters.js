import { useFunctionalContext } from "../context/functionalContext";
import { useProductsContext } from "../context/productsContext";
import { getFilterValues } from "../utils";

const Filters = () => {
  const { products } = useProductsContext();
  const { openFilter, closeFilter } = useFunctionalContext();
  const { allCategories, allBrands } = getFilterValues();

  return <div>Filters</div>;
};

export default Filters;
