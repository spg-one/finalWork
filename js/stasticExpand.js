var ClickCount = [0, 0, 0];

$(document).ready(function () {
    $(".stasticToggleSwitch").click(function (e) {

        ClickCount[$(this).attr("no")]++;
        console.log(ClickCount[$(this).attr("no")]);
        e.preventDefault();
        var chart = $(this).attr("chart")
        if ((ClickCount[$(this).attr("no")] % 2) == 1) {
            $("#" + chart).hide(400);
            $(this).html("▶");
        }
        else {
            $("#" + chart).show(400);
            $(this).html("▼");
        }
    });
});