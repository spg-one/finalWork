/* function setCookie(cname,cvalue)
{
  document.cookie = cname + "=" + cvalue + "; ";
}

function getCookie(cname)
{
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) 
  {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
}

$(document).ready(function () {
    document.cookie="username=spg";
    $(".dish-description").click(function (e) { 
        e.preventDefault();
        var path = $(this).prev().attr("src");
        console.log(path);
        setCookie("1",path);
        console.log(getCookie("1"));
    });
}); */
var dishCount = 0;
$(document).ready(function () {
    localStorage.clear();
    document.cookie="username=spg";
    $(".dish-description").click(function (e) { 
        e.preventDefault();
        dishCount++;
        var path = $(this).prev().attr("src");
        localStorage.setItem(dishCount,path);
        console.log(localStorage.getItem(1));
        console.log(localStorage.getItem(2));
        console.log(localStorage.getItem(3));
        console.log(localStorage.getItem(4));
    });
});