/** 全局通用变量 **/
var width = 1;              // 全局 - 窗口宽度
var height = 1;             // 全局 - 窗口高度
var windowPie = 1;          // 全局 - 当前工作区宽高比
var isiOS = navigator.userAgent.indexOf('iPhone') > -1; // ios终端
var isIpad = navigator.userAgent.indexOf('iPad') > -1;  // ipad特殊处理
var isAndroid = navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1; //android终端
var phone = isPhone();    // 全局 - 当前是否是移动端
var imgs = {                // 全局 - 所有需异步加载的图片资源
    // person: {url: 'http://isluo.com/imgs/violet-res-min.jpg', dom: null, width:1, height: 1, pie: 1,  t: true},
    starback: {url: 'https://isluo.com/work/violet/assets/img/star-back1.jpg', dom: null, width: 1, height: 1, pie: 1},   // url图片URL，图片DOM，图片宽，图片高，图片宽高比
    v: [{
        url: 'https://isluo.com/work/violet/assets/v/1-min.webp',
        dom: null,
        width: 1,
        height: 1,
        pie: 1
    }, {
        url: 'https://isluo.com/work/violet/assets/v/2-min.webp',
        dom: null,
        width: 1,
        height: 1,
        pie: 1
    }, {
        url: 'https://isluo.com/work/violet/assets/v/3-min.webp',
        dom: null,
        width: 1,
        height: 1,
        pie: 1
    }, {
        url: 'https://isluo.com/work/violet/assets/v/4-min.webp',
        dom: null,
        width: 1,
        height: 1,
        pie: 1
    }, {
        url: 'https://isluo.com/work/violet/assets/v/5-min.webp',
        dom: null,
        width: 1,
        height: 1,
        pie: 1
    }, {
        url: 'https://isluo.com/work/violet/assets/v/6-min.webp',
        dom: null,
        width: 1,
        height: 1,
        pie: 1
    }, {
        url: 'https://isluo.com/work/violet/assets/v/7-min.webp',
        dom: null,
        width: 1,
        height: 1,
        pie: 1
    }, {
        url: 'https://isluo.com/work/violet/assets/v/8-min.webp',
        dom: null,
        width: 1,
        height: 1,
        pie: 1
    }, {
        url: 'https://isluo.com/work/violet/assets/v/9-min.webp',
        dom: null,
        width: 1,
        height: 1,
        pie: 1
    }, {
        url: 'https://isluo.com/work/violet/assets/v/10-min.webp',
        dom: null,
        width: 1,
        height: 1,
        pie: 1
    }, {
        url: 'https://isluo.com/work/violet/assets/v/11-min.webp',
        dom: null,
        width: 1,
        height: 1,
        pie: 1
    }, {
        url: 'https://isluo.com/work/violet/assets/v/12-min.webp',
        dom: null,
        width: 1,
        height: 1,
        pie: 1
    }, {
        url: 'https://isluo.com/work/violet/assets/v/13-min.webp',
        dom: null,
        width: 1,
        height: 1,
        pie: 1
    }, {
        url: 'https://isluo.com/work/violet/assets/v/14-min.webp',
        dom: null,
        width: 1,
        height: 1,
        pie: 1
    }, {
        url: 'https://isluo.com/work/violet/assets/v/15-min.webp',
        dom: null,
        width: 1,
        height: 1,
        pie: 1
    }, {
        url: 'https://isluo.com/work/violet/assets/v/16-min.webp',
        dom: null,
        width: 1,
        height: 1,
        pie: 1
    }, {url: 'https://isluo.com/work/violet/assets/v/17-min.webp', dom: null, width: 1, height: 1, pie: 1}],
    vm: [{
        url: 'https://isluo.com/work/violet/assets/v/1m-min.webp',
        dom: null,
        width: 1,
        height: 1,
        pie: 1
    }, {
        url: 'https://isluo.com/work/violet/assets/v/2m-min.webp',
        dom: null,
        width: 1,
        height: 1,
        pie: 1
    }, {
        url: 'https://isluo.com/work/violet/assets/v/3m-min.webp',
        dom: null,
        width: 1,
        height: 1,
        pie: 1
    }, {
        url: 'https://isluo.com/work/violet/assets/v/4m-min.webp',
        dom: null,
        width: 1,
        height: 1,
        pie: 1
    }, {
        url: 'https://isluo.com/work/violet/assets/v/5m-min.webp',
        dom: null,
        width: 1,
        height: 1,
        pie: 1
    }, {
        url: 'https://isluo.com/work/violet/assets/v/6m-min.webp',
        dom: null,
        width: 1,
        height: 1,
        pie: 1
    }, {
        url: 'https://isluo.com/work/violet/assets/v/7m-min.webp',
        dom: null,
        width: 1,
        height: 1,
        pie: 1
    }, {
        url: 'https://isluo.com/work/violet/assets/v/8m-min.webp',
        dom: null,
        width: 1,
        height: 1,
        pie: 1
    }, {
        url: 'https://isluo.com/work/violet/assets/v/9m-min.webp',
        dom: null,
        width: 1,
        height: 1,
        pie: 1
    }, {
        url: 'https://isluo.com/work/violet/assets/v/10m-min.webp',
        dom: null,
        width: 1,
        height: 1,
        pie: 1
    }, {
        url: 'https://isluo.com/work/violet/assets/v/11m-min.webp',
        dom: null,
        width: 1,
        height: 1,
        pie: 1
    }, {
        url: 'https://isluo.com/work/violet/assets/v/12m-min.webp',
        dom: null,
        width: 1,
        height: 1,
        pie: 1
    }, {
        url: 'https://isluo.com/work/violet/assets/v/13m-min.webp',
        dom: null,
        width: 1,
        height: 1,
        pie: 1
    }, {
        url: 'https://isluo.com/work/violet/assets/v/14m-min.webp',
        dom: null,
        width: 1,
        height: 1,
        pie: 1
    }, {
        url: 'https://isluo.com/work/violet/assets/v/15m-min.webp',
        dom: null,
        width: 1,
        height: 1,
        pie: 1
    }, {
        url: 'https://isluo.com/work/violet/assets/v/16m-min.webp',
        dom: null,
        width: 1,
        height: 1,
        pie: 1
    }, {url: 'https://isluo.com/work/violet/assets/v/17m-min.webp', dom: null, width: 1, height: 1, pie: 1}],
    all: 18,
    down: 0
};
var $z = $("#z");
/** canvas相关全局变量 **/
var canvas = document.getElementById('canvas1');    // 全局 - 主canvas
var ctx = canvas.getContext('2d');                  // 全局 - 主ctx画笔
var dpi = CanvalHD(ctx);                // 全局 - 屏幕DPI值，用于高清缩放
var drow_x = 1; // 根据屏幕宽度确定人像绘图位置
var stars = [];     // 全局 - 所有的星星
var met = {};       // 全局 - 一颗流星

