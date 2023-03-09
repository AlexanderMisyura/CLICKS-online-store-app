import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { Loading, Error, ImageGallery } from "../components";
import { useProductsContext } from "../context/productsContext";

const url = "https://dummyjson.com/products/";

const SingleProduct = () => {
  const {
    singleProductLoading,
    singleProductError,
    fetchSingleProduct,
    singleProduct,
  } = useProductsContext();
  const { prodId } = useParams();

  useEffect(() => {
    fetchSingleProduct(`${url}${prodId}`);
  }, [prodId]);

  const {
    id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images,
  } = singleProduct;

  return (
    <StyledSingleProduct className="full-page">
      {singleProductLoading ? (
        <Loading />
      ) : singleProductError ? (
        <Error />
      ) : (
        <section className="section section-center">
          {images && <ImageGallery images={images} />}
          {Object.values(singleProduct)}
        </section>
      )}
    </StyledSingleProduct>
  );
};

const StyledSingleProduct = styled.main`
  display: grid;
`;

export default SingleProduct;
