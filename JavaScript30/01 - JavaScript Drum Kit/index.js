window.onload = function(){
    addEventListener('keydown', (event) => {
        let code = event.keyCode
        let audio = document.querySelector(`audio[data-key="${code}"]`);
        console.log(code);
        if(!audio) return;
        audio.currentTime = 0;
        audio.play();
    });
}

// module.exports = {
//     getKeyCode
// }