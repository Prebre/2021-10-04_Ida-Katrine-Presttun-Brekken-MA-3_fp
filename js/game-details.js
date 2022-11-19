/* Generate details Page */

import { detailsURL } from "./constants/api";

const detailsContainer = document.querySelector(".info-table")

let h1 = document.querySelector("h1");

let title = document.querySelector("title");

let crumbs = document.querySelector(".crumbs");

detailsContainer.innerHTML = "";

async function getdetails() {

    try {

        const detailsResponse = await fetch(detailsURL);

        const details = await detailsResponse.json();

            console.log(details);

            detailsContainer.innerHTML += `<table>
                <tr class="border-top">
                    <td rowspan="6">
                        <img src="${details.images[0].src}" alt="${details.name} Cover" class="cover--big">
                    </td>
                </tr>
                <tr>
                    <td>
                        <p class="italic">${details.attributes[4].name} ${details.attributes[4].options[0]}</p>
                    </td>
                    <td>
                         <p class="italic">${details.attributes[4].name} ${details.attributes[4].options[0]}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p class="review">${details.average_rating}</p>
                    </td>
                    <td>
                        <a href="*" class="italic">Read reviews (${details.rating_count}</a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p class="pricetag">$ ${details.price}</p>
                    </td>
                    <td>
                        <a href="*" title="Add details"><button class="cta">Add</button></a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>${details.attributes[2].name} ${details.attributes[2].options[0]}</p>
                    </td>
                    <td>
                        <p>${details.attributes[3].name} ${details.attributes[3].options[0]}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>${details.attributes[0].name} ${details.attributes[0].options[0]}</p>
                    </td>
                    <td>
                        <p>${details.attributes[1].name} ${details.attributes[1].options[0]}</p>
                    </td>
                </tr>
                <tr>
                    <td colspan="3">
                            ${details.description}
                    </td>
                </tr>
            </table>`
                
            title.innerHTML += `Game Hub | ${details.name}`
            h1.innerHTML += `${details.name}`
            crumbs.innerHTML += `<a href="index.html" title="Home">Home page</a> - <a href="game-list.html" title="Games">Games list</a> - ${details.name}`
    }
    catch(error) {
                    console.log("An error has occurred");
                    detailsContainer.innerHTML = "An error has occurred"
    }
}

getdetails();