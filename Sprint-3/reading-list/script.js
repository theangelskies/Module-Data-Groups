// for the tests, do not modify this array of books
const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780465050659.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookCoverImage:
      "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780135957059.jpg",
  },
];

function readingList(books) {
  const list = document.getElementById("reading-list");
    books.forEach((book) => {
    const li = document.createElement("li");

    // Set background color
    li.style.backgroundColor = book.alreadyRead ? "green" : "red";
    li.style.padding = "10px";
    li.style.marginBottom = "10px";
    li.style.listStyle = "none";
    li.style.display = "flex";
    li.style.alignItems = "center";
    li.style.gap = "10px";

  });
}

// Call the function
readingList(books);
