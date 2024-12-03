document.getElementById('secureForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission to validate first

    const firstName = sanitizeInput(document.getElementById('firstName').value.trim());
    const lastName = sanitizeInput(document.getElementById('lastName').value.trim());
    const email = sanitizeInput(document.getElementById('email').value.trim());
    const password = sanitizeInput(document.getElementById('password').value.trim());
    const confirmPassword = sanitizeInput(document.getElementById('confirmPassword').value.trim());

    // Validation Checks
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        alert('All fields are required.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!validatePassword(password)) {
        alert('Password must be at least 8 characters, include at least one uppercase letter, one lowercase letter, and one number.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    alert('Form submitted successfully!');
});

// Function to sanitize input by encoding special characters
function sanitizeInput(input) {
    const map = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '/': '&#x2F;',
        '&': '&amp;',
        '`': '&#96;'
    };
    return input.replace(/[<>"'\/&`]/g, function (match) {
        return map[match];
    });
}

// Function to validate email format
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}

// Function to validate password (minimum criteria for security)
function validatePassword(password) {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
}
