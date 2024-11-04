class CustomDatepicker {
	constructor(selector, options) {
		const defaultOptions = {
			currentDate: new Date(),
			daysArray: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
		}

		this.classes = {
			active: "_active",
		};

		this.elements = {};

		this.options = Object.assign(defaultOptions, options);
		this.elements.calendar = document.querySelector(selector);

		if (!this.elements.calendar) return;

		this.init();
	}

	init() {
		this.elements.calendar.classList.add('calendar');

		const header = this.buildHeader();
		const days = this.buildDays();
		const dates = this.buildDates();

		this.elements.calendar.append(header);
		this.elements.calendar.append(days);
		this.elements.calendar.append(dates);
	}

	buildHeader() {
		const header = document.createElement('div');
		header.classList.add('calendar__header');

		const month = document.createElement('span');
		month.classList.add('calendar__month');
		month.innerText = dateFns.format(this.options.currentDate, 'LLLL', { locale: dateFns.locale.ru });

		const year = document.createElement('span');
		year.classList.add('calendar__year');
		year.innerText = dateFns.format(this.options.currentDate, 'yyyy');
		
		header.append(month);
		header.append(year);

		return header;
	}

	buildDays() {
		const days = document.createElement('div');
		days.classList.add('calendar__days');

		this.options.daysArray.forEach(dayLabel => {
			const day = document.createElement('div');
			day.classList.add('calendar__day');
			day.innerText = dayLabel;
			days.append(day);
		});

		return days;
	}

	buildDates() {
		const dates = document.createElement('div');
		dates.classList.add('calendar__dates');

		const startDate = dateFns.addDays(dateFns.startOfWeek(dateFns.subDays(this.options.currentDate, 1)), 1);

		for (let i = 0; i < 42; i++) {
			const date = document.createElement('div');
			date.classList.add('calendar__date');
			date.innerText = dateFns.getDate(dateFns.addDays(startDate, i)).toString().padStart(2, '0');
			dates.append(date);
		}

		return dates;
	}
}