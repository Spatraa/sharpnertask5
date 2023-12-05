// Getting the header title element
let headerTitle = document.getElementById('header-title');

// Creating a text node with 'Hello'
let helloText = document.createTextNode('Hello');

// Adding 'Hello' before 'Item Lister'
headerTitle.insertBefore(helloText, headerTitle.firstChild);

// Getting the items list
let itemList = document.getElementById('items');

// Finding the first list item
let firstListItem = itemList.firstElementChild;

// Creating a text node with 'Hello'
let helloTextItem = document.createTextNode('Hello');

// Adding 'Hello' before 'Item 1'
itemList.insertBefore(helloTextItem, firstListItem);
