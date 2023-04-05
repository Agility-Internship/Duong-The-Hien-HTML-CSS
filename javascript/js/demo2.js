/**
 * Đổi nội dung
 * Khi click vào button => đổi nội dung của 1 đoạn text trên UI
 * 
 * 1. xây dựng chức năng đổi nội dung text thẻ html (function cơ bản)
 * 2. Khai báo sự kiện (event) cho button (click, onchange, onkeypress..)
 * 3. gắn đoạn code đổi nội dung vào sự kiện click của button
 * 
 */

//?Function cơ bản
// Gôm nhóm 1 nhóm code thực chung 1 nghiệp vụ
// => dễ đọc code (dễ quản lý)
// => gắn vào sự kiện (event)

//? thời điểm chạy hàm
/**
 * 1. Khi load trang
 * 2. Khi có sự tác động của user (click, gõ text, mouse, scroll)
 */


//Cú pháp khai báo
// tukhoa tenham
// function sum(){
// }

function showInfo(){
    console.log("Nguyễn Thị Khách Hàng");
}

//sử dụng hàm
//1. Khi load trang
showInfo();



//Tạo hàm đổi nội dung (clg đơn giản)
function changeText(){
    //chứa code xử lý
    // console.log("test chạy hàm");
    var txtELE = document.getElementById("txtChange");

    txtELE.innerHTML = "Đổi rồi nè !";
    //thêm css bằng js
    //gắn inline => style (gắn ít thuộc tính)
    //! ưu diem: độ ưu tiên cao
    //! code dài, khó chỉnh sửa code css
    txtELE.style.color = "red";
    txtELE.style.backgroundColor = "yellow";

    //gắn external (sử dụng class html, file riêng css)
    //? C1:classList gắn thêm class và không xóa class cũ
    txtELE.classList.add("testCSS");

    //? C2: className xóa class cũ và gán đè 1 class mới hoàn toàn
    // txtELE.className = "testCSS";


}

//khai báo sự kiện click của button
// gắn hàm đã tạo vào sự kiện click
// C1: gắn bằng code JS
//!gán hàm vào onclick (không có dấu () => nếu có chạy ngay khi load trang ) 
//? document.getElementById("btnChange").onclick = changeText;
//gán vào onclick 1 hàm ẩn danh (Anonymous function)
//? document.getElementById("btnChange").onclick = function(){
//     changeText();
// }
// C2: gắn sự kiện bằng thuộc tính html (xem bên html)





