"use strict";
window.addEventListener("load", handleLoad);
let currentColor;
let crc2;
let painting;
function handleLoad(_event) {
    let canvas = document.querySelector("canvas");
    if (!canvas)
        return;
    crc2 = canvas.getContext("2d");
    let redBtn = document.querySelector("#redBtn");
    currentColor = document.getElementsByTagName("div")[1].getAttribute("id");
    redBtn.addEventListener("click", sarah);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mousemove", draw);
    console.log("Hallo Welt");
}
function sarah(_event) {
    console.log("Rot");
    // let colorType: EventTarget | null = <EventTarget>_event.target;    
    console.log(currentColor, "canvas");
    if (currentColor == "redBtn") {
        console.log("Rot ausgewählt");
    }
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
        crc2.lineWidth = 10;
        crc2.lineCap = "round";
        crc2.lineTo(_event.clientX, _event.clientY);
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(_event.clientX, _event.clientY);
    }
}
//# sourceMappingURL=main.js.map