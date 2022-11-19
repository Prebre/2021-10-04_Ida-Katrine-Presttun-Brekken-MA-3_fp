/* Generate Product Page */

const api = "https://ikpb-mar21pt-cms-ma1.com/wp-json/wc/v2/products";

const key = "ck_06d5d8a678531b91ce7fc969d00bcb41e9ebe144"

const secret = "cs_df85f85242b5887c35d06c1997eb5b3557efd8ea"

const queryString = document.location.search;

const parameters = new URLSearchParams(queryString);

const id = parameters.get("id");

console.log(id);

const productURL = api + `/` + id + `?consumer_key=${key}&consumer_secret=${secret}`

const productContainer = document.querySelector(".info-table")

let h1 = document.querySelector("h1");

let title = document.querySelector("title");

productContainer.innerHTML = "";

async function getProduct() {

    try {

        const productResponse = await fetch(productURL);

        const product = await productResponse.json();

            for(let i = 0; i < product.length; i++) {

                console.log(product);

                productContainer.innerHTML += `<table>
                    <tr class="border-top">
                        <td rowspan="6">
                            <img src="${product[0].images[0].src}" alt="${product[i].name} Cover" class="cover--big">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="italic">${product[i].attributes[4].name} ${product[i].attributes[4].options[0]}</p>
                        </td>
                        <td>
                            <p class="italic">${product[i].attributes[4].name} ${product[i].attributes[4].options[0]}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="review">${product[i].average_rating}</p>
                        </td>
                        <td>
                            <a href="*" class="italic">Read reviews (${product[i].rating_count}</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="pricetag">$ ${product[i].price}</p>
                        </td>
                        <td>
                            <a href="*" title="Add product"><button class="cta">Add</button></a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>${product[i].attributes[2].name} ${product[i].attributes[2].options[0]}</p>
                        </td>
                        <td>
                            <p>${product[i].attributes[3].name} ${product[i].attributes[3].options[0]}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>${product[i].attributes[0].name} ${product[i].attributes[0].options[0]}</p>
                        </td>
                        <td>
                            <p>${product[i].attributes[1].name} ${product[i].attributes[1].options[0]}</p>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3">
                            ${product[i].description}
                        </td>
                    </tr>
                </table>`
                
                title.innerHTML += `Game Hub | ${product[i].name}`
                h1.innerHTML += `${product[i].name}`
                }
    }
    catch(error) {
                    console.log("An error has occurred");
                    productContainer.innerHTML = "An error has occurred"
    }
}

getProduct();