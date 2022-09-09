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
  clear();
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
  read.textContent = book.status
  card.appendChild(author)
  card.appendChild(title)
  card.appendChild(pages)
  read.onclick = function(){toggleRead(indexT)};
  read.setAttribute('id',('t'+indexT));
  let readColor =  'read'
  if (book.status === false){
    readColor = 'not-read'
  }
  btn.onclick = function(){myScript(indexT)};
  card.appendChild(read)
  card.appendChild(btn)
  card.setAttribute('id',indexT)
  card.classList.add('card', readColor);
  stand.appendChild(card);
}

function toggleRead(indice){
  if (Library[indice].status === false) {
    Library[indice].status = true
  } else {
    Library[indice].status = false
  }
  updatebooks();
}
const updatebooks = () => {
  stand.innerHTML = '';
  for (let book of Library) {
    if (containsObject(book,Stand) === false) {
      createCards(book,Library.indexOf(book));
    }
  }
}

function myScript(indice){
  document.getElementById(indice).remove();
  Library.splice(indice,1);
}

function containsObject(obj, list) {
  return list.some(elem => elem === obj)
}

function clear(){
  document.getElementById("myForm").reset();
}
//validanting form 

// const titleForm = document.getElementById("bookTitle");

// titleForm.addEventListener("input", (event) => {
//   if (titleForm.validity.typeMismatch) {
//     titleForm.setCustomValidity("I am expecting a book title!");
//     titleForm.reportValidity();
//   } else {
//     titleForm.setCustomValidity("");
//   }
// });

