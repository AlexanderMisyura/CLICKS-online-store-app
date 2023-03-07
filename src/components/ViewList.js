
import { Link } from "react-router-dom";
import styled from "styled-components";

import { truncate } from "../utils/utils";

const ViewList = ({ products }) => {
  return (
    <StyledList>
      <div className="products-list">
        {products.map((product) => {
          const {
            description,
            discountPercentage,
            id,
            price,
            thumbnail,
            title,
          } = product;
          return (
            <article key={id}>
              <div className="image-container">
                <div className="corner">
                  <span>{discountPercentage}% OFF</span>
                </div>
                <img className="img" src={thumbnail} alt={title} />
              </div>
              <div className="text-container">
                <h5>{product.title}</h5>
                <p>${price}</p>
                <p>{truncate(description, 100)}</p>
                <Link className="btn btn-variant" to={`/products/${id}`}>view details</Link>
              </div>
            </article>
          );
        })}
      </div>
    </StyledList>
  );
};

const StyledList = styled.div`
  .products-list {
    display: grid;
    row-gap: 2rem;
    margin: 0 auto;

    article {
      display: grid;
      height: 100%;
      align-items: center;
      column-gap: 2rem;
    }
  }
  .image-container {
    height: 100%;
    max-height: 200px;
    margin-bottom: 1rem;

    overflow: hidden;
    border-radius: var(--borderRadius);

    position: relative;
    .img {
      height: 100%;
    }
  }

  .text-container {
    /* padding: 0.5rem; */
    height: 100%;
    overflow: hidden;

    p {
      margin-bottom: 0.5rem;
      font-size: var(--fontSizeTextSmall);
    }
    h5 {
      margin-bottom: 0.5rem;

      color: var(--secondary-900);
      letter-spacing: var(--letterSpacing);
      font-weight: 600;
      font-size: 1rem;
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

  @media (min-width: 470px) {
    .image-container {
      max-height: 230px;
      margin-bottom: 0;
    }
    .products-list {
      grid-auto-rows: 170px;
      article {
        grid-template-columns: minmax(190px, 300px) 50%;
      }
    }
  }
  @media (min-width: 650px) {
    .products-list {
      grid-auto-rows: 180px;
      article {
        grid-template-columns: minmax(230px, 300px) 50%;
      }
    }
  }
  @media (min-width: 850px) {
    .products-list {
      article {
        grid-template-columns: minmax(230px, 330px) 50%;
      }
    }
  }
  @media (min-width: 992px) {
    .products-list {
      grid-auto-rows: 230px;
    }
  }
`;

export default ViewList;
