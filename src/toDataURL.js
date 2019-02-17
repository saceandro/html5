function INIT() {
    var CVS = document.getElementById("CVS");
    var CNT = CVS.getContext("2d");
    CNT.fillStyle = "rgb(0,0,255)";
    CNT.fillRect(20,20,100,100);
}

function DRW() {
    var IMG_1 = document.getElementById("IMG_1");
    var CSRC = document.getElementById("CVS").toDataURL();
    IMG_1.src = CSRC;
}