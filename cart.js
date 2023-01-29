if (document.readyState == 'loading')
{
  document.addEventListener("DOMContentLoaded", ready)
} else
{
  ready();
}

function ready()
{
  // remove cart item - accessing buttons
  var removeCartItemsBtn = document.getElementsByClassName("fa-times-circle");

  for (var i = 0; i < removeCartItemsBtn.length; i++)
  {
    var button = removeCartItemsBtn[i];
    button.addEventListener('click', removeCartItem);
  }
  // Quantity change - accesing qty inputs
  
  var quantityInputs = document.getElementsByClassName("cart-quantity-input");
  
  for (var i = 0; i < quantityInputs.length; i++)
  {
    var input = quantityInputs[i];   
    input.addEventListener('change',quantityChanged);
    input.addEventListener('change',updateSubtotal);
  }
  
  
}


// update subtotal - function

function updateSubtotal(event)
{
  var input = event.target;

  var curCartRow = input.parentElement.parentElement;

  var curPriceElement = curCartRow.getElementsByClassName("cart-price")[0];
  var curPrice = parseFloat(curPriceElement.innerText.replace("₹", "").trim());

  var curQuantity = input.value;

  var subtotal = curQuantity * curPrice;

  curCartRow.getElementsByClassName("cart-item-subtotal")[0].innerText = "₹ " + subtotal;

  updateCartTotal();


  

}


// Quantity change - function

function quantityChanged(event)
{
  var input = event.target;
  if(isNaN(input.value) || input.value <=0)
  {
    input.value = 1;
  }
  updateCartTotal();
 
}

// remove cart item - function
function removeCartItem(event)
{
  var buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();
}

// update cart total - function
function updateCartTotal()
{
  var cartItemContainer = document.getElementsByClassName("cart-items")[0];

  var cartRows = cartItemContainer.getElementsByClassName("cart-row");
  var total = 0;

  for (var i = 0; i < cartRows.length; i++)
  {
    var cartRow = cartRows[i];
    var subtotalElement = cartRow.getElementsByClassName("cart-item-subtotal")[0];    

    var subtotal = parseFloat(subtotalElement.innerText.replace("₹", "").trim());    

    var total = total + subtotal;

  }
  total = Math.round(total*100) / 100;

  document.getElementsByClassName("cart-subtotal")[0].innerText = "₹ " + total;
  document.getElementsByClassName("cart-total")[0].innerText = "₹ " + total;

}

