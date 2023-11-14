// Define a Book interface for type checking
interface Book {
    title: string;
    author: string;
    year: number;
}

// Create an array of book objects
var books: Book[] = [
    { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", year: 1979 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 }
];

// Print information about each book
console.log("List of Books:");
for (var i = 0; i < books.length; i++) {
    console.log(`${i + 1}. Title: ${books[i].title}, Author: ${books[i].author}, Year: ${books[i].year}`);
}
