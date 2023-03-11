
// import  {navbar} from "./navbar.js"
//   let na = document.querySelector(".navbar");
//   na.innerHTML = navbar();


// window.onload
// window.onload = () => {
//     clearAllItems();
//     // fetch_All_Data();
//   };
  
//   // GLOBAL localStorage_
//   function clearAllItems() {
//     let empty = [];
//     localStorage.setItem("all-data", JSON.stringify(empty));
//   }
//   function addAllItems(ele) {
//     let gd = JSON.parse(localStorage.getItem("all-data")) || [];
//     gd.push(ele);
//     localStorage.setItem("all-data", JSON.stringify(gd));
//   }









// window.onload
// window.onload = () => {
//     clearAllItems();
//     // fetch_All_Data();
//   };
  
//   // GLOBAL localStorage_
//   function clearAllItems() {
//     let empty = [];
//     localStorage.setItem("all-data", JSON.stringify(empty));
//   }
//   function addAllItems(ele) {
//     let gd = JSON.parse(localStorage.getItem("all-data")) || [];
//     gd.push(ele);
//     localStorage.setItem("all-data", JSON.stringify(gd));
//   }


document.getElementById("bucket-wrapper").addEventListener("click",()=>{
  location.href = "cart.html";
 //  location.reload();
})



let cartData = JSON.parse(localStorage.getItem("cart-data")) ||  [];

console.log(cartData.length);
document.querySelector("#bucket-wrapper").innerHTML = cartData.length;
// document.getElementById("cart-count").
// let arr =[];

document.getElementById("chizza").addEventListener("click", async ()=>{
 localStorage.setItem("chizza_data" ,"chizza" );
 let h3 = document.querySelector(".card_header_title")
 h3.textContent="CHIZZA";
 let d = await getdata();
 displayFood(d);

})

document.getElementById("chicken").addEventListener("click", async ()=>{
 localStorage.setItem("chizza_data" ,"chicken-bucket" );
 let h3 = document.querySelector(".card_header_title");
 h3.textContent = "CHICKEN";
 // document.querySelector("body").style.overflow ="hidden";
 let d = await getdata();
 displayFood(d);

})

document.getElementById("new").addEventListener("click", async ()=>{
 localStorage.setItem("chizza_data" ,"new-launch" );
 let h3 = document.querySelector(".card_header_title");
 h3.textContent = "NEW";
 let d = await getdata();
 displayFood(d);

})

document.getElementById("biryani").addEventListener("click", async ()=>{
 localStorage.setItem("chizza_data" ,"biriyani-bucket" );
 let h3 = document.querySelector(".card_header_title");
 h3.textContent = "BIRYANI";
 let d = await getdata();
 displayFood(d);

})

document.getElementById("box").addEventListener("click", async ()=>{
 localStorage.setItem("chizza_data" ,"box-meals" );
 let h3 = document.querySelector(".card_header_title");
 h3.textContent = "BOX";
 let d = await getdata();
 displayFood(d);

})

document.getElementById("burger").addEventListener("click", async ()=>{
 localStorage.setItem("chizza_data" ,"burgers" );
 let h3 = document.querySelector(".card_header_title");
 h3.textContent = "BURGER";
 let d = await getdata();
 displayFood(d);

})

document.getElementById("snacks").addEventListener("click", async ()=>{
 localStorage.setItem("chizza_data" ,"snacks" );
 let h3 = document.querySelector(".card_header_title");
 h3.textContent = "SNACKS";
 // h3.style.margin-bottom ="0px";
 let d = await getdata();
 displayFood(d);

})

document.getElementById("beverages").addEventListener("click", async ()=>{
 localStorage.setItem("chizza_data" ,"beverages" );
 let d = await getdata();
 displayFood(d);

})
let select;
document.getElementById("lth").addEventListener("click",async ()=>{
select = "asc"
let ans= await  getdata(select);
console.log(ans);
displayFood(ans);
})
document.getElementById("htl").addEventListener("click", async ()=>{
select = "desc"
let ans= await  getdata(select);
console.log(ans);
// getdata()
displayFood(ans);
})

