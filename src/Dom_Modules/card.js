function card(title,description,dueDate,priority){
    let container=document.createElement('dialog')
    let domTitle=document.createElement('h3')
    let domDescription=document.createElement('p')
    let domDueDate=document.createElement('p')
    let domPriority=document.createElement('div')
    container.classList.add('card')



    if(priority==0){domPriority.style.backgroundColor='green'}
    else if(priority==1){domPriority.style.backgroundColor='orange'}
    else{domPriority.style.backgroundColor='red'}


    let arr=[domTitle,domDescription,domDueDate,domPriority]
    let arr2=[title,description,dueDate,priority]
    arr.forEach(e=>container.appendChild(e))

    for(let i=0;i<arr.length;i++){
        arr[i].innerText=arr2[i]
    }

    container.id=title

    return container
}

function miniature(title,priority,project){
    let container=document.createElement('div')
    let domTitle=document.createElement('h3')
    let domPriority=document.createElement('div')
    let p=document.createElement('p')
    p.innerText=`${project}`
    p.classList.add('hidden')
    container.classList.add('miniature')

    domTitle.innerText=title

    if(priority==0){domPriority.style.backgroundColor='green'}
    else if(priority==1){domPriority.style.backgroundColor='orange'}
    else{domPriority.style.backgroundColor='red'}

    container.appendChild(domTitle)
    container.appendChild(domPriority)
    container.appendChild(p)

    return container


}



export{card,miniature}