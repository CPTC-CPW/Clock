window.onload = function(){

    currentTime();
}

/**
 * outputs current time to id="clock" every half second.
 */
function currentTime():void{
    //create a date object, set variables from hour/minute/second fields
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    // set to clock format
    m = addZero(m);
    s = addZero(s);

    //output format to #clock
    document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
    //output every half second
    let t = setTimeout(function(){ currentTime() }, 500);
}

/**
 * adds a zero in front of a number variable (clock format)
 * @param number to add a zero to
 * @returns number with 0 added in front of it
 */
function addZero(i):number {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

