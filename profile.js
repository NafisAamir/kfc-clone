// import Navbar
import { navbar } from "navbar.js";
document.querySelector(".navbar").innerHTML = navbar();

import { footer } from "footer.js";
document.querySelector(".footer-div").innerHTML = footer();

let Order_Container = document.querySelector(".Order-container");


let sideArr = JSON.parse(localStorage.getItem("cart-data")) || [];

function display(arr) {
  arr.forEach((e) => {
    let struc = `
    <div class="inner-container">
    <img src=${e.Image} alt="error">
     <h3>${e.title}</h3>
     <h5>${e.veg}</h5>
     <p>${e.description}</p>
     <h4>${e.price}</h4>
    </div>`;

    Order_Container.innerHTML += struc;
  });
}

display(sideArr);

// .join("")

// var minute = 29;
// var second = 60;

// setInterval(function () {
//   if (minute == 0 && second == 1) {
//     document.querySelector(".counter").innerHTML = "00:00";
//   } else {
//     second--;
//     if (second == 0) {
//       minute--;
//       second = 60;
//       if (minute == 0) {
//         minute = minute;
//       }
//     }
//     document.querySelector(".counter").innerHTML = minute + ":" + second;
//   }
// }, 1000);

// PAGELINKING_
let kfcLogo = document.querySelector("#navbar-kfc-logo");
kfcLogo.onclick = function () {
  location.href = "../index.html";
};
document.querySelector("#navbar-menu").onclick = () => {
  location.href = "../pages/menu.html";
};
document.querySelector("#navbar-man-icon").onclick = () => {
  location.href = "../pages/login.html";
};
document.querySelector("#navbar-account").onclick = () => {
  location.href = "../pages/profile.html";
};
document.querySelector("#navbar-cart-bucket").onclick = () => {
  location.href = "../pages/cart.html";
};
