import styled from "styled-components";

import Loading from "./Loading";
import Error from "./Error";
import Carousel from "./Carousel";
import { useProductsContext } from "../context/productsContext";

const TopRated = () => {
  const { productsLoading, productsError } = useProductsContext();

  if (productsLoading) {
    return <Loading />;
  }
  if (productsError) {
    return <Error />;
  }

  return (
    <StyledTopRated className="section">
      <h3 className="title">Top rated products</h3>
      <div className="title-underline"></div>
      <Carousel />
    </StyledTopRated>
  );
};

const StyledTopRated = styled.section`
  background-color: var(--grey-400);
`;

export default TopRated;
