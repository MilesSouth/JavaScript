const addButton = document.getElementById("btn");
const addInput = document.getElementById("input");
const inputTag = document.getElementsByTagName("input");
console.log(addButton);

addButton.style.backgroundColor = "#bebe";
addButton.style.border = "none";
addButton.style.borderRadius = "0.6rem";
addButton.style.padding = ".5rem";

addButton.value = "SaVe";
addButton.value = "ADD";

console.log(inputTag); //! It creates an array like for the items have this tag

const inputTagArr = [...inputTag]; //! having array
console.log(inputTagArr);

// [...inputTag].forEach((li) => console.log(li));

//* querySelector ------> can be used with .class, #id, tag -----> selects just one of the item with classor tag and that is the first element.

const header = document.querySelector("#header");
console.log(header.innerText);
const header2 = document.querySelector(".header");
console.log(header2.innerText);
const header3 = document.querySelector("header");
console.log(header3.innerText);

const item = document.querySelector("section.add-item #btn");
console.log(item.value);

const react = document.querySelector(".item-list ul li:nth-child(4)");
console.log(react);

//* querySelectorAll ------> can be used with .class, #id, tag -----> selects all of the item with class or tag.

const listeler = document.querySelectorAll("ul li");
console.log(listeler); //! returns NodeList which supports forEach function.

// listeler.forEach((li) => console.log(li));

for (const liste of listeler.values()) {
  //! the item itself
  console.log(liste);
}
for (const liste of listeler.keys()) {
  //!sıra numarası 0, 1, 2, ...
  console.log(liste);
}
for (const liste of listeler.entries()) {
  //! both item and sıra numarası
  console.log(liste);
}
