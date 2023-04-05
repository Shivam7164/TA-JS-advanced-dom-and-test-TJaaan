// console.log(quotes)
let root = document.querySelector('ul')
function allQuotes(){
  let max = 5
  let index = 0
for(let i=0;i<max;i++){
    let li = document.createElement('li')
    let blockquote = document.createElement('blockquote')
    let cite = document.createElement('cite')
    blockquote.innerText = quotes[index].quoteText
    cite.innerText = quotes[index].quoteAuthor
    li.append(blockquote,cite)
    root.append(li)
    index++
}
}
allQuotes()

document.addEventListener("scroll" , ()=>{
  let scrollTop = document.documentElement.scrollTop;
  let scrollHeight = document.documentElement.scrollHeight;
  let clientHeight = document.documentElement.clientHeight;
  if(scrollTop + clientHeight >= scrollHeight && index < quotes.length){
    allQuotes();
  }
});

window.addEventListener("DOMContentLoaded" , ()=>{
  alert('The content of the DOM is loaded')
  allQuotes();
})