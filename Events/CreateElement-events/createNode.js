console.log("**** CREATE NODE ****");
let langInput = document.querySelector("#input");

//!  1ST STEP CREATE
let newP = document.createElement("p");
console.log(newP); //!EMPTY

//! 2ND IF TEXT BASED ELEMENT CREATE TEXT NODE
let text = document.createTextNode(langInput.value);

//! 3RD APPEND (BAĞLA)
newP.appendChild(text);
console.log(newP); //! NOT EMPTY

//! 4TH APPENDING NEW ELEMENT TO DOM TREE (NEREYE KOYACAN)
let main = document.querySelector("main");
main.appendChild(newP);
//* append child method

let section = document.querySelector(".item-list");
section.before(newP);
//* before after method (more spesific)

//******** ID, CLASS
//?  way 1 element.id,className...

newP.id = "paragraf";
// newP.className = "par center";

//? way 2 setAttribute

newP.setAttribute("id", "new-id");
// newP.setAttribute("class", "new-class");

//? way 3 classList

newP.classList.add("bg-danger", "border", "border-2", "border-success");

console.log(newP.classList.contains("new-class")); //* false

if (newP.classList.contains("border")) {
  newP.classList.add("new-class");
}
console.log(newP.classList.contains("new-class")); //* true

//* classList.remove()
if (newP.classList.contains("border")) {
  newP.classList.remove("new-class");
}
console.log(newP.classList.contains("new-class")); //* true

//* classList.toggle() if contains deletes, else adds
newP.classList.toggle("par");

//* --------------- ID, CLASS GIBI OZELLIKLERI OKUMA ----------------
//?  way 1
console.log(newP.id);
console.log(newP.className);

//?  way 2
console.log(newP.getAttribute("class")); //! type,name,id,value ...

//* --------------- CREATING NEW ELEMENT (INNERHTML) ----------------
let newDiv = document.createElement("div");
newDiv.id = "my-div";
section.after(newDiv);

newDiv.innerHTML += `<ul>
<li>C++</li>
<li>Javascript</li>
<li>C#</li>
<li>GO</li>
</ul>`;

//* ===============================================================
//*                             EVENTS
//* ===============================================================

let heading1 = document.querySelector("header h1");

heading1.onmouseover = function () {
  heading1.style.color = "red";
};
heading1.onmouseout = function () {
  heading1.style.color = "black";
};

let printHello = () => {
  document.write("Hello");
};
//! EVENTS: onload => runs after html, css is loaded.
window.onload = printHello();

//!
window.addEventListener("load", () => {
  document.getElementById("input").focus();
});

let addBtn = document.querySelector("#btn");
// let li = document.createElement("li");

addBtn.addEventListener("click", (e) => {
  //   console.log("clicked");
  //   console.log(e); //! parameter gives the all info about event

  if (!langInput.value) {
  } else {
    let li = document.createElement("li");
    let text = document.createTextNode(langInput.value);
    li.appendChild(text);
    document.querySelector("ul").appendChild(li);
    langInput.value = "";
    langInput.focus();
  }
});

let del = document.querySelector("#delBtn");
let ul = document.querySelector("ul");

del.addEventListener("click", (e) => {
  console.log("del");
  ul.lastChild.remove();
  console.log(ul);
  //   ul.lastChild.remove(); //! 2 times because of the li element and text of it
});

langInput.addEventListener("keydown", (e) => {
  if (e.code == "Enter") {
    addBtn.click();
  }
});
