const canvas= document.getElementById('canvas');
const ctx=canvas.getContext('2d');
const clearBtn = document.getElementById('clearBtn');
const colorPicker = document.getElementById('colorPicker');

let drawing = false;
let brushColor = '#000';

canvas.addEventListener('mousedown',(e) =>{
    drawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX,e.offsetY);
});

canvas.addEventListener('mousemove',(e) =>{
    if (drawing) {
        ctx.lineTo(e.offsetX,e.offsetY);
        ctx.strokeStyle = brushColor;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.stroke();
    }
});

canvas.addEventListener('mouseup',() =>{
    drawing = false;
});

canvas.addEventListener('mouseleave',() =>{
    drawing = false;
});

clearBtn.addEventListener('click',() =>{
    ctx.clearRect(0,0,canvas.width,canvas.height);
});

colorPicker.addEventListener('input',(e) =>{
    brushColor = e.target.value;
});

document.getElementById("export").addEventListener("click",() =>{
  const link = document.createElement("a");
  link.download = "drawing.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
});

