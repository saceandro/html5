function DRW() {
    var CVS = document.getElementById("CVS");
    var CNT = CVS.getContext("2d");
    CNT.beginPath();
    CNT.moveTo(50,50);
    CNT.lineTo(200,200);
    CNT.lineTo(0,200);
    CNT.closePath();
    CNT.stroke();
}