let Products = [];

const Product = (code,description,price,stock)=>{
  const tellPrice = () => console.log(`${description} costs R$: ${price}`);
  return {code,description,price,stock,tellPrice};
}

const banana = Product('01','banana',2.5,100);
const maca = Product('02','maca',3,25);
const abacaxi = Product('03','abacaxi',10,6);
banana.tellPrice();
Products.push(banana,maca,abacaxi);

const createShoppingDisplay = (product) =>{
  const productCard = document.createElement('div');
  const code = document.createElement('p')
  const description = document.createElement('p');
  const price = document.createElement('p')
  const stock = document.createElement('p')
  code.textContent = `Código: ${product.code}`
  description.textContent = `Descrição: ${product.description}`
  price.textContent = `Preço: R$: ${product.price}`
  productCard.appendChild(code);
  productCard.appendChild(description);
  productCard.appendChild(price);
  document.body.appendChild(productCard).className = 'card';
}
const updateProducts = () => {
  for (let product of Products) {
    createShoppingDisplay(product);
  }
}

updateProducts();
// class Library {
//   constructor() {
//     this.books = []
//   }

//   addBook(newBook) {
//     if (!this.isInLibrary(newBook)) {
//       this.books.push(newBook)
//     }
//   }

//   removeBook(title) {
//     this.books = this.books.filter((book) => book.title !== title)
//   }

//   getBook(title) {
//     return this.books.find((book) => book.title === title)
//   }

//   isInLibrary(newBook) {
//     return this.books.some((book) => book.title === newBook.title)
//   }
// }

// const createBookCard = (book) => {
//   const bookCard = document.createElement('div')
//   const title = document.createElement('p')
//   const author = document.createElement('p')
//   const pages = document.createElement('p')
//   const buttonGroup = document.createElement('div')
//   const readBtn = document.createElement('button')
//   const removeBtn = document.createElement('button')

//   bookCard.classList.add('book-card')
//   buttonGroup.classList.add('button-group')
//   readBtn.classList.add('btn')
//   removeBtn.classList.add('btn')
//   readBtn.onclick = toggleRead
//   removeBtn.onclick = removeBook

//   title.textContent = `"${book.title}"`
//   author.textContent = book.author
//   pages.textContent = `${book.pages} pages`
//   removeBtn.textContent = 'Remove'

//   if (book.isRead) {
//     readBtn.textContent = 'Read'
//     readBtn.classList.add('btn-light-green')
//   } else {
//     readBtn.textContent = 'Not read'
//     readBtn.classList.add('btn-light-red')
//   }

//   bookCard.appendChild(title)
//   bookCard.appendChild(author)
//   bookCard.appendChild(pages)
//   buttonGroup.appendChild(readBtn)
//   buttonGroup.appendChild(removeBtn)
//   bookCard.appendChild(buttonGroup)
//   booksGrid.appendChild(bookCard)
// }