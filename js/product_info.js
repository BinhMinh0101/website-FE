//Hàm dùng để tăng giảm số lượng mặt hàng cần mua, dk => 1 và <= 99
function btn_change_amount(option) {
  let amount = document
    .querySelector("#page-product-briefing-left-amount")
    .querySelector(".amount-product");
  let i = parseInt(amount.dataset.value, 10);
  if (option == "-" && i > 1) {
    i--;
    amount.dataset.value = i;
    amount.innerHTML = i;
  } else if (option == "+" && i < 99) {
    i++;
    amount.dataset.value = i;
    amount.innerHTML = i;
  }
}

//dang nhap dang xuat
// $("#btnLogin").click(function () {
//   $("#login").css("display", "block");
// });
// $("#btnNew").click(function () {
//   $("#dangki").css("display", "block");
// });

$("#btnNew").click(reDangKi);
$("#btnLogin").click(reDangNhap);

$(".btnCloseModal").click(function () {
  $(".modal").css("display", "none");
});

// function reDangKi() {
//   $("#login").css("display", "none");
//   $("#dangki").css("display", "block");
// }
// function reDangNhap() {
//   $("#login").css("display", "block");
//   $("#dangki").css("display", "none");
// }

function reDangNhap() {
  let str =
    '<div class="modal-content">' +
    '  <div class="center">' +
    '      <div class="modal-header">' +
    '          <span class="btnCloseModal">&times;</span>' +
    "          " +
    "      </div> " +
    "      <h1>Đăng Nhập</h1>" +
    '      <form  action="" >' +
    '          <div class="txt_field">' +
    '              <input type="text"  id="tenDangNhap"  required>' +
    "              <label >Tên Đăng Nhập</label>" +
    '              <div class="error-text"></div>' +
    "          </div>" +
    '          <div class="txt_field">' +
    '              <input type="password" id="matKhau" required>' +
    "              <label >Mật Khẩu</label>" +
    '              <div class="error-text"></div>' +
    "          </div>" +
    '          <input id="input-fromDangNhap" type="button" value="Đăng Nhập" onclick="dangNhap()">' +
    '          <div class="signup_link">' +
    '              Không có tài khoản? <a href="#" onclick="reDangKi()">Đăng Kí</a>' +
    "          </div>" +
    "      </form>" +
    "      " +
    "  </div>" +
    "</div>";
    document.querySelector("#login").innerHTML = str;
    $("#login").css("display", "block");

    $(".btnCloseModal").click(function () {
      $(".modal").css("display", "none");
    });
}

function reDangKi() {
  let str =
    '<div class="modal-content">' +
    '  <div class="center " >' +
    '      <div class="modal-header">' +
    '          <span class="btnCloseModal">&times;</span>' +
    "      </div>" +
    "      <h1>Đăng Kí</h1>" +
    '      <form  action="" >' +
    '         <div id="formDangKi">' +
    '          <div class="txt_field" >' +
    '            <input type="text" required id="dangKiTenDangNhap">' +
    "            <label >Tên Đăng Nhập</label>" +
    '            <div class="error-text"></div>' +
    "          </div>" +
    "          " +
    '          <div class="txt_field">' +
    '            <input type="text" required id="tenNguoiDung">' +
    "            <label >Tên Người Dùng</label>" +
    '            <div class="error-text"></div>' +
    "           </div>" +
    '          <div class="txt_field">' +
    '            <input type="password" required id="nhapMatKhau" value="" >' +
    "            <label >Mật Khẩu</label>" +
    '            <div class="error-text"></div>' +
    "          </div>" +
    '          <div class="txt_field">' +
    '            <input type="password" required id="nhapLaiMatKhau">' +
    "            <label >Nhập Lại Mật Khẩu</label>" +
    '            <div class="error-text"></div>' +
    "          </div>" +
    '          <div class="txt_field">' +
    '            <input type="text" required id="diaChi">' +
    "            <label >Địa Chỉ</label>" +
    '            <div class="error-text"></div>' +
    "          </div>" +
    '          <div class="txt_field">' +
    '            <input type="text" required id="email">' +
    '            <label id="txt_field_email">Email</label>' +
    '            <div class="error-text"></div>' +
    "          </div>" +
    '        <div class="txt_field">' +
    '            <input type="tel" required id="soDienThoai" >' +
    "            <label >Số Điện Thoại</label>" +
    '            <div class="error-text"></div>' +
    "        </div>" +
    "         </div>" +
    '          <input id="input-fromDangKi" type="button" value="Đăng Kí" onclick="dangKi()">' +
    '          <div class="signup_link">' +
    '              Đã Có Tài Khoản ? <a href="#" onclick="reDangNhap()">Đăng Nhập</a>' +
    "          </div>" +
    "      </form>" +
    "      " +
    "  </div>" +
    "</div>";
  document.querySelector("#dangki").innerHTML = str;
  $("#dangki").css("display", "block");

  $(".btnCloseModal").click(function () {
    $(".modal").css("display", "none");
  });
}

