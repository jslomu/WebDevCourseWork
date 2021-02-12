window.addEventListener('keydown', (event) => {
    var key = document.querySelector(`div[data-key="${event.key}"]`);
    if (key) {
        key.style.color = "red";
    };
});

window.addEventListener("keyup", (event) => {
    var key = document.querySelector(`div[data-key="${event.key}"]`);
    if (key) {
        key.style.color = "white";
    };
})

window.onload = function() {
    let keys = document.querySelectorAll(".key-item");
    keys.forEach(() => {
        this.addEventListener("mousedown", (event) => {
            var key = document.querySelector(`div[data-key="${event.srcElement.dataset.key}"]`);
            if (key) {
                key.style.color = "red";
            };
        });
        this.addEventListener("mouseup", (event) => {
            var key = document.querySelector(`div[data-key="${event.srcElement.dataset.key}"]`);
            if (key) {
                key.style.color = "white";
            };
        });
        this.addEventListener("touchstart", (event) => {
            var key = document.querySelector(`div[data-key="${event.srcElement.dataset.key}"]`);
            if (key) {
                key.style.color = "red";
            };
        })
        this.addEventListener("touchend", (event) => {
            var key = document.querySelector(`div[data-key="${event.srcElement.dataset.key}"]`);
            if (key) {
                key.style.color = "white";
            };
        })
    })
}