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
				this.matrix[col][0] = j * 80 + 4;
				this.matrix[col][1] = i * 80 + 2 + 80;
			}
		}
	}

	showGrid() {
		for (let i = 0; i < 16; i++) {
            let sizeX = 75;
            let sizeY = 75;
            let posX = this.matrix[i][0];
            let posY = this.matrix[i][1];
    
            this.ctx.fillStyle = "#afafaf";

            this.ctx.beginPath();
            this.ctx.moveTo(sizeX + posX - 5, sizeY + posY);
            this.ctx.arcTo(0 + posX, sizeY + posY, 0 + posX, 0 + posY, 5);
            this.ctx.arcTo(0 + posX, 0 + posY, sizeX + posX, 0 + posY, 5);
            this.ctx.arcTo(sizeX + posX, 0 + posY, sizeX + posX, sizeY + posY, 5);
            this.ctx.arcTo(sizeX + posX, sizeY + posY, 0 + posX, sizeY + posY, 5)
            this.ctx.fill();
		}
	}

	showScore() {
        let sizeX = 160;
        let sizeY = 40;
        let posX = 80;
        let posY = 20;

        this.ctx.clearRect(posX - 2, posY - 2, sizeX + 4, sizeY + 4);
        this.ctx.fillStyle = "#cfc0af";
        this.ctx.fillRect(posX - 2, posY - 2, sizeX + 4, sizeY + 4);

        this.ctx.fillStyle = "#dadada";

        this.ctx.beginPath();
        this.ctx.moveTo(sizeX + posX - 20, sizeY + posY);
        this.ctx.arcTo(0 + posX, sizeY + posY, 0 + posX, 0 + posY, 20);
        this.ctx.arcTo(0 + posX, 0 + posY, sizeX + posX, 0 + posY, 20);
        this.ctx.arcTo(sizeX + posX, 0 + posY, sizeX + posX, sizeY + posY, 20);
        this.ctx.arcTo(sizeX + posX, sizeY + posY, 0 + posX, sizeY + posY, 20)
        this.ctx.fill();
        this.ctx.stroke();

		this.ctx.font = "bold 28px Sans";
		this.ctx.textAlign = "center";
		this.ctx.textBaseline = "middle";
		this.ctx.fillStyle = "black";
		this.ctx.fillText("Score: " + this.score, 160, 43);
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
