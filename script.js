document.addEventListener("DOMContentLoaded", function () {
    // Get input fields and error message elements
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");

    // Validate name field
    function validateName() {
        if (nameInput.value.trim() === "") {
            nameError.style.display = "block";
        } else {
            nameError.style.display = "none";
        }
    }

    // Validate email field
    function validateEmail() {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(emailInput.value)) {
            emailError.style.display = "block";
        } else {
            emailError.style.display = "none";
        }
    }

    // Validate password field
    function validatePassword() {
        if (passwordInput.value.length < 8) {
            passwordError.style.display = "block";
        } else {
            passwordError.style.display = "none";
        }
    }

    // Event listeners for real-time validation
    nameInput.addEventListener("input", validateName);
    emailInput.addEventListener("input", validateEmail);
    passwordInput.addEventListener("input", validatePassword);

    // Validate all fields before submitting
    document.getElementById("registration-form").addEventListener("submit", function (event) {
        validateName();
        validateEmail();
        validatePassword();

        // Prevent form submission if any input is invalid
        if (nameError.style.display === "block" || emailError.style.display === "block" || passwordError.style.display === "block") {
            event.preventDefault();
        }
    });
});
