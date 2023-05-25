import PropTypes from "prop-types";
import styled from "styled-components";

import Product from "./Product";

const ViewTiles = ({ products }) => {
  return (
    <StyledTiles>
      <div className="products-tiles">
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </StyledTiles>
  );
};

ViewTiles.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const StyledTiles = styled.div`
  .products-tiles {
    display: grid;
    gap: 1.5rem;
    margin: 0 auto;

    .shade,
    .image-container {
      height: 220px;
    }
  }

  @media (min-width: 300px) {
    .products-tiles {
      .shade,
      .image-container {
        height: 250px;
      }
    }
  }

  @media (min-width: 390px) {
    .products-tiles {
      gap: 1rem;
      grid-template-columns: 1fr 1fr;

      .shade,
      .image-container {
        height: 180px;
      }
    }
  }

  @media (min-width: 576px) {
    .products-tiles {
      .shade,
      .image-container {
        height: 220px;
      }
    }
  }

  @media (min-width: 1180px) {
    .products-tiles {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export default ViewTiles;
