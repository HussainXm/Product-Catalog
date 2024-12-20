// Dummy product data
let products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "$99",
      description: "High-quality sound with noise cancellation."
    },
    {
      id: 2,
      name: "Smartwatch",
      price: "$149",
      description: "Track your daily activities and fitness goals."
    },
    {
      id: 3,
      name: "Gaming Mouse",
      price: "$49",
      description: "Ergonomic design with precision tracking."
    }
  ];
  
  // Function to render product cards
  function renderProducts() {
    const productContainer = document.getElementById("product-container");
    productContainer.innerHTML = ""; // Clear existing content
  
    if (products.length === 0) {
      const noProductsMessage = document.createElement("h2");
      noProductsMessage.textContent = "No products to show";
      noProductsMessage.style.textAlign = "center";
      productContainer.appendChild(noProductsMessage);
      return;
    }
  
    products.forEach((product) => {
      // Create card elements
      const card = document.createElement("div");
      card.className = "product-card";
  
      const title = document.createElement("h3");
      title.textContent = product.name;
  
      const price = document.createElement("h4");
      price.textContent = product.price;
  
      const description = document.createElement("p");
      description.textContent = product.description;
  
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.className = "delete-button";
  
      // Add click event to delete button
      deleteButton.addEventListener("click", () => {
        deleteProduct(product.id);
      });
  
      // Append elements to card
      card.appendChild(title);
      card.appendChild(price);
      card.appendChild(description);
      card.appendChild(deleteButton);
  
      // Append card to container
      productContainer.appendChild(card);
    });
  }
  
  // Function to delete a product
  function deleteProduct(productId) {
    products = products.filter((product) => product.id !== productId);
    renderProducts();
  }
  
  // Add heading and render products
  const appContainer = document.getElementById("app");
  
  const heading = document.createElement("h1");
  heading.textContent = "Product Catalog";
  heading.style.textAlign = "center";
  
  appContainer.insertBefore(heading, document.getElementById("product-container"));
  
  // Initial render
  renderProducts();
  