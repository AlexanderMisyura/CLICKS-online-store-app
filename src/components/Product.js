import styled from "styled-components";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { discountPercentage, id, price, thumbnail, title } = product;
  return (
    <StyledProduct>
      <Link to={`/products/${id}`}>
        <div className="corner">
          <span>{discountPercentage}% OFF</span>
        </div>
        <div className="shade"></div>
        <div className="image-container">
          <img className="img" src={thumbnail} alt={title} />
        </div>
        <footer>
          <span className="name">{title}</span>
          <span className="price">${price}</span>
        </footer>
      </Link>
    </StyledProduct>
  );
};

const StyledProduct = styled.article`
  overflow: hidden;
  border-radius: var(--borderRadius);

  a {
    display: block;
    position: relative;

    transition: var(--transition);
  }
  &:hover .shade {
    background-color: #2222223d;
  }
  &:hover footer {
    background-color: var(--primary-400);
    .name {
      color: var(--secondary-300);
    }
    .price {
      color: var(--secondary-500);
    }
  }
  .shade {
    position: absolute;
    width: 100%;
    height: 250px;

    background-color: transparent;

    transition: var(--transition);
    z-index: 10;
  }

  .image-container {
    height: 250px;
    position: relative;
    transition: var(--transition);

    img {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }

  .corner {
    width: 10rem;
    height: 10rem;

    text-align: center;
    background-color: var(--red-dark);

    position: absolute;
    top: -5rem;
    left: -5rem;
    z-index: 15;

    transform: rotate(315deg);
    span {
      display: block;
      width: 100%;
      color: var(--secondary-400);
      font-size: 1.2rem;

      position: absolute;
      bottom: 0;
      left: 50%;

      transform: translate(-50%);
    }
  }

  footer {
    height: 2.5rem;
    letter-spacing: var(--letterSpacing);

    background-color: var(--primary-300);

    position: relative;

    transition: var(--transition);
  }

  .name {
    max-width: 75%;

    white-space: nowrap;
    overflow-x: clip;
    text-overflow: ellipsis;
    color: var(--secondary-200);

    position: absolute;
    bottom: 50%;
    left: 1rem;

    transform: translate(0, 50%);
  }

  .price {
    font-size: 1.25rem;
    color: var(--secondary-300);

    position: absolute;
    bottom: 50%;
    right: 1rem;

    transform: translate(0, 50%);
  }
`;

export default Product;
