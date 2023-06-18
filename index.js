add = document.getElementById("add");
add.addEventListener("click", ()=>{
    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    if(localStorage.getItem('itemJson')==null) {
        itemJsonArray = [];
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));
    } 
    else{
        itemJsonArrayStr = localStorage.getItem('itemJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));
    }
});