$(document).ready(function(){
    $("#kiemtradonhang").click(function(){
        var madon = $("#madonship").val();
        var sdt = $("#sdtship").val();
        
        
        var madon_regex = /^[0-9]{3}-[0-9]{9}$/;
        if (!madon_regex.test(madon)) {
            $("#madon-error").text("Mã đơn không hợp lệ, vui lòng nhập lại!");
            return;
        } else {
            $("#madon-error").text("(*)");
        }
        
        
        var sdt_regex = /^(09|08|07|06|05|04|03|02|01)[0-9]{8}$/;
        if (!sdt_regex.test(sdt)) {
            $("#sdt-error").text("Số điện thoại không hợp lệ, vui lòng nhập lại!");
            return;
        } else {
            $("#sdt-error").text("(*)");
        }
        
        
        openModal();
    });
});

function openModal() {
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    
    var madon = $("#madonship").val();
    var sdt = $("#sdtship").val();

    var thongTinDonHang = generateRandomThongTinDonHang();
    
    var leftContent = document.getElementById("left-content");
    
    leftContent.innerHTML = "<p>&#8226;Mã đơn hàng: " + madon + "</p>" + 
                            "<p>&#8226;Số điện thoại: " + sdt + "</p>" +
                            "<p>&#8226;Thông tin đơn hàng:</p>" +
                            "<ul>" +
                            "<li>-Sản phẩm: " + thongTinDonHang.product + "</li>" +
                            "<li>-Trạng thái: " + thongTinDonHang.status + "</li>" +
                            "<li>-Ngày giao: " + thongTinDonHang.deliveryDate + "</li>" +
                            "</ul>";
    
    var rightContent = document.getElementById("right-content");
    
    var qrCodes = [
        "../img/qrdh1.jpg",
        "../img/qrdh2.jpg",
        "../img/qrdh3.jpg",
        "../img/qrdh4.jpg",
        "../img/qrdh5.jpg",
        "../img/qrdh6.jpg"
    ];
    
    var randomQRCode = qrCodes[Math.floor(Math.random() * qrCodes.length)];
    
    var qrImage = document.createElement("img");
    qrImage.src = randomQRCode;
    qrImage.alt = "Mã QR";
    qrImage.classList.add("img-dh-modal");
    
    rightContent.innerHTML = "";
    rightContent.appendChild(qrImage);
    
    modal.style.display = "block";
    
    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}



function generateRandomThongTinDonHang() {
    var products = ["Xiaomi14", "Samsung Galaxy S24", "Vivo Y17s", "Oppo Reno11", "Iphone 15"];
    var statuses = ["Đang giao", "Đang chuẩn bị đơn hàng", "Đơn hàng chuẩn bị được giao đến bạn"];
    var deliveryDate = new Date(Date.now() + Math.random() * 1000 * 3600 * 24 * 7);
    var randomProduct = products[Math.floor(Math.random() * products.length)];
    var randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    return {
        product: randomProduct,
        status: randomStatus,
        deliveryDate: deliveryDate.toDateString()
    };
}