/** 音频全部变量 **/
var audio1 = document.getElementById('audio1');
var volumeTimer = null; // 音量timer

/** letter页全局变量 **/
var dom_rotate = [0, 0]; // 当前旋转角
var $dom = $("#letter");
var $letterInfo = $("#letter-info");
var scoler = 1; // 缩放比例
var rotateTimer = null; // 旋转timer
var hammerTest = null;
var dom_deg = 100;  // 信件旋转摩擦力，移动端弄小点
$(function () {
    /** 开始执行loading，等待所有的图片加载完成 **/
    onInit();
});

/**
 * 工具函数
 * **/

/** 判断是否是移动端 **/
function isPhone() {
    return navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
}

/**
 * 初始化相关
 * **/

/** 初始化加载 **/
function onInit() {
    FastClick.attach(document.body);    // 300ms延迟
    initEvents();   // 初始化各种绑定事件
    loadImg(imgs.starback, loadDown);  // 加载图片
    //loadImg(imgs.person, loadDown);  // 加载图片
    var vs = phone ? imgs.vm : imgs.v;

    for (var i = 0; i < vs.length; i++) {
        loadImg(vs[i], loadDown);
    }
    initMet();          // 初始化流星参数
}

/** 各种事件初始化 **/
function initEvents() {
    /** 窗口大小改变时触发 **/
    $(window).on('resize', function () {
        width = canvas.offsetWidth;
        height = canvas.offsetHeight;
        canvas.width = width * dpi;
        canvas.height = height * dpi;
        windowPie = width / height;
        drow_x = Math.min(canvas.height * 1.15, canvas.width / 1.1);
        dom_deg = phone ? 20 : 70;
        initStart(phone ? 300 : 1800);
    }).resize();

    /** 信窗口相关事件 **/
    hammerTest = new Hammer(document.getElementById('letter-page'));
    hammerTest.get('pan').set({direction: Hammer.DIRECTION_ALL}); // 开启所有方向的检测
    hammerTest.get('pinch').set({enable: true});
    hammerTest.on('pan pinch', function (e) {
        switch (e.type) {
            case "pan":
                onPan(e);
                break;
            case "pinch":
                var s = e.scale;
                if (s > 1.5) {
                    s = 1.5;
                } else if (s < .5) {
                    s = .5;
                }
                $z.css({"transform": "scale(" + s + ")"});
        }
    });

    $('#letter-page').on('mousedown touchstart', function () {
        clearInterval(rotateTimer);
    }).on('mouseup touchend', function () {
        clearInterval(rotateTimer);
        rotateTimer = window.setInterval(autoRotate, 50);
    }).on('mousewheel', function (event, delta) {	// 滚轮滚动
        scoler += delta * 0.1;
        if (scoler > 1.5) {
            scoler = 1.5;
            return;
        } else if (scoler < 0.5) {
            scoler = 0.5;
        }
        $z.css({"transform": "scale(" + scoler + ")"});
    });

    /** 菜单点击事件 **/
    $('#to_letter-page').on('click', function () {
        $(".pages[id!=letter-page]").fadeOut(300);
        $("#letter-page").fadeIn(300);
        $("#close").addClass('show');
        clearInterval(rotateTimer);
        rotateTimer = window.setInterval(autoRotate, 50);
    });
    $("#to_person-page").on('click', function () {
        clearInterval(rotateTimer);
        $(".pages[id!=person-page]").fadeOut(300);
        $("#person-page").fadeIn(300).scrollTop(0);
        $("#close").addClass('show');
    });
    $("#to_copyright-page").on('click', function () {
        clearInterval(rotateTimer);
        $(".pages[id!=copyright-page]").fadeOut(300);
        $("#copyright-page").fadeIn(300).scrollTop(0);
        $("#close").addClass('show');
    });
    $('#menu-music').on('click', function () {
        if ($('#music-info').data('music') === 'close') {
            onMp3Play();
        } else {
            onMp3Pause();
        }
    });

    /** close按钮事件 **/
    $("#close").on('click', function () {
        clearInterval(rotateTimer);
        $(".pages").fadeOut(300);
        $("#close").removeClass('show');
    });

    /** 移动端 起始开始 **/
    $('#loading-phone-in').on('click', function () {
        onMp3Play();
        $('#loading-phone-in').removeClass('show');
        start();
    });

    /** 只有PC端才有菜单hover效果 **/
    if (!phone) {
        $('#menu>li').addClass('pc');
    }
}

