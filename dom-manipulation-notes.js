//what is the DOM?

//steps to manipulate an element:

// 1. make sure html has id and onclick
// 2. write function to match onclick
// 3. grab an html element by id
// 4. change something about it.

//changing inner HTML
let image = document.querySelector("img")
 let titleButton = document.querySelector("#title")
 titleButton.addEventListener ("mouseover",()=>{
   let animalTitle = document.querySelector("h1")
   animalTitle.innerHTML = "your vbucks are generating"
})

 let Help = document.querySelector("#Help")
 Help.addEventListener ("click",()=>{
   let assist = document.querySelector("h2")
   assist.innerHTML = "just fill out the human verfication"
 })
//changing an attribute
let imageButton = document.querySelector("#image")
imageButton.addEventListener("click", ()=>{
image.setAttribute("src", "https://news.bitcoin.com/wp-content/uploads/2018/07/korean-government-criticized.png")
})
//changing the style
let sizeButton = document.querySelector("#size")
sizeButton.addEventListener("click",()=>{
  image.style.height = "200px"
})

let stop = document.querySelector("#remove")
stop.addEventListener ("click",()=>{
  let vv = true
  while (vv){
  body.innerHTML+="microsoft virus on ur mack. totaly propable"
  }
})

let background = document.querySelector("#cc")
background.addEventListener("click",()=>{
let body = document.querySelector ("body")
 body.style.background = "#000000"
})
//let body = document.querySelector ("body")
//body.addEventListener("mousemove",()=>{
  //alert ("virus, virus, virus, call microsoft support at (*)***-****-***")
//})

//hw = add two new buttons 1.) remove image 2.)change the background color to black
