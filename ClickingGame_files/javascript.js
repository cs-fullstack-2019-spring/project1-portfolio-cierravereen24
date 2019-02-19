console.log("ready");

$("#purpleBackground").click(function(e){
    $("body").addClass("purpleBackground");
});

$("#blueBackground").click(function(e){
    $("body").addClass("blueBackground");
});

$("#goldBackground").click(function(e){
    $("body").addClass("goldBackground");
});


var Player1= 0;
$("#Player1").click(function () {
    player1++;
    console.log(Player1);
    $("pointsforp1").text(player1);
    totalpoints();
    gamewins()
});


var Player2 = 0;
//Allows the clicks of the game to be counted as points
$("#Player2").click(function () {

    Player2++;
    console.log(Player2);
    $("pointsforp2").text(Player2);
    totalpoints();
    gamewins();
});


