// main.js
//功能
//创建所有全局变量
//创建所有游戏角色对象
//调用角色对象绘制
//1:创建全局变量
//1.1:创建两个画布全局变量
var can1;
var can2;
//1.2:创建两个画笔全局变量
var ctx1;
var ctx2;
//1.3:创建画布宽度和高度
var canWidth;
var canHeight;
//1.4:创建背景的图片对象
var bgPic;
//1.5:创建全局保存海葵对象
var ane;
//1.6:创建全局变量保存食物对象
var fruit;
//1.7:创建全局变量保存打鱼的对象
var mom;

//2:创建入口函数game
function game(){//console.log(1)
    init();
    gameloop()
}
//3:创建初始化函数init
function init(){
    // console.log(2)
    //3.1:获取画布元素赋值 can1  can2
    can1=document.getElementById("canvas1");
    can2=document.getElementById("canvas2");
    //3.2:获取画笔对象  ctx1  ctx2
    ctx1=can1.getContext("2d");
    ctx2=can2.getContext("2d");
    //3.3:获取画布宽度高度赋值
    canWidth=can1.width;
    canHeight=can1.height;
    //3.4:创建背景图片并下载图片
    bgPic=new Image();
    bgPic.src="src/background.jpg";
    //3.5:创建海葵对象并且调用init方法
    ane=new AneObj();
    ane.init();
    //3.6:创建食物的对象并且调用init方法
    fruit=new FruitObj();
    fruit.init();
    //3.7:创建大鱼对象并且调用init方法
    mom=new MomObj();
    mom.init();
}
//4:创建循环绘制函数gameloop
function gameloop(){//console.log(3) 测试是否调用成功
//4.1:创建智能定时器调用gameloop
requestAnimationFrame(gameloop);
//4.2:绘制大海背景
ctx2.drawImage(bgPic,0,0);
//4.3:绘制海葵
ane.draw();
//4.3.1:添加监听食物数量方法
fruiMonitor();
//4.4:绘制食物方法
fruit.draw();
//4.5:绘制打鱼的方法
mom.draw();

}
//5:当body加载调用成功  game函数
document.body.onload = game;
//6:将main.js 添加index.html
