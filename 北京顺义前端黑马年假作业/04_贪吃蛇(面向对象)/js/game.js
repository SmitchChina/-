function Game () {
  // 获取一条蛇
  this.snake = new Snake();
   // 获取食物
  this.food = new Food();
  // 显示蛇
  this.snake.showSnake();
  // 食物随机
  this.food.randomLocation();

}

// 开始-方法
var timer;  // 定时器的标识
Game.prototype.start = function () {
  clearInterval(timer);
  // 把this代表的game对象暂存到that中（定时器中的this是指的widnow）
  var that = this;
  // 蛇要不断的移动
  timer = setInterval(function () {
    // 蛇要移动
    that.snake.move();
    // 检测蛇是否死亡
    var dead = that.snake.isDead();
    // 判断 蛇死亡了清除定时器
    if (dead) {
      // 清除定时器
      clearInterval(timer);
      // 显示游戏结束提示信息
      $('.dead').show(500);
    }

    // 是否吃掉食物
    var eat = that.snake.isEat(that.food);
    if (eat) {
      console.log('吃到了');
      // 食物重新随机位置
      that.food.randomLocation();
      // 增加一个蛇头
      that.snake.insertNewHead();
     
    }
  }, 50);

  // 键盘控制蛇移动
  $(document).keydown(function (e) {
    // 得到键码值
    var code = e.keyCode; // 37 38 39 40
    // 判断是哪个数值  改变方向 
    switch (code) {
      case 37:  // ←
        that.snake.direction = 'left';
        break;
      case 38:
        that.snake.direction = 'top';
        break;
      case 39:
        that.snake.direction = 'right';
        break;
      case 40:
        that.snake.direction = 'bottom';
        break;
    }
  });
};

// 重新开始
Game.prototype.reStart = function () {
  // 刷新页面
  location.reload();
}

// 停止
Game.prototype.stop = function () { 
  clearInterval(timer);
};
