
(function () {

  // code runs here ...
  // 1.tab切换
        // 获取元素
        // 鼠标进入事件
        $('.sort .item h3').mouseover(function () {
          //    鼠标进入时给对应的item加入类名active
          $(this).parent().addClass('active-item')
          // 显示其标签为div的子元素
          $(this).siblings().css('display','block')
      })
      // 鼠标离开事件
      $('.sort .item h3').mouseout(function () {
      // 鼠标离开时给对应的item加入类名active            
          $(this).siblings().css('display','none')
      // 隐藏其标签为div的子元素
          $(this).parent().removeClass('active-item')
      })



      // 2.轮播图
        // 记录下标
        var index = 0;
        // 获取可视区域宽度
        // 获取元素
        // 右按钮鼠标点击事件
        $('#btn-r').click(function () {
            // 改变下标值
            index++
             // 限制下标
            if (index > $('.banerArea .item').length - 1) {
                index = 0;
            }
            // 获取轮播图片
            $('.banerArea .item ')
            .eq(index)
            .addClass('active')
            .siblings()
            .removeClass('active')

               // 小圆点
          $('.carousel-indicators li') 
          .eq(index)    // 对应的小点
          .addClass('active')  // 加类名
          .siblings() // 同级兄弟
          .removeClass('active');  // 移除类名
           
        })
        // 左按钮鼠标点击事件
        $('#btn-l').click(function () {
            // 改变下标值
            index--
            // 限制索引
            if (index < 0) {
                index = $('.banerArea .item').length - 1;
            }
            // 获取轮播图片
            $('.banerArea .item ')
            .eq(index)
            .addClass('active')
            .siblings()
            .removeClass('active')

                  // 小圆点
          $('.carousel-indicators li') 
          .eq(index)    // 对应的小点
          .addClass('active')  // 加类名
          .siblings() // 同级兄弟
          .removeClass('active');  // 移除类名
           
           
        })

        // 点击小点切换
        // 注册事件
        $('.carousel-indicators li').click(function () {
            index = $(this).index();
            // 对应下标的图片显示
            $('.banerArea .item ')
            .eq(index)
            .addClass('active')
            .siblings()
            .removeClass('active')
             // 对应下标的小点突出显示
             $('.carousel-indicators li') 
            .eq(index)    // 对应的小点
            .addClass('active')  // 加类名
            .siblings() // 同级兄弟
            .removeClass('active');  // 移除类名
        })

        // 自动轮播事件
        var timer;
        function autoPlay() {
        timer = setInterval(function(){
            $('#btn-r').click();
        }, 2000)
        }
        autoPlay();

        // 鼠标进入轮播区停止自动轮播
        $('.banerArea').mouseenter(function(event) {
        clearInterval(timer);
        });

        // 鼠标离开轮播区开启自动轮播
        $('.banerArea').mouseleave(function(event) {
        autoPlay();
        });
})()