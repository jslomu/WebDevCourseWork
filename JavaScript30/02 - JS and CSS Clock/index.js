function getTime() {
    let time = new Date();

    let seconds = time.getSeconds()
    let secondsPosition = (seconds / 60) * 360 + 90
    document.querySelector(".second-hand").style.transform = `rotate(${secondsPosition}deg)`
    
    let minutes = time.getMinutes()
    let minutesPosition = (minutes / 60) * 360 + 90
    document.querySelector(".min-hand").style.transform = `rotate(${minutesPosition}deg)`
    
    let hours = time.getHours()
    let hoursPosition = (hours / 12) * 360 + 90
    document.querySelector(".hour-hand").style.transform = `rotate(${hoursPosition}deg)`
}

window.onload = () => {
    setInterval(getTime, 1000);
};

module.exports = {
    getTime
}