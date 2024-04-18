// Thêm nav vào trang
function Nav() {
    document.write(`   
	<nav class="nav justify-content-center">
        <ul class="nav">
            <li class="nav-item" ><a href="../html/index.html" class="textnone">XShop</a></li>
            <li class="nav-item"><a  data-bs-target="#diadiem" data-bs-toggle="modal" href="" style="text-decoration: none;"><p style="color: white; font-size: 10px; text-decoration: none; padding-top: 15px;">Xem giá, khuyến mãi tại <br> <span style="font-size: 10px;" id="Diemmuadt">Hồ Chí Minh...</span><i class="fas fa-sort-down"></i> </p></a></li>
            <div class="search-header nav-item" style="position: relative; left: 10px; top: 1px;">
                <form method="get" action="index.html">
                    <div class="input-group">
                        <input id="search-box" style="border: none;" name="search" autocomplete="off" type="text" placeholder="Nhập từ khóa tìm kiếm">
                        <button type="submit" style="width: 40px; border: none;">
                            <i class="fa fa-search"></i>
                        </button>
                    </div>
                </form>
            </div>
            <li class="nav-item"><a href="../html/index.html" class="textnone">Trang Chủ</a></li>
            <li class="nav-item"><a href="#" class="textnone">Bảo hành</a></li>
            <!--<li class="nav-item"><a href="#" class="textnone">Tuyển dụng</a></li>-->
            <li class="nav-item"><a href="#" class="textnone">Giới thiệu</a></li>
            <li class="nav-item" ><a href="#" class="textnone">Liên hệ</a></li> 
			<div >
				<a href="#" class="nav-link" style="color: white;">
					<i class="fa fa-user"></i>
					Tài khoản
				</a>
			</div>
            <li class="nav-item" style="color: white;">
                <div class="cart">
                    <a href="giohang.html" style="color: white;">
                        <i class="fa fa-shopping-cart"></i>
                        <span>Giỏ hàng</span>
                        <span class="cart-number"></span>
                    </a>
                </div> 
            </li>  
        </ul>
    </nav>`);
}

// Thêm header

