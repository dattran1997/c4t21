console.log('js loaded');

var loginList =[];

function formSubmit(event){
    event.preventDefault();
    let uservalid = false;

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    newUser = {
        username: username,
        password: password
    }

    // đọc data check xem có dữ liệu ko
    dataCheck = localStorage.getItem("userdata");

    // nếu có data thì đọc data cũ để ghi ra tránh ghi đè
    if (dataCheck != null){
        loginList = JSON.parse(localStorage.getItem("userdata"));
    }

    // check username đã tồn tại chưa
    for(let i = 0; i < loginList.length; i++){
        if(username === loginList[i].username){
            uservalid = true;
        }
    }

    if(uservalid == true){
        alert('username already taken')
    }else{
        try{
            // thêm data mới 
            loginList.push(newUser);
            localStorage.setItem("userdata", JSON.stringify(loginList));
            alert('register successful');
            window.location.href = 'index.html';
        }catch(e){
            alert('register fail try again');
        }
    }
    
}