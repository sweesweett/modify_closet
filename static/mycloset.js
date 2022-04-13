const temperature = document.querySelector('.temp_val');
const tempRange = document.querySelector(".temp_range");
const visibleBtn =document.querySelector('.rangeslider');
const therBtn = document.getElementById('therBtn');
const cards=document.querySelectorAll('.card');
let btnOpen = false;
let explainOpen =false;
let newClothOpen =false;
const imgFile = document.getElementById('imgfile')

const clothKind =document.getElementById('clothKind')
const clothdetail = document.getElementById('kindDetail')


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
document.querySelector('#listview').addEventListener('click',()=>
  cards.forEach((card)=>{
    card.classList.remove('big');
    card.classList.add('list');
  })
)
document.querySelector('#bigview').addEventListener('click',()=>
  cards.forEach((card)=>{
    card.classList.remove('list');
    card.classList.add('big');
  })
)

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
  location.reload()
  }
}
// 새 옷 등록
function uploadClothBtn(){
  document.querySelector('body').style.overflow='hidden';
  document.querySelector('.modalContent').overflow='scroll'
  document.querySelector('.bg').style.display='block';
  document.querySelector('#closeBtn').style.display='block';
  document.querySelector('.newcloth').style.display='block';
  newClothOpen=!newClothOpen
}

// mdn에서 따오긴 했지만, 수정해야함!
function previewFile() {
  const preview = document.querySelector('#imgPreview');
  let file    = document.querySelector('input[type=file]').files[0];
  console.log(file)
  let reader  = new FileReader();

  reader.addEventListener("load", function () {
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}






clothKind.addEventListener('change',()=>{ 
  switch(clothKind.value){
  case 'outer':
    clothdetail.innerHTML=
    `<option value="coat">코트</option>
    <option value="jacket">자켓</option>
    <option value="parka">패딩</option>
    <option value="zipup">집업</option>
    <option value="cardigan">가디건</option>
    <option value="etc">그 외</option>`
    break
  case 'top':
    clothdetail.innerHTML=
    `<option value="tshirt">반팔티</option>
    <option value="sleeveless">민소매</option>
    <option value="sweatshirt">맨투맨</option>
    <option value="shirt">셔츠</option>
    <option value="blouse">블라우스</option>
    <option value="hood">후드티</option>
    <option value="knit">니트</option>
    <option value="pkshirt">pk셔츠</option>
    <option value="vest">조끼</option>`
    break
  case 'bottom':
    clothdetail.innerHTML=
    `<option value="pants">팬츠</option>
    <option value="slack">슬랙스</option>
    <option value="shorts">반바지</option>
    <option value="very-shorts">숏팬츠</option>
    <option value="skirt">스커트</option>
    <option value="etc">그 외</option>`
    break
  case 'set':
    clothdetail.innerHTML=
    `<option value="jumpsuit">점프수트</option>
    <option value="dress">원피스</option>
    <option value="suit">수트</option>
    <option value="clothSet">세트</option>
    <option value="etc">그 외</option>`
    break
  default:
    clothdetail.innerHTML=`<option value="notchoose">선택하세요</option>`
}})


// function kindDetail(){
//   switch(clothKind.value){
//     case 'outer':
//       clothdetail.innerHTML=
//       `<option value="coat">코트</option>
//       <option value="jacket">자켓</option>
//       <option value="parka">패딩</option>
//       <option value="zipup">집업</option>
//       <option value="cardigan">가디건</option>
//       <option value="etc">그 외</option>`
//       break
//     case 'top':
//       clothdetail.innerHTML=
//       `<option value="tshirt">반팔티</option>
//       <option value="sleeveless">민소매</option>
//       <option value="sweatshirt">맨투맨</option>
//       <option value="shirt">셔츠</option>
//       <option value="blouse">블라우스</option>
//       <option value="hood">후드티</option>
//       <option value="knit">니트</option>
//       <option value="pkshirt">pk셔츠</option>
//       <option value="vest">조끼</option>`
//       break
//     case 'bottom':
//       clothdetail.innerHTML=
//       `<option value="pants">팬츠</option>
//       <option value="slack">슬랙스</option>
//       <option value="shorts">반바지</option>
//       <option value="very-shorts">숏팬츠</option>
//       <option value="skirt">스커트</option>
//       <option value="etc">그 외</option>`
//       break
//     case 'set':
//       clothdetail.innerHTML=
//       `<option value="jumpsuit">점프수트</option>
//       <option value="dress">원피스</option>
//       <option value="suit">수트</option>
//       <option value="clothSet">세트</option>
//       <option value="etc">그 외</option>`
//       break
//     default:
//       clothdetail.innerHTML=`<option value="notchoose">선택하세요</option>`
//   }}

// let a= document.querySelector('.wrap').clientWidth
// console.log(a)