function User(tenDangNhap, matkhau, tenNguoiDung, diaChi, email, soDienThoai) {
  this.tenDangNhap = tenDangNhap;
  this.matKhau = matkhau;
  this.tenNguoiDung = tenNguoiDung;
  this.diaChi = diaChi;
  this.email = email;
  this.soDienThoai = soDienThoai;
}

var taiKhoan = [
  {
    tenDangNhap: "admin",
    matKhau: "admin",
  },
  {
    tenDangNhap: "ducsinh",
    matKhau: "12345678",
  },
];
var thongTinNguoiDung = [
  {
    tenDangNhap: "ducsinh",
    tenNguoiDung: "Nguyễn Đức Sinh",
    diaChi: "abc",
    email: "sinhlata@gmail.com",
    soDienThoai: "0867640348",
    img: "Picture/qiqi.png",
  },
  {
    tenDangNhap: "admin",
    tenNguoiDung: "Nguyễn Đức Sinh",
    diaChi: "abcsd",
    email: "asdwer@gmail.com",
    soDienThoai: "0863453346",
    img: "Picture/qiqi.png",
  },
];

function dangNhap() {
  if(localStorage.getItem("taiKhoan") === null)
    localStorage.setItem("thongTinNguoiDung", JSON.stringify(thongTinNguoiDung));
  if(localStorage.getItem("thongTinNguoiDung") == null)
    localStorage.setItem("taiKhoan", JSON.stringify(taiKhoan));
  var inpTenDangNhap = document.getElementById("tenDangNhap").value;
  var inpTenMatKhau = document.getElementById("matKhau").value;
  let storage2 = localStorage.getItem("taiKhoan");
  if (storage2) {
    taiKhoan = JSON.parse(storage2);
  }
  let storage1 = localStorage.getItem("thongTinNguoiDung");
  if (storage1) {
    thongTinNguoiDung = JSON.parse(storage1);
  }
  var e = 1;
  {
    for (var i = 0; i < taiKhoan.length; i++) {
      // if (false || inpTenDangNhap == "admin" && inpTenMatKhau == "admin") {
      //   e == 2;
      //   localStorage.setItem(
      //     "thongTinNguoiDung",
      //     JSON.stringify(thongTinNguoiDung)
      //   );
      //   localStorage.setItem("taiKhoan", JSON.stringify(taiKhoan));
      //   return location.reload();
      // } else {
        if (
          taiKhoan[i].tenDangNhap == inpTenDangNhap &&
          taiKhoan[i].matKhau == inpTenMatKhau
        ) {
          alert("Đăng Nhập Thành công");
          e == 3;
          for (var j = 0; j < thongTinNguoiDung.length; j++) {
            if (taiKhoan[i].tenDangNhap == thongTinNguoiDung[j].tenDangNhap) {
              var a = [];
              a.push(thongTinNguoiDung[j]);

              localStorage.setItem("user", JSON.stringify(a));
              localStorage.setItem(
                "thongTinNguoiDung",
                JSON.stringify(thongTinNguoiDung)
              );
              localStorage.setItem("taiKhoan", JSON.stringify(taiKhoan));
            }
          }



          return location.reload();
        }
      // }
    }
    if (e == 1) {
      document.getElementById("tenDangNhap").focus();

      document
        .querySelector("#tenDangNhap")
        .parentNode.querySelector(".error-text").innerHTML =
        "Sai Tên Đăng Nhập";
      document
        .querySelector("#matKhau")
        .parentNode.querySelector(".error-text").innerHTML = "Sai Mật Khẩu";
    } else {
      document
        .querySelector("#tenDangNhap")
        .parentNode.querySelector(".error-text").innerHTML = "";
      document
        .querySelector("#matKhau")
        .parentNode.querySelector(".error-text").innerHTML = "";
    }
  }
}

