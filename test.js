const heart = document.querySelector('.container');

// Lấy số hàng và số cột từ người dùng
const totalRows = parseInt(prompt('Nhập số cột7 (vd: 7)'));
const totalColumns = parseInt(prompt('Nhập số hàng  (vd: 10)'));

let heartContent = '';

for (let i = 0; i <= totalRows; i++) {
    for (let j = 0; j <= totalColumns; j++) {
        if (i == 0 && j < (totalColumns / 2 - 1) && j > 0 || i == 0 && j > (totalColumns / 2 + 1) && j < totalColumns) {
            heartContent += '<span>*</span>';
        } else if (i == 1 && j <= (totalColumns / 2 - 1) || i == 1 && j >= (totalColumns / 2 + 1)) {
            heartContent += '<span>*</span>';
        } else if (i == 2) {
            heartContent += '<span>*</span>';
        } else if (i > 2 && j >= (i - 2) && j <= (totalColumns - (i - 2))) {
            heartContent += '<span>*</span>';
        } else {
            heartContent += '<span>&nbsp;&nbsp;</span>';
        }
    }
    heartContent += '<br>';
}

// Thêm nội dung đã tạo vào phần tử heart
heart.innerHTML = heartContent;

