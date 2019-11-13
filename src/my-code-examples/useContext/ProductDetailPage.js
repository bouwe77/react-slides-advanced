import React from "react";
import { useParams } from "react-router";
import { getProduct } from "../Routing/api";
import Product from "./Product";

export default () => {
  const { productId } = useParams();
  const product = getProduct(productId);

  return (
    <>
      <Product product={product} />
    </>
  );
};
