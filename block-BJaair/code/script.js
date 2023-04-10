let form = document.querySelector('form')
let root = document.querySelector('.root')
console.log(root)
let userData = JSON.parse(localStorage.getItem('cards')) || [];

form.addEventListener('submit' , (event)=>{
    event.preventDefault()
    let title = event.target.elements.title.value;
    let category = event.target.elements.category.value;
    userData.push({title,category})
    localStorage.setItem('cards',JSON.stringify(userData))
    CreateUI(userData,root)
    
    event.target.elements.title.value=''
    event.target.elements.category.value=''
})

// ##### handleEdit #####

function handleEdit(event,id,value,label){
 console.log(event,event.target,id,value)
 let input = document.createElement('input')
 let parentEle = event.target.parentElement
 parentEle.replaceChild(input,event.target)
 input.value=value
 input.addEventListener('keyup' ,(e)=>{
    if(e.keyCode === 13){
    let updatedValue = e.target.value
console.log(updatedValue);
userData[id][label] = updatedValue
    CreateUI()
    }
 })

}

// #### CreateUI ####

function CreateUI(data=userData , ul=root){
    ul.innerHTML=''
    let fragment = new DocumentFragment();
    data.forEach((userItem,index) =>{
        root.innerHtml = ''
        let li = document.createElement('li')
        let heading = document.createElement('h2')
        heading.innerText = userItem.title
        heading.addEventListener("dblclick" ,(e)=>handleEdit(e,index,userItem.title,'title'))
        let p = document.createElement('p')
        p.innerText = userItem.category
        p.addEventListener("dblclick", (e)=>handleEdit(e,index,userItem.category,'category'))
        li.append(p,heading)
        fragment.appendChild(li)
    })
   ul.append(fragment)
}

