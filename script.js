// Part 1: Event Handling
const messageBtn = document.getElementById("messageBtn");
const message = document.getElementById("message");

messageBtn.addEventListener("click", () => {
  message.textContent = "You clicked the button! 🎉";
});

// Part 2: Interactive Elements

// Dark/Light Mode Toggle
const toggleMode = document.getElementById("toggleMode");
toggleMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter
let count = 0;
const countDisplay = document.getElementById("count");
document.getElementById("increase").addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});
document.getElementById("decrease").addEventListener("click", () => {
  count--;
  countDisplay.textContent = count;
});

// FAQ Collapsible
const faqQuestion = document.querySelector(".faq-question");
const faqAnswer = document.querySelector(".faq-answer");

faqQuestion.addEventListener("click", () => {
  faqAnswer.style.display = faqAnswer.style.display === "block" ? "none" : "block";
});

// Part 3: Form Validation
const form = document.getElementById("signupForm");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formSuccess = document.getElementById("formSuccess");

// Email regex for simple validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop form from submitting
  let valid = true;

  // Validate name
  if (nameField.value.trim() === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Validate email
  if (!emailRegex.test(emailField.value)) {
    emailError.textContent = "Enter a valid email.";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Validate password (at least 6 chars)
  if (passwordField.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  // Success message
  if (valid) {
    formSuccess.textContent = "Form submitted successfully ✅";
    form.reset();
  } else {
    formSuccess.textContent = "";
  }
});
