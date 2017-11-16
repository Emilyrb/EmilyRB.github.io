$(document).ready(function () {
	var search;
	var firstPartLink = 'https://en.wikipedia.org/w/api.php?action=query&format=json&generator=search&prop=extracts&exlimit=max&explaintext&exintro&gsrsearch=';
	/* get random wiki page */
	var randomLink = "https://en.wikipedia.org/wiki/Special:Random"
	$("#randomPage").click(function(){
		document.getElementById('wikiFrame').src = randomLink;
	});
	
	/* hit enter */
	$("#searchBar").keyup(function(event) {
		if (event.keyCode == 13) {
			$("#submit").click();
		}
	});
	
	/* Get data from wiki api */
	function wikiResult(url) {
		$.getJSON( url, function( data ) {
			$('#searchResults').html('<h3>Results</h3>');
			$.each( data.query.pages, function( key, val ) {
				var extract = val.extract.split(' ').slice(0,20).join(' ') + '...';
				$('#searchResults').append('<div class="resultsBox" id="' + val.pageid + '"><h3>' +  val.title + '</h3><p>' + extract + '</p></div>');
			});
		});
	}
	
	/* Change iframe when a result is clicked */
	$('#searchResults').on('click','.resultsBox',function(){
		document.getElementById('wikiFrame').src = 'https://en.wikipedia.org/?curid='+($(this).attr('id'));
	});
		
	function changeIframe(url){
		document.getElementById('wikiFrame').src = url;
	}
	
	/* list search results*/
	$("#submit").click(function(){
		search = $('#searchBar').val()
		wikiResult(firstPartLink + search + "&callback=?");
	});
	
	/* change width of column when separation line clicked */
	var rightLarge = false;
	var smallWidth = '29%';
	var bigWidth = '70%';
	$("#separate").click(function(){
		if (rightLarge === true){
			$('#leftColumn').animate({'width':bigWidth},1000);
			$('#rightColumn').animate({'width':smallWidth},1000);
			rightLarge = false;
			return false;
		}
		if (rightLarge === false){
			$('#leftColumn').animate({'width':smallWidth},1000);
			$('#rightColumn').animate({'width':bigWidth},1000);
			rightLarge = true;
			return false;
		}
	});
	
	$(".resultsBox").mouseenter(function(){
	/* Animate when hover over a result box*/
		$(this).bounce();
	});
});