async function getdata(select){
 try{ 
 let getMenuData = localStorage.getItem("chizza_data") || "";
 // let select = document.getElementById("sortby-price").;
 console.log(getMenuData);
 let data = await fetch (`https://kfc-menu-api.onrender.com/${getMenuData}/?_sort=price&_order=${select}`);
 let jdata = await data.json();
 console.log(jdata);
 return jdata;

 }

 catch(e){
     // console.log(e)
     return e;
 }
}

let card_container = document.querySelector(".card_container");
let exclusive = document.getElementById("EXCLUSIVE");

function displayFood (dataArr){

 card_container.innerHTML ="";
  exclusive.innerHTML="";

 dataArr.forEach((ele) => {
   
     ele.qty = 1;
     // Common localStorage for all data_
     // addAllItems(ele);
 
     // CARD_
     let card = document.createElement("div");
     card.setAttribute("class", "card");
 
     // CARD IMAGE_
     let card_img = document.createElement("div");
     card_img.setAttribute("class", "card_img");
     let img = document.createElement("img");
     ele.Image =
       ele.Image ||
       "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K488.jpg?ver=25.08";
     img.src = ele.Image;
     // card_img.onclick = function () {
     //   addToDetails(ele);
     // };
 
     // CARD DETAILS_
     let card_details = document.createElement("div");
     card_details.setAttribute("class", "card_details");
     let div1 = document.createElement("div");
     div1.setAttribute("class", "card_details_title");
     ele.title = ele.title || "Peri Peri 5 Leg Pc & 2 Dips";
     div1.textContent = ele.title;
     let div2 = document.createElement("div");
     let span1 = document.createElement("span");
     let span1_img = document.createElement("img");
     span1_img.src = `https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg`;
     let span2 = document.createElement("span");
     span2.setAttribute("class", "dot");
     let span3 = document.createElement("span");
     span3.textContent = ele.veg;
     let div3 = document.createElement("div");
     let span_price = document.createElement("span");
     span_price.setAttribute("class", "price");
     let check = Number(ele.price.substring(1, ele.price.length));
     if (
       ele.price == "Non veg  Serves 3" ||
       ele.price == "Non veg Serves 2" ||
       ele.price == "old price"
     ) {
       ele.price = `₹370.00`;
     }
 
     span_price.textContent = ele.price;
     

     let p =Number(ele.price.substring(1, ele.price.length));

     console.log(p);

     let div4 = document.createElement("div");
     div4.textContent = ele.description;
 
     // CARD BUTTON_
     let card_btn_div = document.createElement("div");
     card_btn_div.setAttribute("class", "card_btn_div");

     let cartData = JSON.parse(localStorage.getItem("cart-data")) || [];

     let btn = document.createElement("button");
      btn.textContent = "Add To Cart";
     btn.addEventListener("click", ()=>{
       // location.reload();
     //  AddtoCard(ele);
     var obj = {
           Image : ele.Image,
           description: ele.description,
           price : p,
           title:ele.title,
           qty: ele.qty,
           veg : ele.veg
     
         }
         cartData.push(obj);
         alert("Item Added To Cart");
         localStorage.setItem("cart-data", JSON.stringify(cartData));
         document.querySelector(".cart-count").textContent = cartData.length;

     })

     btn.setAttribute("class", "btn_addtoCart");
 
     let btn_img = document.createElement("img");
     btn_img.src = `https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg`;
     // btn.onclick = function () {
     //   AddToCart(ele);
     // };
 
     // Append-All line by line_
     card_img.append(img);
     span1.append(span1_img);
     div2.append(span1, span2, span3);
     div3.append(span_price);
     card_details.append(div1, div2, div3, div4);
     btn.append(btn_img);
     card_btn_div.append(btn);
     card.append(card_img, card_details, card_btn_div);
     // document.querySelector(fetchLocation).append(card);
     card_container.append(card);
   });
//   });

document.querySelector(".card_img").addEventListener("click", ()=>{
location.href="details.html";
})

}

