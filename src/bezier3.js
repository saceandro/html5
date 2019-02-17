function DRW() {
    var CVS = document.getElementById("CVS");
    var CNT = CVS.getContext("2d");
    CNT.beginPath();
    CNT.moveTo(50,50);
    CNT.bezierCurveTo(0,180,100,10,150,200);
    CNT.stroke();
}