let canvas = document.querySelector('#canvas')
let ctx
if ('getContext' in canvas) {
  ctx = canvas.getContext('2d')
}
const AMOUNT_OF_TRIANGLES = {
  COLUMNS: 16,
  ROWS: 9
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function clear(ctx) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}

function generateCircles(ctx, maxDotSize = 12) {
  ctx.canvas.width = parseInt(window.getComputedStyle(ctx.canvas).width)
  ctx.canvas.height = parseInt(window.getComputedStyle(ctx.canvas).height)
  let offsetX = ctx.canvas.width / AMOUNT_OF_TRIANGLES.COLUMNS
  let offsetY = ctx.canvas.height / AMOUNT_OF_TRIANGLES.ROWS
  let circles = []
  for(let x = 0; x <= ctx.canvas.width; x+=offsetX) {
    let row = []
    for(let y = 0; y <= ctx.canvas.height; y+=offsetY) {
      let circle = {
        center: {
          x: x + (offsetX / 2),
          y: y + (offsetY / 2)
        },
        radius: Math.floor(maxDotSize * ((Math.sin(Math.PI * x / ctx.canvas.width) * Math.sin(Math.PI * y / ctx.canvas.height)) + 1))
      }
      row.push(circle)
    }
    circles.push(row)
  }
  return circles
}

function draw(ctx, circles) {
  clear(ctx)
  ctx.canvas.width = parseInt(window.getComputedStyle(ctx.canvas).width)
  ctx.canvas.height = parseInt(window.getComputedStyle(ctx.canvas).height)
  let offsetX = ctx.canvas.width / AMOUNT_OF_TRIANGLES.COLUMNS
  let offsetY = ctx.canvas.height / AMOUNT_OF_TRIANGLES.ROWS
  for (let row of circles) {
    for (let circle of row) {
      ctx.moveTo(0,0)
      ctx.fillStyle = 'rgb(0, 0, 0)'
      ctx.beginPath()
      ctx.arc(circle.center.x, circle.center.y, circle.radius, 0, 2 * Math.PI)
      ctx.closePath()
      ctx.fill()
    }
  }
  console.log(circles)
}
let circles = generateCircles(ctx, 6)
draw(ctx, circles)

function render(ctx, maxDotSize) {
  console.log(window.screen.orientation)
}

window.addEventListener('resize', () => {
  let circles = generateCircles(ctx, 6)
  draw(ctx, circles)
});