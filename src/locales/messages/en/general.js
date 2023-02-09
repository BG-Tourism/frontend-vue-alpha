const messages = {
    navigation: {
        categories: 'Categories',
        category: 'Category "{title}"',
        locality: '{title} Municipality',
        localities: 'Municipalities ({count})',
        homepage: 'Homepage',
        place: 'Place "{title}"',
        places: 'Places',
        region: 'Tourist Region "{title}"',
        regions: 'Tourist Regions'
    },
    colorMode: {
        toggleToLight: 'Toggle to Light theme',
        toggleToDark: 'Toggle to Dark theme'
    },
    unit: {
        celsius: '°C',
        fahrenheit: '°F',
        coords: 'GPS Coordinates - <strong>{latitude}</strong> latitude, and <strong>{longitude}</strong> longitude.',
        altitude: {
            short: 'altitude',
            long: 'Меters above sea level'
        }
    },
    nameOfDay: {
        0: 'Sunday',
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday'
    },
    settings: 'Settings',
    logout: 'Sign out',
    search: 'Search',
    loading: 'Loading...',
    seeMore: 'See more',
    showMore: 'Show more',
    showLess: 'Show less',
    noResults: 'There are no results to show.',
    close: 'Close',
    filters: {
        filterBy: 'Filter by',
        autosaving: 'Every selection you make will be reflected in the results instantly.',
        categories: 'Categories',
        categoriesCounter: 'Categories ({n})',
        regionsAndLocalities: 'Tourist Regions & Localities',
        regionsAndLocalitiesCounter: 'Tourist Regions & Localities ({n})',
        rating: 'Rating',
        ratingCounter: 'Rating ({n})',
        searchPlaceholder: 'Start typing...'
    },
    pagination: {
        next: 'Next',
        previous: 'Previous',
        pages: 'Page <strong>{current}</strong> of <strong>{total}</strong>.<br>A total of <strong>{places}</strong> places.'
    },
    headerEnvironment: {
        production: 'This is a prototype. Go to the <a href="{repo}" target="_blank" rel="noopener">GitHub repository</a>.',
        staging: 'Testing Environment',
        local: 'Development Environment'
    },
    footer: {
        description:
            '<p>Embark on a journey to uncover the hidden gems of Bulgaria, where history and culture are intertwined to create breathtaking sights.</p><p>Our goal is to shed light on the rich heritage and unique stories behind each landmark, and to inspire you to visit and experience them for yourself.</p>',
        rights: 'All Rights Reserved',
        regarding: 'Regarding',
        links: {
            about: 'About the project',
            contact: 'Contact with us',
            terms: 'Terms & Conditions',
            privacyPolicy: 'Privacy Policy',
            cookies: 'Cookie Policy'
        }
    }
}

export default messages
