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

<<<<<<< HEAD
    var errorMessage = document.getElementById('errorMessage');

    if (isValidName && isValidEmail && isValidPhone && isValidQuery) {
        errorMessage.textContent = '';
        return true;
    } else {
        errorMessage.textContent = 'Please fix the errors in the form before submitting.';
        return false;
    }
}
=======
const submitForm = () => {
    let formData = {};
    formData.first_name = $('#first_name').val();
    formData.last_name = $('#last_name').val();
    formData.password = $('#password').val();
    formData.email = $('#email').val();
    console.log("Form Data Submitted: ", formData);

    $.ajax({
        url: '/api/forms',  // Adjust the URL as per your setup
        type: 'POST',
        data: JSON.stringify(formData),
        contentType: 'application/json; charset=utf-8',
        success: function(response) {
            console.log("Form data saved successfully!");
            alert("Details stored successfully!");
        },
        error: function(error) {
            console.log("Error saving form data: ", error);
        }
    });
};

const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = `<div class="col s4 center-align">
            <div class="card medium">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src="${item.image}">
                </div>
                <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">${item.title}<i class="material-icons right">more_vert</i></span>
                    <p><a href="#">${item.link}</a></p>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">${item.title}<i class="material-icons right">close</i></span>
                    <p class="card-text">${item.description}</p>
                </div>
            </div>
        </div>`;
        $("#card-section").append(itemToAppend);
    });
};

const fetchCards = () => {
    $.ajax({
        url: '/api/cards',  // Adjust the URL as per your setup
        type: 'GET',
        success: function(cards) {
            addCards(cards);
        },
        error: function(error) {
            console.log("Error fetching cards: ", error);
        }
    });
};

$(document).ready(function () {
    $('.materialboxed').materialbox();
    $('#formSubmit').click(() => {
        submitForm();
    });
    addCards(cardList);
    fetchCards();  // Fetch and display cards from the server
    $('.modal').modal();
});
>>>>>>> 7dcedbde7d572b96a624d6c461224bdd2f285204
