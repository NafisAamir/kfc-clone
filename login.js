// Access submit button element
const submitBtn = document.getElementById('sendCode');

// Attach click event listener to submit button
submitBtn.addEventListener('click', function() {
  // Generate a 4 digit random number
  const randomNumber = Math.floor(Math.random() * 9000) + 1000;
  localStorage.setItem("otp", (randomNumber));
  // Display an alert with the random number
  alert('Your OTP is: ' + randomNumber);

  // Attach click event listener to the alert
  window.addEventListener('click', function() {
    // Redirect to index.html when alert is clicked
    window.location.href = 'verify.html';
  });
});

document.getElementById("skipbtn").addEventListener("click", ()=>{
  location.href ="index.html";
})