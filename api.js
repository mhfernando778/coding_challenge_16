// Task 2 - Fetch Products with .then()//
const BASE_URL = 'https://www.course-api.com/javascript-store-products'

export function fetchProductsThen() {
    return fetch(BASE_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP ERROR: ${response.status}`);
        }
        return response.json();
      })
      .then(error => {
        console.error('Fetch Failed:',error.message);
        throw error;
      })
      .catch(error);
  };