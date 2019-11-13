const products = [
  { id: "1", name: "Product 1", description: "Lorem ipsum...", price: 10, sale: true },
  { id: "2", name: "Product 2", description: "Hello world...", price: 49, sale: false },
  { id: "3", name: "Product 3", description: "This is a product...", price: 99, sale: false },
  { id: "4", name: "Product 4", description: "This is a product...", price: 2, sale: true },
  { id: "5", name: "Product 5", description: "This is a product...", price: 89, sale: false },
  { id: "6", name: "Product 6", description: "This is a product...", price: 129, sale: true },
  { id: "7", name: "Product 7", description: "This is a product...", price: 299, sale: false },
  { id: "8", name: "Product 8", description: "This is a product...", price: 49, sale: true }
];

export function getProducts(category = null) {
  if (category === "sale") return products.filter(product => product.sale);
  return products;
}

export function getProduct(productId) {
  return products.find(product => product.id === productId);
}
