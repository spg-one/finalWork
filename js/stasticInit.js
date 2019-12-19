var priceCanvas = document.getElementById("priceChart").getContext("2d");
var flavorCanvas = document.getElementById("flavorChart").getContext("2d");
var dishCanvas = document.getElementById("dishChart").getContext("2d");

$(document).ready(function () {
    var barChart = new Chart(dishCanvas, {
        type: 'bar',
        data: {
            labels: ["马卡龙", "提拉米苏", "南瓜芝士"],
            datasets: [{
                label: '购买数量',
                data: [0, 0, 0],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                ]
            }]
        }
    });
    var barChart = new Chart(priceCanvas, {
        type: 'polarArea',
        data: {
            labels: ["5元以下", "5-12元", "12-19元", "19-26元", "26元以上"],
            datasets: [{
                label: 'Price',
                data: [0, 0, 0, 0, 0],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)'
                ]
            }]
        }
    });
    var barChart = new Chart(flavorCanvas, {
        type: 'pie',
        data: {
            labels: ["甜食", "麻辣", "酸辣", "清淡", "其它"],
            datasets: [{
                label: 'Flavor',
                data: [0, 0, 0, 0, 0],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)'
                ]
            }]
        }
    });
    $("#p1").mouseenter(function () {
        var barChart = new Chart(dishCanvas, {
            type: 'bar',
            data: {
                labels: ["马卡龙", "提拉米苏", "南瓜芝士"],
                datasets: [{
                    label: '购买数量',
                    data: [21, 33, 25],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                    ]
                }]
            }
        });

    });

    $("#p1").mouseleave(function () {
        var barChart = new Chart(dishCanvas, {
            type: 'bar',
            data: {
                labels: ["马卡龙", "提拉米苏", "南瓜芝士"],
                datasets: [{
                    label: '购买数量',
                    data: [0, 0, 0],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                    ]
                }]
            }
        });

    });

    $("#p2").mouseenter(function () { 
        var barChart = new Chart(priceCanvas, {
            type: 'polarArea',
            data: {
                labels: ["5元以下", "5-12元", "12-19元", "19-26元", "26元以上"],
                datasets: [{
                    label: 'Price',
                    data: [130, 128, 86, 44, 38],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)'
                    ]
                }]
            }
        });
    });

    $("#p2").mouseleave(function () { 
        var barChart = new Chart(priceCanvas, {
            type: 'polarArea',
            data: {
                labels: ["5元以下", "5-12元", "12-19元", "19-26元", "26元以上"],
                datasets: [{
                    label: 'Price',
                    data: [0, 0, 0, 0, 0],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)'
                    ]
                }]
            }
        });
    });

    $("#p3").mouseenter(function () { 
        var barChart = new Chart(flavorCanvas, {
            type: 'pie',
            data: {
                labels: ["甜食", "麻辣", "酸辣", "清淡", "其它"],
                datasets: [{
                    label: 'Flavor',
                    data: [107, 121, 57, 76, 65],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)'
                    ]
                }]
            }
        });
    });

    $("#p3").mouseleave(function () { 
        var barChart = new Chart(flavorCanvas, {
            type: 'pie',
            data: {
                labels: ["甜食", "麻辣", "酸辣", "清淡", "其它"],
                datasets: [{
                    label: 'Flavor',
                    data: [0, 0, 0, 0, 0],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)'
                    ]
                }]
            }
        });
    });
});