var chart = document.getElementById("chart");
var blank = document.getElementById("blank");


function showChart() {
    chart.style.left = "75%";
    $("#blank").show();
}

$(document).ready(function () {
    $("#chartLogo").click(function (e) {
        e.preventDefault();
        //chart.style.right=0;
        $("#chart").show();
        setTimeout(showChart,0.5);
    });
    $("#blank").click(function (e) {
        e.preventDefault();
        chart.style.left = "100%";
        $("#blank").hide();
        $("#chart").hide(300);
    });
    $("#back").click(function (e) { 
        e.preventDefault();
        chart.style.left = "100%";
        $("#blank").hide();
        $("#chart").hide(300);
      });
});