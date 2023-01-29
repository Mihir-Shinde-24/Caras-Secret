if (document.readyState == 'loading')
{
  document.addEventListener("DOMContentLoaded", ready)
} else
{
  ready();
}

function ready()
{
  var proContainer = document.getElementsByClassName("pro-container");


  for (var i = 0; i < proContainer.length; i++)
  {
    var allImages = proContainer[i].getElementsByTagName("img");
    for (var i = 0; i < allImages.length; i++)
    {
      var curImage = allImages[i];
      curImage.addEventListener('click', openSingleProductPage);
    }

  }


  for (var i = 0; i < proContainer.length; i++)
  {
    var allCartButtons = proContainer[i].getElementsByClassName("fa-shopping-cart");
    for (var i = 0; i < allCartButtons.length; i++)
    {
      var cartButton = allCartButtons[i];
      cartButton.addEventListener('click', openSingleProductPage);
      
    }

  }




}

function openSingleProductPage(event)
{
  var cartButton = event.target;

  var productItem = cartButton.parentElement;

  var image = productItem.getElementsByTagName('img')[0].src;
  var brand = productItem.getElementsByTagName('span')[0].innerText;
  var title = productItem.getElementsByTagName('h5')[0].innerText;
  var price = productItem.getElementsByTagName('h4')[0].innerText;

  localStorage.setItem("p_image", image);
  localStorage.setItem("p_brand", brand);
  localStorage.setItem("p_title", title);
  localStorage.setItem("p_price", price);

  var path, description;
  var srcSmallImg0, srcSmallTitle0, srcSmallPrice0;
  var srcSmallImg1, srcSmallTitle1, srcSmallPrice1;
  var srcSmallImg2, srcSmallTitle2, srcSmallPrice2;
  var srcSmallImg3, srcSmallTitle3, srcSmallPrice3;

  if (title.match("T-Shirt") == "T-Shirt")
  {
    path = "Home / T-Shirts";
    description = "The Gildon Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double - needle collar, and available in a range of colors, it offers it all in the ultimate head turning package."

    srcSmallImg0 = "img/urbanic_img/tshirt/sunflower/t_purple_sunflower.jpg";
    srcSmallTitle0 = "Purple Pullover T-Shirt";
    srcSmallPrice0 = "₹ 499";

    srcSmallImg1 = "img/urbanic_img/tshirt/sunflower/t_red_sunflower.jpg";
    srcSmallTitle1 = "Maroon Pullover T-Shirt";
    srcSmallPrice1 = "₹ 559";

    srcSmallImg2 = "img/urbanic_img/tshirt/sunflower/t_black_sunflower.jpg";
    srcSmallTitle2 = "Black Pullover T-Shirt";
    srcSmallPrice2 = "₹ 399";

    srcSmallImg3 = "img/urbanic_img/tshirt/sunflower/t_white_sunflower.jpg";
    srcSmallTitle3 = "White Pullover T-Shirt";
    srcSmallPrice3 = "₹ 699";

  }
  else if (title.match("Dress") == "Dress")
  {
    path = "Home / Dress";
    description = "Powerful and unconventional — Urbanic is here to redefine fashion and its tactics. Whether you are the aspirational go-getter, the classy working professional, or the devil introvert, we are here to style you from top-to-bottom, as you take the lead of crafting your life, like a complete stunner. At Urbanic, we dare you to be your own style icon! "

    srcSmallImg0 = "img/urbanic_img/tshirt/floral/floral_dress_1.jpg";
    srcSmallTitle0 = "Floral Black Dress";
    srcSmallPrice0 = "₹ 799";

    srcSmallImg1 = "img/urbanic_img/tshirt/floral/floral_dress_3.jpg";
    srcSmallTitle1 = "Floral Blue Dress";
    srcSmallPrice1 = "₹ 1299";

    srcSmallImg2 = "img/urbanic_img/tshirt/floral/floral_dress_4.jpg";
    srcSmallTitle2 = "Floral Green Dress";
    srcSmallPrice2 = "₹ 689";

    srcSmallImg3 = "img/urbanic_img/tshirt/floral/floral_dress_2.jpg";
    srcSmallTitle3 = "Floral Pink Dress";
    srcSmallPrice3 = "₹ 829";

  }
  else if (title.match("Jeans") == "Jeans")
  {
    path = "Home / Jeans";
    description = "The fashion trend of 2018 is definitely these jeans for girls. With crop tops and bralettes so much in fashion, for bottom apparels, everyone's first choice is a high waisted. These look better as they fit your natural waistline and cover your belly fat which is always a plus! H&M is a fashion brand, offering the latest styles and inspiration for all — always. "

    srcSmallImg0 = "img/urbanic_img/jeans/jeans_brown_4.jpg";
    srcSmallTitle0 = "Brown Wide Leg Jeans";
    srcSmallPrice0 = "₹ 689";

    srcSmallImg1 = "img/urbanic_img/jeans/jeans_black_5.jpg";
    srcSmallTitle1 = "Black Regular-Fit Jeans";
    srcSmallPrice1 = "₹ 799";

    srcSmallImg2 = "img/urbanic_img/jeans/jeans_blue_2.jpg";
    srcSmallTitle2 = "Denim Blue Flared Jeans";
    srcSmallPrice2 = "₹ 739";

    srcSmallImg3 = "img/urbanic_img/jeans/jeans_white_3.jpg";
    srcSmallTitle3 = "White Straight-Line Jeans";
    srcSmallPrice3 = "₹ 819";

  }
  else if (title.match("Bag") == "Bag")
  {
    path = "Home / Handbags";
    description = "In Vogue This Mono Satchel From Lavie Has Been Designed With Our Monogram Has Spacious Compartments And An Adjustable Strap For Your Convenience Monogrammed Satchel From Lavie. The Design And Compartments Allow You To Carry All Your Essentials In An Organized Fashion. LAVIE- a high fashion lifestyle brand and make products for young generation woman who is multi faceted and successful, independent and vivacious. It imbibes the dynamism of colors, youth and spunk."

    srcSmallImg0 = "img/urbanic_img/handbags/bag_3.jpg";
    srcSmallTitle0 = "Choco-Brown Shoulder Bag";
    srcSmallPrice0 = "₹ 999";

    srcSmallImg1 = "img/urbanic_img/handbags/bag_4.jpg";
    srcSmallTitle1 = "SkyBlue Shoulder Bag";
    srcSmallPrice1 = "₹ 1899";

    srcSmallImg2 = "img/urbanic_img/handbags/bag_6.jpg";
    srcSmallTitle2 = "Red Shoulder Bag";
    srcSmallPrice2 = "₹ 699";

    srcSmallImg3 = "img/urbanic_img/handbags/bag_5.jpg";
    srcSmallTitle3 = "Metallic Shoulder Bag";
    srcSmallPrice3 = "₹ 999";

  }
  else if (title.match("Lipstick") == "Lipstick")
  {
    path = "Home / Lipstick";
    description = "Discover Maybelline New York's Color Sensational Creamy Matte Lipsticks in 35 comfortably matte shades! Infused with pure precious oils that are filled with moisture; our smoothest, creamiest, non-drying matte lipstick leaves the lips with a sensuous finish for that comfortable feel.Maybelline takes trends from the catwalk to the sidewalk, empowering women to make a statement, explore new looks, and flaunt their own creativity and individuality."

    srcSmallImg0 = "img/urbanic_img/lipstick/lipstick_3.jpg";
    srcSmallTitle0 = "Pink Cream Lipstick";
    srcSmallPrice0 = "₹ 599";

    srcSmallImg1 = "img/urbanic_img/lipstick/lipstick_1.jpg";
    srcSmallTitle1 = "Nude Cream Lipstick";
    srcSmallPrice1 = "₹ 799";

    srcSmallImg2 = "img/urbanic_img/lipstick/lipstick_4.jpg";
    srcSmallTitle2 = "Red Cream Lipstick";
    srcSmallPrice2 = "₹ 999";

    srcSmallImg3 = "img/urbanic_img/lipstick/lipstick_2.jpg";
    srcSmallTitle3 = "Purple Cream Lipstick";
    srcSmallPrice3 = "₹ 699";

  }
  else if (title.match("Heels") == "Heels")
  {
    path = "Home / Heels";
    description = "Marcloire.com is an online fashion store for taste-makers and trend-breakers all over the country. When it comes to online shopping looking for the latest women & men fashion apparels & footwear fashion trends, MarcLoire.com is the one-stop destination. A pair of open toe Block Heels, has regular styling, ankle loop detailPU upper Cushioned footbed, Textured and patterned outsole and has a block heel."

    srcSmallImg0 = "img/urbanic_img/heels/heels_3.jpg";
    srcSmallTitle0 = "Brown Kitten Heels";
    srcSmallPrice0 = "₹ 1299";

    srcSmallImg1 = "img/urbanic_img/heels/heels_2.jpg";
    srcSmallTitle1 = "Black Pencil Heels";
    srcSmallPrice1 = "₹ 899";

    srcSmallImg2 = "img/urbanic_img/heels/heels_1.jpg";
    srcSmallTitle2 = "Beige Block Heels";
    srcSmallPrice2 = "₹ 799";

    srcSmallImg3 = "img/urbanic_img/heels/heels_4.jpg";
    srcSmallTitle3 = "Metallic Kitten Heels";
    srcSmallPrice3 = "₹ 1999";

  }
  else
  {
    path = "Home / Product";
    description = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit tempora dolore animi! Cumque, reprehenderit nisi facilis inventore qui deleniti, ad est ipsum mollitia quos esse quam voluptates ratione, sapiente quaerat veritatis necessitatibus voluptatem quasi amet magnam. Velit vero nam id accusantium deserunt quibusdam impedit suscipit!"



  }
  localStorage.setItem("p_path", path);
  localStorage.setItem("p_description", description);

  localStorage.setItem("p_srcSmallImg0", srcSmallImg0);
  localStorage.setItem("p_srcSmallTitle0", srcSmallTitle0);
  localStorage.setItem("p_srcSmallPrice0", srcSmallPrice0);

  localStorage.setItem("p_srcSmallImg1", srcSmallImg1);
  localStorage.setItem("p_srcSmallTitle1", srcSmallTitle1);
  localStorage.setItem("p_srcSmallPrice1", srcSmallPrice1);

  localStorage.setItem("p_srcSmallImg2", srcSmallImg2);
  localStorage.setItem("p_srcSmallTitle2", srcSmallTitle2);
  localStorage.setItem("p_srcSmallPrice2", srcSmallPrice2);

  localStorage.setItem("p_srcSmallImg3", srcSmallImg3);
  localStorage.setItem("p_srcSmallTitle3", srcSmallTitle3);
  localStorage.setItem("p_srcSmallPrice3", srcSmallPrice3);


  window.location.href = 'sproduct-2.html';
}

function allBtnClickOnload()
{

  document.getElementById("allItemsBtn").click();
}