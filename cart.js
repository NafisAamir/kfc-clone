
// import  {footer} from "./footer.js"
//   let na = document.querySelector(".footer-div");
//   na.innerHTML = footer();

document.querySelector("#proceed").addEventListener("click", ()=>{
  location.href="address.html";
})
document.querySelector("#navbar-kfc-logo").addEventListener("click", ()=>{
  location.href="index.html";
})
document.getElementById("navbar-menu").addEventListener("click", function(){
  location.href = "menu.html"
})














// document.querySelector(".cart-item").addEventListener("click", ()=>{
//   location.href="details.html";
// })


let cartData = JSON.parse(localStorage.getItem("cart-data")) || [];


displayCartData(cartData);

function displayCartData(cartData) {
    let cartContainer = document.querySelector("#cart_body");

    cartContainer.innerHTML = "";
  
    cartData.forEach((elem, idx) => {
      let card = document.createElement("div");
      card.setAttribute("class", "cart-item");
      let itemImg = document.createElement("img");
      itemImg.src = elem.Image;
      itemImg.onclick = () => {
        addToDetails(elem);
      };
  
      let rightSideDiv = document.createElement("div");
      rightSideDiv.setAttribute("class", "right-side");
  
      let titleDiv = document.createElement("div");
      let title = document.createElement("h3");
      title.textContent = elem.title;
      let desc = document.createElement("p");
      desc.setAttribute("class", "item-des");
      desc.textContent = elem.description;
  
      titleDiv.append(title,desc);
  
      let priceDiv = document.createElement("div");
      priceDiv.setAttribute("class", "price-div");
  
      // if (elem.price == NaN) {
      //   elem.price = `₹370 .00`;
      // }

      // let price = elem.price;
      // price = Number(price.substring(1, price.length));
      // let currentQty = elem.qty;
      
// console.log(price);

      priceDiv.textContent = (elem.price.toFixed(2))*(elem.qty);
      
  
      let qtyDiv = document.createElement("div");
      qtyDiv.setAttribute("class", "qty-div");
  
      let spanInc = document.createElement("button");
      spanInc.innerHTML = "+";
      spanInc.setAttribute("class", "spanInc");

      spanInc.addEventListener("click", ()=>{
        incFun(elem,idx);
      })
  
      let spanQty = document.createElement("span");
      spanQty.innerHTML = elem.qty;
      spanQty.setAttribute("class", "qty-count");
  
      let spanDec = document.createElement("button");
      spanDec.setAttribute("class","spanDec");
      spanDec.innerHTML = "-";

      spanDec.addEventListener("click", ()=>{
        decFun(elem,idx);
      })
  
      // spanInc.onclick = function () {
      //   //change price;
      //   let price = elem.price;
      //   price = Number(price.substring(1, price.length));
  
      //   let currentQty = elem.qty;
      //   spanQty.innerHTML = ++currentQty;
      //   currentQty = Number(currentQty);
  
      //   //change price total for particular Item_;
      //   //   totalCartAmount(price, "+");
      //   let pd1 = price * currentQty;
      //   priceDiv.textContent = "₹" + pd1.toFixed(2);
      //   qtyplus(elem);
      //   // totalCartAmount();
      //   changeAll();
      // };
  
      // spanDec.onclick = function () {
      //   //change price;
      //   let price = elem.price;
      //   price = Number(price.substring(1, price.length));
      //   let currentQty = elem.qty;
      //   if (currentQty > 1) {
      //     spanQty.innerHTML = --currentQty;
      //   }
      //   currentQty = Number(currentQty);
  
      //   //change price total for particular Item_;
      //   //   totalCartAmount(price, "-");
      //   let pd2 = price * currentQty;
      //   priceDiv.textContent = "₹" + pd2.toFixed(2);
      //   qtymin(elem);
      //   totalCartAmount();
      //   changeAll();
      // };
  
      qtyDiv.append(spanInc, spanQty, spanDec);
  
      let removeBtn = document.createElement("button");
      removeBtn.setAttribute("class", "remove-btn");
      removeBtn.textContent = `Remove`;
  
      removeBtn.onclick = function () {
        location.reload();
        removeItem(idx);
      };
  
      rightSideDiv.append(titleDiv, priceDiv, qtyDiv, removeBtn);
      card.append(itemImg, rightSideDiv);
      cartContainer.append(card);
    });
  }
  // displayCartData(cartData);


