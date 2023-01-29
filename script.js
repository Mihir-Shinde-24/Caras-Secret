//addToCart Slider

const bar = document.getElementById("bar");
const close = document.getElementById("close");
const navbar = document.getElementById("navbar");


//Open cart
bar.onclick = ()=>{
  navbar.classList.add("active");
}

//Close cart
close.onclick = ()=>{
  navbar.classList.remove("active");
}

// ------------------------------------------







