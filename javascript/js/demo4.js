/**
 * Tạo hàm
 *      tìm tới thẻ và lấy giá trị (chỉ lấy giá trị ở thời điểm click button)
 *      thông báo kết quả lên UI
 *      đổi màu chữ
 * Tìm tới button và gắn sự kiện click
 * 
 *! issue : load lại trang web khi click button đăng nhập
 *! root cause: button của form sẽ có type mặc đinh là submit
 *! solution: C1: đổi type của button từ submit => loại button
 * 
 */

function login() {
    //tìm tới thẻ và lấy giá trị
    var username = document.getElementById("username1").value;
    var pass = document.getElementById("password1").value;
    console.log(username,pass);
//     thông báo kết quả lên UI
//    đổi màu chữ
    document.getElementById("txtNotify").innerHTML = "Username: " + username + " Password: " + pass
    document.getElementById("txtNotify").style.color = "red"; 
}

// Tìm tới button và gắn sự kiện click
document.getElementById("btnLogin").onclick = login;



// function login () {
//     let usernameElE = document.getElementById("username1").value;
//     let passwordELE = document.getElementById('password1').value;
//     console.log(usernameElE,passwordELE)
//     document.getElementById('txtNotify').innerHTML = "Username: "+ usernameElE + "password: "+ passwordELE
// }


// document.getElementById('btnLogin').onclick = login;
