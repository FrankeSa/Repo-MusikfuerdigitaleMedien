window.addEventListener("load", handleLoad);
let currentColor: string;
let canvas: HTMLCanvasElement | null;
let crc2: CanvasRenderingContext2D;
let painting: boolean;
let redBtn: HTMLDivElement;
let greenBtn: HTMLDivElement;
let blueBtn: HTMLDivElement;
let clearBtn: HTMLButtonElement;

function handleLoad(_event: Event): void {
    canvas = document.querySelector("canvas");
    if (!canvas)
        return;
    crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
    redBtn = <HTMLDivElement>document.querySelector("#red");
    greenBtn = <HTMLDivElement>document.querySelector("#green");
    blueBtn = <HTMLDivElement>document.querySelector("#blue");
    clearBtn = <HTMLButtonElement>document.querySelector("button");

    redBtn.addEventListener("click", getColor);
    greenBtn.addEventListener("click", getColor);
    blueBtn.addEventListener("click", getColor);
    clearBtn.addEventListener("click", clearCanvas);

    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mousemove", draw);
    console.log("Hallo Welt");
}

function getColor(_event: Event): void {
    let colorType: HTMLDivElement = <HTMLDivElement>_event.target;
    currentColor = colorType.id;
    console.log(colorType.id);
}

function startPainting(_event: MouseEvent): void {
    painting = true;
    console.log("Start Painting");
}

function stopPainting(_event: MouseEvent): void {
    painting = false;
    crc2.beginPath();
    console.log("Stop Painting");
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
        }
    }
}

function clearCanvas(_event: Event): void {
    crc2.fillStyle = "rgb(253, 238, 215)";
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);  

}