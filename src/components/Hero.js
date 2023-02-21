import styled from "styled-components";
import { Link } from "react-router-dom";

import img_1 from "../assets/hero-img-1.jpeg";
import img_2 from "../assets/hero-img-2.jpg";

const Hero = () => {
  return (
    <StyledHero className="section section-center">
      <article>
        <h1>
          Great Discounts
          <br />
          <span>on What You Love</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ex
          tempore odio pariatur et aliquid veritatis fugit explicabo? Ab, quas?
        </p>
        <Link className="btn hero-btn" to="/products">
          Go shopping
        </Link>
      </article>
      <article className="image-wrapper">
        <img
          className="img main-img"
          src={img_1}
          alt="small shopping cart on laptop"
        />
        <img
          className="img additional-img"
          src={img_2}
          alt="hand holding gift bags"
        />
      </article>
    </StyledHero>
  );
};

const StyledHero = styled.section`
  display: grid;
  place-items: center;
  min-height: 70vh;

  h1 {
    background-image: linear-gradient(
      var(--secondary-900),
      var(--secondary-800)
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    letter-spacing: var(--letterSpacing);

    span {
      font-size: smaller;
      text-transform: lowercase;
    }
  }

  p {
    margin-bottom: 2.5rem;

    color: var(--grey-700);
    letter-spacing: var(--letterSpacing);
    line-height: 2.5rem;
  }

  .hero-btn {
    text-shadow: 2px 2px 2px var(--grey-700);
    background-image: radial-gradient(
      var(--secondary-800),
      var(--secondary-600)
    );
  }
  .hero-btn:hover {
    background-image: radial-gradient(
      var(--secondary-900),
      var(--secondary-700)
    );
  }

  .image-wrapper {
    display: none;
  }

  @media screen and (min-width: 992px) {
    height: calc(100vh - 4.5rem);
    grid-template-columns: 1fr 1fr;
    gap: 7.5rem;

    h1 {
      margin-bottom: 1.75rem;
    }

    p {
      font-size: 1.25rem;
    }

    .hero-btn {
      padding: 0.75rem 1.5rem;
    }

    .image-wrapper {
      display: block;
      position: relative;

      &::before {
        content: "";
        width: 10%;
        height: 60%;

        background-color: var(--primary-600);
        border-radius: var(--borderRadius);

        position: absolute;
        bottom: 0;
        left: -9%;
      }
    }

    .main-img {
      width: 100%;
      height: 600px;

      border-radius: var(--borderRadius);

      position: relative;
    }

    .additional-img {
      width: 275px;
      border-radius: var(--borderRadius);

      position: absolute;
      bottom: -5%;
      left: 0;

      transform: translate(-30%);
    }
  }
`;

export default Hero;
