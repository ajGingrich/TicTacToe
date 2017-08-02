
var $turn = $('#turn');
///squares
var $casilla1 = $('#casilla1');
var $casilla2 = $('#casilla2');
var $casilla3 = $('#casilla3');
var $casilla4 = $('#casilla4');
var $casilla5 = $('#casilla5');
var $casilla6 = $('#casilla6');
var $casilla7 = $('#casilla7');
var $casilla8 = $('#casilla8');
var $casilla9 = $('#casilla9');
///winning lines
var $success1 = $('#success1');
var $success2 = $('#success2');
var $success3 = $('#success3');
var $success4 = $('#success4');
var $success5 = $('#success5');
var $success6 = $('#success6');
var $success7 = $('#success7');
var $success8 = $('#success8');
var $outcome = $('#outcome');

//pick a random square
randomSquare = function() {
    window.box = Math.floor((Math.random())*9)+1;
    window.$computerSquare = $('#casilla' + box);
    if ($($computerSquare).text() !== "") {
        randomSquare();
    }
};

///fade number in
numberIn = function() {
    $($computerSquare).hide().text(computer).fadeIn(1500);
    $($turn).fadeIn(1500);
};

//Show winner div
enterResults = function() {
    $('#outcomeContainer').fadeIn(500);
};

//hide the winning line
hideLine = function() {
    for (var j=1; j<9; j++) {
        $('#success' + j).hide();
    }
};

//check if empty
checkEmpty = function() {
    window.empty = false;
    for (var j =1; j<10; j++) {
        if ($('#casilla' + j).text() === "") {
            window.empty = true;
            break;
        }
    }
};

//check who won
theWinner = function() {

    if (user === "X" && winner === "crosses") {
        $($outcome).text("You Won! :-D");
        setTimeout(hideLine, 2000);
        setTimeout(enterResults, 2000);
    }
    else if (user === "O" && winner === "noughts") {
        $($outcome).text("You Won! :-D");
        setTimeout(hideLine, 2000);
        setTimeout(enterResults, 2000);
    }
    else {
        $($outcome).text("The computer beat you. Try again.");
        setTimeout(hideLine, 2000);
        setTimeout(enterResults, 2000);
    }
    ///fadeOut display and resetInstance
    setTimeout(function() {
        $('#outcomeContainer').fadeOut(500);
        resetInstance();
    }, 5000);
};

checkSuccess = function() {
    /// Could make more efficient so that computer looks for their winning possibilities first before blocking.
    var success1X = $($casilla1).text() === "X" && $($casilla2).text() === "X" && $($casilla3).text() === "X";
    var success1O = $($casilla1).text() === "O" && $($casilla2).text() === "O" && $($casilla3).text() === "O";
    var success2X = $($casilla4).text() === "X" && $($casilla5).text() === "X" && $($casilla6).text() === "X";
    var success2O = $($casilla4).text() === "O" && $($casilla5).text() === "O" && $($casilla6).text() === "O";
    var success3X = $($casilla7).text() === "X" && $($casilla8).text() === "X" && $($casilla9).text() === "X";
    var success3O = $($casilla7).text() === "O" && $($casilla8).text() === "O" && $($casilla9).text() === "O";
    var success4X = $($casilla1).text() === "X" && $($casilla4).text() === "X" && $($casilla7).text() === "X";
    var success4O = $($casilla1).text() === "O" && $($casilla4).text() === "O" && $($casilla7).text() === "O";
    var success5X = $($casilla2).text() === "X" && $($casilla5).text() === "X" && $($casilla8).text() === "X";
    var success5O = $($casilla2).text() === "O" && $($casilla5).text() === "O" && $($casilla8).text() === "O";
    var success6X = $($casilla3).text() === "X" && $($casilla6).text() === "X" && $($casilla9).text() === "X";
    var success6O = $($casilla3).text() === "O" && $($casilla6).text() === "O" && $($casilla9).text() === "O";
    var success7X = $($casilla1).text() === "X" && $($casilla5).text() === "X" && $($casilla9).text() === "X";
    var success7O = $($casilla1).text() === "O" && $($casilla5).text() === "O" && $($casilla9).text() === "O";
    var success8X = $($casilla3).text() === "X" && $($casilla5).text() === "X" && $($casilla7).text() === "X";
    var success8O = $($casilla3).text() === "O" && $($casilla5).text() === "O" && $($casilla7).text() === "O";
    window.winner = "";

    if (success1X || success2X || success3X || success4X || success5X || success6X || success7X || success8X) {
        window.winner = "crosses";
    }
    if (success1O || success2O || success3O || success4O || success5O || success6O || success7O || success8O) {
        window.winner = "noughts";
    }
    //draw Line
    if (success1X || success1O) {
        $($success1).fadeIn(1000);
        theWinner();
    }
    else if (success2X || success2O) {
        $($success2).fadeIn(1000);
        theWinner();
    }
    else if (success3X || success3O) {
        $($success3).fadeIn(1000);
        theWinner();
    }
    else if (success4X || success4O) {
        $($success4).fadeIn(1000);
        theWinner();
    }
    else if (success5X || success5O) {
        $($success5).fadeIn(1000);
        theWinner();
    }
    else if (success6X || success6O) {
        $($success6).fadeIn(1000);
        theWinner();
    }
    else if (success7X || success7O) {
        $($success7).fadeIn(1000);
        theWinner();
    }
    else if (success8X || success8O) {
        $($success8).fadeIn(1000);
        theWinner();
    }
    //if empty and nobody won, declare draw
    checkEmpty();
    if (!empty) {
        $($outcome).text("It was a draw...");
        setTimeout(enterResults, 1000);
        setTimeout(function() {
            $('#outcomeContainer').fadeOut(500);
            resetInstance();
        }, 4000);
    }

};

