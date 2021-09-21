const canvas = document.getElementById('c1');
const ctx = canvas.getContext('2d');
let myColor = 'black';

document.getElementById('color').oninput = function () {
    myColor = this.value;
}

//
canvas.onmousedown = function (event) {
    const startX = event.offsetX;
    const startY = event.offsetY;
    canvas.onmousemove = function (event) {
        const x = event.offsetX;
        const y = event.offsetY;
        ctx.moveTo(startX, startY);
        startX === x ? ctx.lineTo(startX, y) : ctx.lineTo(x, startY);
        ctx.stroke();
        ctx.beginPath();
    }

    canvas.onmouseup = function () {
        canvas.onmousemove = null;
    }
}