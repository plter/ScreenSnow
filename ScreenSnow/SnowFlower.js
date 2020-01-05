const electron = require("electron");

class SnowFlower {


    constructor() {
        let area = electron.remote.screen.getPrimaryDisplay().workAreaSize;
        this.workAreaWidth = area.width;
        this.workAreaHeight = area.height;
        this.x = Math.random() * this.workAreaWidth;
        this.y = -20;
        this.speedX = (Math.random() + 1) / 5 * (Math.random() > 0.5 ? 1 : -1);
        this.speedY = (Math.random() + 1) / 5;
        this.speedRotation = (Math.random() + 1) * (Math.random() > 0.5 ? 1 : -1);
        this.angle = 0;
        this._img = document.createElement("img");
        this._img.src = "res/snowflower.png";
        this._img.width = Math.random() * 7 + 3;

        this.moveBindThis = this.move.bind(this);
        this.moveBindThis();
    }

    move() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.angle += this.speedRotation;
        this._img.style.transform = `translate(${this.x}px,${this.y}px) rotate(${this.angle}deg)`;

        if (this.x < 0 || this.x > this.workAreaWidth || this.y > this.workAreaHeight) {
            if (this._img.parentNode) {
                this._img.parentNode.removeChild(this._img);
            }
        } else {
            requestAnimationFrame(this.moveBindThis);
        }
    }
}

module.exports = SnowFlower;