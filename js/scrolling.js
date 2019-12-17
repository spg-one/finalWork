var slid = document.getElementById("banner");
var imgwidth = document.getElementsByClassName("scrollingImg");
var oli = document.getElementsByClassName("clickCircle");
var i = 0;
var availableWidth = document.body.clientWidth;
auto();
oli[0].style.cssText = "background:#000000;color:#fff;";

window.onload=function(){
    $(".scrollingImg").width(availableWidth*0.9);
    $("#banner").width(availableWidth*4.5);
    $(".daily-dish").width(availableWidth*0.9);
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

    }, 3500)

}

for (var j = 0; j <= 4; j++) {
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
        for(var temp = 0;temp<=4;temp++){
            if(temp==m){
                oli[temp].style.cssText = "background:#000000;color:#fff;";
            }
            else{
                oli[temp].style.cssText = "background:none;color:#000;";
            }
            
        }
        auto();
    }
}    
