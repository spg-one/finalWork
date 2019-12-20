var btn = document.getElementsByClassName("dish-description");
var abcd = document.getElementsByClassName("dishImg");

$(document).ready(function () {
    for (var i = 0;i<abcd.length;i++){
        var singleImgPath= abcd[i].firstElementChild.getAttribute("src");
        var singleImgName = imgToName[singleImgPath];
        var singleImgPrice = nameToPrice[singleImgName];
        abcd[i].lastElementChild.innerHTML=singleImgName+" ￥"+singleImgPrice+" <br>＋";
    }
    $(".dishImg").mouseenter(function (e) {
        e.preventDefault();
        $(this).find(".dish-description").show(400);
        
    });
    $(".dishImg").mouseleave(function (e) {
        $(this).find(".dish-description").hide(400);
    });
});