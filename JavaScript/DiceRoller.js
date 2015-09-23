//generates roll and prints roll
function roller (number, sides, mod){
	var i=number
	var randomNumber=0
	while (i > 0) {
		randomNumber += Math.floor(Math.random() * sides) + 1 + mod;
		i -= 1
	}
	$("#rollhistory").prepend("rolling "+number+"d"+sides+' with modifier '+mod+" results in "+randomNumber+"\n")
}
$('#roll4').click(function(){
	roller(parseInt($('#number4').val()), 4, parseInt($('#add4').val()));
})
$('#roll6').click(function(){
	roller(parseInt($('#number6').val()), 6, parseInt($('#add6').val()));
})
$('#roll8').click(function(){
	roller(parseInt($('#number8').val()), 8, parseInt($('#add8').val()));
})
$('#roll10').click(function(){
	roller(parseInt($('#number10').val()), 10, parseInt($('#add10').val()));
})
$('#roll12').click(function(){
	roller(parseInt($('#number12').val()), 12, parseInt($('#add12').val()));
})
$('#roll20').click(function(){
	roller(parseInt($('#number20').val()), 20, parseInt($('#add20').val()));
})
$('#roll100').click(function(){
	roller(parseInt($('#number100').val()), 100, parseInt($('#add100').val()));
})
$('#rollcustom').click(function(){
	roller(parseInt($('#numbercustom').val()), parseInt($('#diecustom').val()), parseInt($('#addcustom').val()));
})