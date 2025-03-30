//Task 3 - Fetch Products with async/await //

import { fetchProductsThen } from "./api.js";

async function fetchProductsAsync() {
    try {
      const res = await fetch(BASE_URL);
      if (!response.ok) {
        throw new Error(`HTTP ERROR: ${response.status}`);
      }
      return await res.json();
      displayProducts(products);
    } catch (error) {
      handleError(error);
    }
  }



// Task 4 - Display the Product //

function displayProducts(products) {
    const container = document.getElementById('product-container');
    container.innerHTML = '';
    products.slice(0, 5).forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product');
      productCard.innerHTML = `
        <img src="${product.fields.image[0].url}" alt="${product.fields.name}" />
        <h2>${product.fields.name}</h2>
        <p>Price: $${product.fields.price}</p>
      `;
      container.appendChild(productCard);
    });
  }

  