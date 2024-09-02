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
        query: document.getElementById('query').value // Matching the field name
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
