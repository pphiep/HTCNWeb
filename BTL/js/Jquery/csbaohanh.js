//Mặc định hiển thị nội dung bảo hành tiêu chuẩn khi trang web được mở
document.addEventListener("DOMContentLoaded", function() {
    showContent(1);
});

//Thêm sự kiện cho .article-option-items
document.querySelectorAll('.article-option-items').forEach(function(item, index) {
    item.addEventListener('click', function() {
        showContent(index + 1);
    });
});

//Thêm sự kiện cho .article-option-child-items
document.querySelectorAll('.article-option-child-items').forEach(function(item) {
    item.addEventListener('click', function(event) {
        showChildContent(event.target);
    });
});

//Sự kiện cha
function showContent(option) {
    var optionItems = document.querySelectorAll('.article-option-items');
    optionItems.forEach(function(item) {
        item.classList.remove('active');
    });

    optionItems[option - 1].classList.add('active');

    var contentDisplay = document.getElementById('content-display');
    switch(option) {
        case 1:
            contentDisplay.innerHTML = `
            <div class="text-muted">
    <h6 style=" font-weight: bold; text-align: center;">Chính Sách Bảo Hành - XShop</h6>
    <p>
    Dịch vụ bảo hành của XShop là cam kết chất lượng và sự hài lòng của khách hàng là ưu tiên hàng đầu. Dưới đây là các điều khoản và điều kiện chi tiết về chính sách bảo hành của chúng tôi:</p>
<h6 style=" font-weight: bold;">1. Thời Gian Bảo Hành:</h6>
<p>Tất cả các sản phẩm điện thoại mới mua từ XShop đều được bảo hành trong vòng 12 tháng tính từ ngày mua hàng. Quá trình bảo hành sẽ áp dụng cho sản phẩm trong thời gian này.</p>
<h6 style=" font-weight: bold;">2. Điều Kiện Bảo Hành:</h6>
<ul>
    <li><p>Sản phẩm cần phải còn trong thời hạn bảo hành và không bị tổn thương do sử dụng không đúng cách.</p></li>
    <li><p>Khách hàng cần cung cấp hóa đơn mua hàng hoặc phiếu bảo hành khi yêu cầu sửa chữa.</p></li>
</ul>
<h6 style=" font-weight: bold;">3. Dịch Vụ Bảo Hành:</h6>
<ul>
    <li><p>XShop cam kết cung cấp dịch vụ sửa chữa hoặc thay thế miễn phí đối với các lỗi kỹ thuật do sản phẩm hoặc quá trình sản xuất gây ra.</p></li>
    <li><p>Chúng tôi sẽ sử dụng linh kiện chính hãng và đảm bảo chất lượng trong quá trình sửa chữa.</p></li>
</ul>
<h6 style=" font-weight: bold;">4. Loại Trừ Bảo Hành:</h6>
<ul>
    <li><p>Bảo hành không áp dụng cho các trường hợp hỏng hóc do người dùng gây ra, bao gồm rơi vỡ, va đập mạnh, tiếp xúc với chất lỏng, hoặc sử dụng không đúng theo hướng dẫn.</p></li>
    <li><p>Sản phẩm đã từng được sửa chữa hoặc can thiệp không được XShop công nhận cũng không được bảo hành.</p></li>
</ul>
<h6 style=" font-weight: bold;">5. Quyền Lợi Bảo Hành:</h6>

<ul>
    <li><p>Khách hàng có quyền được đổi trả sản phẩm hoặc hoàn tiền đầy đủ nếu sản phẩm được xác định là không thể sửa chữa.</p></li>
    <li><p>XShop cam kết hỗ trợ khách hàng trực tuyến 24/7 qua điện thoại hoặc email để giải đáp mọi thắc mắc liên quan đến bảo hành.</p></li>
</ul>
<h6 style=" font-weight: bold;">6. Quy Trình Yêu Cầu Bảo Hành:</h6>
<ul>
    <li><p>Khách hàng có thể liên hệ trực tiếp với bộ phận dịch vụ khách hàng của XShop để yêu cầu bảo hành.</p></li>
    <li><p>Sau khi xác nhận thông tin, chúng tôi sẽ hướng dẫn khách hàng về quy trình gửi sản phẩm và thực hiện sửa chữa hoặc thay thế nếu cần.</p></li>
</ul>
<h6 style=" font-weight: bold;">7. Địa Chỉ:</h6>
<ul>
    <li><p>Địa chỉ bảo hành: 123 Đường ABC, Phường XYZ, Quận ABC, Thành phố HCM, Việt Nam.</p></li>
</ul>
<h6 style=" font-weight: bold;">8. Thời Gian Xử Lý:</h6>
<ul>
    <li><p>XShop cam kết xử lý yêu cầu bảo hành của khách hàng trong vòng 7 ngày làm việc kể từ khi nhận được sản phẩm.</p></li>
    <li><p>Trong trường hợp cần thêm thời gian để sửa chữa hoặc thay thế linh kiện, chúng tôi sẽ thông báo cụ thể cho khách hàng.</p></li>
    <br><br><br>
<p>Chúng tôi hy vọng rằng quy định bảo hành này sẽ giúp khách hàng yên tâm khi mua sắm tại XShop và có trải nghiệm mua hàng trọn vẹn.</p>
</ul>
</div>
            `;
        hideChildItems();
        break;
        case 2:
            contentDisplay.innerHTML =  `
            <div class="text-muted">
            <h6  style=" font-weight: bold; text-align: center;">Chính Sách Bảo Hành và Đổi Trả 30 Ngày Miễn Phí</h6>

            <p>
                Cảm ơn quý khách đã lựa chọn XShop để mua sắm điện thoại. Chúng tôi cam kết cung cấp sản phẩm chất lượng và dịch vụ tốt nhất đến cho khách hàng của mình. Để đảm bảo sự hài lòng của quý khách, chúng tôi áp dụng chính sách bảo hành và đổi trả 30 ngày miễn phí như sau:
            </p>
            
            <ol>
                <li><strong>Điều Kiện Đổi Trả:</strong>
                    <ul>
                        <li>Sản phẩm phải còn nguyên vẹn, không bị hỏng hoặc tổn thất bất kỳ.</li>
                        <li>Hóa đơn mua hàng hoặc chứng nhận mua hàng phải được cung cấp.</li>
                        <li>Yêu cầu đổi trả phải được thực hiện trong vòng 30 ngày kể từ ngày mua hàng.</li>
                    </ul>
                </li>
                <li><strong>Quy Trình Đổi Trả:</strong>
                    <ul>
                        <li>Quý khách vui lòng liên hệ với bộ phận dịch vụ khách hàng của chúng tôi qua số hotline hoặc email để bắt đầu quy trình đổi trả.</li>
                        <li>Chúng tôi sẽ hỗ trợ quý khách trong việc xác nhận yêu cầu đổi trả và hướng dẫn quy trình trả lại sản phẩm.</li>
                    </ul>
                </li>
                <li><strong>Phí Vận Chuyển:</strong>
                    <ul>
                        <li>Chúng tôi sẽ chịu trách nhiệm về phí vận chuyển khi sản phẩm được trả lại do lỗi của XShop hoặc do sản phẩm bị hỏng trong quá trình vận chuyển.</li>
                        <li>Quý khách sẽ chịu trách nhiệm về phí vận chuyển nếu yêu cầu đổi trả không phải do lỗi của XShop.</li>
                    </ul>
                </li>
                <li><strong>Xác Nhận Đổi Trả:</strong>
                    <ul>
                        <li>Sau khi nhận được sản phẩm trả lại, chúng tôi sẽ kiểm tra và xác nhận điều kiện của sản phẩm.</li>
                        <li>Quý khách sẽ được thông báo về quyết định đổi trả trong thời gian sớm nhất có thể.</li>
                    </ul>
                </li>
                <li><strong>Tùy Chọn Đổi Trả:</strong>
                    <ul>
                        <li>Chúng tôi sẽ thực hiện việc đổi trả sản phẩm bằng cách cung cấp sản phẩm mới tương đương hoặc hoàn trả số tiền mua hàng ban đầu.</li>
                    </ul>
                </li>
            </ol>
            <p>
                Chúng tôi cam kết đảm bảo quyền lợi của quý khách hàng và sẵn sàng hỗ trợ trong mọi trường hợp. Xin vui lòng liên hệ với chúng tôi nếu có bất kỳ thắc mắc nào.
            </p>
            
            <p>Trân trọng,<br>XShop Team</p>
            </div>
            `;
            hideChildItems();
            break;
        case 3:
            contentDisplay.innerHTML =  `
            <div class="text-muted">
            <ul>
            <li><strong>Bảo Hành 1 Đổi 1 VIP:</strong> Chương trình bảo hành đặc biệt dành cho các khách hàng VIP, trong đó chúng tôi cam kết thay mới sản phẩm trong thời gian bảo hành mà không cần chờ đợi kiểm tra hay xác nhận.</li>
            <br><br><br>
            <li><strong>Bảo Hành Rơi Vỡ, Ngấm Nước:</strong> Chúng tôi cung cấp dịch vụ bảo hành đặc biệt cho các trường hợp sản phẩm bị rơi vỡ hoặc ngấm nước, đảm bảo sự an tâm cho khách hàng trong mọi tình huống.</li>
             </ul>
            </div>
        
            `;
            showChildItems();
            break;
        default:
            contentDisplay.innerHTML = "";
            hideChildItems();
            break;
    }
}

