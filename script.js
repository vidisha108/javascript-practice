const display = document.getElementById("display");

function appendtodisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = ' ';
}

function calculate() {
    try {
        display.value = eval(display.value);// eval is used to evaluate the expression in the display
    } catch (error) {
        display.value = 'Error';
    }   }