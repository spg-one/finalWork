var slid = document.getElementById("banner");
var imgwidth = document.getElementsByClassName("m");
var oli = document.getElementsByClassName("clickCircle");
var i = 0;
auto();
oli[0].style.cssText = "background:#000000;color:#fff;";
function auto() {

    time = setInterval(function () {
        i++;
        if (i <= 4) {
            slid.style.left = slid.offsetLeft - 1300 + "px";
            oli[i].style.cssText = "background:#000000;color:#fff;";
            oli[i - 1].style.cssText = "background:none;color:#000;";
        } else {
            slid.style.left = "0px";
            oli[4].style.cssText = "background:none;color:#000;";
            oli[0].style.cssText = "background:#000000;color:#fff;";
            i = 0;
        }
        console.log(i);

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
        slid.style.left = -m * 1300 + "px";
        i = m;
        auto();
        console.log(i);
    }
}    
