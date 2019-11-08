let canvas = document.querySelector('#canvas')
let ctx
if ('getContext' in canvas) {
  ctx = canvas.getContext('2d')
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function clear(ctx) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}

function generateCircles(ctx, amounts, maxDotSize = 12, isLandscape = true) {
  ctx.canvas.width = parseInt(window.getComputedStyle(ctx.canvas).width)
  ctx.canvas.height = parseInt(window.getComputedStyle(ctx.canvas).height)
  let offsetX = ctx.canvas.width / (isLandscape ? amounts.columns : amounts.rows)
  let offsetY = ctx.canvas.height / (isLandscape ? amounts.rows : amounts.columns)
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
}

function render(ctx, maxDotSize) {
  let isLandscape = true
  let dimensions = {
    width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
    height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
  }
  if (dimensions.width < dimensions.height) {
    isLandscape = false
  }
  let amounts = {
    columns: 16,
    rows: 9
  }
  if (window.matchMedia('(aspect-ratio: 1/1)').matches) {
    columns: 16,
    rows
  }
  clear(ctx)
  let circles = generateCircles(ctx, amounts, maxDotSize, isLandscape)
  draw(ctx, circles)
}

render(ctx, 6)

window.addEventListener('resize', () => {
  render(ctx, 6)
});