/**
 * Tính tiền lương
 * Khối 1:
 *  hour (số giờ làm- 40), salary (tiền mỗi giờ - 50), rate (hệ số - 1.5)
 *
 * Khối 2:
 *  B1: khai báo biến và gán giá trị
 *  B2: Kiêm tra có làm OT
 *      Nếu làm OT =>   (40 * salary) + OT (hour - 40) * salary * rate
 *
 *      Ngược lại không có OT  =>total =  hour * salary
 *  B3: thông báo kết quả
 * Khối 3:
 *  total (lương nhận đc)
 *
 */

let hour = 40;
const salary = 50000;
const rate = 1.5;
let total = 0;

function money(total) {
  let money = 0;
  if (total > hour) {
    money = hour * salary + (total - hour) * salary * rate;
    console.log(
      "You have more money because you OT  " + money.toLocaleString() + " VND"
    );
  } else {
    money = total * salary;
    console.log("You did't OT bro :(( " + money.toLocaleString() + " VND");
  }
}

money(39);

/**
 * Xếp Loại
 *
 * Khối 1:
 *  toan, ly , hoa
 *
 * Khối 2:
 *   Trong hàm
 *       + Lấy giá trị từ form
 *       + tính điểm trung bình
 *       + Xếp loại
 *              Giỏi: dtb >= 8.5
 *              Khá:: dtb >=6.5 && dtb < 8.5
 *              TB: dtb < 6.5 && dtb >= 5
 *              Yếu: dtb < 5
 *       + Hiển thị kết quả
 *   Gắn hàm vào sự kiện click của button
 * Khối 3:
 *   loaiSV
 */

function countAVG() {
  const poinToan = document.getElementById("inpToan").value;
  const poinLy = document.getElementById("inpLy").value;
  const poinHoa = document.getElementById("inpHoa").value;
  console.log(poinToan, poinLy, poinHoa);
  const average = (Number(poinToan) + Number(poinLy) + Number(poinHoa)) / 3;
  console.log("AVG=  " + average);

  let ranked = "";
  if (average >= 8.5 && average <= 10) {
    ranked = "Excellent";
  } else if (average >= 7 && average <= 8.4) {
    ranked = "Good";
  } else if (average >= 5.5 && average <= 6.9) {
    ranked = "TB";
  } else if (average <= 6.8) {
    ranked = "Below";
  } else {
    ranked = " Error : Plz input correct ";
  }
  document.getElementById("txtThongBao").innerHTML = ranked;
}

document.getElementById("btnTinh").onclick = countAVG;
