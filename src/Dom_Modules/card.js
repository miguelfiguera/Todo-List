function card(title,description,dueDate,priority){
    let container=document.createElement('div')
    let domTitle=document.createElement('h3')
    let domDescription=document.createElement('p')
    let domDueDate=document.createElement('p')
    let domPriority=document.createElement('div')
    container.classList.add('card')

    let arr=[domTitle,domDescription,domDueDate,domPriority]
    let arr2=[title,description,dueDate,priority]
    arr.forEach(e=>container.appendChild(e))

    for(let i=0;i<arr.length;i++){
        arr[i].innerText=arr2[i]
    }

    return container
}

function navbarButton(ProjectTitle){

    let buttonNew=document.createElement('button')
    buttonNew.innerText=ProjectTitle;
    buttonNew.classList.add('NavButton')
    return buttonNew
}




export{card,navbarButton}