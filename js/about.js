function HandleAbout(bottomImageID){
	//use this image to find other important 
	this.bottomImage = document.getElementById(bottomImageID);
	this.windowResized();
}

HandleAbout.prototype.setWindowListener = function() {
	window.addEventListener('resize',function(e){
		this.windowResized(e);
	}.bind(this),false);
};

HandleAbout.prototype.windowResized = function() {
	console.log(window.innerWidth);
	if(window.innerWidth <= 1200){
		this.bottomImage.style.left = "0";
	}
	else{
		this.bottomImage.style.left = "228px";
	}
};

function initHandler(){
	let handler = new HandleAbout("lastTextImage");
	handler.setWindowListener();
}

initHandler();