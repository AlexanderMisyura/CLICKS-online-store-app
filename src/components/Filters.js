import { useRef } from "react";
import styled from "styled-components";
import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";
import { RiFilterOffLine } from "react-icons/ri";

import RatingFilter from "./RatingFilter";
import SelectFilter from "./SelectFilter";

import { useFilterContext } from "../context/filterContext";
import { useFunctionalContext } from "../context/functionalContext";
import { getFilterValues, getSearchPlaceholder } from "../utils/utils";

const Filters = () => {
  const { filters, allProducts, clearFilters, updateFilters } =
    useFilterContext();
  const { isFilterOpen, openFilter, closeFilter } = useFunctionalContext();
  const { allCategories, allBrands } = getFilterValues(allProducts);

  const { search, minPrice, maxPrice, minPriceFilter, maxPriceFilter } =
    filters;

  const searchPlaceholder = useRef(getSearchPlaceholder())
  const searchElement = useRef(null);
  const minPriceElement = useRef(null);
  const maxPriceElement = useRef(null);

  const clearSearchFilter = () => {
    searchElement.current.value = "";
    updateFilters({ search: "" });
  };
  const clearPriceFilters = () => {
    minPriceElement.current.value = "";
    maxPriceElement.current.value = "";
    updateFilters({
      minPriceFilter: "",
      maxPriceFilter: "",
    });
  };
  const clearAllFilters = () => {
    searchElement.current.value = "";
    minPriceElement.current.value = "";
    maxPriceElement.current.value = "";
    clearFilters();
  };

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
              <div className="filter-heading">
                <h5>search</h5>
                <RiFilterOffLine
                  onClick={clearSearchFilter}
                  className="reset-icon"
                  title="reset filter"
                />
              </div>
              <input
                onChange={(e) => updateFilters({ search: e.target.value })}
                value={search}
                ref={searchElement}
                className="form-input"
                type="text"
                placeholder={searchPlaceholder.current}
              />
            </div>

            <div className="form-control">
              <SelectFilter
                filterTitle="category"
                filterName="category"
                items={allCategories}
              />
            </div>
            <div className="form-control">
              <SelectFilter
                filterTitle="brand"
                filterName="brand"
                items={allBrands}
              />
            </div>

            <div className="form-control">
              <div className="filter-heading">
                <h5>price</h5>
                <RiFilterOffLine
                  onClick={clearPriceFilters}
                  className="reset-icon"
                  title="reset filter"
                />
              </div>
              <div className="price-control">
                <input
                  onChange={(e) =>
                    updateFilters({ minPriceFilter: e.target.value })
                  }
                  value={minPriceFilter}
                  ref={minPriceElement}
                  className="form-input"
                  type="text"
                  placeholder={minPrice}
                />
                <span>&#x2013;</span>
                <input
                  onChange={(e) =>
                    updateFilters({ maxPriceFilter: e.target.value })
                  }
                  value={maxPriceFilter}
                  ref={maxPriceElement}
                  className="form-input"
                  type="text"
                  placeholder={maxPrice}
                />
              </div>
            </div>
            <div className="form-control">
              <div className="filter-heading">
                <h5>rating</h5>
                <RiFilterOffLine
                  onClick={() => updateFilters({ rating: 0 })}
                  className="reset-icon"
                  title="reset filter"
                />
              </div>
              <RatingFilter />
            </div>
          </form>
          <button onClick={clearAllFilters} className="btn">
            clear
          </button>
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
    width: 95vw;
    padding: 0.75rem 0;

    background-color: var(--grey-50);
    box-shadow: var(--shadow-m);
    border-radius: var(--borderRadius);

    position: fixed;
    top: calc(4.5rem + min(5vw, calc(2rem)));
    z-index: 17;
  }
  .filters-wrapper.hidden {
    padding: 0;
  }
  .filters {
    padding: 0.75rem 1rem;
    width: 100%;
    /* 100vh - navbar - top nav - bot nav - padding top filter-wrapper - padding bottom filter-wrapper*/
    /* - button bottom spacing - button paddings - button font-size*/
    max-height: calc(
      100vh - 4.5rem - calc(2.5vw, 1rem) - calc(2.5vw, 1rem) - 0.75rem - 0.75rem -
        1rem - calc(0.75rem + 0.75rem) - 1.5rem
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
      margin-bottom: 0;
    }
  }
  input {
    font-size: 1.25rem;
  }

  .filter-heading {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    h5 {
      flex-basis: 100%;
    }
    .reset-icon {
      margin-right: 0.5rem;

      font-size: 1.5rem;
      color: var(--red-dark);
      cursor: pointer;

      transition: var(--transition);
    }
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
    padding: 0.75rem 1.5rem;

    color: var(--primary-500);
    font-size: 1.5rem;

    background: linear-gradient(to top, var(--grey-50) 20%, #ffffff00);
    border-top-left-radius: 0;
    border-top-right-radius: 0;

    position: absolute;
    right: 2rem;

    svg {
      margin-right: 5px;
      font-size: 1.5rem;
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

    .filter-heading {
      h5 {
      }
      .reset-icon {
        display: none;
        margin-right: 0;

        color: var(--primary-800);
        font-size: 1rem;

        transition: var(--transition);
      }

      &:hover {
        .reset-icon {
          display: block;
          &:hover {
            color: var(--red-dark);
          }
        }
      }
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
