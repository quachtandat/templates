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
//slider 04
let currentSlidesection04 = 0;

function changeSlidesection04(direction) {
  const slides = document.querySelector('.section-04-slides');
  const totalSlides = document.querySelectorAll('.section-04-item').length;
  const slidesToShow = 4;

  currentSlidesection04 += direction;

  if (currentSlidesection04 < 0) {
    currentSlidesection04 = totalSlides - slidesToShow;
  }

  if (currentSlidesection04 >= totalSlides) {
    currentSlidesection04 = 0;
  }

  const offset = -(currentSlidesection04 * (100 / slidesToShow));
  slides.style.transform = `translateX(${offset}%)`;
}
// chuyển section
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
      footer.style.display = 'none'; // Ẩn footer trong Section 3  
  } else {  
      footer.style.display = 'block'; // Hiện footer ở các section còn lại  
  }  
}