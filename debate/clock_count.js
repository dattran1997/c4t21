console.log('time_count');

addButton =document.getElementById('set-time-button');
addButton.addEventListener('click', function(){
    let minute = document.getElementById('minute').value;
    let second = document.getElementById('second').value;
    // console.log(minute+ " " +second);
    runCountDown(parseInt(minute),parseInt(second));
});


function runCountDown(setMinute,setSecond){
    var settingTime = new Date();
    settingTime.setMinutes(settingTime.getMinutes() + setMinute);
    settingTime.setSeconds(settingTime.getSeconds() + setSecond);
    console.log(settingTime.getTime());

    //update every 1 second
    var x = setInterval(function(){
        var now = new Date().getTime();
        var duration = settingTime.getTime() - now ;

        var minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((duration % (1000 * 60)) / 1000);

        // console.log(minutes);
        // console.log(seconds);

        document.getElementById('time-display').innerHTML = `${minutes} : ${seconds}`;

        if(duration < 0 ){
            clearInterval(x);
            document.getElementById('time-display').innerHTML = "Time UP !";
        }
    },1000);

}
