var btn=document.getElementById("addButton");

$(document).ready(function () {
    $(".dishImg").mouseenter(function (e) { 
        
        e.preventDefault();
        var no = parseInt($(this).attr("no"));
        btn.style.bottom="0";
        btn.style.left=(no-1)*25+"%";
        $(".dish-description").show();
    });
    $(".dishImg").mouseleave(function (e) { 
       
        $(".dish-description").hide();
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

function test(){
    console.log(document.activeElement.tagName);
}