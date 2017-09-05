//子弹
class Bullet extends Base{
	//属性
	constructor(){
		super();
	}
	//方法
	init(){
		this.ele = document.createElement("div");
		gameEngine.ele.appendChild(this.ele);
		
		//将当前添加的子弹对象加入到数组gameEngine.allBullets中
		gameEngine.allBullets.push(this);
		//console.log(gameEngine.allBullets);
		
		this.ele.className = "bullet";
		this.ele.style.left = myPlane().ele.offsetLeft + myPlane().ele.offsetWidth/2 - this.ele.offsetWidth/2 +1 + "px";
		this.ele.style.top = myPlane().ele.offsetTop - this.ele.offsetHeight + "px";
		
		return this;
	}
	//移动
	move(){
		//let that = this;
		this.timer = setInterval(()=>{
			
			if (this.ele.offsetTop < -18) {
				clearInterval(this.timer);
				gameEngine.ele.removeChild(this.ele);
				
				//将当前子弹从数组gameEngine.allBullets中移除
				let index = gameEngine.allBullets.indexOf(this);
				gameEngine.allBullets.splice(index, 1);
				
				return;
			}
			this.ele.style.top = this.ele.offsetTop - 14 + "px";
			
		}, 30);
		
	};
	boom(){
		//停止移动
		clearInterval(this.timer);
		
		this.ele.className = "bullet-die";
		
		//动画
		//const that = this;
		const dieImgs = ["images/die1.png", "images/die2.png"];
		let i = 0;
		let dieTimer = setInterval(()=>{
			if (i >= 1){
				clearInterval(dieTimer);
				gameEngine.ele.removeChild(this.ele);
			}
			else {
				this.ele.style.backgroundImage = `url(${dieImgs[++i]})`;
			}
		}, 200);
		
	}
	
}
