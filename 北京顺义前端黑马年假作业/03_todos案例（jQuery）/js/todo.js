// 功能描述:
    // 左下角类名为.todo-count的span中的数字会相应发生变化
$('.todo-count strong').html($('.todo-list li').length - $('.toggle:checked').length);
// 7 当添加任务/删除任务/勾选任务前面的空心圆/点击类名为toggle-all的input时,
mold();
//1 在类名为.new-todo的input输入内容后,按回车键会将内容添加到下方的.todo-list的ul列表中,形成一条任务
$(document).keydown(function (e) {
    // 得到键码值
    var code = e.keyCode; // 13
    // 获取内容
    var content = $('.new-todo').val();
    // 3 类名为.todo-list的ul列表中可以有重复内容,但不能添加空内容
    if (content != '') {
        if (code == 13 ) {
            $('.new-todo').val('');
            // 创建li
            var li = $('<li></li>');
            li.appendTo($('.todo-list'));
            // 创建div 添加到li里
            var div = $('<div class="view"></div>');
            div.appendTo(li);
            // 创建input 添加到li里
            var input = $('<input class="edit">').appendTo(li);
            input.appendTo(li);
            input.val(content);
            // 创建input 添加到div里
            // <!-- 每一个 todo 的单选框 -->
            $('<input class="toggle" type="checkbox"></input>').appendTo(div);
            // <!-- 每一个 todo 的内容显示 -->
            var label = $('<label></label>');
            label.html(content);
            label.appendTo(div);
            // <!-- 每一个 todo 的删除按钮 -->
            $('<button class="destroy"></button>').appendTo(div);

            // 左下角类名为.todo-count的span中的数字会相应发生变化
            // console.log($('.todo-list li').length);
            $('.todo-count strong').html($('.todo-list li').length)

            // 6 当点击删除按钮时,当前任务从列表中删除
            $('.destroy').click(function () {
                // var destroy = $('this');
                console.log($(this).parent().parent());
                $(this).parent().parent().remove();

                // 左下角类名为.todo-count的span中的数字会相应发生变化
                $('.todo-count strong').html($('.todo-list li').length);

            });
            // 7 当添加任务/删除任务/勾选任务前面的空心圆/点击类名为toggle-all的input时,
            mold();
            // 8 双击类名为.todo-list的ul中的每条任务,会切换为编辑状态,可以直接修改内容.按回车键确认修改或者点击其他位置确认修改
            Dblclick();
            
        }

    
    }else {
        // 2 当类名为.new-todo的input中无内容时,按回车键会弹出提示框,用于提醒用户输入内容
        if (code == 13 ) {
            alert('请输入内容');
        }
    }
});      
// 4 每条任务前方默认有空心圈,点击时,可以在打钩样式和空心样式反复切换
// 5 当鼠标滑过任务时,任务右侧的'删除'按钮显示出来
// 7 当添加任务/删除任务/勾选任务前面的空心圆/点击类名为toggle-all的input时,
    function mold () {
        $('.toggle').click(function () {
            console.log($(this).prop('checked'))
            if ($(this).prop('checked')) {
                $(this).parent().parent().addClass('completed');
                // console.log(1)
            }else {
                $(this).parent().parent().removeClass('completed');
                // console.log(2)
            }

            // 左下角类名为.todo-count的span中的数字会相应发生变化
            // console.log('选中的长度'+$('.toggle:checked').length);
            $('.todo-count strong').html($('.todo-list li').length - $('.toggle:checked').length)

        });
    }
    
// 8 双击类名为.todo-list的ul中的每条任务,会切换为编辑状态,可以直接修改内容.按回车键确认修改或者点击其他位置确认修改
function Dblclick () {
    $('.todo-list li').dblclick(function (e) {
        // console.log(target)
        // var nodeName = target.nodeName;
        // if (nodeName != 'INPUT') {
           // console.log(111)
        // console.log(this)
        $(this).addClass('editing');
        var that =  this;
        $(document).keydown(function (e) {
            // 得到键码值 
            var code = e.keyCode; // 16
            console.log(code)
            // 获取内容
            var content = $(that).children('input').val();
            if (code == 16 ) {
                // console.log(that)
                $(that).removeClass('editing');
                $(that).find('label').html(content);
            }
            
        }); 
        // }
        
    });
}
Dblclick();
// 9 右下角ClearAll按钮 清空ul列表中的所有任务
$('.clear-All').click(function () {
    $('.todo-list').empty();
    // 左下角类名为.todo-count的span中的数字会相应发生变化
$('.todo-count strong').html($('.todo-list li').length - $('.toggle:checked').length);
})
// 10 当鼠标位于clearAll按钮时,按钮样式和鼠标手势会发生变化
// 11 类名为toggle-all的input的作用是,当点击后 任务列表中的所有任务都处于已完成的状态(打钩),并且可以来回切换
// 12 当任务处于已完成状态时,任务内容有样式变化(如横线)

//     注意:左下角的类名为.todo-count的span中的数字表示未完成的任务数量
//         当任务左侧的空心圆为打钩状态时,表示当前任务已经完成
//         所有的jquery代码写在todo.js中

//         使用的技术:jquery操作DOM的方法 全选和反选
//                 keydown click dblclick事件
//                 动态创建元素 切换类名