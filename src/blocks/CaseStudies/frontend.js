import { Swiper } from 'swiper';
import { Autoplay } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', function() {
	const swiperElements = document.querySelectorAll('.case-studies-swiper .swiper');
	
	swiperElements.forEach(function(swiperElement) {
		new Swiper(swiperElement, {
			modules: [Autoplay],
			slidesPerView: 1,
			spaceBetween: 30,
			loop: true,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
			breakpoints: {
				// when window width is >= 768px
				768: {
					slidesPerView: 2,
					spaceBetween: 30
				},
				// when window width is >= 1024px
				1024: {
					slidesPerView: 3,
					spaceBetween: 40
				}
			}
		});
	});
});
