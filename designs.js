<canvas id="canvas"></canvas>
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

context.moveTo(0, 0);
context.lineTo(100, 100);
context.stroke();