// Define grid dimensions
const gridSize = 5;
let board = [];

// Initialize game board
function createBoard() {
    const gameBoard = document.getElementById("game-board");
    gameBoard.innerHTML = ""; // Clear any existing board
    board = Array.from({ length: gridSize }, () => Array(gridSize).fill(0)); // Reset board state

    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            const cell = document.createElement("button");
            cell.dataset.row = row;
            cell.dataset.col = col;
            cell.classList.add("cell"); // Add a common class for styling
            cell.addEventListener("click", () => toggleLights(row, col));
            gameBoard.appendChild(cell);
        }
    }
}

// Toggle the clicked cell and its neighbors
function toggleLights(row, col) {
    const directions = [
        [0, 0],    // The clicked cell
        [0, 1],    // Right neighbor
        [1, 0],    // Bottom neighbor
        [0, -1],   // Left neighbor
        [-1, 0]    // Top neighbor
    ];

    directions.forEach(([dr, dc]) => {
        const r = row + dr;
        const c = col + dc;
        if (r >= 0 && r < gridSize && c >= 0 && c < gridSize) {
            // Toggle the cell state
            board[r][c] = 1 - board[r][c];
            const cell = document.querySelector(`[data-row='${r}'][data-col='${c}']`);
            cell.classList.toggle("is-off", board[r][c] === 1);
        }
    });

    // Check if the game is won
    if (isGameWon()) {
        setTimeout(() => window.alert("You win!"), 100); // Delay to allow UI updates
    }
}

// Check if all lights are off
function isGameWon() {
    return board.flat().every(cell => cell === 0);
}

// Randomly toggle cells to create a solvable configuration
function randomizeBoard() {
    const randomMoves = Math.floor(Math.random() * 10) + 5; // Random number of moves
    for (let i = 0; i < randomMoves; i++) {
        const row = Math.floor(Math.random() * gridSize);
        const col = Math.floor(Math.random() * gridSize);
        toggleLights(row, col);
    }
}

// Initialize the game
document.addEventListener("DOMContentLoaded", () => {
    createBoard();
    randomizeBoard();
});
