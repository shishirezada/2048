export default class Grid {
    constructor(ctx) {
        this.ctx = ctx;
        this.setGrid();
    }

	score = 0;
    matrix = [
        [0, 0, false, 0], [0, 0, false, 0], [0, 0, false, 0], [0, 0, false, 0],
        [0, 0, false, 0], [0, 0, false, 0], [0, 0, false, 0], [0, 0, false, 0],
        [0, 0, false, 0], [0, 0, false, 0], [0, 0, false, 0], [0, 0, false, 0],
        [0, 0, false, 0], [0, 0, false, 0], [0, 0, false, 0], [0, 0, false, 0]
    ];

	setGrid () {
		for (let i = 0, col = 0; i < 4; i++) {
			for (let j = 0; j < 4; j++, col++) {
				this.matrix[col][0] = j * 80 + 20 + 22;
				this.matrix[col][1] = i * 80 + 105 + 22;
			}
		}
	}

	showGrid() {
		for (let i = 0; i < 16; i++) {
            let sizeX = 75;
            let sizeY = 75;
            let posX = this.matrix[i][0];
            let posY = this.matrix[i][1];
    
            this.ctx.fillStyle = "#cfc0af";

            this.ctx.beginPath();
            this.ctx.moveTo(sizeX + posX - 5, sizeY + posY);
            this.ctx.arcTo(posX, sizeY + posY, posX, posY, 5);
            this.ctx.arcTo(posX, posY, sizeX + posX, posY, 5);
            this.ctx.arcTo(sizeX + posX, posY, sizeX + posX, sizeY + posY, 5);
            this.ctx.arcTo(sizeX + posX, sizeY + posY, posX, sizeY + posY, 5)
            this.ctx.fill();
		}
	}

	showScore() {
        let sizeX = 248;
        let sizeY = 63;
        let posX = 80;
        let posY = 20;

        this.ctx.clearRect(posX - 2, posY - 2, sizeX + 4, sizeY + 4);
        this.ctx.fillStyle = "#fff";
        this.ctx.fillRect(posX - 2, posY - 2, sizeX + 4, sizeY + 4);

        this.ctx.fillStyle = "#dadada";

        this.ctx.beginPath();
        this.ctx.moveTo(sizeX + posX - 30, sizeY + posY);
        this.ctx.arcTo(posX, sizeY + posY, posX, posY, 30);
        this.ctx.arcTo(posX, posY, sizeX + posX, posY, 30);
        this.ctx.arcTo(sizeX + posX, posY, sizeX + posX, sizeY + posY, 30);
        this.ctx.arcTo(sizeX + posX, sizeY + posY, posX, sizeY + posY, 30)
        this.ctx.fill();
        this.ctx.stroke();

		this.ctx.font = "400 32px Arial";
		this.ctx.textAlign = "center";
		this.ctx.textBaseline = "middle";
		this.ctx.fillStyle = "black";
		this.ctx.fillText("СЧЁТ: " + this.score, 200, 53);
	}

	addScore(score) {
		if (score != 0) {
			this.score += score;
            
		} else {
			this.score = 0;
		}
		this.showScore();
	}

    getX(cell) {
        return this.matrix[cell][0];
    }

    getY(cell) {
        return this.matrix[cell][1];
    }

    getState(pos) {
        return this.matrix[pos][2];
    }

	setState(pos, newState) {
		this.matrix[pos][2] = newState;
	}

    getValue(pos) {
        return this.matrix[pos][3];
    }

	setValue(pos, newValue) {
		this.matrix[pos][3] = newValue;
	}
}
