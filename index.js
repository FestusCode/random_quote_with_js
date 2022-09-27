let quote = document.querySelector("#quote");
let author = document.querySelector("#author");
let btn = document.querySelector("#btn");
fetch("https://api.quotable.io/random")
  .then((response) => response.json())
  .then((data) => {
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
  });
