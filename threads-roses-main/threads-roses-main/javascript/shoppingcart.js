// Select all cart items
const cartItems = document.querySelectorAll(".cart-item");

cartItems.forEach(item => {
  const plusBtn = item.querySelector(".plus");
  const minusBtn = item.querySelector(".minus");
  const qtyNumber = item.querySelector(".qty-number");

  let quantity = parseInt(qtyNumber.textContent);

  plusBtn.addEventListener("click", () => {
    quantity++;
    qtyNumber.textContent = quantity;
  });

  minusBtn.addEventListener("click", () => {
    if (quantity > 1) {   // Prevent going below 1
      quantity--;
      qtyNumber.textContent = quantity;
    }
  });
});
