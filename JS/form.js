/* Form Validation */

/*** Contact Form ***/

const conForm = document.querySelector('#contactForm');
const conName = document.querySelector('#contact-name');
const conSubject = document.querySelector('#contact-subject');
const conMail = document.querySelector('#contact-mail');
const conMessage = document.querySelector('#contact-message');
    
conName.addEventListener('invalid', function (event) {
        if (event.target.validity.valueMissing) {
                event.target.setCustomValidity('Please fill in your name');
        }
})
    
conName.addEventListener('change', function (event) {
        event.target.setCustomValidity('');
})
    
conSubject.addEventListener('invalid', function (event) {
        if (event.target.validity.valueMissing) {
                event.target.setCustomValidity('Please add a subject');
        }
    
        if (event.target.validity.tooShort) {
                event.target.setCustomValidity('Must contain at least 10 characters');
        }
})
    
conSubject.addEventListener('change', function (event) {
        event.target.setCustomValidity('');
})
    
conMail.addEventListener('invalid', function (event) {
        if (event.target.validity.valueMissing) {
                event.target.setCustomValidity('Please fill in your email');
        }
            
        if (event.target.validity.typeMismatch) {
                event.target.setCustomValidity('Please fill in a valid email');
        }
})
    
conMail.addEventListener('change', function (event) {
        event.target.setCustomValidity('');
})
    
conMessage.addEventListener('invalid', function (event) {
        if (event.target.validity.valueMissing) {
                event.target.setCustomValidity('Please add your message');
        }
            
        if (event.target.validity.tooShort) {
                event.target.setCustomValidity('Must contain at least 25 characters');
        }
})
    
conMessage.addEventListener('change', function (event) {
        event.target.setCustomValidity('');
})
    
conForm.onsubmit = function validateForm(event) {
        event.preventDefault();

    document.getElementById('validationmessage').innerHTML += '<p>Form sent!</p>'
}


/*** Seller Form ***/

const sellForm = document.querySelector('#sellerForm');
const sellName = document.querySelector('#seller-name');
const sellMail = document.querySelector('#seller-mail');
const sellGame = document.querySelector('#seller-game');
const sellMessage = document.querySelector('#seller-message');
    
sellName.addEventListener('invalid', function (event) {
        if (event.target.validity.valueMissing) {
                event.target.setCustomValidity('Please fill in your name');
        }
})
    
sellName.addEventListener('change', function (event) {
        event.target.setCustomValidity('');
})
    
sellGame.addEventListener('invalid', function (event) {
        if (event.target.validity.valueMissing) {
                event.target.setCustomValidity('Please add a game title');
        }
})
    
sellGame.addEventListener('change', function (event) {
        event.target.setCustomValidity('');
})
    
sellMail.addEventListener('invalid', function (event) {
        if (event.target.validity.valueMissing) {
                event.target.setCustomValidity('Please fill in your email');
        }
            
        if (event.target.validity.typeMismatch) {
                event.target.setCustomValidity('Please fill in a valid email');
        }
})
    
sellMail.addEventListener('change', function (event) {
        event.target.setCustomValidity('');
})
    
sellMessage.addEventListener('invalid', function (event) {
        if (event.target.validity.valueMissing) {
                event.target.setCustomValidity('Please add game state description');
        }
            
        if (event.target.validity.tooShort) {
                event.target.setCustomValidity('Must contain at least 25 characters');
        }
})
    
sellMessage.addEventListener('change', function (event) {
        event.target.setCustomValidity('');
})
    
sellForm.onsubmit = function validateForm(event) {
        event.preventDefault();

    document.getElementById('validationmessage').innerHTML += '<p>Form sent!</p>'
}