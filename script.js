let canvas = document.querySelector('#canvas')
let ctx
if ('getContext' in canvas) {
  ctx = canvas.getContext('2d')
}
const AMOUNT_OF_TRIANGLES = {
  ROWS: 5,
  COLUMNS: 10
}
const offsetX = ctx.canvas.width / AMOUNT_OF_TRIANGLES.COLUMNS
const offsetY = ctx.canvas.height / AMOUNT_OF_TRIANGLES.ROWS
for(let x = 0; x < ctx.canvas.width; x+=offsetX) {
  for(let y = 0; y < ctx.canvas.height; y+=offsetY) {
    ctx.moveTo(x, y)
    ctx.beginPath()
    ctx.lineTo(x + offsetX, y)
    ctx.lineTo(x + offsetX, y + offsetY)
    ctx.lineTo(x, y)
    ctx.closePath()
    ctx.fill()
  }
}