function Header() {
    document.write(` 
    <div class="menu" style="margin-bottom: 10px;">
         <ul class="main-menu" style="justify-content: space-between;">
            <li>
                <a href="#iphone" class="textmenu" onclick="showProductsByCategory2('iPhone')"> iPhone <i class="fas fa-sort-down"></i></a>
                <ul class="sup-menu" style="width:151px;">
                    <li style="width: 149px;"><a href="#sec" class="liip" onclick="showProductsByCategory2('iPhone 15 Pro Max')">iPhone 15 Pro Max</a>       
                    </li>
                    <li style="width: 149px;"><a href="#sec" class="liip" onclick="showProductsByCategory2('iPhone14')">iPhone14 </a>
                        <ul class="sup-menu" style="width: 200px;">
                            <li><a href="#sec" onclick="showProductsByCategory2('iPhone14 Pro Max')">iPhone14 Pro Max</a></li>
                            <li><a href="#sec" onclick="showProductsByCategory2('iPhone14 Pro')">iPhone14 Pro </a></li>
                            <li><a href="#sec" onclick="showProductsByCategory2('iPhone14 Plus')">iPhone14 Plus</a></li>
                            
                        </ul>
                    </li>
                    <li style="width: 149px;"><a href="#sec" class="liip">iPhone13 Pro Max</a></li>
                    <li style="width: 149px;"><a href="#sec" class="liip">iPhone12 Pro Max</a></li>
                    <li style="width: 149px;"><a href="#sec">iPhone11 Pro Max</a></li>
                </ul>
            </li>
            <li>
                <a href="#sec" class="textmenu"> Vivo <i class="fas fa-sort-down"></i></a>
                <ul class="sup-menu" style="width: 151px;">
                    <li class="livv" style="width: 151px"><a href="#sec" >Vivo Y17s</a></li>
                    <li class="livv" style="width: 151px"><a href="#sec" >Vivo Y22</a>
                        <ul class="sup-menu " style="width: 200px;">
                            <li><a href="#sec">Vivo Y22x</a></li>
                            <li><a href="#sec">Vivo Y22y </a></li>
                            <li><a href="#sec">Vivo Y22z</a></li>
                            
                        </ul></li>
                    <li class="livv" style="width: 151px"><a href="#sec" >Vivo V29 5G</a></li>
                </ul>
            </li>
            <li>
                <a href="#oppo" class="textmenu"> OPPO <i class="fas fa-sort-down"></i></a>
                <ul class="sup-menu" style="width: 200px;">
                    <li style="width: 200px;"><a href="#sec">OPPO Reno11</a></li>
                    <li style="width: 200px;"><a href="#sec">OPPO A18</a></li>
                    <li style="width: 200px;"><a href="#sec">OPPO Find N2</a></li>
                </ul>
            </li>
            <li>
                <a href="#samsung" class="textmenu"> Samsung <i class="fas fa-sort-down"></i></a>
                <ul class="sup-menu" style="width: 203px;">
                    <li><a href="#sec">Samsung Galaxy S24 </a></li>
                    <li><a href="#sec">Samsung Galaxy S23</a></li>
                    <li><a href="#sec">Samsung Galaxy Z Fold5</a></li>
                    <li><a href="#sec">Samsung Galaxy Z Fild5</a></li>
                </ul>
            </li>
            <li>
                <a href="#sec" class="textmenu"> Xiaomi <i class="fas fa-sort-down"></i></a>
                <ul class="sup-menu" style="width: 200px;">
                    <li><a href="#sec">Xiaomi 14</a></li>
                            <li style="width: 250px;"><a href="#" style="width: 250px;">Xiaomi Redmi Note 13 Pro</a></li>
                            <li><a href="#sec">Xiaomi 13T Pro</a></li>
                            <li><a href="#sec">Xiaomi Redmi A2 series</a></li>
                </ul>
            </li>
            <li>
                <a href="#sec" class="textmenu"> Redmi <i class="fas fa-sort-down"></i></a>
                <ul class="sup-menu" style="width: 180px;">
                    <li><a href="#sec" class="">Realmi Note 50</a></li>
                    <li><a href="#sec" class="">Realmi C55</a></li>
                    <li><a href="#sec" class="">Realmi 11</a></li>
                    <li><a href="#sec" class="">Realmi C30s</a></li>
                </ul>
            </li>        
         </ul>
    </div>`);
}
//Footer
function Footer() {
    document.write(`
    <footer class="footer bg-white">
    <section class="footer-top clearfix">
        <div class="footer-col">
            <h6 class="footer-title">
                Thông tin và chính sách
            </h6>
            <ul class="footer-menu " id="menu-list">
                <li class="footer-list-link"><a class="footer-text-link" target="_blank" href="">Chính sách bảo hành</a></li>
                <li class="footer-list-link"><a class="footer-text-link" target="_blank" href="">Chính sách đổi trả</a></li>
                <li class="footer-list-link"><a class="footer-text-link" target="_blank" href="">Mua hàng trả góp Online</a></li>
                <li class="footer-list-link"><a class="footer-text-link" target="_blank" href="">Mua hàng trả góp bằng thẻ tín dụng</a></li>
                <li class="footer-list-link"><a class="footer-text-link" target="_blank" href="">Giao hàng &amp; Thanh toán</a></li>
                <li class="footer-list-link" id="xem-them"><a class="footer-text-link" href="#">Xem thêm<span class='rotate-up'>▼</span></a></li>
            </ul>
        </div>
        <div class="footer-col">
            <h6 class="footer-title">
                Dịch vụ và thông tin khác
            </h6>
            <ul class="footer-menu">
                <li class="footer-list-link"><a class="footer-text-link" target="_blank" href="">Liên hệ hợp tác kinh doanh</a></li>
                <li class="footer-list-link"><a class="footer-text-link" target="_blank" href="">Chính sách bảo mật thông tin cá nhân</a></li>
                <li class="footer-list-link"><a class="footer-text-link" target="_blank" href="">Gửi góp ý, khiếu nại</a></li>
                <li class="footer-list-link"><a class="footer-text-link" target="_blank" href="">Dịch vụ bảo hành điện thoại</a></li>
                <li class="footer-list-link"><a class="footer-text-link" target="_blank" href="">Dịch vụ bảo hành mở rộng</a></li>
            </ul>
        </div>
        <div class="footer-col">
            <h6 class="footer-title">
                Tổng đài hỗ trợ miễn phí
            </h6>
            <ul class="footer-menu">
                <li class="footer-list-contact"><p class="footer-text-call">Gọi mua hàng:</p><a class="footer-text-contact" target="_blank" href="tel:+84393465113" >0393465113</a></li>
                <li class="footer-list-contact"><p class="footer-text-call">Gọi Khiếu nại:</p><a class="footer-text-contact" target="_blank" href="tel:+84393465113" >0393465113</a></li>    
                <li class="footer-list-contact"><p class="footer-text-call">Gọi bảo hành:</p><a class="footer-text-contact" target="_blank" href="mailto: tranngochung19112004@gmail.com">tranngochung19112004@gmail.com</a></li>   
            </ul>
        </div>
        <div class="footer-col">
            <h6 class="footer-title">
                Kết nối với XShop
            </h6>
            <ul class="footer-menu">
                <li class="footer-list-logo"><a target="_blank" href="https://www.facebook.com/HeungMinSonOfficial"><img class="footer-img-logo" src="../img/logofacebook.png" alt=""></a></li>
                <li class="footer-list-logo"><a target="_blank" href="https://www.instagram.com/hm_son7/"><img class="footer-img-logo"g src="../img/logoinstagram.png" alt=""></a></li>
                <li class="footer-list-logo"><a target="_blank" href="https://www.youtube.com/@TottenhamHotspur"><img class="footer-img-logo" src="../img/logoyoutube.png" alt=""></a></li>
                <li class="footer-list-logo"><a target="_blank" href="https://www.tiktok.com/@spursofficial"><img class="footer-img-logo" src="../img/logotiktok.png" alt=""></a></li>
                <li class="footer-list-logo"><a target="_blank" href=""><img class="footer-img-logo" src="../img/logozalo.webp" alt=""></a></li>
            </ul>
            <h6 class="footer-title">
                Website thành viên
            </h6>
            <ul class="footer-menu">
                <li class="footer-list-avarta"><a target="_blank" href="https://www.4kfarm.com/"><img class="footer-avarta-member" src="../img/avarta-4kfarm.png" alt=""></a></li>
                <li class="footer-list-avarta"><a target="_blank" href="https://avafashion.org/#!"><img class="footer-avarta-member" src="../img/avarta-AVAfashion.png" alt=""></a></li>
                <li class="footer-list-avarta"><a target="_blank" href="http://ww25.avaji.org/?subid1=20240327-2224-1045-b8f4-5d311a1a1a85"><img class="footer-avarta-member" src="../img/avarta-AVAJi.png" alt=""></a></li>
                <li class="footer-list-avarta"><a target="_blank" href="https://www.avakids.com/online-gia-re?utm_source=facebook&utm_medium=cpc&utm_campaign=avakids-km&gad_source=1&gclid=CjwKCAjwh4-wBhB3EiwAeJsppB8JtQ6TUErr-t6vDZKkWJkHzzzayK8djIrnE8VJPuqEg8t1zhRUyxoCo1wQAvD_BwE"><img class="footer-avarta-member" src="../img/avarta-AVAKid.png" alt=""></a></li>
                <li class="footer-list-avarta"><a target="_blank" href="https://www.bachhoaxanh.com/"><img class="footer-avarta-member" src="../img/avarta-bachhoaxanh1.png" alt=""></a></li>
                <li class="footer-list-avarta"><a target="_blank" href="https://www.nhathuocankhang.com/"><img class="footer-avarta-member" src="../img/avarta-nhathuoc.png" alt=""></a></li>
                <li class="footer-list-avarta"><a target="_blank" href="https://www.topzone.vn/"><img class="footer-avarta-member" src="../img/avarta-topfarm.png" alt=""></a></li>
            </ul>
            <h6 class="footer-title">
                Phương thức thanh toán
            </h6>
            <ul class="footer-menu">
                <li class="footer-list-avartapay"><img class="footer-avarta-pay" src="../img/avarta-card.png" alt=""></li>
                <li class="footer-list-avartapay"><img class="footer-avarta-pay" src="../img/avarta-jcb.png" alt=""></li>
                <li class="footer-list-avartapay"><img class="footer-avarta-pay" src="../img/avarta-atm.png" alt=""></li>
                <li class="footer-list-avartapay"><img class="footer-avarta-pay" src="../img/avarta-tragop.png" alt=""></li>
                <li class="footer-list-avartapay"><img class="footer-avarta-pay" src="../img/avarta-visa.png" alt=""></li>
            </ul>
        </div>
    </section>
     <div class="footer-bot" style="background-color: #f1f1f1">
        <p>© Bản quyền 2024 - Lớp đại học kỹ thuật phần mềm 18A (Đại học Công Nghiệp Thành phố Hồ Chí Minh) <br>
        <span><em style="font-size:10px; font-weight:normal">Mọi hành động sử dụng nội dung đăng tải trên Website XShop.com phải có sự đồng ý bằng văn bản của <b><a href="../html/index.html" style="text-decoration: none; color: black;">XShop</a></b>.</em></span>
        </p>
    </div>
    </footer>`);
}

