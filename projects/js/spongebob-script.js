var input = document.getElementById('input');
var output = document.getElementById('output');
var outputText="";

input.addEventListener("keyup", function(){
	outputText = "";
	inputText = input.value;
	
	for (var i=0;i<inputText.length;i++){
		outputText += (i + 1) % 3 ? (inputText[i]) : inputText[i].toUpperCase();	
	}
	
	output.value = outputText;
});