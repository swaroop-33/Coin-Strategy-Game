function generateMoves(mode, limit) {
    let moves = [];

    if (mode === "seq") {
        return [1, 2, 3];
    }

    if (mode === "pow") {
        let x = 1;
        while (x <= limit) {
            moves.push(x);
            x *= 2;
        }
    }

    if (mode === "fib") {
        let a = 1, b = 1;
        moves.push(1);
        while (b <= limit) {
            moves.push(b);
            [a, b] = [b, a + b];
        }
    }

    return moves;
}
