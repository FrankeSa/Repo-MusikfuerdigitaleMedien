window.addEventListener("load", handleLoad);
let currentColor: string | null;
let crc2: CanvasRenderingContext2D;
let painting: boolean;

function handleLoad(_event: Event): void {
    let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
    if (!canvas)
        return;
    crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");


    let redBtn: HTMLDivElement = <HTMLDivElement>document.querySelector("#redBtn");
    currentColor = document.getElementsByTagName("div")[1].getAttribute("id");
    redBtn.addEventListener("click", sarah);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mousemove", draw);
    console.log("Hallo Welt");
}

function sarah(_event: Event): void {

    console.log("Rot");
    // let colorType: EventTarget | null = <EventTarget>_event.target;    


    console.log(currentColor, "canvas");

    if (currentColor == "redBtn") {
        console.log("Rot ausgewählt");

    }

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

        crc2.lineWidth = 10;
        crc2.lineCap = "round";
        crc2.lineTo(_event.clientX, _event.clientY);
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(_event.clientX, _event.clientY);
    }
}