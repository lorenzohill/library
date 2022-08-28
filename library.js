let myLibrary = []

let test = "testing git"

const modalButton = document.querySelector(".modalButton")
modalButton.addEventListener("click", showModal)

const addButton = document.querySelector(".addButton")
addButton.addEventListener("click", function(){addBookToLibrary()})


const removeButtonFunction = document.querySelectorAll(".remove")

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
  let isRead = document.querySelector("#isRead").checked

  let book1 = new book(title,author,pageCount,isRead)
  let output = ("New Book added! The book is " + book1.title + " by " + book1.author+ ". it is " +  book1.pageCount + " pages long.")
  document.querySelector(".word").innerHTML = (output)

  myLibrary.push(book1)

  updateLibrary()

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
  isRead.checked = null

}

function updateLibrary() {
  
  let container = document.querySelector(".bookcontainer")
  container.innerHTML = null
  
  for (let index = 0; index < myLibrary.length; index++) {
    
    let bktitle = myLibrary[index].title
    let bkauthor = myLibrary[index].author
    let bkpageCount = myLibrary[index].pageCount
    let bkisRead = myLibrary[index].isRead
    
    let cardd = document.createElement("div")
    cardd.id = index

    let removeBtn = document.createElement("div")
    removeBtn.innerHTML+= "X"
    removeBtn.classList.add("remove")
    removeBtn.addEventListener("click", function(){removeBook(index)})
    cardd.appendChild(removeBtn)
    
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

    let readbox = document.createElement("div")
    readbox.classList.add("unread")
    cardd.appendChild(readbox)


    if (bkisRead == true) {

      let readstatus = document.createElement("p")
      readstatus.innerHTML = "Read"
      readbox.appendChild(readstatus)

          
      let readstatusBtn = document.createElement("button")
      readstatusBtn.innerHTML = "Unread"
      readstatusBtn.addEventListener("click", function(){updateRead(index)})
      readbox.appendChild(readstatusBtn)
    

    }else{

      let readstatus = document.createElement("p")
      readstatus.innerHTML = "Not Read"
      readbox.appendChild(readstatus)

          
      let readstatusBtn = document.createElement("button")
      readstatusBtn.addEventListener("click", function(){updateRead(index)})
      readstatusBtn.innerHTML = "Read"
      readbox.appendChild(readstatusBtn)

    }
  
    cardd.classList.add("card")
    bookHolder.appendChild(cardd)
    
  }
}

function removeBook(index) {
  let removed = []
removed = myLibrary.splice(index, 1)
updateLibrary()

}

function updateRead(index) {
  if (!myLibrary[index].isRead) {
    myLibrary[index].isRead = true
  }else{
    myLibrary[index].isRead = false
  }
  
  updateLibrary()
}