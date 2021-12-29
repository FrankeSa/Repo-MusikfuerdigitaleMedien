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
let sound;
let audio;
let redactiv = false;
let blueactiv = false;
let audioToPlay = [];
let audioLib = ["MDM-Grundton_original.mp3", "Closed_Hit-Hat.wav", "Conga_low.wav"];
function handleLoad(_event) {
    canvas = document.querySelector("canvas");
    if (!canvas)
        return;
    crc2 = canvas.getContext("2d");
    redBtn = document.querySelector("#red");
    greenBtn = document.querySelector("#green");
    blueBtn = document.querySelector("#blue");
    clearBtn = document.querySelector("button");
    redBtn.addEventListener("click", red);
    greenBtn.addEventListener("click", getColor);
    // blueBtn.addEventListener("click", getColor);
    blueBtn.addEventListener("click", blue);
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
        sound.play();
    }
}
function blue(_event) {
    let colorType = _event.target;
    currentColor = colorType.id;
    blueactiv = true;
    redactiv = false;
    // let status: boolean = audioToPlay.includes(audio);
    // console.log(status);
    let indexNumber = Math.floor((Math.random() * 3) + 0); // eine zufällige Zahl zwischen 0 und 3
    audio = audioLib[indexNumber];
    sound = new Audio("assets/" + audio);
    audioToPlay.push(audio);
    console.log(audioToPlay);
    console.log("Status rot: ", redactiv, "Status blau: ", blueactiv);
}
function red(_event) {
    let colorType = _event.target;
    currentColor = colorType.id;
    redactiv = true;
    blueactiv = false;
    let indexNumber = Math.floor((Math.random() * 3) + 0); // eine zufällige Zahl zwischen 0 und 3
    let audio = audioLib[indexNumber];
    let status = audioToPlay.includes(audio);
    console.log(status);
    if (status == true) {
        return;
    }
    else {
        sound = new Audio("assets/" + audio);
        audioToPlay.push(audio);
        console.log("ArrayToPlay: ", audioToPlay);
    }
    console.log("Status rot: ", redactiv, "Status blau: ", blueactiv);
}
function backgroundMusic(_sound) {
    _sound.play();
    console.log("HintergrundLied:", _sound);
}
function clearCanvas(_event) {
    crc2.fillStyle = "rgb(253, 238, 215)";
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
}
function startPainting(_event) {
    painting = true;
    console.log("Start Painting");
    backgroundMusic(sound);
}
function stopPainting(_event) {
    painting = false;
    crc2.beginPath();
    sound.pause();
    console.log("Stop Painting");
}
//# sourceMappingURL=main.js.map