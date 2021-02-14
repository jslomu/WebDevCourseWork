window.onload = function() {
    const divList = document.querySelectorAll('div');
    const divs = Array.from(divList);
    divs.forEach(() => {
        this.addEventListener("click", animatePanel);
    });
}

let animatePanel = function(event) {
    let div = event.target.id;
    let flexGrow = document.getElementById(div).style.flexGrow;
    let textArray = document.querySelectorAll(`#${div} > p`);
    if (flexGrow != 5) {
        document.getElementById(div).style.flexGrow = 5;
        textArray[0].style.top = '25%';
        textArray[2].style.top = '75%';
    }
    else {
        document.getElementById(div).style.flexGrow = 1;
        textArray[0].style.top = '-25%';
        textArray[2].style.top = '125%';
    }

}