// document.querySelector(".cart-count").innerText = cartData.length;

// add to cart
// function AddToCart(ele) {
//     let cartData = JSON.parse(localStorage.getItem("cart-data")) || [];
//     cartData.push(ele);
//     localStorage.setItem("cart-data", JSON.stringify(cartData));
//     // let total = cartTotal(cartData);
//     // document.querySelector("#navbar-price").innerHTML = "₹" + total;
//     // document.querySelector(".cart-count").innerHTML = cartData.length;
//    alert("Item Added To Cart");
//   }

//allu fav

//   document.getElementById("btn-Addtocart").addEventListener("click" ,  add_tocart )
//   let arr= [];
//   function add_tocart(ele){

//   var img=document.getElementById("img_ex").value;
//   var dec=document.getElementsByClassName("menu_card_title").value;
//   var price=document.getElementsByClassName("price").value;
//  var obj ={
//   img:img,
//   dec:dec,
//   price:price,
//  }
//   arr.push(obj);


//    let cartData = JSON.parse(localStorage.getItem("cart-data")) || [];
//     arr.push(ele);
//     localStorage.setItem("cart-data", JSON.stringify(arr));
//     alert("Item Added To Cart");
//   }


//filter
document.getElementById("filterby-veg").addEventListener("change", filterByVeg);

async function filterByVeg() {
  
  let getval= document.getElementById("filterby-veg").value;

 console.log("hi")
let get= await getdata();
console.log(get);
let filterarr = get.filter((el)=>{
 
//  if(el.veg===getval){
   return el.veg==getval;
//  }

})
displayFood(filterarr)
}



// async function search(){
//   let inp = document.getElementById("search-value").value;
//   try{
//     let data = await fetch(`https://kfc-menu-api.onrender.com/?q=${inp}`)
//     let jdata = await data.json();
//     console.log(jdata);
//   }
//   catch(e){
//      console.log(e)
//   }
// }
// search();










// document.getElementById("navbar-cart-bucket").addEventListener("click",function(){
//      location.href = "cart.html";
//     //  location.reload();
// })

// let cartData = JSON.parse(localStorage.getItem("cart-data"))||[];

// // let arr =[];

// document.getElementById("chizza").addEventListener("click", async ()=>{
//     localStorage.setItem("chizza_data" ,"chizza" );
//     let h3 = document.querySelector(".card_header_title")
//     h3.textContent="CHIZZA";
//     let d = await getdata();
//     displayFood(d);

// })

// document.getElementById("chicken").addEventListener("click", async ()=>{
//     localStorage.setItem("chizza_data" ,"chicken-bucket" );
//     let h3 = document.querySelector(".card_header_title");
//     h3.textContent = "CHICKEN";
//     // document.querySelector("body").style.overflow ="hidden";
//     let d = await getdata();
//     displayFood(d);

// })

// document.getElementById("new").addEventListener("click", async ()=>{
//     localStorage.setItem("chizza_data" ,"new-launch" );
//     let h3 = document.querySelector(".card_header_title");
//     h3.textContent = "NEW";
//     let d = await getdata();
//     displayFood(d);

// })

// document.getElementById("biryani").addEventListener("click", async ()=>{
//     localStorage.setItem("chizza_data" ,"biriyani-bucket" );
//     let h3 = document.querySelector(".card_header_title");
//     h3.textContent = "BIRYANI";
//     let d = await getdata();
//     displayFood(d);

// })

// document.getElementById("box").addEventListener("click", async ()=>{
//     localStorage.setItem("chizza_data" ,"box-meals" );
//     let h3 = document.querySelector(".card_header_title");
//     h3.textContent = "BOX";
//     let d = await getdata();
//     displayFood(d);

// })

