document.addEventListener('DOMContentLoaded', function() {
    // Đăng ký sự kiện cho form đăng ký
    document.getElementById('registerForm').addEventListener('submit', function(e) {
        e.preventDefault(); // Ngăn chặn chuyển hướng mặc định của form

        // Lấy thông tin từ các trường input
        var hoTen = document.getElementById('hoTen').value;
        var email = document.getElementById('email').value;
        var sdt = document.getElementById('sdt').value;
        // Thực hiện lưu thông tin đăng ký vào localStorage
        localStorage.setItem('tenDN', hoTen);
        localStorage.setItem('email', email);
        localStorage.setItem('sdt', sdt);

        // Hiển thị thông tin người dùng
        displayUserInfo();

        // Xóa các trường input sau khi đăng ký thành công
        document.getElementById('hoTen').value = '';
        document.getElementById('email').value = '';
        document.getElementById('sdt').value = '';
    });

    // Hiển thị thông tin người dùng khi trang được tải
    displayUserInfo();
});

// Hàm để hiển thị thông tin người dùng
function displayUserInfo() {
    var tenDN = localStorage.getItem('tenDN');
    var email = localStorage.getItem('email');
    var sdt = localStorage.getItem('sdt');

    document.getElementById('tenDN').textContent = tenDN;
    document.getElementById('email').textContent = email;
    document.getElementById('sdt').textContent = sdt;
}
