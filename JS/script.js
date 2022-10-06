/* Form Validation */

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

/* Cart Functions */

$(document).ready(function() {
    var gameItem = [{
            gameName: "Assassin's Creed: Valhalla",
            price: "599,-",
            photo: "products/ACV.jpg",
            type: "Type: Download for PC",
            availabe: "Available: Unlimited",
            reviews: "4/5",
            rated: "Rated: PEGI18",
            itemNumber: "Item Number: 000004",
            productNumber: "Product Number: 000004",
            gameURL: "games/acv.html"
        },
        {
            gameName: "Boyfriend Dungeon",
            price: "TBA",
            photo: "products/BD.jpg",
            type: "Type: Download for PC",
            availabe: "Available: Unlimited",
            reviews: "TBA",
            rated: "Rated: TBA",
            itemNumber: "Item Number: 000006",
            productNumber: "Product Number: 000006",
            gameURL: "games/bd.html"
        },
        {
            gameName: "Dragon Age: Origins",
            price: "199,-",
            photo: "products/DAO.jpg",
            type: "Type: DVD-rom for PC",
            availabe: "Available: Less than 5",
            reviews: "4/5",
            rated: "Rated: PEGI18",
            itemNumber: "Item Number: 000001",
            productNumber: "Product Number: 000001",
            gameURL: "games/dao.html"
        },
        {
            gameName: "Resident Evil Village",
            price: "699,-",
            photo: "products/REVIII.jpg",
            type: "Type: Download for PC",
            availabe: "Available: Unlimited",
            reviews: "5/5",
            rated: "Rated: PEGI18",
            itemNumber: "Item Number: 000005",
            productNumber: "Product Number: 000005",
            gameURL: "games/reviii.html"
        }];
    showGameList(gameItem);

});

funtion showGameList(game) {
    var gameHTML = "";
    game.forEach(function(game) {
        gameHTML += '<div class="game-item">' +
                        '<img src="product/' + game.photo + '" class=cover--small">' +
                        '<a href="' + game.gameURL + 'class="game-title" title="' + game.gameName + '">' + game.gameName + '</a>' +
                        '<p class="review">' + game.reviews + '</p>' +
                        '<p>' + game.type + '</p>' +
                        '<p class="pricetag">' + game.price + '</p>' +
                        '<p>' + game.rated + '</p>' +
                        '<p>' + game.availabe + '</p>' +
                        '<p>' + game.itemNumber + '</p>' +
                        '<p>' + game.productNumber + '</p>' +
                        '<div class="cart-add">' +
                            '<input type="text" class="game-amount" name="amount" value="1" size="2" />'+
                            '<input type="submit" value="Add to Cart" class="add-to-cart" onClick="addToCart(this)" />'+
                        '</div>'
                    '</div>';
                    "<tr>";
    });
    $('#game-container').html(gameHTML);
}