// document.getElementById("burger").addEventListener("click", async ()=>{
//     localStorage.setItem("chizza_data" ,"burgers" );
//     let h3 = document.querySelector(".card_header_title");
//     h3.textContent = "BURGER";
//     let d = await getdata();
//     displayFood(d);

// })

// document.getElementById("snacks").addEventListener("click", async ()=>{
//     localStorage.setItem("chizza_data" ,"snacks" );
//     let h3 = document.querySelector(".card_header_title");
//     h3.textContent = "SNACKS";
//     // h3.style.margin-bottom ="0px";
//     let d = await getdata();
//     displayFood(d);

// })

// document.getElementById("beverages").addEventListener("click", async ()=>{
//     localStorage.setItem("chizza_data" ,"beverages" );
//     let d = await getdata();
//     displayFood(d);

// })
// let select;
//  document.getElementById("lth").addEventListener("click",async ()=>{
//    select = "asc"
//   let ans= await  getdata(select);
//   console.log(ans);
//    displayFood(ans);
//  })
//  document.getElementById("htl").addEventListener("click", async ()=>{
//   select = "desc"
//   let ans= await  getdata(select);
//   console.log(ans);
//   // getdata()
//   displayFood(ans);
// })

// async function getdata(select){
//     try{ 
//     let getMenuData = localStorage.getItem("chizza_data") || "";
//     // let select = document.getElementById("sortby-price").;
//     console.log(getMenuData);
//     let data = await fetch (`https://kfc-menu-api.onrender.com/${getMenuData}/?_sort=price&_order=${select}`);
//     let jdata = await data.json();
//     console.log(jdata);
//     return jdata;
  
//     }

//     catch(e){
//         // console.log(e)
//         return e;
//     }
// }

// let card_container = document.querySelector(".card_container");
// let exclusive = document.getElementById("EXCLUSIVE");

// function displayFood (dataArr){
   
//     card_container.innerHTML ="";
//      exclusive.innerHTML="";
  
//     dataArr.forEach((ele) => {
      
//         ele.qty = 1;
//         // Common localStorage for all data_
//         // addAllItems(ele);
    
//         // CARD_
//         let card = document.createElement("div");
//         card.setAttribute("class", "card");
    
//         // CARD IMAGE_
//         let card_img = document.createElement("div");
//         card_img.setAttribute("class", "card_img");
//         let img = document.createElement("img");
//         ele.Image =
//           ele.Image ||
//           "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K488.jpg?ver=25.08";
//         img.src = ele.Image;
//         // card_img.onclick = function () {
//         //   addToDetails(ele);
//         // };
    
//         // CARD DETAILS_
//         let card_details = document.createElement("div");
//         card_details.setAttribute("class", "card_details");
//         let div1 = document.createElement("div");
//         div1.setAttribute("class", "card_details_title");
//         ele.title = ele.title || "Peri Peri 5 Leg Pc & 2 Dips";
//         div1.textContent = ele.title;
//         let div2 = document.createElement("div");
//         let span1 = document.createElement("span");
//         let span1_img = document.createElement("img");
//         span1_img.src = `https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg`;
//         let span2 = document.createElement("span");
//         span2.setAttribute("class", "dot");
//         let span3 = document.createElement("span");
//         span3.textContent = ele.veg;
//         let div3 = document.createElement("div");
//         let span_price = document.createElement("span");
//         span_price.setAttribute("class", "price");
//         let check = Number(ele.price.substring(1, ele.price.length));
//         if (
//           ele.price == "Non veg  Serves 3" ||
//           ele.price == "Non veg Serves 2" ||
//           ele.price == "old price"
//         ) {
//           ele.price = `₹370.00`;
//         }
    
//         span_price.textContent = ele.price;
        

//         let p =Number(ele.price.substring(1, ele.price.length));

//         console.log(p);

//         let div4 = document.createElement("div");
//         div4.textContent = ele.description;
    
//         // CARD BUTTON_
//         let card_btn_div = document.createElement("div");
//         card_btn_div.setAttribute("class", "card_btn_div");

//         let cartData = JSON.parse(localStorage.getItem("cart-data")) || [];

