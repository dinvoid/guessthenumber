let num=document.getElementById("num");
let life=document.querySelector(".life");
let error=document.querySelector(".error");


let random=Math.floor(Math.random() *10);

function randnum(){
	resetLife();
	 location.reload();
	
	
}

let yourlife=5;
function resetLife(){
	
	yourlife--;

	if(yourlife>0){
    life.innerHTML=yourlife;
	}
	else{
	life.innerHTML=yourlife;
	
	document.getElementById("guess").disabled = true;
	alert('Please try again')
	}
}

function showNumber(){
	num.innerHTML=random;
}

function closeWindow() {
	window.close();
}

function guessNum(){
	let input=document.getElementById("input").value;
	
	if(input==''){
		 error.innerHTML="Please input a number" 
	}else if(input==random){
		error.innerHTML="You got it";
	}
	else if(input>random){
		
		resetLife();
		error.innerHTML="Your guess number is too high"
	}
	else if(input<random){
		resetLife();
		error.innerHTML="Your guess number is too low"
	}
}
