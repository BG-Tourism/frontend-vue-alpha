const messages = {
    navigation: {
        homepage: 'Homepage',
        category: 'Category "{category}"'
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
    seeMore: 'See more',
    showMore: 'Show more',
    headerEnvironment: {
        production:
            'Alpha version of the project. Contribute to its development on <a href="{repo}" target="_blank" rel="noopener">GitHub</a>.',
        staging: 'Testing Environment',
        local: 'Development Environment'
    },
    footerOpenSource:
        'This project is an open source development and is available on <a href="{repo}" target="_blank" rel="noopener">GitHub</a>. Anyone can contribute to its development.',
    footerCopyright: 'All Rights Reserved'
}

export default messages
