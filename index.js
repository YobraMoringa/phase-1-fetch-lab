function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
    .then(response => response.json())
    .then(booksArray => renderBooks(booksArray))
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    // console.log(book)
    // console.log(book.characters)
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  fetchBooks();
});
