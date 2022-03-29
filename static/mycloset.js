let temperature = document.querySelector('.temp_val')
let tempRange = document.querySelector(".temp_range");


tempRange.oninput = handleInput;

function handleInput(e) {
  temperature.innerHTML = `${e.target.value}`
 
}