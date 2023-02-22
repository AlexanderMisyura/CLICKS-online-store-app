import styled from "styled-components";
import { Link } from "react-router-dom";

import Loading from "./Loading";
import Error from "./Error";
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
        {topDiscount.map((product) => {
          const {
            brand,
            category,
            description,
            discountPercentage,
            id,
            images,
            price,
            rating,
            stock,
            thumbnail,
            title,
          } = product;
          return (
            <article className="product" key={id}>
              <Link to={`/products/${id}`}>
                <div className="corner">
                  <span>{discountPercentage}% OFF</span>
                </div>
                <img className="img" src={thumbnail} alt={title} />
                <footer>
                  <span className="name">{title}</span>
                  <span className="price">${price}</span>
                </footer>
              </Link>
            </article>
          );
        })}
      </div>
    </StyledTopDiscount>
  );
};

const StyledTopDiscount = styled.section`
  .products-container {
    display: grid;
    gap: 2rem;
    margin: 4rem auto;
  }
  .product {
    overflow: hidden;
    a {
      display: block;
      position: relative;

      background-color: var(--black);
      border-radius: calc(var(--borderRadius) + 1px);
    }
    &:hover img {
      opacity: 0.7;
    }
    &:hover footer {
      background-color: var(--primary-400);
    }
    &:hover .name {
      color: var(--secondary-300);
    }
    &:hover .price {
      color: var(--secondary-500);
    }
    img {
      height: 250px;
      border-top-left-radius: var(--borderRadius);
      border-top-right-radius: var(--borderRadius);
      transition: var(--transition);
    }
  }

  .corner {
    position: absolute;
    width: 10rem;
    height: 10rem;

    text-align: center;
    background-color: var(--red-dark);

    top: -5rem;
    left: -5rem;
    z-index: 10;

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
    border-bottom-left-radius: var(--borderRadius);
    border-bottom-right-radius: var(--borderRadius);

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

  @media (min-width: 576px) {
    .products-container {
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    }
  }
`;

export default TopDiscount;
