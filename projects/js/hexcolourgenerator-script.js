$(document).ready(function () {
	var randomColour = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
	$('.newColour').parent(".info").parent(".section").css("background-color", randomColour);
	$('.newColour').prev().html(randomColour);
		
	$(document).on('click', ".newColour", function() {
		randomColour = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
		$(this).parent(".info").parent(".section").css("background-color", randomColour);
		$(this).prev().html(randomColour);
	});
	
	$('#new').click(function(){
		var randomColour = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
		$('body').append('<div class="section" style="background-color:' + randomColour + '"><div class="info"><div class="hexDisplay">' + randomColour + ' </div><div class="newColour">New colour!</div></div><i class="fa fa-minus-circle" aria-hidden="true"></i></div>');
	});
	
	$(document).on('click', '.hexDisplay', function() {
		window.prompt("Ctrl+C to copy", $(this).html());
	});
	
	$(document).on('click', '.fa-minus-circle', function() {
		$(this).parent(".section").remove();
	});
});