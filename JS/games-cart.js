/* Containers */

let gameContainer = document.querySelector('#game-container');
let cartContainer = document.querySelector('#cart-tablebody');

/* Arrays */

const url = "https://ikpb-mar21pt-cms-ma1.com/wp-json/wp/v2/product";
const container = document.querySelector("#game-container");

container.innerHTML = "";

async function getProducts() {
        try {
                        const response = await fetch(url);

                        const products = await response.json();

                        for(let i = 0; i < products.length; i++) {
                                        console.log(products[i]);

                                        container.innerHTML += `<div class="game-product">
                                                        <a href="products.html" class="game-title grid-2" alt="${products[i].title.rendered}"><h3>${products[i].title.rendered}</h3></a>
                                                        <a href="products.html" class="game-title grid-2" alt="${products[i].title.rendered}"><img src="#" class="cover--small" alt="${products[i].title.rendered} cover art"></a>
                                                        </div>`
                        }
        }
        catch(error) {
                        console.log("An error has occurred");
                        container.innerHTML = "An error has occurred"
        }
}

getProducts();

/*console.log(product);*/

/* Generate Product List */

/*for (let i = 0; i < product.length; i++) {
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
                if(localStorage.getItem('product')) {
                        product = JSON.parse(localStorage.getItem('product'));
                }
                product.push({'productId' : product.id + 1, image : product.gameURL});
                localStorage.setItem('product', JSON.stringify(product));
        }

        function removeFromCart() {
                let storageProducts = JSON.parse(localStorage.getItem('product'));
                let product = storageProducts.filter(product => product.productId !== productId);
                localStorage.setItem('product', JSON.stringify(product));
        }
};*/





/* Generate Cart Items */