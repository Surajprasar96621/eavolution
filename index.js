function fetchproducts() {
  fetch(https://fakestoreapi.com/products)
  .then (Response => Response.json())
  .then (product => {
  const products = await response.json();
  allProducts = products;
  displayProducts(products);
  });
  
}