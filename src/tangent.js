function DRW() {
    var CVS = document.getElementById("CVS");
    var CNT = CVS.getContext("2d");
    CNT.beginPath();
    CNT.moveTo(10,200);
    CNT.arcTo(80,50,150,200,30);
    CNT.stroke();
}