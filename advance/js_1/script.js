// examine the document object
console.dir(document);

// properties
console.log(document.URL);
console.log(document.characterSet);
console.log(document.lastModified);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.forms);

// chage values
document.title = "Document Object Model";
console.log(document.title);

// Select element using ID
console.log(document.getElementById('frmt'));

// innerText, innerHTML, textContent
var formTitle = document.getElementById('frmt');
formTitle.innerText = "Hello Add Items";
console.log(formTitle.innerText);
formTitle.innerHTML = "<i>Hello</i> Add Items";
console.log(formTitle.innerHTML);
formTitle.textContent = "Add Items";
console.log(formTitle.textContent);

// styling
var navBar = document.getElementById('navbar');
navBar.style.backgroundColor = "orange";

// Select element using class name
var items = document.getElementsByClassName('items');
console.log(items);
items[2].style.backgroundColor = "red";
for (const i of items) {
    i.style.backgroundColor = "white";
}

// select element using tag name
