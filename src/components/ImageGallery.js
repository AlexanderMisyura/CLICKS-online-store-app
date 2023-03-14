import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ImageGallery = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <StyledGallery columns={images.length < 3 ? 3 : images.length}>
      <img className="img img--main" src={images[currentImage]} alt="" />
      <div className="images">
        {images.map((image, i) => {
          return (
            <img
              onClick={() => setCurrentImage(i)}
              className={
                i === currentImage
                  ? "img img--gallery img--active"
                  : "img img--gallery"
              }
              src={image}
              alt=""
              key={i}
            />
          );
        })}
      </div>
    </StyledGallery>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const StyledGallery = styled.div`
  display: grid;
  gap: 0.3rem;
  align-content: center;

  .img--main {
    height: 250px;
    border-radius: var(--borderRadius);
  }

  .images {
    display: grid;
    gap: 0.3rem;
    grid-template-columns: repeat(${(props) => props.columns}, 1fr);

    .img--gallery {
      background-clip: border-box;
      height: calc(50px * (5 / ${(props) => props.columns}));
      border-radius: var(--borderRadius);
      cursor: pointer;
    }

    .img--gallery.img--active {
      border: 2px solid var(--primary-500);
      opacity: 0.5;
    }
  }

  @media (min-width: 400px) {
    gap: 0.5rem;
    .img--main {
      height: 300px;
    }
    .images {
      gap: 0.5rem;
      .img--gallery {
        height: calc(70px * (5 / ${(props) => props.columns}));
      }
    }
  }

  @media (min-width: 500px) {
    gap: 1rem;
    .img--main {
      height: 400px;
    }
    .images {
      gap: 1rem;
      .img--gallery {
        height: calc(100px * (5 / ${(props) => props.columns}));
      }
    }
  }

  @media (min-width: 600px) {
    gap: 1rem;
    .img--main {
      height: 500px;
    }
  }

  @media (min-width: 798px) {
    .img--main {
      height: 600px;
    }
  }

  @media (min-width: 992px) {
    .img--main {
      height: 450px;
    }
    .images {
      .img--gallery {
        height: calc(80px * (5 / ${(props) => props.columns}));
      }
    }
  }
`;

export default ImageGallery;
