"use strict";
window.addEventListener("load", handleLoad);
let currentColor;
let canvas;
let crc2;
let painting;
let redBtn;
let greenBtn;
let blueBtn;
let clearBtn;
function handleLoad(_event) {
    canvas = document.querySelector("canvas");
    if (!canvas)
        return;
    crc2 = canvas.getContext("2d");
    redBtn = document.querySelector("#red");
    greenBtn = document.querySelector("#green");
    blueBtn = document.querySelector("#blue");
    clearBtn = document.querySelector("button");
    redBtn.addEventListener("click", getColor);
    greenBtn.addEventListener("click", getColor);
    blueBtn.addEventListener("click", getColor);
    clearBtn.addEventListener("click", clearCanvas);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mousemove", draw);
    console.log("Hallo Welt");
}
function getColor(_event) {
    let colorType = _event.target;
    currentColor = colorType.id;
    console.log(colorType.id);
}
function startPainting(_event) {
    painting = true;
    console.log("Start Painting");
}
function stopPainting(_event) {
    painting = false;
    crc2.beginPath();
    console.log("Stop Painting");
}
function draw(_event) {
    if (!painting)
        return;
    {
        crc2.lineWidth = 6;
        crc2.lineCap = "round";
        crc2.lineTo(_event.clientX, _event.clientY);
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(_event.clientX, _event.clientY);
        switch (currentColor) {
            case "red":
                crc2.strokeStyle = "red";
                break;
            case "green":
                crc2.strokeStyle = "green";
                break;
            case "blue":
                crc2.strokeStyle = "blue";
                break;
        }
    }
}
function clearCanvas(_event) {
    crc2.fillStyle = "rgb(253, 238, 215)";
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
}
//# sourceMappingURL=main.js.map