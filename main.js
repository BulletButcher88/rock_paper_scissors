// Rock, Paper, Scissors Variable 
var roshambo = ["paper", "rock", 'scissors']
    // IMAGE CHANGE 
var handImg = ["Images/paper.png", "Images/rock.png", "Images/scissors.png"]


// MOUSE HOVER EFFECT // JQUERY 
$('button').mouseleave(function() {
    $("section img").animate({
        opacity: '0.7',
    });
});
$('button').mouseenter(function() {
    $("section img").animate({
        opacity: '1',
    });

});

// BUTTON CLICK FUNCTION //
function theFunction() {



    // RANDOM GENERATOR TO BE ROSHAMBO INDEX
    var x = Math.floor(Math.random() * 3)
    var y = Math.floor(Math.random() * 3)


    // FUNCTION PROCESS COMPARING TWO ROSHAMBO
    $('.your-play img').attr('src', handImg[x])
    $('.comp-play img').attr('src', handImg[y])
        // $('.stamp img').attr('src', '').replace()
        // $('.comp-stamp img').attr('src', '').replace()


}
$('button').click(theFunction).setTimeout(() => {


    if (x === y) {
        $('.draw-boat img').attr('src', 'Images/winner-hand.png')

        // $('.stamp img').attr('src', '').replace()
        // console.log("ITS A DRAW")
    } else if (y === x + 1 || (x === 2 && y === 0)) {
        //   BAD WINNER
        $('.comp-stamp img').attr('src', 'Images/loseR.gif').replace();
        $('.comp-stamp img').css('transform', 'scaleX(1)');

        // console.log(x + " You WIN " + roshambo[x])
        // console.log(y + " Your opponent LOST " + roshambo[y])
    } else {
        //   BAD LOSER
        $('.stamp img').attr('src', 'Images/lose.gif').replace();
        $('.stamp img').css('transform', 'scaleX(1)');

        // console.log(x + " You LOST " + roshambo[x])
        // console.log(y + " Your opponent WON " + roshambo[y])
    }
});