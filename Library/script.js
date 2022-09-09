let Library = [];
let Stand = [];
const stand = document.getElementById("stand");
const submitb = document.getElementById('submitBtn')
submitb.addEventListener("click", () => {addBook();});

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
const Book = (title,author,pages,status)=>{
  status = false
  //const tellPages = () => console.log(`${title} has ${pages} pages`);
  return {title,author,pages,status};
}

const createCards = (book,indexT) =>{
  const card = document.createElement('div');
  const title = document.createElement('p');
  const author = document.createElement('p');
  const pages = document.createElement('p');
  const read = document.createElement('button');
  const btn = document.createElement('button');
  title.classList.add('title');
  title.textContent = `Title: ${book.title}`
  author.classList.add('author');
  author.textContent = `Author: ${book.author}`
  pages.classList.add('pages');
  pages.textContent = `N° of pages: ${book.pages}`
  btn.textContent = 'remove'
  read.textContent = 'not read'
  card.appendChild(author)
  card.appendChild(title)
  card.appendChild(pages)
  read.onclick = function(){toggleRead('t'+indexT)};
  read.setAttribute('id',('t'+indexT));
  btn.onclick = function(){myScript(indexT)};
  card.appendChild(read)
  card.appendChild(btn)
  card.setAttribute('id',indexT)
  stand.appendChild(card).className = 'card';
}

function toggleRead(indice){
  if (document.getElementById(indice).textContent === 'read') {
    document.getElementById(indice).textContent = 'not read'
  } else {
    document.getElementById(indice).textContent = 'read'
  }
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
  //Stand.splice(indice,1);
}

function containsObject(obj, list) {
  return list.some(elem => elem === obj)
}