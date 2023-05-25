var gTimer = 0
var gIntervalId = null
function renderTimer() {
 var gElTimer = document.querySelector('.timer')
 console.log(gElTimer)
 var stopWatch = +gTimer.toFixed(2)
 gElTimer.innerText = stopWatch
}

function startTimer() {
 gIntervalId = setInterval(() => {
  gTimer += 0.01
  renderTimer()
 }, 105)
}