//         let btn = document.createElement("button");
//          btn.textContent = "Add To Cart";
//         btn.addEventListener("click", ()=>{
//           // location.reload();
//         //  AddtoCard(ele);
//         var obj = {
//               Image : ele.Image,
//               description: ele.description,
//               price : p,
//               title:ele.title,
//               qty: ele.qty,
//               veg : ele.veg
        
//             }
//             cartData.push(obj);
//             alert("Item Added To Cart");
//             localStorage.setItem("cart-data", JSON.stringify(cartData));
//             // document.getElementById("navbar-cart-bucket1").textContent = cartData.length;

//         })

//         btn.setAttribute("class", "btn_addtoCart");
    
//         let btn_img = document.createElement("img");
//         btn_img.src = `https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg`;
//         // btn.onclick = function () {
//         //   AddToCart(ele);
//         // };
    
//         // Append-All line by line_
//         card_img.append(img);
//         span1.append(span1_img);
//         div2.append(span1, span2, span3);
//         div3.append(span_price);
//         card_details.append(div1, div2, div3, div4);
//         btn.append(btn_img);
//         card_btn_div.append(btn);
//         card.append(card_img, card_details, card_btn_div);
//         // document.querySelector(fetchLocation).append(card);
//         card_container.append(card);
//       });
// //   });

// document.querySelector(".card_img").addEventListener("click", ()=>{
//   location.href="details.html";
// })

// }

// document.getElementById("navbar-cart-bucket1").textContent = cartData.length;

// // add to cart
// // function AddToCart(ele) {
// //     let cartData = JSON.parse(localStorage.getItem("cart-data")) || [];
// //     cartData.push(ele);
// //     localStorage.setItem("cart-data", JSON.stringify(cartData));
// //     // let total = cartTotal(cartData);
// //     // document.querySelector("#navbar-price").innerHTML = "₹" + total;
// //     // document.querySelector(".cart-count").innerHTML = cartData.length;
// //    alert("Item Added To Cart");
// //   }

//   //allu fav

// //   document.getElementById("btn-Addtocart").addEventListener("click" ,  add_tocart )
// //   let arr= [];
// //   function add_tocart(ele){
  
// //   var img=document.getElementById("img_ex").value;
// //   var dec=document.getElementsByClassName("menu_card_title").value;
// //   var price=document.getElementsByClassName("price").value;
// //  var obj ={
// //   img:img,
// //   dec:dec,
// //   price:price,
// //  }
// //   arr.push(obj);


// //    let cartData = JSON.parse(localStorage.getItem("cart-data")) || [];
// //     arr.push(ele);
// //     localStorage.setItem("cart-data", JSON.stringify(arr));
// //     alert("Item Added To Cart");
// //   }


//   //filter
//   document.getElementById("filterby-veg").addEventListener("change", filterByVeg);

//    async function filterByVeg() {
//     console.log("hi")
//   let get= await getdata();
//   console.log(get);
//   let filterarr = get.filter((el)=>{
//     let getval= document.getElementById("filterby-veg").value;
//     if(el.veg===getval){
//       return el;
//     }
   
//   })
//   displayFood(filterarr)
//   }

 

//   // async function search(){
//   //   let inp = document.getElementById("search-value").value;
//   //   try{
//   //     let data = await fetch(`https://kfc-menu-api.onrender.com/?q=${inp}`)
//   //     let jdata = await data.json();
//   //     console.log(jdata);
//   //   }
//   //   catch(e){
//   //      console.log(e)
//   //   }
//   // }
//   // search();
//   document.querySelector("#navbar-man-icon").onclick = () => {
//     location.href = "login.html";
//   };
//   document.querySelector("#navbar-account").onclick = () => {
//     location.href = "login.html";
//   };
//   document.querySelector("#navbar-cart-bucket").onclick = () => {
//     location.href = "cart.html";
//   };
//   document.querySelector(".cart-count").onclick = () => {
//     location.href = "cart.html";
//   };