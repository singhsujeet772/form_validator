const form = document.getElementById('form');
const password1El = document.getElementById('password1El');
const password2El = document.getElementById('password2El');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;

function validatForm(){
    //using Constraint API
    isValid = form.checkValidity();
    //style main message for error
    message.textContent = 'Please fill out all the fields';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
}

function processFormData(e){
    e.preventDefault();
    
    //Validate Form
    validatForm();
}

//Event Listeners
form.addEventListener('submit',processFormData);
