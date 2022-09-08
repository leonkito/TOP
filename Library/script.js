let Library = [];
let Stand = [];
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

const createCards = (book,indexT) =>{
  const card = document.createElement('div');
  const title = document.createElement('p');
  const author = document.createElement('p');
  const pages = document.createElement('p');
  title.classList.add('title');
  title.textContent = `Title: ${book.title}`
  author.classList.add('author');
  author.textContent = `Author: ${book.author}`
  pages.classList.add('pages');
  pages.textContent = `N° of pages: ${book.pages}`
  card.appendChild(author)
  const btn = document.createElement('button');
  card.appendChild(title)
  card.appendChild(pages)
  btn.onclick = function(){myScript(indexT)};
  btn.textContent = `Indice ${indexT}`
  card.appendChild(btn)
  card.setAttribute('id',indexT)
  stand.appendChild(card).className = 'card';
}
const updatebooks = () => {
  for (let book of Library) {
    if (containsObject(book,Stand) === false) {
      createCards(book,Library.indexOf(book));
      Stand.push(book);
    }
  }
}
function myScript(indice){
  document.getElementById(indice).remove();
}

//verify how to add book only once to the stand or to redifine stand every time a new book is add
function containsObject(obj, list) {
  return list.some(elem => elem === obj)
}