console.log('detail loaded');

// file:///Users/dattran/Desktop/code/C4T21/detail-work/detail.html?id=0
var id = window.location.href.split('=')[1];
console.log(id)

//database link from data.js
var data_list = database;

var detailContainer = document.getElementById('detail-container');
for(let i = 0; i < data_list.length; i++){
    if(data_list[i].id === parseInt(id)){
        detailContainer.insertAdjacentHTML('beforeend',`
            <div>
                <p >id: ${data_list[i].id}</p>
                <p >name: ${data_list[i].name}</p>
                <p >age: ${data_list[i].age}</p>
                <hr>
            </div>
        `);
    }
}



