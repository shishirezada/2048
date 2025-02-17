import Game from "./classes/Game.js";
import Grid from "./classes/Grid.js";
import Tiles from "./classes/Tiles.js";
import MoveTile from "./classes/MoveTile.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width  = 400;
canvas.height = 485;

ctx.fillStyle = "#cfc0af";

let sizeX = 360;
let sizeY = 360;
let posX = (canvas.width - 360) / 2;
let posY = (canvas.height - 360) - 20;

ctx.beginPath();
ctx.moveTo(sizeX + posX - 5, sizeY + posY);
ctx.arcTo(posX, sizeY + posY, posX, posY, 5);
ctx.arcTo(posX, posY, sizeX + posX, posY, 5);
ctx.arcTo(sizeX + posX, posY, sizeX + posX, sizeY + posY, 5);
ctx.arcTo(sizeX + posX, sizeY + posY, posX, sizeY + posY, 5)
ctx.fill();
ctx.stroke();

let grid = new Grid(ctx);
let tile = new Tiles(ctx, grid);
let game = new Game(grid, tile);
let move = new MoveTile(grid, tile);

grid.showGrid();
grid.showScore();
game.startGame();



let oldX = 0;
let oldY = 0;
let newX = 0;
let newY = 0;

document.addEventListener('pointerdown', function(event) {
	oldX = event.pageX;
	oldY = event.pageY;
});

document.addEventListener('pointerup', function(event) {
	newX = event.clientX;
	newY = event.clientY;

	let distX = newX - oldX;
	let distY = newY - oldY;

	if (Math.abs(distX) > Math.abs(distY) && Math.abs(distX) > 90) {
		if (newX < oldX) {
			if (!game.isGameOver() && move.isMoveLeft()) {
				move.moveLeft();
				if(!game.isGameWin()) game.addTile();
			}
		} else if (newX > oldX) {
			if (!game.isGameOver() && move.isMoveRight()) {
				move.moveRight();
				if(!game.isGameWin()) game.addTile();
			}
		}
	}

	if (Math.abs(distY) > Math.abs(distX) && Math.abs(distY) > 90) {
		if (newY < oldY) {
			if (!game.isGameOver() && move.isMoveUp()) {
				move.moveUp();
				if(!game.isGameWin()) game.addTile();
			}
		} else if (newY > oldY) {
			if (!game.isGameOver() && move.isMoveDown()) {
				move.moveDown();
				if(!game.isGameWin()) game.addTile();
			}
		}
	}
});

document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case 'ArrowUp':
			if (!game.isGameOver() && move.isMoveUp()) {
				move.moveUp();
				if(!game.isGameWin()) game.addTile();
			}
			break;
        case 'ArrowDown':
			if (!game.isGameOver() && move.isMoveDown()) {
				move.moveDown();
				if(!game.isGameWin()) game.addTile();
			}
			break;
        case 'ArrowLeft':
			if (!game.isGameOver() && move.isMoveLeft()) {
				move.moveLeft();
				if(!game.isGameWin()) game.addTile();
			}
			break;
        case 'ArrowRight':
			if (!game.isGameOver() && move.isMoveRight()) {
				move.moveRight();
				if(!game.isGameWin()) game.addTile();
			}
			break;
    }
});