    const myLibrary = [];
    const dialog = document.querySelector('.dialog');
    const addBookBtn = document.querySelector('.newBook');
const submitBtn = document.querySelector('.submitBtn')

submitBtn.addEventListener('click', function(e) {
    e.preventDefault();

    // Check if the form is valid
    if (document.querySelector('form').checkValidity()) {
        let inputTitle = document.querySelector('#titleField').value;
        let inputAuthor = document.querySelector('#authorField').value;
        let inputPages = document.querySelector('#pages').value;
        let inputRead = document.querySelector('#readField').checked;
        
        console.log(inputTitle, inputAuthor, inputPages, inputRead);
        document.querySelector('#titleField').value = '';
        document.querySelector('#authorField').value = '';
        document.querySelector('#pages').value = '';
        document.querySelector('#readField').checked =false ;
        // Rest of your code
        dialog.classList.add('dialogHidden');
        dialog.classList.remove('dialogShow');
    } else {
        // If the form is not valid, you might want to display an error message or take some other action.
        alert('Please fill in all fields.');
    }
});

function saveDataAndSend(){

}
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
            createAndAppendElement(newCard, `${book.readStatus ? 'read' : 'not read yet'}`, 'elInCard');

            container.appendChild(newCard);
        });
    }

    let hobbit = addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false);
    let b = addBookToLibrary('abcdfdffdfdfdfdffdfsfdsfdsfdsfsdfffsdfds44334fddfdfdffddfdfdfdf', 'ddd,,d,d,d', 545, true);
    displayBooks(myLibrary);