function isEmail(email) {
  var isValid = false;
  var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (regex.test(email)) {
    isValid = true;
  }
  return isValid;
}

function isVietnamesePhoneNumber(number) {
  return /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(number);
}

function checkDangKi() {
  {
    let check = true;
    if (document.getElementById("dangKiTenDangNhap").value.length < 5) {
      document.getElementById("dangKiTenDangNhap").focus();

      document
        .querySelector("#dangKiTenDangNhap")
        .parentNode.querySelector(".error-text").innerHTML =
        "Tên Đăng Nhập Phải Lớn Hơn 5 kí tự";

      check = false;
    } else
      document
        .querySelector("#dangKiTenDangNhap")
        .parentNode.querySelector(".error-text").innerHTML = "";

    if (document.getElementById("tenNguoiDung").value.length < 4) {
      document.getElementById("tenNguoiDung").focus();

      document
        .querySelector("#tenNguoiDung")
        .parentNode.querySelector(".error-text").innerHTML =
        "Tên Người Dùng Phải Lớn Hơn 4 kí tự";

      check = false;
    } else {
      document
        .querySelector("#tenNguoiDung")
        .parentNode.querySelector(".error-text").innerHTML = "";
    }

    if (document.getElementById("nhapMatKhau").value.length < 7) {
      document.getElementById("nhapMatKhau").focus();

      document
        .querySelector("#nhapMatKhau")
        .parentNode.querySelector(".error-text").innerHTML =
        "Mật Khẩu Phải Lớn Hơn 7 Kí tự";

      check = false;
    } else {
      document
        .querySelector("#nhapMatKhau")
        .parentNode.querySelector(".error-text").innerHTML = "";
    }
    if (
      document.getElementById("nhapLaiMatKhau").value !=
      document.getElementById("nhapMatKhau").value
    ) {
      document.getElementById("nhapLaiMatKhau").focus();

      document
        .querySelector("#nhapLaiMatKhau")
        .parentNode.querySelector(".error-text").innerHTML =
        "Nhập Lại Mật Khẩu Sai";

      check = false;
    } else {
      document
        .querySelector("#nhapLaiMatKhau")
        .parentNode.querySelector(".error-text").innerHTML = "";
    }

    const inpEmail = document.getElementById("email");
    if (!isEmail(inpEmail.value)) {
      document.getElementById("email").focus();

      document
        .querySelector("#email")
        .parentNode.querySelector(".error-text").innerHTML =
        "Email sai định dạng";

      check = false;
    } else {
      document
        .querySelector("#email")
        .parentNode.querySelector(".error-text").innerHTML = "";
    }

    const inpSoDienThoai = document.getElementById("soDienThoai");
    if (!isVietnamesePhoneNumber(inpSoDienThoai.value)) {
      document.getElementById("soDienThoai").focus();

      document
        .querySelector("#soDienThoai")
        .parentNode.querySelector(".error-text").innerHTML =
        "Sai số điện thoại";

      check = false;
    } else {
      document
        .querySelector("#soDienThoai")
        .parentNode.querySelector(".error-text").innerHTML = "";
    }

    return check;
  }
}

