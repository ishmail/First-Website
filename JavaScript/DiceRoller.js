//generates roll and prints roll
function roller (number, sides, mod){
	var i=number
	var randomNumber=0
	while (i > 0) {
		randomNumber += Math.floor(Math.random() * sides) + 1 + mod;
		i -= 1
	}
	$("#rollhistory").prepend("rolling "+number+"d"+sides+' + '+mod+" results in "+randomNumber+"\n")
}
$('#roll4').click(function(){
	roller(parseInt($('#number4').val()), 4, parseInt($('#add4').val()));
})
$('#roll4').click(function(){
	roller(parseInt($('#number4').val()), 4, parseInt($('#add4').val()));
})
$('#roll4').click(function(){
	roller(parseInt($('#number4').val()), 4, parseInt($('#add4').val()));
})
$('#roll4').click(function(){
	roller(parseInt($('#number4').val()), 4, parseInt($('#add4').val()));
})
$('#roll4').click(function(){
	roller(parseInt($('#number4').val()), 4, parseInt($('#add4').val()));
})
$('#roll4').click(function(){
	roller(parseInt($('#number4').val()), 4, parseInt($('#add4').val()));
})
$('#roll4').click(function(){
	roller(parseInt($('#number4').val()), 4, parseInt($('#add4').val()));
})
$('#roll4').click(function(){
	roller(parseInt($('#number4').val()), 4, parseInt($('#add4').val()));
})