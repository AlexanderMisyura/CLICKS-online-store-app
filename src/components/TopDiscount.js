import styled from "styled-components";

import Loading from "./Loading";
import Error from "./Error";
import Product from "./Product";
import { useProductsContext } from "../context/productsContext";

const TopDiscount = () => {
  const { productsLoading, productsError, topDiscount } = useProductsContext();

  if (productsLoading) {
    return <Loading />;
  }
  if (productsError) {
    return <Error />;
  }

  return (
    <StyledTopDiscount className="section">
      <h3 className="title">best store discounts</h3>
      <div className="title-underline"></div>
      <div className="section-center products-container">
        {topDiscount.slice(0, 6).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </StyledTopDiscount>
  );
};

const StyledTopDiscount = styled.section`
  .products-container {
    display: grid;
    gap: 2.1rem;
    margin: 4rem auto;
  }

  @media (min-width: 576px) {
    .products-container {
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    }
  }
`;

export default TopDiscount;
