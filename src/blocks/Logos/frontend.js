import { Swiper } from 'swiper';
import { Autoplay } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', function() {
	const swiperElements = document.querySelectorAll('.logos-swiper .swiper');
	
	swiperElements.forEach(function(swiperElement) {
		new Swiper(swiperElement, {
			modules: [Autoplay],
			slidesPerView: 'auto',
			spaceBetween: 30,
			loop: true,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			breakpoints: {
				// when window width is >= 320px
				320: {
					slidesPerView: 2,
					spaceBetween: 20
				},
				// when window width is >= 480px
				480: {
					slidesPerView: 3,
					spaceBetween: 30
				},
				// when window width is >= 640px
				640: {
					slidesPerView: 4,
					spaceBetween: 40
				}
			}
		});
	});
});
