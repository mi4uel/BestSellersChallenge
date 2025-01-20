document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("productList");
  const showMoreBtn = document.getElementById("show-more");
  const productCards = productList.querySelectorAll(".product-card");

  // Add event listener to Show More button
  showMoreBtn.addEventListener("click", () => {
    productCards.forEach((card, index) => {
      if (index >= 4) {
        card.classList.toggle("hidden");
      }
    });
    showMoreBtn.textContent = showMoreBtn.textContent === "Show More" ? "Show Less" : "Show More";
  });
});
