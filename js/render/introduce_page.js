function openIntroducePage() {
    let navbar = document
      .querySelector(".header-navbar")
      .querySelectorAll(".item");
    navbar.forEach((element) => {
      if (element.dataset.link == "introduce") element.classList.add("active");
    });

    let str = "";
    str +=
    '<div id="introduce">' +
        '<div class="about-title">' +
            ' <h1>WELCOME TO MSNM STORE</h1>' +
        "</div>" +
        '<div class="about-text">' +
        "<li>MSNM STORE luôn là một trong những cửa hàng phân phối độc quyền chính hãng của Apple, Asus, Acer, Lenovo, Dell...</li> " +
        '<div class="about-space">' + "</div> " +
        '<li>Với đội ngũ lãnh đạo, cán bộ kỹ thuật, cộng tác viên nhiều năm kinh nghiệm, được tiếp cận với công nghệ hiện đại ' +
        ' từ các nước tiên tiến trong lĩnh vực công nghệ.' + 
        ' Chúng tôi sẵn sàng tư vấn và cung cấp đến khách hàng sản phẩm công nghệ mới nhất của thế giới. ' +
        ' Thực hiện các dịch vụ sau bán hàng bao gồm: Hướng dẫn sử dụng, bảo hành bảo trì thiết bị. ' +
        " Các dịch vụ này được thực hiện bởi sự trợ giúp của chính hãng từ khâu cung cấp phụ tùng, tư vấn kĩ thuật.</li> " +
        '<div class="about-space">' + "</div> " +
        ' <li>Với phương châm hoạt động của Store, chúng tôi cam kết đem lại cho quý khách hàng các thiết bị chất lượng cao, ' +
        ' những giải pháp đồng bộ với thiết bị và công nghệ hiện đại nhất, ' +
        " phù hợp với từng nhu cầu công việc cụ thể ở mọi lĩnh vực và dịch vụ hỗ trợ kỹ thuật chuyên nghiệp. </li> " +
        '<div class="about-space">' + "</div> " +
        '<li>Mục tiêu trở thành thương hiệu đáng tin cậy và là nhà phân phối, cung cấp thiết bị hàng đầu tại Việt Nam.' +
        '  Chúng tôi thực hiện công việc của mình với tính chuyên nghiệp cao nhất,' +
        'thiết bị được chúng tôi phân phối luôn được nhập khẩu chính hãng có thương hiệu,' +
        "uy tín từ các nước có nền công nghệ phát triển hàng đầu trên thế giới.</li>" +
        "</div>" +
    "</div>";


  document.getElementById("wrapper").innerHTML = str;
    
}