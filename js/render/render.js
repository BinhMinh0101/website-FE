function renderPage() {
  let url = window.location.href;
  let str = url.split("?");

  console.log(str);

  switch(str[1])
  {
    case "home":
      openHomePage();
      break;
    case "introduce":
      openIntroducePage();
      break;
    case "admin":
      openAdminPage();
      break;
    case "product":
      openSanPhamPage();
      break;
    case "product-info":
      render_product_info_page();
      break;
    case "search":
      render_search_page();
      break;
    default:
      window.location.href = "index.html?home";
      break;
  }

}

//Hàm để kết thúc load
function loaded() {
  document.querySelector("body").classList.toggle("loaded");
}

window.onload = function () {
  // setTimeout(loaded, 700);
  
  
  renderPage();
};
