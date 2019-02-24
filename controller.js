const getRandom = (list) => list[Math.floor(Math.random() * list.length)]
const printAtId = (id, s) => document.getElementById(id).innerHTML = s

if (window.location.search.length === 0) {
    window.location.assign('index.html?symbols=a,b,c&interval=2&totalTime=10')
    alert('No parameters added. Default URL params assigned')
}

const symbolId = 'symbol'
const searchParams = new URLSearchParams(window.location.search);
const symbols = searchParams.get('symbols').split(',');
const interval = searchParams.get('interval')
const disableVibrate = searchParams.get('disableVibration') === 'true'
let totalTime = searchParams.get('totalTime')

const startTimer = () => {
    let timerId
    timerId = setInterval(() => {
        printAtId('totalTime', totalTime)
        if (totalTime === 0) {
            clearInterval(timerId)
            printAtId(symbolId, '')
            vibrate([150, 30, 150, 30, 150])
        } else if (totalTime % interval === 0) {
            printAtId(symbolId, getRandom(symbols))
            vibrate()
        }
        totalTime--
    }, 1000);
}

const vibrate = (pattern = 150) => {
    if (!disableVibrate) {
        navigator.vibrate(pattern)
    }
};