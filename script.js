var pawn = document.getElementById("pawn");
var object1 = document.getElementById("object1");

var up = 0;
var down = 0;
var right = 0;
var left = 0;
var velocity = 3; 
var r = 0;

function player(x,y){
	this.x = x;
	this.y = y;
}

var speletajs = new player(100, 200);
var object_1 = new player(400, 300);
object1.style.transform = `translate(${object_1.x}px,${object_1.y}px)`;

document.addEventListener("keydown", (event) => {
	if(event.keyCode === 87){
		up = velocity;
	}
	if(event.keyCode === 83){
		down = velocity;
	}
	if(event.keyCode === 68){
		right = velocity;
	}
	if(event.keyCode === 65){
		left = velocity;
	}
});

document.addEventListener("keyup", (event) => {
	if(event.keyCode === 87){
		up = 0;
	}
	if(event.keyCode === 83){
		down = 0;
	}
	if(event.keyCode === 68){
		right = 0;
	}
	if(event.keyCode === 65){
		left = 0;
	}
});


function spele(){
	pawn.style.transform = `translate(${speletajs.x}px,${speletajs.y}px)`;
	object1.style.transform = `translate(${object_1.x}px,${object_1.y}px)`;
	speletajs.y -= up - down;
	speletajs.x += right - left;
	//objekts rozā krāsā: object_1.x un object_1.y
	//speletajs: speletajs.x un speletajs.y
	//r??? starp objektu un speletaju 
	let xxx = speletajs.x - object_1.x;
	let yyy = speletajs.y - object_1.y;
	let r = Math.sqrt(xxx*xxx + yyy*yyy);
	console.log(r);
	if(r < 20){
		console.log("objekts ir paņemts!");
		object_1.x = 500*Math.random();
		object_1.y = 500*Math.random();
		object1.style.transform = `translate(${object_1.x}px,${object_1.y}px)`;
	}
}

spele();

timerGame = setInterval(spele, 10);