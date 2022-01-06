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
let audioLib = ["mdm-owl_1.wav",
    "mdm-owl_2.wav",
    "mdm-owl_3.wav",
    "mdm-owl_4.wav",
    "mdm-space_athmo.wav",
    "mdm-tonesandi.wav",
    "mdm-swoosch.wav",
    "mdm-wald_1.wav",
    "mdm-wald_2.wav",
    "mdm-wald_3.wav",
    "mdm-wald_4.wav",
    "mdm-wasser.wav",
    "mdm-tones_g.wav"
];
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
    redactiv = false;
    blueactiv = true;
    let indexNumber = Math.floor((Math.random() * 13) + 0); // eine zufällige Zahl zwischen 0 und 3
    let audio = audioLib[indexNumber];
    let status = audioToPlay.includes(audio);
    console.log(status);
    if (status == true) {
        let indexNumber = Math.floor((Math.random() * 13) + 0); // eine zufällige Zahl zwischen 0 und x
        let audio = audioLib[indexNumber];
        sound = new Audio("assets/" + audio);
        // audioToPlay.push(audio);
        console.log("ArrayToPlay: ", audioToPlay);
    }
    else {
        sound = new Audio("assets/" + audio);
        audioToPlay.push(audio);
        console.log("ArrayToPlay: ", audioToPlay);
    }
    console.log("Status rot: ", redactiv, "Status blau: ", blueactiv);
}
function red(_event) {
    let colorType = _event.target;
    currentColor = colorType.id;
    redactiv = true;
    blueactiv = false;
    let indexNumber = Math.floor((Math.random() * 13) + 0); // eine zufällige Zahl zwischen 0 und 3
    let audio = audioLib[indexNumber];
    let status = audioToPlay.includes(audio);
    console.log(status);
    if (status == true) {
        let indexNumber = Math.floor((Math.random() * 13) + 0); // eine zufällige Zahl zwischen 0 und x
        let audio = audioLib[indexNumber];
        sound = new Audio("assets/" + audio);
        // audioToPlay.push(audio);
        console.log("ArrayToPlay: ", audioToPlay);
    }
    else {
        sound = new Audio("assets/" + audio);
        audioToPlay.push(audio);
        console.log("ArrayToPlay: ", audioToPlay);
    }
    console.log("Status rot: ", redactiv, "Status blau: ", blueactiv);
}
function clearCanvas(_event) {
    crc2.fillStyle = "rgb(253, 238, 215)";
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
}
function startPainting(_event) {
    painting = true;
    console.log("Start Painting");
}
function stopPainting(_event) {
    painting = false;
    crc2.beginPath();
    sound.pause();
    console.log("Stop Painting");
}
// function backgroundMusic(_sound: HTMLAudioElement): void {
//     _sound.play();
//     console.log("HintergrundLied:", _sound);
// }
//# sourceMappingURL=main.js.map