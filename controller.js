const getRandom = (list) => list[Math.floor(Math.random() * list.length)]
const getById = id => document.getElementById(id)
const printAtId = (id, s) => getById(id).innerHTML = s

if (window.location.search.length === 0) {
    window.location.assign('index.html?symbols=a,b,c&interval=2&totalTime=10')
    alert('No parameters added. Default URL params assigned')
}

const noSleep = new NoSleep()
const symbolId = 'symbol'
const searchParams = new URLSearchParams(window.location.search)
const symbols = searchParams.get('symbols').split(',')
const interval = searchParams.get('interval')
const disableVibration = searchParams.get('disableVibration') === 'true'
const totalTime = Number(searchParams.get('totalTime'))
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
                vibrate([150, 30, 150, 30, 150])
                inProgress = false;
                noSleep.disable();
            } else if (counter % interval === 0) {
                printAtId(symbolId, getRandom(symbols))
                vibrate()
            }
            counter++
        }, 1000);
    }
}

const vibrate = (pattern = 150) => {
    if (!disableVibration) {
        navigator.vibrate(pattern)
    }
};

const setProgressBar = (remaining, total) => {
    getById('myBar').style.width = Math.round(remaining / total * 100) + '%'
};



