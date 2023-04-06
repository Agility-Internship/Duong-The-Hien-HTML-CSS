/**
 * 1. Tìm tới 2 ô input username và password
 * 2. Lấy được giá trị (value) của username và password
 * 3. thông báo console
 */

//Tìm tới 2 ô input username và password

//tìm tới thẻ bằng id => DOM
var userELE = document.getElementById("username");
var passELE = document.getElementById("password");

console.log(userELE, passELE);
            // thẻ.tênthuoctinh
var userVal = userELE.value;
var passVal = passELE.value;

console.log(userVal,passVal);
