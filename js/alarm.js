var button = document.getElementById("btn");
var h1 = document.getElementById("h1");
var h2 = document.getElementById("h2");
var m1 = document.getElementById("m1");
var m2 = document.getElementById("m2");
var dy = document.getElementById("date");
var alarm = document.getElementById("audio");

button.addEventListener("click", () => {
    var hour = h1.value + h2.value;
    var min = m1.value + m2.value;
    let cur;

    let d = new Date();

    let da = dy.value;
    let x = da.split("/");
    let year = Number(x[2]);
    let month = Number(x[1]) - 1;
    let day = Number(x[0]);
    try {
        d.setFullYear(year, month, day);
        d.setHours(Number(hour));
        d.setMinutes(Number(min));
        if (d < cur) {
            throw "Invalid Date";
        }
        console.log(d);
        var timer = setInterval(() => {
            cur = new Date();
            console.log(cur);
            var remtime = d.getTime() - cur.getTime();
            console.log(remtime, timer);
            if (remtime < 0) {
                alarm.play();
                clearInterval(timer);
            }
        }, 1000);
        document.getElementById("successAlert").style.display = "block";
        setTimeout(() => {
            document.getElementById("successAlert").style.display = "none";
        }, 4000);
    } catch (e) {
        console.log("ERROR");
    }


});