let canvas = document.querySelector('#canvas')
let ctx
if ('getContext' in canvas) {
  ctx = canvas.getContext('2d')
}
const AMOUNT_OF_TRIANGLES = 5
const offsetX = ctx.canvas.width / AMOUNT_OF_TRIANGLES
const offsetY = ctx.canvas.height / AMOUNT_OF_TRIANGLES
for(let i = 0; i <= ; i+=offsetX) {
  ctx.fillRect(i * offset, 0, 1, 1);
}