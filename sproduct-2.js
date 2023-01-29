if (document.readyState == 'loading')
{
  document.addEventListener("DOMContentLoaded", ready)
} else
{
  ready();
}

function ready()
{

  // Detail swapping 

  document.getElementById("MainImg").src = localStorage.getItem("p_image");


  var detailsSection = document.getElementsByClassName("single-pro-details")[0];

  detailsSection.getElementsByTagName('h5')[0].innerHTML = localStorage.getItem("p_brand");
  detailsSection.getElementsByTagName('h4')[0].innerHTML = localStorage.getItem("p_title");
  detailsSection.getElementsByTagName('h2')[0].innerHTML = localStorage.getItem("p_price");

  detailsSection.getElementsByTagName('h6')[0].innerHTML = localStorage.getItem("p_path");

  detailsSection.getElementsByTagName('span')[0].innerHTML = localStorage.getItem("p_description");

  document.getElementsByClassName("small-img")[0].src = localStorage.getItem("p_srcSmallImg0");
  document.getElementsByClassName("small-img")[1].src = localStorage.getItem("p_srcSmallImg1");
  document.getElementsByClassName("small-img")[2].src = localStorage.getItem("p_srcSmallImg2");
  document.getElementsByClassName("small-img")[3].src = localStorage.getItem("p_srcSmallImg3");

  // qty to be >= 1  in ready()

  var detailsSection = document.getElementsByClassName("single-pro-details")[0];
  var itemQuantity = detailsSection.getElementsByTagName('input')[0];

  itemQuantity.addEventListener('change', quantityChanged1)
  // Add to cart

  var addToCartBtn = document.getElementById("add-to-cart");

  addToCartBtn.addEventListener('click', addToCartClickedTransfer);










}

// Transfer details to Cart page-
function addToCartClickedTransfer()
{
  var mainImgSrc = document.getElementById("MainImg").src;

  var detailsSection = document.getElementsByClassName("single-pro-details")[0];
  var itemTitle = detailsSection.getElementsByTagName('h4')[0].innerText;
  var itemPrice = detailsSection.getElementsByTagName('h2')[0].innerHTML;
  var itemQuantity = detailsSection.getElementsByTagName('input')[0].value;
   

  if(localStorage.getItem('cartData') == null)
  {
    localStorage.setItem('cartData','[]');
  }

  var existingCartData = JSON.parse(localStorage.getItem('cartData'));

  var newCartData = [mainImgSrc,itemTitle,itemPrice,itemQuantity];

  var count = 0;

  for(var i=0; i < existingCartData.length;i++)
  {    
    if(itemTitle == existingCartData[i][1])
    {
      count++;
    }
  }
  if(count == 0)
  {
    existingCartData.push(newCartData);
    alert("Item added Successfully to the Cart!");
  }
  else{
    alert("Item Already Exists in Cart!")
  }


  localStorage.setItem('cartData',JSON.stringify(existingCartData));








 
  


}



// qty to be >= 1 / function

function quantityChanged1(event)
{
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0)
  {
    input.value = 1;
  }

}