//Copy
window.onload = function () {
	khoiTao();

	// autocomplete cho khung tim kiem
	autocomplete(document.getElementById('search-box'), list_products);
	// Thêm sản phẩm vào trang
	var sanPhamPhanTich
	var sanPhamPhanTrang;

	var filters = getFilterFromURL();
	if (filters.length) { // có filter
		sanPhamPhanTich = phanTich_URL(filters, true);
		sanPhamPhanTrang = tinhToanPhanTrang(sanPhamPhanTich, filtersFromUrl.page || 1);
		if (!sanPhamPhanTrang.length) alertNotHaveProduct(false);
		else addProductsFrom(sanPhamPhanTrang);

		// hiển thị list sản phẩm
		document.getElementsByClassName('contain-products')[0].style.display = '';

	} else { // ko có filter : trang chính mặc định sẽ hiển thị các sp hot, ...
		var soLuong = (window.innerWidth < 1200 ? 4 : 5); // màn hình nhỏ thì hiển thị 4 sp, to thì hiển thị 5
		// Các màu
		var yellow_red = ['#ff9c00', '#ec1f1f'];
		// Thêm các khung sản phẩm
		var div = document.getElementsByClassName('contain-khungSanPham')[0];
		addKhungSanPham('NỔI BẬT NHẤT', yellow_red, ['star=3', 'sort=rateCount-decrease'], soLuong, div);
	}
	// Thêm filter đã chọn
	addAllChoosedFilter();
};

