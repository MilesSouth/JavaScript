//* ------ Selectors ------- */
let rockImg = document.querySelector("#rock");
let paperImg = document.querySelector("#paper");
let scissorImg = document.querySelector("#scissor");
let img = document.querySelector(".selection");
let yourChoiceDiv = document.querySelector("#your-choice");

//* ------- Variables ------- */
let choice = document.createElement("img");
//* ------- Event Listeners ------- */

img.addEventListener("click", (e) => {
  if (e.target.className === "selection") {
    console.log("ss");
  } else {
    let id = e.target.id;
    let image = document.getElementById(id);
    choice.src = image.src;
    yourChoiceDiv.appendChild(choice);
  }
});

//* ------- Functions ------- */
