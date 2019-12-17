$(document).ready(function () {
    $("#login").click(function (e) { 
        e.preventDefault();
        var payback = prompt("做梦呢！");
        console.log(payback);
    });
});