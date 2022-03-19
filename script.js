const fill = document.querySelector(".fill")
const emptyBoxes = document.querySelectorAll('.empty')

fill.addEventListener("dragstart", dragStart)
fill.addEventListener("dragend", dragEnd)

//Added Event listens to the empty div's 
for(const empty of emptyBoxes){
    empty.addEventListener("dragover", dragOver)
    empty.addEventListener("dragenter", dragEnter)
    empty.addEventListener("dragleave", dragLeave)
    empty.addEventListener("drop", dragDrop)
}


function dragStart(){
    this.className +=  " hold"
    setTimeout(()=> this.className = "invisible", 0)
    
}

function dragEnd(){
    this.className = "fill"
}


function dragOver(e){
    e.preventDefault() //stop the default from happening
}
function dragEnter(e){
    e.preventDefault()
    this.className += " hovered"
}
function dragLeave(){
    this.className = "empty"
}

function dragDrop(){
    this.className = "empty"
    this.append(fill)
}