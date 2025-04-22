document.addEventListener("DOMContentLoaded", function () {
 
const firstname_input = document.getElementById('firstname-input')
const phonenumber_input = document.getElementById('phonenumber-input')
const password_input = document.getElementById('password-input')
const repeat_password_input = document.getElementById('repeat-password-input')

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
        info.style.display = "none";
    } else {
        info.style.display = "block";
    }
  }
  function clickDown2() {
    const info = document.getElementById("more-info2");
    if (info.style.display === "none" || info.style.display === "") {
        info.style.display = "none";
    } else {
        info.style.display = "block";
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
   
fetch("/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(UpdatedUser)
    })
    .then(response => response.json())
    .then(data => console.log("Success:", data))
    .catch(error => console.error("Error:", error));
    
  
})
});

function getUserLocation() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                document.getElementById("latitude").textContent = latitude;
                document.getElementById("longitude").textContent = longitude;

                fetchAddress(latitude, longitude);
            },
            function (error) {
                console.error("Error getting location:", error.message);
                document.getElementById("address").textContent = "Unable to get location.";
            }
        );
    } else {
        console.error("Geolocation is not supported by this browser.");
        document.getElementById("address").textContent = "Geolocation not supported.";
    }
}

function getCurrentCity() {
    navigator.geolocation.getCurrentPosition(position => {
        fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`)
            .then(res => res.json())
            .then(data => {
                document.getElementById("city").textContent = data.address.city || data.address.town || data.address.village || "City not found";
            })
            .catch(() => document.getElementById("city").textContent = "Error fetching city.");
    }, 
    () => document.getElementById("city").textContent = "Location access denied.");
}

getCurrentCity();
