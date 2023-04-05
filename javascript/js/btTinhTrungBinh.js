
function tinhTrungBinh() {
      var num1 = document.getElementById("number1").value;
      var num2 = document.getElementById("number2").value;
      var num3 = document.getElementById("number3").value;
      var num4 = document.getElementById("number4").value;
      var num5 = document.getElementById("number5").value;

      console.log(typeof(num1)); //=> tất cả dữ liệu lấy form đều là kiểu string

      //Chuyển string thành number (ép kiểu)
      //Number() : chuyển string thành kiểu Int và Float,
      //parseFloat (số thực) 
     // parseInt (số nguyên)

     
        //+ : 2 tính năng: công các số, nối chuỗi ký tự 
      var trungBinh = ( Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5) ) / 5; //=> 11111

      document.getElementById("result").innerHTML = trungBinh; 
}

document.getElementById("btnTrungBinh").onclick = tinhTrungBinh;