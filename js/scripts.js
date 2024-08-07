const cardList = [
    {
        title: "Kitten 2",
        image: "images/kitten-2.jpg",
        link: "About Kitten 2",
        description: "Demo description about kitten 2"
    },
    {
        title: "Kitten 3",
        image: "images/kitten-3.jpg",
        link: "About Kitten 3",
        description: "Demo description about kitten 3"
    }
];

const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!");
};

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
