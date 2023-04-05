/**
 * Khối 1:Inputs
 *   tongTien, phanTramTip, soNguoi
 *
 * Khối 2:
 *   B1: Tạo hàm tính tiền tip
 *   B2: Gắn hàm vào sự kiện click button
 *   B3: Trong hàm : lấy giá trị từ form
 *   B4: Trong hàm : lập công thức tính toán
 *?       tongTienTip = tongTien * phanTramTip / 100  (100 * 30 / 100)
 *?       tipMoiNguoi = tongTienTip / soNguoi
 *   B5: TRong Hàm: Thông báo kết quả lên UI
 *
 * Khối 3:Output
 *    tiền tip mỗi người
 *
 * tipMoiNguoi
 */

//  B1:
//  function tinhTienTip(){
//     var tongTien = document.getElementById("inputTotal").value;
//     var phanTramTip = document.getElementById("selectPercent").value;
//     var soNguoi = document.getElementById("inputPeople").value

//     console.log(tongTien,phanTramTip,soNguoi);

//     var tongTienTip = tongTien * phanTramTip / 100 ;
//     var tipMoiNguoi = tongTienTip /soNguoi;

//     console.log(tongTienTip, tipMoiNguoi);

//     document.getElementById("txtResult").innerHTML = "TIP AMOUNT <br> <span style='vertical-align: super;' >$</span>" +tipMoiNguoi+ "<br>mỗi người"

//     document.getElementById("txtResult").style.textAlign = "center"
//  }

//  document.getElementById("btnCalc").onclick = tinhTienTip;


function sumTip() {
   let textELE = document.getElementById('inputTotal').value;
   let percentELE= document.getElementById('selectPercent').value;
   let numberELE = document.getElementById('inputPeople').value;
   console.log(typeof textELE)
   const Sumtip = (textELE*percentELE)/100;
   const tipPerson = Sumtip/numberELE;
   document.getElementById('txtResult').innerHTML= "TIP AMOUNT <br> <span style='vertical-align: super;' >$</span>" +tipPerson+ "<br>mỗi người"
   document.getElementById('txtResult').style.textAlign = "center"
}


document.getElementById('btnCalc').onclick = sumTip;