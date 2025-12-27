document.getElementById("userForm").addEventListener("submit", function(e) {
    e.preventDefault(); // prevent form submission

    let isValid = true;

    // Input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    // Error fields
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    // Reset errors
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    // Validation rules
    if (name === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        emailError.textContent = "Enter a valid email";
        isValid = false;
    }

    if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        isValid = false;
    }

    if (confirmPassword !== password) {
        confirmPasswordError.textContent = "Passwords do not match";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully 🎉");
        document.getElementById("userForm").reset();
    }
});
