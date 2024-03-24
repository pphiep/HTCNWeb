var tenDN
var pass 
var dem

function dangky(){
    let user = document.getElementById("username").value
    let regexuser = /^[A_Za-z0-9]{6,15}$/
    let erruse =document.getElementById("erruser")
    if(!regexuser.test(user))
    {
        erruse.innerHTML = "* Bắt buộc, gồm (6-15 kí tự) chữ và số"
        return false
    }
    erruse.innerHTML ="(*)"
    tenDN = user

    let sdt = document.getElementById("sdt").value
    let regexsdt = /^[0][3-9]{1}[0-9]{8}$/
    let errsdt =document.getElementById("errsdt")
    if(sdt.trim() == "" || !regexsdt.test(sdt))
    {
            errsdt.innerHTML = "* Bắt đầu từ 0(3-9), gồm 10 kí tự số"
            return false
    }
    errsdt.innerHTML ="(*)"

    let email = document.getElementById("email").value;
        let regexMail = /^[A-Za-z0-9]{1,}\@gmail\.com$/;
        let errmail = document.getElementById("erremail");
        if ( !regexMail.test(email)) {
          erremail.innerHTML = "(không đúng định dạng)";
          return false;
        }
        errmail.innerHTML = "(*)";

     let matkhau = document.getElementById("password").value
        let regexmatkhau = /^[A_Za-z0-9]{6,15}$/
        let errorMK = document.getElementById("errpassword")
        if (matkhau.trim() == "" || !regexmatkhau.test(matkhau)) {
            errorMK.innerHTML = "* Gồm chữ và số"
            return false
        }
    errorMK.innerHTML ="(*)"

    let matkhauagain = document.getElementById("againpassword").value
        let errorMKa = document.getElementById("errpassagain")
        if (matkhauagain != matkhau) {
            errorMKa.innerHTML = "* Không trùng khớp"
            return false
        }
        pass=matkhau
        errorMKa.innerHTML ="(*)"
    
        if (user && sdt && email && matkhau && matkhauagain) 
            alert('                                                                                 ĐĂNG KÝ THÀNH CÔNG !')
       
}




