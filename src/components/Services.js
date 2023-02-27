import styled from "styled-components";
import { BsTruck, BsPercent, BsHeadset } from "react-icons/bs";

const Services = () => {
  return (
    <StyledServices className="section">
      <article className="section-center services-header">
        <h3>Our services</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis enim
          rerum, voluptatum iusto totam sequi molestias fuga voluptatem!
        </p>
      </article>
      <section className="section-center services">
        <article className="single-service">
          <div className="single-service-header">
            <BsPercent />
            <h4>
              always
              <br />
              discounts
            </h4>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            excepturi cum qui aperiam dolores fuga.
          </p>
        </article>
        <article className="single-service">
          <div className="single-service-header">
            <BsTruck />
            <h4>
              fast
              <br />
              shipping
            </h4>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eaque
            voluptas, ab repellat totam blanditiis!
          </p>
        </article>
        <article className="single-service">
          <div className="single-service-header">
            <BsHeadset />
            <h4>
              24/7
              <br />
              support
            </h4>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi,
            sapiente natus? Magni quia doloremque ut?
          </p>
        </article>
      </section>
    </StyledServices>
  );
};

const StyledServices = styled.section`
  background-color: #00000005;

  .services-header {
    display: grid;
    place-items: center;

    letter-spacing: var(--letterSpacing);
    color: transparent;

    background-image: linear-gradient(
      var(--secondary-900),
      var(--secondary-800)
    );
    -webkit-background-clip: text;
    background-clip: text;

    p {
      margin: 0;
      font-size: 1.25rem;
    }
  }

  .services {
    display: grid;
    gap: 2.1rem;
    align-items: stretch;
    justify-items: center;
    margin: 4rem auto;
  }

  .single-service {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    max-width: 45em;
    padding: 2rem 1.5rem;

    background-color: var(--secondary-200);
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-s);

    p {
      margin: 0;
      text-align: center;

      color: var(--grey-900);
      letter-spacing: var(--letterSpacing);
    }
  }
  .single-service-header {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: fit-content;
    padding: 0.75rem 1.5rem;

    color: var(--grey-900);

    border-radius: var(--borderRadius);
    background-color: var(--secondary-400);

    h4 {
      display: inline-block;
      margin: 0rem;
      /* font-size: 1.25rem; */
    }
    svg {
      padding: 1rem;

      font-size: 4rem;

      background-color: var(--secondary-100);
      border: 1px solid var(--secondary-500);
      border-radius: 50%;
    }
  }

  @media (min-width: 335px) {
    .single-service-header {
      flex-direction: row;
    }
  }

  @media (min-width: 992px) {
    .services-header {
      display: grid;
      grid-template-columns: 1fr 2fr;
      h3 {
        margin: 0;
      }
    }

    .services {
      grid-template-columns: 1fr 1fr 1fr;
    }

    .single-service-header {
      /* flex-direction: column; */
    }
  }
`;

export default Services;