// 工具 - 加载一张图片
function loadImg(item, callback) {
    var img = document.createElement("img");
    img.onload = function () {
        item.dom = img;
        item.width = img.width;
        item.height = img.height;
        item.pie = img.width / img.height;
        // if (item.t) {
        //     makeImg(item, img);
        // }
        callback();
    };
    img.onerror = function () {
        console.log('图片加载出错，请刷新页面');
    };
    img.src = item.url;
}

// 加载完成一张图片
function loadDown() {
    imgs.down++;
    $("#per").text((imgs.down / imgs.all * 100).toFixed(1) + '%');
    if (imgs.all === imgs.down) { // 全部加载完成
        show();
    }
}

// 页面初始化完毕，页面出现
function show() {
    $('#loading-box').addClass('hide');
    if (phone) {    // 是移动端
        $('#loading-phone-in').addClass('show');
    } else {
        onMp3Play();
        start();
    }
}

/** 开始 **/
function start() {
    $('#loading-box').fadeOut(3000);
    $('#menu').animate({opacity: 'show', left: 0}, 600, function () {
        if (phone) {
            $('#menu').addClass('menu-phone');
        }
    });
    animate();
    setTimeout(function () {
        $('#logo-box').addClass('show');
    }, 600);
}

/**
 * 主canvas相关
 * **/

