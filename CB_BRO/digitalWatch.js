function updateClock(){
    const now=new Date();
    const hours=now.getHours().toString().padStart(2,0);
    const meridian=hours<=12? "AM" : "PM";
    const mins=now.getMinutes().toString().padStart(2,0);
    const secs=now.getSeconds().toString().padStart(2,0);
    const timeString=`${hours}:${mins}:${secs} ${meridian}`;
    document.getElementById("clock").textContent=timeString
}

updateClock();
setInterval(updateClock,1000);