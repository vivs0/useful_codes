// get the parent element of clicked element
function demo(btn){
    console.log(btn.parentNode.parentElement)
}


//get sibiling of clicked element
function demo(btn){
    $(btn.parentNode.parentElement.tagName+" td:nth-child(2)").text()
}

