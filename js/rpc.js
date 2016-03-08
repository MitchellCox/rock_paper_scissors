var = userChoice;
var = computerChoice;
var options = ['rock', 'paper', 'scissors'];

$selector('.selector').click( function() {
	userChoice = $(this).attr('id');
	computerChoice('userChoice'); 
})