//Sự kiện con
function showChildContent(option) {
    var childItems = document.querySelectorAll('.article-option-child-items');
    childItems.forEach(function(item) {
        item.classList.remove('active');
    });

    var contentDisplay = document.getElementById('content-display');

    switch(option.dataset.option) {
        case '1':
            contentDisplay.innerHTML =  `
            <div class="text-muted">
            <h6  style=" font-weight: bold; text-align: center;">Chi Tiết Chính Sách Bảo Hành</h6>

            <p><strong>1. Sản Phẩm Áp Dụng:</strong> Điện thoại, máy tính bảng mới/cũ; Tai nghe cao cấp mới, Đồng hồ thông minh Apple/ Samsung mới.</p>
            <p><strong>2. Thời Gian Bảo Hành:</strong> 06 tháng/12 tháng</p>
            <p><strong>3. Điều Kiện Bảo Hành:</strong> Sản phẩm bị lỗi do nhà sản xuất. Việc kiểm tra và xác định lỗi do nhà sản xuất được thực hiện bởi Trung Tâm Bảo Hành Điện Thoại Vui – Đối tác sửa chữa các sản phẩm của CellphoneS hoặc Trung tâm bảo hành của nhà sản xuất.</p>
            
            <h6  style=" font-weight: bold; text-align: center;">4. Quyền Lợi Bảo Hành:</h6>
            
            <p><strong>4.1</strong> Đổi sản phẩm sau khi sản phẩm được kiểm tra và xác định đúng bị lỗi phần cứng phát sinh từ phía nhà sản xuất:</p>
            <p>Sản phẩm đổi bảo hành (A) là sản phẩm giống với sản phẩm Khách hàng mua ban đầu tại CellphoneS.</p>
            <p>Ví dụ: Khách hàng mua sản phẩm A - Nếu xảy ra lỗi từ phía nhà sản xuất và sản phẩm A có tham gia gói Bảo hành 1 đổi 1 – VIP - Khách hàng sẽ được đổi bảo hành sản phẩm là A.</p>
            
            <p><strong>4.2</strong> Sản phẩm đổi bảo hành (A) là sản phẩm giống với sản phẩm Khách hàng mua ban đầu tại CellphoneS.</p>
            <p><strong>4.3</strong> Thời gian xử lý:</p>
            <ul>
                <li>Trong vòng 24h kể từ thời điểm tiếp nhận sản phẩm.</li>
                <li>Với các trường hợp sản phẩm trong tình trạng không hoạt động, sản phẩm không thể kiểm tra, xác minh được số series, IMEI thì CellphoneS cần 05 – 07 ngày làm việc để gửi sản phẩm về hãng sản xuất để xác minh.</li>
            </ul>
            
            <p><strong>4.4</strong> Trường hợp Cellphones.com.vn có sản phẩm để đổi cho Khách hàng nhưng Khách hàng muốn đổi sang sản phẩm khác thì phải đổi sang sản phẩm có giá bán cao hơn sản phẩm hiện tại (A) và chịu phí 10% giá trị sản phẩm khi nhập lại:</p>
            <p>Giá nhập lại sản phẩm = Giá bán hiện tại sản phẩm (A) x 90%</p>
            <p>(trong đó: giá bán hiện tại sản phẩm (A) nhỏ hơn hoặc bằng giá mua sản phẩm ban đầu, trường    hợp giá bán hiện tại sản phẩm (A) lớn hơn giá mua sản phẩm ban đầu thì giá bán hiện tại sản  phẩm được tính bằng giá mua ban đầu).</p>
            
            <p><strong>4.5</strong> Trong trường hợp sản phẩm được đổi phát sinh lỗi tiếp (thuộc phạm vi bảo hành), CellphoneS  vẫn sẽ bảo hành cho sản phẩm theo chế độ 1 đổi 1 trong thời gian bảo hành còn lại.</p>
            
            <p><strong>4.6</strong> Với các trường hợp không có sản phẩm để đổi ngay, CellphoneS cam kết thời gian xử lý đổi sản phẩm tối đa 07 ngày làm việc (trừ 7 + CN). Sau thời gian này, nếu không có sản phẩm đổi cho khách hàng, Cellphones.com.vn sẽ:</p>
            <ol>
                <li>
                    <p>Đổi cho khách hàng một sản phẩm khác cùng thương hiệu, dòng sản phẩm (ví dụ dòng Note Series, S Series với Samsung hoặc dòng Pro/Pro max với Apple) và có chất lượng tương đương với sản phẩm khách hàng mua ban đầu tại CellphoneS, hoặc</p>
                </li>
                <li>
                    <p>Nhập lại cho khách hàng theo công thức sau để đổi (bù phí) sang sản phẩm khác:</p>
                    <p>Giá trị của sản phẩm tại thời điểm bảo hành = Giá mua sản phẩm x (100% - 3% x Số tháng sử dụng sản phẩm)</p>
                    <p>(Số tháng sử dụng = Tháng tại thời điểm đổi sản phẩm  – Tháng tại thời điểm mua sản phẩm)</p>
                    <p>Trường hợp nhập sản phẩm, khách hàng phải có hộp, phụ kiện. Nếu không đầy đủ hộp & phụ kiện, CellphoneS trừ phí 5% giá trị của sản phẩm tại thời điểm bảo hành/món (hộp/phụ kiện)</p>
                </li>
            </ol>
            
            <p><strong>4.7</strong> Dịch vụ bảo hành này không áp dụng đối với hộp và phụ kiện kèm theo như: tai nghe, sạc, cáp...</p>
            
            <p><strong>4.8</strong> Khách hàng có thể chuyển nhượng quyền sở hữu của sản phẩm và gói Bảo hành 1 đổi 1 VIP trong thời gian bảo hành.</p>
            
            <p><strong>Lưu Ý:</strong></p>
            <ul>
                <li>Nếu ngoại hình sản phẩm cấn, móp, cong, nứt, gãy thì Khách hàng không được hưởng quyền lợi của gói bảo hành này.</li>
                <li>Cơ sở xác định sản phẩm lỗi pin: Có giấy xác nhận lỗi pin từ Trung Tâm Bảo Hành hãng/ Hoặc kiểm tra tại Trung Tâm Bảo Hành Điện Thoại Vui – Đối tác sửa chữa các sản phẩm của CellphoneS, cơ sở xác định lỗi pin như sau:</li>
                <ul>
                    <li>Lỗi pin hao nhanh: tiêu hao > 20%/giờ khi xem Youtube với: Wifi, mức âm lượng 50%; mức pin ban đầu 100%; độ sáng màn hình 50%.</li>
                    <li>Lỗi pin chai: Mức độ chai pin >= 30%.</li>
                </ul>
                <li>Cơ sở xác định sản phẩm lỗi phím bấm vật lý: Thử kiểm tra nhấn phím bấm vật lý trong 10 lần liên tiếp và phím bấm không hoạt động (không phản hồi).</li>
            </ul>
            </div>
        
            `;
            break;
        case '2':
            contentDisplay.innerHTML = `
            <div class="text-muted">
            <h6  style=" font-weight: bold; text-align: center;">Chi Tiết Chính Sách Bảo Hành</h6>

<p><strong>1. Sản Phẩm Áp Dụng:</strong> Điện thoại, máy tính bảng mới/cũ</p>
<p><strong>2. Thời Gian Bảo Hành:</strong> 12 tháng</p>
<p><strong>3. Điều Kiện Bảo Hành:</strong> Sản phẩm bị tác động của ngoại lực gây vỡ hoặc bị ngấm nước, ngấm các chất lỏng khác dẫn đến sản phẩm không hoạt động bình thường.</p>

<h6  style=" font-weight: bold; text-align: center;">4. Quyền Lợi Bảo Hành:</h6>

<p><strong>4.1</strong> Trường hợp gặp các vấn đề về lỗi phần cứng (yêu cầu sản phẩm chưa từng qua sửa chữa hư hỏng do rơi vỡ, ngấm nước) phát sinh từ phía nhà sản xuất thì sản phẩm sẽ được bảo hành theo quyền lợi của gói Bảo hành 1 đổi 1 VIP (tham khảo quyền lợi bảo hành ở mục I).</p>

<p><strong>4.2</strong> Trường hợp gặp các vấn đề hư hỏng do rơi vỡ, ngấm nước được Trung Tâm Bảo Hành Điện Thoại Vui – Đối tác sửa chữa các sản phẩm của Cellphones - tiến hành sửa chữa/thay thế linh kiện (hướng xử lý tùy theo mức độ từng trường hợp) cho khách hàng. Thời gian xử lý từ 07 – 14 ngày tùy thuộc vào mức độ hư hỏng của sản phẩm và tình trạng linh kiện.</p>

<p><strong>4.3</strong> Dịch vụ sửa chữa được thực hiện bởi Trung Tâm Bảo Hành Điện Thoại Vui – Đối tác sửa chữa các sản phẩm của Cellphones.com.vn với linh kiện thay thế được bảo hành theo thời hạn còn lại của gói dịch vụ bảo hành.</p>

<p><strong>4.4</strong> Với mỗi trường hợp xảy ra hư hỏng do rơi vỡ, ngấm nước.</p>
            </div>
        
            `;
            break;
        default:
            contentDisplay.innerHTML = "";
            break;
    }

    option.classList.add('active');
}

//Hiển thị .article-option-child-items
function showChildItems() {
    var childItems = document.querySelectorAll('.article-option-child-items');
    childItems.forEach(function(item) {
        item.classList.remove('hidden');
    });
}

//Ẩn .article-option-child-items
function hideChildItems() {
    var childItems = document.querySelectorAll('.article-option-child-items');
    childItems.forEach(function(item) {
        item.classList.add('hidden');
    });
}
document.addEventListener("DOMContentLoaded", function() {
    var xemThemDiv = document.getElementById("xemthem");
    xemThemDiv.style.display = "none";
});

function toggleXemThem() {
    var xemThemDiv = document.getElementById("xemthem");
    if (xemThemDiv.style.display === "none") {
        xemThemDiv.style.display = "block";
    } else {
        xemThemDiv.style.display = "none";
    }
}

