// Инициализация динамической адаптации
new Adapt();

// Инициализация модального окна
const modal = new Modal({ animation: 'fadeIn' });

// Инициализация главного меню
new Menu('main-menu', { alwaysClick: true });

// Инициализация табов на главной странице
new Tabs('main-media');

// Инициализация табов дивидендов
new Tabs('dividends');

// Инициализация табов календарей
new Tabs('calendars');

// Инициализация cпойлера в пресс-релизе
new Spoiler('press-spoiler');

// Инициализация меню архива прессы
new Menu('press-archive', { lockOnOpen: false, closeOnSelect: true });

// Инициализация cпойлеров
new Spoiler('spoiler-1');
new Spoiler('spoiler-2');


// Инициализация функционала формы
const themeSelector = document.querySelector('select[name="theme"]');
themeSelector?.addEventListener('change', (event) => {
	window.validator.destroy();

	const inputsBlock = document.querySelector('.form__main');

	if (event.target.value) {
		inputsBlock?.classList.add('_active');
	} else {
		inputsBlock?.classList.remove('_active');
	}

	const changableLabels = document.querySelectorAll('[data-changable] > .form__label-title');
	const changableInputs = document.querySelectorAll('[data-changable] > .form__input');

	if (+event.target.value === 7) {
		changableLabels.forEach(item => item.removeAttribute('data-req'));
		changableInputs.forEach(item => item.removeAttribute('required'));
	} else {
		changableLabels.forEach(item => item.setAttribute('data-req', '*'));
		changableInputs.forEach(item => item.setAttribute('required', ''));
	}

	const form = themeSelector.closest('form');

	validateForm(form);
});





// // Инициализация календарей
new CustomDatepicker('#datepicker-1');



// new AirDatepicker('#datepicker-1', {
// 	inline: true,
// 	startDate: dateFns.startOfMonth(dateFns.addMonths(new Date(), 0)),
// 	minDate: dateFns.startOfMonth(dateFns.addMonths(new Date(), 0)),
// 	maxDate: dateFns.endOfMonth(dateFns.addMonths(new Date(), 0)),
// 	navTitles: {
// 		days: 'MMMM yyyy',
// 	},
// 	onRenderCell({ date, cellType }) {
// 		// Можно здесь отметить нужные дни, например, добавить класс для конкретных дат
// 		if (cellType === 'day' && [6, 27].includes(date.getDate())) {
// 			return {
// 				classes: 'highlight'
// 			};
// 		}
// 	}
// });

// new AirDatepicker('#datepicker-2', {
// 	inline: true,
// 	startDate: dateFns.startOfMonth(dateFns.addMonths(new Date(), 1)),
// 	minDate: dateFns.startOfMonth(dateFns.addMonths(new Date(), 1)),
// 	maxDate: dateFns.endOfMonth(dateFns.addMonths(new Date(), 1)),
// 	navTitles: {
// 		days: 'MMMM yyyy',
// 	},
// 	onRenderCell({ date, cellType }) {
// 		// Можно здесь отметить нужные дни, например, добавить класс для конкретных дат
// 		if (cellType === 'day' && [13].includes(date.getDate())) {
// 			return {
// 				classes: 'highlight'
// 			};
// 		}
// 	}
// });

// new AirDatepicker('#datepicker-3', {
// 	inline: true,
// 	startDate: dateFns.startOfMonth(dateFns.addMonths(new Date(), 2)),
// 	minDate: dateFns.startOfMonth(dateFns.addMonths(new Date(), 2)),
// 	maxDate: dateFns.endOfMonth(dateFns.addMonths(new Date(), 2)),
// 	navTitles: {
// 		days: 'MMMM yyyy',
// 	},
// 	onRenderCell({ date, cellType }) {
// 		// Можно здесь отметить нужные дни, например, добавить класс для конкретных дат
// 		if (cellType === 'day' && [18, 29].includes(date.getDate())) {
// 			return {
// 				classes: 'highlight'
// 			};
// 		}
// 	}
// });

// new AirDatepicker('#datepicker-4', {
// 	inline: true,
// 	startDate: dateFns.startOfMonth(dateFns.addMonths(new Date(), 3)),
// 	minDate: dateFns.startOfMonth(dateFns.addMonths(new Date(), 3)),
// 	maxDate: dateFns.endOfMonth(dateFns.addMonths(new Date(), 3)),
// 	navTitles: {
// 		days: 'MMMM yyyy',
// 	},
// 	onRenderCell({ date, cellType }) {
// 		// Можно здесь отметить нужные дни, например, добавить класс для конкретных дат
// 		if (cellType === 'day' && [].includes(date.getDate())) {
// 			return {
// 				classes: 'highlight'
// 			};
// 		}
// 	}
// });