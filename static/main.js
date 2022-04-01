const desc = "옷장을 채워보세요!n다양한 옷을 카테고리에 맞게 정리하고n기온에 맞는 옷을 추천해 드려요!n";
const text = document.querySelector(".desc");
let i = 0;
let txt = desc.split('n')
function typingDesc(){
    if (i < txt.length) {
      text.innerHTML +=`${txt[i]}<br>`;
    }
        
    i++;
}
setInterval(typingDesc, 500)
