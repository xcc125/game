//fruit.js  食物角色对象
// 功能一:找到一个海葵头顶位置出生(从小变大)
// 功能二:向上漂浮
// 1:创建食物构造函数 FruitObj
var FruitObj=function(){//console.log(1)
//1.1:坐标x y
this.x=[];
this.y=[];
//1.2:食物的长度  1
this.l=[];
//1.3:食物的状态  alive
this.alive=[];
//1.4:两张食物的图片
this.orange=new  Image();
this.blue=new Image()
//1.5:食物速度  出生 向上漂浮
this.spd=[];
//1.6:食物出生在第几个海葵 0 2 19
this.aneNo=[]
//1.7:食物类型  蓝色 的或橙色的 或者黄色的?
this.FruitType=[];
}
// 2:为构造函数添加属性 num=30
FruitObj.prototype.num=30;
// 3:为构造函数添加方法init
FruitObj.prototype.init=function(){//console.log(2)
   //3.1:初始化食物默认隐藏
   //3.2:创建循环遍历每个食物
   for(var i=0;i<this.num;i++){
   //3.3:食物状态false
   this.alive[i]=false;
   //3.4:食物x,y  0
   this.x[i]=0;
   this.y[i]=0;
   //3.5:食物宽度 0
   this.l[i]=0;
   //3.6:食物速度 0
   this.spd[i]=0;
   //3.7:食物海葵小标  0
   this.aneNo[i]=0;
   //3.8:食物类型 " "
   this.FruitType[i]=" "; 
   }
   //3.9:创建图片对象???
   this.orange.src="src/fruit.png";
   this.blue.src="src/blue.png";
//    console.log(this)
}
// 4:为构造函数添加放过draw
FruitObj.prototype.draw=function(){//console.log(3)
    //4.1:创建循环遍历所有食物
    for(var i=0;i<this.num;i++){
    //4.2:判断装态为true
    if(this.alive[i]){
    //4.3:判断类型blue orange
    if(this.FruitType[i]=="blue"){
        var pic=this.blue;
    }else{
        var pic=this.orange;
    }
    //4.4:有小变大  14像素  加宽度
    if(this.l[i]<14){
        this.l[i]+=this.spd[i];
    }else{//4.5:向上漂浮   -y
        this.y[i]-=this.spd[i];
    }   
    //4.5:1绘制图片
    ctx2.drawImage(pic,this.x[i],this.y[i],this.l[i],this.l[i])
    //4.6:浮出屏幕  装态false
    if(this.y[i]<=0){
        this.alive[i]=false;
    }
    }//if  end  alive
    }//for end  
}
// 5:将fruit.js添加到index.html中
// 6:在main.js中创建食物对象调用相关方法
//7:创建全局函数-任务监听画布食物数量
function fruiMonitor(){
    //功能:累加计算活动食物数量
    //7.1:创建变量  sum\
    var sum=0;
    //7.2:创建循环遍历所有食物
    for(var i=0;i<fruit.sum;i++){
    //7.3:如果当前食物的状态为true  sum++
    if(fruit.alive[i])sum++;
    }
    //7.4:如果sum<15
    if(sum<15){
        sendFruit();//挑一个食物
        return;//一次挑一个
    }
}
//8:创建全局函数-从不活动食物中按下标顺序挑一个
function sendFruit(){
    //功能:从隐藏的食物中挑一个变为出生
    //1:创建一个循环遍历所有的食物
    for(var i=0;i<fruit.num;i++){
    //2:如果当前的食物状态false
    if(fruit.alive[i]===false){
    //3:指定当前食物出生
    fruit.born(i);//参数i   26
    //4:返回一次生一个
    return;
    } 
    }
}
//9:为食物构造函数添加方法born出生
//注意参数 i 是代表第几个
FruitObj.prototype.born=function(i){
    // 9.1:当前食物的状态变为true
    this.alive[i]=true;
    // 9.2:当前食物宽度 0
    this.l[i]=0;
    // 9.3:当前食物类型
    this.FruitType[i]=Math.random()<0.9?"blue":"orange";
    // 9.4:随机获取海葵下标
    this.aneNo[i]=Math.floor(Math.random()*ane.num);
    // 9.5:获取海葵终点x赋值食物x  
    this.x[i]=ane.headX[this.aneNo[i]];
    //获取海葵种终点y赋值食物y
    this.y[i]=ane.headY[this.aneNo[i]];
    // 9.6:计算当前食物速度
    this.spd[i]=Math.random()*0.017+0.003;
}
//10:main.js gameloop调用第一个全局函数监听画布