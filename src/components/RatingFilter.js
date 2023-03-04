import { useState } from "react";
import styled from "styled-components";
import { BsStarFill } from "react-icons/bs";

import { useFilterContext } from "../context/filterContext";

const RatingFilter = () => {
  const { filters, updateFilters } = useFilterContext();
  const [hoverRating, setHoverRating] = useState(0);

  const stars = Array.from({ length: 5 }, (_, i) => {
    const rating = i + 1;

    const starBrightness = `${
      rating <= hoverRating
        ? "star--light"
        : rating <= filters.rating
        ? "star--medium"
        : "star--dark"
    }`;

    const title = `${
      rating === 1
        ? "any rating"
        : rating === 5
        ? "5 stars only"
        : `${rating}.0 and up`
    }`;

    return (
      <button
        onMouseOver={(e) =>
          setHoverRating(Number(e.currentTarget.dataset.rating))
        }
        onClick={updateFilters}
        name={"rating"}
        value={i + 1}
        className={`star ${starBrightness}`}
        title={title}
        key={i}
        type="button"
        data-rating={rating}
      >
        <BsStarFill />
      </button>
    );
  });

  return (
    <StyledStars onMouseLeave={() => setHoverRating(0)}>{stars}</StyledStars>
  );
};

const StyledStars = styled.div`
  .star {
    display: inline-block;
    padding: 0.1rem;

    font-size: 2rem;

    background: transparent;
    border: none;
    cursor: pointer;

    transition: var(--transition);
  }
  .star--medium {
    color: var(--secondary-500);
  }
  .star--dark {
    color: var(--secondary-800);
  }
  .star--light {
    color: var(--secondary-300);
  }

  @media (min-width: 768px) {
    .star {
      font-size: 1.9rem;
    }
  }
`;
export default RatingFilter;
