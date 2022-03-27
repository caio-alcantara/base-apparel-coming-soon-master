const button = document.querySelector(".button");


function validateEmail() {
  let regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  let email = document.querySelector("#email").value;
  if (email.match(regex)) {
    return true;
  } else {
    return false;
  }
}

button.addEventListener("click", function (event) {
  event.preventDefault();
  
  if (validateEmail() == false) {
    let email = document.querySelector("#email").style = 'border: 1px solid red;'
    
    let errorIcon = document.querySelector('.error').style = 'display: block;'

    let errorMessage = document.querySelector('.error-message').style = 'display: block;'
    return
  }

  if (validateEmail() == true) {
    let email = document.querySelector("#email").style = 'border: 1px solid green;'
    let errorIcon = document.querySelector('.error').style = 'display: none;'
    let errorMessage = document.querySelector('.error-message')
    errorMessage.style = 'display: block; color: green; padding-left: -20px;'
    errorMessage.textContent = 'Email sent sucessfuly!'
  }
  
});
