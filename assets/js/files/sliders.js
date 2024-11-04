/**
 * sliders.js
 * 
 * Copyright (c) 2023 Moiseev Evgeny
 * Organization: WebisGroup
 * 
 * Скрипты инициализации и обработки слайдеров.
 */


/**
 * Инициализация слайдеров по атрибуту data-swiper.
 * 
 * Используется библиотека swiper.js: assets/js/libs/swiper.min.js
 * Документация: https://swiperjs.com/swiper-api
 * Примеры: https://swiperjs.com/demos
 * 
 * Требуется подключение стилей: assets/scss/_swiper.scss
 * 
 * Данный скрипт необходим для того, чтобы не привязываться к стандартным классам свипер-слайдера. На сайте слайдера в документации предоставляется HTML разметка c определёнными классами, без которых он не буедет функционировать. Скрипт же просто расставляет эти обязательные классы и поэтому нет необходимости о них думать. Структура HTML разметки слайдера должна быть такой же, как и указано в документации, но классы могут быть какими угодно. Необходимые поставятся автоматически.
 */
document.querySelectorAll('[data-swiper]').forEach(slider => {
	slider.classList.add('swiper');

	if (slider.classList.contains('swiper-bild')) return;

	const sliderWrapper = slider.firstElementChild;
	const sliderItems = Array.from(sliderWrapper.children);

	sliderWrapper.classList.add('swiper-wrapper');

	sliderItems.forEach(slide => slide.classList.add('swiper-slide'));

	slider.classList.add('swiper-bild');
});


/**
 * Инициализация слайдера
 */
const mainSlider = new Swiper('.main-slider', {
	speed: 1500,
	spaceBetween: 0,
	slidesPerView: 1,
	simulateTouch: false,
	allowTouchMove: false,
	parallax: true,
	navigation: {
		prevEl: '.main-slider__arrow_prev',
		nextEl: '.main-slider__arrow_next',
		disabledClass: "_disabled",
	},
	pagination: {
		el: '.main-slider__pagination',
		bulletClass: 'main-slider__bullet',
		bulletActiveClass: '_active',
		clickable: true,
	},
});

/**
 * Инициализация слайдера
 */
const calendarsSlider = new Swiper('.calendars-slider', {
	speed: 1500,
	spaceBetween: 24,
	slidesPerView: 3,
	navigation: {
		prevEl: '.calendars__arrow_prev',
		nextEl: '.calendars__arrow_next',
		disabledClass: "_disabled",
	},
	breakpoints: {
		320: { slidesPerView: 1 },
		768: { slidesPerView: 2 },
    1051: { slidesPerView: 3 },
	}
});


