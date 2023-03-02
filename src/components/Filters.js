import styled from "styled-components";

import { useFilterContext } from "../context/filterContext";
import { useFunctionalContext } from "../context/functionalContext";
import { getFilterValues } from "../utils";

const Filters = () => {
  const { filters, allProducts } = useFilterContext();
  const { isFilterOpen, openFilter, closeFilter } = useFunctionalContext();
  const { allCategories, allBrands } = getFilterValues(allProducts);

  const { brand, category, search, minPrice, maxPrice } = filters;

  return (
    <StyledFilters>
      <div className="filters">
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
            <h5>category</h5>
            <select
              // onChange={}
              // value={}
              className="category"
              name="category"
            >
              {allCategories.map((category) => {
                return (
                  <option value={category} key={category}>
                    {category}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-control">
            <h5>brand</h5>
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
            min
            <input
              // onChange={}
              // value={}
              className="form-input price-input"
              type="number"
              min={0}
            />
            max
            <input
              // onChange={}
              // value={}
              className="form-input price-input"
              type="number"
              min={0}
              max={maxPrice}
            />
          </div>
          <div className="form-control"></div>
          <div className="form-control"></div>
        </form>
        <button className="btn">clear filters</button>
      </div>
    </StyledFilters>
  );
};

const StyledFilters = styled.section`
  .filters {
    position: sticky;
    top: calc(5.75rem + min(2.5vw, 1rem));
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
`;

export default Filters;
