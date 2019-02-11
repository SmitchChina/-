// 获取轮播图的
var banner = document.getElementById('banner');
// console.log(banner)
// 获取轮播图的高度
var height = Number(banner.offsetHeight);
console.log('高度是'+height)

// 获取item 
// var item = banner.querySelectorAll('.item');

// 定义一个下标
index = 0;
// 获取要移动的元素
var item = document.querySelector('.carousel-inner');
console.log(item);
// 给右按钮注册事件
var right = document.querySelector('.right');
right.onclick = function () {
    index++;
    console.log('下标是'+index);
    // console.log('item的'+item[1]);
    // 添加类名
    // item[index].className = 'active';

    // 移动的宽度
    var mo = -index * height;
    console.log(mo)
    console.log(mo)
    move(item,mo,100)
}