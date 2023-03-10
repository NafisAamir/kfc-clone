

var loader;

function loadNow(opacity) {
  if (opacity <= 0) {
    displayContent();
  } else {
    loader.style.opacity = opacity;
    window.setTimeout(function () {
      loadNow(opacity - 0.05);
    }, 100);
  }
}

function displayContent() {
  loader.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  loader = document.getElementById("loader");
  loadNow(1);
});

//navbar and footer import

import { navbar } from "./navbar.js";
document.querySelector(".navbar").innerHTML = navbar();

import { footer } from "./footer.js";
document.querySelector(".footer-div").innerHTML = footer();

// navbar linking
document.querySelector("#navbar-kfc-logo").onclick = () => {
  location.href = "./index.html";
};
document.querySelector("#navbar-menu").onclick = () => {
  location.href = "menu.html";
};
// document.querySelector("#navbar-deals").onclick = () => {
//   location.href = "./pages/deals.html";
// };
// document.querySelector("#navbar-about").onclick = () => {
//   location.href = "./pages/about.html";
// };
document.querySelector("#navbar-man-icon").onclick = () => {
  location.href = "login.html";
};
document.querySelector("#navbar-account").onclick = () => {
  location.href = "login.html";
};
document.querySelector("#navbar-cart-bucket").onclick = () => {
  location.href = "cart.html";
};
document.querySelector(".cart-count").onclick = () => {
  location.href = "cart.html";
};

// Image Slider

// var img = document.querySelector(".img");

// var slides2 = [
//   "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/YAYZINGER.jpg?ver=25.86",
//   "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/YAYPOP.jpg?ver=25.86",
//   "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/YAYCHKN.jpg?ver=25.86",
//   "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/YAYSTRIPS.jpg?ver=25.86",
//   "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/YAYSTRIPS.jpg?ver=25.86",
// ];

// var slides2 = [
//   {
//     img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT208.jpg?ver=25.08",
//     title: "EXCLUSIVE DEAL",
//     text: "Free Chicken",
//   },
//   {
//     img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT86.jpg?ver=25.08",
//     title: "CHICKEN BUCKETS",
//     text: "Free PopCorn",
//   },
//   {
//     img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT200.jpg?ver=25.08",
//     title: "NEW LAUNCH",
//     text: "1 Pc Chicken",
//   },
//   {
//     img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT190.jpg?ver=25.08",
//     title: "BIRIYANI BUCKETS",
//     text: "3 Pc strips",
//   },
//   {
//     img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT158.jpg?ver=25.08",
//     title: "BOX MEAL",
//     text: "Veg Zinger",
//   },
//   {
//     img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT99.jpg?ver=25.08",
//     title: "BURGERS",
//     text: "French Fries"
//   },
//   {
//     img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT89.jpg?ver=25.08",
//     title: "SNACKS",
//     text: "2 Pc 99",
//   },
//   {
//     img: "https://online.kfc.co.in/static/media/finger_lickin.fc21c805.svg",
//     title: "View All Menu →",
//     text: "Free Chicken",
//   },
// ];


// var Start = 0;

// function slider() {
//   if (Start < slides.length) {
//     Start = Start + 1;
//   } else {
//     Start = 1;
//   }
//   img.innerHTML = "<img src=" + slides[Start - 1] + ">";
// }
// setInterval(slider, 1500);

// Categories Section

var catgData = [
  {
    img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT208.jpg?ver=25.08",
    title: "EXCLUSIVE DEAL",
  },
  {
    img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT86.jpg?ver=25.08",
    title: "CHICKEN BUCKETS",
  },
  {
    img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT200.jpg?ver=25.08",
    title: "NEW LAUNCH",
  },
  {
    img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT190.jpg?ver=25.08",
    title: "BIRIYANI BUCKETS",
  },
  {
    img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT158.jpg?ver=25.08",
    title: "BOX MEAL",
  },
  {
    img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT99.jpg?ver=25.08",
    title: "BURGERS",
  },
  {
    img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT89.jpg?ver=25.08",
    title: "SNACKS",
  },
  {
    img: "https://online.kfc.co.in/static/media/finger_lickin.fc21c805.svg",
    title: "View All Menu →",
  },
];

displayCatg();
function displayCatg() {
  var catg = document.querySelector(".disp-catg");
  catgData.map((ele) => {
    let div = document.createElement("div");
    div.onclick = function () {
      location.href = "menu.html";
    };
    let img = document.createElement("img");
    img.src = ele.img;
    let h3 = document.createElement("h3");
    h3.textContent = ele.title;
    div.append(img, h3);
    catg.append(div);
  });
}
//  function displaycarousel(){
//   let carouselcontainer=document.querySelector("#carouselnew");
//   slides2.map((elem)=>{
//     let card=document.createElement("div");
//     let img=document.createElement("img");
//     img.src=elem.img;
//     let h3=document.createElement("h3");
//     h3.textContent=elem.title;
//     let text=document.createElement("p");
//     text.textContent=elem.text;
//     let innerdiv=document.createElement("div");
//     let detail=document.createElement("a");
//     detail.textContent="View Details";
//     let btn=document.createElement("button");
    
//   })

// }
// delivery options
let deliveryContainer = document.querySelector(".delivery-options-container");

let buyBtn = document.querySelector(".start-order-btn");
buyBtn.onclick = function () {
  deliveryContainer.classList.add("display-block");
};

let closeDivBtn = document.querySelector(".close-delivery-btn");
closeDivBtn.onclick = function () {
  deliveryContainer.classList.remove("display-block");
};

let qucikPickBtn = document.querySelector(".quick-pick-btn");
qucikPickBtn.onclick = function () {
  window.location.href = "./address.html";
};
let deliveryBtn = document.querySelector(".delivery-btn");
deliveryBtn.onclick = function () {
  window.location.href = "./address.html";
};



// navbar cart
let cartData = JSON.parse(localStorage.getItem("cart-data")) || [];

//cart total
function totalCartAmount() {
  let cartTotalArea = document.querySelector("#navbar-price");
  let totalCart;
  totalCart = cartData.reduce((acc, curr) => {
    let price = Number(curr.price.substring(1, curr.price.length));
    return (acc += price);
  }, 0);

  totalCart = totalCart.toFixed(2);

  cartTotalArea.innerHTML = "₹" + totalCart;
}

totalCartAmount();

setTimeout(cartCount,3000)
function cartCount() {
    let cartCount = document.querySelector(".cart-count");
    cartCount.innerHTML = cartData.length;
}

// redirection to profile page
let navAccount = document.querySelector(".navbar-account");
// navAccount.onclick = function () {
//   // window.location.href = "../pages/"
// };

let cartBucket = document.querySelector("#navbar-cart-bucket");
cartBucket.onclick = function () {
  window.location.href = "cart.html";
};

// document.getElementById("navbar-cart-bucket").addEventListener("click", function(){
//   location.href = "cart.html"
// })



// link 
// let navbarAbout = document.querySelector("#navbar-about");
// navbarAbout.onclick = function (){
//   window.location.href = ""
// }