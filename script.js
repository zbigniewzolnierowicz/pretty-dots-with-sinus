let canvas = document.querySelector('#canvas')
let ctx
if ('getContext' in canvas) {
  ctx = canvas.getContext('2d')
}
const AMOUNT_OF_TRIANGLES = {
  ROWS: 5,
  COLUMNS: 10
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function clear(ctx) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}

function draw(ctx) {
  clear(ctx)
  ctx.canvas.width = parseInt(window.getComputedStyle(ctx.canvas).width)
  ctx.canvas.height = parseInt(window.getComputedStyle(ctx.canvas).height)
  let offsetX = ctx.canvas.width / AMOUNT_OF_TRIANGLES.COLUMNS
  let offsetY = ctx.canvas.height / AMOUNT_OF_TRIANGLES.ROWS
  for(let x = 0; x < ctx.canvas.width; x+=offsetX) {
    for(let y = 0; y < ctx.canvas.height; y+=offsetY) {
      ctx.fillStyle = 'rgba(255, 0, 0, 127)'
      ctx.moveTo(x + parseInt(offsetX / 2), y + parseInt(offsetY / 2))
      ctx.beginPath()
      ctx.arc(x + parseInt(offsetX / 2), y + parseInt(offsetY / 2), randomIntFromInterval(0, offsetY / 2), 0, 2 * Math.PI)
      ctx.closePath()
      ctx.fill()
    }
  }
}

window.addEventListener('resize', () => draw(ctx));