var soLuongSanPhamMaxTrongMotTrang = 15;

// =========== Đọc dữ liệu từ url ============
var filtersFromUrl = { // Các bộ lọc tìm được trên url sẽ đc lưu vào đây
	company: '',
	search: '',
	price: '',
	promo: '',
	star: '',
	page: '',
	sort: {
		by: '',
		type: 'ascending'
	}
}

function getFilterFromURL() { // tách và trả về mảng bộ lọc trên url
	var fullLocation = window.location.href;
	fullLocation = decodeURIComponent(fullLocation);
	var dauHoi = fullLocation.split('?'); // tách theo dấu ?

	if (dauHoi[1]) {
		var dauVa = dauHoi[1].split('&');
		return dauVa;
	}

	return [];
}

function phanTich_URL(filters, saveFilter) {
	var result = copyObject(list_products);

	for (var i = 0; i < filters.length; i++) {
		var dauBang = filters[i].split('=');

		switch (dauBang[0]) {
			case 'search':
				dauBang[1] = dauBang[1].split('+').join(' ');
				result = timKiemTheoTen(result, dauBang[1]);
				if (saveFilter) filtersFromUrl.search = dauBang[1];
				break;

			case 'price':
				if (saveFilter) filtersFromUrl.price = dauBang[1];

				var prices = dauBang[1].split('-');
				prices[1] = Number(prices[1]) || 1E10;
				result = timKiemTheoGiaTien(result, prices[0], prices[1]);
				break;

			case 'company':
				result = timKiemTheoCongTySanXuat(result, dauBang[1]);
				if (saveFilter) filtersFromUrl.company = dauBang[1];
				break;

			case 'star':
				result = timKiemTheoSoLuongSao(result, dauBang[1]);
				if (saveFilter) filtersFromUrl.star = dauBang[1];
				break;

			case 'promo':
				result = timKiemTheoKhuyenMai(result, dauBang[1]);
				if (saveFilter) filtersFromUrl.promo = dauBang[1];
				break;

			case 'page': // page luôn ở cuối đường link
				if (saveFilter) filtersFromUrl.page = dauBang[1];
				break;

			case 'sort':
				var s = dauBang[1].split('-');
				var tenThanhPhanCanSort = s[0];

				switch (tenThanhPhanCanSort) {
					case 'price':
						if (saveFilter) filtersFromUrl.sort.by = 'price';
						result.sort(function (a, b) {
							var giaA = parseInt(a.price.split('.').join(''));
							var giaB = parseInt(b.price.split('.').join(''));
							return giaA - giaB;
						});
						break;

					case 'star':
						if (saveFilter) filtersFromUrl.sort.by = 'star';
						result.sort(function (a, b) {
							return a.star - b.star;
						});
						break;

					case 'rateCount':
						if (saveFilter) filtersFromUrl.sort.by = 'rateCount';
						result.sort(function (a, b) {
							return a.rateCount - b.rateCount;
						});
						break;

					case 'name':
						if (saveFilter) filtersFromUrl.sort.by = 'name';
						result.sort(function (a, b) {
							return a.name.localeCompare(b.name);
						});
						break;
				}

				if (s[1] == 'decrease') {
					if (saveFilter) filtersFromUrl.sort.type = 'decrease';
					result.reverse();
				}

				break;
		}
	}

	return result;
}

