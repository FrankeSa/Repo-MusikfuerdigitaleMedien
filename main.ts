window.addEventListener("load", handleLoad);
let currentColor: string;
let canvas: HTMLCanvasElement | null;
let crc2: CanvasRenderingContext2D;
let painting: boolean;
let redBtn: HTMLDivElement;
let greenBtn: HTMLDivElement;
let blueBtn: HTMLDivElement;
let yellowBtn: HTMLDivElement;
let orangeBtn: HTMLDivElement;
let blackBtn: HTMLDivElement;
let purpleBtn: HTMLDivElement;
let clearBtn: HTMLButtonElement;
let okBtn: HTMLButtonElement;
let sound: HTMLAudioElement;
let audio: string;
let redactiv: boolean;
let blueactiv: boolean;
let audioToPlay: string[] = [];
let audioLib: string[] = ["mdm-owl_1.wav",
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


function handleLoad(_event: Event): void {
    canvas = document.querySelector("canvas");
    if (!canvas)
        return;
    crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
    redBtn = <HTMLDivElement>document.querySelector("#red");
    greenBtn = <HTMLDivElement>document.querySelector("#green");
    blueBtn = <HTMLDivElement>document.querySelector("#blue");
    yellowBtn = <HTMLDivElement>document.querySelector("#yellow");
    orangeBtn = <HTMLDivElement>document.querySelector("#orange");
    blackBtn = <HTMLDivElement>document.querySelector("#black");
    purpleBtn = <HTMLDivElement>document.querySelector("#purple");
    okBtn = <HTMLButtonElement>document.querySelector("#ok");
    clearBtn = <HTMLButtonElement>document.querySelector("#clear");
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

function red(_event: Event): void {

    let colorType: HTMLDivElement = <HTMLDivElement>_event.target;
    currentColor = colorType.id;
    let indexNumber: number = Math.floor((Math.random() * 15) + 0); 
    let audio: string = audioLib[indexNumber];
    let status: boolean = audioToPlay.includes(audio);
    if (status == true) {
        let indexNumber: number = Math.floor((Math.random() * 15) + 0); // eine zuf??llige Zahl zwischen 0 und x
        let audio: string = audioLib[indexNumber];
        sound = new Audio("assets/" + audio);
        // audioToPlay.push(audio);
        console.log("ArrayToPlay: ", audioToPlay);
    } else {
        sound = new Audio("assets/" + audio);
        audioToPlay.push(audio);
        console.log("ArrayToPlay: ", audioToPlay);
    }

}

function green(_event: Event): void {

    let colorType: HTMLDivElement = <HTMLDivElement>_event.target;
    currentColor = colorType.id;
    let indexNumber: number = Math.floor((Math.random() * 15) + 0);
    let audio: string = audioLib[indexNumber];
    let status: boolean = audioToPlay.includes(audio);

    if (status == true) {
        let indexNumber: number = Math.floor((Math.random() * 15) + 0); // eine zuf??llige Zahl zwischen 0 und x
        let audio: string = audioLib[indexNumber];
        sound = new Audio("assets/" + audio);
       
    } else {
        sound = new Audio("assets/" + audio);
        audioToPlay.push(audio);
        }
}

function blue(_event: Event): void {
    let colorType: HTMLDivElement = <HTMLDivElement>_event.target;
    currentColor = colorType.id;
    let indexNumber: number = Math.floor((Math.random() * 15) + 0); 
    let audio: string = audioLib[indexNumber];

    let status: boolean = audioToPlay.includes(audio);

    if (status == true) {
        let indexNumber: number = Math.floor((Math.random() * 15) + 0); // eine zuf??llige Zahl zwischen 0 und x
        let audio: string = audioLib[indexNumber];
        sound = new Audio("assets/" + audio);
      
    } else {
        sound = new Audio("assets/" + audio);
        audioToPlay.push(audio);
  
    }

}

function yellow(_event: Event): void {
    let colorType: HTMLDivElement = <HTMLDivElement>_event.target;
    currentColor = colorType.id;

    let indexNumber: number = Math.floor((Math.random() * 15) + 0); 
    let audio: string = audioLib[indexNumber];
    let status: boolean = audioToPlay.includes(audio);

    if (status == true) {
        let indexNumber: number = Math.floor((Math.random() * 15) + 0); // eine zuf??llige Zahl zwischen 0 und x
        let audio: string = audioLib[indexNumber];
        sound = new Audio("assets/" + audio);
       
    } else {
        sound = new Audio("assets/" + audio);
        audioToPlay.push(audio);
   
    }
}

function orange(_event: Event): void {
    let colorType: HTMLDivElement = <HTMLDivElement>_event.target;
    currentColor = colorType.id;
    let indexNumber: number = Math.floor((Math.random() * 15) + 0); 
    let audio: string = audioLib[indexNumber];

    let status: boolean = audioToPlay.includes(audio);

    if (status == true) {
        let indexNumber: number = Math.floor((Math.random() * 15) + 0); // eine zuf??llige Zahl zwischen 0 und x
        let audio: string = audioLib[indexNumber];
        sound = new Audio("assets/" + audio);
       
    } else {
        sound = new Audio("assets/" + audio);
        audioToPlay.push(audio);
    
    }
}


function black(_event: Event): void {
    let colorType: HTMLDivElement = <HTMLDivElement>_event.target;
    currentColor = colorType.id;
    let indexNumber: number = Math.floor((Math.random() * 15) + 0); 
    let audio: string = audioLib[indexNumber];

    let status: boolean = audioToPlay.includes(audio);

    if (status == true) {
        let indexNumber: number = Math.floor((Math.random() * 15) + 0); 
        let audio: string = audioLib[indexNumber];
        sound = new Audio("assets/" + audio);
      
    } else {
        sound = new Audio("assets/" + audio);
        audioToPlay.push(audio);
      
    }
}

function purple(_event: Event): void {
    let colorType: HTMLDivElement = <HTMLDivElement>_event.target;
    currentColor = colorType.id;

    let indexNumber: number = Math.floor((Math.random() * 15) + 0); 
    let audio: string = audioLib[indexNumber];

    let status: boolean = audioToPlay.includes(audio);

    if (status == true) {
        let indexNumber: number = Math.floor((Math.random() * 15) + 0); // eine zuf??llige Zahl zwischen 0 und x
        let audio: string = audioLib[indexNumber];
        sound = new Audio("assets/" + audio);
    
    } else {
        sound = new Audio("assets/" + audio);
        audioToPlay.push(audio);
    
    }

}



function draw(_event: MouseEvent): void {
    if (!painting) return; {
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

function startPainting(_event: MouseEvent): void {
    painting = true;
    console.log("Start Painting");
}

function stopPainting(_event: MouseEvent): void {
    painting = false;
    crc2.beginPath();
    sound.pause();
    console.log("Stop Painting");
}

function trensferSound(_event: Event): void {
    backgroundMusic(sound);
    console.log(sound);

}
function backgroundMusic(_sound: HTMLAudioElement): void {
    _sound.play();
    console.log("HintergrundLied:", _sound);
}

function clearCanvas(_event: Event): void {
    location.reload();

}