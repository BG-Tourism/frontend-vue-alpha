const regions = [
    {
        slug: 'trakia',
        image: '/images/regions/trakia.jpg',
        places_count: Math.floor(Math.random() * 100),
        locale: {
            bg: {
                title: 'Тракийски',
                description:
                    'Тракийският туристически район в България се състои от 35 общини и включва няколко исторически забележителности. Някои от забележителните атракции включват минерални бани, пещери и древни градове с римска и османска история. Има и много живописни градове и курорти, предлагащи възможности за отдих и почивка. Регионът е известен със своята природна красота, разнообразно културно наследство и богата история.'
            },
            en: {
                title: 'Trakia',
                description:
                    'The Tracian tourist region in Bulgaria is made up of 35 municipalities and contains several historic landmarks. Some of the notable attractions include mineral baths, caves, and ancient cities with Roman and Ottoman history. There are also many scenic towns and resorts, offering opportunities for recreation and relaxation. The region is known for its natural beauty, diverse cultural heritage, and rich history.'
            }
        },
        localities: [
            {
                slug: 'bratya-daskalovi',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Братя Даскалови',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Bratya Daskalovi',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'brezovo',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Брезово',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Brezovo',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'galabovo',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Гълъбово',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Galabovo',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'dimitrovgrad',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Димитровград',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Dimitrovgrad',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'elhovo',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Елхово',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Elhovo',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'kaloyanovo',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Калояново',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Kaloyanovo',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'krichim',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Кричим',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Krichim',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'lesichovo',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Лесичово',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Lesichovo',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'lyubimets',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Любимец',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Lyubimets',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'maritsa',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Марица',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Maritsa',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'mineralni-bani',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Минерални бани',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Mineralni Bani',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'nova-zagora',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Нова Загора',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Nova Zagora',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'opan',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Опан',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Opan',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'pazardzhik',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Пазарджик',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Pazardzhik',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'perushtitsa',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Перущица',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Perushtitsa',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'peshtera',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Пещера',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Peshtera',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'plovdiv',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Пловдив',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Plovdiv',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'parvomay',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Първомай',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Parvomay',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'radnevo',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Раднево',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Radnevo',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'rakovski',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Раковски',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Rakovski',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'sadovo',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Садово',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Sadovo',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'svilengrad',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Свиленград',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Svilengrad',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'septemvri',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Септември',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Septemvri',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'simeonovgrad',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Симеоновград',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Simeonovgrad',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'stamboliyski',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Стамболийски',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Stamboliyski',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'stambolovo',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Стамболово',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Stambolovo',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'stara-zagora',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Стара Загора',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Stara Zagora',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'straldzha',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Стралджа',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Straldzha',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'syedinenie',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Съединение',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Syedinenie',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'topolovgrad',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Тополовград',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Topolovgrad',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'tundzha',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Тунджа',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Tundzha',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'harmanli',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Харманли',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Harmanli',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'haskovo',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Хасково',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Haskovo',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'chirpan',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Чирпан',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Chirpan',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'yambol',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Ямбол',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Yambol',
                        description: 'placeholder text'
                    }
                }
            }
        ]
    },
    {
        slug: 'sofia',
        image: '/images/regions/sofia.jpg',
        places_count: Math.floor(Math.random() * 100),
        locale: {
            bg: {
                title: 'Софийски',
                description:
                    'Софийският туристически район в България включва 23 общини и разполага с различни исторически забележителности и атракции. Някои от тях включват средновековни крепости, църкви, паметници и музеи, които демонстрират богатото културно наследство на региона. Град София, столицата на България, също се намира в региона и е популярна туристическа дестинация, известна със своите исторически забележителности като храм-паметник Александър Невски, Националния дворец на културата и планината Витоша. Други популярни дестинации включват живописни планини и езера, термални бани и ски курорти.'
            },
            en: {
                title: 'Sofia',
                description:
                    'The Sofia Tourist Region in Bulgaria includes 23 municipalities, and it features various historic landmarks and attractions. Some of these include medieval fortresses, churches, monuments, and museums that showcase the rich cultural heritage of the region. The city of Sofia, the capital of Bulgaria, is also located in the region and is a popular tourist destination known for its historical landmarks, such as the Alexander Nevsky Cathedral, the National Palace of Culture, and the Vitosha Mountain. Other popular destinations include scenic mountains and lakes, thermal baths, and ski resorts.'
            }
        },
        localities: [
            {
                slug: 'bobov-dol',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Бобов дол',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Bobov Dol',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'bozhurishte',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Божурище',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Bozhurishte',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'botevgrad',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Ботевград',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Botevgrad',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'breznik',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Брезник',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Breznik',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'godech',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Годеч',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Godech',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'gorna-malina',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Горна Малина',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Gorna Malina',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'Dragoman',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Драгоман',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Dragoman',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'elin-pelin',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Елин Пелин',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Elin Pelin',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'etropole',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Етрополе',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Etropole',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'zemen',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Земен',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Zemen',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'ihtiman',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Ихтиман',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Ihtiman',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'kovachevtsi',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Ковачевци',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Kovachevtsi',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'kostinbrod',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Костинброд',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Kostinbrod',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'kyustendil',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Кюстендил',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Kyustendil',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'nevestino',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Невестино',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Nevestino',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'pernik',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Перник',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Pernik',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'pravets',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Правец',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Pravets',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'radomir',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Радомир',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Radomir',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'svoge',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Своге',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Svoge',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'slivnitsa',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Сливница',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Slivnitsa',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'sofia',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'София',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Sofia',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'treklyano',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Трекляно',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Treklyano',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'tran',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Трън',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Tran',
                        description: 'placeholder text'
                    }
                }
            }
        ]
    },
    {
        slug: 'rila-pirin',
        image: '/images/regions/rila-pirin.jpg',
        places_count: Math.floor(Math.random() * 100),
        locale: {
            bg: {
                title: 'Рило-Пирински',
                description:
                    'Рило-Пиринският регион на България е богат на исторически забележителности и туристически атракции, включително 23 общини. Регионът е известен с разнообразния си ландшафт, вариращ от Рилския манастир, който е един от най-големите и известни източноправославни манастири в България, до Националния парк Пирин, който е обект на световното наследство на ЮНЕСКО. Районът също така се гордее с множество термални бани и ски курорти, предлагащи на посетителите набор от преживявания през цялата година. Освен това регионът е пропит с история, с древни крепости и руини, които са запазени и са отворени за изследване.'
            },
            en: {
                title: 'Rila-Pirin',
                description:
                    'The Rila-Pirin region of Bulgaria is rich in historical landmarks and tourist attractions, including 23 municipalities. The region is known for its diverse landscape, ranging from the Rila Monastery, which is one of the largest and most famous Eastern Orthodox monasteries in Bulgaria, to the Pirin National Park, which is a UNESCO World Heritage Site. The area also boasts numerous thermal baths and ski resorts, offering visitors a range of experiences year-round. Additionally, the region is steeped in history, with ancient fortresses and ruins that have been preserved and are open for exploration.'
            }
        },
        localities: [
            {
                slug: 'bansko',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Банско',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Bansko',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'belitsa',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Белица',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Belitsa',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'belovo',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Белово',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Belovo',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'blagoevgrad',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Благоевград',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Blagoevgrad',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'boboshevo',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Бобошево',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Boboshevo',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'gotse-delchev',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Гоце Делчев',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Gotse Delchev',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'garmen',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Гърмен',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Garmen',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'dolna-banya',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Долна баня',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Dolna Banya',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'dupnitsa',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Дупница',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Dupnitsa',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'kostenets',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Костенец',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Kostenets',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'kocherinovo',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Кочериново',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Kocherinovo',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'kresna',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Кресна',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Kresna',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'petrich',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Петрич',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Petrich',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'razlog',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Разлог',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Razlog',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'rila',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Рила',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Rila',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'samokov',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Самоков',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Samokov',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'sandanski',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Сандански',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Sandanski',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'sapareva-banya',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Сапарева баня',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Sapareva Banya',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'satovcha',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Сатовча',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Satovcha',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'simitli',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Симитли',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Simitli',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'strumyani',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Струмяни',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Strumyani',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'hadzhidimovo',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Хаджидимово',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Hadzhidimovo',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'yakoruda',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Якоруда',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Yakoruda',
                        description: 'placeholder text'
                    }
                }
            }
        ]
    },
    {
        slug: 'rhodopes',
        image: '/images/regions/rhodopes.jpg',
        places_count: Math.floor(Math.random() * 100),
        locale: {
            bg: {
                title: 'Родопите',
                description:
                    'Родопите в България са известни с богатото си културно-историческо наследство. Районът включва 27 общини и е дом на много интересни забележителности. Някои от тези забележителности са археологически обекти, културни и религиозни паметници и природни забележителности като живописни планини, езера и пещери. Регионът също така може да се похвали с добре запазени традиции и обичаи, като през цялата година се провеждат много местни фестивали и събития.'
            },
            en: {
                title: 'Rhodopes',
                description:
                    'The Rhodope Mountain region of Bulgaria is known for its rich cultural and historical heritage. The area includes 27 municipalities and is home to many interesting landmarks. Some of these landmarks are archaeological sites, cultural and religious monuments, and natural attractions such as scenic mountains, lakes, and caves. The region also boasts well-preserved traditions and customs, with many local festivals and events being held throughout the year.'
            }
        },
        localities: [
            {
                slug: 'ardino',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Ардино',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Ardino',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'asenovgrad',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Асеновград',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Asenovgrad',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'banite',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Баните',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Banite',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'batak',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Батак',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Batak',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'borino',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Борино',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Borino',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'bratsigovo',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Брацигово',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Bratsigovo',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'velingrad',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Велинград',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Velingrad',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'devin',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Девин',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Devin',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'dzhebel',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Джебел',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Dzhebel',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'dospat',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Доспат',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Dospat',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'zlatograd',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Златоград',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Zlatograd',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'ivaylovgrad',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Ивайловград',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Ivaylovgrad',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'kirkovo',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Кирково',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Kirkovo',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'krumovgrad',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Крумовград',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Krumovgrad',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'kuklen',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Куклен',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Kuklen',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'kardzhali',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Кърджали',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Kardzhali',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'laki',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Лъки',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Laki',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'madan',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Мадан',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Madan',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'madzharovo',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Маджарово',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Madzharovo',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'momchilgrad',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Момчилград',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Momchilgrad',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'nedelino',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Неделино',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Nedelino',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'rakitovo',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Ракитово',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Rakitovo',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'rodopi',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Родопи',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Rodopi',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'rudozem',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Рудозем',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Rudozem',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'smolyan',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Смолян',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Smolyan',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'chepelare',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Чепеларе',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Chepelare',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'chernoochene',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Черноочене',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Chernoochene',
                        description: 'placeholder text'
                    }
                }
            }
        ]
    },
    {
        slug: 'danube',
        image: '/images/regions/danube.jpg',
        places_count: Math.floor(Math.random() * 100),
        locale: {
            bg: {
                title: 'Дунавски',
                description:
                    'Дунавският туристически район на България включва 67 общини и разполага с много исторически забележителности. Някои от най-важните и забележителни атракции включват древни крепости, църкви и манастири. Много от тези обекти имат значителна културна и историческа стойност, тъй като съществуват от векове. Регионът е известен със своите живописни пейзажи и уникална комбинация от история, култура и природна красота, което го прави популярна дестинация както за туристи, така и за любители на историята.'
            },
            en: {
                title: 'Danube',
                description:
                    'The Danube tourist region of Bulgaria includes 67 municipalities and features many historical landmarks. Some of the most important and notable attractions include ancient fortresses, churches, and monasteries. Many of these sites have significant cultural and historical value, having been in existence for centuries. The region is known for its picturesque landscapes and unique blend of history, culture, and natural beauty, making it a popular destination for tourists and history buffs alike.'
            }
        },
        localities: [
            {
                slug: 'alfatar',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Алфатар',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Alfatar',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'belene',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Белене',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Belene',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'belogradchik',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Белоградчик',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Belogradchik',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'boynitsa',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Бойница',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Boynitsa',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'boychinovtsi',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Бойчиновци',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Boychinovtsi',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'borovan',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Борован',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Borovan',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'borovo',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Борово',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Borovo',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'bregovo',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Брегово',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Bregovo',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'brusartsi',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Брусарци',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Brusartsi',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'byala-slatina',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Бяла Слатина',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Byala Slatina',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'byala',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Бяла',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Byala',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'venets',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Венец',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Venets',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'vetovo',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Ветово',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Vetovo',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'glavinitsa',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Главиница',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Glavinitsa',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'vidin',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Видин',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Vidin',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'valchedram',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Вълчедръм',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Valchedram',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'gramada',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Грамада',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Gramada',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'gulianitsi',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Гулянци',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Gulianitsi',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'dve-mogili',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Две могили',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Dve Mogili',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'dimovo',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Димово',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Dimovo',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'dolna-mitropoliya',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Долна Митрополия',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Dolna Mitropoliya',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'dolni-dabnik',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Долни Дъбник',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Dolni Dabnik',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'dulovo',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Дулово',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Dulovo',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'zavet',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Завет',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Zavet',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'ivanovo',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Иваново',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Ivanovo',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'iskur',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Искър',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Iskur',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'isperih',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Исперих',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Isperih',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'Kaynardzha',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Кайнарджа',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Kaynardzha',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'kaolinovo',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Каолиново',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Kaolinovo',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'knezha',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Кнежа',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Knezha',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'kozloduy',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Козлодуй',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Kozloduy',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'kubrat',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Кубрат',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Kubrat',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'kula',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Кула',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Kula',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'levski',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Левски',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Levski',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'letnitsa',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Летница',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Letnitsa',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'loznitsa',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Лозница',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Loznitsa',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'lom',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Лом',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Lom',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'makresh',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Макреш',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Makresh',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'medkovets',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Медковец',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Medkovets',
                        description: 'placeholder text'
                    }
                }
            },

            {
                slug: 'mizia',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Мизия',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Mizia',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'nikola-kozlevo',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Никола Козлево',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Nikola Kozlevo',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'nikopol',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Никопол',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Nikopol',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'novo-selo',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Ново село',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Novo Selo',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'opaka',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Опака',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Opaka',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'oryahovo',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Оряхово',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Oryahovo',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'pavlikeni',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Павликени',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Pavlikeni',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'pleven',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Плевен',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Pleven',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'pordim',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Пордим',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Pordim',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'polski-trambesh',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Полски Тръмбеш',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Polski Trambesh',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'popovo',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Попово',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Popovo',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'razgrad',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Разград',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Razgrad',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'ruzhentsi',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Ружинци',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Ruzhentsi',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'ruse',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Русе',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Ruse',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'samuil',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Самуил',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Samuil',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'svishtov',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Свищов',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Svishtov',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'silistra',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Силистра',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Silistra',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'sitovo',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Ситово',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Sitovo',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'slivo-pole',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Сливо поле',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Slivo Pole',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'suhindol',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Сухиндол',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Suhindol',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'tutrakan',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Тутракан',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Tutrakan',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'targovishte',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Търговище',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Targovishte',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'hayredin',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Хайредин',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Hayredin',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'hitrino',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Хитрино',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Hitrino',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'tsar-kaloyan',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Цар Калоян',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Tsar Kaloyan',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'tsenovo',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Ценово',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Tsenovo',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'cherven-bryag',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Червен бряг',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Cherven Bryag',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'yakimovo',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Якимово',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Yakimovo',
                        description: 'placeholder text'
                    }
                }
            }
        ]
    },
    {
        slug: 'varna-black-sea',
        image: '/images/regions/varna-black-sea.jpg',
        places_count: Math.floor(Math.random() * 100),
        locale: {
            bg: {
                title: 'Варненско черноморие',
                description:
                    'Варненското черноморие е туристически регион в България, който включва 24 общини и предлага редица исторически забележителности. Регионът е разположен по крайбрежието на Черно море и е известен със зашеметяващата си природна красота, както и с богатото си културно наследство. Посетителите могат да разгледат множеството древни руини и укрепления, осеяли крайбрежието, да посетят исторически църкви и манастири или просто да се насладят на слънцето на многото девствени плажове в региона. Освен това районът е известен със своя оживен нощен живот и е популярна дестинация за туристи от цял свят.'
            },
            en: {
                title: 'Varna Black Sea Coast',
                description:
                    "The Varna Black Sea Coast is a tourist region in Bulgaria that includes 24 municipalities and offers a number of historic landmarks. The region is located along the Black Sea Coast and is known for its stunning natural beauty, as well as its rich cultural heritage. Visitors can explore the many ancient ruins and fortifications that dot the coastline, visit historic churches and monasteries, or simply soak up the sun on the region's many pristine beaches. Additionally, the area is renowned for its vibrant nightlife, and is a popular destination for tourists from all over the world."
            }
        },
        localities: [
            {
                slug: 'avren',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Аврен',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Avren',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'aksakovo',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Аксаково',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Aksakovo',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'balchik',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Балчик',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Balchik',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'beloslav',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Белослав',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Beloslav',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'byala',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Бяла',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Byala',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'varna',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Варна',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Varna',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'veliki-preslav',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Велики Преслав',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Veliki Preslav',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'vetrino',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Ветрино',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Vetrino',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'valchi-dol',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Вълчи дол',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Valchi Dol',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'general-toshevo',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Генерал Тошево',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'General Toshevo',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'devnya',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Девня',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Devnya',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'dobrich',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Добрич',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Dobrich',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'dolni-chiflik',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Долни чифлик',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Dolni Chiflik',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'dalgopol',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Дългопол',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Dalgopol',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'kavarna',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Каварна',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Kavarna',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'kaspichan',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Каспичан',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Kaspichan',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'krushari',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Крушари',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Krushari',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'novi-pazar',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Нови пазар',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Novi Pazar',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'provadia',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Провадия',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Provadia',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'smyadovo',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Смядово',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Smyadovo',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'suvorovo',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Суворово',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Suvorovo',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'tervel',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Тервел',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Tervel',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'shabla',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Шабла',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Shabla',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'shumen',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Шумен',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Shumen',
                        description: 'placeholder text'
                    }
                }
            }
        ]
    },
    {
        slug: 'bourgas-black-sea',
        image: '/images/regions/bourgas-black-sea.jpg',
        places_count: Math.floor(Math.random() * 100),
        locale: {
            bg: {
                title: 'Бургаско черноморие',
                description:
                    'Бургаското черноморие в България е туристическа зона, която включва 13 общини и е известна със своите красиви плажове, културни забележителности и природни паркове. Някои забележителни атракции включват древни римски руини, средновековни крепости и красивия природен резерват Ропотамо, който е дом на разнообразна флора и фауна. Освен това районът е известен със своите оживени курортни градове и традиционни рибарски селища, както и с богатото си културно наследство и разнообразна местна кухня.'
            },
            en: {
                title: 'Bourgas Black Sea Coast',
                description:
                    'The Burgas Black Sea Coast in Bulgaria is a tourist area that includes 13 municipalities and is known for its beautiful beaches, cultural landmarks, and natural parks. Some notable attractions include ancient Roman ruins, medieval fortresses, and the beautiful Ropotamo Nature Reserve, which is home to a diverse range of flora and fauna. Additionally, the area is known for its bustling resort towns and traditional fishing villages, as well as its rich cultural heritage and vibrant local cuisine.'
            }
        },
        localities: [
            {
                slug: 'aytos',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Айтос',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Aytos',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'bolyarovo',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Болярово',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Bolyarovo',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'Burgas',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Бургас',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Burgas',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'kameno',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Камено',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Kameno',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'karnobat',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Карнобат',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Karnobat',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'malko-tarnovo',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Малко Търново',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Malko Tarnovo',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'nesebar',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Несебър',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Nesebar',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'pomorie',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Поморие',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Pomorie',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'primorsko',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Приморско',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Primorsko',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'ruen',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Руен',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Ruen',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'sozopol',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Созопол',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Sozopol',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'sredets',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Средец',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Sredets',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'tsarevo',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Царево',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Tsarevo',
                        description: 'placeholder text'
                    }
                }
            }
        ]
    },
    {
        slug: 'valley-of-roses',
        image: '/images/regions/valley-of-roses.jpg',
        places_count: Math.floor(Math.random() * 100),
        locale: {
            bg: {
                title: 'Долината на розите',
                description:
                    'Регионът Долината на розите в България е популярна туристическа дестинация, известна с красивите си пейзажи и богато културно наследство. Районът обхваща 19 общини и е дом на множество исторически забележителности и атракции. Много от тези забележителности датират от средновековния и османския период и демонстрират богатата история и културно наследство на региона. Районът е известен и с природната си красота, с вълнисти хълмове, плодородна земеделска земя и девствени гори, които са убежище за ентусиасти на открито и любители на природата. Регионът е уникална дестинация, която предлага по нещо за всеки, от богатото културно наследство до зашеметяващата си природна красота.'
            },
            en: {
                title: 'Тhe Valley of Roses',
                description:
                    "Тhe Valley of Roses region in Bulgaria is a popular tourist destination known for its beautiful landscapes and rich cultural heritage. The area encompasses 19 municipalities and is home to numerous historical landmarks and attractions. Many of these landmarks date back to the medieval and Ottoman periods, and showcase the region's rich history and cultural heritage. The area is also famous for its natural beauty, with rolling hills, fertile farmland, and pristine forests that are a haven for outdoor enthusiasts and nature lovers. Тhe region is a unique destination that offers something for everyone, from its rich cultural heritage to its stunning natural beauty."
            }
        },
        localities: [
            {
                slug: 'anton',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Антон',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Anton',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'zlatitsa',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Златица',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Zlatitsa',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'karlovo',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Карлово',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Karlovo',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'koprivshtitsa',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Копривщица',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Koprivshtitsa',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'mirkovo',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Мирково',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Mirkovo',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'panagyurishte',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Панагюрище',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Panagyurishte',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'pirdop',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Пирдоп',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Pirdop',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'sopot',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Сопот',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Sopot',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'strelcha',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Стрелча',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Strelcha',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'hisarya',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Хисаря',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Hisarya',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'chavdar',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Чавдар',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Chavdar',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'chelopech',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Челопеч',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Chelopech',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'gurkovo',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Гурково',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Gurkovo',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'kazanlak',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Казанлък',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Kazanlak',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'maglizh',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Мъглиж',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Maglizh',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'nikolaevo',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Николаево',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Nikolaevo',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'pavel-banya',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Павел баня',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Pavel Banya',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'sliven',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Сливен',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Sliven',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'tvarditsa',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Твърдица',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Tvarditsa',
                        description: 'placeholder text'
                    }
                }
            }
        ]
    },
    {
        slug: 'stara-planina',
        image: '/images/regions/stara-planina.jpg',
        places_count: Math.floor(Math.random() * 100),
        locale: {
            bg: {
                title: 'Стара Планина',
                description:
                    'Регионът на Стара планина в България, който включва 32 общини, е известен със своята природна красота, исторически и културни забележителности и разнообразни туристически дестинации. Този регион има богата история, датираща от древни времена и е дом на много интересни забележителности, включително средновековни крепости, манастири, църкви и музеи. Има и много възможности за дейности на открито, като туризъм, каране на ски и къмпинг. Естествената красота на региона също е голяма привлекателност за туристите със своите вълнисти хълмове, гъсти гори и чисти реки. Освен това Стара планина е известна със своята уникална местна кухня, традиционни занаяти и оживени културни събития.'
            },
            en: {
                title: 'Stara Planina',
                description:
                    "The region of Stara Planina in Bulgaria, which includes 32 municipalities, is known for its natural beauty, historical and cultural landmarks, and diverse tourist destinations. This region has a rich history dating back to ancient times and is home to many interesting sights, including medieval fortresses, monasteries, churches, and museums. There are also many opportunities for outdoor activities, such as hiking, skiing, and camping. The region's natural beauty is also a big draw for tourists, with its rolling hills, dense forests, and clear rivers. Additionally, Stara Planina is known for its unique local cuisine, traditional crafts, and vibrant cultural events."
            }
        },
        localities: [
            {
                slug: 'antonovo',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Антоново',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Antonovo',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'apriltsi',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Априлци',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Apriltsi',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'berkovitsa',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Берковица',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Berkovitsa',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'veliko-tarnovo',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Велико Търново',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Veliko Tarnovo',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'vratsa',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Враца',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Vratsa',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'varbitsa',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Върбица',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Varbitsa',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'varshets',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Вършец',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Varshets',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'gabrovo',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Габрово',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Gabrovo',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'georgi-damyanovo',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Георги Дамяново',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Georgi Damyanovo',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'gorna-oryahovitsa',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Горна Оряховица',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Gorna Oryahovitsa',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'dryanovo',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Дряново',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Dryanovo',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'elena',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Елена',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Elena',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'zlataritsa',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Златарица',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Zlataritsa',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'kotel',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Котел',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Kotel',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'krivodol',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Криводол',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Krivodol',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'lovech',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Ловеч',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Lovech',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'lukovit',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Луковит',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Lukovit',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'lyaskovets',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Лясковец',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Lyaskovets',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'mezdra',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Мездра',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Mezdra',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'montana',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Монтана',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Montana',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'omurtag',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Омуртаг',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Omurtag',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'roman',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Роман',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Roman',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'sevlievo',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Севлиево',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Sevlievo',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'strazhitsa',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Стражица',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Strazhitsa',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'sungurlare',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Сунгурларе',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Sungurlare',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'teteven',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Тетевен',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Teteven',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'troyan',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Троян',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Troyan',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'tryavna',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Трявна',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Tryavna',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'ugarchin',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Угърчин',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Ugarchin',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'chiprovtsi',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Чипровци',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Chiprovtsi',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'chuprene',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Чупрене',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Chuprene',
                        description: 'placeholder text'
                    }
                }
            },
            {
                slug: 'yablanitsa',
                places_count: Math.floor(Math.random() * 100),
                locale: {
                    bg: {
                        title: 'Ябланица',
                        description: 'placeholder text'
                    },
                    en: {
                        title: 'Yablanitsa',
                        description: 'placeholder text'
                    }
                }
            }
        ]
    }
]

export default regions
