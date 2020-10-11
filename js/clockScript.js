let getDate = function() {

    return d;
}
let t12, t24;
let stamp = "A.M.";

var for24 = document.getElementById("f24");
var for12 = document.getElementById("f12");

var twty_four = function() {
    document.getElementById("format").innerHTML = "24-Hour";
    t24 = setInterval(() => {
        let d = new Date();
        let hour = d.getHours();
        let minute = d.getMinutes();
        let sec = d.getSeconds();

        sec = sec < 10 ? '0' + sec : sec;
        minute = minute < 10 ? '0' + minute : minute;
        stamp = hour > 12 ? "P.M." : "A.M.";

        var x = document.getElementById("clock");
        x.innerHTML = `${hour}:${minute}:${sec} ${stamp}`;
        x.style.fontSize = "xxx-large";
        x.style.borderRadius = "7px";
        x.style.fontWeight = "500";

    }, 1000);
}

var twelve = function() {
    document.getElementById("format").innerHTML = "12-Hour";
    t12 = setInterval(() => {
        let d = new Date();
        let hour = d.getHours();
        let minute = d.getMinutes();
        let sec = d.getSeconds();

        stamp = hour > 12 ? "P.M." : "A.M.";
        hour = hour > 12 ? hour - 12 : hour;
        sec = sec < 10 ? '0' + sec : sec;
        minute = minute < 10 ? '0' + minute : minute;

        var x = document.getElementById("clock");
        x.innerHTML = `${hour}:${minute}:${sec} ${stamp}`;
        x.style.fontSize = "xxx-large";
        x.style.borderRadius = "7px";
        x.style.fontWeight = "500";
    }, 1000);
}

twelve();

for12.addEventListener("click", () => {
    clearInterval(t24);
    twelve();
})

for24.addEventListener("click", () => {
    clearInterval(t12);
    twty_four();

})