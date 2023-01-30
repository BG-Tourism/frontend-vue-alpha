const categoryArchitecture = [
    {
        slug: 'sveti-aleksandar-nevski',
        image: '/images/photos/1.jpg',
        user_score: 4.2,
        visitors: Math.floor(Math.random() * 1000),
        locale: {
            bg: {
                title: 'Храм-паметник "Свети Александър Невски"',
                location: 'гр. София'
            },
            en: {
                title: 'St. Alexander Nevsky Temple-Monument',
                location: 'Sofia City'
            }
        }
    },
    {
        slug: 'tsarevets',
        image: '/images/photos/2.jpg',
        user_score: 5,
        visitors: Math.floor(Math.random() * 1000),
        locale: {
            bg: {
                title: 'Крепост "Царевец"',
                location: 'гр. Велико Търново'
            },
            en: {
                title: 'Tsarevets Fortress',
                location: 'Veliko Tarnovo City'
            }
        }
    },
    {
        slug: 'rilski-manastir',
        image: '/images/photos/3.jpg',
        user_score: 3.6,
        visitors: Math.floor(Math.random() * 1000),
        locale: {
            bg: {
                title: 'Манастир "Свети Иван Рилски"',
                location: 'до гр. Рила'
            },
            en: {
                title: 'Rila Monastery Nature Park',
                location: 'next to Rila City'
            }
        }
    },
    {
        slug: 'shipka-monument',
        image: '/images/photos/4.jpg',
        user_score: 5,
        visitors: Math.floor(Math.random() * 1000),
        locale: {
            bg: {
                title: 'Паметник на свободата "Шипка"',
                location: 'до гр. Шипка'
            },
            en: {
                title: 'Shipka Monument',
                location: 'next to Shipka City'
            }
        }
    },
    {
        slug: 'belogradchishkite-skali',
        image: '/images/photos/5.jpg',
        user_score: 4.2,
        visitors: Math.floor(Math.random() * 1000),
        locale: {
            bg: {
                title: 'Белоградчишките скали',
                location: 'гр. Белоградчик'
            },
            en: {
                title: 'The Rocks of Belogradchik',
                location: 'Belogradchik City'
            }
        }
    }
]

export default categoryArchitecture
