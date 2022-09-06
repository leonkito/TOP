let Library = [];

const stand = document.getElementById("stand");
const submitb = document.getElementById('submitBtn')
submitb.addEventListener("click", () => {
	addBook();
});

const inputGet = () =>{
  const bookTitle   = document.getElementById("bookTitle").value;
  const bookAuthor    = document.getElementById("bookAuthor").value;
  const bookPages = document.getElementById("bookPages").value;
  return Book(bookTitle,bookAuthor,bookPages);
}

function addBook () {
  const newBook = inputGet();

  Library.push(newBook);
  updatebooks();
}
const Book = (title,author,pages)=>{
  //const tellPages = () => console.log(`${title} has ${pages} pages`);
  return {title,author,pages};
}

const createCards = (book) =>{
  const card = document.createElement('div');
  const title = document.createElement('p');
  const author = document.createElement('p');
  const pages = document.createElement('p')
  title.textContent = `Title: ${book.title}`
  author.textContent = `Author: ${book.author}`
  pages.textContent = `N° of pages: ${book.pages}`
  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
  stand.appendChild(card).className = 'card';
}
const updatebooks = () => {
  for (let book of Library) {
    createCards(book);
  }
}
//verify how to add book only once to the stand or to redifine stand every time a new book is add