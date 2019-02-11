/*
	element：代表要移动的元素
	targetVal：移动目标距离
	speed：移动每次速度，每次移动距离
 */
var dsq;
//把移动效果封装函数中
function move (element,targetVal,speed) {

	//在启动定时器之前要把上一个当前清除，保证页面只有一个定时器
	window.clearInterval(dsq);
	console.log(dsq);

	dsq = window.setInterval(function () {

		// 获取元素之前左端距离
		// 每次移动的距离
		var leftVal = element.offsetLeft;

		//最大距离
		if (leftVal == targetVal) {
			window.clearInterval(dsq);
			return;
		}

		// 移动的时候有两种可能性
		// 第一种可能：剩下的距离足够再继续移动一次
		// 第二种可能：剩下的距离不够在继续移动一次：直接把目标的距离给元素
		if ( Math.abs(targetVal - leftVal) < speed) {

			element.style.top = targetVal + 'px';

		}else {
			// leftVal = leftVal + speed;
			if (targetVal - leftVal > 0) {
				leftVal = leftVal + speed;
			}else{
				leftVal = leftVal - speed;
			}

			//赋值给div的left
			element.style.top = leftVal + 'px';
		}

	},10);

}
