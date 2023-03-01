import styled from "styled-components";
import {} from "react-icons";

import { Loading, Error, AllProducts, Filters, Sorting } from "../components";
import { useProductsContext } from "../context/productsContext";

const ProductsPage = () => {
  const { products, productsLoading, productsError } = useProductsContext();

  return (
    <main>
      <StyledProductPage className="full-page">
        {productsLoading ? (
          <Loading />
        ) : productsError ? (
          <Error />
        ) : (
          <section className="section section-center">
            <Filters />
            <div>
              <Sorting />
              <AllProducts />
            </div>
          </section>
        )}
      </StyledProductPage>
    </main>
  );
};

const StyledProductPage = styled.div`
  /* .products {
    display: grid;
    gap: 2rem;
  } */
`;

export default ProductsPage;
