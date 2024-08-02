// Slider
let currentSlide = 0;

function changeSlide(direction) {
  const slides = document.querySelector('.blog-post-8-slides');
  const totalSlides = document.querySelectorAll('.blog-post-8-slide').length;
  const slidesToShow = 4;

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