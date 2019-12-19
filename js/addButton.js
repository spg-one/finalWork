var btn = document.getElementsByClassName("dish-description");

$(document).ready(function () {
    $(".dishImg").mouseenter(function (e) {
        e.preventDefault();
        $(this).find(".dish-description").show(400);
    });
    $(".dishImg").mouseleave(function (e) {
        $(this).find(".dish-description").hide(400);
    });
});