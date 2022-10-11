/* Containers */

let gameContainer = document.querySelector('#game-container');
let cartContainer = document.querySelector('#cart-tablebody');

/* Arrays */

let product = [{
        title: "Assassin's Creed: Valhalla",
        price: "599,-",
        photo: "ACV.jpg",
        type: "Download for PC",
        availabe: "Available: Unlimited",
        reviews: "4/5",
        rated: "PEGI18",
        gameURL: "acv.html"
},
{
        title: "Boyfriend Dungeon",
        price: "TBA",
        photo: "BD.jpg",
        type: "Download for PC",
        availabe: "Available: Unlimited",
        reviews: "TBA",
        rated: "TBA",
        gameURL: "bd.html"
},
{
        title: "Dragon Age: Origins",
        price: "199,-",
        photo: "DAO.jpg",
        type: "DVD-rom for PC",
        availabe: "Available: Less than 5",
        reviews: "4/5",
        rated: "PEGI18",
        gameURL: "dao.html"
},
{
        title: "Resident Evil Village",
        price: "699,-",
        photo: "REVIII.jpg",
        type: "Download for PC",
        availabe: "Available: Unlimited",
        reviews: "5/5",
        rated: "PEGI18",
        gameURL: "reviii.html"
}];

console.log(product);

/* Generate Product List */

for (let i = 0; i < product.length; i++) {
        gameContainer.innerHTML += '<div class="game-product">' +
                '<a href="games/' + product[i].gameURL + '" class="game-title grid-2" alt="' + product[i].title + '">' + product[i].title + '</a><br>' +
                '<p class="review grid-2">Rated ' + product[i].reviews + '</p>' +
                '<a href="games/' + product[i].gameURL + '" class="game-title grid-2" alt="' + product[i].title + '"><img src="products/' + product[i].photo + '" class="cover--small" alt="' + product[i].title + ' cover art"></a><br>' +
                '<p class="grid-2">' + product[i].type + '</p>' +
                '<p class="pricetag grid-2">$<span>' + product[i].price + '</span></p>' +
                '<p class="grid-2">' + product[i].rated + '</p>' +
                '<div class="cart-add grid-2">' +
                        '<label for="amount"></label>' +
                        '<select name="amount" class="game-amount">'+
                        '<option value="1">1</option>' +
                        '<option value="2">2</option>' +
                        '<option value="3">3</option>' +
                        '<option value="4">4</option>' +
                        '<option value="5">5</option>' +
                        '<input type="submit" value="Add" class="cta add-to-cart" onClick="addToCart(this)" />'+
                '</div>'
        '</div>';

    

        function addToCart() {
                let amount = document.getElementsByName('amount');
                let subTotal = product[i].price * amount;

                cartContainer.innerHTML = '<tr>' +
                '<td><img src="products/' + product[i].photo + '" class=cover--smallest" alt="' + product[i].title + 'cover art"></td>' +
                '<td>$' + product[i].title + '</td>' +
                '<td>$' + product[i].price + '</td>' +
                '<td>$' + amount + '</td>' +
                '<td>$' + subTotal + '</td>' +
                '</tr>';
        }
};

/* Generate Cart Items */