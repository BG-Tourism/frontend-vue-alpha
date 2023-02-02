const messages = {
    navigation: {
        categories: 'Categories',
        category: 'Category "{title}"',
        locality: 'Locality "{title}"',
        localities: 'Localities ({count})',
        homepage: 'Homepage',
        place: 'Place "{title}"',
        places: 'Places',
        region: 'Region "{title}"',
        regions: 'Regions'
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
    loading: 'Loading...',
    seeMore: 'See more',
    showMore: 'Show more',
    showLess: 'Show less',
    noResults: 'There are no results to show.',
    close: 'Close',
    filters: {
        filterBy: 'Филтрирай по',
        autosaving: 'Every selection you make will be reflected in the results instantly.',
        categories: 'Categories',
        categoriesCounter: 'Categories ({n})',
        regionsAndLocalities: 'Regions & Localities',
        regionsAndLocalitiesCounter: 'Regions & Localities ({n})',
        rating: 'Rating',
        ratingCounter: 'Rating ({n})'
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
    footerOpenSource:
        'This project is an open source development and is available on <a href="{repo}" target="_blank" rel="noopener">GitHub</a>. Anyone can contribute to its development.',
    footerCopyright: 'All Rights Reserved'
}

export default messages
