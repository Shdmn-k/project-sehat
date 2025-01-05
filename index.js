// Modal Script
const loginSignupBtn = document.getElementById("login-signup-btn");
const modal = document.getElementById("login-signup-modal");
const closeModal = document.getElementById("close-modal-btn");

loginSignupBtn.addEventListener("click", () => {
  modal.style.display = "block";  // Show the modal when login/signup is clicked
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";  // Close the modal when 'X' is clicked
});

// Close modal if clicked outside of it
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});



document.querySelectorAll('.add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    const productCard = button.parentElement;
    const name = productCard.querySelector('h3').innerText.trim();
    const price = productCard.querySelector('.price').innerText.trim();

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name, price });

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} has been added to your cart!`);
  });
});


// function handleCart() {
//   const cart = JSON.parse(localStorage.getItem('cart')) || [];
//   const cartCount = document.getElementById('cart-count');

//   // Update cart count on page load
//   cartCount.innerText = cart.length;

//   document.querySelectorAll('.add-to-cart').forEach((button) => {
//     button.addEventListener('click', () => {
//       const productCard = button.parentElement;
//       const name = productCard.querySelector('h3').innerText;
//       const price = productCard.querySelector('p').innerText;

//       // Add product to cart
//       cart.push({ name, price });
//       localStorage.setItem('cart', JSON.stringify(cart));

//       // Update cart count
//       cartCount.innerText = cart.length;
//       alert(`${name} added to cart!`);
//     });
//   });
// }

// // Initialize  functionalities

// handleCart();