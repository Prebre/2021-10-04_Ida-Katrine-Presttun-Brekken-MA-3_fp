/* Game Info */

let container = document.querySelector("#game-container");

let product = [{
    title: "Assassin's Creed: Valhalla",
    price: "599,-",
    photo: "ACV.jpg",
    type: "Type: Download for PC",
    availabe: "Available: Unlimited",
    reviews: "4/5",
    rated: "Rated: PEGI18",
    gameURL: "acv.html"
},
{
    title: "Boyfriend Dungeon",
    price: "TBA",
    photo: "BD.jpg",
    type: "Type: Download for PC",
    availabe: "Available: Unlimited",
    reviews: "TBA",
    rated: "Rated: TBA",
    gameURL: "bd.html"
},
{
    title: "Dragon Age: Origins",
    price: "199,-",
    photo: "DAO.jpg",
    type: "Type: DVD-rom for PC",
    availabe: "Available: Less than 5",
    reviews: "4/5",
    rated: "Rated: PEGI18",
    gameURL: "dao.html"
},
{
    title: "Resident Evil Village",
    price: "699,-",
    photo: "REVIII.jpg",
    type: "Type: Download for PC",
    availabe: "Available: Unlimited",
    reviews: "5/5",
    rated: "Rated: PEGI18",
    gameURL: "reviii.html"
}];

/* Game List */

for (let i = 0; i < product.length; i++) {
    container.innerHTML += '<div class="game-product">' +
    '<a href="games/' + product[i].gameURL + 'class="game-title" title="' + product[i].title + '">' + product[i].title + '</a><br>' +
    '<img src="products/' + product[i].photo + '" class=cover--small" alt="' + product[i].title + 'cover art">' +
    '<p class="pricetag">$<span>' + product[i].price + '</span></p>' +
    '<p>' + product[i].type + '</p>' +
    '<p class="review">' + product[i].reviews + '</p>' +
    '<p>' + product[i].rated + '</p>' +
    '<div class="cart-add">' +
        '<input type="text" class="game-amount" name="amount" value="1"/>'+
        '<input type="submit" value="Add to Cart" class="cta add-to-cart" onClick="addToCart(this)" />'+
    '</div>'
'</div>';
}

/* Cart Functions */

function addToCart(target) {
    var gameProduct =(target).closest('div.game-product');

    var price = (gameProduct).find('.price span').text();
    var title = (gameProduct).find('.title').text();
    var amount = (gameProduct).find('.game-amount').text();

    var cartitem = {
        title: title,
        price: price,
        amount: amount
    };
    var cartitemJSON = JSON.stringify(cartitem);

    var cartArray = new Array();
    if (sessionStorage.getitem('shopping-cart')) {
        cartArray = JSON.parse(sessionStorage.getitem('shopping-cart'));
    }
    vartArray.push(cartitemJSON);

    var cartJSON = JSON.stringify(cartArray);
    sessionStorage.setitem('shopping-cart', cartJSON);
    showCartTable();
}

function emptyCart() {
    if (sessionStorage.getitem('shopping-cart')) {
        sessionStorage.removeitem('shopping-cart');
        showCartTable();
    }
}

function showCartTable() {
    var cartRowHTML = "";
    var gameCount= 0;
    var grandTotal = 0;

    var price = 0;
    var amount = 0;
    var subTotal = 0;

    if (sessionStorage.getitem('shopping-cart')) {
        var shoppingCart = JSON.parse(sessionStorage.getitem('shopping-cart'));
        gameCount = shoppingCart.length;

        shoppingCart.forEach(function(game) {
            var cartitem = JSON.parse(game);
            price = parseFloat(cartitem.price);
            amount = parseInt(cartitem.amount);
            total = price * amount

            carRowHTML += '<tr>' +
            '<td><img src="products/' + product[i].photo + '" class=cover--smallest" alt="' + product[i].title + 'cover art"></td>' +
            '<td>$' + product[i].title + '</td>' +
            '<td>$' + price.toFixed(2) + '</td>' +
            '<td>$' + amount + '</td>' +
            '<td>$' + subTotal.toFixed(2) + '</td>' +
            '</tr>';

            grandTotal += subTotal;
        });
    }

    $('$cartTableBody').html(cartRowHTML);
    $('#gameCount').text(gameCount);
    $('#totalAmount').text("$" + grandTotal.toFixed(2));
}