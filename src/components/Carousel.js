import styled from "styled-components";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { useProductsContext } from "../context/productsContext";

const Carousel = () => {
  const { topRated } = useProductsContext();
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const prevSlideIndex =
    activeSlideIndex - 1 < 0 ? topRated.length - 1 : activeSlideIndex - 1;
  const nextSlideIndex =
    activeSlideIndex + 1 > topRated.length - 1 ? 0 : activeSlideIndex + 1;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setActiveSlideIndex(nextSlideIndex);
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [nextSlideIndex]);

  return (
    <div className="section section-center">
      <StyledCarousel>
        <button
          className="carousel-btn prev"
          onClick={() => setActiveSlideIndex(prevSlideIndex)}
        >
          <BsChevronLeft />
        </button>
        <div className="products-container">
          {topRated.map((product, i) => {
            const {
              id,
              price,
              thumbnail,
              title,
            } = product;

            let position = "next-slide";
            if (i === activeSlideIndex) {
              position = "active-slide";
            }
            if (i === prevSlideIndex) {
              position = "prev-slide";
            }
            return (
              <article className={`${position} product`} key={id}>
                <Link to={`/products/${id}`}>
                  <img
                    className="img product-image"
                    src={thumbnail}
                    alt={title}
                  />
                  <p className="product-title">{title}</p>
                </Link>
                <p className="product-price">${price}</p>
              </article>
            );
          })}
        </div>
        <button
          className="carousel-btn next"
          onClick={() => setActiveSlideIndex(nextSlideIndex)}
        >
          <BsChevronRight />
        </button>
      </StyledCarousel>
    </div>
  );
};

const StyledCarousel = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;

  position: relative;

  .products-container {
    width: 100%;
    max-width: 800px;
    height: 500px;
    max-height: 55vh;

    overflow: hidden;

    position: relative;
  }

  .product {
    width: 100%;
    height: 100%;
    display: none;

    position: absolute;

    a {
      display: none;
    }
  }
  .product-image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;

    border-radius: var(--borderRadius);
  }

  .product-title {
    padding: var(--element-padding);
    margin: 0;

    color: var(--secondary-300);
    font-size: 1rem;

    background-color: #798997c7;
    border-radius: var(--borderRadius);

    position: absolute;
    top: 1%;
    left: 1%;

    transition: var(--transition);
  }

  .product-price {
    padding: 1rem;
    margin: 0;

    color: var(--secondary-200);
    font-size: 2rem;

    background-image: radial-gradient(
      var(--secondary-800),
      var(--secondary-600)
    );
    border-radius: 50%;

    position: absolute;
    bottom: 1rem;
    left: 1rem;
  }

  .active-slide {
    display: block;

    transition: var(--transition);

    a {
      display: block;
      width: 100%;
      height: 100%;

      &:hover > .product-title {
        color: var(--secondary-500);
        background-color: #4d6274d1;
      }
    }
  }

  .prev-slide {
    display: block;
    transform: translate(-100%);
  }
  .next-slide {
    display: block;
    transform: translate(100%);
  }

  .carousel-btn {
    display: block;
    width: 20%;

    color: var(--secondary-100);
    font-size: 2.5rem;

    cursor: pointer;
    background-color: transparent;
    border: none;
    border-radius: var(--borderRadius);

    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 10;

    transition: var(--transition);
  }
  .carousel-btn.prev {
    left: 0;
  }
  .carousel-btn.next {
    right: 0;
  }

  .carousel-btn:hover {
    background-color: #00000010;
  }

  @media screen and (min-width: 550px) {
    .product-title {
      font-size: 1.25rem;
      top: 1rem;
      left: 1rem;
    }
  }

  @media screen and (min-width: 992px) {
    .carousel-btn {
      width: 10%;
      position: static;
    }

    .product-price {
      font-size: 3rem;
    }

    .product-title {
      font-size: 1.75rem;
      padding: 0.75rem 1.5rem;
    }
  }
`;

export default Carousel;
