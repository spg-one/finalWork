var slid = document.getElementById("banner");
var imgwidth = document.getElementsByClassName("scrollingImg");
var oli = document.getElementsByClassName("clickCircle");
var i = 0;
var availableWidth = document.body.clientWidth;
auto();
oli[0].style.cssText = "background:#000000;color:#fff;";

window.onload=function(){
    $(".scrollingImg").width(availableWidth*0.9);
    $("#banner").width(availableWidth*0.9*5);
}

function auto() {

    time = setInterval(function () {
        i++;
        if (i <= 4) {
            slid.style.left = slid.offsetLeft - availableWidth*0.9 + "px";
            oli[i].style.cssText = "background:#000000;color:#fff;";
            oli[i - 1].style.cssText = "background:none;color:#000;";
        } else {
            slid.style.left = "0px";
            oli[4].style.cssText = "background:none;color:#000;";
            oli[0].style.cssText = "background:#000000;color:#fff;";
            i = 0;
        }
        console.log(document.body.clientWidth);

    }, 3500)

}

for (var j = 0; j <= 4; j++) {
    //console.log(imgwidth[j].index);
    imgwidth[j].index = j;
    oli[j].index = j;
    oli[j].onmouseover = function () {
        this.style.cssText = "background:#000000;color:#fff;"
        this.onmouseout = function () {
            this.style.cssText = "background:none;color:#000;"
        }
    }

    oli[j].onclick = function () {
        clearInterval(time);
        m = this.index;
        slid.style.left = -m * availableWidth*0.9 + "px";
        i = m;
        auto();
        console.log(i);
    }
}    
