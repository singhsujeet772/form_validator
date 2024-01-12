const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validatForm() {
    //using Constraint API
    isValid = form.checkValidity();
    //style main message for error
    if (!isValid) {
        message.textContent = 'Please fill out all the fields';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }

    //Password Matchalue);
    if (password1El.value === password2El.value) {
        passwordsMatch = true;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';
    } else {
        message.textContent = 'Make Sure Passwords match';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        return;
    }

    if (isValid && passwordsMatch) {
        message.textContent = 'Registered Successfully!';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
}

//Store Form Data

function storeFormData() {
    let data = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value,
    }

    console.log(data);
}

function processFormData(e) {
    e.preventDefault();

    //Validate Form
    validatForm();
    if (isValid && passwordsMatch) {
        storeFormData();
    }
}

//Event Listeners
form.addEventListener('submit', processFormData);
