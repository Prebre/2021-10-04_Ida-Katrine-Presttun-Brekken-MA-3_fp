/* Generate Product Page */

import { productURL } from "./constants/api";

const productContainer = document.querySelector(".info-table")

let h1 = document.querySelector("h1");

let title = document.querySelector("title");

let crumbs = document.querySelector(".crumbs");

productContainer.innerHTML = "";

async function getProduct() {

    try {

        const productResponse = await fetch(productURL);

        const product = await productResponse.json();

            console.log(product);

            productContainer.innerHTML += `<table>
                <tr class="border-top">
                    <td rowspan="6">
                        <img src="${product.images[0].src}" alt="${product.name} Cover" class="cover--big">
                    </td>
                </tr>
                <tr>
                    <td>
                        <p class="italic">${product.attributes[4].name} ${product.attributes[4].options[0]}</p>
                    </td>
                    <td>
                         <p class="italic">${product.attributes[4].name} ${product.attributes[4].options[0]}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p class="review">${product.average_rating}</p>
                    </td>
                    <td>
                        <a href="*" class="italic">Read reviews (${product.rating_count}</a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p class="pricetag">$ ${product.price}</p>
                    </td>
                    <td>
                        <a href="*" title="Add product"><button class="cta">Add</button></a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>${product.attributes[2].name} ${product.attributes[2].options[0]}</p>
                    </td>
                    <td>
                        <p>${product.attributes[3].name} ${product.attributes[3].options[0]}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>${product.attributes[0].name} ${product.attributes[0].options[0]}</p>
                    </td>
                    <td>
                        <p>${product.attributes[1].name} ${product.attributes[1].options[0]}</p>
                    </td>
                </tr>
                <tr>
                    <td colspan="3">
                            ${product.description}
                    </td>
                </tr>
            </table>`
                
            title.innerHTML += `Game Hub | ${product.name}`
            h1.innerHTML += `${product.name}`
            crumbs.innerHTML += `<a href="index.html" title="Home">Home page</a> - <a href="games.html" title="Games">Games list</a> - ${product.name}`
    }
    catch(error) {
                    console.log("An error has occurred");
                    productContainer.innerHTML = "An error has occurred"
    }
}

getProduct();