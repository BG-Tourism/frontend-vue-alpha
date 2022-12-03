const places = [
    {
        id: 1,
        category: 2,
        slug: 'hram-pametnik-sveti-aleksandar-nevski',
        image: '/images/photos/4.jpg',
        coords: {
            latitude: 42.69577,
            longitude: 23.33286
        },
        locale: {
            bg: {
                title: 'Храм-паметник "Свети Александър Невски"',
                location: 'гр. София',
                description:
                    '<p>Катедралният храм "Св. Ал. Невски" е считан за символ на българската столица. Намира се в центъра на София, на едноименния площад, а отблясъкът на златните му кубета привлича погледа от километри разстояние.</p><p>Храмът е построен в чест на руския император Александър II, наричан още "Цар Освободител", чиято армия през 1878г освобождава България от петвековното османско владичество. Св. Александър Невски, чието име носи катедралата, е руски княз (1220-1263г) - велик пълководец и дипломат. Той е светец-покровител на руския император Александър II и е символ на руската бойна слава.</p><p>Храмът е изграден по предложение на българския политик и общественик Петко Каравелов (1843-1903г). Първоначално е било решено той да бъде издигнат в Търново, но българският княз Батенберг (управлявал 1879-1886г) настоява да е в София. Една част от средствата за построяването на храма се отпускат от държавния бюджет, друга от дарения на видни граждани, включително и от княз Батенберг, който дарява сумата от 6000 златни лева.</p>'
            },
            en: {
                title: 'St. Alexander Nevsky Temple-Monument',
                location: 'Sofia City',
                description:
                    '<p>The cathedral "St. Al. Nevsky" is considered a symbol of the Bulgarian capital. It is located in the center of Sofia, on the square of the same name, and the glare of its golden cubes attracts the eye from kilometers away.</p><p>The temple was built in honor of the Russian Emperor Alexander II, also called "Tsar Osvoboditel", whose army in 1878 he freed Bulgaria from the five-century Ottoman rule. St. Alexander Nevsky, whose name bears the cathedral, was a Russian prince (1220-1263) - a great commander and diplomat. He is the patron saint of the Russian Emperor Alexander II and is a symbol of Russian military glory.</p><p>The temple was built at the suggestion of the Bulgarian politician and public figure Petko Karavelov (1843-1903). Initially, it was decided that it would be erected in Tarnovo, but the Bulgarian Prince Battenberg (ruled 1879-1886) insisted that it be in Sofia. One part of the funds for the construction of the temple is allocated from the state budget, another from donations of prominent citizens, including Prince Battenberg, who donated the sum of 6,000 gold leva.</p>'
            }
        }
    },
    {
        id: 2,
        category: 1,
        slug: 'vrachanski-balkan',
        image: '/images/photos/7.jpg',
        coords: {
            latitude: 43.16662,
            longitude: 23.48327
        },
        locale: {
            bg: {
                title: 'Врачански Балкан',
                location: 'до гр. Враца'
            },
            en: {
                title: 'Vratsa Balkan',
                location: 'next to Vratsa City'
            }
        }
    },
    {
        id: 3,
        category: 1,
        slug: 'priroden-park-rilski-manastir',
        image: '/images/photos/2.jpg',
        coords: {
            latitude: 42.12823,
            longitude: 23.13548
        },
        locale: {
            bg: {
                title: 'Природен парк "Рилски манастир"',
                location: 'гр. Рила'
            },
            en: {
                title: 'Rila Monastery Nature Park',
                location: 'Rila City'
            }
        }
    },
    {
        id: 4,
        category: 1,
        slug: 'yazovir-batak',
        image: '/images/photos/8.jpg',
        coords: {
            latitude: 41.96643,
            longitude: 24.19945
        },
        locale: {
            bg: {
                title: 'Язовир "Батак"',
                location: 'до гр. Батак'
            },
            en: {
                title: 'Batak Dam',
                location: 'next to Batak City'
            }
        }
    },
    {
        id: 5,
        category: 1,
        slug: 'belogradchishkite-skali',
        image: '/images/photos/9.jpg',
        coords: {
            latitude: 43.62837,
            longitude: 22.67985
        },
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
    },
    {
        id: 6,
        category: 2,
        slug: 'natsionalen-park-muzey-shipka',
        image: '/images/photos/5.jpg',
        coords: {
            latitude: 42.74829,
            longitude: 25.3215
        },
        locale: {
            bg: {
                title: 'Национален парк-музей "Шипка"',
                location: 'до гр. Шипка'
            },
            en: {
                title: 'Shipka National Park-Museum',
                location: 'next to Shipka City'
            }
        }
    },
    {
        id: 7,
        category: 2,
        slug: 'dyavolski-most',
        image: '/images/photos/1.jpg',
        coords: {
            latitude: 41.62054,
            longitude: 25.11419
        },
        locale: {
            bg: {
                title: 'Дяволски мост',
                location: 'до гр. Дядовци'
            },
            en: {
                title: "The Devil's Bridge",
                location: 'next to Dyadovtsi City'
            }
        }
    },
    {
        id: 8,
        category: 2,
        slug: 'krepost-tsarevets',
        image: '/images/photos/3.jpg',
        coords: {
            latitude: 43.08309,
            longitude: 25.6525
        },
        locale: {
            bg: {
                title: 'Крепост Царевец',
                location: 'гр. Велико Търново'
            },
            en: {
                title: 'Fortress Tsarevets',
                location: 'Veliko Tarnovo City'
            }
        }
    },
    {
        id: 9,
        category: 1,
        slug: 'podkovata-zavoyat-na-yazovir-kardzhali',
        image: '/images/photos/6.jpg',
        coords: {
            latitude: 41.67345,
            longitude: 25.24002
        },
        locale: {
            bg: {
                title: '"Подковата" завоят на язовир Кърджали',
                location: 'до гр. Кърджали'
            },
            en: {
                title: 'The "horseshoe" bend of the Kardzhali dam',
                location: 'next to Kardzhali City'
            }
        }
    }
]

export default places
