/**
 * Loop là gì
 * Cú pháp Loop
 * Ứng dụng của loop
 * 
 */
// => lặp lại code, code dài
console.log("Nguyễn Thị idol");
console.log("Nguyễn Thị idol");
console.log("Nguyễn Thị idol");
console.log("Nguyễn Thị idol");
console.log("Nguyễn Thị idol");


//=> vòng lặp (loop) => chạy thực thi 1 dòng code nhiều lần có điều kiện

/**
 * Thông báo tên nhiều lần
 * chỉ dừng khi nhấn button Off
 */

//isRun biến , điều kiện để kiểm tra có chạy thông báo text nữa hay không
var content = "";
function runText(soLan) {
    // console.log(isRun);
    //1 : tạo biến bước nhảy
    var count  = 0;
    //2 isRun == true
    while(count < soLan) {
        //3 thỏa đk chạy code trong while
        // count = count + 1
        // count += 1;
        count++;
        // content: biến tích lũy
        // content(mới) =  content(cũ) + "Nguyễn Thị idol";
        content +=  " Nguyễn Thị idol";
        // console.log(content);
        document.getElementById("txtNotify").innerHTML = content;
   
    }
}
//2 thời điểm chạy hàm: load trang. chạy khi user tương tác (click, gõ phím)
//! onclick =   runText(true) => chạy ngay khi load trang
document.getElementById("btnOn").onclick = function(){
    //hàm ẩn danh => giúp gán được các hàm có tham số vào sự kiện
    runText(3);
};

var contentDoWhile = "";
function runTextDoWhile(soLan) {
    //1 
    var count = 4;

    do {
       //2  
       count++;
       contentDoWhile += " Nguyễn Thị idol";
       document.getElementById("txtNotify").innerHTML = contentDoWhile;
    } while (count < soLan);//3
}



document.getElementById("btnOff").onclick = function(){
    runTextDoWhile(3);
};


function runTextFor(soLan) {
    //biến cục bộ nên đặt trùng tên không bị ghi đè giá trị
    var content = "";
    // debugger;
    for(var i = 0; i < soLan; i++){
        //thỏa đk
        content +=  " Nguyễn Thị idol";
        // console.log(content);
        document.getElementById("txtNotify").innerHTML = content;
    }
    
}

document.getElementById("btnFor").onclick = function(){
    runTextFor(3);
};

