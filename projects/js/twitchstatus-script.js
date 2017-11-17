$(document).ready(function () {
	var streamers = ["OgamingSC2", "freecodecamp", "Trobled", "Tiedie58", "BrenyBeast", "Blankmediagames","ESL_SC2","fake123channel213"];
	var startLink = 'https://wind-bow.gomix.me/twitch-api/streams/';
	var endLink = '?callback=?';
	var twitchStreamName;
	var twitchStreamer;
	
	/* Getting data from offline channels*/
	function offlineTwitchJSON(url) {
		$.getJSON( url, function( data ) {
			if (data.status == 404){
				$('#rightInfoBox').append('<div class="row"><div class="statusOff"></div><div class="profPic"><img src=""></div><div class="username"><h2>'+ data.error +'</h2></div><div class="streamTitle"><h3>' + data.message + '</h3></div></div>')
				return false;
			}
			var logo = data.logo;
			var display_name = data.display_name;
			$('#rightInfoBox').append('<div class="row"><div class="statusOff"></div><div class="profPic"><img src="' + logo + '"></div><div class="username"><a href="https://www.twitch.tv/'+display_name+'"><h2>'+ display_name +'</h2></a></div><div class="streamTitle"><h3>Offline</h3></div></div>')
			return false;
		});
	}
	
	/* Getting data from twitch api*/
	function twitchJSON(url, twitchStreamer) {
		$.getJSON( url, twitchStreamer, function( data ) {
			//offline
			if (data.stream == null){
				offlineTwitchJSON("https://wind-bow.gomix.me/twitch-api/channels/" + twitchStreamer + "/?callback=?");
				return false;
			}
			//online stream char length
			if (data.stream.channel.status.split('').length > 50){
				twitchStreamName = data.stream.channel.status.split('').slice(0,50).join('') + '...'; 
			} else {
				twitchStreamName = data.stream.channel.status; 
			} //append online streamer data
			var logo = data.stream.channel.logo;
			var display_name = data.stream.channel.display_name;
			$('#rightInfoBox').append('<div class="row"><div class="statusOn"></div><div class="profPic"><img src="'+ logo +'"></div><div class="username"><a href="https://www.twitch.tv/'+display_name+'"><h2>'+ display_name +'</h2></a></div><div class="streamTitle"><h3>' + twitchStreamName + '</h3></div></div>')
		});
	}
	
	/* Cycle through streamer list*/
	for (var i = 0; i < streamers.length; i++){
		twitchStreamer = streamers[i];
		twitchJSON(startLink + twitchStreamer + endLink, twitchStreamer) 
	}
	
	// hide/show online streamers
	$('#statusAll').click(function(){
		$('.statusOn').parent().show();
		$('.statusOff').parent().show();
		$('#rightInfoBox').css({'background-color':'#cccccc'});
		$('#statusOn').css({'-moz-box-shadow':'inset -7px 7px 22px 0px rgba(50, 50, 50, 0.4)'});
		$('#statusOn').css({'-webkit-box-shadow':'inset -7px 7px 22px 0px rgba(50, 50, 50, 0.4)'});
		$('#statusOn').css({'box-shadow':'inset -7px 7px 22px 0px rgba(50, 50, 50, 0.4)'});
		$('#statusOff').css({'-moz-box-shadow':'inset -10px 2px 22px 0px rgba(50, 50, 50, 0.3), 10px 8px 20px -5px rgba(50, 50, 50, 1)'});
		$('#statusOff').css({'-webkit-box-shadow':'inset -10px 2px 22px 0px rgba(50, 50, 50, 0.3), 10px 8px 20px -5px rgba(50, 50, 50, 1)'});
		$('#statusOff').css({'box-shadow':'inset -10px 2px 22px 0px rgba(50, 50, 50, 0.3), 10px 8px 20px -5px rgba(50, 50, 50, 1)'});
		$('#statusAll').css({'box-shadow':'none'});
	});
	$('#statusOn').click(function(){
		$('.statusOn').parent().show();
		$('.statusOff').parent().hide();
		$('#rightInfoBox').css({'background-color':'#99ff99'});
		$('#statusAll').css({'-moz-box-shadow':'inset -8px -6px 22px 0px rgba(50, 50, 50, 0.4)'});
		$('#statusAll').css({'-webkit-box-shadow':'inset -8px -6px 22px 0px rgba(50, 50, 50, 0.4)'});
		$('#statusAll').css({'box-shadow':'inset -8px -6px 22px 0px rgba(50, 50, 50, 0.4)'});
		$('#statusOff').css({'-moz-box-shadow':'inset -7px 7px 22px 0px rgba(50, 50, 50, 0.4), 10px 8px 20px -5px rgba(50, 50, 50, 1)'});
		$('#statusOff').css({'-webkit-box-shadow':'inset -7px 7px 22px 0px rgba(50, 50, 50, 0.4), 10px 8px 20px -5px rgba(50, 50, 50, 1)'});
		$('#statusOff').css({'box-shadow':'inset -7px 7px 22px 0px rgba(50, 50, 50, 0.4), 10px 8px 20px -5px rgba(50, 50, 50, 1)'});
		$('#statusOn').css({'box-shadow':'none'});
	});
	$('#statusOff').click(function(){
		$('.statusOn').parent().hide();
		$('.statusOff').parent().show();
		$('#rightInfoBox').css({'background-color':'#ff9999'});
		$('#statusOn').css({'-moz-box-shadow':'inset -8px -6px 22px 0px rgba(50, 50, 50, 0.4)'});
		$('#statusOn').css({'-webkit-box-shadow':'inset -8px -6px 22px 0px rgba(50, 50, 50, 0.4)'});
		$('#statusOn').css({'box-shadow':'inset -8px -6px 22px 0px rgba(50, 50, 50, 0.4)'});
		$('#statusAll').css({'-moz-box-shadow':'inset -10px 2px 22px 0px rgba(50, 50, 50, 0.3)'});
		$('#statusAll').css({'-webkit-box-shadow':'inset -10px 2px 22px 0px rgba(50, 50, 50, 0.3)'});
		$('#statusAll').css({'box-shadow':'inset -10px 2px 22px 0px rgba(50, 50, 50, 0.3)'});
		$('#statusOff').css({'box-shadow':'10px 8px 20px -5px rgba(50, 50, 50, 1)'});
	});
});
