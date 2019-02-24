const getRandom = (list) => list[Math.floor(Math.random() * list.length)]
const printAtId = (id, s) => document.getElementById(id).innerHTML = s

const symbolId = 'symbol'

if (window.location.search.length === 0) {
    printAtId(symbolId,
        `please ensure you have added symbols, 
        interval and total time as URL query parameters 
        e.g. ?symbols=a,b,c&interval=2&totalTime=10`)
    throw('')
}

const searchParams = new URLSearchParams(window.location.search);
const symbols = searchParams.get('symbols').split(',');
const interval = searchParams.get('interval')
let totalTime = searchParams.get('totalTime')

let timerId
navigator.vibrate(150);
timerId = setInterval(() => {
    printAtId('totalTime', totalTime)
    if (totalTime === 0) {
        clearInterval(timerId)
        printAtId(symbolId, '')
        navigator.vibrate([150,30,150,30,150]);
    }
    else if (totalTime % interval === 0) {
        printAtId(symbolId, getRandom(symbols))
        navigator.vibrate(150);
    }
    totalTime--
}, 1000);

