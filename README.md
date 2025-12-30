# 🎮 Coin Picking AI Game

A Player vs AI strategy game built using HTML, CSS, and JavaScript.  
The objective is simple: **the player who picks the last coin wins**.

This project demonstrates how problem-solving concepts, game theory, and dynamic programming can be applied in an interactive and practical way.

🔗 **Live Demo:**  
https://coin-picking-ai-game.vercel.app/

---

## 🧠 Game Overview

- Two players: **Human (Player 1)** and **AI (Player 2)**
- User selects the total number of coins (N)
- Players take turns picking coins
- Allowed picks depend on the selected mode
- The player who picks the **last coin** is declared the winner

The AI makes strategic decisions instead of random moves.

---

## 🎯 Game Modes

1. **Sequence Mode**  
   Picks allowed: `1, 2, 3`

2. **Power of 2 Mode**  
   Picks allowed: `1, 2, 4, 8, ...`

3. **Fibonacci Mode**  
   Picks allowed: `1, 1, 2, 3, 5, 8, ...`

Only moves less than or equal to the remaining coins are allowed.

---

## 🤖 AI Logic

- Uses **dynamic programming**
- Identifies **winning and losing states**
- Forces optimal moves whenever possible
- Falls back to a valid move if no winning move exists

This ensures competitive and intelligent gameplay.

---

## 🛠️ Technologies Used

- HTML – Structure
- CSS – Styling, animations, and UI effects
- JavaScript – Game logic and AI strategy

No external libraries or frameworks were used.

---
