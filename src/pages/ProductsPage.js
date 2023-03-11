import styled from "styled-components";
import {} from "react-icons";

import { Loading, Error, AllProducts, Filters, Sorting } from "../components";
import { useProductsContext } from "../context/productsContext";

const ProductsPage = () => {
  const { productsLoading, productsError } = useProductsContext();

  return (
    <main>
      <StyledProductPage className="full-page">
        {productsLoading ? (
          <Loading />
        ) : productsError ? (
          <Error />
        ) : (
          <section className="section section-center products">
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
  .products {
    display: grid;
    gap: 4rem;
  }

  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
      gap: 2rem;
    }
  }
`;

export default ProductsPage;
