function buttonClickedInfo(){
	window.alert("Benvenuto su questo sito, lettore. In questo momento il sito è in fase di sviluppo e non presenta nulla d'interessante. Grazie per questa visita!")
}
let i
function buttonClickedShow(){
	for(i = 0; i < document.getElementsByClassName("hideButton").length;i++){
		let x = document.getElementsByClassName("hideButton").item(i);
		if(x.style.display === "initial"){
			x.style.display = "none"
			document.getElementById("show_hide_image").src = "Immagini/show.svg";
			document.getElementById("show_hide_button").title ="Mostra altro";
		}
		else{
			x.style.display = "initial"
			document.getElementById("show_hide_image").src = "Immagini/hide.svg"; 
			document.getElementById("show_hide_button").title ="Nascondi";
		}
	}
}
let isMobile
function buttonSize(){
	if(navigator.maxTouchPoints > 0){
		isMobile = true
		console.log(isMobile)
		for(i = 0; i < document.getElementsByClassName("navbutton").length; i++){
			document.getElementsByClassName("navbutton").item(i).style.height = "40px";
			document.getElementsByClassName("hideButton").item(i).style.height = "40px";
		}
	}
	else{
		isMobile = false
	}
}
function loading(){
	if(document.readyState === "complete"){
		document.getElementById("loader_bk").style.animationName= "ending_loading";
		document.getElementById("square1").style.display="none";
   	document.getElementById("square2").style.display="none";
		document.getElementById("square3").style.display="none";
	}	
}
