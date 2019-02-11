// 获取元素
// 获取删除全部商品按钮
const delAllBtn = document.getElementById('delAllBtn');
// 获取全部商品数量
const categoryNum = document.getElementById('category_num');
// 获取选中商品数量
const totalNum = document.getElementById('totalNum');
// 获得总价格
const totalPrice = document.getElementById('totalPrice');
// 获得结算按钮
const sumBtn = document.querySelector('.sum-btn');
// 获得tbody
const tBody = document.querySelector('tbody');
// 获取thead中的全选框
const choiceAll = document.querySelector('#toggle-all');
(function () {

  // code runs here ...
  fn();
// 初始化计算内容
function fn() {
    // 获得商品小计
    const sums = tBody.querySelectorAll('.sum');
    // 获取选择框
    const choice = tBody.querySelectorAll('.choice');
    // 获取选购的个数
    const number = tBody.querySelectorAll('.itxt');
    // 获取选中的选择框
    const checked = tBody.querySelectorAll('input:checked');
    // 获取单价标签
    const price = tBody.querySelectorAll('.price');

    let totalP = 0;
    let totalN = 0;
    // 遍历小计
    for (let j = 0; j < sums.length; j++) {
        sums[j].innerText = (price[j].innerText * number[j].value).toFixed(2);
    }

    //    遍历选择框，选中选择的，并计算总价格与商品个数
    for (let i = 0; i < choice.length; i++) {
        if (choice[i].checked) {
            totalP += sums[i].innerText - 0
            totalN += number[i].value - 0
        }
    }
    //   将计算的价格赋值给总价
    totalPrice.innerText = '¥' + totalP.toFixed(2)
    //   将获得的个数赋值给选中商品总量
    totalNum.innerText = totalN;
    // 设置全部商品
    categoryNum.innerText = choice.length;


    // 判断页面中有几个选择框被选中，并执行相应效果
    if (checked.length == 0) {
        sumBtn.classList.add('kong');
        delAllBtn.style.display = 'none';
    } else {
        sumBtn.classList.remove('kong');
        delAllBtn.style.display = 'block';
    }

    //    判断页面中有几个选择框被选中，如果选中的长度与选择框的长度相同就实现全选
    if (choice.length == 0) {
        choiceAll.disabled = true;
        choiceAll.checked = false;
        choiceAll.style.cursor = 'not-allowed';
    } else {
        choiceAll.checked = (checked.length == choice.length);
        choiceAll.disabled = false;
        choiceAll.style.cursor = '';
    }
}

// 全选效果
choiceAll.onclick = function () {
    const choice = tBody.querySelectorAll('.choice');
    for (let i = 0; i < choice.length; i++) {
        choice[i].checked = this.checked;
    }
    fn();
}

// 删除选中物品效果
delAllBtn.onclick = function () {
    // 获取选择框
    const choice = tBody.querySelectorAll('.choice');
    // 获取tbody中的行数
    const trs = tBody.querySelectorAll('tbody tr');
    // 遍历检测选中的选择框，并将下标值对应的行删除
    for (var i = 0; i < choice.length; i++) {
        if (choice[i].checked) {
            tBody.removeChild(trs[i]);
        }
    }
    fn();
}

// 事件委托，把剩下的删除，- + 号事件，input 的事件委托给 tBody 
tBody.addEventListener('click', function (e) {
    let target = e.target;
    let nodeName = target.nodeName;

    if (nodeName === 'INPUT') {
        fn()
    }
    // 删除效果
    if (nodeName == "A" && target.type == 'delBtn') {
        //    找到对应的tr将其删除
        const tr = target.parentNode.parentNode.parentNode;
        // 删除tr
        tBody.removeChild(tr);
        fn();
    }

    //  加法效果
    if (nodeName == 'A' && target.className.indexOf('plus') != -1) {
        // 获得前一个兄弟元素
        target.previousElementSibling.value++;
        fn();
    }

    // 减法效果
    if (nodeName === 'A' && target.className.indexOf('mins') !== -1) {
        // 获得后面一个兄弟元素，并进行判断
        if (target.nextElementSibling.value > 1) {
            target.nextElementSibling.value--
        } else {
            alert('至少买一件！')
        }
        fn();
    }
 

})
})()