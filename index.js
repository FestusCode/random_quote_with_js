let quote = document.querySelector("#quote");
let author = document.querySelector("#author");
let btn = document.querySelector("#btn");
function getData() {
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      quote.innerHTML = data.content;
      author.innerHTML = data.author;
    });
}
getData();
function changeColor() {
  let colors = [
    "#FF4B4B",
    "#FF7F50",
    "#B22222",
    "#FF69B4",
    "#0040ff",
    "#CC9966",
    "#CC6600",
    "#CC3300",
    "#FF6600",
  ];
    let color = colors[Math.floor(Math.random() * colors.length)];
    console.log(color);
}
changeColor();
addEventListener("click", () => {
  getData();
});
