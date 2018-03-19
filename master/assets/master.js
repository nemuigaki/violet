/** 全局函数 **/
var width = 0;  // 全局 - 窗口宽度
var height = 0; // 全局 - 窗口高度
var canvas = document.getElementById('canvas1');    // 全局 - 主canvas
var ctx = canvas.getContext('2d');  // 全局 - 主ctx画笔
var starOpcity = 0; // 全局 - 星星全局透明度
var stars = []; // 全局 - 所有的星星
var windowPie = 1;  // 全局 - 当前工作区宽高比
var imgs = {
    starback: { url: 'assets/img/star-back1.jpg', dom: null, width: 1, height: 1, pie: 1},   // url图片URL，图片DOM，图片宽，图片高，图片宽高比
    all: 1,
    down: 0,
};    // 全局 - 所有需异步加载的图片资源

$(function(){
    // 窗口大小改变时触发
    $(window).on('resize', function(e){
        height = this.innerHeight;
        width = this.innerWidth;
        canvas.width = width;
        canvas.height = height;
        windowPie = width/height;

        starOpcity = 0;
        initStart(500);
    }).resize();
    /** 开始执行loading，等待所有的图片加载完成 **/
    onInit();
});

/**
 * 初始化相关
 * **/

// 开始加载
function onInit() {
    loadImg(imgs.starback, loadDown);  // 加载图片
    initStart(500);    // 创建星星对象
}

// 工具 - 加载一张图片
function loadImg(item, callback) {
    var img = document.createElement("img");
    img.onload = function(){
       item.dom = img;
       item.width = img.width;
       item.height = img.height;
       item.pie = img.width / img.height;
       callback();
    };
    img.onerror= function() {
        console.log('图片加载出错，请刷新页面');
    };
    img.src = item.url;
}

// 加载完成一张图片
function loadDown() {
    imgs.down++;
    console.log('加载完成一张：', imgs.down);
    if(imgs.all === imgs.down) { // 全部加载完成
        show();
    }
}

// 页面初始化完毕，页面出现
function show() {
    console.log('执行？');
    animate();
    $('#loading-info').addClass('hide');
    $('#loading-box').fadeOut(800);
}

/**
 * 主canvas相关
 * **/

// 初始化星星对象 和 其他一些canvas设置
function initStart(num) {
    ctx.lineCap = 'round';
    stars.length = 0;
    for(var i=0; i<num; i++) {
        stars.push({
            r: random(Math.min(width, height) * 0.8, Math.sqrt(Math.pow(width,2) + Math.pow(height, 2))), // 星轨半径(圆心距离) Math.sqrt(Math.pow(width,2) + Math.pow(height, 2))
            a: random(0, 0.5),  // 起始弧度
            m: 0,   // 当前偏移弧度
            w: random(0.5, 1),     // 星星本身的半径
            pin: 0, // 开始运行的前50帧
            color: getColor(),  // 星星的颜色
        });
    }
    console.log('总数：', stars.length);
}

// 工具 - 获取随机颜色，少数星星可以有特殊颜色
function getColor() {
    return Math.random() < 0.95 ?
        "rgba(220,220,255, "+ random(0.5, 1) +")" :
        "rgba("+ Math.round(random(50, 255)) +", "+ Math.round(random(50, 255)) +", "+ Math.round(random(50, 255)) +", 1)";
}

// 工具 - 获取范围随机数
function random(min, max) {
    return Math.random() * ( max - min ) + min;
}

// 绘制一帧
function drow() {
    // 绘制背景图
    //console.log('是：', imgs);
    ctx.drawImage(imgs.starback.dom, 0, 0, imgs.starback.pie > windowPie ? height * imgs.starback.pie : width, imgs.starback.pie > windowPie ? height : width * imgs.starback.pie);
    if (starOpcity < 1) {
        starOpcity+=0.01;
    }
    // console.log(starOpcity);
    ctx.globalAlpha = starOpcity;
    for(var i=0; i < stars.length; i++) {
        const t = stars[i];

        ctx.fillStyle = t.color;

        ctx.beginPath();
        //ctx.arc(15,15,15,0, Math.PI*2);
        //console.log(width - Math.sin((t.a  - t.m )*Math.PI) * t.r, height - Math.cos((t.a  - t.m )*Math.PI) * t.r, t.w);
        ctx.arc(width - Math.sin((t.a  - t.m )*Math.PI) * t.r, height - Math.cos((t.a  - t.m)*Math.PI) * t.r, t.w, 0 , Math.PI*2);
        ctx.fill();

        if (starOpcity >= 1) {
            if (t.pin < 0.003){
                t.pin+=0.0001;
            }
            for(var j=0.0001; j< t.pin && j<=0.003; j+=0.0001) {
                ctx.save();
                ctx.globalAlpha = starOpcity - j/0.003;
                ctx.beginPath();
                ctx.arc(width - Math.sin((t.a  - t.m + j*3)*Math.PI) * t.r, height - Math.cos((t.a  - t.m + j*3)*Math.PI) * t.r, t.w, 0 , Math.PI*2);
                ctx.fill();
                ctx.restore();
            }

            const math = t.a - t.m;
            if (math < -0.01) {
                t.m = t.a - 0.5;
            }
            t.m+=0.0002;
        }
    }
}

// 动画函数
function animate() {
    drow();
    requestAnimationFrame(animate);
}