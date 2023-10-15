import { grid } from "./grid.js"
import { Tile } from "./tile.js"
import { cell } from "./cell.js"

const gameBoard = document.getElementById("game-board");

const grid = new Grid(gameBoard);
grid.getRandomEmptyCell().linkTile(new Tile(gameBoard));
grid.getRandomEmptyCell().linkTile(new Tile(gameBoard));
setupInputOnce();

function setupInputOnce() {
    window.addEventListener("keydown", handleInput, { once: true });
}

function handleInput(event) {
    switch (event.key) {
        case "ArrowUp":
            muveUp();
            break
            
        case "ArrowDown":
            break
            
        case "ArrowLeft":
            break
            
        case "ArrowRight":
            break
            
        default:
            setupInputOnce();
            return;
    }

    setupInputOnce();
}

function muveUp() {
    slideTiles(grid.cellsGroupedByColumn)9;
}