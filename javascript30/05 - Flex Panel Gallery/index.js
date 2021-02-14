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
    console.log(event);
    if (flexGrow != 5) {
        document.getElementById(div).style.flexGrow = 5;
        // document.querySelector('')
    }
    else {
        document.getElementById(div).style.flexGrow = 1;
    }

}