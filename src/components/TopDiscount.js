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
      <div className="section-center top-discount-products">
        {topDiscount.slice(0, 6).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </StyledTopDiscount>
  );
};

const StyledTopDiscount = styled.section`
  .top-discount-products {
    display: grid;
    gap: 2.1rem;
    margin: 4rem auto;

    .shade,
    .image-container {
      height: 220px;
    }
  }

  @media (min-width: 576px) {
    .top-discount-products {
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    }
  }
`;

export default TopDiscount;
