const myLibrary = [];
function Book(title,author,pages,readStatus){
    this.title = title;
    this.author= author;
    this.pages = pages;
    this.readStatus = readStatus;
}
function addBookToLibrary(title,author,pages,readStatus) {
    let book = new Book(title,author,pages,readStatus);
    myLibrary.push(book)
    return book;
}

let hobbit = addBookToLibrary("The Hobbit","J.R.R. Tolkien",295,false)
let b = addBookToLibrary('abcdfdfdf',"ddd,,d,d,d",545,true)
console.log(hobbit)
console.log(myLibrary)
