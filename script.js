let canvas = document.querySelector('#canvas')
let ctx
if ('getContext' in canvas) {
  ctx = canvas.getContext('2d')
}
const AMOUNT_OF_TRIANGLES = {
  ROWS: 5,
  COLUMNS: 5
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function clear(ctx) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}

function generateCircles(ctx) {
  ctx.canvas.width = parseInt(window.getComputedStyle(ctx.canvas).width)
  ctx.canvas.height = parseInt(window.getComputedStyle(ctx.canvas).height)
  let offsetX = ctx.canvas.width / AMOUNT_OF_TRIANGLES.COLUMNS
  let offsetY = ctx.canvas.height / AMOUNT_OF_TRIANGLES.ROWS
  let circles = []
  for(let x = 0; x < ctx.canvas.width; x+=offsetX) {
    let row = []
    for(let y = 0; y < ctx.canvas.height; y+=offsetY) {
      let circle = {
        center: {
          x: x + parseInt(offsetX / 2),
          y: y + parseInt(offsetY / 2)
        },
        percents: {
          x: x / ctx.canvas.width,
          y: y / ctx.canvas.height
        },
        radius: 30 * Math.sin(Math.PI * x / ctx.canvas.width) * Math.sin(Math.PI * y / ctx.canvas.height)
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
  for(let x = 0; x < ctx.canvas.width; x+=offsetX) {
    for(let y = 0; y < ctx.canvas.height; y+=offsetY) {
      /*
      ctx.fillStyle = 'rgba(255, 0, 0, 0.5)'
      ctx.moveTo(x + parseInt(offsetX / 2), y + parseInt(offsetY / 2))
      ctx.beginPath()
      ctx.arc(x + parseInt(offsetX / 2), y + parseInt(offsetY / 2), 10 * (Math.sin(x/ctx.canvas.width)*Math.sin(y/ctx.canvas.height))**2, 0, 2 * Math.PI)
      ctx.closePath()
      ctx.fill() */
    }
  }
  for (row of circles) {
      for (circle of row) {
      ctx.fillStyle = 'rgba(255, 0, 0, 0.5)'
      ctx.moveTo(circle.center.x, circle.center.y)
      ctx.beginPath()
      ctx.arc(circle.center.x, circle.center.y, circle.radius, 0, 2 * Math.PI)
      ctx.closePath()
      ctx.fill()
    }) 
  }
}
draw(ctx)
window.addEventListener('resize', () => {
  draw(ctx, generateCircles(ctx))
});