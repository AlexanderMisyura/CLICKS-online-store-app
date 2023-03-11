import { Link } from "react-router-dom";
import styled from "styled-components";

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
              <div className="info-container">
                <h5>{product.title}</h5>
                <p className="price">${price}</p>
                <div className="description-container">
                  <p>{description}</p>
                </div>
                <div className="btn-container">
                  <Link className="btn btn-variant" to={`/products/${id}`}>
                    view details
                  </Link>
                </div>
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
    }
  }

  .image-container {
    height: 200px;

    overflow: hidden;
    border-top-left-radius: var(--borderRadius);
    border-top-right-radius: var(--borderRadius);

    position: relative;
    .img {
      height: 100%;
    }
  }

  .info-container {
    display: grid;
    height: 100%;
    padding: var(--element-padding);
    align-items: center;

    letter-spacing: var(--letterSpacing);

    border-bottom-left-radius: var(--borderRadius);
    border-bottom-right-radius: var(--borderRadius);
    background-color: var(--grey-200);
    overflow: hidden;

    h5 {
      margin-bottom: 0;

      color: var(--secondary-800);
      font-weight: 600;
      font-size: 1rem;
    }

    .price {
      color: var(--secondary-700);
      font-weight: 600;
      font-size: 1.25rem;
      margin-bottom: 0.3rem;
    }

    .description-container {
      line-height: 1.5;
      font-size: var(--fontSizeTextSmall);

      p {
        margin-bottom: 0;
      }
    }

    .btn-container {
      text-align: right;
      margin-top: 0.375rem;
    }

    .btn {
      box-shadow: none;
      line-height: normal;
      &:hover {
        box-shadow: none;
      }
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

  @media (min-width: 330px) {
    .image-container {
      height: 300px;
    }

  }

  @media (min-width: 470px) {
    .image-container {
      height: 100%;
      max-height: 230px;
      margin-bottom: 0;

      border-bottom-left-radius: var(--borderRadius);
      border-top-right-radius: 0;
    }

    .products-list {
      grid-auto-rows: 170px;

      article {
        grid-template-columns: minmax(170px, 300px) 60%;
      }
    }
    .info-container {
      grid-template-rows: min-content min-content minmax(35px, 1fr) min-content;

      border-top-right-radius: var(--borderRadius);
      border-bottom-left-radius: 0;

      .price,
      h5 {
        margin-bottom: 0;
      }

      .description-container {
        align-self: start;
        height: 100%;
        overflow: hidden;
      }
    }
  }
  @media (min-width: 650px) {
    .products-list {
      grid-auto-rows: 190px;

      article {
        grid-template-columns: minmax(190px, 300px) 60%;
      }
    }
  }
  @media (min-width: 850px) {
    .products-list {
      article {
        grid-template-columns: minmax(230px, 330px) 60%;
      }
    }
  }
  @media (min-width: 992px) {
    .products-list {
      grid-auto-rows: 230px;
    }

    .info-container {
      padding-left: 1.5rem;

      h5 {
        font-size: 1.25rem;
      }

      .price {
        font-size: 1.5rem;
      }

      .btn-container {
        text-align: left;

        .btn {
          line-height: inherit;
        }
      }
    }
  }
`;

export default ViewList;
