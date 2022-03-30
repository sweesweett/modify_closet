const temperature = document.querySelector('.temp_val')
const tempRange = document.querySelector(".temp_range");

tempRange.oninput = rangeInput;
temperature.oninput =tempInput;

function rangeInput(e) {
  temperature.value = e.target.value
}
function tempInput(e) {
  tempRange.value = e.target.value
}
const visibleBtn =document.querySelector('.rangeslider')
const therBtn = document.getElementById('therBtn')