computerPlay = function(){
    ///The different two case combinations, There are a lot...////
    /////Horizontal/////
    var case1X = $($casilla1).text() === "X" && $($casilla2).text() === "X";
    var case1O = $($casilla1).text() === "O" && $($casilla2).text() === "O";
    var case2X = $($casilla2).text() === "X" && $($casilla3).text() === "X";
    var case2O = $($casilla2).text() === "O" && $($casilla3).text() === "O";
    var case3X = $($casilla1).text() === "X" && $($casilla3).text() === "X";
    var case3O = $($casilla1).text() === "O" && $($casilla3).text() === "O";
    var case4X = $($casilla4).text() === "X" && $($casilla5).text() === "X";
    var case4O = $($casilla4).text() === "O" && $($casilla5).text() === "O";
    var case5X = $($casilla5).text() === "X" && $($casilla6).text() === "X";
    var case5O = $($casilla5).text() === "O" && $($casilla6).text() === "O";
    var case6X = $($casilla4).text() === "X" && $($casilla6).text() === "X";
    var case6O = $($casilla4).text() === "O" && $($casilla6).text() === "O";
    var case7X = $($casilla7).text() === "X" && $($casilla8).text() === "X";
    var case7O = $($casilla7).text() === "O" && $($casilla8).text() === "O";
    var case8X = $($casilla8).text() === "X" && $($casilla9).text() === "X";
    var case8O = $($casilla8).text() === "O" && $($casilla9).text() === "O";
    var case9X = $($casilla8).text() === "X" && $($casilla9).text() === "X";
    var case9O = $($casilla8).text() === "O" && $($casilla9).text() === "O";
    ////Vertical/////
    var case11X = $($casilla1).text() === "X" && $($casilla4).text() === "X";
    var case11O = $($casilla1).text() === "O" && $($casilla4).text() === "O";
    var case12X = $($casilla4).text() === "X" && $($casilla7).text() === "X";
    var case12O = $($casilla4).text() === "O" && $($casilla7).text() === "O";
    var case13X = $($casilla1).text() === "X" && $($casilla7).text() === "X";
    var case13O = $($casilla1).text() === "O" && $($casilla7).text() === "O";
    var case14X = $($casilla2).text() === "X" && $($casilla5).text() === "X";
    var case14O = $($casilla2).text() === "O" && $($casilla5).text() === "O";
    var case15X = $($casilla5).text() === "X" && $($casilla8).text() === "X";
    var case15O = $($casilla5).text() === "O" && $($casilla8).text() === "O";
    var case16X = $($casilla2).text() === "X" && $($casilla8).text() === "X";
    var case16O = $($casilla2).text() === "O" && $($casilla8).text() === "O";
    var case17X = $($casilla3).text() === "X" && $($casilla6).text() === "X";
    var case17O = $($casilla3).text() === "O" && $($casilla6).text() === "O";
    var case18X = $($casilla6).text() === "X" && $($casilla9).text() === "X";
    var case18O = $($casilla6).text() === "O" && $($casilla9).text() === "O";
    var case19X = $($casilla3).text() === "X" && $($casilla9).text() === "X";
    var case19O = $($casilla3).text() === "O" && $($casilla9).text() === "O";
    ////Diag/////
    var case21X = $($casilla1).text() === "X" && $($casilla5).text() === "X";
    var case21O = $($casilla1).text() === "O" && $($casilla5).text() === "O";
    var case22X = $($casilla5).text() === "X" && $($casilla9).text() === "X";
    var case22O = $($casilla5).text() === "O" && $($casilla9).text() === "O";
    var case23X = $($casilla1).text() === "X" && $($casilla9).text() === "X";
    var case23O = $($casilla1).text() === "O" && $($casilla9).text() === "O";
    var case24X = $($casilla3).text() === "X" && $($casilla5).text() === "X";
    var case24O = $($casilla3).text() === "O" && $($casilla5).text() === "O";
    var case25X = $($casilla5).text() === "X" && $($casilla7).text() === "X";
    var case25O = $($casilla5).text() === "O" && $($casilla7).text() === "O";
    var case26X = $($casilla3).text() === "X" && $($casilla7).text() === "X";
    var case26O = $($casilla3).text() === "O" && $($casilla7).text() === "O";

    setTimeout(function() {
        ///Check to see if square is empty and needs to be filled to stop or give mate
        if ($($casilla1).text() === "" && (case2X || case2O || case12X || case12O || case22X || case22O)) {
            window.box = 1;
            window.$computerSquare = $('#casilla' + box);
        }
        else if ($($casilla2).text() === "" && (case3X || case3O || case15X || case15O)) {
            window.box = 2;
            window.$computerSquare = $('#casilla' + box);
        }
        else if ($($casilla3).text() === "" && (case1X || case1O || case18X || case18O || case25X || case25O)) {
            window.box = 3;
            window.$computerSquare = $('#casilla' + box);
        }
        else if ($($casilla4).text() === "" && (case5X || case5O || case13X || case13O)) {
            window.box = 4;
            window.$computerSquare = $('#casilla' + box);
        }
        else if ($($casilla5).text() === "" && (case6X || case6O || case16X || case16O || case23X || case23O || case26X || case26O)) {
            window.box = 5;
            window.$computerSquare = $('#casilla' + box);
        }
        else if ($($casilla6).text() === "" && (case4X || case4O || case19X || case19O)) {
            window.box = 6;
            window.$computerSquare = $('#casilla' + box);
        }
        else if ($($casilla7).text() === "" && (case8X || case8O || case11X || case11O || case24X || case24O)) {
            window.box = 7;
            window.$computerSquare = $('#casilla' + box);
        }
        else if ($($casilla8).text() === "" && (case9X || case9O || case14X || case14O)) {
            window.box = 8;
            window.$computerSquare = $('#casilla' + box);
        }
        else if ($($casilla9).text() === "" && (case7X || case7O || case17X || case17O || case21X || case21O)) {
            window.box = 9;
            window.$computerSquare = $('#casilla' + box);
        }
        else {
            randomSquare();
        }
        numberIn();

    },1000);

};

