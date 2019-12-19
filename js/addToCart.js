var cartBottom = document.getElementById("cartBottom");
var dishCount = 0;
var cartNumber = document.getElementById("cartNumber");
var a = document.getElementsByClassName("cartImg");
var cartText = document.getElementById("cartText");

$(document).ready(function () {
  var imgCount = localStorage.length;
  dishCount = imgCount;
  cartNumber.innerHTML = dishCount;
  if (imgCount > 0) {
    cartText.innerHTML = "点击图片从购物车中删除";
    for (var i = 1; i <= imgCount; i++) {
      var pathTemp = localStorage.getItem(i);

      var newPic = document.createElement("img");
      newPic.setAttribute("src", pathTemp);
      newPic.setAttribute("style", "width:80%;margin-left:10%");
      newPic.setAttribute("class", "cartImg");
      newPic.setAttribute("no", i);
      cartBottom.appendChild(newPic);
    }
  }

  $(".dish-description").click(function (e) {
    e.preventDefault();

    dishCount++;
    var path = $(this).prev().attr("src");
    localStorage.setItem(dishCount, path);

    var newPic = document.createElement("img");
    newPic.setAttribute("src", path);
    newPic.setAttribute("style", "width:80%;margin-left:10%");
    newPic.setAttribute("class", "cartImg");
    newPic.setAttribute("no", dishCount);
    cartBottom.appendChild(newPic);
    cartNumber.innerHTML = dishCount;
    cartText.innerHTML = "点击图片从购物车中删除";

  });
  $(".btn").click(function (e) {
    e.preventDefault();
    dishCount++;
    var path = $(this).prev().attr("src");
    localStorage.setItem(dishCount, path);

    var newPic = document.createElement("img");
    newPic.setAttribute("src", path);
    newPic.setAttribute("style", "width:80%;margin-left:10%");
    newPic.setAttribute("class", "cartImg");
    newPic.setAttribute("no", dishCount);
    cartBottom.appendChild(newPic);
    cartNumber.innerHTML = dishCount;
    cartText.innerHTML = "点击图片从购物车中删除";
  });

});

$("#cartBottom").on("click", ".cartImg", function () {
  dishCount--;
  cartNumber.innerHTML = dishCount;
  if (dishCount == 0) {
    cartText.innerHTML = "购物车空空如也";
  }
  var p = localStorage.length;
  var no = $(this).attr("no");
  localStorage.removeItem(no);
  $(".cartImg[no=" + no + "]").remove();
  for (var temp = no; temp < p; temp++) {
    localStorage.setItem(temp, localStorage.getItem(parseInt(temp) + 1));
    $(".cartImg[no=" + (parseInt(temp) + 1) + "]").attr("no", parseInt(temp));
  }
  localStorage.removeItem(p);
});