// remove
  function removeItem(idx) {
    cartData.splice(idx, 1)
     location.reload();
    displayCartData(cartData);
  
    localStorage.setItem("cart-data", JSON.stringify(cartData));
     

     totalFun(cartData);

    document.getElementById("item-count-num").textContent = cartData.length;
   
  }

  // Quantity Increament functionality -






// let mycart = JSON.parse(localStorage("cart-data")) || [];
  
function incFun(ele, i) {
  let q = cartData[i].qty;
  // let pri= cartData[i].price;
  // console.log(price);
  // pri = Number(pri.substring(1, pri.length));
  // console.log(pri);
 q++;
 cartData[i].qty = q;
//  cartData[i].price= pri*q;
//  console.log(price);
  localStorage.setItem("cart-data", JSON.stringify(cartData));
  displayCartData(cartData)
  totalFun(cartData);
  // disc_gst();
 
}


// Quantity Decreament functionality -
function decFun(ele,i) {

  let q = cartData[i].qty;
  // let price= cartData[i].price;
  // price = Number(price.substring(1, price.length));
  // if(q!=1){
    q--;
  // }
  cartData[i].qty = q;
  // cartData[i].price= price*q;
  localStorage.setItem("cart-data", JSON.stringify(cartData));
  displayCartData(cartData)
  totalFun(cartData);
  // disc_gst();
}

// total
let dis =0;
totalFun(cartData);

function totalFun(cartData){
let t = cartData.reduce((ac,elm)=>{

  return ac+Number((elm.price)*(elm.qty))
},0);
t= t.toFixed(2);
console.log(t);
document.getElementById("Total-div-total").textContent =t;
dis = t;

 let gst_p = dis*(12/100);
  let finalPrice = parseInt(gst_p ) + parseInt(dis) ;
  document.getElementById("Total-div-subtotal").textContent = finalPrice;
// nav-price
document.getElementById("navbar-price").textContent = t;
}

console.log(dis);

// length
let len = cartData.length;
document.getElementById("item-count-num").textContent = len;

// nav-count
document.getElementById("navbar-cart-bucket1").textContent =len;

// gst
// console.log(dis)
// disc_gst();

// function disc_gst(){
 
//   console.log(discounted_p);
  // document.getElementById("Total-div-subtotal").textContent = finalPrice;

// }


// nav- price









// let cartData = JSON.parse(localStorage.getItem("cart-data")) || [];


// displayCartData(cartData);

// function displayCartData(cartData) {
//     let cartContainer = document.querySelector("#cart_body");

//     cartContainer.innerHTML = "";
  
//     cartData.forEach((elem, idx) => {
//       let card = document.createElement("div");
//       card.setAttribute("class", "cart-item");
//       let itemImg = document.createElement("img");
//       itemImg.src = elem.Image;
//       itemImg.onclick = () => {
//         addToDetails(elem);
//       };
  
//       let rightSideDiv = document.createElement("div");
//       rightSideDiv.setAttribute("class", "right-side");
  
//       let titleDiv = document.createElement("div");
//       let title = document.createElement("h3");
//       title.textContent = elem.title;
//       let desc = document.createElement("p");
//       desc.setAttribute("class", "item-des");
//       desc.textContent = elem.description;
  
//       titleDiv.append(title,desc);
  
//       let priceDiv = document.createElement("div");
//       priceDiv.setAttribute("class", "price-div");
  
//       // if (elem.price == NaN) {
//       //   elem.price = `₹370 .00`;
//       // }

//       // let price = elem.price;
//       // price = Number(price.substring(1, price.length));
//       // let currentQty = elem.qty;
      
// // console.log(price);

//       priceDiv.textContent = (elem.price)*(elem.qty);
  
//       let qtyDiv = document.createElement("div");
//       qtyDiv.setAttribute("class", "qty-div");
  
//       let spanInc = document.createElement("button");
//       spanInc.innerHTML = "+";
//       spanInc.setAttribute("class", "spanInc");

//       spanInc.addEventListener("click", ()=>{
//         incFun(elem,idx);
//       })
  
//       let spanQty = document.createElement("span");
//       spanQty.innerHTML = elem.qty;
//       spanQty.setAttribute("class", "qty-count");
  
//       let spanDec = document.createElement("button");
//       spanDec.setAttribute("class","spanDec");
//       spanDec.innerHTML = "-";

//       spanDec.addEventListener("click", ()=>{
//         decFun(elem,idx);
//       })
  
//       // spanInc.onclick = function () {
//       //   //change price;
//       //   let price = elem.price;
//       //   price = Number(price.substring(1, price.length));
  
