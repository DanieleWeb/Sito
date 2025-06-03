function buttonClickedInfo(){
	window.alert("Benvenuto su questo sito, lettore. In questo momento il sito è in fase di sviluppo e non presenta nulla d'interessante. Grazie per questa visita!")
}
let i
function buttonClickedShow(){
	for(i = 0; i < document.getElementsByClassName("hideButton").length;i++){
		let x = document.getElementsByClassName("hideButton").item(i);
		if(x.style.display === "none"){
			x.style.display = "initial"
			document.getElementById("show_hide_image").src = "Immagini/hide.svg"; 
		}
		else{
			x.style.display = "none"
			document.getElementById("show_hide_image").src = "Immagini/show.svg"; 
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