// 初始化所有的星星对象
function initStart(num) {
    var grad = [];
    for (var k = 0; k < 11; k++) {
        for (var g = 0; g < k; g++) {
            grad.push(k);
        }
    }
    var obj;
    var max = Math.sqrt(Math.pow(canvas.width, 2) + Math.pow(canvas.height, 2));
    if (stars.length) {
        for (var j = 0; j < stars.length; j++) {
            obj = setStar(j, num);
            stars[j].r = random(max * 0.07 * grad[Math.round(random(0, grad.length))], max);
            stars[j].a = random(0, 0.5);
            stars[j].m = 0;
            stars[j].f = Math.random() > 0.7;
            stars[j].o = random(0.6, 1);
            stars[j].s = obj.s;
            stars[j].w = obj.w;
        }
    } else {
        for (var i = 0; i < num; i++) {
            var c = document.createElement('canvas');
            c.width = 50;
            c.height = 50;
            var c_ctx = c.getContext('2d');
            c_ctx.fillStyle = getColor();
            c_ctx.shadowColor = getColor();
            c_ctx.shadowBlur = 21;
            c_ctx.beginPath();
            c_ctx.arc(25, 25, 2, 0, Math.PI * 2);
            c_ctx.fill();
            obj = setStar(i, num);
            var star = {
                pic: c, r: random(max * 0.07 * grad[Math.round(random(0, grad.length))], max), // 星轨半径(圆心距离) Math.sqrt(Math.pow(width,2) + Math.pow(height, 2))
                a: random(0, 0.5),  // 起始弧度
                m: 0,   // 当前偏移弧度
                f: Math.random() > 0.7, // 星星是否会闪烁
                o: random(0.6, 1),   // 星星当前的透明度
                s: obj.s, w: obj.w
            };
            stars.push(star);
        }
    }
}

/** 设置星星的某些参数，因为有2个地方用到，所以把这部分提取出来了
 * @param i 当前处理的第几颗星星
 * @param num 总共有多少颗星星
 */
function setStar(i, num) {
    // 定义星星的运行速度s，星星本身的半径w
    var obj = {};
    if (i < num / 9) {
        obj.s = 0.000115;
        obj.w = random(20, 22) * dpi;
    } else if (i < num / 8) {
        obj.s = 0.00012;
        obj.w = random(22, 23) * dpi;
    } else if (i < num / 7) {
        obj.s = 0.000125;
        obj.w = random(23, 24) * dpi;
    } else if (i < num / 6) {
        obj.s = 0.00012;
        obj.w = random(24, 25) * dpi;
    } else if (i < num / 5) {
        obj.s = 0.00013;
        obj.w = random(25, 26) * dpi;
    } else if (i < num / 4) {
        obj.s = 0.000135;
        obj.w = random(26, 27) * dpi;
    } else if (i < num / 3) {
        obj.s = 0.00014;
        obj.w = random(27, 28) * dpi;
    } else if (i < num / 2) {
        obj.s = 0.000145;
        obj.w = random(28, 29) * dpi;
    } else {
        obj.s = 0.00015;
        obj.w = random(29, 30) * dpi;
    }
    return obj;
}

/** 初始化流星对象 **/
var c = document.createElement('canvas');
c.width = 300;
c.height = 5;
var c_ctx = c.getContext('2d');
var g = c_ctx.createRadialGradient(100, 1, 0, 200, 1, 125);
g.addColorStop(0, 'rgb(255,255,255)');
g.addColorStop(0.2, 'rgb(220,220,255)');
g.addColorStop(0.9, "transparent");

c_ctx.fillStyle = g;

