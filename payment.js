// import  {navbar} from "./navbar.js"
//   let na = document.querySelector(".navbar");
//   na.innerHTML = navbar();

//   import  {footer} from "./footer.js"
//   let ft = document.querySelector(".footer");
//   ft.innerHTML = footer();

var inp=document.querySelector(".card-number-input");
var year=document.querySelector(".year-input")
var cvv=document.querySelector(".cvv-input")
var month=document.querySelector(".month-input")


  document.querySelector(".cvv-input").onmouseenter = () => {
    document.querySelector(".front").style.transform =
      "perspective(1000px) rotateY(-180deg)";
    document.querySelector(".back").style.transform =
      "perspective(1000px) rotateY(0deg)";
  };

  document.querySelector(".cvv-input").onmouseleave = () => {
    document.querySelector(".front").style.transform =
      "perspective(1000px) rotateY(0deg)";
    document.querySelector(".back").style.transform =
      "perspective(1000px) rotateY(180deg)";
  };

  document.querySelector(".cvv-input").oninput = () => {
    document.querySelector(".cvv-box").innerText =
      document.querySelector(".cvv-input").value;
  };

  var submitbtn=document.querySelector(".submit-btn")
  submitbtn.addEventListener("click",()=>{
    event.preventDefault()
    if(inp.value.length < 16){
        var msg1=document.querySelector("#warning1")
        msg1.textContent="Enter 16-digit card number*"
    }
    if(year.value==2021 || year.value==2022){
        var msg2=document.querySelector("#warning2")
        msg2.textContent="Your card has been expired*"
    }
    if(cvv.value.length<3){
        var msg3=document.querySelector("#warning3")
        msg3.textContent="Enter 3-digit CVV*"
    }
    if(inp.value.length >= 12 && year.value!=2021 && year.value!=2022 && cvv.value.length ==3 && month.value!=null){

      alert('Thank you, your payment is successful! ');
      window.addEventListener('click', function() {
        // Redirect to index.html when alert is clicked
        window.location.href = 'index.html';
      });
        // location.href = "index.html";
    }
  })


  // let submitBtn = document.querySelector(".submit-btn");
  // submitBtn.addEventListener("click", function (){
  //   window.location.href = "profile.html"
  // })

  