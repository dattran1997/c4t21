console.log('js loaded');

var loginList =[];


function formSubmit(event){
    event.preventDefault();
    let loginCheck = false;
    
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // đọc data check xem có dữ liệu ko
    let dataCheck = localStorage.getItem("userdata");
    
    if (dataCheck != null){
        // get data in list
        loginList = JSON.parse(localStorage.getItem("userdata"));

        for(let i = 0; i < loginList.length; i++){
            // kiểm tra tk & mk có trong db ko
            if(loginList[i].username === username && loginList[i].password === password){
                loginCheck = true;
            }
        }

        // thông báo khi đăng nhập thành công và chưa thành công
        if(loginCheck === true){
            alert('login successful');
            // do something

        }else{
            alert('username or password incorrect');
        }
    }else{
        alert('account not available register first!');
    }


}