import { useState } from "react";
import styled from "styled-components";
import { TfiViewList, TfiLayoutGrid3 } from "react-icons/tfi";
import { RxTriangleRight, RxTriangleDown } from "react-icons/rx";

import { sortValues } from "../consts";
import { useFunctionalContext } from "../context/functionalContext";
import { useFilterContext } from "../context/filterContext";

const Sorting = () => {
  const [isExpand, setIsExpand] = useState(false);
  const { productsView, setViewList, setViewTiles } = useFunctionalContext();
  const { filteredProducts, sortValue, updateSort } = useFilterContext();

  const sortProducts = (e) => {
    const title = e.currentTarget.dataset.sortTitle;
    const value = e.currentTarget.dataset.sortValue;
    updateSort(value);
  };

  const sortTitle = sortValues.find((item) => item.value === sortValue).title;

  return (
    <StyledSorting>
      <div className="number-found">
        <span>{filteredProducts.length}</span>{" "}
        {filteredProducts.length === 1 ? "product" : "products"} found
      </div>
      <div className="btn-container">
        <button
          onClick={setViewTiles}
          className={productsView === "tiles" ? "btn-view-active" : undefined}
          type="button"
        >
          <TfiLayoutGrid3 />
        </button>
        <button
          onClick={setViewList}
          className={productsView === "list" ? "btn-view-active" : undefined}
          type="button"
        >
          <TfiViewList />
        </button>
      </div>
      <div
        onClick={() => setIsExpand(!isExpand)}
        onMouseLeave={() => setIsExpand(false)}
        className={isExpand ? "sort sort--expand" : "sort"}
      >
        <div className="sort__header">
          {isExpand ? <RxTriangleDown /> : <RxTriangleRight />}
          <span>{sortTitle}</span>
        </div>
        <div className="sort__content">
          {sortValues.map((item) => {
            const { id, title, value } = item;
            return (
              <div
                onClick={sortProducts}
                className={value === sortValue ? "current" : undefined}
                data-sort-title={title}
                data-sort-value={value}
                key={id}
              >
                {title}
              </div>
            );
          })}
        </div>
      </div>
    </StyledSorting>
  );
};

const StyledSorting = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & > div:not(div:last-child) {
    margin-bottom: 1rem;
  }

  .number-found {
    color: var(--grey-600);
    text-transform: capitalize;
  }

  .btn-container {
    display: flex;
    gap: 0.5rem;
    height: fit-content;
    button {
      display: flex;
      padding: 0.3rem;
      align-items: center;

      font-size: 1.25rem;

      border: transparent;
      border-radius: var(--borderRadius);
      cursor: pointer;

      &.btn-view-active {
        color: var(--primary-600);
        background-color: var(--primary-100);
      }
      &:not(.btn-view-active) {
        color: var(--primary-400);
        background-color: transparent;
      }

      &:not(.btn-view-active):hover {
        color: var(--primary-600);
        background-color: var(--primary-200);
      }
    }
  }

  .sort {
    position: relative;
    min-width: 160px;
    cursor: pointer;
    /* order: 2; */

    .sort__header {
      display: flex;
      padding: var(--element-padding);
      align-items: center;
      justify-content: center;

      svg {
        margin-right: 0.1rem;
      }
    }

    .sort__content {
      display: none;
      width: 100%;
      text-align: center;

      position: absolute;
      z-index: 17;

      div {
        border: 1px solid var(--grey-200);
        padding: var(--element-padding);
        border-radius: var(--borderRadius);
      }
    }
  }
  .sort--expand {
    box-shadow: var(--shadow-s);

    .sort__header {
      color: var(--grey-400);

      background-color: var(--primary-100);
      border-top-left-radius: var(--borderRadius);
      border-top-right-radius: var(--borderRadius);
    }
    .sort__content {
      display: block;

      background-color: var(--primary-100);
      border-bottom-left-radius: var(--borderRadius);
      border-bottom-right-radius: var(--borderRadius);
      box-shadow: var(--shadow-s);

      .current {
        color: var(--grey-400);
      }

      div:hover {
        background-color: var(--primary-200);
      }
    }
  }

  @media (min-width: 450px) {
    flex-direction: row;
    & > div:not(div:last-child) {
      margin-bottom: 0;
    }
    .btn-container {
      order: 2;
    }
  }
`;

export default Sorting;
