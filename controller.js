const getRandom = (list) => list[Math.floor(Math.random() * list.length)]
const getById = id => document.getElementById(id)
const printAtId = (id, s) => getById(id).innerHTML = s

const noSleep = new NoSleep()

const searchParams = new URLSearchParams(window.location.search)
const symbols = searchParams.get('symbols') ? searchParams.get('symbols').split(',') : undefined
const interval = Number(searchParams.get('interval'))
const totalTime = Number(searchParams.get('totalTime'))

if (!symbols || !interval | !totalTime) {
    alert('Required query parameters missing. Adding demo defaults.')
    window.location.assign('index.html?symbols=a,b,c&interval=2&totalTime=10')
}

const symbolId = 'symbol'
let inProgress = false

const startTimer = () => {
    if (!inProgress){
        noSleep.enable()
        inProgress = true;
        let counter = 0
        let timerId
        timerId = setInterval(() => {
            setProgressBar(counter, totalTime);
            if (counter >= totalTime) {
                clearInterval(timerId)
                printAtId(symbolId, '')
                navigator.vibrate([150, 30, 150, 30, 150])
                inProgress = false;
                noSleep.disable();
            } else if (counter % interval === 0) {
                printAtId(symbolId, getRandom(symbols))
                navigator.vibrate(150)
            }
            counter++
        }, 1000);
    }
}

const setProgressBar = (remaining, total) => {
    getById('myBar').style.width = Math.round(remaining / total * 100) + '%'
};



