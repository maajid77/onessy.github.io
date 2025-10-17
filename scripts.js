// Placeholder for future JavaScript functions
console.log("ONESSY site loaded");

// Example: dynamic product loader (if using products.json)
fetch("products.json")
  .then(response => response.json())
  .then(products => {
    const container = document.getElementById("products-container");
    if (container) {
      products.forEach(item => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product-item");
        productDiv.innerHTML = `
          <img src="${item.image}" alt="${item.name}" />
          <h3>${item.name}</h3>
          <p>${item.price}</p>
          <button>Add to Cart</button>
        `;
        container.appendChild(productDiv);
      });
    }
  })
  .catch(err => console.log("No products.json or something went wrong:", err));
