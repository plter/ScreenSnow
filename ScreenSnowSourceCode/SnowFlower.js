const electron = require("electron");
const workAreaSize = electron.remote.screen.getPrimaryDisplay().workAreaSize;

class SnowFlower {

    constructor() {
        this._img = document.createElement("img");
        this._img.src = "res/snowflower.png";
        this._img.width = Math.random() * 8 + 2;

        this.moveBindThis = this.move.bind(this);
        this.moveBindThis();

        this.x = Math.random() * workAreaSize.width;
        this.y = -20;
        this.rotation = 0;
        this.speedX = (Math.random() + 1) * (Math.random() > 0.5 ? 1 : -1);
        this.speedY = (Math.random() + 1);
        this.speedRotation = (Math.random() + 1) * (Math.random() > 0.5 ? 1 : -1);
    }


    get img() {
        return this._img;
    }

    move() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.speedRotation;

        this.img.style.transform = `translate(${this.x}px,${this.y}px) rotate(${this.rotation}deg)`;

        if (this.x > workAreaSize.width || this.x < 0 || this.y > workAreaSize.height) {
            if (this._img.parentNode) {
                this._img.parentNode.removeChild(this._img);
            }
        } else {
            requestAnimationFrame(this.moveBindThis);
        }
    }
}


module.exports = SnowFlower;