function DRW() {
    var CVS = document.getElementById("CVS");
    var CNT = CVS.getContext("2d");
    CNT.beginPath();
    CNT.moveTo(50,50);
    CNT.quadraticCurveTo(100,200,150,50);
    CNT.stroke();
}