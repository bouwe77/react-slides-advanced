import React, { createContext, useState } from "react";

const ShoppingCartContext = createContext();

function ShoppingCartProvider(props) {
  const [products, setProducts] = useState([]);

  function addToShoppingCart(product) {
    setProducts([...products, product]);
  }

  const numberOfProducts = products.length;

  return (
    <ShoppingCartContext.Provider
      value={{ products, numberOfProducts, addToShoppingCart }}
      {...props}
    />
  );
}

function useShoppingCart() {
  const context = React.useContext(ShoppingCartContext);
  if (context === undefined) {
    throw new Error("useShoppingCart must be used within a ShoppingCartProvider");
  }
  return context;
}

export { ShoppingCartProvider, useShoppingCart };

// <BlaProvider>
//   <App />
// </BlaProvider>,
