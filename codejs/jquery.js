$ ("#div1").click(function(){
$("#div1")
.append("<p>this is new </p>");
$("#div1")
.prepend("<p>this is new<p>");
});

function hidih() {
	$("#div1").hide();
}

function showih(){
	$("#div1").toggle();
}
function prompteha() {
	var name=
	prompt("chismek?", "enter your name...");
	$("#p3").html(name);
	console.log(name);
}
function badilattribute(){
	$("#img1")
	.attr("src" ,"ressources/dr.jpg");
}
function badilcss(){
	$("#p2").css(
		{"margin": "50%", "color":"red"}
		);
}


var imagenumber=0;
function carousel () {
	if (imagenumber>=4) {imagenumber=0;}
	var images = ["fd","ri","ss","rg"];


		$("#attest-image").attr ('src',"ressources/" +images[imagenumber]+".jpg");
	imagenumber++;
setTimeout(carousel,2000);
}