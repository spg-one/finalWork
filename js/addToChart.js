var chartBottom = document.getElementById("chartBottom");
var dishCount = 0;
var chartNumber = document.getElementById("chartNumber");
var a = document.getElementsByClassName("chartImg");
var chartText = document.getElementById("chartText");

$(document).ready(function () {
  var imgCount = localStorage.length;
  dishCount = imgCount;
  chartNumber.innerHTML = dishCount;
  if (imgCount > 0) {
    chartText.innerHTML = "点击图片从购物车中删除";
    for (var i = 1; i <= imgCount; i++) {
      var pathTemp = localStorage.getItem(i);

      var newPic = document.createElement("img");
      newPic.setAttribute("src", pathTemp);
      newPic.setAttribute("style", "width:80%;margin-left:10%");
      newPic.setAttribute("class", "chartImg");
      newPic.setAttribute("no", i);
      chartBottom.appendChild(newPic);
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
    newPic.setAttribute("class", "chartImg");
    newPic.setAttribute("no", dishCount);
    chartBottom.appendChild(newPic);
    chartNumber.innerHTML = dishCount;
    chartText.innerHTML = "点击图片从购物车中删除";

  });
  $(".btn").click(function (e) {
    e.preventDefault();
    dishCount++;
    var path = $(this).prev().attr("src");
    localStorage.setItem(dishCount, path);

    var newPic = document.createElement("img");
    newPic.setAttribute("src", path);
    newPic.setAttribute("style", "width:80%;margin-left:10%");
    newPic.setAttribute("class", "chartImg");
    newPic.setAttribute("no", dishCount);
    chartBottom.appendChild(newPic);
    chartNumber.innerHTML = dishCount;
    chartText.innerHTML = "点击图片从购物车中删除";
  });

});

$("#chartBottom").on("click", ".chartImg", function () {
  dishCount--;
  chartNumber.innerHTML = dishCount;
  if (dishCount == 0) {
    chartText.innerHTML = "购物车空空如也";
  }
  var p = localStorage.length;
  var no = $(this).attr("no");
  localStorage.removeItem(no);
  $(".chartImg[no=" + no + "]").remove();
  for (var temp = no; temp < p; temp++) {
    localStorage.setItem(temp, localStorage.getItem(parseInt(temp) + 1));
    $(".chartImg[no=" + (parseInt(temp) + 1) + "]").attr("no",parseInt(temp));
  }
  localStorage.removeItem(p);
});