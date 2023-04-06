/**
 * Khối 1: 
 * radio loại xe, soKM, tgCho (lấy dữ liệu từ form)
 * Bảng giá cước (dữ liệu cũng cấp sẵn)
 * 
 * Khối 2:
 *   Tính tổng tiền (main - hàm chính của ứng)
 *          + lấy giá trị từ form
 *          + kiemTraLoaiXe => cần 3 radio loại xe để kiểm tra
 *                          !=> trả kết quả loaiXe
 *          + tinhTienTheoKM => cần soKM, loaiXe, bảng giá
 *                           !=> trả kết quả tienTheoKM
 *          + tinhTienPhat   => tgCho, bảng giá
 *                          !=> trả về tienPhat
 *      tongTien = kết quả tinhTienTheoKM + kết quả tinhTienPhat  
 * 
 * Khối 3:
 * + tổng tiền
 */


//Toàn cục / Global
const GIA_KMDAU_CAR = 8000;
const GIA_KM1_19_CAR = 7500;
const GIA_KMTREN_19_CAR = 7000;
const GIA_CHO_CAR = 2000;

const GIA_KMDAU_SUV = 9000;
const GIA_KM1_19_SUV = 8500;
const GIA_KMTREN_19_SUV = 8000;
const GIA_CHO_SUV = 3000;

const GIA_KMDAU_BLACK = 10000;
const GIA_KM1_19_BLACK = 9500;
const GIA_KMTREN_19_BLACK = 9000;
const GIA_CHO_BLACK = 3500;


//hàm main (chức năng chính)
function tinhTongTien() {
    //lấy dữ liệu từ form
    var radioCar = document.getElementById("grabCar");
    var radioSUV = document.getElementById("grabSUV");
    var radioBlack = document.getElementById("grabBlack");
    // console.log(radioCar,radioSUV,radioBlack);

    var soKM = document.getElementById("inputKM").value;
    var tgCho = document.getElementById("inputTG").value;
    // console.log(soKm, tgCho);

    //TODO - Gọi hàm kiểm tra loại xe
    var loaiXe = kiemTraLoaiXe(radioCar, radioSUV, radioBlack);
    console.log(loaiXe);

    //TODO - Gọi tính theo KM(3 đoạn đường)
    //kiểm tra tính KM theo loại xe
    var tienTheoKM = 0;
    switch (loaiXe) {
        case "car":
            //TODO - Gọi tính theo KM car 
            tienTheoKM =  tinhTienTheoKM(soKM, GIA_KMDAU_CAR, GIA_KM1_19_CAR, GIA_KMTREN_19_CAR);
           console.log(tienTheoKM)
            break;
        case "suv":
            //TODO - Gọi tính theo KM suv 
            break;
        case "black":
            //TODO - Gọi tính theo KM black

            break;
        default:
            break;
    }



}

//có tham số, có trả về kết quả
function kiemTraLoaiXe(radioCar, radioSUV, radioBlack) {
    //kiểm tra: if-else if, checked(radio, checkbox) => true

    var loaiXe = "";
    // radioCar.checked == true
    if (radioCar.checked) {
        //loại car được chọn
        loaiXe = "car";
    } else if (radioSUV.checked) {
        loaiXe = "suv";
    } else if (radioBlack.checked) {
        loaiXe = "black";
    } else {
        //trường hợp ko chọn radio
        alert("Quen chọn loại xe nè!")
    }

    return loaiXe;

}

//có tham số, có trả về kết quả
function tinhTienTheoKM(soKM, giaDau, gia1_19, giaTren19) {
    var tienTheoKM = 0;
    if (0 < soKM && soKM <= 1) {
        tienTheoKM = giaDau * soKM;

    } else if (1 < soKM && soKM <= 19) {

        tienTheoKM = giaDau + (soKM - 1) * gia1_19;

    } else if (soKM > 19) {
        tienTheoKM = giaDau + 18 * gia1_19 + (soKM - 19) * giaTren19;
    }else{
        alert("Quên nhập Số KM")
    }

    return tienTheoKM;
}
