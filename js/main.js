// user inputs city
// user clicks update button
//  -If a user submits "New York" or "New York City" or "NYC" make the background of the page nyc.jpg                                                                                                                
//  -If a user submits "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg                                                                                                                  
//  -If a user submits "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg                                                                                                                         
//  -If a user submits "Austin" or "ATX" make the background of the page austin.jpg                                                                                                                                  
//  -If a user submits "Sydney" or "SYD" make the background of the page sydney.jpg
//  -Otherwise leave as citipix_skyline.jpg


$(document).ready(function(){
	console.log('this is running');

	function newCity() {
		var city = $('#city-type').val();
		if (city === 'New York' || city === 'New York City' || city === 'NYC') {
			console.log('nyc');
			$('body').css({'background': 'url(../images/nyc.jpg) no-repeat fixed', 'background-size': 'cover'});
		} else if (city === 'San Francisco' || city === 'SF' || city === 'Bay Area') {
			console.log('sf');
			$('body').css({'background': 'url(../images/sf.jpg) no-repeat fixed', 'background-size': 'cover'});
		} else if (city === 'Los Angeles' || city === 'LA' || city === 'LAX') {
			$('body').css({'background': 'url(../images/la.jpg) no-repeat fixed', 'background-size': 'cover'});
		} else if (city === 'Austin' || city === 'ATX') {
			$('body').css({'background': 'url(../images/austin.jpg) no-repeat fixed', 'background-size': 'cover'});
		} else if (city === 'Sydney' || city === 'SYD') {
			$('body').css({'background': 'url(../images/sydney.jpg) no-repeat fixed', 'background-size': 'cover'});
		} else {
			$('body').css({'background': 'url(../images/citipix_skyline.jpg) no-repeat fixed', 'background-size': 'cover'});
		}
	}
	$('#submit-btn').click(function(event) {   
    	console.log("the event is: ",event);
    	event.preventDefault();
	});
	$('#submit-btn').click(newCity);

});

