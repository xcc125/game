//mon.js   大鱼js文件
// 功能一:大鱼随鼠标游动
//功能二:大鱼吃食物
//功能三:大鱼喂小鱼
//1:创建一个大鱼的构造函数MomObj
var MomObj=function(){
    console.log(1)
    }
//2:为大鱼的构造函数添加方法init
MomObj.prototype.init=function(){
    console.log(2)
}
//3:为大鱼构造函数添加方法draw
MomObj.prototype.draw=function(){
    console.log(3)
}
//4:将mom.js添加index.html
//5:在main.js创建大鱼对象并且调用相关方法
