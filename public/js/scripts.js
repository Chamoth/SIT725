// Connect to socket.io server
const socket = io();

// Function to validate individual inputs
function validateInput(inputId, msgId, regex, errorMsg) {
    const inputElement = document.getElementById(inputId);
    const messageElement = document.getElementById(msgId);
    
    if (!regex.test(inputElement.value)) {
        messageElement.textContent = errorMsg;
        messageElement.style.color = 'red';
        return false;
    } else {
        messageElement.textContent = '';
        return true;
    }
}

// Function to validate the entire form
function validateForm() {
    const isNameValid = validateInput('name', 'nameMsg', /^[a-zA-Z\s]+$/, 'Please enter a valid full name');
    const isEmailValid = validateInput('email', 'emailMsg', /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email address');
    const isPhoneValid = validateInput('phone', 'phoneMsg', /^\d{10}$/, 'Phone number must be exactly 10 digits');
    const isQueryValid = validateInput('query', 'queryMsg', /^(?!\s*$).+/, 'Please enter your query/feedback');
    
    return isNameValid && isEmailValid && isPhoneValid && isQueryValid;
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

    // Emit form data to server via socket.io
    socket.emit('submit-form', formData);

    // Handle response from server
    socket.on('form-response', (response) => {
        if (response.success) {
            document.getElementById('errorMessage').textContent = response.message;
            console.log('Form submitted successfully!'); // Print success message to the browser console
        } else {
            document.getElementById('errorMessage').textContent = 'An error occurred. Please try again.';
        }
    });
});