// thêm các sản phẩm từ biến mảng nào đó vào trang
function addProductsFrom(list, vitri, soluong) {
	var start = vitri || 0;
	var end = (soluong ? start + soluong : list.length);
	for (var i = start; i < end; i++) {
		addProduct(list[i]);
	}
}

function clearAllProducts() {
	document.getElementById('products').innerHTML = "";
}

// Thêm sản phẩm vào các khung sản phẩm
function addKhungSanPham(tenKhung, color, filter, len, ele) {
	// convert color to code
	var gradient = `background-image: linear-gradient(120deg, ` + color[0] + ` 0%, ` + color[1] + ` 50%, ` + color[0] + ` 100%);`
	var borderColor = `border-color: ` + color[0];
	var borderA = `	border-left: 2px solid ` + color[0] + `;
					border-right: 2px solid ` + color[0] + `;`;

	// mở tag
	var s = `<div class="khungSanPham" style="` + borderColor + `">
				<h3 class="tenKhung" style="` + gradient + `">* ` + tenKhung + ` *</h3>
				<div class="listSpTrongKhung flexContain">`;

	// thêm các <li> (sản phẩm) vào tag
	var spResult = phanTich_URL(filter, false);
	if (spResult.length < len) len = spResult.length;

	for (var i = 0; i < len; i++) {
		s += addProduct(spResult[i], null, true);
		// truyền vào 'true' để trả về chuỗi rồi gán vào s
	}

	// thêm nút xem tất cả rồi đóng tag
	s += `	</div>
			<a class="xemTatCa" href="index.html?` + filter.join('&') + `" style="` + borderA + `">
				Xem tất cả ` + spResult.length + ` sản phẩm
			</a>
		</div> <hr>`;

	// thêm khung vào contain-khung
	ele.innerHTML += s;
}

