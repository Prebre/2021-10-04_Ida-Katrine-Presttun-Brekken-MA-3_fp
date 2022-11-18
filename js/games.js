/* Generate Product List */

const conKey = "ck_06d5d8a678531b91ce7fc969d00bcb41e9ebe144"

const conSecr = "cs_df85f85242b5887c35d06c1997eb5b3557efd8ea"

const gamesURL = `https://ikpb-mar21pt-cms-ma1.com/wp-json/wc/v2/products?consumer_key=${conKey}&consumer_secret=${conSecr}`;

const gamesContainer = document.querySelector("#game-container");

gamesContainer.innerHTML = "";

async function getGames() {
        try {
                const gamesResponse = await fetch(gamesURL);

                const games = await gamesResponse.json();

                for(let i = 0; i < games.length; i++) {

                        gamesContainer.innerHTML += `<div class="game-product">
                                <a href="product.html?id=${games[i].id}" class="game-title grid-2" alt="${games[i].name}">${games[i].name}</a>
                                <p class="review grid-2">${games[i].attributes[1].name} ${games[i].average_rating}</p>
                                <a href="product.html?id=${games[i].id}" class="game-title grid-2" alt="${games[i].name}"><img src="${games[i].images[0].src}" class="cover--small" alt="${games[i].name} cover art"></a>
                                <p class="condensed grid-2">${games[i].attributes[2].options[0]}</p>
                                <p class="pricetag condensed grid-2">$ ${games[i].price}</p>
                                <p class="condensed grid-2">${games[i].attributes[1].options[0]}</p>
                                <div class="cart-add grid-2">
                                        <label for="amount"></label>
                                        <select name="amount" class="game-amount">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <input type="submit" value="Add" class="cta add-to-cart" onClick="addToCart(this)" />
                                </div>`

                                                        
                }
        }
        catch(error) {
                console.log("An error has occurred");
                gamesContainer.innerHTML = "An error has occurred"
        }
}

getGames();