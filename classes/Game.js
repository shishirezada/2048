export default class Game {
    constructor(grid, tile) {
        this.grid = grid;
        this.tile = tile;
    }

    randomValueTile() {
        let random = Math.floor(Math.random() * 100 + 1);
        if (random <= 90) return 2;
        if (random >= 90) return 4;
    }

    randomPosTile() {
        return Math.floor(Math.random() * 16);
    }

    addTile() {
        let newValueTile = this.randomValueTile();
        let newPosTile = this.randomPosTile();
    
        while (this.grid.getState(newPosTile)) {
            newPosTile = this.randomPosTile();
        }
        this.tile.addTile(newPosTile, this.grid.getX(newPosTile), this.grid.getY(newPosTile), newValueTile);
    }

    startGame() {
		let newPosTile = this.randomPosTile();
	
		while (this.grid.getState(newPosTile)) {
			newPosTile = this.randomPosTile();
		}
		this.tile.addTile(newPosTile, this.grid.getX(newPosTile), this.grid.getY(newPosTile), 2);
	
		while (this.grid.getState(newPosTile)) {
			newPosTile = this.randomPosTile();
		}
		this.tile.addTile(newPosTile, this.grid.getX(newPosTile), this.grid.getY(newPosTile), 2);
    }

    isGameWin() {
		for (let i = 0; i < 16; i++) {
			if (this.grid.getValue(i) == 2048) {
				alert("Уровень пройден.")
				this.restartGame();
				return true;
			}
		}
		return false;
	}

	isGameOver() {
		let gameOver = false;

		for (let i = 1; i < 16; i += 4) {
			for (let j = i; j < 3 + i; j++) {
				if (this.grid.getState(j) && !this.grid.getState(j - 1)) return gameOver;
				if (this.grid.getState(j) && this.grid.getState(j - 1) && this.grid.getValue(j) == this.grid.getValue(j - 1)) return gameOver;

				if (i < 15 && this.grid.getState(j - 1) && !this.grid.getState(j)) return gameOver;
				if (i < 15 && this.grid.getState(j - 1) && this.grid.getState(j) && this.grid.getValue(j - 1) == this.grid.getValue(j)) return gameOver;
			}
		}

		for (let i = 4; i < 16; i += 4) {
			for (let j = i; j < 4 + i; j++) {
				if (this.grid.getState(j) && !this.grid.getState(j - 4)) return gameOver;
				if (this.grid.getState(j) && this.grid.getState(j - 4) && this.grid.getValue(j) == this.grid.getValue(j - 4)) return gameOver;

				if (i < 12 && this.grid.getState(j - 4) && !this.grid.getState(j)) return gameOver;
				if (i < 12 && this.grid.getState(j - 4) && this.grid.getState(j) && this.grid.getValue(j - 4) == this.grid.getValue(j)) return gameOver;
			}
		}
		gameOver = true;

		if (gameOver) {
			alert("Нельзя сделать ход!");
			this.restartGame();
			return gameOver;
		}
	}

	restartGame() {
		for (let i = 0; i < 16; i++) {
			this.tile.removeTile(this.grid.getX(i),  this.grid.getY(i));
		}
		this.grid.addScore(0);
		this.startGame();
	}
}