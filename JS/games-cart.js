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
                        console.log(games[i]);

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


/* Generate Product Page */

const queryString = document.location.search;

const parameters = new URLSearchParams(queryString);

const code = parameters.get("id");

const productURL = "https://ikpb-mar21pt-cms-ma1.com/wp-json/wp/v2/product" + id

const productContainer = document.querySelector(".info-table")

let h1 = document.querySelector("h1");

async function fetchProduct() {

        try {

                const productResponse = await fetch(productURL);

                const product = await productResponse.json();

                for(let j = 0; j < product.length; j++) {

                        console.log(product[j]);

                        productContainer.innerHTML = `<table>
                                <tr class="border-top">
                                        <td rowspan="6">
                                                <img src="${product[j].images[0].src}" alt="${product[j].name} Cover" class="sover--big">
                                        </td>
                                </tr>
                                <tr>
                                        <td>
                                                <p class="italic">${product[j].attributes[4].name} ${product[j].attributes[4].options[0]}</p>
                                        </td>
                                        <td>
                                                <p class="italic">Product number: 000004</p>
                                        </td>
                                </tr>
                                <tr>
                                        <td>
                                                <p class="review"><img src="../icons/star-filled.png" alt="Filled star icon">
                                                <img src="../icons/star-filled.png" alt="Filled star icon">
                                                <img src="../icons/star-filled.png" alt="Filled star icon">
                                                <img src="../icons/star-filled.png" alt="Filled star icon">
                                                <img src="../icons/star-empty.png" alt="Empty star icon"></p>
                                        </td>
                                        <td>
                                                <a href="*" class="italic">Read reviews</a>
                                        </td>
                                </tr>
                                <tr>
                                        <td>
                                                <p class="pricetag">599,-</p>
                                        </td>
                                        <td>
                                                <a href="*" title="Add product"><button class="cta">Add</button></a>
                                        </td>
                                </tr>
                                <tr>
                                        <td>
                                                <p>Type: Download for PC</p>
                                        </td>
                                        <td>
                                                <p>Available: Unlimited</p>
                                        </td>
                                </tr>
                                <tr>
                                        <td>
                                                <p>Developer: Ubisoft</p>
                                        </td>
                                        <td>
                                                <p>Rated: PEGI18</p>
                                        </td>
                                </tr>
                                <tr>
                                        <td colspan="3">
                                                <h2>Build your own viking legend</h2>
                                                <p class="game-desc">Become Eivor, a Viking raider raised to be a fearless warrior, and lead your clan from icy desolation in Norway to a new home amid the lush farmlands of ninth-century England. Find your settlement and conquer this hostile land by any means to earn a place in Valhalla.</p>
                                        </td>
                                </tr>
                        </table>`
                }
        }
}



/* Generate Cart Items */