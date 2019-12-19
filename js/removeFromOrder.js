$(document).ready(function () {
    $(".delete").mouseenter(function () { 
        $(this).attr("src", "image/delete_red.png");
        
    });
    $(".delete").mouseleave(function () { 
        $(this).attr("src", "image/delete.png");
        
    });
    $(".delete").click(function (e) { 
        e.preventDefault();
        var dc = localStorage.length;
        for(var i=1;i<=dc;i++){
            if(localStorage.getItem(i)==$(this).attr("imgpath")){
                localStorage.removeItem(i);
                for(var temp =i;temp<dc;temp++){
                    localStorage.setItem(temp,localStorage.getItem(parseInt(temp)+1));
                }
                localStorage.removeItem(dc);
                break;
            }
        }
        location.reload();
        
    });
});