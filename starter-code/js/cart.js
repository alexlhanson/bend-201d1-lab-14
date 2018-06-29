/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
var tbody = document.getElementsByTagName('tbody')[0];
console.log(tbody);
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  cart = new Cart(cartItems);
  console.log(localStorage.getItem('cartItems'));
  
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  // tbody.removeChild('tr');
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  console.log(cart.items);
  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  for (var i = 0; i < cart.items.length; i++){
    // TODO: Create a TR
    var trEl = document.createElement('tr');
    // TODO: Create a TD for the delete link, quantity,  and the item
    var tdEl = document.createElement('td');
    
    //add delete button
    var buttonEl = document.createElement('button');
    buttonEl.textContent = ('Delete this item');
    tdEl.appendChild(buttonEl);
    trEl.appendChild(tdEl);

    //add quantity
    tdEl = document.createElement('td');
    tdEl.textContent = (cart.items[i].quantity);
    trEl.appendChild(tdEl);

    //add item
    tdEl = document.createElement('td');
    tdEl.textContent = (cart.items[i].product);
    trEl.appendChild(tdEl);

    // TODO: Add the TR to the TBODY and each of the TD's to the TR
    tbody.appendChild(trEl);
    console.log(tbody);
  }

}

function removeItemFromCart(event) {
  
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item

  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
