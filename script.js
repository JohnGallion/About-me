

function clickListener(event) {
  event.preventDefault();
  console.log('Button clicked');
}

function emailValidate(email) {
    if(email.includes('@')) {
        return true;
    } else {
        return false;
    }
}

function validateNSFW(messageText){
    if(messageText.includes('crap','fuck','shit')) {
        return true;
    }else {
        return false;
    }
}

function clickListener(event) {
    event.preventDefault();

    let emailInput = document.querySelector('#email');
    let messageInput = document.querySelector('#message');

    let emailText = emailInput.value;
    let messageText = messageInput.value;

    if(emailValidate(emailText) !== true) {
        console.log('The email address must conatain @');
        return false;
    }
    console.log('Thanks for your message!');
    if(validateNSFW(messageText)!== true) {
        console.log('Not Safe for work!');
        return false
    }
}

let submitButton = document.querySelector('#submit-button');

submitButton.addEventListener('click', clickListener);