/**
 * Khối 1: số nguyên dương < 100
 * 
 * Khối 2: 
 *      count = 0 
 *      kiểm tra lặp code  (count < 100)
 *              kiểm tra phân loại chẵn lẻ
 *                  nếu chia hết cho 2 => số chẵn
 *                  ngược lại, là số lẻ
 *      count++ => 0,1,2,3,4,5 (dãy các con số từ 0 -> 100)
 * 
 * Khối 3: phân loại các chẵn và số lẻ 
 */

function inSoChanLe() {
    var soChan = "";
    var soLe = "";
    // while
    var count = 0;
    while (count < 100) {
        if (count % 2 == 0) {
            //số chẵn
            //soChan = soChan + count+ " , " 
            soChan += count + " , "
        } else {
            //ngược lại
            soLe += count + " , "
        }
        count++;
    }

    //thông kết quả cuối cùng
    document.getElementById("txtChanLe").innerHTML = "Các số chẵn: " + soChan + "<br> Các số lẻ: " + soLe;
}

// document.getElementById("btnInSo").onclick = inSoChanLe;

function inSoChanLeFor() {
    var soChan = "";
    var soLe = "";
    for (var i = 0; i < 100; i++) {
        if (i % 2 == 0) {
            //số chẵn
            //soChan = soChan + count+ " , " 
            soChan += i + " , "
        } else {
            //ngược lại
            soLe += i + " , "
        }
    }
    //thông kết quả cuối cùng
    document.getElementById("txtChanLe").innerHTML = "Các số chẵn: " + soChan + "<br> Các số lẻ: " + soLe;
}
document.getElementById("btnInSo").onclick = inSoChanLeFor;