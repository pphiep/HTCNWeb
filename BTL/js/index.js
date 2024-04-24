// Thêm nav vào trang
function Nav() {
    document.write(`   
        <nav>
        <div class="container">
            <ul>
                <li style="height: 50px;"><a href="../html/index.html" style="line-height: 50px;">XShop</a></li>
                <li><a  data-bs-target="#diadiem" data-bs-toggle="modal" href="" style="text-decoration: none;"><p style="color: white; font-size: 10px; text-decoration: none; padding-top: 15px;">Xem giá, khuyến mãi tại <br> <span style="font-size: 10px;" id="Diemmuadt">Hồ Chí Minh...</span><i class="fas fa-sort-down"></i> </p></a></li>
                <li> <a href="# "><input type="text" id="searchtext" class="search input" placeholder="Tìm kiếm...." style="padding-left: 6px;"> <i class="fas fa-search"></a></i></li>
                <li><button onclick="moGioHang();"><i class="fas fa-shopping-cart"></i> Giỏ hàng</button></li>
                <li class="khungnav"><a href="../html/index.html" class="textnone">Trang Chủ</a></li>
                <li class="khungnav"><a href="../html/GioiThieu.html" class="textnone">Giới thiệu</a></li>
                <li class="khungnav"><a href="../html/footer-TinTuc.html" class="textnone">Tin tức</a></li>
                <li class="khungnav"><a href="../html/LienHe.html" class="textnone">Liên hệ</a></li>
                <li class="khungnav" id="loginlink" style=" width: 100px;"><a href="#" class="textnone" data-bs-toggle="modal" data-bs-target="#modallog">Đăng nhập</a></li>
                <li id="userlink" style=" width: auto;"><a href="../html/Thongtin.html" style="color: white;"><span class="fas fa-user-alt fa-1.4x" style="margin-right: 3px;"><span id="username" style="margin-left: 15px;"></span></span></a></li>
                <li class="khungnav" id="signuplink"><a href="#" class="textnone"  data-bs-toggle="modal" data-bs-target="#modalId"> Đăng ký</a></li>
                
            </ul>
        </div>
        </nav>`
    );
    let user = document.getElementById("userlink");
    if (user) {
        user.style.display = "none";
    }
    if(localStorage.getItem("loginStus") === "true"){
        changeNav();
    }
	addModal();
    dangky();
    dangnhap();
}

