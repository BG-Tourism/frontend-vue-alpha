const messages = {
    navigation: {
        categories: 'Категории',
        category: 'Категория "{title}"',
        locality: 'Местност "{title}"',
        localities: 'Местности ({count})',
        homepage: 'Начало',
        place: 'Забележителност "{title}"',
        places: 'Забележителности',
        region: 'Район "{title}"',
        regions: 'Райони'
    },
    colorMode: {
        toggleToLight: 'Превключване към светла тема',
        toggleToDark: 'Превключване към тъмна тема'
    },
    unit: {
        celsius: '°C',
        fahrenheit: '°F',
        coords: 'GPS координати - <strong>{latitude}</strong> географска ширина и <strong>{longitude}</strong> географска дължина.',
        altitude: {
            short: 'м. н.в.',
            long: 'Метра надморска височина.'
        }
    },
    nameOfDay: {
        0: 'Неделя',
        1: 'Понеделник',
        2: 'Вторник',
        3: 'Сряда',
        4: 'Четвъртък',
        5: 'Петък',
        6: 'Събота'
    },
    settings: 'Настройки',
    logout: 'Изход',
    loading: 'Зареждане...',
    seeMore: 'Виж повече',
    showMore: 'Покажи повече',
    showLess: 'Покажи по-малко',
    noResults: 'Няма резултати, които да покажем.',
    close: 'Затвори',
    filters: {
        filterBy: 'Филтрирай по',
        autosaving: 'Всеки избор, който направиш, ще се отрази в резултатите мигновено.',
        categories: 'Категории',
        categoriesCounter: 'Категории ({n})',
        regionsAndLocalities: 'Региони и местности',
        regionsAndLocalitiesCounter: 'Региони и местности ({n})',
        rating: 'Рейтинг',
        ratingCounter: 'Рейтинг ({n})'
    },
    pagination: {
        next: 'Напред',
        previous: 'Назад',
        pages: 'Страница <strong>{current}</strong> от <strong>{total}</strong>.<br>Общо <strong>{places}</strong> забележителности.'
    },
    headerEnvironment: {
        production: 'Това е прототип. Към <a href="{repo}" target="_blank" rel="noopener">GitHub хранилището</a>.',
        staging: 'Тестова среда',
        local: 'Среда за разработка'
    },
    footerOpenSource:
        'Този проект е разработка с отворен код и е достъпен в <a href="{repo}" target="_blank" rel="noopener">GitHub</a>. Всеки желаещ може да допринесе за неговото развитие.',
    footerCopyright: 'всички права запазени'
}

export default messages
