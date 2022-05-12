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

// select element using ID & styling
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
var input = document.getElementsByTagName('input');
console.log(input);
input[0].style.backgroundColor = "red";
input[0].style.backgroundColor = "white";

// usage of querySelector
var navBar = document.querySelector('#navbar'); // ID
navBar.style.backgroundColor = 'yellow';
navBar.style.border = '3px 3px black';

var items = document.querySelector('.items'); // class
console.log(items);

var input = document.querySelector('input'); // Tag
input.style.backgroundColor = "orange";
input.style.backgroundColor = "white";
input.value = "Hello world";

var formText = document.querySelector('.container .frm #frmt');
console.log(formText);
formText.style.border = "1px solid black";
formText.style.padding = "12px";

// usage of querySelectorAll
var hd = document.querySelectorAll('#hdt');
var dv = document.querySelectorAll('div');
var mx = document.querySelectorAll('.items');
var li = document.querySelectorAll('.list li');
console.log(hd);
console.log(dv);
console.log(mx);
console.log(li);

//Pseudo classes
var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
console.log(odd);
console.log(even);

for (const i of odd) {
    i.style.border = '1px solid brown';
}

for (const i of even) {
    i.style.border = '1px solid green';
}

