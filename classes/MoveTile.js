export default class MoveTile {
    constructor(grid, tile) {
        this.grid = grid;
        this.tile = tile;
    }

	moveRight() {
		let sumValue = 0;

		for (let i = 0; i < 16; i += 4) {
			let rowPos = 0;

			for (let k = i + 3; k > i; k--) {
				rowPos = k;

                while (rowPos <= i + 3 && !this.grid.getState(rowPos) && this.grid.getState(rowPos - 1)) {
                    this.tile.addTile(rowPos, this.grid.getX(rowPos), this.grid.getY(rowPos), this.grid.getValue(rowPos - 1));
                    this.tile.removeTile(this.grid.getX(rowPos - 1), this.grid.getY(rowPos - 1));
                    rowPos++;
				}
			}

			for (let j = 3; j > 0; j--) {
				rowPos = i + j;

                if (this.grid.getState(rowPos - 1) && this.grid.getState(rowPos)) {
					if (this.grid.getValue(rowPos - 1) == this.grid.getValue(rowPos)) {

						sumValue = this.grid.getValue(rowPos - 1) + this.grid.getValue(rowPos);
						this.grid.addScore(this.grid.getValue(rowPos));

						this.tile.addTile(rowPos, this.grid.getX(rowPos), this.grid.getY(rowPos), sumValue);
						this.tile.removeTile(this.grid.getX(rowPos - 1), this.grid.getY(rowPos - 1));

						rowPos--;
						while (rowPos > i && this.grid.getState(rowPos - 1) && !this.grid.getState(rowPos)) {
							this.tile.addTile(rowPos, this.grid.getX(rowPos), this.grid.getY(rowPos), this.grid.getValue(rowPos - 1));
							this.tile.removeTile(this.grid.getX(rowPos - 1), this.grid.getY(rowPos - 1));
							rowPos--;
						}
					}
				}
			}
		}
	}

	moveLeft() {
		let sumValue = 0;

		for (let i = 0; i < 16; i += 4) {
			let rowPos = 0;
			
			for (let k = i + 1; k < i + 4; k++) {
				rowPos = k;
				
                while (rowPos > i && this.grid.getState(rowPos) && !this.grid.getState(rowPos - 1)) {
                    this.tile.addTile(rowPos - 1, this.grid.getX(rowPos - 1), this.grid.getY(rowPos - 1), this.grid.getValue(rowPos));
                    this.tile.removeTile(this.grid.getX(rowPos), this.grid.getY(rowPos));
                    rowPos--;
				}
			}

			for (let j = 1; j < 4; j++) {
				rowPos = i + j;

				if (this.grid.getState(rowPos) && this.grid.getState(rowPos)) {
					if (this.grid.getValue(rowPos - 1) == this.grid.getValue(rowPos)) {

						sumValue = this.grid.getValue(rowPos - 1) + this.grid.getValue(rowPos);
						this.grid.addScore(this.grid.getValue(rowPos));

						this.tile.addTile(rowPos - 1, this.grid.getX(rowPos -1), this.grid.getY(rowPos - 1), sumValue);
						this.tile.removeTile(this.grid.getX(rowPos), this.grid.getY(rowPos));

						rowPos++;
						while (rowPos < i + 4 && this.grid.getState(rowPos) && !this.grid.getState(rowPos - 1)) {
                            this.tile.addTile(rowPos - 1, this.grid.getX(rowPos - 1), this.grid.getY(rowPos - 1), this.grid.getValue(rowPos));
                            this.tile.removeTile(this.grid.getX(rowPos), this.grid.getY(rowPos));
                            rowPos++;
						}
					}
				}
			}
		}
	}

	moveUp() {
		let sumValue = 0;

		for (let i = 0; i < 4; i++) {
			let rowPos = 0;

			for (let j = i + 4; j < 16; j += 4) {
				rowPos = j;

				while (rowPos >= 4 && this.grid.getState(rowPos) && !this.grid.getState(rowPos - 4)) {
                    this.tile.addTile(rowPos - 4, this.grid.getX(rowPos - 4), this.grid.getY(rowPos - 4), this.grid.getValue(rowPos));
                    this.tile.removeTile(this.grid.getX(rowPos), this.grid.getY(rowPos));
                    rowPos -= 4;
				}
			}

			for (let k = i + 4; k < 16; k += 4) {
				rowPos = k;

				if (this.grid.getState(rowPos) && this.grid.getState(rowPos - 4)) {
					if (this.grid.getValue(rowPos) == this.grid.getValue(rowPos - 4)) {

						sumValue = this.grid.getValue(rowPos - 4) + this.grid.getValue(rowPos);
						this.grid.addScore(this.grid.getValue(rowPos));

						this.tile.addTile(rowPos - 4, this.grid.getX(rowPos - 4), this.grid.getY(rowPos - 4), sumValue);
						this.tile.removeTile(this.grid.getX(rowPos), this.grid.getY(rowPos));

						rowPos += 4;
						while (rowPos < 16 && this.grid.getState(rowPos) && !this.grid.getState(rowPos - 4)) {
							this.tile.addTile(rowPos - 4, this.grid.getX(rowPos - 4), this.grid.getY(rowPos - 4), this.grid.getValue(rowPos));
							this.tile.removeTile(this.grid.getX(rowPos), this.grid.getY(rowPos));
							rowPos += 4;
						}
					}
				}
			}
		}
	}

	moveDown() {
		let sumValue = 0;

		for (let i = 15; i > 11; i--) {
			let rowPos = 0;

			for (let j = i; j >= 4; j -= 4) {
				rowPos = j;

                while (rowPos < 16 && !this.grid.getState(rowPos) && this.grid.getState(rowPos - 4)) {
						this.tile.addTile(rowPos, this.grid.getX(rowPos), this.grid.getY(rowPos), this.grid.getValue(rowPos - 4));
						this.tile.removeTile(this.grid.getX(rowPos - 4), this.grid.getY(rowPos - 4));
						rowPos += 4;
				}
			}

			for (let k = i; k >= 4; k -= 4) {
				rowPos = k;

				if (this.grid.getState(rowPos) && this.grid.getState(rowPos - 4)) {
					if (this.grid.getValue(rowPos) == this.grid.getValue(rowPos - 4)) {

						sumValue = this.grid.getValue(rowPos - 4) + this.grid.getValue(rowPos);
						this.grid.addScore(this.grid.getValue(rowPos));

						this.tile.addTile(rowPos, this.grid.getX(rowPos), this.grid.getY(rowPos), sumValue);
						this.tile.removeTile(this.grid.getX(rowPos - 4), this.grid.getY(rowPos - 4));

						rowPos -= 4;
						while (rowPos >= 4 && !this.grid.getState(rowPos) && this.grid.getState(rowPos - 4)) {
							this.tile.addTile(rowPos, this.grid.getX(rowPos), this.grid.getY(rowPos), this.grid.getValue(rowPos - 4));
							this.tile.removeTile(this.grid.getX(rowPos - 4), this.grid.getY(rowPos - 4));
							rowPos -= 4;
						}
					}
				}
			}
		}
	}

	isMoveLeft() {
		for (let i = 1; i < 16; i += 4) {
			for (let j = i; j < 3 + i; j++) {
				if (this.grid.getState(j) && !this.grid.getState(j - 1)) return true;
				if (this.grid.getState(j) && this.grid.getState(j - 1) && this.grid.getValue(j) == this.grid.getValue(j - 1)) return true;
			}
		}
		return false;
	}

	isMoveRight() {
		for (let i = 0; i < 15; i += 4) {
			for (let j = i; j < 3 + i; j++) {
				if (this.grid.getState(j) && !this.grid.getState(j + 1)) return true;
				if (this.grid.getState(j) && this.grid.getState(j + 1) && this.grid.getValue(j) == this.grid.getValue(j + 1)) return true;
			}
		}
		return false;
	}

	isMoveUp() {
		for (let i = 4; i < 16; i += 4) {
			for (let j = i; j < 4 + i; j++) {
				if (this.grid.getState(j) && !this.grid.getState(j - 4)) return true;
				if (this.grid.getState(j) && this.grid.getState(j - 4) && this.grid.getValue(j) == this.grid.getValue(j - 4)) return true;
			}
		}
		return false;
	}

	isMoveDown() {
		for (let i = 0; i < 12; i += 4) {
			for (let j = i; j < 4 + i; j++) {
				if (this.grid.getState(j) && !this.grid.getState(j + 4)) return true;
				if (this.grid.getState(j) && this.grid.getState(j + 4) && this.grid.getValue(j) == this.grid.getValue(j + 4)) return true;
			}
		}
		return false;
	}
}