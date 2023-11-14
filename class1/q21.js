// Create an array of book objects
var books = [
    { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", year: 1979 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 }
];
// Print information about each book
console.log("List of Books:");
for (var i = 0; i < books.length; i++) {
    console.log("".concat(i + 1, ". Title: ").concat(books[i].title, ", Author: ").concat(books[i].author, ", Year: ").concat(books[i].year));
}