function navsearch(text){
    $("#searchtext").val(text);

    var enter = $.Event("keydown", { 
        keyCode: 13,
        which: 13,
        key: "Enter"
    });

    var enter2 = $.Event("keyup", { 
        keyCode: 13,
        which: 13,
        key: "Enter"
    });

    $("#searchtext").trigger(enter);
    $("#searchtext").trigger(enter2);
}
// Thêm header
function Header() {
    document.write(` 
    <div class="menu" style="margin-bottom: 10px;">
         <ul class="main-menu" style="justify-content: space-between;">
            <li>
                <a href="#" class="textmenu" onclick="navsearch('Iphone');"> iPhone <i class="fas fa-sort-down"></i></a>
                <ul class="sup-menu" style="width:151px;">
                    <li style="width: 149px;"><a href="#sec" class="liip" onclick="showCT('iPhone 15 Pro Max');">iPhone 15 Pro Max</a>       
                    </li>
                    <li style="width: 149px;"><a href="#">iPhone14 Series</a>
                        <ul class="sup-menu" style="width: 200px;">
                            <li onclick="showCT('iPhone 14 Pro Max');"><a href="#">iPhone14 Pro Max</a></li>
                            <li onclick="showCT('iPhone 14 Pro');"><a href="#">iPhone14 Pro </a></li>
                            <li onclick="showCT('iPhone 14 Plus');"><a href="#">iPhone14 Plus</a></li>
                            
                        </ul>
                    </li>
                    <li style="width: 149px;" onclick="showCT('iPhone 13 Pro Max');"><a href="#" class="liip">iPhone13 Pro Max</a></li>
                    <li style="width: 149px;" onclick="showCT('iPhone 12 Pro Max');"><a href="#" class="liip">iPhone12 Pro Max</a></li>
                    <li style="width: 149px;" onclick="showCT('iPhone 11 Pro Max');"><a href="#sec">iPhone11 Pro Max</a></li>
                </ul>
            </li>
            <li>
                <a href="#oppo" class="textmenu" onclick="navsearch('Oppo');"> OPPO <i class="fas fa-sort-down"></i></a>
                <ul class="sup-menu" style="width: 200px;">
                    <li style="width: 200px;" onclick="showCT('Oppo Reno 9');"><a href="#">Oppo Reno 9</a></li>
                    <li style="width: 149px;"><a href="#">Oppo reno 10 Series</a>
                        <ul class="sup-menu" style="width: 200px;">
                            <li onclick="showCT('Oppo Reno 10 Pro Plus');"><a href="#">Oppo Reno 10 Pro Plus</a></li>
                            <li onclick="showCT('Oppo Reno 10 Pro');"><a href="#">Oppo Reno 10 Pro</a></li>
                            <li onclick="showCT('Oppo Reno 10');"><a href="#">Oppo Reno 10</a></li>
                        </ul>
                    </li>
                    <li style="width: 200px;" onclick="showCT('Oppo Reno 8');"><a href="#">Oppo Reno 8</a></li>
                </ul>
            </li>
            <li>
                <a href="#samsung" class="textmenu" onclick="navsearch('Samsung');"> Samsung <i class="fas fa-sort-down"></i></a>
                <ul class="sup-menu" style="width: 203px;">
                    <li><a href="#" onclick="showCT('Samsung S22 Ultra');">Samsung S22 Ultra</a></li>
                    <li><a href="#" onclick="showCT('Samsung Note 20');">Samsung Note 20</a></li>
                    <li><a href="#" onclick="showCT('Samsung S10+');">Samsung S10+</a></li>
                    <li><a href="#" onclick="showCT('Samsung Note 10');">Samsung Note 10</a></li>
                </ul>
            </li>
            <li>
                <a href="#sec" class="textmenu" onclick="navsearch('Xiaomi');"> Xiaomi <i class="fas fa-sort-down"></i></a>
                <ul class="sup-menu" style="width: 200px;">
                    <li><a href="#" onclick="showCT('Xiaomi Redmi Note 11');">Xiaomi Redmi Note 11</a></li>
                    <li style="width: 250px;" onclick="showCT('Xiaomi Mi 11T');"><a href="#" style="width: 250px;">Xiaomi Mi 11T</a></li>
                    <li><a href="#" onclick="showCT('Redmi Note 11S');">Redmi Note 11S</a></li>
                </ul>
            </li>
            <li>
                <a href="#sec" class="textmenu" onclick="navsearch('Realme');"> Realme<i class="fas fa-sort-down"></i></a>
                <ul class="sup-menu" style="width: 180px;">
                    <li onclick="showCT('Realme GT 2 Pro');"><a href="#">Realme GT 2 Pro</a></li>
                    <li onclick="showCT('Realme 9 Pro+');"><a href="#">Realme 9 Pro+</a></li>
                    <li onclick="showCT('Realme C35');"><a href="#">Realme C35</a></li>
                    <li onclick="showCT('Realme GT Neo 3');"><a href="#">Realme GT Neo 3</a></li>
                </ul>
            </li> 
            <li>
                <a href="#" class="textmenu" onclick="navsearch('Vivo');"> Vivo <i class="fas fa-sort-down"></i></a>
                <ul class="sup-menu" style="width: 151px;">
                    <li class="livv" style="width: 151px" onclick="showCT('Vivo X70 Pro');"><a href="#" >Vivo X70 Pro</a></li>
                    <li class="livv" style="width: 151px" onclick="showCT('Vivo X60 Pro');"><a href="#" >Vivo X60 pro</a></li>
                    <li class="livv" style="width: 151px" onclick="showCT('Vivo V23 5G');"><a href="#" >Vivo V23 5G</a></li>
                </ul>
            </li>       
         </ul>
    </div>`);
}
//Footer
function Footer() {
    document.write(`
    <footer class="footer bg-white" style="width: 100%; font-size: 20px;">
    <section class="footer-top clearfix">
        <div class="footer-col">
            <h6 class="footer-title">
                Thông tin và chính sách
            </h6>
            <ul class="footer-menu " id="menu-list">
                <li class="footer-list-link"><a class="footer-text-link" target="_blank" href="../html/footer-CSBaoHanh.html">Chính sách bảo hành</a></li>
                <li class="footer-list-link"><a class="footer-text-link" target="_blank" href="">Chính sách đổi trả</a></li>
                <li class="footer-list-link"><a class="footer-text-link" target="_blank" href="">Mua hàng trả góp Online</a></li>
                <li class="footer-list-link"><a class="footer-text-link" target="_blank" href="">Mua hàng trả góp bằng thẻ tín dụng</a></li>
                <li class="footer-list-link"><a class="footer-text-link" target="_blank" href="../html/footer-CSGiaoHang.html">Giao hàng &amp; Thanh toán</a></li>
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
                <li class="footer-list-contact"><p class="footer-text-call">Email:</p><a class="footer-text-contact" target="_blank" href="mailto: tranngochung19112004@gmail.com">tranngochung19112004@gmail.com</a></li>   
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
//Modal
function addModal(){
	document.write(`
	<!-- Modal Đăng nhập -->
    <div class="modal" id="modallog">
        <div class="modal-dialog">
            <div class="modal-content" style="background-color: rgba(0,0,0,0.8);">
                <div class="modal-header">
                    <h5 class="modal-title" style="font-size: 25px; padding-top: 5px; color: #c4b22a">
                        Đăng nhập 
                     </h5>
                     <button class="btn btn-close btn-light" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <form action="">
                        <div>
                            <span id="tb" style="color: red;font-style: italic;"></span></span>
                        </div>
                        <div class="form-group">
                            <label for="dn"> Tên đăng nhập:</label>
                            <span id="errdn" style="color: red;font-style: italic;">(*)</span>
                            <input type="text" name="" id="dn" class="form-control" placeholder="Tên đăng nhập"> 
                        </div>
                        
                        <div class="form-group">
                            <label for="mk">Mật khẩu:</label>
                        <span id="errmk" style="color: red;font-style: italic;">(*)</span>    
                        <input type="password" class="form-control" name="" id="mk" placeholder="Mật khẩu" >
                        </div>
                        <a href="#" onclick="moModalDK();" style="font-size: 20px; text-decoration: none; margin-top: 20px;">Chưa có tài khoản?</a>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" data-bs-toggle="modal" onclick="dangnhap();"  >Đăng nhập</button>
                    <button data-bs-dismiss="modal" class="btn btn-light" id="dong" onclick="dong()" >Đóng</button>
                </div>
            </div>

        </div>
    </div>
    <!-- Modal Đăng nhâp thành công -->
    <div class="modal" id="dntc">
        <div class="modal-dialog">
            <div class="modal-content"  style="background-color: rgba(0,0,0,0.8);">
                <div class="modal-header">
                    <button data-bs-dismiss="modal" class="btn btn-close btn-light" style="color: white;"></button>
                </div>
                <div class="modal-body text-white " style="text-align: center; font-weight: bold; font-size: 30px;">
                    <p style="color: white;">Đăng nhập thành công</p>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal chọn đăng ký -->

    <div
        class="modal fade"
        id="modalId"
    >
        <div class="modal-dialog" role="document">
            <div class="modal-content" style="background-color: rgba(0,0,0,0.8);" >
                <div class="modal-header">
                    <h5  id="modalTitleId" style="text-align: center;">
                        Mời Bạn Chọn!!!
                    </h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body" style="text-align: center;">
                    <div class="container-fluid">
                        <button class="btn btn-light" data-bs-target="#dangki" data-bs-toggle="modal" onclick="dongmodal()">Đăng ký Tài Khoản</button>
                        <a href="../html/hoso.html"><button class="btn btn-primary text-none">Đăng Ký Thành Viên</button></a>
                    </div>
                </div>
                <div class="modal-footer">
                    <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                    >
                        Đóng
                    </button>
                </div>
            </div>
        </div>
    </div>
    
<!-- Modal Đăng ký -->
    <div class="modal" id="dangki">
        <div class="modal-dialog">
            <div class="modal-content" style="background-color: rgba(0,0,0,0.8);" >
                <div class="modal-header">
                    <h3 style="font-size: 25px; padding-top: 5px; color: #c4b22a;">
                        Đăng ký
                    </h3>
                    <button class=" btn btn-light btn-close"  data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <form action="">
                        <div class="form-group">
                            <p id="tb" style="text-align: center; color: white; font-size: 15px;"></p>
                            <label for="user">Tên người dùng:</label>
                            <span id="err1" style="color: red;font-style: italic;"></span>
                            <input type="text" id="user"  class="form-control" placeholder="Nhập tên người dùng(gồm chữ và số)" value="Tran Ngoc Hung" >
                        </div>
                        
                        <div class="form-group">
                            <label for="sdt">Số điện thoại:</label>
                            <span id="err2" style="color: red;font-style: italic;"></span>
                            <input type="tel" id="sdt" placeholder="Số điện thoại" class="form-control" value="0393465113" >
                        </div>
                        
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <span id="err3" style="color: red;font-style: italic;"></span>
                            <input type="email" class="form-control" id="email" placeholder="Email" value="tranngochung19112004@gmail.com">
                        </div>
                        
                        <div class="form-group">
                            <label for="password"> Mật khẩu:</label>
                            <span id="err4" style="color: red;font-style: italic;"></span>
                            <input type="password" id="password" class="form-control" placeholder="Mật khẩu có ít nhất một chữ hoa, một chữ thường và một ký tự đặc biệt" value="Hung1234@" >
                        </div>
                        
                        <div class="form-group">
                            <label for="againpassword">Nhập lại mật khẩu:</label>
                            <span id="err5" style="color: red;font-style: italic;"></span>
                            <input type="password" id="againpassword" class="form-control" placeholder="Nhập lại mật khẩu" value="Hung1234@">
                        </div>
                        <div class="form-group" style="margin-left: 300px;margin-top: 10px;">
                            <input id="closemodal" type="button" class="btn btn-primary" onclick="dangky()" value="Đăng ký" data-bs-toggle="modal"></input>
                            <button data-bs-dismiss="modal" class="btn btn-light" id="dong" onclick="dong()">Đóng</button>
                        </div>
                    </form>

                </div>
                
            </div>

        </div>
    </div>

<!-- Modal Đăng ký thành công -->
    <div class="modal" id="dktc">
        <div class="modal-dialog">
            <div class="modal-content"  style="background-color: rgba(0,0,0,0.8);">
                <div class="modal-header">
                    <button data-bs-dismiss="modal" class="btn btn-close" style="color: white;"></button>
                </div>
                <div class="modal-body text-white " style="text-align: center; font-weight: bold; font-size: 30px;      ">
                    <p style="color: white;">Đăng ký thành công</p>
                </div>
            </div>
        </div>
    </div>
<!-- Modal Dịa điểm -->
    <div class="modal" id="diadiem">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header" style="background-color: rgb(47,128,237);">
                    <p style="margin-top: 5px;">Mời bạn chọn địa chỉ <span id="diadiemchon">...</span></p>
                    <button data-bs-dismiss="modal" class="btn btn-blue text-white" style="border: 1px solid lightblue;">Đóng</button>

                </div>
                <div class="modal-body text-dark">
                    <div class="modal-bodydd">
                        <div class="row ">
                            <div class="col-5" >
                                <p><a href="#" id="q1" class="loc">Quận 1</a></p>
                            </div>
                            <div class="col-5" >
                                <p><a href="#" id="q3" class="loc">Quận 3</a></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-5" id="q4">
                                <p><a href="#" class="loc">Quận 4</a></p>
                            </div>
                            <div class="col-5" id="q5">
                                <p><a href="#" class="loc">Quận 5</a></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-5" id="q6">
                                <p><a href="#" class="loc">Quận 6</a></p>
                            </div>
                            <div class="col-5" id="q7">
                                <p><a href="#" class="loc">Quận 7</a></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-5" id="q8">
                                <p><a href="#" class="loc">Quận 8</a></p>
                            </div>
                            <div class="col-5" id="q10">
                                <p><a href="#" class="loc">Quận 10</a></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-5" id="q11">
                                <p><a href="#" class="loc">Quận 11</a></p>
                            </div>
                            <div class="col-5" id="q12">
                                <p><a href="#" class="loc">Quận 12</a></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-5" id="qbt">
                                <p><a href="#" class="loc">Quận Bình Tân</a></p>
                            </div>
                            <div class="col-5" id="abth">
                                <p><a href="#" class="loc">Quận Bình Thạnh</a></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-5" id="qgv">
                                <p><a href="#" class="loc">Quận Gò Vấp</a></p>
                            </div>
                            <div class="col-5" id="qpn">
                                <p><a href="#" class="loc">Quận Phú Nhuận</a></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-5" id="qtb">
                                <p><a href="#" class="loc">Quận Tân Bình</a></p>
                            </div>
                            <div class="col-5" id="qtp">
                                <p><a href="#" class="loc">Quận Tân Phú</a></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-5" id="qbc">
                                <p><a href="#" class="loc">Huyện Bình Chánh</a></p>
                            </div>
                            <div class="col-5" id="hcg">
                                <p><a href="#" class="loc">Huyện Cần Giờ</a></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-5" id="hcc">
                                <p><a href="#" class="loc">Huyện Củ Chi</a></p>
                            </div>
                            <div class="col-5" id="hhm">
                                <p><a href="#" class="loc">Huyện Hóc Môn</a> </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-5" id="hnb">
                                <p><a href="#" class="loc">Huyện Nhà Bè</a></p>
                            </div>
                            <div class="col-5" >
                                <p><a href="#" id="tptd" class="loc">TP.Thủ Đức</a></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
	`);
}

function moModalDK(){
    $("#modallog").modal('hide');
    $("#modalId").modal('show');
}

var taikhoan = {
    username: "admin1", 
    password: "Admin1@"
  };

//Tạo tài khoản mặc định
document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("userlogin") === null) {
        localStorage.setItem("userlogin", JSON.stringify(taikhoan));
    }
});

//Flag trạng thái đăng nhập, chưa có thì tạo :(
document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("loginStus") === null) {
        localStorage.setItem("loginStus", "false");
    }
});

 function dangky(){
        let dem=0;
        let username = "";
        let pass = "";
        let user = document.getElementById("user").value;
        let regexuser = /^[a-zA-Z0-9' ]{6,15}$/;
        
        if(!regexuser.test(user) || user.trim() == ""){
            document.getElementById("err1").innerHTML = "* Bắt buộc, gồm (6-15 kí tự) chữ và số";
            dem++;
        } else {
            document.getElementById("err1").innerHTML = "(*)";
            username = user;
            
        }
        
    
        let sdt = document.getElementById("sdt").value;
        let regexsdt = /^[0][3-9]{1}[0-9]{8}$/;
        if(!regexsdt.test(sdt) || sdt.trim() == "")
        {
            document.getElementById("err2").innerHTML = "* Bắt đầu từ 0(3-9), gồm 10 kí tự số";
            dem++
        }else{
            document.getElementById("err2").innerHTML ="(*)";
            
        }
    
        let email = document.getElementById("email").value;
        let regexMail = /^[A-Za-z0-9]{1,}\@(gmail|email|yahoo)\.com$/;
        if ( !regexMail.test(email) || email.trim() == "") {
            document.getElementById("err3").innerHTML = "* Không đúng định dạng";
            dem++
        }else{
            document.getElementById("err3").innerHTML = "(*)";
            
        }
            
    
        let matkhau = document.getElementById("password").value;
        let regexmatkhau = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W]).{8,}/;
        if (matkhau.trim() == "" || !regexmatkhau.test(matkhau)) {
           document.getElementById("err4").innerHTML = "* Mật khẩu gồm chữ hoa, chữ thường và ký tự đặc biệt";
           dem++
        }else{
            document.getElementById("err4").innerHTML ="(*)";
            
        }
        
    
        let matkhauagain = document.getElementById("againpassword").value;
        if( matkhauagain.trim() == ""){
            document.getElementById("err5").innerHTML = "* Vui lòng nhập lại mật khẩu";
            dem++
        }
        else
            if (matkhauagain != matkhau) {
            document.getElementById("err5").innerHTML = "* Không trùng khớp";
            dem++
            return false;
        }else{
            pass = matkhau;
            document.getElementById("err5").innerHTML ="(*)";
            
        }
        setTimeout(function() {
            $('#dktc').modal('hide');
                }, 600);
        
        if(dem==0){
            // alert('ĐĂNG KÝ THÀNH CÔNG !');
        
            $('#dangki').modal('hide');
            $('#dktc').modal('show');
            document.getElementById("user").value="";
            document.getElementById("sdt").value="";
            document.getElementById("password").value="";
            document.getElementById("email").value="";
            document.getElementById("againpassword").value="";
            $('#dktc').modal('show');
            setTimeout(function() {
                $('#dktc').modal('hide');
                    }, 1000);
            $('#modalId').modal('hide');
            taikhoan.username = username;
            taikhoan.password = pass;
            localStorage.setItem("userlogin", JSON.stringify(taikhoan));
            localStorage.setItem("loginStus", "true");
            changeNav();
        } 
       
}

function changeNav(){
    let user = document.getElementById("userlink");
    let login = document.getElementById("loginlink");
    let signup = document.getElementById("signuplink");
    if (user) {
        user.style.display = "inline-block";
    }
    if (login) {
        login.style.display = "none";
    }
    if (signup) {
        signup.style.display = "none";
    }
    $("#username").html("Chào " + JSON.parse(localStorage.getItem("userlogin")).username + "!");
}
function dangnhap(){
    let dem=0;
    let ten = document.getElementById("dn").value
    if(ten != JSON.parse(localStorage.getItem("userlogin")).username || ten.trim()=="")
    {
        dem++
    }

    let pass =document.getElementById("mk").value
    if(pass != JSON.parse(localStorage.getItem("userlogin")).password || pass.trim()=="")
    {
        dem++
    }

    if(dem==0 ){
        // alert("ĐĂNG NHẬP THÀNH CÔNG")
        $('#modallog').modal('hide');
        document.getElementById("dn").value="";
        document.getElementById("mk").value="";
        localStorage.setItem("loginStus", "true");
        $('#dktc').modal('show');
            setTimeout(function() {
                $('#dktc').modal('hide');
                    }, 600);
        changeNav()
    }else{
        document.getElementById("tb").innerHTML= "Thông tin đăng nhập chưa đúng"
        document.getElementById("mk").value="";
    }
}

function dong(){
        document.getElementById("dn").value="";
        document.getElementById("mk").value="";
}

//Chặn chưa đăng nhập mà mở giỏ hàng
function moGioHang(){
    if(localStorage.getItem("loginStus") === "false"){
        alert("Bạn cần đăng nhập để thực hiện chức năng này!");
        $("#modallog").modal('show');
    }else{
        window.open('../html/giohang.html');
    }
}
//Show chi tiết sản phẩm-->
function showCT(st) {
    $.getJSON("../data/data.js", function(data) {
        var product = data.find(function(item) {
            return item["Tên sản phẩm"].toLowerCase() === st.toLowerCase();
        });
        if(product) {
            localStorage.setItem("product", JSON.stringify(product));
            window.location.href = "../html/chitietsanpham.html";
        } 
    });
}