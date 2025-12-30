let coins = 0;
let moves = [];
let playerTurn = true;

function startGame() {
    coins = parseInt(document.getElementById("coinSelect").value);
    let mode = document.getElementById("modeSelect").value;

    moves = generateMoves(mode, coins);
    playerTurn = true;

    document.getElementById("resultBox").className = "hidden";
    document.getElementById("status").innerText = "Your Turn 🧑";
    updateUI();
}

function updateUI() {
    document.getElementById("coins").innerText =
        "Coins Remaining: " + coins;

    let controls = document.getElementById("controls");
    controls.innerHTML = "";

    if (!playerTurn) return;

    for (let m of moves) {
        if (m <= coins) {
            let btn = document.createElement("button");
            btn.innerText = "Pick " + m;
            btn.onclick = () => playerMove(m);
            controls.appendChild(btn);
        }
    }
}

function showResult(message, type) {
    const box = document.getElementById("resultBox");
    box.className = "";
    box.classList.add(type);
    box.innerHTML = message;
}

function playerMove(m) {
    coins -= m;

    if (coins === 0) {
        showResult("🎉 YOU WIN! 🏆<br>Brilliant Strategy!", "win");
        document.getElementById("status").innerText = "Game Over";
        document.getElementById("controls").innerHTML = "";
        return;
    }

    playerTurn = false;
    document.getElementById("status").innerText = "AI Thinking 🤖...";
    setTimeout(aiMove, 700);
}

function aiMove() {
    let m = aiBestMove(coins, moves);
    coins -= m;

    if (coins === 0) {
        showResult("🤖 AI WINS! 🔥<br>Outplayed by the Machine!", "lose");
        document.getElementById("status").innerText = "Game Over";
        document.getElementById("controls").innerHTML = "";
        return;
    }

    playerTurn = true;
    document.getElementById("status").innerText = "Your Turn 🧑";
    updateUI();
}