function dangKi() {
  if (checkDangKi() == true) {
    let storage = localStorage.getItem("taiKhoan");
    if (storage) {
      taiKhoan = JSON.parse(storage);
    }
    let storage1 = localStorage.getItem("thongTinNguoiDung");
    if (storage1) {
      thongTinNguoiDung = JSON.parse(storage1);
    }
    thongTinNguoiDung.push({
      tenDangNhap: document.getElementById("dangKiTenDangNhap").value,
      tenNguoiDung: document.getElementById("tenNguoiDung").value,
      diaChi: document.getElementById("diaChi").value,
      email: document.getElementById("email").value,
      soDienThoai: document.getElementById("soDienThoai").value,
      img: "/Picture/qiqi.png",
    });
    taiKhoan.push({
      tenDangNhap: document.getElementById("dangKiTenDangNhap").value,
      matKhau: document.getElementById("nhapMatKhau").value,
    });
    localStorage.setItem(
      "thongTinNguoiDung",
      JSON.stringify(thongTinNguoiDung)
    );
    localStorage.setItem("taiKhoan", JSON.stringify(taiKhoan));
    $("#login").css("display", "block");
    $("#dangki").css("display", "none");
  }
}
$("#btnXuat").click(function () {
  localStorage.removeItem("user");
  $("#index-user").css("display", "none");
  $("#index-none").css("display", "block");
  location.reload();
});
{
  if (localStorage.getItem("user") != null) {
    $("#index-user").css("display", "block");
    $("#index-none").css("display", "none");
  } else {
    $("#index-user").css("display", "none");
    $("#index-none").css("display", "block");
  }
}
// {
//   var hienThiTenNguoiDung = localStorage.getItem("user");
//   document.getElementById("tenUser").innerText = hienThiTenNguoiDung[0].tenNguoiDung;
// }

//shop
let cartShop = [];
var iteam;
function addToCart(id) {
  if (localStorage.getItem("user") != null) {
    alert("Thêm Vào Giỏ Hàng Thành Công");
    let storage = localStorage.getItem("cartShop");
    if (storage) {
      cartShop = JSON.parse(storage);
    }

    let amountAddToCart = document.querySelector("#page-product-briefing-left-amount").querySelector(".amount-product").dataset.value;

    var allItem = productArray;
    for (var i = 0; i < allItem.length; i++) {
      var x = Number(allItem[i].id);
      if (id == x) {
        iteam = allItem[i];
      }
    }
    if (cartShop.length < 1) {
      cartShop.push({ iteam, quantity: Number(amountAddToCart) });
    } else {
      var c = 1;
      for (var i = 0; i < cartShop.length; i++) {
        if (id == cartShop[i].iteam.id) {
          c = 2;
          var quantity = Number(cartShop[i].quantity) + Number(amountAddToCart)
          cartShop[i].quantity = quantity;
        }
      }
      if (c != 2) cartShop.push({ iteam, quantity: 1 });
    }

    localStorage.setItem("cartShop", JSON.stringify(cartShop));
    tinhTongTien();
    showCart();
  } else {
    alert("Đăng Nhập Để Mua Hàng");
    $("#login").css("display", "block");
    reDangNhap();
  }

}

function xoaCart(id) {
  let storage = localStorage.getItem("cartShop");
  if (storage) {
    cartShop = JSON.parse(storage);
  }
  if (cartShop.length < 1) {
    cartShop.shift();
  } else
    for (var i = 0; i < cartShop.length; i++) {
      var x = Number(cartShop[i].iteam.id);
      if (id == x) {
        cartShop.splice(i, 1);
        alert("xoa ? ");
      }
    }
  localStorage.setItem("cartShop", JSON.stringify(cartShop));
  showCart();
  tinhTongTien();
}

