import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { BsChevronLeft } from "react-icons/bs";

import { Loading, Error, ImageGallery } from "../components";
import { useProductsContext } from "../context/productsContext";

const url = "https://dummyjson.com/products/";

const SingleProduct = () => {
  const {
    singleProductLoading,
    singleProductError,
    fetchSingleProduct,
    singleProduct,
  } = useProductsContext();
  const { prodId } = useParams();

  useEffect(() => {
    fetchSingleProduct(`${url}${prodId}`);
  }, [prodId]);

  if (singleProductLoading) {
    return (
      <main className="full-page">
        <Loading />
      </main>
    );
  }
  if (singleProductError) {
    return (
      <main className="full-page">
        <Error />
      </main>
    );
  }

  const {
    id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images,
  } = singleProduct;

  return (
    <StyledSingleProduct className="full-page">
      {singleProductLoading ? (
        <Loading />
      ) : singleProductError ? (
        <Error />
      ) : (
        <>
          <section className="section section-center product">
            <ImageGallery images={images} />
            <section className="product__info">
              <h3 className="product__info__title">{title}</h3>
              <h4 className="product__info__discount">
                -{discountPercentage}%
              </h4>
              <h4 className="product__info__price">${price}</h4>
              <div className="btn-container">
                <button className="btn btn-special" type="button">
                  add to cart
                </button>
                <div className="product__info__stock">
                  Stock available: {stock}
                </div>
              </div>
              <p className="product__info__description">{description}</p>
            </section>
          </section>
        </>
      )}
    </StyledSingleProduct>
  );
};

const StyledSingleProduct = styled.main`
  .product {
    display: grid;
    gap: 1.5rem;

    letter-spacing: var(--letterSpacing);

    .product__info {
      .product__info__title {
        margin-bottom: 1rem;
        color: var(--secondary-800);
        font-size: 1.5rem;
      }
      .product__info__discount {
        margin-bottom: 1rem;

        color: var(--secondary-700);
        font-size: 1.5rem;
        font-weight: 600;
      }
      .product__info__price {
        color: var(--secondary-600);
        text-shadow: 2px 2px 2px var(--secondary-700);
        font-size: 2rem;
        font-weight: 600;
      }

      .btn-container {
        display: grid;
        gap: 1rem;
        padding-bottom: 2rem;

        .btn {
          justify-self: stretch;
        }

        .product__info__stock {
          justify-self: center;
          color: var(--grey-400);
        }
      }

      .product__info__description {
        padding-top: 2rem;
        border-top: 2px solid var(--primary-300);
      }
    }
  }

  @media (min-width: 400px) {
    .product {
      .product__info {
        .product__info__title,
        .product__info__discount {
          font-size: 1.75rem;
        }

        .product__info__price {
          font-size: 2.25rem;
        }

        .product__info__description {
          font-size: 1.25rem;
        }
      }
    }
  }

  @media (min-width: 500px) {
    .product {
      .product__info {
        .btn-container {
          .btn {
            font-size: 1.5rem;
          }
        }
      }
    }
  }

  @media (min-width: 600px) {
    .product {
      gap: 2.5rem;
      .product__info {
        .btn-container {
          grid-template-columns: 1fr 1fr;
          align-items: center;
        }
      }
    }
  }

  @media (min-width: 992px) {
    .product {
      grid-template-columns: 1fr 1fr;
      .product__info {
        .btn-container {
          .btn {
            font-size: 1.25rem;
          }
        }
      }
    }
  }
`;

export default SingleProduct;
