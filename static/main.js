const desc = "옷장을 채워보세요!n다양한 옷들을 카테고리에 맞게 정리하고n기온에 맞는 옷을 추천해 드려요!n";
const text = document.querySelector(".desc");
let i = 0;

function typingDesc(){
    if (i < desc.length) {
    let txt = desc.charAt(i);
    if(txt==='n'){
      text.innerHTML +='<br>';
    }
    else{
      text.innerHTML += txt
    }
    
    i++;
    }
}
setInterval(typingDesc, 80)