//mở shop
const showCart = () => {
  let storage = localStorage.getItem("cartShop");
  if (storage) {
    cartShop = JSON.parse(storage);
  }
  if (cartShop.length >= 1) {
    let cartbody = document.getElementById("hienThiCart");
    cartbody.innerHTML =
      "<tr>" +
      "<th >" +
      "Sản Phẩm" +
      "</th>" +
      "<th >" +
      "Giá" +
      "</th>" +
      "<th >" +
      "SL" +
      "</th>" +
      "<th >" +
      "chọn" +
      "</th>" +
      "</tr>";

    cartShop.map((item) => {
      cartbody.innerHTML +=
        "<tr>" +
        '<td class="cart1">' +
        "<img  src=" +
        item.iteam.img +
        ' alt="">' +
        item.iteam.name +
        "</td>" +
        "<td>" +
        "<p>" +
        "<span>" +
        addCommaToPrice(item.iteam.price) +
        "</span>" +
        "</p>" +
        "</td>" +
        '<td class="cart2">' +
        // '<input id="thayDoiSoLuong" onclick="thayDoiSoLuong1(' +
        // Number(item.iteam.id) +
        // ')"  type="text" value="' +
        item.quantity +
        // '" min="1">' +
        "</td>" +
        "<td>" +
        '<button class="cart3" onclick="xoaCart(' +
        Number(item.iteam.id) +
        ')">' +
        "Xóa" +
        "</button>" +
        "</td>" +
        "</tr>";
    });
  } else {
    let cartbody = document.getElementById("hienThiCart");
    cartbody.innerHTML =
      '<div id="noCartSp">' +
      '<img id="hinhNoCart"  src="https://www.tnc.com.vn/uploads/weblink/header-icon-cart.png" alt="">' +
      "</div>";
  }
  tinhTongTien();
};
function tinhTongTien() {
  var S = 0;
  let storage = localStorage.getItem("cartShop");
  if (storage) {
    cartShop = JSON.parse(storage);
  }
  for (var i = 0; i < cartShop.length; i++) {
    var a = cartShop[i].iteam.price;
    let x = parseInt(a, 10);
    // var b = a.substring(3);
    // S += (x * 1000 + parseInt(b, 10)) * cartShop[i].quantity;
    S += x * parseInt(cartShop[i].quantity, 10);
  }
  S = addCommaToPrice(S);
  document.getElementById("showTongTien").innerText = S + "₫";
  return S;
}
function tinhTongTien1() {
  var S = 0;
  let storage = localStorage.getItem("lichSuMuaHang");
  if (storage) {
    donHangDaDat = JSON.parse(storage);
  }

  let user = JSON.parse(localStorage.getItem("user"))[0];

  for (var i = 0; i < donHangDaDat.length; i++) {
    if(donHangDaDat[i].nguoiDatHang.tenDangNhap == user.tenDangNhap)
    {
      var a = donHangDaDat[i].c.iteam.price;
      let x = parseInt(a, 10);
      // var b = a.substring(3);
      // S += (x * 1000 + parseInt(b, 10)) * donHangDaDat[i].c.quantity;
      S += x * parseInt(donHangDaDat[i].c.quantity, 10);
    }
  }
  S = addCommaToPrice(S);
  return S;
}
function moCart() {
  if (localStorage.getItem("user") != null) {
    showCart();
    $("#gioHang").css("display", "block");
  } else {
    //alert("Đăng Nhập Để Xem Giỏ Hàng Của Bạn");
    $("#login").css("display", "block");
    reDangNhap();
  }
}
const addCommas = (value) => {
  const stringFormat = `${value}`;
  const x = stringFormat.split(".");
  let x1 = x[0];
  const x2 = x.length > 1 ? `.${x[1]}` : "";
  const regex = /(\d+)(\d{3})/;
  while (regex.test(x1)) {
    x1 = x1.replace(regex, "$1,$2");
  }
  return x1 + x2;
};
function thayDoiSoLuong1(id) {
  // let storage = localStorage.getItem("cartShop");
  // if (storage) {
  //   cartShop = JSON.parse(storage);
  // }
  // for (var i = 0; i < cartShop.length; i++) {
  //   var x = Number(cartShop[i].iteam.id);
  //   if (id == x) {
  //     cartShop[i].quantity = document.getElementById("thayDoiSoLuong").value;
  //   }
  // }
  // localStorage.setItem("cartShop", JSON.stringify(cartShop));
  // showCart();
}