// Nút phân trang
function themNutPhanTrang(soTrang, trangHienTai) {
	var divPhanTrang = document.getElementsByClassName('pagination')[0];

	var k = createLinkFilter('remove', 'page'); // xóa phân trang cũ
	if (k.indexOf('?') > 0) k += '&';
	else k += '?'; // thêm dấu

	if (trangHienTai > 1) // Nút về phân trang trước
		divPhanTrang.innerHTML = `<a href="` + k + `page=` + (trangHienTai - 1) + `"><i class="fa fa-angle-left"></i></a>`;

	if (soTrang > 1) // Chỉ hiện nút phân trang nếu số trang > 1
		for (var i = 1; i <= soTrang; i++) {
			if (i == trangHienTai) {
				divPhanTrang.innerHTML += `<a href="javascript:;" class="current">` + i + `</a>`

			} else {
				divPhanTrang.innerHTML += `<a href="` + k + `page=` + (i) + `">` + i + `</a>`
			}
		}

	if (trangHienTai < soTrang) { // Nút tới phân trang sau
		divPhanTrang.innerHTML += `<a href="` + k + `page=` + (trangHienTai + 1) + `"><i class="fa fa-angle-right"></i></a>`
	}
}

// Tính toán xem có bao nhiêu trang + trang hiện tại,
// Trả về mảng sản phẩm trong trang hiện tại tính được
function tinhToanPhanTrang(list, vitriTrang) {
	var sanPhamDu = list.length % soLuongSanPhamMaxTrongMotTrang;
	var soTrang = parseInt(list.length / soLuongSanPhamMaxTrongMotTrang) + (sanPhamDu ? 1 : 0);
	var trangHienTai = parseInt(vitriTrang < soTrang ? vitriTrang : soTrang);

	themNutPhanTrang(soTrang, trangHienTai);
	var start = soLuongSanPhamMaxTrongMotTrang * (trangHienTai - 1);

	var temp = copyObject(list);

	return temp.splice(start, soLuongSanPhamMaxTrongMotTrang);
}

// ======== TÌM KIẾM (Từ mảng list truyền vào, trả về 1 mảng kết quả) ============

// function timKiemTheoTen(list, ten, soluong) {}
// hàm Tìm-kiếm-theo-tên được đặt trong dungchung.js , do trang chitietsanpham cũng cần dùng tới nó
function timKiemTheoSoLuongSao(list, soLuongSaoToiThieu, soluong) {
	var count, result = [];
	if (soluong < list.length) count = soluong;
	else count = list.length;

	for (var i = 0; i < list.length; i++) {
		if (list[i].star >= soLuongSaoToiThieu) {
			result.push(list[i]);
			count--;
			if (count <= 0) break;
		}
	}

	return result;
}

// ========== LỌC ===============


// Tạo link cho bộ lọc
// type là 'add' hoặc 'remove',
// tương ứng 'thêm' bộ lọc mới có giá trị = valueAdd, hoặc 'xóa' bộ lọc đã có
function createLinkFilter(type, nameFilter, valueAdd) {
	var o = copyObject(filtersFromUrl);
	o.page = ''; // reset phân trang

	if (nameFilter == 'sort') {
		if (type == 'add') {
			o.sort.by = valueAdd.by;
			o.sort.type = valueAdd.type;

		} else if (type == 'remove') {
			o.sort.by = '';
		}

	} else {
		if (type == 'add') o[nameFilter] = valueAdd;
		else if (type == 'remove') o[nameFilter] = '';
	}

	var link = 'index.html'; //window.location.href.split('?')[0].replace('#', '');
	var h = false; // Đã có dấu hỏi hay chưa


	// thêm sort (do sort trong filtersFromUrl là kiểu object, khác với kiểu string của những loại còn lại)
	// nên lúc tạo link sẽ khác những loại trên
	if (o.sort.by != '')
		link += (h ? '&' : '?') + 'sort=' + o.sort.by + '-' + o.sort.type;

	return link;
}

// Thông báo nếu không có sản phẩm
function alertNotHaveProduct(coSanPham) {
	var thongbao = document.getElementById('khongCoSanPham');
	if (!coSanPham) {
		thongbao.style.width = "auto";
		thongbao.style.opacity = "1";
		thongbao.style.margin = "auto"; // Căn giữa
		thongbao.style.transitionDuration = "1s"; // hiện ra từ từ

	} else {
		thongbao.style.width = "0";
		thongbao.style.opacity = "0";
		thongbao.style.margin = "0";
		thongbao.style.transitionDuration = "0s"; // Ngay lâp tức biến mất
	}
}

