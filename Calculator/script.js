/*function appendToDisplay(value) {
    document.getElementById('display').value += value;
}
function clearDisplay() {
    document.getElementById('display').value = '';
}
function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}*/
let memory = 0;

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}
function clearDisplay() {
    document.getElementById('display').value = '';
}
function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
function memoryAdd() {
    memory += parseFloat(document.getElementById('display').value) || 0;
}
function memorySubtract() {
    memory -= parseFloat(document.getElementById('display').value) || 0;
}
function percentage() {
    document.getElementById('display').value = parseFloat(document.getElementById('display').value) / 100;
}