$('#X').click(function(){
    window.user = "X";
    window.computer = "O";
    $('#choose').fadeOut(1000);
    $('#game').fadeIn(1000);
    setTimeout(function(){
        $($turn).fadeIn(1500);
    }, 1000);
});

$('#O').click(function(){
    window.user = "O";
    window.computer = "X";
    $('#choose').fadeOut(1000);
    $('#game').fadeIn(1000);
    computerPlay();
});

// click on each one.
for (var i = 1; i <10; i++) {
    $('#casilla' + i).click(function(){
        //don't do anything on clicking square with text
        if ($(this).text() === "") {
            $(this).hide().text(user).fadeIn(1500);
            $($turn).fadeOut(500);
            //Check to see if there is an empty square
            checkEmpty();
            ///check if the user wins.
            checkSuccess();

            //make sure there is an empty square before the computer plays
            //make sure the user didn't win.
            if (empty && winner != "crosses" && winner != "noughts") {
                computerPlay();
            }
        }
        else {
            alert("Please select an empty square");
        }
        setTimeout(checkSuccess, 1500);
    });
}

//Reset////
resetEverything = function(){
    $('#game').fadeOut(1000);
    $('#choose').fadeIn(1000);
    window.winner = "";
    for (var i=1; i<10; i++) {
        $('#casilla' + i).text("");
    }
    hideLine();
};
resetInstance = function() {
    window.winner = "";
    for (var i=1; i<10; i++) {
        $('#casilla' + i).text("");
    }
    hideLine();
    if (user === "O") {
        computerPlay();
    }
};
$('#all').click(function(){
    resetEverything();
});
$('#resetGame').click(function(){
    resetInstance();
});

/*Bouncy!*/

