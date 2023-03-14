import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  RxTriangleRight,
  RxTriangleDown,
  RxCross1,
  RxPlus,
} from "react-icons/rx";
import { RiFilterOffLine } from "react-icons/ri";

import { useFilterContext } from "../context/filterContext";

const SelectFilter = ({ filterTitle, filterName, items }) => {
  const [isExpand, setIsExpand] = useState(false);
  const { filters, updateFilters } = useFilterContext();

  const toggleDropDown = () => {
    setIsExpand(!isExpand);
  };

  const addToFilter = (e) => {
    const newValue = e.currentTarget.dataset.filterValue;
    const filterList = [...filters[filterName], newValue].sort((a, b) =>
      a.localeCompare(b)
    );
    updateFilters({ [filterName]: filterList });
  };

  const removeFromFilter = (e) => {
    const removedValue = e.currentTarget.dataset.filterValue;
    const filterList = filters[filterName].filter(
      (item) => item !== removedValue
    );
    updateFilters({ [filterName]: filterList });
  };

  return (
    <StyledSelect>
      <div className="drop-heading">
        <div onClick={toggleDropDown} className="drop-heading__title">
          {isExpand ? (
            <RxTriangleDown className="drop-heading__title__icon" />
          ) : (
            <RxTriangleRight className="drop-heading__title__icon" />
          )}

          <h5>{filterTitle}</h5>
        </div>
        <RiFilterOffLine
          className="reset-icon"
          onClick={() => updateFilters({ [filterName]: [] })}
          title="reset filter"
        />
      </div>
      <div className="drop-list">
        <div
          className={
            isExpand
              ? "items items--filtered items--hidden"
              : "items items--filtered"
          }
        >
          {!isExpand &&
            filters[filterName].map((item) => (
              <div
                onClick={removeFromFilter}
                data-filter-value={item}
                className="item"
                key={item}
                title="remove from filter"
              >
                <span>{item}</span>
                <RxCross1 />
              </div>
            ))}
        </div>
        <div
          className={
            isExpand ? "items items--all" : "items items--all items--hidden"
          }
        >
          {isExpand &&
            items
              .filter((item) => !filters[filterName].includes(item))
              .map((item) => {
                return (
                  <div
                    onClick={addToFilter}
                    data-filter-value={item}
                    className="item"
                    key={item}
                    title="add to filter"
                  >
                    <span>{item}</span>
                    <RxPlus />
                  </div>
                );
              })}
        </div>
      </div>
    </StyledSelect>
  );
};

SelectFilter.propTypes = {
  filterTitle: PropTypes.string.isRequired,
  filterName: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const StyledSelect = styled.div`
  .drop-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    cursor: pointer;

    .reset-icon {
      justify-self: right;
      margin-right: 0.5rem;
      font-size: 1.5rem;
      color: var(--red-dark);
      cursor: pointer;
      transition: var(--transition);
    }

    .drop-heading__title {
      display: flex;
      flex-basis: 100%;
      align-items: center;
      h5 {
        flex-basis: 100%;
        margin-bottom: 0;
      }
    }
  }

  .drop-heading__title__icon {
    margin-right: 0.1rem;
  }

  .items {
    padding-left: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;

    transition: var(--transition);

    .item {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 0.5rem;
      align-items: center;
      padding: var(--element-padding);

      font-size: 1.25rem;

      background-color: var(--primary-100);
      border-radius: var(--borderRadius);

      text-transform: capitalize;

      transition: var(--transition);

      svg {
        color: var(--grey-400);
        transition: var(--transition);
      }

      &:hover {
        cursor: pointer;
        background-color: var(--primary-200);
        svg {
          color: var(--grey-50);
        }
      }
    }
  }
  .items--hidden {
    opacity: 0;
  }

  @media (min-width: 768px) {
    .drop-heading {
      &:hover > .reset-icon {
        display: block;
        &:hover {
          color: var(--red-dark);
        }
      }
      .reset-icon {
        display: none;
        margin: 0;

        color: var(--primary-800);
        font-size: 1rem;
      }
    }

    .drop-list {
      font-size: var(--fontSizeTextSmall);
    }

    .items {
      flex-direction: column;
      gap: 0;
      margin-left: 0.8rem;
      padding-left: 0;

      border-radius: var(--borderRadius);

      .item {
        max-width: 200px;
        grid-template-columns: 1fr max-content;
        padding: 0 0.3rem;

        font-size: inherit;

        background: none;

        svg {
          visibility: hidden;
          color: transparent;
        }
        &:hover {
          background-color: var(--primary-100);
          svg {
            visibility: visible;
            color: var(--textColor);
          }
        }
        svg {
        }
      }
    }

    .items--filtered {
      background-color: var(--primary-200);
      box-shadow: var(--shadow-inner);
      .item {
        svg {
          color: transparent;
        }
      }
    }
  }
`;

export default SelectFilter;
