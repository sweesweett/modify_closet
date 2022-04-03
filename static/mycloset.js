const temperature = document.querySelector('.temp_val')
const tempRange = document.querySelector(".temp_range");
const visibleBtn =document.querySelector('.rangeslider')
const therBtn = document.getElementById('therBtn')
let btnOpen = false
let explainOpen =false;

tempRange.oninput = rangeInput;
temperature.oninput =tempInput;

function rangeInput(e) {
  temperature.value = e.target.value
}
function tempInput(e) {
  tempRange.value = e.target.value
}

function therBtnOpen(){
  if(btnOpen===false){
    visibleBtn.style.display='flex'
    btnOpen=!btnOpen

  }
  else{
    visibleBtn.style.display='none'
    btnOpen=!btnOpen
  }

}
function openExplain(){
    document.querySelector('.wrap').style.overflow='hidden'
    document.querySelector('.bg').style.display='block'
    document.querySelector('#closeBtn').style.display='block'
    document.querySelector('.explain_closet').style.display='block'
    explainOpen=!explainOpen
}
function closeExplain(){
  console.log('test')
  document.querySelector('.bg').style.display='none'
  document.querySelector('#closeBtn').style.display='none'
  document.querySelector('.explain_closet').style.display='none'
  explainOpen=!explainOpen

}