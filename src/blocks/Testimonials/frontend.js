import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', function() {
  // Initialize Swiper only on the frontend, not in the editor
  if (!document.body.classList.contains('wp-admin')) {
    const testimonialSliders = document.querySelectorAll('.testimonials-slider');
    
    testimonialSliders.forEach(slider => {
      const swiper = new Swiper(slider, {
        modules: [Navigation, Pagination, Autoplay],
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          768: {
            slidesPerView: 1.5,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1.5,
            spaceBetween: 50,
          },
        },
      });
    });
  }
});
