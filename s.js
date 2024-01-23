const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        const expression = display.value.replace(/π/g, 'Math.PI');
        display.value = eval(expression);
    } catch (error) {
        display.value = "Error";
    }
}
