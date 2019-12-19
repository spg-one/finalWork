var table = document.getElementById("biaotou");
var sum = 0;
var sumEle = document.getElementById("sum");

$(document).ready(function () {
    var dishCountList = [0, 0, 0, 0, 0];
    var dishCount = localStorage.length;
    for (var i = 1; i <= dishCount; i++) {
        
        for (var m = 0; m < 5; m++) {
            if (localStorage.getItem(i) == pathList[m]) {
                dishCountList[m]++;
            }
        }
    }
    for (var i = 0; i < 5; i++) {
        if (dishCountList[i] != 0) {
            var path = pathList[i]
            var name = imgToName[path];
            var price = nameToPrice[name];
            
            var orderItem = document.createElement("tr");
            
            orderItem.innerHTML = "<td style='padding-top: .5rem;'><img src="+path+" style='width: 11rem;'></td><td style='padding-top: .5rem;'>"+name+"</td><td style='padding-top: .5rem;'>"+dishCountList[i]+"</td><td style='padding-top: .5rem;'>   ￥"+price+"</td><td style='padding-top: .5rem;'><img src='image/delete.png' class='delete' imgpath="+path+"></td>";
            table.appendChild(orderItem);
            
            sum=sum+price*dishCountList[i];
        }

    }
    sumChange(sum);
    
});

$(".orderBtn:first").click(function (e) { 
    e.preventDefault();
    if(sum==0){
        var payback = prompt("啥都没选买个锤子!");
    }
    else{
        var payback = prompt("别想了你买不起的");
    }
    console.log(payback);
});
$(".orderBtn:last").click(function (e) { 
    e.preventDefault();
    window.location.href="index.html";
});
function sumChange(count){
    sumEle.innerHTML="￥"+count;
}