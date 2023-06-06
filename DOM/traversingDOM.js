console.log("***** TRAVERSING DOM *****");

const addItem = document.querySelector(".add-item");
console.log(addItem);

const item = addItem;

console.log(addItem.parentElement);
console.log(addItem.parentNode);
console.log(addItem.parentNode.parentNode); //! node and element same

const list = document.querySelector(".list");

console.log(list.closest("section")); //! When many traversing dom are needed like: .parentElement.parentElement.parentElement

//! Traversing Downwards
console.log(addItem.children);
console.log(addItem.lastElementChild);
console.log(addItem.lastChild); //! it takes from text elements different from lastElementChild

console.log(addItem.children[2]);
console.log(addItem.childElementCount);

//! Traversing previous, next
console.log(addItem.nextElementSibling);
console.log(addItem.nextSibling); //! it takes from text elements different from nextElementSibling
console.log(addItem.previousElementSibling); //* null
