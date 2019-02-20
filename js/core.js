var can = document.getElementById("canvas");
var ctx,timer,bonusing;

function validate() {
    var rad = document.getElementById('radiusinput').value;

    if (isNaN(rad)) {
        alert('The Input that submited is Not a Number')
        document.getElementById('radiusinput').value = "";
    } else {
        var vol;
        rad = Math.abs(rad);
        vol = (4 / 3) * Math.PI * Math.pow(rad, 3);
        vol = vol.toFixed(4);
        document.getElementById('volume').innerText = vol;
        draw(rad)

    }
}

function draw(radius) {
    if (radius > 148) {
        alert('The circle is bigger than canvas. max radius 148 !')
    } else {
        ctx = can.getContext("2d");
        ctx.beginPath();
        ctx.arc(150, 150, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}

function clearcan() {

    ctx.clearRect(0, 0, 300, 300);
    //ctx.arc(150, 150, 30, 0, 2 * Math.PI);

    if (bonusing==1){
        ///שייך לשאלת בונוס
        clearInterval(timer);
    }
}

function autocirc() {
var i=1;
bonusing=1;
   timer =  setInterval(function () {
        ctx = can.getContext("2d");
        ctx.beginPath();
        ctx.arc(150, 150, i, 0, 2 * Math.PI);
        ctx.stroke();
        i++
        if(i>148){
            clearInterval(timer);
            clearcan();
           bonusing=0;
        }
    }, 100);

}