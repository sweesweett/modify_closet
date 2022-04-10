const temperature = document.querySelector('.temp_val');
const tempRange = document.querySelector(".temp_range");
const visibleBtn =document.querySelector('.rangeslider');
const therBtn = document.getElementById('therBtn');
const cards=document.querySelectorAll('.card');
let btnOpen = false;
let explainOpen =false;
let newClothOpen =false;

tempRange.oninput = rangeInput;
temperature.oninput =tempInput;

function rangeInput(e) {
  temperature.value = e.target.value;
}
function tempInput(e) {
  tempRange.value = e.target.value;
}

function therBtnOpen(){
  if(btnOpen===false){
    visibleBtn.style.display='flex';
    btnOpen=!btnOpen;

  }
  else{
    visibleBtn.style.display='none';
    btnOpen=!btnOpen;
  }

}
function openExplain(){
    document.querySelector('body').style.overflow='hidden';
    document.querySelector('.bg').style.display='block';
    document.querySelector('#closeBtn').style.display='block';
    document.querySelector('.explain_closet').style.display='block';
    explainOpen=!explainOpen;
}
function closeBtn(){
  if(explainOpen=== true){
  document.querySelector('body').style.overflow='auto';
  document.querySelector('.bg').style.display='none';
  document.querySelector('#closeBtn').style.display='none';
  document.querySelector('.explain_closet').style.display='none';
  explainOpen=!explainOpen
  }
  else if(newClothOpen === true){
  document.querySelector('body').style.overflow='auto';
  document.querySelector('.bg').style.display='none';
  document.querySelector('#closeBtn').style.display='none';
  document.querySelector('.newcloth').style.display='none'
  newClothOpen=!newClothOpen

  }
}

function uploadClothBtn(){
  document.querySelector('body').style.overflow='hidden';
  document.querySelector('.bg').style.display='block';
  document.querySelector('#closeBtn').style.display='block';
  document.querySelector('.newcloth').style.display='block';
  newClothOpen=!newClothOpen
}


document.getElementById('listview').addEventListener('click',()=>
  cards.forEach((card)=>{
    card.classList.remove('big');
    card.classList.add('list');
  })
)
document.getElementById('bigview').addEventListener('click',()=>
  cards.forEach((card)=>{
    card.classList.remove('list');
    card.classList.add('big');
  })
)


// let a= document.querySelector('.wrap').clientWidth
// console.log(a)