function showThongTinKhachHang1() {
  let storage = localStorage.getItem("thongTinNguoiDung");
  if (storage) {
    thongTinNguoiDung = JSON.parse(storage);
  }

  

  let thongTinKhachHang = document.getElementById("showThongTinKhachHang");
  for (var i = 0; i < thongTinNguoiDung.length; i++) {
    if (JSON.parse(localStorage.getItem("user"))[0].tenNguoiDung == thongTinNguoiDung[i].tenNguoiDung) {
      thongTinKhachHang.innerHTML =
        '<div class="txt_field" >' +
        '<input type="text" value="' +
        thongTinNguoiDung[i].tenNguoiDung +
        '" id="tenMuaHang" required>' +
        "<label >Họ Và Tên</label>" +
        "</div>" +
        '<div class="txt_field">' +
        '<input type="text" value="' +
        thongTinNguoiDung[i].diaChi +
        '" id="diaChiMuaHang" required>' +
        "<label >Địa Chỉ</label>" +
        "</div>" +
        '<div class="txt_field">' +
        '<input type="tel" value="' +
        thongTinNguoiDung[i].soDienThoai +
        '" id="soDienThoaiMuaHang" required >' +
        " <label >Số Điện Thoại</label>" +
        "</div>" +
        '<div class="txt_field">' +
        '<input type="text" value="' +
        thongTinNguoiDung[i].email +
        '" id="emailMuaHang" required >' +
        "<label >Email</label>";
    }
  }
}

function checkThongTinDonHang() {
  if (document.getElementById("tenMuaHang").value.length < 4) {
    alert("Tên Mua Hàng Phải Lớn Hơn 4 kí tự");
    document.getElementById("diachi").focus();
    return false;
  }
  if (document.getElementById("diaChiMuaHang").value.length == 0) {
    alert("Địa Chỉ Không Được Rỗng");
    document.getElementById("diaChiMuaHang").focus();
    return false;
  }
  if (!isEmail(document.getElementById("emailMuaHang").value)) {
    alert("Email sai định dạng");
    document.getElementById("email").focus();
    return false;
  }
  if (
    !isVietnamesePhoneNumber(
      document.getElementById("soDienThoaiMuaHang").value
    )
  ) {
    alert("sai số điện thoại");
    document.getElementById("soDienThoai").focus();
    return false;
  }
  return true;
}
function datHang() {
  if (tinhTongTien() != 0) {
    showThongTinKhachHang1();

    $("#hienThiDatHang").css("display", "block");
    $("#gioHang").css("display", "none");
  } else {
    alert("Chưa có sản phẩm nào để đặt hàng");
  }
}

function getDonHangID()
{
    let size = donHangDaDat.length + 1;
    let n = size.toString();
    let number_zeo = 4 - n.length;
    for(let i = 0; i < number_zeo; i++)
        n = '0' + n;
    return n;
}

