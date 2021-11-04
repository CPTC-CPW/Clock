window.onload = function () {
    currentTime();
};
function currentTime() {
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    m = addZero(m);
    s = addZero(s);
    document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(function () { currentTime(); }, 500);
}
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
