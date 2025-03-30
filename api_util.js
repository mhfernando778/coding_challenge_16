//Task 3 - Fetch Products with async/await //

import { fetchProductsThen } from "./api.js";

async function fetchProductsAsync() {
    try {
      const response = await fetch(BASE_URL);
      if (!response.ok) {
        throw new Error(`HTTP ERROR: ${response.status}`);
      }
      const products = await response.json();
      displayProducts(products);
    } catch (error) {
      handleError(error);
    }
  }



// Task 4 -