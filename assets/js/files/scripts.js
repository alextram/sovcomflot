// Инициализация динамической адаптации
new Adapt();

// Инициализация модального окна
const modal = new Modal({animation: 'fadeIn'});

// Инициализация главного меню
new Menu('main-menu', { alwaysClick: true });

// Инициализация табов на главной странице
new Tabs('main-media');

// Инициализация табов дивидендов
new Tabs('dividends');

// Инициализация cпойлера в пресс-релизе
new Spoiler('press-spoiler');

// Инициализация меню архива прессы
new Menu('press-archive', { lockOnOpen: false, closeOnSelect: true });

// Инициализация cпойлеров
new Spoiler('spoiler-1');
new Spoiler('spoiler-2');