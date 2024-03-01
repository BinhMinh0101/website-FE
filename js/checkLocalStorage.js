function checkLocalStorageProduct()
{
  let productStorage = localStorage.getItem("product");

  //Kiểm tra local storage nếu chưa có tạo mới
  if(productStorage === null)
      localStorage.setItem("product", JSON.stringify(productArray));
  
  productArray = JSON.parse(productStorage);
}

function checkLocalStorageUserAndUserInfo()
{
  let userStorage = localStorage.getItem("taiKhoan");
  let userInfouserStorage = localStorage.getItem("thongTinNguoiDung");

  //Kiểm tra local storage nếu chưa có tạo mới
  if(userStorage === null)
      localStorage.setItem("taiKhoan", JSON.stringify(taiKhoan));

  if(userInfouserStorage === null)
      localStorage.setItem("thongTinNguoiDung", JSON.stringify(thongTinNguoiDung));
  
  taiKhoan = JSON.parse(userStorage);
  thongTinNguoiDung = JSON.parse(userInfouserStorage);
}

function checkLocalStorageLichSuMuaHang()
{
  // let lsmh_storage = localStorage.getItem("lichSuMuaHang");

  // if(lsmh_storage === null)
  //   localStorage.setItem()
}