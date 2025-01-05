

document.addEventListener('DOMContentLoaded', () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartList = document.getElementById('cart-list');
    const totalPriceElement = document.getElementById('total-price');
  
    let total = 0;
  
    if (cartItems.length === 0) {
      cartList.innerHTML = '<p>Your cart is empty.</p>';
    } else {
      cartItems.forEach((item, index) => {
        if (!item.name || !item.price) {
          console.error(`Invalid cart item at index ${index}:`, item);
          return;
        }
  
        const listItem = document.createElement('li');
  
        // Display product details
        const productDetails = document.createElement('span');
        productDetails.textContent = `${item.name} - ${item.price}`;
        productDetails.style.display = 'block';
  
        // Create "Proceed to Buy" button
        const proceedButton = document.createElement('button');
        proceedButton.textContent = 'Proceed to Buy';
        proceedButton.style.marginTop = '5px';
        proceedButton.addEventListener('click', () => {
          alert(`Proceeding to buy: ${item.name}`);
          // Example: Redirect to payment page
          // window.location.href = 'payment.html';
        });
  
        listItem.appendChild(productDetails);
        listItem.appendChild(proceedButton);
        cartList.appendChild(listItem);
  
        // Add to total price
        const price = parseInt(item.price.replace('₹', ''), 10);
        total += price;
      });
    }
  
    totalPriceElement.textContent = total;
  });
  

// document.addEventListener('DOMContentLoaded', () => {
//     const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
//     const cartList = document.getElementById('cart-list');
//     const totalPriceElement = document.getElementById('total-price');
  
//     let total = 0;
  
//     if (cartItems.length === 0) {
//       cartList.innerHTML = '<p>Your cart is empty.</p>';
//     } else {
//       cartItems.forEach((item, index) => {
//         const listItem = document.createElement('li');
        
//         // Create the product details
//         const productDetails = document.createElement('span');
//         productDetails.textContent = `${item.name} - ${item.price}`;
//         productDetails.style.display = 'block';
        
//         // Create the Proceed to Buy button
//         const proceedButton = document.createElement('button');
//         proceedButton.textContent = 'Proceed to Buy';
//         proceedButton.style.marginTop = '5px';
//         proceedButton.addEventListener('click', () => {
//           alert(`Proceeding to buy: ${item.name}`);
         
//         });
  
//         // Append details and button to the list item
//         listItem.appendChild(productDetails);
//         listItem.appendChild(proceedButton);
//         cartList.appendChild(listItem);
  
//         // Extract the price and add to total
//         const price = parseInt(item.price.replace('₹', ''), 10);
//         total += price;
//       });
//     }
  
//     totalPriceElement.textContent = total;
//   });
  












// document.addEventListener('DOMContentLoaded', () => {
//     const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
//     const cartList = document.getElementById('cart-list');
//     const totalPriceElement = document.getElementById('total-price');
  
//     let total = 0;
  
//     if (cartItems.length === 0) {
//       cartList.innerHTML = '<p>Your cart is empty.</p>';
//     } else {
//       cartItems.forEach((item) => {
//         const listItem = document.createElement('li');
//         listItem.textContent = `${item.name} - ${item.price}`;
//         cartList.appendChild(listItem);
  
//         // Extract the price and add it to the total
//         const price = parseInt(item.price.replace('₹', ''), 10);
//         total += price;
//       });
//     }
  
//     totalPriceElement.textContent = total;
  
//     document.getElementById('checkout-button').addEventListener('click', () => {
//       alert('Thank you for your purchase!');
//       localStorage.removeItem('cart'); // Clear the cart
//       window.location.href = 'index.html'; // Redirect to home
//     });
//   });
  