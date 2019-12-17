var chart = document.getElementById("chart");
var blank = document.getElementById("blank");

$(document).ready(function () {
    $("#chartLogo").click(function (e) { 
        e.preventDefault();
        chart.style.left="75%";
        $("#blank").show();
    });
    $("#blank").click(function (e) { 
        e.preventDefault();
        chart.style.left="100%";
        $("#blank").hide();
    });
});