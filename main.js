"use strict";
window.addEventListener("load", handleLoad);
let currentColor;
let canvas;
let crc2;
let painting;
let redBtn;
let greenBtn;
let blueBtn;
let yellowBtn;
let orangeBtn;
let blackBtn;
let purpleBtn;
let clearBtn;
let okBtn;
let sound;
let audio;
let redactiv;
let blueactiv;
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
    "mdm-tones_g.wav",
    "mdm-conga.wav",
    "mdm-waveformall.wav"
];
function handleLoad(_event) {
    canvas = document.querySelector("canvas");
    if (!canvas)
        return;
    crc2 = canvas.getContext("2d");
    redBtn = document.querySelector("#red");
    greenBtn = document.querySelector("#green");
    blueBtn = document.querySelector("#blue");
    yellowBtn = document.querySelector("#yellow");
    orangeBtn = document.querySelector("#orange");
    blackBtn = document.querySelector("#black");
    purpleBtn = document.querySelector("#purple");
    okBtn = document.querySelector("#ok");
    clearBtn = document.querySelector("#clear");
    redBtn.addEventListener("click", red);
    greenBtn.addEventListener("click", green);
    blueBtn.addEventListener("click", blue);
    yellowBtn.addEventListener("click", yellow);
    orangeBtn.addEventListener("click", orange);
    blackBtn.addEventListener("click", orange);
    purpleBtn.addEventListener("click", purple);
    clearBtn.addEventListener("click", clearCanvas);
    okBtn.addEventListener("click", trensferSound);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mousemove", draw);
    console.log("Hallo Welt");
}
function red(_event) {
    let colorType = _event.target;
    currentColor = colorType.id;
    let indexNumber = Math.floor((Math.random() * 15) + 0);
    let audio = audioLib[indexNumber];
    let status = audioToPlay.includes(audio);
    if (status == true) {
        let indexNumber = Math.floor((Math.random() * 15) + 0); // eine zuf??llige Zahl zwischen 0 und x
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
}
function green(_event) {
    let colorType = _event.target;
    currentColor = colorType.id;
    let indexNumber = Math.floor((Math.random() * 15) + 0);
    let audio = audioLib[indexNumber];
    let status = audioToPlay.includes(audio);
    if (status == true) {
        let indexNumber = Math.floor((Math.random() * 15) + 0); // eine zuf??llige Zahl zwischen 0 und x
        let audio = audioLib[indexNumber];
        sound = new Audio("assets/" + audio);
    }
    else {
        sound = new Audio("assets/" + audio);
        audioToPlay.push(audio);
    }
}
function blue(_event) {
    let colorType = _event.target;
    currentColor = colorType.id;
    let indexNumber = Math.floor((Math.random() * 15) + 0);
    let audio = audioLib[indexNumber];
    let status = audioToPlay.includes(audio);
    if (status == true) {
        let indexNumber = Math.floor((Math.random() * 15) + 0); // eine zuf??llige Zahl zwischen 0 und x
        let audio = audioLib[indexNumber];
        sound = new Audio("assets/" + audio);
    }
    else {
        sound = new Audio("assets/" + audio);
        audioToPlay.push(audio);
    }
}
function yellow(_event) {
    let colorType = _event.target;
    currentColor = colorType.id;
    let indexNumber = Math.floor((Math.random() * 15) + 0);
    let audio = audioLib[indexNumber];
    let status = audioToPlay.includes(audio);
    if (status == true) {
        let indexNumber = Math.floor((Math.random() * 15) + 0); // eine zuf??llige Zahl zwischen 0 und x
        let audio = audioLib[indexNumber];
        sound = new Audio("assets/" + audio);
    }
    else {
        sound = new Audio("assets/" + audio);
        audioToPlay.push(audio);
    }
}
function orange(_event) {
    let colorType = _event.target;
    currentColor = colorType.id;
    let indexNumber = Math.floor((Math.random() * 15) + 0);
    let audio = audioLib[indexNumber];
    let status = audioToPlay.includes(audio);
    if (status == true) {
        let indexNumber = Math.floor((Math.random() * 15) + 0); // eine zuf??llige Zahl zwischen 0 und x
        let audio = audioLib[indexNumber];
        sound = new Audio("assets/" + audio);
    }
    else {
        sound = new Audio("assets/" + audio);
        audioToPlay.push(audio);
    }
}
function black(_event) {
    let colorType = _event.target;
    currentColor = colorType.id;
    let indexNumber = Math.floor((Math.random() * 15) + 0);
    let audio = audioLib[indexNumber];
    let status = audioToPlay.includes(audio);
    if (status == true) {
        let indexNumber = Math.floor((Math.random() * 15) + 0);
        let audio = audioLib[indexNumber];
        sound = new Audio("assets/" + audio);
    }
    else {
        sound = new Audio("assets/" + audio);
        audioToPlay.push(audio);
    }
}
function purple(_event) {
    let colorType = _event.target;
    currentColor = colorType.id;
    let indexNumber = Math.floor((Math.random() * 15) + 0);
    let audio = audioLib[indexNumber];
    let status = audioToPlay.includes(audio);
    if (status == true) {
        let indexNumber = Math.floor((Math.random() * 15) + 0); // eine zuf??llige Zahl zwischen 0 und x
        let audio = audioLib[indexNumber];
        sound = new Audio("assets/" + audio);
    }
    else {
        sound = new Audio("assets/" + audio);
        audioToPlay.push(audio);
    }
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
            case "yellow":
                crc2.strokeStyle = "yellow";
                break;
            case "orange":
                crc2.strokeStyle = "orange";
                break;
            case "black":
                crc2.strokeStyle = "black";
                break;
            case "purple":
                crc2.strokeStyle = "purple";
                break;
        }
        sound.play();
    }
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
function trensferSound(_event) {
    backgroundMusic(sound);
    console.log(sound);
}
function backgroundMusic(_sound) {
    _sound.play();
    console.log("HintergrundLied:", _sound);
}
function clearCanvas(_event) {
    location.reload();
}
//# sourceMappingURL=main.js.map