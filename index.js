var p1Count = 0;
var p2Count = 0;
var games = 0;
function play() {
    document.getElementById("play").textContent = "Play Again!";
    var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
    var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6
    games++;
    //console.log(randomNumber1);
    //console.log(randomNumber2);
    document.getElementById("player1").querySelector("img").setAttribute("src","dice"+randomNumber1+".png");
    document.getElementById("player2").querySelector("img").setAttribute("src","dice"+randomNumber2+".png");
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
        p1Count++;
        document.getElementsByClassName("score1")[0].innerHTML = p1Count;
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
        p2Count++;
        document.getElementsByClassName("score2")[0].innerHTML = p2Count;
    } else {
        document.querySelector("h1").innerHTML = "Match Draw!";
    }
}

/*function reset() {
    p1Count = 0;
    p2Count = 0;
    games = 0;
    
    document.querySelector('.score1').textContent = '0';
    document.querySelector('.score2').textContent = '0';
    
    document.querySelector('.result').classList.add('invisible');
    
    document.querySelector('.heading').classList.remove('invisible');
    document.querySelector('.container').classList.remove('invisible');
    document.querySelector('.btn').classList.remove('invisible');
    document.querySelector('footer').classList.remove('invisible');
    
    document.querySelector('.lavishly-yours-regular').textContent = 'Click Refresh';
    document.querySelector('.btn button').textContent = 'Refresh';
    
    document.querySelector('#player1 img').setAttribute('src', 'images/player1.jpg');
    document.querySelector('#player2 img').setAttribute('src', 'images/player2.jpg');
}*/
/*function endGame(){


    //alert("Games Played: " + games + "\nPlayer 1 Score: " + p1Count + "\nPlayer 2 Score: " + p2Count);
    //document.getElementsByClassName("result")[0].classList.toggle("invisible");

    document.querySelector('.heading').classList.add('invisible');
    document.querySelector('.container').classList.add('invisible');
    document.querySelector('.btn').classList.add('invisible');
    document.querySelector('.result').classList.remove('invisible');

    var gamesPlayed =  games;
    var player1Score = p1Count; 
    var player2Score = p2Count;
    
    if (player1Score > player2Score) {
        document.getElementById('finalResult').textContent = "Player 1 Wins the Game!";
    } else if (player2Score > player1Score) {
        document.getElementById('finalResult').textContent = "Player 2 Wins the Game!";
    } else {
        document.getElementById('finalResult').textContent = "Game Draw!";
    }
    
    document.getElementById('g1').textContent = gamesPlayed;
    document.getElementById('g2').textContent = player1Score;
    document.getElementById('g3').textContent = player2Score;

}*/

function reset() {
    // Reset scores
    p1Count = 0;
    p2Count = 0;
    games = 0;
    
    // Update displayed scores
    document.querySelector('.score1').textContent = '0';
    document.querySelector('.score2').textContent = '0';
    
    // Hide result popup
    document.querySelector('.result').classList.add('invisible');
    
    // Show all game elements
    document.querySelector('.heading').classList.remove('invisible');
    document.querySelector('.container').classList.remove('invisible');
    document.querySelector('.btn').classList.remove('invisible');
    document.querySelector('footer').classList.remove('invisible');
    
    // Reset UI elements
    document.querySelector('.lavishly-yours-regular').textContent = 'Click Refresh';
    document.querySelector('.btn button').textContent = 'Refresh';
    document.querySelector('#player1 img').setAttribute('src', 'player1.jpg');
    document.querySelector('#player2 img').setAttribute('src', 'player2.jpg');
    
    // Remove game-ended class
    document.body.classList.remove('.game-ended');
}

function endGame(){
    
    document.querySelector('.result').classList.remove('invisible')

    var gamesPlayed = games;
    var player1Score = p1Count;
    var player2Score = p2Count;
    //console.log("Games Played: " + gamesPlayed + "\nPlayer 1 Score: " + player1Score + "\nPlayer 2 Score: " + player2Score);
    
    if(player1Score > player2Score) {
        document.getElementById('finalResult').textContent = "🚩 Player 1 Wins the Game!";
    }
    else if(player2Score > player1Score) {
        document.getElementById('finalResult').textContent = "🚩 Player 2 Wins the Game!";
    }
    else {
        document.getElementById('finalResult').textContent = "Game Draw!";
    }
    document.getElementById('g1').textContent = gamesPlayed;
    document.getElementById('g2').textContent = player1Score;
    document.getElementById('g3').textContent = player2Score;
}