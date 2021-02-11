window.addEventListener('keydown', (event) => {
    console.log(event.key);
    var key =  document.querySelector(`p[data-key="${event.key}"]`);
    key.style.color = "red";
});


// module.exports = {
//     getKeyCode
// }