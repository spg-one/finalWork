var btn = document.getElementsByClassName("dish-description");

$(document).ready(function () {
   

    $(".dishImg").mouseenter(function (e) {

        e.preventDefault();
        var no = parseInt($(this).attr("no"));
        console.log($(this).attr("no"));
        btn[no].style.left = no * 25 + "%";
        console.log(btn[no].style.left);
        $(this).find(".dish-description").show(400);
    });
    $(".dishImg").mouseleave(function (e) {
        var no = parseInt($(this).attr("no"));
        console.log($(this).attr("no"));
        $(this).find(".dish-description").hide(400);
    });
});

/*var dishimg = document.getElementsByClassName("dishImg")
for(var i in dishimg){
    dishimg[i].onmouseover=function(){
        //console.log($(this).attr("no"));
        var no = parseInt($(this).attr("no"));
        btn.style.bottom="0";
        btn.style.left=(no-1)*25+"%";
        $(".dish-description").show(500);
    }
}//*/

function test() {
    console.log(document.activeElement.tagName);
}