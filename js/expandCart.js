var cart = document.getElementById("cart");
var blank = document.getElementById("blank");

function showCart() {
    cart.style.left = "75%";
    $("#blank").show();
}

$(document).ready(function () {
    $("#cartLogo").click(function (e) {
        e.preventDefault();
        $("#cart").show();
        setTimeout(showCart, 0.5);
    });
    $("#blank").click(function (e) {
        e.preventDefault();
        cart.style.left = "100%";
        $("#blank").hide();
        $("#cart").hide(300);
    });
    $("#back").click(function (e) {
        e.preventDefault();
        cart.style.left = "100%";
        $("#blank").hide();
        $("#cart").hide(300);
    });
});