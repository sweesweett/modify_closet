const temperature = document.querySelector('.temp_val');
const tempRange = document.querySelector('.temp_range');
const therSlider = document.querySelector('.rangeslider');
const therBtn = document.getElementById('therBtn');
const cards = document.querySelectorAll('.card');
let btnOpen = false;
let explainOpen = false;
let newClothOpen = false;
const imgFile = document.getElementById('imgfile');
const clothKind = document.getElementById('clothKind');

tempRange.oninput = tempInput(temperature);
temperature.oninput = tempInput(tempRange);

//온도계 input과 슬라이더 값 동일시하기!
function tempInput(el) {
  return function (e) {
    el.value = e.target.value;
  };
}

//위로올라가기
window.addEventListener('scroll', function () {
  let upBtn = document.querySelector('#upBtn');
  if (window.scrollY > 500) {
    upBtn.style.display = 'block';
    upBtn.addEventListener('click', () =>
      window.scrollTo({ top: 0, behavior: 'smooth' })
    );
  } else {
    upBtn.style.display = 'none';
  }
});

// 온도계버튼 클릭해서 슬라이더 등장/ 사라짐  - 배운 클로저로 해봄!
function visibleSlider() {
  let isVisible = false;
  function changeSliderVisible() {
    const therSlider = document.querySelector('.rangeslider');
    if (isVisible === false) {
      therSlider.style.display = 'flex';
      console.log(isVisible);
    } else {
      therSlider.style.display = 'none';
      console.log(isVisible);
    }
    isVisible = !isVisible;
    return isVisible;
  }
  return changeSliderVisible;
}
therBtn.onclick = visibleSlider();

//온도계 추천 버튼 눌렀을 시 통신(?)
function therRecommand() {}
//목록형 사진형 뷰 바꿀 때
document.querySelector('#listview').addEventListener('click', () =>
  cards.forEach((card) => {
    card.classList.remove('big');
    card.classList.add('list');
  })
);
document.querySelector('#bigview').addEventListener('click', () =>
  cards.forEach((card) => {
    card.classList.remove('list');
    card.classList.add('big');
  })
);

// 옷장설명 오픈
function openExplain() {
  document.querySelector('body').style.overflow = 'hidden';
  document.querySelector('.bg').style.display = 'block';
  document.querySelector('#closeBtn').style.display = 'block';
  document.querySelector('.explain_closet').style.display = 'block';
  explainOpen = !explainOpen;
}

function closeBtn() {
  if (explainOpen === true) {
    //옷장 설명 닫기
    document.querySelector('body').style.overflow = 'auto';
    document.querySelector('.bg').style.display = 'none';
    document.querySelector('#closeBtn').style.display = 'none';
    document.querySelector('.explain_closet').style.display = 'none';
    explainOpen = !explainOpen;
  } else if (newClothOpen === true) {
    //새 옷장 닫기
    document.querySelector('body').style.overflow = 'auto';
    document.querySelector('.bg').style.display = 'none';
    document.querySelector('#closeBtn').style.display = 'none';
    document.querySelector('.newcloth').style.display = 'none';
    newClothOpen = !newClothOpen;
    location.reload();
  }
}
// 새 옷 등록 띄우기
function uploadClothBtn() {
  document.querySelector('body').style.overflow = 'hidden';
  document.querySelector('.modalContent').overflow = 'scroll';
  document.querySelector('.bg').style.display = 'block';
  document.querySelector('#closeBtn').style.display = 'block';
  document.querySelector('.newcloth').style.display = 'block';
  newClothOpen = !newClothOpen;
}

// mdn에서 따오긴 했지만, 수정해야함!
function previewFile() {
  const preview = document.querySelector('#imgPreview');
  let file = document.querySelector('input[type=file]').files[0];
  // console.log(file)
  let reader = new FileReader();

  reader.addEventListener(
    'load',
    function () {
      preview.src = reader.result;
    },
    false
  );

  if (file) {
    reader.readAsDataURL(file);
  }
}

//옷 등록 버튼 눌렀을 때 로그 잘찍히나 확인
function test() {
  const clothTitle = document.getElementById('clothTitle');
  const thickness = document.getElementById('thickness');
  const color = document.getElementById('clothColor');
  const pattern = document.getElementById('clothPattern');

  if (
    clothTitle.value !== '' &&
    thickness.value !== '' &&
    color.value !== '' &&
    pattern.value !== '' &&
    imgFile.value !== '' &&
    clothDetail !== '' &&
    clothKind !== ''
  ) {
    alert('yes');
    //여기에 통신
  } else {
    alert('제대로 입력해 주세요');
  }
  const value = {
    img: imgFile.value,
    title: clothTitle.value,
    cloth: clothKind.value,
    clothdetail: clothDetail.value,
    thickness: thickness.value,
    color: color.value,
    pattern: pattern.value,
  };
  console.log(value);
}

//옷장등록시 종류별 세부 종류 띄우기
//innerHTML이 지양된다는데 어떻게 저걸 다 입력하지?

clothKind.addEventListener('change', () => {
  const clothDetail = document.getElementById('kindDetail');
  switch (clothKind.value) {
    case 'outer':
      clothDetail.innerHTML = `<option value="coat">코트</option>
    <option value="jacket">자켓</option>
    <option value="parka">패딩</option>
    <option value="zipup">집업</option>
    <option value="cardigan">가디건</option>
    <option value="etc">그 외</option>`;
      break;
    case 'top':
      clothDetail.innerHTML = `<option value="tshirt">반팔티</option>
    <option value="sleeveless">민소매</option>
    <option value="sweatshirt">맨투맨</option>
    <option value="shirt">셔츠</option>
    <option value="blouse">블라우스</option>
    <option value="hood">후드티</option>
    <option value="knit">니트</option>
    <option value="pkshirt">pk셔츠</option>
    <option value="vest">조끼</option>`;
      break;
    case 'bottom':
      clothDetail.innerHTML = `<option value="pants">팬츠</option>
    <option value="slack">슬랙스</option>
    <option value="shorts">반바지</option>
    <option value="very-shorts">숏팬츠</option>
    <option value="skirt">스커트</option>
    <option value="etc">그 외</option>`;
      break;
    case 'set':
      clothDetail.innerHTML = `<option value="jumpsuit">점프수트</option>
    <option value="dress">원피스</option>
    <option value="suit">수트</option>
    <option value="clothSet">세트</option>
    <option value="etc">그 외</option>`;
      break;
    default:
      clothDetail.innerHTML = `<option value="notchoose">선택하세요</option>`;
  }
});

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
