var color = generateRandomColor(numsquare);
var squares = document.querySelectorAll (".square");
var pickcolor = pickedColor();
var colorDisplay = document.querySelector ("#colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easyButton = document.querySelector("#Easy");
var hardButton = document.querySelector("#Hard");
var numsquare=6;

colorDisplay.textContent = pickcolor;

easyButton.addEventListener("click", function(){
	hardButton.classList.remove("selected");
	easyButton.classList.add("selected");
	numsquare=3;
	color = generateRandomColor(numsquare);
	pickcolor = pickedColor();
	colorDisplay.textContent = pickcolor;
	for (var i=0; i < squares.length;i++){
		if (color[i]){
			squares[i].style.backgroundColor = color[i];
		} else{
			squares[i].style.display = "none";
		}
	}
});
hardButton.addEventListener("click", function(){
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	numsquare = 6;
	color = generateRandomColor(numsquare);
	pickcolor = pickedColor();
	colorDisplay.textContent = pickcolor;
	for (var i=0; i < squares.length;i++){
	
			squares[i].style.backgroundColor = color[i];
	
			squares[i].style.display = "block";
		}
	
});


reset.addEventListener("click", function(){
	//generayte new color
	color = generateRandomColor(numsquare);
	//pick new random color
	pickcolor = pickedColor();
	//change display color
	colorDisplay.textContent = pickcolor;
	this.textContent ="New Color";
	message.textContent = "";
	//change color of square
	for (var i=0; i<squares.length;i++){
		squares[i].style.backgroundColor = color[i];
	}
	h1.style.backgroundColor = "steelblue";

});

for (var i = 0; i < squares.length;i++ ){
	//add color to the square
	squares[i].style.backgroundColor =color[i];
	//add click listener
	squares[i].addEventListener ("click", function(){
	//grab color to clicked square
	var clickcolor = this.style.backgroundColor;
	//compare color to picked color
	if (clickcolor== pickcolor){
		message.textContent = "Correct!";
		reset.textContent = "Play Again!";
		changeColor(clickcolor);

		h1.style.backgroundColor = clickcolor;
	} else{
		this.style.backgroundColor= "#232323";
		message.textContent = "Try again";
	}
	
	});
}
function changeColor(color){
	//loop thru all square change
	for (var i =0; i< squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickedColor(){
	var random = Math.floor(Math.random()* color.length);
	return color[random];
}

function generateRandomColor (num){
	//make an array
	var arr = []
	//add num random colour to arr
	for (var i=0; i<num; i++){
		//get random color and push to arr
		arr.push(randomColor());
	}
	//return that arr
	return arr;
}

function randomColor (){
	//pick red from 0 t0 255
	var red = Math.floor(Math.random()*256);
	//pick green
	var green = Math.floor(Math.random()*256);
	//pick blue
	var blue = Math.floor(Math.random()*256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";

}