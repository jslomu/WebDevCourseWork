function getSeconds(time) {
    console.log(time.getSeconds());
    return time.getSeconds();
}

setInterval(getSeconds(new Date()), 1000);

module.exports = {
    getSeconds
}