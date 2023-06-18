function update() {
    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    if (localStorage.getItem('itemJson') == null) {
        itemJsonArray = [];
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));
    }
    else {
        itemJsonArrayStr = localStorage.getItem('itemJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));
    }

    //updating table
    tableBody = document.getElementById("tableBody");
    let str = "";
    itemJsonArray.forEach((element, index) => {
        str +=`
            <tr>
                <th scope="row">${index + 1}</th>
                <td>${element[0]}</td>
                <td>${element[1]}</td>
                <td><button class="btn btn-sm btn-primary">Delete</button></td>
            </tr>`;
    });
    tableBody.innerHTML = str;
} 
add = document.getElementById("add");
add.addEventListener("click", update);
update();