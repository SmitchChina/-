// 食物-构造函数
function Food() {
  // 位置
  this.x = 0;   // 食物横向的位置
  this.y = 0;   // 食物的纵向位置
  this.elelment = $('<div class="food"></div>').appendTo('#map');  // 食物对应的div
}

// 方法 - 让位置随机
Food.prototype.randomLocation = function () {
  // 1）获取横纵向的最大的格子数 （用宽度 / 食物的宽）
  // 获取横向最大的格子数
  var maxXCount = $('#map').width() / 18;
  // 获取纵向最大格子数
  var maxYCount = $('#map').height() / 18;

  // 2）用随机数随机位置（最大值 = 求出了最大的格子数 ）
  // 随机横向范围内的一个格子数 [0,maxXCount);
  var xNum = parseInt(Math.random() * maxXCount);
  // 随机纵向范围内的一个格子数 [0,maxYCount);
  var yNum = parseInt(Math.random() * maxYCount);

  // 3）用求出的随机数乘以食物的宽度
  this.x = xNum * 18;
  this.y = yNum * 18;

  // - 4）把计算好的值赋值给食物的位置
  this.elelment.css({
    left: this.x,
    top:this.y
  });

};
