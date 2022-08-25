console.log("JS library is Setup")

let myLibrary = []

// Book constructer

function book(title, author, pageCount, isRead) {
  this.title = title
  this.author = author
  this.pageCount = pageCount
  this.isRead = isRead
}

function addBookToLibrary() {
  let title = prompt("Name a book: ")
  let author = prompt("Author?")
  let pageCount = prompt("How Many Pages?")
  let isRead = prompt("Have you read it?")

  let book1 = new book(title,author,pageCount,isRead)
  let output = ("The book is " + book1.title + " by " + book1.author+ ". it is " +  book1.pageCount + " pages long.")
  document.querySelector(".word").innerHTML = (output)

}

addBookToLibrary()