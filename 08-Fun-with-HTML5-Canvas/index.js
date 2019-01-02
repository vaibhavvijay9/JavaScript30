const canvas = document.querySelector('#draw');
const context = canvas.getContext('2d'); 

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.strokeStyle = '#BADA55';
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 100;

// for extra fun
// context.globalCompositeOperation = 'multiply';   
// google "globalcompositeoperation" and try different values 

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e){
    if(!isDrawing) return;   // stop the fn from running when they are not moused down
    
    context.strokeStyle = `hsl(${hue} , 100%, 50%)`;
    
    context.beginPath();
    
    //start from
    context.moveTo(lastX,lastY);
    //go to
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();

    lastX = e.offsetX; 
    lastY = e.offsetY;  
    
    // [lastX, lastY] = [e.offsetX, e.offsetY]; -- instead of two, array assignment (ES6) 

    // changing colours
    hue++;
    if(hue >=360){
        hue = 0;    // resetting the value, when reaches to maximum
    }

    // changing width
    if(context.lineWidth >= 100 || context.lineWidth <= 1){
        direction = !direction;
    }

    if(direction){
        context.lineWidth++;
    }
    else{
        context.lineWidth--;
    }
}


canvas.addEventListener('mousedown', (e) =>{
    isDrawing = true;
    lastX = e.offsetX; 
    lastY = e.offsetY;
} );
canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);