//       //   let currentQty = elem.qty;
//       //   spanQty.innerHTML = ++currentQty;
//       //   currentQty = Number(currentQty);
  
//       //   //change price total for particular Item_;
//       //   //   totalCartAmount(price, "+");
//       //   let pd1 = price * currentQty;
//       //   priceDiv.textContent = "₹" + pd1.toFixed(2);
//       //   qtyplus(elem);
//       //   // totalCartAmount();
//       //   changeAll();
//       // };
  
//       // spanDec.onclick = function () {
//       //   //change price;
//       //   let price = elem.price;
//       //   price = Number(price.substring(1, price.length));
//       //   let currentQty = elem.qty;
//       //   if (currentQty > 1) {
//       //     spanQty.innerHTML = --currentQty;
//       //   }
//       //   currentQty = Number(currentQty);
  
//       //   //change price total for particular Item_;
//       //   //   totalCartAmount(price, "-");
//       //   let pd2 = price * currentQty;
//       //   priceDiv.textContent = "₹" + pd2.toFixed(2);
//       //   qtymin(elem);
//       //   totalCartAmount();
//       //   changeAll();
//       // };
  
//       qtyDiv.append(spanInc, spanQty, spanDec);
  
//       let removeBtn = document.createElement("button");
//       removeBtn.setAttribute("class", "remove-btn");
//       removeBtn.textContent = `Remove`;
  
//       removeBtn.onclick = function () {
//         location.reload();
//         removeItem(idx);
//       };
  
//       rightSideDiv.append(titleDiv, priceDiv, qtyDiv, removeBtn);
//       card.append(itemImg, rightSideDiv);
//       cartContainer.append(card);
//     });
//   }
//   // displayCartData(cartData);


// // remove
//   function removeItem(idx) {
//     cartData.splice(idx, 1)
//      location.reload();
//     displayCartData(cartData);
  
//     localStorage.setItem("cart-data", JSON.stringify(cartData));
     

//      totalFun(cartData);

//     document.getElementById("item-count-num").textContent = cartData.length;
   
//   }

//   // Quantity Increament functionality -






// // let mycart = JSON.parse(localStorage("cart-data")) || [];
  
// function incFun(ele, i) {
//   let q = cartData[i].qty;
//   // let pri= cartData[i].price;
//   // console.log(price);
//   // pri = Number(pri.substring(1, pri.length));
//   // console.log(pri);
//  q++;
//  cartData[i].qty = q;
// //  cartData[i].price= pri*q;
// //  console.log(price);
//   localStorage.setItem("cart-data", JSON.stringify(cartData));
//   displayCartData(cartData)
//   totalFun(cartData);
//   // disc_gst();
 
// }


// // Quantity Decreament functionality -
// function decFun(ele,i) {

//   let q = cartData[i].qty;
//   // let price= cartData[i].price;
//   // price = Number(price.substring(1, price.length));
//   // if(q!=1){
//     q--;
//   // }
//   cartData[i].qty = q;
//   // cartData[i].price= price*q;
//   localStorage.setItem("cart-data", JSON.stringify(cartData));
//   displayCartData(cartData)
//   totalFun(cartData);
//   // disc_gst();
// }

// // total
// let dis =0;
// totalFun(cartData);

// function totalFun(cartData){
// let t = cartData.reduce((ac,elm)=>{

//   let priceWithoutSymbol = elm.price.replace("₹", "");
// let numericPrice = parseInt(priceWithoutSymbol);
// console.log(typeof (numericPrice))
// console.log( (elm.price))
// console.log(typeof (elm.qty))

//   return ac+Number((numericPrice)*(elm.qty))
// },0);
// t= t.toFixed(2);
// console.log(t);
// document.getElementById("Total-div-total").textContent =t;
// dis = t;

//  let gst_p = dis*(12/100);
//   let finalPrice = parseInt(gst_p ) + parseInt(dis) ;
//   document.getElementById("Total-div-subtotal").textContent = finalPrice;
// // nav-price
// document.getElementById("navbar-price").textContent = t;
// }

// console.log(dis);

// // length
// let len = cartData.length;
// document.getElementById("item-count-num").textContent = len;

// // nav-count
// document.getElementById("navbar-cart-bucket1").textContent =len;

// // gst
// // console.log(dis)
// // disc_gst();

// // function disc_gst(){
 
// //   console.log(discounted_p);
//   // document.getElementById("Total-div-subtotal").textContent = finalPrice;

// // }


// // nav- price

