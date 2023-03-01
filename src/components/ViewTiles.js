import styled from "styled-components";

import Product from "./Product";

const ViewTiles = ({ products }) => {
  return (
    <StyledTiles>
      <div className="products-tiles">
        {products.map((product, i) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </StyledTiles>
  );
};

const StyledTiles = styled.div`
  .products-tiles {
    display: grid;
    gap: 2.1rem;
    margin: 4rem auto;

    .shade,
    .image-container {
      height: 220px;
    }
  }

  @media (min-width: 576px) {
    .products-tiles {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

      .shade,
      .image-container {
        height: 220px;
      }
    }
  }
`;

export default ViewTiles;
