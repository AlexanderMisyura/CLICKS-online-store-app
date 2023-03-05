import styled from "styled-components";
import {
  BsTrash,
  BsChevronDoubleDown,
  BsChevronDoubleUp,
} from "react-icons/bs";

import RatingFilter from "./RatingFilter";
import SelectFilter from "./SelectFilter";

import { useFilterContext } from "../context/filterContext";
import { useFunctionalContext } from "../context/functionalContext";
import { getFilterValues } from "../utils";

const Filters = () => {
  const {
    filters,
    allProducts,
    clearFilters,
    clearSpecificFilter,
    updateFilters,
    updateSort,
  } = useFilterContext();
  const { isFilterOpen, openFilter, closeFilter } = useFunctionalContext();
  const { allCategories, allBrands } = getFilterValues(allProducts);

  const { brand, category, search, minPriceValue, maxPriceValue } = filters;

  return (
    <StyledFilters>
      <div
        className={isFilterOpen ? "filters-wrapper" : "filters-wrapper hidden"}
      >
        <div
          className={
            isFilterOpen ? "filters scroll" : "filters filters--collapse scroll"
          }
        >
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-control">
              <input
                // onChange={}
                // value={}
                className="form-input"
                type="text"
                name="search"
                placeholder="search"
              />
            </div>

            <div className="form-control">
              <SelectFilter
                filterTitle="category"
                filter="category"
                items={allCategories}
              />
            </div>
            <div className="form-control">
              <SelectFilter
                filterTitle="brand"
                filter="brand"
                items={allBrands}
              />
            </div>

            <div className="form-control">
              <h5 className="title-item">
                brand
                <BsTrash
                  onClick={clearSpecificFilter}
                  data-filter-value="brand"
                />
              </h5>
              <select
                // onChange={}
                // value={}
                className="category"
                name="category"
              >
                {allBrands.map((brand) => {
                  return (
                    <option value={brand} key={brand}>
                      {brand}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="form-control">
              <h5>price</h5>
              <div className="price-control">
                <input
                  // onChange={}
                  // value={}
                  className="form-input"
                  type="text"
                  placeholder={minPriceValue}
                />{" "}
                <span>&#x2013;</span>
                <input
                  // onChange={}
                  // value={}
                  className="form-input"
                  type="text"
                  placeholder={maxPriceValue}
                />
              </div>
            </div>
            <div className="form-control">
              <h5>Rating</h5>
              <RatingFilter />
            </div>
            <div className="form-control"></div>
          </form>
          <button className="btn">clear</button>
        </div>
        <div>
          <button
            onClick={isFilterOpen ? closeFilter : openFilter}
            className={
              isFilterOpen
                ? "btn btn--filters btn--filters-collapse"
                : "btn btn--filters"
            }
          >
            {isFilterOpen ? <BsChevronDoubleUp /> : <BsChevronDoubleDown />}
            filters
          </button>
        </div>
      </div>
    </StyledFilters>
  );
};

const StyledFilters = styled.section`
  .filters-wrapper {
    width: 90vw;
    padding: 0.75rem 0;

    background-color: var(--grey-50);
    box-shadow: var(--shadow-m);
    border-radius: var(--borderRadius);

    position: fixed;
    top: calc(4.5rem + min(5vw, calc(2rem)));
    z-index: 20;
  }
  .filters-wrapper.hidden {
    padding: 0;
  }
  .filters {
    padding: 0.75rem 1rem;
    width: 100%;
    max-height: calc(
      100vh - calc(5.75rem + min(2.5vw, 1rem)) - 1rem - 31px - 0.75rem
    );

    background-color: var(--grey-50);
    border-radius: var(--borderRadius);
    box-shadow: none;
    overflow-y: auto;

    transition: var(--transition);

  }

  .filters--collapse {
    padding: 0;
    opacity: 0;
    height: 0;
  }

  .form-control {
    margin-bottom: 1.25rem;

    h5 {
      margin-bottom: 0.5rem;
    }
  }
  input,
  select {
    font-size: 1.25rem;
  }

  .price-control {
    display: grid;
    grid-template-columns: 1fr 30px 1fr;
    gap: 0;

    span {
      text-align: center;
    }

    .form-input {
      text-align: right;
    }
  }
  .btn--filters {
    display: flex;
    align-items: center;

    color: var(--primary-500);
    font-size: 1rem;

    background: linear-gradient(to top, var(--grey-50) 20%, #ffffff00);
    border-top-left-radius: 0;
    border-top-right-radius: 0;

    position: absolute;
    right: 2rem;

    svg {
      margin-right: 5px;
      font-size: 1.2rem;
    }
  }

  .btn--filters-collapse {
    background-color: var(--grey-50);
    background-image: none;
    transform: translateY(0.75rem);
  }

  @media (min-width: 768px) {
    .filters-wrapper {
      width: 100%;
      padding: 0;

      background: none;
      box-shadow: none;

      position: sticky;
      top: calc(5.75rem + min(2.5vw, 1rem));

      .filters {
        width: 100%;
        padding: 0 1rem 0 0;
        max-height: calc(100vh - calc(5.75rem + min(2.5vw, 1rem)) - 1rem);

        background: none;
        box-shadow: none;
        overflow-y: auto;
      }
    }
    .filters--collapse {
      opacity: 1;
      height: 100%;
    }

    input,
    select {
      font-size: 1rem;
    }
    .title-item {
      position: relative;

      svg {
        display: none;

        cursor: pointer;

        position: absolute;
        top: 3px;
        right: 0;

        transition: var(--transition);

        &:hover {
          color: var(--secondary-800);
        }
      }

      &:hover > svg {
        display: block;
      }
    }

    .btn--filters {
      display: none;
    }
  }
`;

export default Filters;
