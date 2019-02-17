function DRW() {
    var CVS = document.getElementById("CVS");
    var CNT = CVS.getContext("2d");
    CNT.rect(0,0,100,100);
    CNT.stroke();
    CNT.clip();
    CNT.beginPath();
    var SANG = 0;
    var EANG = 2 * Math.PI;
    CNT.arc(100,100,90,SANG,EANG,false);
    CNT.stroke();
    CNT.fillStyle = "rgb(255,0,0)";
    CNT.fill();
}
