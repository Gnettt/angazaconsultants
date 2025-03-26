document.addEventListener("DOMContentLoaded", function () {
  // Your existing code here
});

const form = document.getElementById('form')
const firstname_input = document.getElementById('firstname-input')
const phonenumber_input = document.getElementById('phonenumber-input')
const password_input = document.getElementById('password-input')
const repeat_password_input = document.getElementById('repeat-password-input')
const error_message = document.getElementById('error-message')

function getSignupFormErrors(firstname, phonenumber, password, repeatPassword){
  let errors = []

  if(firstname === '' || firstname == null){
    errors.push('Firstname is required')
    firstname_input.parentElement.classList.add('incorrect')
  }
  if(phonenumber === '' || phonenumber == null){
    errors.push('Phone number is required')
    phonenumber_input.parentElement.classList.add('incorrect')
  }
  if(password === '' || password == null){
    errors.push('Password is required')
    password_input.parentElement.classList.add('incorrect')
  }
  if(password.length < 8){
    errors.push('Password must have at least 8 characters')
    password_input.parentElement.classList.add('incorrect')
  }
  if(password !== repeatPassword){
    errors.push('Password does not match repeated password')
    password_input.parentElement.classList.add('incorrect')
    repeat_password_input.parentElement.classList.add('incorrect')
  }


  return errors;
}

function clickDown() {
  const info = document.getElementById("more-info");
  if (info.style.display === "none" || info.style.display === "") {
      info.style.display = "block";
  } else {
      info.style.display = "none";
  }
}

function clickDown1() {
  const info = document.getElementById("more-info1");
  if (info.style.display === "none" || info.style.display === "") {
      info.style.display = "block";
  } else {
      info.style.display = "none";
  }
}
function clickDown2() {
  const info = document.getElementById("more-info2");
  if (info.style.display === "none" || info.style.display === "") {
      info.style.display = "block";
  } else {
      info.style.display = "none";
  }
}

document.getElementById("updateForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const userId = document.getElementById("userId").value;
    const updatedUser = {
        fullnames: document.getElementById("fullnames").value,
        phoneNumber: document.getElementById("phoneNumber").value,
        program: document.getElementById("program").value,
        location: document.getElementById("location").value
    };

    fetch(`http://localhost:3000/users/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedUser)
    })
    .then(response => response.json())
    .then(data => alert("User updated successfully!"))
    .catch(error => console.error("Error:", error));
  });
