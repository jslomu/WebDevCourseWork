window.onload = () => {
    const inputList = document.querySelectorAll('input');
    const inputs = Array.prototype.slice.call(inputList);
    inputs.forEach(() => {
        this.addEventListener('input', (event) => {
            let id = event.target.id;
            let value = event.target.value;
            if (id === 'color') {
                document.getElementById('title').style.color = value;
                document.getElementById('hero-container').style.backgroundColor = value;
            }
            else if (id === 'blur') {
                document.getElementById('hero').style.filter = `blur(${value}px)`;
            }
            else if (id === 'padding') {
                document.getElementById('hero-container').style.padding = `${value}px`;
            }
        });
    });
};
