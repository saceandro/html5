function DRW() {
    var CVS = document.getElementById("CVS");
    var CNT = CVS.getContext("2d");
    CNT.beginPath();
    CNT.moveTo(10,10);
    CNT.lineTo(10,180);
    CNT.lineTo(180,180);
    CNT.closePath();
    CNT.fillStyle = "rgb(255,0,0)";
    CNT.fill();
    //    CNT.stroke();
}