import { data } from "./data.js";
function createCard1(symbol, title, keywords) {
  let divcard = document.createElement("div");
  divcard.classList.add("card");

  let cartin = document.createElement("p");
  cartin.append(symbol);
  let text = document.createElement("p");
  text.append(title);
  let text2 = document.createElement("p");
  text2.append(keywords);

  divcard.append(cartin);
  divcard.append(text2);
  divcard.append(text);

  console.log(divcard);
  main.append(divcard);

  main.append(divbox);
  divbox.append(divcard);

  console.log(divbox);
  cartin.classList.add("img");
  text.classList.add("tex1");
  text2.classList.add("text2");
}

let divbox = document.createElement("div");
let main = document.querySelector("main");
divbox.classList.add("fflexbox");

// data.forEach(function (elem) {
//   createCard1(elem.symbol, elem.title, elem.keywords);
//   console.log(elem.title);
// });

data.forEach((elem) => createCard1(elem.symbol, elem.keywords, elem.title));

const inputheader = document.querySelector(".search");

inputheader.addEventListener("input", (event) => inputHandler(event));

function inputHandler(event) {
  console.log(event.target.value);
  let sort = data.filter(
    (element) =>
      element.title.includes(event.target.value) ||
      element.keywords.includes(event.target.value)
  );

  document.querySelector(".fflexbox").innerHTML = "";
  getSortData(sort);
}

let getSortData = (sort) => {
  sort.forEach((element) => {
    createCard1(element.symbol, element.keywords, element.title);
  });
};

////     input////
// let divheader = document.querySelector(".container");
// console.log(divheader);

// let input = document.createElement("input");
// divheader.append(input);
// input.classList.add("input1");
// console.log(input);
////// input///////
// createCard1("", "symbol", "wge");
// createCard1("", "symbol", "wge");
// createCard1("c", "symbol", "wge");
// createCard1("", "symbol", "wge");
// createCard1("", "symbol", "wge");
// createCard1("", "symbol", "wge");
// createCard1("c", "symbol", "wge");
// createCard1("c", "symbol", "wge");
// createCard1("", "symbol", "wge");

// let main = document.querySelector("main");
// console.log(main);
// // let div1 = document.createElement("div");
// // console.log(div1);
// // main.append(div1);
// // let div = document.getElementsByTagName("div");

// main.insertAdjacentHTML("afterbegin", "<div class= 'card'> </div>");
// let icone = document.createElement("img");
// let div1 = document.querySelector(".card");
// console.log(div1);
// div1.append(icone);
// div1.insertAdjacentHTML(afterbegin);

// // div1.insertAdjacentHTML("afterbegin", icone);
