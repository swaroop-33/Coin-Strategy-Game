function aiBestMove(coins, moves) {
    let win = Array(coins + 1).fill(false);

    for (let i = 1; i <= coins; i++) {
        for (let m of moves) {
            if (m <= i && win[i - m] === false) {
                win[i] = true;
                break;
            }
        }
    }

    for (let m of moves) {
        if (m <= coins && win[coins - m] === false) {
            return m;
        }
    }

    let valid = moves.filter(x => x <= coins);
    return valid[Math.floor(Math.random() * valid.length)];
}
