function Book(title,author,pages,readStatus){
    this.title = title;
    this.author= author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.info = function(){
    return `${this.title} by ${this.author}, ${pages} pages, ${readStatus ? 'have read' : 'not read yet'}`
    }
}
let theHobbit = new Book("The Hobbit","J.R.R. Tolkien",295,false)
console.log(theHobbit.info())