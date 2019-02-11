// 定义一个下标
var index = 0;

// 给右按钮注册事件
var right = document.querySelector('.right');
right.onclick = function () {

    if (index == 3) {
        index = -1;
    }
    index++;

    $('#banner .item').eq(index).addClass('active').siblings().removeClass('active'); 
    $('.carousel-indicators li').eq(index).addClass('active').siblings().removeClass('active'); 
};

// 给左按钮注册事件
var left = document.querySelector('.left');
left.onclick = function () {

    if (index == 0) {
        index = 4;
    }
    index--;

    $('#banner .item').eq(index).addClass('active').siblings().removeClass('active'); 
    $('.carousel-indicators li').eq(index).addClass('active').siblings().removeClass('active'); 
};