var donHangDaDat = [];
function muaHang() {
  if (checkThongTinDonHang() == true) {
    alert("Gửi Đơn Hàng Thành Công");
    $("#hienThiDatHang").css("display", "none");
    let storage = localStorage.getItem("cartShop");
    if (storage) {
      donHangDaDat1 = JSON.parse(storage);
    }
    let storage1 = localStorage.getItem("lichSuMuaHang");
    if (storage1) {
      donHangDaDat = JSON.parse(storage1);
    }

    let user = JSON.parse(localStorage.getItem("user"))[0];

    for (var i = 0; i < donHangDaDat1.length; i++) {
      var c = donHangDaDat1[i];
      var today = new Date();

      donHangDaDat.push({
        c,
        ngayDatHang: today,
        tinhTrangDonHang: "Chưa Xử Lí",
        nguoiDatHang: user,
        maDonHang: getDonHangID()
      });
    }

    localStorage.setItem("lichSuMuaHang", JSON.stringify(donHangDaDat));
    localStorage.removeItem("cartShop");
  }
}
function lichSuDonHang() {
  let lichSuCart = document.getElementById("lichSuDonHang1");
  lichSuCart.innerHTML =
    "<tr>" +
    "<th >" +
    "Mã đơn hàng" +
    "</th>" +
    "<th >" +
    "Ngày Đặt Hàng" +
    "</th>" +
    "<th >" +
    "Sản Phẩm" +
    "</th>" +
    "<th >" +
    "Giá" +
    "</th>" +
    "<th >" +
    " SL " +
    "</th>" +
    "<th >" +
    "Tổng tiền" +
    "</th>" +
    "<th >" +
    "Tình Trạng Đơn Hàng" +
    "</th>" +
    "</tr>";
  let storage = localStorage.getItem("lichSuMuaHang");
  if (storage) {
    donHangDaDat = JSON.parse(storage);
  }

  let user = JSON.parse(localStorage.getItem("user"))[0];
  
  donHangDaDat.map((item) => {
    if(user.tenDangNhap == item.nguoiDatHang.tenDangNhap)
    {
      let classChecked = "waiting-check";
      if(item.tinhTrangDonHang == "Đã xử lý")
        classChecked = "checked"

      var string = item.ngayDatHang;
      today1 = string.slice(5, 10);
      lichSuCart.innerHTML +=
        "<tr>" +
        "<td >" +
        "" +
        item.maDonHang +
        "" +
        "</td>" +
        "<td >" +
        "" +
        today1 +
        "" +
        "</td>" +
        '<td class="cart1">' +
        "<img  src=" +
        item.c.iteam.img +
        ' alt="">' +
        item.c.iteam.name +
        "</td>" +
        "<td>" +
        "<p>" +
        "<span>" +
        addCommaToPrice(item.c.iteam.price) +
        "</span>" +
        "</p>" +
        "</td>" +
        '<td class="cart2">' +
        // '<input id="thayDoiSoLuong"   type="" value="' +
        item.c.quantity +
        // '">' +
        "</td>" +
        '<td>' +
        addCommaToPrice(item.c.quantity * item.c.iteam.price) +
        "</td>" +
        '<td class="xuLiDonHang ' + classChecked + '">' +
        // '<input  type="" value="' +
        item.tinhTrangDonHang +
        // '">' +
        "</td>" +
        "</tr>";
    }

  });
  tinhTongTien();
}
function soLuongDonHang() {
  let soLuongDonHang2 = document.getElementById("soLuongDonHang1");
  soLuongDonHang2.innerHTML = "";
  let storage = localStorage.getItem("lichSuMuaHang");
  if (storage) {
    donHangDaDat = JSON.parse(storage);
  }
  soLuongDonHang2.innerHTML +=
    '<form action="">' +
    '<div id="tableCart" >' +
    '<table id="lichSuDonHang1">' +
    "</table>" +
    "</div>" +
    '<div class="tongTien">' +
    "<div>Tổng Tiền</div>" +
    '<div id="showTongTien1"></div>' +
    "</div>" +
    "</form>";
}
function xemLichSuDonHang() {
  if (localStorage.getItem("lichSuMuaHang") != null) {
    soLuongDonHang();
    lichSuDonHang();
    document.getElementById("showTongTien1").innerText =
      tinhTongTien1();
    $("#donHang").css("display", "block");
  } else alert("Bạn Chưa Có Đơn Hàng Nào");
}
