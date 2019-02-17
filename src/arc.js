function DRW() {
    var CVS = document.getElementById("CVS");
    var CNT = CVS.getContext("2d");
    CNT.beginPath();
    var SANG = 0;
    var EANG = Math.PI;
    CNT.arc(100,100,90,SANG,EANG,false);
    CNT.stroke();
}