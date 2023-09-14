document.addEventListener("DOMContentLoaded", function () {
  const userForm = document.getElementById("userForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const ageInput = document.getElementById("age");
  const outputDiv = document.getElementById("output");

  userForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = nameInput.value;
    const email = emailInput.value;
    const age = ageInput.value;

    if (!isValidName(name)) {
      showError("Please enter a valid name.");
    } else if (!isValidEmail(email)) {
      showError("Please enter a valid email address.");
    } else if (!isValidAge(age)) {
      showError("Please enter a valid age (must be a positive number).");
    } else {
      outputDiv.innerHTML = `Name: ${name}<br>Email: ${email}<br>Age: ${age}`;
    }
  });

  function isValidName(name) {
    // Basic validation: at least 2 characters
    return name.length >= 2;
  }

  function isValidEmail(email) {
    // Basic email validation using a regular expression
    const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  function isValidAge(age) {
    // Basic age validation: a positive number
    const parsedAge = parseInt(age, 10);
    return !isNaN(parsedAge) && parsedAge > 0;
  }

  function showError(message) {
    outputDiv.innerHTML = `<div class="error">${message}</div>`;
  }
});
