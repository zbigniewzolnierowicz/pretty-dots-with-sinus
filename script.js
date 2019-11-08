let canvas = document.querySelector('#canvas')
let ctx
if ('getContext' in canvas) {
  ctx = canvas.getContext('2d')
}
const AMOUNT_OF_TRIANGLES = {
  ROWS: 5,
  COLUMNS: 10
}

ctx.canvas.width = parseInt(window.getComputedStyle(ctx.canvas).width)
ctx.canvas.height = parseInt(window.getComputedStyle(ctx.canvas).height)

const offsetX = parseInt(window.getComputedStyle(ctx.canvas).width) / AMOUNT_OF_TRIANGLES.COLUMNS
const offsetY = parseInt(window.getComputedStyle(ctx.canvas).height) / AMOUNT_OF_TRIANGLES.ROWS

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}
for(let x = 0; x < ctx.canvas.width; x+=offsetX) {
  for(let y = 0; y < ctx.canvas.height; y+=offsetY) {
    ctx.moveTo(x + parseInt(offsetX / 2), y + parseInt(offsetY / 2))
    ctx.beginPath()
    ctx.arc(x + parseInt(offsetX / 2), )
    ctx.closePath()
    ctx.fill()
  }
}