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

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     setActiveSlideIndex(nextSlideIndex);
  //   }, 3000);

  //   return () => {
  //     clearTimeout(timeoutId);
  //   };
  // }, [activeSlideIndex]);

  return (
    <div className="section section-center">
      <StyledCarousel>
        <button
          className="carousel-btn prev"
          onClick={() => setActiveSlideIndex(nextSlideIndex)}
        >
          <BsChevronLeft />
        </button>
        <div className="products-container">
          {topRated.map((product, i) => {
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

            let position = "next-slide";
            if (i === activeSlideIndex) {
              position = "active-slide";
            }
            if (i === prevSlideIndex) {
              position = "prev-slide";
            }
            return (
              <article className={`${position} product`} key={id}>
                <img
                  className="img product-image"
                  src={thumbnail}
                  alt={title}
                />
                <Link className="product-title" to={`/products/${id}`}>
                  {title}
                </Link>
                <p className="product-price">${price}</p>
              </article>
            );
          })}
        </div>
        <button
          className="carousel-btn next"
          onClick={() => setActiveSlideIndex(prevSlideIndex)}
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

  position: relative;

  .products-container {
    width: 100%;
    height: 60vh;

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
  }

  .product-title {
    padding: 1rem;
    margin: 0;

    color: var(--secondary-200);
    font-size: 2rem;

    background-color: #203b51b0;
    border-radius: var(--borderRadius);

    position: absolute;
    top: 1rem;
    left: 1rem;
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
    opacity: 1;

    transition: var(--transition);

    a {
      display: inline-block;
    }
  }

  .prev-slide {
    display: block;
    opacity: 0;
    transform: translate(100%);
  }
  .next-slide {
    display: block;
    opacity: 0;
    transform: translate(-100%);
  }

  .carousel-btn {
    display: block;
    width: 20%;

    color: var(--secondary-100);
    font-size: 2.5rem;

    cursor: pointer;
    background-color: transparent;
    /* background-image: radial-gradient(var(--primary-500), 0.05%, transparent); */
    border: none;

    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 10;

    transition: var(--transition);
  }
  .carousel-btn.next {
    right: 0;
  }

  .carousel-btn:hover {
    background-color: #00000005;
  }

  @media screen and (min-width: 992px) {
    .carousel-btn {
      width: 10%;
      position: static;
    }

    .product-price {
      font-size: 3rem;
    }
  }
`;

export default Carousel;
