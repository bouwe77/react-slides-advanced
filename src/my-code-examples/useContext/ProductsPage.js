import React from "react";
import Product, { useProducts } from "./Product";

export default () => {
  const products = useProducts();

  return (
    <>
      {products.map(product => (
        <Product product={product} />
      ))}
    </>
  );
};
