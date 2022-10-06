const form = document.querySelector('#contactForm');
const fullname = document.querySelector('#contact-name');
const subject = document.querySelector('#contact-subject');
const email = document.querySelector('#contact-mail');
const address = document.querySelector('#contact-message');
    
fullname.addEventListener('invalid', function (event) {
        if (event.target.validity.valueMissing) {
                event.target.setCustomValidity('Please fill in your name');
        }
})
    
fullname.addEventListener('change', function (event) {
        event.target.setCustomValidity('');
})
    
subject.addEventListener('invalid', function (event) {
        if (event.target.validity.valueMissing) {
                event.target.setCustomValidity('Please add a subject');
        }
    
        if (event.target.validity.tooShort) {
                event.target.setCustomValidity('Must contain at least 10 characters');
        }
})
    
subject.addEventListener('change', function (event) {
        event.target.setCustomValidity('');
})
    
email.addEventListener('invalid', function (event) {
        if (event.target.validity.valueMissing) {
                event.target.setCustomValidity('Please fill in your email');
        }
            
        if (event.target.validity.typeMismatch) {
                event.target.setCustomValidity('Please fill in a valid email');
        }
})
    
email.addEventListener('change', function (event) {
        event.target.setCustomValidity('');
})
    
address.addEventListener('invalid', function (event) {
        if (event.target.validity.valueMissing) {
                event.target.setCustomValidity('Please add your message');
        }
            
        if (event.target.validity.tooShort) {
                event.target.setCustomValidity('Must contain at least 25 characters');
        }
})
    
address.addEventListener('change', function (event) {
        event.target.setCustomValidity('');
})
    
form.onsubmit = function validateForm(event) {
        event.preventDefault();

    document.getElementById('validationmessage').innerHTML += '<p>Form sent!</p>'
}