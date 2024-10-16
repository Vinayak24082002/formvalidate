const form = document.getElementById("sign-up");
const usernameContainer = document.getElementById("username");
const usernameInput = document.getElementById("username-input");
const usernameError = document.getElementById("user-name-error");
const togglePassword = document.getElementById("toggle-password");
const signupsuccess = document.getElementById("signupsuccess");


const emailContainer = document.getElementById("email");
const emailInput = document.getElementById("email-input");
const emailError = document.getElementById("email-error");

const passwordContainer = document.getElementById("password");
const passwordInput = document.getElementById("password-input");
const passwordError = document.getElementById("password-error");

const confirmpassContainer = document.getElementById("confirmPassword");
const confirmpassInput = document.getElementById("confirmPassword-input");
const confirmpassError = document.getElementById("confirmPassword-error");

function togglePasswordVisibility(inputField, toggleElement) {
  if (inputField.type === "password") {
    inputField.type = "text";
    toggleElement.textContent = "Hide Password";
  } else {
    inputField.type = "password";
    toggleElement.textContent = "Show Password";
  }
}

togglePassword.addEventListener("click", function(e) {
    e.preventDefault();
  togglePasswordVisibility(passwordInput, togglePassword);
});






function validateUsername(value) {
    if (value.length === 0) {
      usernameError.textContent = "Username is required";
    } else if (value.toLowerCase() == "username") {
      usernameError.textContent = 'Username should not be "username"';
    } else {
      usernameError.textContent = ""; 
      return true;
    }
    return false;
}

function validateEmail(value) {
    if (value.length === 0) {
      emailError.textContent = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      emailError.textContent = "Invalid email format";
    } else {
      emailError.textContent = ""; 
      return true;
    }
    return false;
}

function validatePassword(value) {
    if (value.length === 0) {
      passwordError.textContent = "Password is required";
    } else if (value.length < 8) {
      passwordError.textContent = "Password should be at least 8 characters long";
    } else if (!/[a-z]/.test(value) || !/[A-Z]/.test(value) || !/\d/.test(value) || !/[!@#$%^&*()]/.test(value)) {
      passwordError.textContent = "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character";
    } else {
      passwordError.textContent = ""; 
      return true;
    }
    return false;
}

function validateconfirmPassword(value) {
    if (value.length === 0) {
      confirmpassError.textContent = "Confirm Password is required";
    } else if (value !== passwordInput.value) {
      confirmpassError.textContent = "Passwords do not match";
    } else {
      confirmpassError.textContent = ""; 
      return true;
    }
    return false;
}

function handleSubmit(e) {
  e.preventDefault();

  const isUsernameValid = validateUsername(usernameInput.value);
  const isEmailValid = validateEmail(emailInput.value);
  const isPasswordValid = validatePassword(passwordInput.value);
  const isConfirmPasswordValid = validateconfirmPassword(confirmpassInput.value);

  if (isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
    console.log("Form submitted");
    console.log(
      "Username:",
      usernameInput.value,
      "\nEmail:",
      emailInput.value,
      "\nPassword:",
      passwordInput.value,
      "\nConfirm Password:",
      confirmpassInput.value
    );
    signupsuccess.textContent = "Sign Up Successful!";
    signupsuccess.style.color = "green"; 
    signupsuccess.style.display = "block"; 
    setTimeout(() => {
        signupsuccess.textContent = ""; 
        signupsuccess.style.display = "none"; 
      }, 5000);

   
    form.reset();
  }
}

form.addEventListener("submit", handleSubmit);
