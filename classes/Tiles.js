export default class Tiles {
    constructor(ctx, grid) {
        this.ctx = ctx;
        this.grid = grid;
    }

    setColorTile(value) {
		switch(value) {
			case 2:
				this.ctx.fillStyle = "#eee4d9";
				break;
			case 4:
				this.ctx.fillStyle = "#ede0c7";
				break;
			case 8:
				this.ctx.fillStyle = "#f9b376";
				break;
			case 16:
				this.ctx.fillStyle = "#ff9b60";
				break;
			case 32:
				this.ctx.fillStyle = "#ca6a49";
				break;
			case 64:
				this.ctx.fillStyle = "#ec6233";
				break;
			case 128:
				this.ctx.fillStyle = "#e8c562";
				break;
			case 256:
				this.ctx.fillStyle = "#dfba55";
				break;
			case 512:
				this.ctx.fillStyle = "#f3c54b";
				break;
			case 1024:
				this.ctx.fillStyle = "#f2c138";
				break;
			case 2048:
				this.ctx.fillStyle = "#f2bd28";
				break;
			default:
				this.ctx.fillStyle = "#afafaf";
		}
	}

    addTile(TileID, x, y, value) {
		let sizeX = 75;
        let sizeY = 75;
        let posX = x;
        let posY = y;

        this.ctx.clearRect(posX - 2, posY - 2, sizeX + 4, sizeY + 4);
        this.ctx.fillStyle = "#cfc0af";
        this.ctx.fillRect(posX - 2, posY - 2, sizeX + 4, sizeY + 4);
		
		this.grid.setValue(TileID, value);
		this.setColorTile(value);

        this.ctx.beginPath();
        this.ctx.moveTo(sizeX + posX - 5, sizeY + posY);
        this.ctx.arcTo(0 + posX, sizeY + posY, 0 + posX, 0 + posY, 5);
        this.ctx.arcTo(0 + posX, 0 + posY, sizeX + posX, 0 + posY, 5);
        this.ctx.arcTo(sizeX + posX, 0 + posY, sizeX + posX, sizeY + posY, 5);
        this.ctx.arcTo(sizeX + posX, sizeY + posY, 0 + posX, sizeY + posY, 5);
        this.ctx.fill();
        this.ctx.stroke();


		this.ctx.font = "bold 32px Sans";
		this.ctx.textAlign = "center";
		this.ctx.textBaseline = "middle";
		this.ctx.fillStyle = "#222";

		this.ctx.fillText(value, x + 37.5, y + 37.5);
		this.setPos(x, y);
	}

	removeTile(x, y) {
        let sizeX = 75;
        let sizeY = 75;
        let posX = x;
        let posY = y;

        this.ctx.clearRect(posX - 2, posY - 2, sizeX + 4, sizeY + 4);
        this.ctx.fillStyle = "#cfc0af";
        this.ctx.fillRect(posX - 2, posY - 2, sizeX + 4, sizeY + 4);

        this.setColorTile(0);

        this.ctx.beginPath();
        this.ctx.moveTo(sizeX + posX - 5, sizeY + posY);
        this.ctx.arcTo(0 + posX, sizeY + posY, 0 + posX, 0 + posY, 5);
        this.ctx.arcTo(0 + posX, 0 + posY, sizeX + posX, 0 + posY, 5);
        this.ctx.arcTo(sizeX + posX, 0 + posY, sizeX + posX, sizeY + posY, 5);
        this.ctx.arcTo(sizeX + posX, sizeY + posY, 0 + posX, sizeY + posY, 5);
        this.ctx.fill();


		for (let i = 0; i < 16; i++) {
			if (this.grid.getX(i) == x && this.grid.getY(i) == y) {
				this.grid.setState(i, false);
				this.grid.setValue(i, 0);
				break;
			}
		}
	}

    setPos(x, y) {
		for (let i = 0; i < 16; i++) {
		if (this.grid.getX(i) == x && this.grid.getY(i) == y) {
				this.grid.setState(i, true);
				break;
			}
		}
	}
}
