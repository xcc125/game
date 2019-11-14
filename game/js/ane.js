//ane.js  完成海葵角色对象
//功能:   50根海葵   左右摆动 (贝塞尔曲线)
//1:创建海葵构造函数AneObj
var AneObj=function(){
    this.rootX=[];//起点坐标X
    //起点坐标y通过计算可以得出来不用写
    //控制点x ,y通过计算可以得出来不用写
    this.headX=[];//终点x
    this.headY=[];//终点Y
    this.amp=[];//摆动幅度
    this.alpha=0;//计算正弦函数数值
}
//2:为海葵构造函数添加属性num=50
AneObj.prototype.num=50;
//3:为海葵构造函数添加方法init
AneObj.prototype.init=function(){
    //3.1:创建循环遍历每个海葵
    for(var i=0;i<this.num;i++){
    //3.2:赋值海葵起点坐标x
    this.rootX[i]=i*16+Math.random()*20;
    //3.3:赋值海葵终点坐标 x  y
    //初始化终点与起点相同
    this.headX[i]=this.rootX[i];
    this.headY[i]=canHeight-250+Math.random()*50;
    //3.4:赋值海葵摆动幅度  20~50 
    this.amp[i]=Math.random()*30+20;
    }
    // console.log(this)
}
//4:为海葵构造函数添加方法draw
AneObj.prototype.draw=function(){//console.log(3)
    //4.1:计算数值-1~1之间
    this.alpha+=12*0.0008;
    var p=Math.sin(this.alpha);
    // console.log(p)
    //4.2:保存画笔2的状态
    //4.2.1:修改海葵样式
    ctx2.strokeStyle="#3b154e";
    ctx2.globalAlpha=0.5;//透明度
    ctx2.lineCap="round";//圆角
    ctx2.lineWidth=20;//宽度
    ctx2.save();
    //4.3:创建循环遍历所有的海葵
    for(var i=0;i<this.num;i++){
    //4.4:开始一条新路径
    ctx2.beginPath();
    //4.5:移动到起点坐标
    ctx2.moveTo(this.rootX[i],canHeight);
    //4.6:重新计算终点x坐标
    this.headX[i]=this.rootX[i]+p*this.amp[i];
    //4.7:绘制贝塞尔曲线
    ctx2.quadraticCurveTo(
        this.rootX[i],canHeight-100,
        this.headX[i],this.headY[i]
    );
    //4.8:描边
    ctx2.stroke();
    }
    //4.10:恢复画笔2状态
    ctx2.restore();
}
//5:将ane.js添加index.html
//6:在main.js创建海葵对象并且调用相关方法
