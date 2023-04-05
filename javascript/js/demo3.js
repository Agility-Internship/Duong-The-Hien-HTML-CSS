/**
 * tìm tới 3 thẻ: img, button bật, button tắt
 * 
 * Tạo hàm
        bật đèn
        tắt đèn
    
 *  gắn sự kiện button bật
 */

var imgBull = document.getElementById("imgbul");
var btnOn = document.getElementById("btnon");
var btnOff = document.getElementById("btnoff");

console.log(imgBull, btnOn, btnOff);

function batDen() {
    imgBull.src = "./img/pic_bulbon.gif";
}

btnOn.onclick = batDen;


function tatDen() {
    imgBull.src = "./img/pic_bulboff.gif"
}

btnOff.onclick = tatDen;


