// Lấy tất cả các li
const lis = document.querySelectorAll('.header-behine-left ul li');

// Thêm sự kiện click vào từng li
lis.forEach((li) => {
  li.addEventListener('click', () => {
    // Xóa thuộc tính active khỏi tất cả các li
    lis.forEach((li) => {
      li.classList.remove('active');
    });
    // Thêm thuộc tính active vào li đang được nhấn
    li.classList.add('active');
  });
});
// Slider
let currentSlide = 0;

function changeSlide(direction) {
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;
  const slidesToShow = 5;

  currentSlide += direction;

  if (currentSlide < 0) {
    currentSlide = totalSlides - slidesToShow;
  }

  if (currentSlide > totalSlides - slidesToShow) {
    currentSlide = 0;
  }

  const offset = -(currentSlide * (100 / slidesToShow));
  slides.style.transform = `translateX(${offset}%)`;
}
//slider 06
let currentSlidesection06 = 0;

function changeSlidesection06(direction) {
  const slides = document.querySelector('.section-06-slides');
  const totalSlides = document.querySelectorAll('.section-06-on').length;

  currentSlidesection06 += direction;

  if (currentSlidesection06 < 0) {
    currentSlidesection06 = totalSlides - 1;
  }

  if (currentSlidesection06 >= totalSlides) {
    currentSlidesection06 = 0;
  }

  const offset = -(currentSlidesection06 * 100);
  slides.style.transform = `translateX(${offset}%)`;
}
// Slider
let currentSlide1 = 0;

function changeSlidesection4(direction) {
  const slides = document.querySelector('.blog-post-8-slides');
  const totalSlides = document.querySelectorAll('.blog-post-8-slide').length;
  const slidesToShow = 4;

  currentSlide1 += direction;

  if (currentSlide1 < 0) {
    currentSlide1 = totalSlides - slidesToShow;
  }

  if (currentSlide1 > totalSlides - slidesToShow) {
    currentSlide1 = 0;
  }

  const offset = -(currentSlide1 * (100 / slidesToShow));
  slides.style.transform = `translateX(${offset}%)`;
}
// // chuyển section

function showSection(sectionId) {
  // Ẩn tất cả các section
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.remove('active'); // Loại bỏ lớp active
  });

  // Hiển thị section được chọn
  const activeSection = document.getElementById(sectionId);
  activeSection.classList.add('active'); // Thêm lớp active cho section được chọn

  // Ẩn hoặc hiện footer dựa trên section hiện tại
  const footer = document.getElementById('footer');
  if (sectionId === 'search') {
    footer.style.display = 'none'; // Ẩn footer trong Section search
  } else {
    footer.style.display = 'block'; // Hiện footer ở các section còn lại
  }

  const header = document.querySelector('.header-up ul');
  const headerE = document.getElementById('header-e');
  if (sectionId === 'men') {
    header.innerHTML = ' <li><a href="">Holiday Gifting</a></li><li><a href="">New Arrivals</a></li><li><a href="">Best-Sellers</a></li><li><a href="">Clothing</a></li><li><a href="">Tops & Sweaters</a></li><li><a href="">Pants & Jeans</a></li><li><a href="">Outerwear</a></li><li><a href="">Shoes & Bags</a></li><li id="sale"><a href="" style="color: red;">Sale</a><div class="dropdown-content"><div class="menu"><ul><li><a href="">HIGHLIGHTS</a></li><li><a href="">Shop All New Arrivals</a></li><li><a href="">The Gift Guide</a></li><li><a href="">New Bottoms</a></li><li><a href="">New Tops</a></li><li><a href="">T-Shirt Bundles</a></li><li><a href="">Under $100</a></li></ul><ul><li><a href="">FEATURED SHOPS</a></li><li><a href="">The Holiday Outfit Edit</a></li><li><a href="">Giftable Sweaters</a></li><li><a href="">Uniform & Capsule</a></li><li><a href="">The Performance Chino Shop</a></li><li><a href="">Top Rated Men’s Clothing</a></li></ul><div class="featured-item"><a href=""><img src="/image/dropdown-1.png"></a> </div><div class="featured-item"><a href=""><img src="/image/dropdown-2.png"></a></div></div></div></li>';
  } else if (sectionId === 'about') {
    header.innerHTML = '<li><a href="#about">About</a></li><li><a href="#stores"onclick="showSection(\'stores\')">Stores</a></li><li><a href="#about">Factories</a></li><li><a href="#about">Environmental Initiatives</a></li><li><a href="#about">Our Carbon Commitment</a></li><li><a href="#about">Annual Impact Report</a></li><li><a href="#about">Cleaner Fashion</a></li>';
  } else if (sectionId === 'blog'){
    header.innerHTML = '' 
  }
 
  history.pushState(null, null, '#' + sectionId);
}

document.addEventListener('DOMContentLoaded', function() {  
  const hash = window.location.hash.substring(1);  
  if (hash) {  
      showSection(hash);  
  } else {  
      showSection('men'); // Hiển thị phần Men mặc định  
  }  
});  

 
// Lấy các phần tử cần thiết  
const openCartButton = document.querySelector(".icon-cart");  
const cartSection = document.getElementById("cart");  
const closeCartButton = document.querySelector(".icon-close");  

// Mở giỏ hàng  
openCartButton.addEventListener("click", function() {  
  console.log("openCartButton")
    cartSection.classList.add("active"); // Xóa lớp 'hidden' để hiển thị giỏ hàng  
});  

// Đóng giỏ hàng  
closeCartButton.addEventListener("click", function() {  
    cartSection.classList.remove("active"); // Thêm lớp 'hidden' để ẩn giỏ hàng  
});