console.log("JS library is Setup")

let myLibrary = []

const modalButton = document.querySelector(".modalButton")
modalButton.addEventListener("click", showModal)

const addButton = document.querySelector(".addButton")
addButton.addEventListener("click", function(){addBookToLibrary()})


//Selectors

const bookHolder = document.querySelector(".bookcontainer")

// Book constructer

function book(title, author, pageCount, isRead) {
  this.title = title
  this.author = author
  this.pageCount = pageCount
  this.isRead = isRead
}

function addBookToLibrary() {
  let title = document.querySelector("#book").value
  let author = document.querySelector("#author").value
  let pageCount = document.querySelector("#pgCount").value
  let isRead = document.querySelector("#isRead").value

  let book1 = new book(title,author,pageCount,isRead)
  let output = ("The book is " + book1.title + " by " + book1.author+ ". it is " +  book1.pageCount + " pages long.")
  document.querySelector(".word").innerHTML = (output)

  myLibrary.push(book1)

  test()

  clearInputs()

}

function showModal() {
  let show = document.querySelector(".modal")
  show.classList.toggle("hide")
}

function clearInputs() {
  
  let title = document.querySelector("#book")
  let author = document.querySelector("#author")
  let pageCount = document.querySelector("#pgCount")
  let isRead = document.querySelector("#isRead")

  title.value = null
  author.value = null
  pageCount.value = null
  isRead.value = null

}

function test(title, author, pageCount, isRead) {
  
  let container = document.querySelector(".bookcontainer")
  container.innerHTML = null
  
  for (let index = 0; index < myLibrary.length; index++) {
    
    let bktitle = myLibrary[index].title
    let bkauthor = myLibrary[index].author
    let bkpageCount = myLibrary[index].pageCount
    let bkisRead = myLibrary[index].isRead
    
    let cardd = document.createElement("div")
  
    let heading = document.createElement("h2")
    heading.innerHTML = bktitle
    cardd.appendChild(heading)
  
    let authorText = document.createElement("p")
    authorText.innerHTML = "Author: " + bkauthor
    cardd.appendChild(authorText)
  
    let pageCountText = document.createElement("p")
    pageCountText.innerHTML = bkpageCount + " Pages"
    cardd.appendChild(pageCountText)
  
    let isReadtext = document.createElement("p")
    isReadtext.innerHTML = "Have I read it?"
    cardd.appendChild(isReadtext)

    let isReadBox = document.createElement("input")
    isReadBox.innerHTML = bkisRead
    isReadBox.type = "checkbox"
    cardd.appendChild(isReadBox)
  
  
  
    cardd.classList.add("card")
    bookHolder.appendChild(cardd)
    
  }
}