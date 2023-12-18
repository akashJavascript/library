const myLibrary = [];
const dialog = document.querySelector('.dialog');
const addBookBtn = document.querySelector('.newBook');
const submitBtn = document.querySelector('.submitBtn');

submitBtn.addEventListener('click', function (e) {
    e.preventDefault();

    if (document.querySelector('form').checkValidity()) {
        let inputTitle = document.querySelector('#titleField').value;
        let inputAuthor = document.querySelector('#authorField').value;
        let inputPages = document.querySelector('#pages').value;
        let inputRead = document.querySelector('#readField').checked;
        addBookToLibrary(inputTitle, inputAuthor, inputPages, inputRead);
        document.querySelector('#titleField').value = '';
        document.querySelector('#authorField').value = '';
        document.querySelector('#pages').value = '';
        document.querySelector('#readField').checked = false;
        dialog.classList.add('dialogHidden');
        dialog.classList.remove('dialogShow');
    } else {
        alert('Please fill in all fields.');
    }
});

addBookBtn.addEventListener('click', function () {
    dialog.classList.remove('dialogHidden');
    dialog.classList.add('dialogShow');
});

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary(title, author, pages, readStatus) {
    let book = new Book(title, author, pages, readStatus);
    myLibrary.push(book);
    displayBooks();
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

function createAndAppendElement(parent, textContent, className) {
    let element = document.createElement('div');
    element.textContent = textContent;
    element.classList.add(className);
    parent.appendChild(element);
}

function displayBooks() {
    let container = document.querySelector('.bookContainer');
    container.innerHTML = '';

    myLibrary.forEach((book, index) => {
        
        let newCard = document.createElement('div');
        newCard.classList.add('card');

        createAndAppendElement(newCard, `"${book.title}"`, 'elInCard');
        createAndAppendElement(newCard, book.author, 'elInCard');
        createAndAppendElement(newCard, `${book.pages} pages`, 'elInCard');
        createAndAppendElement(newCard, `${book.readStatus ? 'read' : 'not read yet'}`, 'elInCard');

        let removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove Book';
        removeBtn.setAttribute('data-index', index);
        removeBtn.classList.add('elInCard');
        removeBtn.addEventListener('click', () => {
            removeBook(index);
        });

        newCard.appendChild(removeBtn);
        container.appendChild(newCard);
    });
}

let hobbit = addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false);
let b = addBookToLibrary('abcdfdffdfdfdfdffdfsfdsfdsfdsfsdfffsdfds44334fddfdfdffddfdfdfdf', 'ddd,,d,d,d', 545, true);
displayBooks();
