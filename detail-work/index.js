console.log('index js loaded');

//database link from data.js
var data_list = database;
// console.log(data_list);

var listContainer = document.getElementById('list-container');
// console.log(listContainer);

for(let i = 0; i < data_list.length; i++){
    listContainer.insertAdjacentHTML('beforeend',`
    <a href=./detail.html?id=${data_list[i].id}>
        <p >name: ${data_list[i].name}</p>
        <hr>
    </a>
    `)
}