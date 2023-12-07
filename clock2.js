function showTime() {
    const time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let am_pm = "AM";

    if (hour >= 12) {
        if (hour > 12) hour -= 12;
        am_pm = "PM";
    } else if (hour == 0) {
        hour = 12;
        am_pm = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hour + ":" + min + ":" + sec + " " + am_pm;

    // Displaying the time
    document.getElementById("clock").innerHTML = currentTime;

    // Displaying the greeting
    let greeting;
    if (hour < 12) {
        greeting = "Good morning";
    } else if (hour < 20) {
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }
    document.getElementById("greeting").innerHTML = greeting;
}

showTime();

setInterval(showTime, 1000);