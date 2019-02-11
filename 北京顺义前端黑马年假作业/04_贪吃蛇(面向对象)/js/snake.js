function Snake () {
  // - 添加蛇的div  因为蛇是有蛇头和蛇身组成的所以用数组表示
  this.elements = [];
  // 给蛇添加方向属性
  this.direction = 'right';
}

// 方法 - 计算新蛇头的位置 给新蛇头使用
Snake.prototype.getNewHeadLocation = function () {
  // 1）计算新蛇头的位置// 检测是否有新蛇头，没有蛇头 位置是0，0
  var oldHead = this.elements[0];
  if (oldHead == undefined) {
    return { left : 0 , top :0 }
  }else {
    // 2) 若有蛇头 获取蛇头的位置 
    var x = oldHead.position().left;
    var y = oldHead.position().top;

    // 根据方向判断计算蛇头的位置
    if (this.direction == 'right') {
      x = x + 18;
    } else if (this.direction == 'left') {
      x = x - 18;
    } else if (this.direction == 'top') {
      y = y - 18;
    } else if (this.direction == 'bottom') {
      y = y + 18;
    }

    return { left: x, top: y };
  }

}


// 方法 - 增加蛇头
Snake.prototype.insertNewHead = function () {
  // 1） 获取将来新蛇头的位置
  var location = this.getNewHeadLocation();
  // 2）检测是否有旧的蛇头，若有，将旧的蛇头改为身体
  var oldHead = this.elements[0];
  if (oldHead != undefined) {
    oldHead.removeClass().addClass('snake-body');
  }
  // 3）动态创建新的蛇头追入到地图中
  var newHead = $('<div class="snake-head"></div>').appendTo('#map');
  // 4）把新蛇头放入到蛇组的最前面
  this.elements.unshift(newHead);
  //5）把计算好的位置给新的蛇头
  newHead.css({
    left: location.left,
    top: location.top
  })
}

// 方法-显示一蛇
Snake.prototype.showSnake = function () {
  for (var i = 1; i <= 3; i++) {
    this.insertNewHead();
  }
};

// 方法-蛇移动
Snake.prototype.move = function () { 
  //1）删除蛇组中最后一个元素并且地图中也删除
  var last = this.elements.pop();   // 从组中删除
  last.remove();    // 从地图中移除
  // 2. 增加蛇头
  this.insertNewHead();
};

// 方法-蛇是否撞墙死
Snake.prototype.isDead = function () { 
  // 1）检测蛇头的位置
  var oldHead = this.elements[0];
  // 2）获取蛇头的位置
  var x = oldHead.position().left;
  var y = oldHead.position().top;
  // 3）判断是否死亡 看蛇头的位置是否超过了地图的大小
  if (
    x < 0 ||
    x >= $('#map').width() ||
    y < 0 ||
    y >= $('#map').height()
  ) {
    return true;
  } else {
    return false;
  }
};


// 方法-蛇是否吃食物
// food 形参，接收传入的食物对象
Snake.prototype.isEat = function (food) { 
  // 获取蛇头
  var head = this.elements[0];
  // 获取蛇头的位置
  var left = head.position().left;
  var top = head.position().top;
  // - ​	判断 蛇头的位置知否等于食物的位置
  if (left == food.x && top == food.y) {
    return true;
  } else {
    return false;
  }
};