var signupbtn = document.getElementById("signupbtn")

var skipsignup = document.getElementById("skipsignup")

signupbtn.addEventListener('click', function(event) {
    // Prevent the form from submitting normally
    event.preventDefault();
 var firstname = document.getElementById("firstName").value

 var email = document.getElementById("email").value
   

    // Compare the entered code to the random number
    if (firstname == "" || email=="") {
      // If the code is wrong, display an error message
      alert('Please fill in all the details');
    } else {
      // If the code is correct, redirect to signup.html
      window.location.href = 'index.html';
    }
  });

  skipsignup.addEventListener('click', function(event) {
    // Prevent the form from submitting normally
    event.preventDefault();

      window.location.href = 'index.html';
    
  });