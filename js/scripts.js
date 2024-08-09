// Function to validate input fields as the user types
function validateInput(inputId, messageSpanId, pattern, errorMessage) {
    var input = document.getElementById(inputId);
    var messageSpan = document.getElementById(messageSpanId);
    var isValid = pattern.test(input.value);
    if (isValid) {
        messageSpan.textContent = '';
        input.classList.remove('is-invalid');
    } else {
        messageSpan.textContent = errorMessage;
        input.classList.add('is-invalid');
    }
    return isValid;
}

// Function to validate the entire form before submission
function validateForm() {
    var isValidName = validateInput('name', 'nameMsg', /^[a-zA-Z\s]+$/, 'Please enter a valid full name');
    var isValidEmail = validateInput('email', 'emailMsg', /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email address');
    var isValidPhone = validateInput('phone', 'phoneMsg', /^\d{10}$/, 'Phone number must be exactly 10 digits');
    var isValidQuery = validateInput('query', 'queryMsg', /^(?!\s*$).+/, 'Please enter your query/feedback');

    var errorMessage = document.getElementById('errorMessage');

    if (isValidName && isValidEmail && isValidPhone && isValidQuery) {
        errorMessage.textContent = '';
        return true;
    } else {
        errorMessage.textContent = 'Please fix the errors in the form before submitting.';
        return false;
    }
}

// Function to handle form submission
document.getElementById('queryForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    if (!validateForm()) {
        return;
    }

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        query: document.getElementById('query').value
    };

    fetch('/submit-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        document.getElementById('errorMessage').textContent = 'Form submitted successfully!';
    })
    .catch((error) => {
        console.error('Error:', error);
        document.getElementById('errorMessage').textContent = 'An error occurred. Please try again.';
    });
});
