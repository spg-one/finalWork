$(document).ready(function () {
    $("#login").click(function (e) { 
        e.preventDefault();
        var payback = prompt("不想做登录了");
        console.log(payback);
    });
});