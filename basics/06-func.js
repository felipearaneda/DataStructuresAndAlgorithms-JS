function Book(title, pages, isbn){
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
    }

var book = new Book('title', 'pag', 'isbn');

console.log(book.title);
book.title = 'New title';
console.log(book.title);

Book.prototype.printTitle = function(){
    console.log(this.title);
    };
book.printTitle();

function Book(title, pages, isbn){
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
    this.printIsbn = function(){
    console.log(this.isbn);
    }
   }
book.printIsbn();