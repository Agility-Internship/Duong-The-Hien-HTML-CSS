console.log('Hello')
var userELE=  document.getElementById("username");
var passELE=  document.getElementById("password");

console.log(userELE,passELE);


var userVal = userELE.value;
var passVal = passELE.value;

console.log(userVal, passVal) ;


function changActive () {
    console.log('Changed finish')
    var txtELE = document.getElementById("textChange");
    txtELE.innerHTML = "Changed text";
    txtELE.style.color = "red";
    txtELE.style.backgroundColor = "yellow";

    txtELE.classList.add("fontCSS");
}

document.getElementById('btnChange').onclick = changActive