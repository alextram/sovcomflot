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


// Инициализация чекбокса анкеты
const surveyCheckbox = document.querySelector('input[name="accept"]');
surveyCheckbox?.addEventListener('change', (event) => {
	const target = event.target;
	const blocks = document.querySelectorAll('[data-survey-block]');
	blocks.forEach(block => target.checked ? block.classList.add('_active') : block.classList.remove('_active'));
});

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

	const reqInputs = form.querySelectorAll('input[required], textarea[required]');
	const btn = form.querySelector('button[type="submit"]');

	reqInputs.forEach(input => {
		input.oninput = () => {
			let isDisabled = false;

			reqInputs.forEach(reqInput => {
				if (!reqInput.hasAttribute('required')) return;

				if (reqInput.type !== 'checkbox') {
					if (!reqInput.value) isDisabled = true;
				}
				
				if (reqInput.type === 'checkbox') {
					if (!reqInput.checked) isDisabled = true;
				}
			});

			isDisabled ? btn.setAttribute('disabled', '') : btn.removeAttribute('disabled');
		};
	});

	validateForm(form);

	btn.setAttribute('disabled', '');
});

//===============================================================


// // // Инициализация календарей
// new CustomDatepicker('[data-datepicker="1"]');

new AirDatepicker('[data-datepicker="1"]', {
	inline: true,
	startDate: dateFns.startOfMonth(new Date(2024, 7)),
	minDate: dateFns.startOfMonth(new Date(2024, 7)),
	maxDate: dateFns.endOfMonth(new Date(2024, 7)),
	navTitles: {
		days: 'MMMM yyyy',
	},
	onRenderCell({ date, cellType }) {
		const params = {};
		// Можно здесь отметить нужные дни, например, добавить класс для конкретных дат
		if (cellType === 'day' && [16, 27].includes(date.getDate()) && dateFns.isSameMonth(date, new Date(2024, 7))) {
			params.classes = '-highlight-';
		}

		if (cellType === 'day') {
			params.html = date.getDate().toString().padStart(2, '0');
		}

		return params;
	},
	onSelect({ date }) {
		dateClickHandler(date);
	}
});

new AirDatepicker('[data-datepicker="2"]', {
	inline: true,
	startDate: dateFns.startOfMonth(new Date(2024, 8)),
	minDate: dateFns.startOfMonth(new Date(2024, 8)),
	maxDate: dateFns.endOfMonth(new Date(2024, 8)),
	navTitles: {
		days: 'MMMM yyyy',
	},
	onRenderCell({ date, cellType }) {
		const params = {};
		// Можно здесь отметить нужные дни, например, добавить класс для конкретных дат
		if (cellType === 'day' && [13].includes(date.getDate()) && dateFns.isSameMonth(date, new Date(2024, 8))) {
			params.classes = '-highlight-';
		}

		if (cellType === 'day') {
			params.html = date.getDate().toString().padStart(2, '0');
		}

		return params;
	},
	onSelect({ date }) {
		dateClickHandler(date);
	}
});

new AirDatepicker('[data-datepicker="3"]', {
	inline: true,
	startDate: dateFns.startOfMonth(new Date(2024, 9)),
	minDate: dateFns.startOfMonth(new Date(2024, 9)),
	maxDate: dateFns.endOfMonth(new Date(2024, 9)),
	navTitles: {
		days: 'MMMM yyyy',
	},
	onRenderCell({ date, cellType }) {
		const params = {};

		// Можно здесь отметить нужные дни, например, добавить класс для конкретных дат
		if (cellType === 'day' && [18, 29].includes(date.getDate()) && dateFns.isSameMonth(date, new Date(2024, 9))) {
			params.classes = '-highlight-';
		}

		if (cellType === 'day') {
			params.html = date.getDate().toString().padStart(2, '0');
		}

		return params;
	},
	onSelect({ date }) {
		dateClickHandler(date);
	}
});

new AirDatepicker('[data-datepicker="4"]', {
	inline: true,
	startDate: dateFns.startOfMonth(new Date(2024, 10)),
	minDate: dateFns.startOfMonth(new Date(2024, 10)),
	maxDate: dateFns.endOfMonth(new Date(2024, 10)),
	navTitles: {
		days: 'MMMM yyyy',
	},
	onRenderCell({ date, cellType }) {
		const params = {};
		// Можно здесь отметить нужные дни, например, добавить класс для конкретных дат
		if (cellType === 'day' && [].includes(date.getDate()) && dateFns.isSameMonth(date, new Date(2024, 10))) {
			params.classes = '-highlight-';
		}

		if (cellType === 'day') {
			params.html = date.getDate().toString().padStart(2, '0');
		}

		return params;
	},
	onSelect({ date }) {
		dateClickHandler(date);
	}
});


//===============================================================
const input = document.querySelector('.search-form__input');

input?.addEventListener('focus', () => {
	if (input.value) return;
	
	const form = input.closest('form');
	
	form.classList.add('_is-focus');
});

input?.addEventListener('blur', () => {
	if (input.value) return;

	const form = input.closest('form');
	
	form.classList.remove('_is-focus');
});



//===============================================================
function dateClickHandler(date) {
	clearActiveDateEvent();

	const dateFormat = dateFns.format(date, 'dd-MM-yyyy');

	const eventElement = document.querySelector(`.event-item[data-date="${dateFormat}"]`);

	if (!eventElement) return;

	eventElement.classList.add('_active');

	scrollTo(eventElement, 300);
}

//===============================================================
function clearActiveDateEvent() {
	document.querySelectorAll('.event-item._active').forEach(elem => elem.classList.remove('_active'));
}