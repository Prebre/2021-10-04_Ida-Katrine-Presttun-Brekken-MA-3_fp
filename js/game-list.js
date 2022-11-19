/* Generate Product List */

import { listURL } from "./constants/api";

const listContainer = document.querySelector("#game-container");

listContainer.innerHTML = "";

async function getList() {
        try {
                const listResponse = await fetch(listURL);

                const list = await listResponse.json();

                for(let i = 0; i < list.length; i++) {

                        listContainer.innerHTML += `<div class="game-product">
                                <a href="game-details.html?id=${list[i].id}" class="game-title grid-2" alt="${list[i].name}">${list[i].name}</a>
                                <p class="review grid-2">${list[i].attributes[1].name} ${list[i].average_rating}</p>
                                <a href="product.html?id=${list[i].id}" class="game-title grid-2" alt="${list[i].name}"><img src="${list[i].images[0].src}" class="cover--small" alt="${list[i].name} cover art"></a>
                                <p class="condensed grid-2">${list[i].attributes[2].options[0]}</p>
                                <p class="pricetag condensed grid-2">$ ${list[i].price}</p>
                                <p class="condensed grid-2">${list[i].attributes[1].options[0]}</p>
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
                listContainer.innerHTML = "An error has occurred"
        }
}

getList();