c_ctx.beginPath();
c_ctx.fillRect(0, 0, 300, 3);
met.pic = c;    // 图片对象
function initMet() {
    var temp_x = random(canvas.width * .3, canvas.width * .7); // random(width*.25, width*1);
    met.start = [temp_x, random(canvas.height * -.25, canvas.height)]; // 随机流星出现位置
    met.deg = random(-Math.PI / 180 * 15, Math.PI / 180 * 5); // random(-Math.PI/180 * 30, Math.PI/180 * 30);  // 旋转角度
    met.range = met.start[0] - random(canvas.width * .3, canvas.width * .8);    // 飞行距离
    met.leng = random(350 * dpi, 500 * dpi);    // 流星完全状态下有多长
    met.pin = 0;  // 前100帧和后100帧, 0~1
    met.sx = -Math.cos(met.deg) * 15 * dpi; // 每次在X上前进的距离
    met.sy = -Math.sin(met.deg) * 15 * dpi; // 每次在Y上前进的距离
}

// 工具 - 获取随机颜色，少数星星可以有特殊颜色
function getColor() {
    return Math.random() < 0.8 ? "rgb(220,220,255)" : "rgb(" + Math.round(random(50, 255)) + ", " + Math.round(random(50, 255)) + ", " + Math.round(random(50, 255)) + ")";
}

// 工具 - 获取范围随机数
function random(min, max) {
    return Math.random() * (max - min) + min;
}

// 绘制一帧
var personX = 0;
var personAdd = 0;
var meteor = false;
var dofor = 0;

function drow() {
    ctx.drawImage(imgs.starback.dom, 0, 0, imgs.starback.pie > windowPie ? canvas.height * imgs.starback.pie : canvas.width, imgs.starback.pie > windowPie ? canvas.height : canvas.width * imgs.starback.pie);

    for (dofor = 0; dofor < stars.length; dofor++) {
        var t = stars[dofor];
        var now = t.a - t.m;
        ctx.fillStyle = t.color;

        ctx.save();
        ctx.globalAlpha = t.o;
        ctx.drawImage(t.pic, canvas.width - Math.sin(now * Math.PI) * t.r, canvas.height - Math.cos(now * Math.PI) * t.r, t.w, t.w);
        ctx.restore();

        var rand = Math.random();

        // 需要闪烁的星星随机调整亮度
        if (t.f) {
            if (rand > 0.5 && t.o > 0.2) {
                t.o -= 0.1;
            } else if (rand < 0.5 && t.o < 1) {
                t.o += 0.1;
            }
        }
        // 旋转到边缘的星星重置位置
        if (now < 0) {
            t.m = t.a - 0.5;
        }
        t.m += t.s;
    }

    // 画流星
    if (meteor) {
        if (met.start[0] > met.range) {
            met.pin = met.pin < 1 ? met.pin + 0.01 : met.pin;
            met.start[0] += met.sx;
            met.start[1] += met.sy;
        } else {
            if (met.pin > 0) {
                met.pin -= 0.02;
            } else {
                meteor = false;
                initMet();

            }
        }

        ctx.save();
        ctx.translate(met.start[0], met.start[1]);
        ctx.rotate(met.deg);

        /**
         * @param pic 图片对象
         * @param x 画图起始点x
         * @param y 画图起始点y
         * @param w 图片宽
         * @param h 图片高
         */
        ctx.drawImage(met.pic, 0, 0, met.leng * met.pin, met.pin * 2);
        ctx.restore();
    }


    // 最后画人物（img对象，裁切起始点X，裁切起始点Y，裁切宽度，裁切高度，绘图起始点X，绘图起始点Y，绘图宽度，绘图高度）
    var p = phone ? imgs.vm : imgs.v;
    // ctx.drawImage(imgs.person.dom, 4 + personX * 1300, 0, 1296, 1080, canvas.width - drow_x,  0, canvas.height * 1.2, canvas.height);
    p[personX].dom && ctx.drawImage(p[personX].dom, canvas.width - drow_x, 0, canvas.height * p[personX].pie, canvas.height);
    personAdd++;
    if (personAdd === 4) {
        personX = personX > 15 ? 0 : personX + 1;
        personAdd = 0;
    }

    // 有小概率出现流星
    if ((!phone) && (!meteor) && Math.random() > 0.999) {
        meteor = true;
    }
}

// 动画函数
function animate() {
    drow();
    requestAnimationFrame(animate);
}

/**
 * letter页相关
 * **/
// 自动旋转
var rotate_v = 0.2;

