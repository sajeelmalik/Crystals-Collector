var goal;
var wins = 0;
var losses = 0;
var totalScore = 0;


$(document).ready(function(){

    // generates a random number between 19 and 120
    function restart(){
            totalScore = 0;
            goal = (Math.floor(Math.random()*102) + 19);
            $("#goal").text(goal);
            console.log(goal);
    }
    
    function randCrystal(){
        return (Math.floor(Math.random()*12) + 1);
    }

    document.onkeyup = function(input){
        if(input.key.toLowerCase() === 's'){
            restart();
        }
    }

    $("#crystalOne").on("click", function(){
        var randValue = randCrystal();
        totalScore += randValue;
        $("#score").text(totalScore);
    });

    $("#crystalTwo").on("click", function(){
        var randValue = randCrystal();
        totalScore += randValue;
        $("#score").text(totalScore);
    });

    $("#crystalThree").on("click", function(){
        var randValue = randCrystal();
        totalScore += randValue;
        $("#score").text(totalScore);
    });

    $("#crystalFour").on("click", function(){
        var randValue = randCrystal();
        totalScore += randValue;
        $("#score").text(totalScore);
    });
    

    // for(var i = 0; i < x.length; i++){

    // }

    if(totalScore === goal){
        $("#status").text("YOU WIN!");
        wins++;
        restart();
    }

    else if(totalScore > goal){
        $("#status").text("YOU LOSE!");
        losses++;
        restart();
    }


});
