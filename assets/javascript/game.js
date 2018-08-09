// intialize multiple required variables

var goal;
var wins = 0;
var losses = 0;
var totalScore = 0;
var crystalInt = [];    
var started = false;


$(document).ready(function(){

    // generates a random number between 19 and 120 based on the limitations of the 'goal' value
    
    function randCrystal(){
        return (Math.floor(Math.random()*12) + 1);
    }

    // resets all the fundamental variables to the initial values
    function restart(){
            
            totalScore = 0;
            crystalInt = [];

            for (var i = 0; i < 4; i++){
                crystalInt[i] = randCrystal();
            }
            
            goal = (Math.floor(Math.random()*102) + 19);
            $("#goal").text(goal);
            console.log(goal);
            
    }

    // starts the game when s is pressed
    document.onkeyup = function(input){

        // restart function only starts with an "s" press if the game has not been started
        if(started === false && input.key.toLowerCase() === 's'){
            restart();
            started = true;
            $("p").text("");
        }
    }

    // individual on-click functions for each button

    $("#crystalOne").on("click", function(){
        totalScore += crystalInt[0];
        console.log(crystalInt[0])
        $("#score").text(totalScore);
    });

    $("#crystalTwo").on("click", function(){
        totalScore += crystalInt[1];
        console.log(crystalInt[1])
        $("#score").text(totalScore);
    });

    $("#crystalThree").on("click", function(){
        totalScore += crystalInt[2];
        console.log(crystalInt[2])
        $("#score").text(totalScore);
    });

    $("#crystalFour").on("click", function(){
        totalScore += crystalInt[3];
        console.log(crystalInt[3])
        $("#score").text(totalScore);
    });

    // checks if player has won or lost

    var goku = new Audio("assets/ss3.mp3");

    $(".button").on("click", function(){
        $("#status").text("");
        goku.play();
        if(started === false){
            alert("Press 's' to start!");
            $("#score").text("");
            
        }

        if(totalScore === goal){
            $("#status").text("YOU WIN!");
            wins++;
            console.log("Wins: " + wins);
            $("#wins").html("Wins: " + wins);
            restart();
        }

        else if(totalScore > goal){
            $("#status").text("YOU LOSE! Try again!");
            losses++;
            console.log("Losses: " + losses);
            $("#losses").html("Losses: " + losses);
            restart();
        }
    });
  
});
