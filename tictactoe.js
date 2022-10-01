const playerX = 'X'
const player0 = '0'
let noClicks = 0;
const XPositions = [];
const OPositions = [];

function player0Turn() {
    for(let i = 0; i < 9; ++i) {
        document.getElementById(i).onclick= function() {
            ++noClicks;
            document.getElementById(i).innerHTML = player0;
            document.getElementById(i).disabled = true;
            playerXTurn();
            ++OPositions[i];
            checkWinner(OPositions, "0");
            document.getElementById("playerTurn").innerHTML = "Player " + playerX + " turn";
        }
    }
}

function playerXTurn() {
    for(let i = 0; i < 9; ++i) {
        document.getElementById(i).onclick= function() {
            ++noClicks;
            document.getElementById(i).innerHTML = playerX;
            document.getElementById(i).disabled = true;
            player0Turn();
            ++XPositions[i];
            checkWinner(XPositions, "x");
            document.getElementById("playerTurn").innerHTML = "Player " + player0 + " turn";
        }
    }
}

function checkWinner(positions, player) {
     if((positions[0] != 0 && positions[1] != 0 && positions[2] != 0) ||
        (positions[3] != 0 && positions[4] != 0 && positions[5] != 0) || 
        (positions[6] != 0 && positions[7] != 0 && positions[8] != 0) ||
        (positions[0] != 0 && positions[3] != 0 && positions[6] != 0) ||
        (positions[1] != 0 && positions[4] != 0 && positions[7] != 0) ||
        (positions[2] != 0 && positions[5] != 0 && positions[8] != 0) ||
        (positions[0] != 0 && positions[4] != 0 && positions[8] != 0) ||
        (positions[2] != 0 && positions[4] != 0 && positions[6] != 0)) {
        document.getElementById("winningMessageText").innerHTML = "Player " + player + " win!";
        document.getElementById("matrix").disabled = true;
        coloredLine(positions);
    } else if(noClicks == 9) {
        document.getElementById("winningMessageText").innerHTML = "It's a draw";
        document.getElementById("matrix").disabled = true;
    }
}

function coloredLine(positions) {
    if((positions[0] != 0 && positions[1] != 0 && positions[2] != 0)) {
        document.getElementById(2).style.backgroundColor = "lime";
        document.getElementById(1).style.backgroundColor = "lime";
        document.getElementById(0).style.backgroundColor = "lime";
    } else if((positions[3] != 0 && positions[4] != 0 && positions[5] != 0)) {
        document.getElementById(3).style.backgroundColor = "lime";
        document.getElementById(4).style.backgroundColor = "lime";
        document.getElementById(5).style.backgroundColor = "lime";
    } else if( (positions[6] != 0 && positions[7] != 0 && positions[8] != 0)) {
        document.getElementById(6).style.backgroundColor = "lime";
        document.getElementById(7).style.backgroundColor = "lime";
        document.getElementById(8).style.backgroundColor = "lime";
    } else if((positions[0] != 0 && positions[3] != 0 && positions[6] != 0)) {
        document.getElementById(0).style.backgroundColor = "lime";
        document.getElementById(3).style.backgroundColor = "lime";
        document.getElementById(6).style.backgroundColor = "lime";
    } else if((positions[1] != 0 && positions[4] != 0 && positions[7] != 0)) {
        document.getElementById(1).style.backgroundColor = "lime";
        document.getElementById(4).style.backgroundColor = "lime";
        document.getElementById(7).style.backgroundColor = "lime";
    } else if((positions[2] != 0 && positions[5] != 0 && positions[8] != 0)) {
        document.getElementById(2).style.backgroundColor = "lime";
        document.getElementById(5).style.backgroundColor = "lime";
        document.getElementById(8).style.backgroundColor = "lime";
    } else if((positions[0] != 0 && positions[4] != 0 && positions[8] != 0)) {
        document.getElementById(0).style.backgroundColor = "lime";
        document.getElementById(4).style.backgroundColor = "lime";
        document.getElementById(8).style.backgroundColor = "lime";
    } else if((positions[2] != 0 && positions[4] != 0 && positions[6] != 0)) {
        document.getElementById(2).style.backgroundColor = "lime";
        document.getElementById(4).style.backgroundColor = "lime";
        document.getElementById(6).style.backgroundColor = "lime";
    }
}

function startGame() {
    playerXTurn();
    for(let i = 0; i < 9; ++i) {
        XPositions[i] = 0;
        OPositions[i] = 0;
    }
    document.getElementById("playerTurn").innerHTML = "Player X turn";
}

function resetGame() {
    location.reload();
}