function autoRotate() {
    if (dom_rotate[1] > 20) {
        rotate_v = -0.2;
    } else if (dom_rotate[1] < -20) {
        rotate_v = 0.2;
    }
    dom_rotate[1] += rotate_v;

    makeLetter();
}

// 处理移动
function onPan(e) {
    dom_rotate[0] -= e.deltaY / dom_deg;
    dom_rotate[1] += e.deltaX / dom_deg;
    if (dom_rotate[0] > 15) {
        dom_rotate[0] = 15;
    } else if (dom_rotate[0] < -15) {
        dom_rotate[0] = -15;
    }

    makeLetter();

    if (dom_rotate[1] > 90) {
        $letterInfo.html('后来，我终于明白什么是爱，<br/>可惜你早已远去，消失在人海');
    } else {
        $letterInfo.html('真希望你还活着.');
    }
}

// 根据当前参数设置信封的旋转状态
function makeLetter() {
    var pi = Math.PI / 180;
    var op = Math.abs(Math.sin(pi * (dom_rotate[1] + 90))) / 2;
    var x = -Math.sin(pi * dom_rotate[1]) * 90;
    var y = Math.sin(pi * dom_rotate[0]) * 90;

    $dom.css("transform", 'rotateX(' + dom_rotate[0] + 'deg) rotateY(' + dom_rotate[1] + 'deg)');
    $dom.css("box-shadow", x + 'px ' + y + 'px ' + '100px rgba(100,100,100,' + op + ')');
}

/** 音频事件，开始播放 **/
function onMp3Play() {
    audio1.play();
    $('#menu-music').addClass('open');
    $('#music-info').data('music', 'open').text('播放中');
    if (isiOS || isIpad) {  // IOS移动端不支持JS调节音量,不调节音量

    } else {
        volumeUp();
    }
}

/** 音频事件，暂停播放 **/
function onMp3Pause() {
    $('#menu-music').removeClass('open');
    $('#music-info').data('music', 'close').text('已关闭');
    if (isiOS || isIpad) {  // IOS移动端不支持JS调节音量,直接暂停
        audio1.pause();
    } else {
        volumeDown();
    }
}

/** 音频音量调大 **/
function volumeUp() {
    clearTimeout(this.volumeTimer);
    if (audio1.volume + 0.1 <= 1) {
        audio1.volume += 0.1;
        this.volumeTimer = setTimeout(volumeUp, 150);
    }
}

/** 音频音量调小 **/
function volumeDown() {

    clearTimeout(this.volumeTimer);
    if (audio1.volume - 0.1 >= 0) {
        audio1.volume -= 0.1;
        volumeTimer = setTimeout(volumeDown, 150);
    } else {
        audio1.pause();
    }
}

/** 获取屏幕像素密度比 **/
function CanvalHD(ctx) {
    var devicePixelRatio = window.devicePixelRatio || 1;
    var backingStorePixelRatio = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
    if (isAndroid || isIpad || !phone) {
        return devicePixelRatio / backingStorePixelRatio;
    } else {
        return devicePixelRatio / backingStorePixelRatio * 2;
    }
}

/** 图片处理 去掉红色 **/
function makeImg(item, img) {
    console.log('宽高：' + img.width + "," + img.height);
    var c = document.createElement('canvas');
    c.width = img.width;
    c.height = img.height;
    var c_ctx = c.getContext('2d');
    c_ctx.drawImage(img, 0, 0, c.width, c.height);
    var imgdata = c_ctx.getImageData(0, 0, c.width, c.height);	//得到画布中所有数据
    // 抹去所有的红色
    for (var i = 3; i < imgdata.data.length; i += 4) {
        var r = imgdata.data[i - 3];
        var g = imgdata.data[i - 2];
        var b = imgdata.data[i - 1];
        if (r > 180 && g < 80 && b < 80) {
            imgdata.data[i - 3] = imgdata.data[i - 2] = imgdata.data[i - 1] = imgdata.data[i] = 0;
        } else if (r + 54 > g + b && r > g && r > b) {
            imgdata.data[i - 3] = r - ((r - g) + (r - b)) / 2;
        }
    }
    c_ctx.putImageData(imgdata, 0, 0);
    item.dom = c;
}
