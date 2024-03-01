document.querySelector('.user-icon').addEventListener("click", function()
{
    document.querySelector('.user-icon').querySelector('.dropdown-content').classList.toggle("show");
})

document.querySelector('.header-navbar').querySelectorAll('.item').forEach(element => {
    let url = window.location.href.split("?")[1];
    if(element.dataset.link == url)
        element.classList.add("active");
    else
        element.classList.remove("active");
});


if(!(localStorage.getItem("user") === null))
{
    let user = JSON.parse(localStorage.getItem("user"));
    let parent = document.querySelector(".user-icon");

    parent.firstElementChild.style.display = "none";

    document.getElementById("tenUser").innerText = user[0].tenNguoiDung;

    parent.querySelector('.user-img').style.display = "block";
    parent.querySelector('.user-img').src = user[0].img;

    if(user[0].tenDangNhap == "admin")
        document.querySelector('.isAdminUser').style.display = "block";
    console.log(user);
    console.log(user[0].tenNguoiDung);
}



function addCommaNumberFormat(index)
{
    let input = document.querySelector('.filter-with-price').querySelectorAll('input');
    input[index].value = addCommaToPrice(disableFormatComma(input[index].value));
}


function checkKhoangGia()
{
    let input = document.querySelector('.filter-with-price').querySelectorAll('input');
    
    let priceFrom = disableFormatComma(input[0].value);
    let priceTo = disableFormatComma(input[1].value);

    input[0].classList.remove('error');
    input[1].classList.remove('error');

    if(priceFrom == '')
    {
        input[0].classList.add('error');
        input[0].placeholder = 'Vui lòng nhập giá';
        return;
    }

    if(isNaN(priceFrom))
    {
        console.log(input[0].value);
        input[0].classList.add('error');
        input[0].placeholder = 'Vui lòng nhập giá bằng số';
        return;
    }

    if(priceTo == '')
    {
        input[1].classList.add('error');
        input[1].placeholder = 'Vui lòng nhâpj giá';
        return;
    }

    if(isNaN(priceTo))
    {
        input[1].classList.add('error');
        input[1].placeholder = 'Vui lòng nhập giá bằng số';
        return;
    }

    if(priceFrom < 0)
    {
        input[0].classList.add('error');
        return;
    }

    if(priceTo < 0)
    {
        input[1].classList.add('error');
        return;
    }

    let str = window.location.href.split('&');

    console.log(str);

    if(str[2] == undefined)
    {
        window.location.href += '&' + priceFrom + '-' + priceTo;
    }
    else 
    {
        str[2] = '&' + priceFrom + '-' + priceTo;
        window.location.href = str[0] + "&" + str[1] + str[2];
    }

    
    return;
}

if(window.location.href.indexOf("home") != -1)
{
    var slideIndex = 0;
    showSlides();
    
    // // Next/previous controls
    // function plusSlides(n) {
    //   showSlides(slideIndex += n);
    // }
    
    // // Thumbnail image controls
    // function currentSlide(n) {
    //   showSlides(slideIndex = n);
    // }
    
    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
      }
    
    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        slideIndex++;
        console.log("index: " + slideIndex);
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        
        if (slideIndex > slides.length) {slideIndex = 1}    
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
        setTimeout(showSlides, 2000); // Change image every 2 seconds
      } 
}


