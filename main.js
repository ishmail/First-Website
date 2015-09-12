var base8=true
function populate(){
	if (base8 == true) {
		$(".ThisSpinner").attr({min: "5", max: "16"}).val(8);
	} else { $(".ThisSpinner").attr({min: "8", max: "18"}).val(10);
	}
}
function stats(prefix) {
	if (base8 == false){
	var score = calculateAbilitiesbase10($("#"+prefix+"Ability").val());
	$("#"+prefix+"Mod").text(score[0]);
	$("#"+prefix+"Pts").text(score[1]);
	}else {	var score = calculateAbilitiesbase8($("#"+prefix+"Ability").val());
	$("#"+prefix+"Mod").text(score[0]);
	$("#"+prefix+"Pts").text(score[1]);}
	var total = parseInt($("#strPts").text())+parseInt($("#dexPts").text())+parseInt($("#conPts").text())+parseInt($("#wisPts").text())+parseInt($("#intPts").text())+parseInt($("#chaPts").text());
	$("#total").text(total)
}
var calculateAbilitiesbase10 = function(score)
{
	var scoreArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
	var modArray = [-5, -4, -4, -3, -3, -2, -2, -1, -1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17];
	var pointArray = [0, 0, 0, 0, 0, 0, -4, -2, -1, 0, 1, 2, 3, 5, 7, 10, 13, 17, 0, 0];
	var stat = parseInt(score);
	var i = scoreArray.indexOf(stat);
	return [modArray[i], pointArray[i]];
};
var calculateAbilitiesbase8 = function(score)
{
	var scoreArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
	var modArray = [-5, -4, -4, -3, -3, -2, -2, -1, -1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17];
	var pointArray = [0, 0, 0, 0, -4, -2, -1, 0, 1, 2, 3, 4, 5, 7, 9, 12, 15, 19, 0, 0];
	var stat = parseInt(score);
	var i = scoreArray.indexOf(stat);
	return [modArray[i], pointArray[i]];
};
var resetApp = function(){
	if (base8 == false){
	$('.ThisSpinner').val(10);}
	else{
		$('.ThisSpinner').val(8);
	}
}
$(document).ready(function() {
	$("#radio1").click(function(){
		base8=true;
		populate();
	});
	$("#radio2").click(function(){
		base8=false;
		populate();
	})
	$("#strAbility").change(function(){stats("str")});
	$("#dexAbility").change(function(){stats("dex")});
	$("#conAbility").change(function(){stats("con")});
	$("#wisAbility").change(function(){stats("wis")});
	$("#intAbility").change(function(){stats("int")});
	$("#chaAbility").change(function(){stats("cha")});
	$('#reset').click(function(){
 		resetApp();
 	});
})