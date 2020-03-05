$(document).ready(function () {

	var api='https://api.openweathermap.org/data/2.5/weather?';
	var apikey='&APPID=8c717dcf78dc23081f1047eb61fd3681';
	var city = 'q=Brisbane';
	var units = '&units=metric';
	var url=api+city+apikey;
	var theUnits = 'Celcius';
	var theDate = new Date();
	var weekNum = theDate.getUTCDay();
	
	/* Getting JSON data */
	function tempJSON(theUrl){
		$.getJSON( theUrl, function( data ) {
			$('#theTemp').html(data.main.temp + ' ' + theUnits);
			$('#theTown').html(data.name);
			$('#theHumid').html(data.main.humidity + "%");
			$('#theMin').html(data.main.temp_min);
			$('#theMax').html(data.main.temp_max);
		});
	};
	
	tempJSON(api+city+apikey+units);
	/* Getting data for future weather side bar*/
	function tempJSONSideBar(theUrl){
		$.getJSON( theUrl, function( data ) {
			switch(weekNum){
			case 0:
				$("#dayOne").html("Tomorrow");
				$("#theHumidityBoxSide1").html(data.list[0].humidity + '%');
				$("#theMinBoxSide1").html(data.list[0].temp.min);
				$("#theMaxBoxSide1").html(data.list[0].temp.max);
				$("#humText1").html("Hum");
				$("#minText1").html("Min");
				$("#maxText1").html("Max");
				$("#dayTwo").html("Tuesday");
				$("#theHumidityBoxSide2").html(data.list[1].humidity+ '%');
				$("#theMinBoxSide2").html(data.list[1].temp.min);
				$("#theMaxBoxSide2").html(data.list[1].temp.max);
				$("#humText2").html("Hum");
				$("#minText2").html("Min");
				$("#maxText2").html("Max");
				$("#dayThree").html("Wednesday");
				$("#theHumidityBoxSide3").html(data.list[2].humidity+ '%');
				$("#theMinBoxSide3").html(data.list[2].temp.min);
				$("#theMaxBoxSide3").html(data.list[2].temp.max);
				$("#humText3").html("Hum");
				$("#minText3").html("Min");
				$("#maxText3").html("Max");
				$("#dayFour").html("Thursday");
				$("#theHumidityBoxSide4").html(data.list[3].humidity+ '%');
				$("#theMinBoxSide4").html(data.list[3].temp.min);
				$("#theMaxBoxSide4").html(data.list[3].temp.max);
				$("#humText4").html("Hum");
				$("#minText4").html("Min");
				$("#maxText4").html("Max");
				$("#dayFive").html("Friday");
				$("#theHumidityBoxSide5").html(data.list[4].humidity+ '%');
				$("#theMinBoxSide5").html(data.list[4].temp.min);
				$("#theMaxBoxSide5").html(data.list[4].temp.max);
				$("#humText5").html("Hum");
				$("#minText5").html("Min");
				$("#maxText5").html("Max");
				$("#daySix").html("Saturday");
				$("#theHumidityBoxSide6").html(data.list[4].humidity+ '%');
				$("#theMinBoxSide6").html(data.list[4].temp.min);
				$("#theMaxBoxSide6").html(data.list[4].temp.max);
				$("#humText6").html("Hum");
				$("#minText6").html("Min");
				$("#maxText6").html("Max");
				$("#daySeven").html("Sunday");
				$("#theHumidityBoxSide7").html(data.list[5].humidity+ '%');
				$("#theMinBoxSide7").html(data.list[5].temp.min);
				$("#theMaxBoxSide7").html(data.list[5].temp.max);
				$("#humText7").html("Hum");
				$("#minText7").html("Min");
				$("#maxText7").html("Max");
				break;
			case 1:
				$("#dayOne").html("Tomorrow");
				$("#theHumidityBoxSide1").html(data.list[0].humidity+ '%');
				$("#theMinBoxSide1").html(data.list[0].temp.min);
				$("#theMaxBoxSide1").html(data.list[0].temp.max);
				$("#humText1").html("Hum");
				$("#minText1").html("Min");
				$("#maxText1").html("Max");
				$("#dayTwo").html("Wednesday");
				$("#theHumidityBoxSide2").html(data.list[1].humidity+ '%');
				$("#theMinBoxSide2").html(data.list[1].temp.min);
				$("#theMaxBoxSide2").html(data.list[1].temp.max);
				$("#humText2").html("Hum");
				$("#minText2").html("Min");
				$("#maxText2").html("Max");
				$("#dayThree").html("Thursday");
				$("#theHumidityBoxSide3").html(data.list[2].humidity+ '%');
				$("#theMinBoxSide3").html(data.list[2].temp.min);
				$("#theMaxBoxSide3").html(data.list[2].temp.max);
				$("#humText3").html("Hum");
				$("#minText3").html("Min");
				$("#maxText3").html("Max");
				$("#dayFour").html("Friday");
				$("#theHumidityBoxSide4").html(data.list[3].humidity+ '%');
				$("#theMinBoxSide4").html(data.list[3].temp.min);
				$("#theMaxBoxSide4").html(data.list[3].temp.max);
				$("#humText4").html("Hum");
				$("#minText4").html("Min");
				$("#maxText4").html("Max");
				$("#dayFive").html("Saturday");
				$("#theHumidityBoxSide5").html(data.list[4].humidity+ '%');
				$("#theMinBoxSide5").html(data.list[4].temp.min);
				$("#theMaxBoxSide5").html(data.list[4].temp.max);
				$("#humText5").html("Hum");
				$("#minText5").html("Min");
				$("#maxText5").html("Max");
				$("#daySix").html("Sunday");
				$("#theHumidityBoxSide6").html(data.list[5].humidity+ '%');
				$("#theMinBoxSide6").html(data.list[5].temp.min);
				$("#theMaxBoxSide6").html(data.list[5].temp.max);
				$("#humText6").html("Hum");
				$("#minText6").html("Min");
				$("#maxText6").html("Max");
				$("#daySeven").html("Monday");
				$("#theHumidityBoxSide7").html(data.list[6].humidity+ '%');
				$("#theMinBoxSide7").html(data.list[6].temp.min);
				$("#theMaxBoxSide7").html(data.list[6].temp.max);
				$("#humText7").html("Hum");
				$("#minText7").html("Min");
				$("#maxText7").html("Max");
				break;
			case 2:
				$("#dayOne").html("Tomorrow");
				$("#theHumidityBoxSide1").html(data.list[0].humidity+ '%');
				$("#theMinBoxSide1").html(data.list[0].temp.min);
				$("#theMaxBoxSide1").html(data.list[0].temp.max);
				$("#humText1").html("Hum");
				$("#minText1").html("Min");
				$("#maxText1").html("Max");
				$("#dayTwo").html("Thursday");
				$("#theHumidityBoxSide2").html(data.list[1].humidity+ '%');
				$("#theMinBoxSide2").html(data.list[1].temp.min);
				$("#theMaxBoxSide2").html(data.list[1].temp.max);
				$("#humText2").html("Hum");
				$("#minText2").html("Min");
				$("#maxText2").html("Max");
				$("#dayThree").html("Friday");
				$("#theHumidityBoxSide3").html(data.list[2].humidity+ '%');
				$("#theMinBoxSide3").html(data.list[2].temp.min);
				$("#theMaxBoxSide3").html(data.list[2].temp.max);
				$("#humText3").html("Hum");
				$("#minText3").html("Min");
				$("#maxText3").html("Max");
				$("#dayFour").html("Saturday");
				$("#theHumidityBoxSide4").html(data.list[3].humidity+ '%');
				$("#theMinBoxSide4").html(data.list[3].temp.min);
				$("#theMaxBoxSide4").html(data.list[3].temp.max);
				$("#humText4").html("Hum");
				$("#minText4").html("Min");
				$("#maxText4").html("Max");
				$("#dayFive").html("Sunday");
				$("#theHumidityBoxSide5").html(data.list[4].humidity+ '%');
				$("#theMinBoxSide5").html(data.list[4].temp.min);
				$("#theMaxBoxSide5").html(data.list[4].temp.max);
				$("#humText5").html("Hum");
				$("#minText5").html("Min");
				$("#maxText5").html("Max");
				$("#daySix").html("Monday");
				$("#theHumidityBoxSide6").html(data.list[5].humidity+ '%');
				$("#theMinBoxSide6").html(data.list[5].temp.min);
				$("#theMaxBoxSide6").html(data.list[5].temp.max);
				$("#humText6").html("Hum");
				$("#minText6").html("Min");
				$("#maxText6").html("Max");
				$("#daySeven").html("Tuesday");
				$("#theHumidityBoxSide7").html(data.list[6].humidity+ '%');
				$("#theMinBoxSide7").html(data.list[6].temp.min);
				$("#theMaxBoxSide7").html(data.list[6].temp.max);
				$("#humText7").html("Hum");
				$("#minText7").html("Min");
				$("#maxText7").html("Max");
				break;
			case 3:
				$("#dayOne").html("Tomorrow");
				$("#theHumidityBoxSide1").html(data.list[0].humidity+ '%');
				$("#theMinBoxSide1").html(data.list[0].temp.min);
				$("#theMaxBoxSide1").html(data.list[0].temp.max);
				$("#humText1").html("Hum");
				$("#minText1").html("Min");
				$("#maxText1").html("Max");
				$("#dayTwo").html("Friday");
				$("#theHumidityBoxSide2").html(data.list[1].humidity+ '%');
				$("#theMinBoxSide2").html(data.list[1].temp.min);
				$("#theMaxBoxSide2").html(data.list[1].temp.max);
				$("#humText2").html("Hum");
				$("#minText2").html("Min");
				$("#maxText2").html("Max");
				$("#dayThree").html("Saturday");
				$("#theHumidityBoxSide3").html(data.list[2].humidity+ '%');
				$("#theMinBoxSide3").html(data.list[2].temp.min);
				$("#theMaxBoxSide3").html(data.list[2].temp.max);
				$("#humText3").html("Hum");
				$("#minText3").html("Min");
				$("#maxText3").html("Max");
				$("#dayFour").html("Sunday");
				$("#theHumidityBoxSide4").html(data.list[3].humidity+ '%');
				$("#theMinBoxSide4").html(data.list[3].temp.min);
				$("#theMaxBoxSide4").html(data.list[3].temp.max);
				$("#humText4").html("Hum");
				$("#minText4").html("Min");
				$("#maxText4").html("Max");
				$("#dayFive").html("Monday");
				$("#theHumidityBoxSide5").html(data.list[4].humidity+ '%');
				$("#theMinBoxSide5").html(data.list[4].temp.min);
				$("#theMaxBoxSide5").html(data.list[4].temp.max);
				$("#humText5").html("Hum");
				$("#minText5").html("Min");
				$("#maxText5").html("Max");
				$("#daySix").html("Tuesday");
				$("#theHumidityBoxSide6").html(data.list[5].humidity+ '%');
				$("#theMinBoxSide6").html(data.list[5].temp.min);
				$("#theMaxBoxSide6").html(data.list[5].temp.max);
				$("#humText6").html("Hum");
				$("#minText6").html("Min");
				$("#maxText6").html("Max");
				$("#daySeven").html("Wednesday");
				$("#theHumidityBoxSide7").html(data.list[6].humidity+ '%');
				$("#theMinBoxSide7").html(data.list[6].temp.min);
				$("#theMaxBoxSide7").html(data.list[6].temp.max);
				$("#humText7").html("Hum");
				$("#minText7").html("Min");
				$("#maxText7").html("Max");
				break;
			case 4:
				$("#dayOne").html("Tomorrow");
				$("#theHumidityBoxSide1").html(data.list[0].humidity+ '%');
				$("#theMinBoxSide1").html(data.list[0].temp.min);
				$("#theMaxBoxSide1").html(data.list[0].temp.max);
				$("#humText1").html("Hum");
				$("#minText1").html("Min");
				$("#maxText1").html("Max");
				$("#dayTwo").html("Saturday");
				$("#theHumidityBoxSide2").html(data.list[1].humidity+ '%');
				$("#theMinBoxSide2").html(data.list[1].temp.min);
				$("#theMaxBoxSide2").html(data.list[1].temp.max);
				$("#humText2").html("Hum");
				$("#minText2").html("Min");
				$("#maxText2").html("Max");
				$("#dayThree").html("Sunday");
				$("#theHumidityBoxSide3").html(data.list[2].humidity+ '%');
				$("#theMinBoxSide3").html(data.list[2].temp.min);
				$("#theMaxBoxSide3").html(data.list[2].temp.max);
				$("#humText3").html("Hum");
				$("#minText3").html("Min");
				$("#maxText3").html("Max");
				$("#dayFour").html("Monday");
				$("#theHumidityBoxSide4").html(data.list[3].humidity+ '%');
				$("#theMinBoxSide4").html(data.list[3].temp.min);
				$("#theMaxBoxSide4").html(data.list[3].temp.max);
				$("#humText4").html("Hum");
				$("#minText4").html("Min");
				$("#maxText4").html("Max");
				$("#dayFive").html("Tuesday");
				$("#theHumidityBoxSide5").html(data.list[4].humidity+ '%');
				$("#theMinBoxSide5").html(data.list[4].temp.min);
				$("#theMaxBoxSide5").html(data.list[4].temp.max);
				$("#humText5").html("Hum");
				$("#minText5").html("Min");
				$("#maxText5").html("Max");
				$("#daySix").html("Wednesday");
				$("#theHumidityBoxSide6").html(data.list[5].humidity+ '%');
				$("#theMinBoxSide6").html(data.list[5].temp.min);
				$("#theMaxBoxSide6").html(data.list[5].temp.max);
				$("#humText6").html("Hum");
				$("#minText6").html("Min");
				$("#maxText6").html("Max");
				$("#daySeven").html("Thursday");
				$("#theHumidityBoxSide7").html(data.list[6].humidity+ '%');
				$("#theMinBoxSide7").html(data.list[6].temp.min);
				$("#theMaxBoxSide7").html(data.list[6].temp.max);
				$("#humText7").html("Hum");
				$("#minText7").html("Min");
				$("#maxText7").html("Max");
				break;
			case 5:
				$("#dayOne").html("Tomorrow");
				$("#theHumidityBoxSide1").html(data.list[0].humidity+ '%');
				$("#theMinBoxSide1").html(data.list[0].temp.min);
				$("#theMaxBoxSide1").html(data.list[0].temp.max);
				$("#humText1").html("Hum");
				$("#minText1").html("Min");
				$("#maxText1").html("Max");
				$("#dayTwo").html("Sunday");
				$("#theHumidityBoxSide2").html(data.list[1].humidity+ '%');
				$("#theMinBoxSide2").html(data.list[1].temp.min);
				$("#theMaxBoxSide2").html(data.list[1].temp.max);
				$("#humText2").html("Hum");
				$("#minText2").html("Min");
				$("#maxText2").html("Max");
				$("#dayThree").html("Monday");
				$("#theHumidityBoxSide3").html(data.list[2].humidity+ '%');
				$("#theMinBoxSide3").html(data.list[2].temp.min);
				$("#theMaxBoxSide3").html(data.list[2].temp.max);
				$("#humText3").html("Hum");
				$("#minText3").html("Min");
				$("#maxText3").html("Max");
				$("#dayFour").html("Tuesday");
				$("#theHumidityBoxSide4").html(data.list[3].humidity+ '%');
				$("#theMinBoxSide4").html(data.list[3].temp.min);
				$("#theMaxBoxSide4").html(data.list[3].temp.max);
				$("#humText4").html("Hum");
				$("#minText4").html("Min");
				$("#maxText4").html("Max");
				$("#dayFive").html("Wednesday");
				$("#theHumidityBoxSide5").html(data.list[4].humidity+ '%');
				$("#theMinBoxSide5").html(data.list[4].temp.min);
				$("#theMaxBoxSide5").html(data.list[4].temp.max);
				$("#humText5").html("Hum");
				$("#minText5").html("Min");
				$("#maxText5").html("Max");
				$("#daySix").html("Thursday");
				$("#theHumidityBoxSide6").html(data.list[5].humidity+ '%');
				$("#theMinBoxSide6").html(data.list[5].temp.min);
				$("#theMaxBoxSide6").html(data.list[5].temp.max);
				$("#humText6").html("Hum");
				$("#minText6").html("Min");
				$("#maxText6").html("Max");
				$("#daySeven").html("Friday");
				$("#theHumidityBoxSide7").html(data.list[6].humidity+ '%');
				$("#theMinBoxSide7").html(data.list[6].temp.min);
				$("#theMaxBoxSide7").html(data.list[6].temp.max);
				$("#humText7").html("Hum");
				$("#minText7").html("Min");
				$("#maxText7").html("Max");
				break;
			case 6:
				$("#dayOne").html("Tomorrow");
				$("#theHumidityBoxSide1").html(data.list[0].humidity+ '%');
				$("#theMinBoxSide1").html(data.list[0].temp.min);
				$("#theMaxBoxSide1").html(data.list[0].temp.max);
				$("#humText1").html("Hum");
				$("#minText1").html("Min");
				$("#maxText1").html("Max");
				$("#dayTwo").html("Monday");
				$("#theHumidityBoxSide2").html(data.list[1].humidity+ '%');
				$("#theMinBoxSide2").html(data.list[1].temp.min);
				$("#theMaxBoxSide2").html(data.list[1].temp.max);
				$("#humText2").html("Hum");
				$("#minText2").html("Min");
				$("#maxText2").html("Max");
				$("#dayThree").html("Tuesday");
				$("#theHumidityBoxSide3").html(data.list[2].humidity+ '%');
				$("#theMinBoxSide3").html(data.list[2].temp.min);
				$("#theMaxBoxSide3").html(data.list[2].temp.max);
				$("#humText3").html("Hum");
				$("#minText3").html("Min");
				$("#maxText3").html("Max");
				$("#dayFour").html("Wednesday");
				$("#theHumidityBoxSide4").html(data.list[3].humidity+ '%');
				$("#theMinBoxSide4").html(data.list[3].temp.min);
				$("#theMaxBoxSide4").html(data.list[3].temp.max);
				$("#humText4").html("Hum");
				$("#minText4").html("Min");
				$("#maxText4").html("Max");
				$("#dayFive").html("Thursday");
				$("#theHumidityBoxSide5").html(data.list[4].humidity+ '%');
				$("#theMinBoxSide5").html(data.list[4].temp.min);
				$("#theMaxBoxSide5").html(data.list[4].temp.max);
				$("#humText5").html("Hum");
				$("#minText5").html("Min");
				$("#maxText5").html("Max");
				$("#daySix").html("Friday");
				$("#theHumidityBoxSide6").html(data.list[5].humidity+ '%');
				$("#theMinBoxSide6").html(data.list[5].temp.min);
				$("#theMaxBoxSide6").html(data.list[5].temp.max);
				$("#humText6").html("Hum");
				$("#minText6").html("Min");
				$("#maxText6").html("Max");
				$("#daySeven").html("Saturday");
				$("#theHumidityBoxSide7").html(data.list[6].humidity+ '%');
				$("#theMinBoxSide7").html(data.list[6].temp.min);
				$("#theMaxBoxSide7").html(data.list[6].temp.max);
				$("#humText7").html("Hum");
				$("#minText7").html("Min");
				$("#maxText7").html("Max");
				break;
			}
		});
	};
	tempJSONSideBar("http://api.openweathermap.org/data/2.5/forecast/daily?" + city + "&cnt=7" + apikey + units);
	
	/* Deciding whether units on screen should say celcius or farenheit*/
	if (units.match(/me/gi)){
			theUnits = 'Celcius';
		} else {
			theUnits = 'Farenheit';
		}
	
	/* Change temp and button to celcius*/
	$("#tempC").click(function(){
		theUnits='Celcius';
		units = '&units=metric';
		tempJSON(api+city+apikey+units);
		tempJSONSideBar("http://api.openweathermap.org/data/2.5/forecast/daily?" + city + "&cnt=7" + apikey + units);
		$("#tempC").css("background-color","green");
		$("#tempF").css("background-color","gray");
	});
	/* change temp to farenheit*/
	$("#tempF").click(function(){
		theUnits='Farenheit';
		units = '&units=imperial';
		tempJSON(api+city+apikey+units);
		tempJSONSideBar("http://api.openweathermap.org/data/2.5/forecast/daily?" + city + "&cnt=7" + apikey + units);
		$("#tempC").css("background-color","gray");
		$("#tempF").css("background-color","green");
	});
	/* Submit city*/
	$('#submit').click(function(){
		city = ('q=' + $('#search').val());
		tempJSON(api+city+apikey+units);
		tempJSONSideBar("http://api.openweathermap.org/data/2.5/forecast/daily?" + city + "&cnt=7" + apikey + units);
	});
	/* insert city box*/
	$('#searchText').click(function(){
		$(this).css('display','none');
		$('#searchBox').css('display','inline-block');
		$('#search').css('display','inline-block').addClass('searchBox');
		$('#submit').css('display','inline-block').addClass('submitBtn');
	});
	
	/* If weather is ---- make cloud/rainy icons across screen*/
	var windowWidth = $(window).width();
    makeDiv();

    function makeDiv() {
        var numRand = Math.floor(Math.random() * 501);
		var spawnCloudTime = (Math.floor(Math.random() * 5) + 1) * 5000;
        var divsize = 150;
        var posx = -171;
        var posy = (Math.random() * ($('.cloudSpace').height() - divsize)).toFixed();
        $newdiv = $('<i class="fa fa-cloud" aria-hidden="true"></i>').css({
            'left': posx + 'px',
            'top': posy + 'px'
        });
		$('.fa-cloud').animate({'marginLeft' : (windowWidth + 200) + "px"}, 50000);
        $newdiv.appendTo('.cloudSpace').delay(spawnCloudTime).fadeIn(100, function () {
            makeDiv();
        });
    }
	

	/*!!!!!!Find a way to remove the cloud when it goes off screen!!!!*/
	

	
	
	/* When search box out of focus, remove it. !!NEED TO FIX THIS!!*/
	$("#submit").focusout(function () {
		if ($(this).has(document.activeElement).length == 0) {
			$('#searchBox').css('display','none');
			$('#searchText').css('display','inline-block');
		}
	});
	/* Default arrow*/
	var arrowState = 'left';
	$("#leftArrow").css('background-color','gray');
	$("#rightArrow").css('background-color','green');
	
	/* Change dates when arrows clicked*/
	$("#rightArrow").click(function(){
		if (arrowState == 'left'){
			$("#slideOne").hide();
			$("#slideTwo").show();
			$("#rightArrow").css('background-color','gray');
			$("#leftArrow").css('background-color','green');
			arrowState = 'right';
		} 
	});
	$("#leftArrow").click(function(){
		if (arrowState == 'right'){
			$("#slideTwo").hide();
			$("#slideOne").show();
			$("#leftArrow").css('background-color','gray');
			$("#rightArrow").css('background-color','green');
			arrowState = 'left';
		}
	});
});

