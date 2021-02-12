window.onload = setInterval(updateTime, 1000);

window.onload = () => {
    let width = window.innerWidth;
    let clockLeft = (width / 2) - 210;
    let middleLeft = (width / 2) - 3;
    document.getElementById("clock-border").style.left = `${clockLeft}px`;
    document.getElementById("middle").style.left = `${middleLeft}px`;
    let height = window.innerHeight;
    let clockTop = (height / 2) - 210;
    let middleTop = (height / 2) - 3;
    document.getElementById("clock-border").style.top = `${clockTop}px`;
    document.getElementById("middle").style.top = `${middleTop}px`;
}

function updateTime() {
    let time = new Date(Date());
    let seconds = ((time.getSeconds() / 60) * 360) + 270;
    let minutes = ((time.getMinutes() / 60) * 360) + 270;
    let hours = ((time.getHours() / 12) * 360) + 270;
    let secondsHand = document.getElementById("second-hand");
    let minutesHand = document.getElementById("minute-hand");
    let hoursHand = document.getElementById("hour-hand");
    secondsHand.style.transform = `rotate(${seconds}deg)`;
    minutesHand.style.transform = `rotate(${minutes}deg)`;
    hoursHand.style.transform = `rotate(${hours}deg)`;
}