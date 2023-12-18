const myLibrary = [];

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

function addBookToLibrary(title, author, pages, readStatus) {
  let book = new Book(title, author, pages, readStatus);
  myLibrary.push(book);
  return book;
}

function createAndAppendElement(parent, textContent, className) {
  let element = document.createElement('div');
  element.textContent = textContent;
  element.classList.add(className);
  parent.appendChild(element);
}

function displayBooks(myLibrary) {
  let container = document.querySelector('.bookContainer');
  container.innerHTML = ''; // Clear the existing content of the container

  myLibrary.forEach(book => {
    let newCard = document.createElement('div');
    newCard.classList.add('card');

    // Create and append elements for title, author, pages, and readStatus
    createAndAppendElement(newCard, `"${book.title}"`, 'elInCard');
    createAndAppendElement(newCard, book.author, 'elInCard');
    createAndAppendElement(newCard, `${book.pages} pages`, 'elInCard');
    createAndAppendElement(newCard, `${book.readStatus?'read':'not read yet'}`, 'elInCard');

    container.appendChild(newCard);
  });
}

let hobbit = addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false);
let b = addBookToLibrary('abcdfdffdfdfdfdffdfsfdsfdsfdsfsdfffsdfds44334fddfdfdffddfdfdfdf', 'ddd,,d,d,d', 545, true);
console.log(hobbit);
displayBooks(myLibrary);
console.log(myLibrary);
