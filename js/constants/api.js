export const api = "https://ikpb-mar21pt-cms-ma1.com/wp-json/wc/v2/products";

export const key = "ck_06d5d8a678531b91ce7fc969d00bcb41e9ebe144"

export const secret = "cs_df85f85242b5887c35d06c1997eb5b3557efd8ea"

export const listURL = `${api}?consumer_key=${key}&consumer_secret=${secret}`;

const queryString = document.location.search;

const parameters = new URLSearchParams(queryString);

const id = parameters.get("id");

console.log(id);

const detailsURL = `${api}/${id}?consumer_key=${key}&consumer_secret=${secret}`