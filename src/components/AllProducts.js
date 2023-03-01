import ViewList from "./ViewList";
import ViewTiles from "./ViewTiles";
import { useFunctionalContext } from "../context/functionalContext";
import { useFilterContext } from "../context/filterContext";

const AllProducts = () => {
  const { productsView } = useFunctionalContext();
  const { filteredProducts } = useFilterContext();

  if (filteredProducts.length < 1) {
    return <h4>No products match</h4>;
  }

  if (productsView === "list") {
    return <ViewList products={filteredProducts} />;
  }

  if (productsView === "tiles") {
    return <ViewTiles products={filteredProducts} />;
  }
};

export default AllProducts;
