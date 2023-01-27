import i18n from '../locales/index.js'

import getNextFiveDays from '@/helpers/getNextFiveDays'

let locale = i18n.locale

const places = [
    {
        id: 1,
        slug: 'sveti-aleksandar-nevski',
        image: '/images/photos/1.jpg',
        photos: [
            {
                id: 1,
                image: '/images/photos/1-1.jpg',
                author: 'Министерство на туризма на Република България',
                date_added: 1670777697
            },
            {
                id: 2,
                image: '/images/photos/1-2.jpg',
                author: 'Министерство на туризма на Република България',
                date_added: 1670777697
            },
            {
                id: 3,
                image: '/images/photos/1-3.jpg',
                author: 'Министерство на туризма на Република България',
                date_added: 1670777697
            },
            {
                id: 4,
                image: '/images/photos/1-4.jpg',
                author: 'Министерство на туризма на Република България',
                date_added: 1670777697
            }
        ],
        locale: {
            bg: {
                title: 'Храм-паметник "Свети Александър Невски"',
                location: 'гр. София'
            },
            en: {
                title: 'St. Alexander Nevsky Temple-Monument',
                location: 'Sofia City'
            }
        },
        user_score: 4.8,
        reviews_count: 125,
        visitors: 3255,
        category: {
            id: 1,
            slug: 'architecture',
            locale: {
                bg: {
                    title: 'Архитектура'
                },
                en: {
                    title: 'Architecture'
                }
            }
        },
        region: {
            id: 1,
            slug: 'sofia',
            locale: {
                bg: {
                    title: 'София'
                },
                en: {
                    title: 'Sofia'
                }
            }
        },
        district: {
            id: 1,
            slug: 'sofia',
            locale: {
                bg: {
                    title: 'София'
                },
                en: {
                    title: 'Sofia'
                }
            }
        },
        unesco: true,
        weather: [
            {
                date: getNextFiveDays(locale)[0],
                state: 'cloudy',
                temperature: [2, -3] // 0 = day, 1 = night
            },
            {
                date: getNextFiveDays(locale)[1],
                state: 'snow',
                temperature: [9, 1]
            },
            {
                date: getNextFiveDays(locale)[2],
                state: 'windy-cloudy',
                temperature: [12, 4]
            },
            {
                date: getNextFiveDays(locale)[3],
                state: 'snow',
                temperature: [14, 6]
            },
            {
                date: getNextFiveDays(locale)[4],
                state: 'partly-sunny',
                temperature: [9, -2]
            }
        ],
        coords: {
            latitude: 42.69577,
            longitude: 23.33286
        },
        altitude: 559,
        contents: [
            {
                id: 1,
                authors: [
                    {
                        id: 1,
                        names: 'Том Атанасов',
                        photo: 'https://gravatar.com/avatar/101ecaaeb9247c0da0285d295c2a2e80?size=30'
                    }
                ],
                locale: {
                    bg: {
                        title: 'Кратко резюме',
                        text: '<p>Храм-паметникът "Свети Александър Невски" в София, България, е религиозна сграда, построена в началото на 20-ти век в чест на средновековния руски княз Александър Невски. Тя е ярък образец на българската възрожденска архитектура и е най-голямата източноправославна катедрала на Балканите. Историята на храм-паметника датира от края на 19 век, когато България се стреми да утвърди своята национална идентичност. Строежът на храма започва през 1882 г. и завършва през 1912 г. Проектът е финансиран от руския цар Александър II. В криптата на храм-паметника се съхраняват тленните останки на български народни герои. Тук се намира и Българската академия на науките.</p>'
                    },
                    en: {
                        title: 'Summary',
                        text: "<p>The Saint Alexander Nevsky Temple-Monument in Sofia, Bulgaria is a religious building built in the early 20th century in tribute to the medieval Russian prince Alexander Nevsky. It is a striking example of Bulgarian National Revival architecture and is the largest Eastern Orthodox cathedral in the Balkans. The temple-monument's history dates back to the late 19th century when Bulgaria was seeking to establish its own national identity. Construction of the temple began in 1882 and was completed in 1912. The project was funded by the Russian Tsar Alexander II. The temple-monument's crypt contains the remains of Bulgarian national heroes. It is also home to the Bulgarian Academy of Sciences.</p>"
                    }
                }
            },
            {
                id: 2,
                authors: [
                    {
                        id: 1,
                        names: 'Том Атанасов',
                        photo: 'https://gravatar.com/avatar/101ecaaeb9247c0da0285d295c2a2e80?size=30'
                    },
                    {
                        id: 2,
                        names: 'Александър Найденов',
                        photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=30'
                    }
                ],
                locale: {
                    bg: {
                        title: 'История',
                        text: '<p>Храм-паметникът Свети Александър Невски в София, България е красива и емблематична религиозна сграда, разположена в сърцето на града. Построена в началото на 20-и век, тази източноправославна църква е в знак на почит към средновековния руски княз Александър Невски, който се слави с военните си победи над нахлуващите тевтонски рицари.</p><p>Храм-паметникът е ярък образец на българската възрожденска архитектура със своите високи златни куполи и сложна резба. Това е най-голямата източноправославна катедрала на Балканите и нейното величие и красота я правят задължителна дестинация за посетителите на София.</p><p>Историята на храм-паметника „Свети Александър Невски“ датира от края на 19 век, когато българският народ се стреми да утвърди своята национална идентичност и да се освободи от властта на Османската империя. Руският княз Александър Невски е възприеман като герой, който успешно е защитил своя народ от чужди нашественици и затова е избран за символ на българската борба за независимост.</p><p>Строежът на храм-паметника започва през 1882 г., а официално е завършен през 1912 г. Проектът е финансиран от руския цар Александър II, който иска да почете своя съименник и да подкрепи българския народ в стремежа му към независимост.</p><p>Храм-паметникът се намира на хълм в центъра на София, като местоположението му е внимателно подбрано, за да бъде лесно видимо и достъпно за хората от града. Интериорът на храма е също толкова впечатляващ, колкото и екстериорът, със своите богато украсени фрески, красиви витражи и сложни дърворезби. Главният олтар на храма е посветен на Свети Александър Невски, има и параклис, посветен на Света София, покровителката на града.</p><p>Една от най-интересните особености на храм-паметника „Свети Александър Невски“ е неговата крипта, в която се съхраняват тленните останки на български национални герои и други важни личности. Първоначално криптата е била предназначена да бъде последното място за почивка на самия княз Александър Невски, но тленните му останки така и не са пренесени в София. Вместо това криптата е дом на други герои от българския народ, включително революционера Васил Левски и поета Христо Ботев.</p><p>Освен своето религиозно и историческо значение, храм-паметникът „Свети Александър Невски“ е и важна културна и художествена забележителност в София. В храм-паметника се помещава Българската академия на науките, която е създадена през 1869 г. и е най-старото и престижно висше учебно заведение в страната. Академията се помещава в красива сграда до храма, а нейните членове са сред най-уважаваните учени и изследователи в България.</p><p>Храм-паметникът „Свети Александър Невски“ е красив и вдъхновяващ пример за българската възрожденска архитектура и е задължителна дестинация за всеки, който посети София. Неговата богата история, красив дизайн и важно културно и религиозно значение го правят истинско съкровище на града.</p>'
                    },
                    en: {
                        title: 'History',
                        text: "<p>The Saint Alexander Nevsky Temple-Monument in Sofia, Bulgaria is a beautiful and iconic religious building located in the heart of the city. Built in the early 20th century, this Eastern Orthodox church is a tribute to the medieval Russian prince Alexander Nevsky, who is celebrated for his military victories over the invading Teutonic Knights.</p><p>The temple-monument is a striking example of Bulgarian National Revival architecture, with its tall golden domes and intricate carvings. It is the largest Eastern Orthodox cathedral in the Balkans, and its grandeur and beauty make it a must-see destination for visitors to Sofia.</p><p>The history of the Saint Alexander Nevsky Temple-Monument dates back to the late 19th century, when the Bulgarian people were seeking to establish their own national identity and break free from the rule of the Ottoman Empire. The Russian prince Alexander Nevsky was seen as a hero who had successfully defended his people against foreign invaders, and so he was chosen as the symbol of the Bulgarian struggle for independence.</p><p>Construction of the temple-monument began in 1882, and it was officially completed in 1912. The project was funded by the Russian Tsar Alexander II, who wanted to honor his namesake and support the Bulgarian people in their quest for independence.</p><p>The temple-monument is located on a hill in the center of Sofia, and its location was carefully chosen to be easily visible and accessible to the people of the city. The interior of the temple is just as impressive as the exterior, with its ornate frescoes, beautiful stained glass windows, and intricate carvings. The main altar of the temple is dedicated to Saint Alexander Nevsky, and there is also a chapel dedicated to Saint Sofia, the patron saint of the city.</p><p>One of the most interesting features of the Saint Alexander Nevsky Temple-Monument is its crypt, which contains the remains of Bulgarian national heroes and other important figures. The crypt was originally intended to be the final resting place of Prince Alexander Nevsky himself, but his remains were never brought to Sofia. Instead, the crypt is home to the remains of other heroes of the Bulgarian people, including the revolutionary Vasil Levski and the poet Hristo Botev.</p><p>In addition to its religious and historical significance, the Saint Alexander Nevsky Temple-Monument is also an important cultural and artistic landmark in Sofia. The temple-monument is home to the Bulgarian Academy of Sciences, which was established in 1869 and is the country's oldest and most prestigious institution of higher learning. The academy is housed in a beautiful building adjacent to the temple, and its members are among the most respected scholars and researchers in Bulgaria.</p><p>The Saint Alexander Nevsky Temple-Monument is a beautiful and inspiring example of Bulgarian National Revival architecture, and it is a must-see destination for anyone visiting Sofia. Its rich history, beautiful design, and important cultural and religious significance make it a true treasure of the city.</p>"
                    }
                }
            }
        ],
        reviews: [
            {
                id: 1,
                author: {
                    id: 1,
                    names: 'Том Атанасов',
                    photo: 'https://gravatar.com/avatar/101ecaaeb9247c0da0285d295c2a2e80?size=40'
                },
                rating: 5,
                date_added: 1660815374000,
                comment:
                    'Храм-паметникът "Свети Александър Невски" в София е впечатляваща и красива православна катедрала. Трябва да се види, когато посещавате града.',
                comment_language: 'bg',
                attachment: {
                    source: '1-2.jpg',
                    ratio: 'normal',
                    type: 'photo'
                }
            },
            {
                id: 2,
                author: {
                    id: 2,
                    names: 'Александър Найденов',
                    photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40'
                },
                rating: 4,
                date_added: 1685017043000,
                comment:
                    'Бях поразен от величието на храм-паметника "Свети Александър Невски" в София. Златните куполи и сложните детайли по екстериора са наистина зашеметяващи.',
                comment_language: 'bg',
                attachment: {
                    source: null,
                    ratio: null,
                    type: null
                }
            },
            {
                id: 3,
                author: {
                    id: 3,
                    names: 'Петър Георгиев',
                    photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40'
                },
                rating: 5,
                date_added: 1685017043000,
                comment:
                    'Интериорът на храм-паметника "Свети Александър Невски" в София е също толкова впечатляващ, колкото и екстериорът. Стенописите и иконите спират дъха, а атмосферата е спокойна.',
                comment_language: 'bg',
                attachment: {
                    source: null,
                    ratio: null,
                    type: null
                }
            },
            {
                id: 4,
                author: {
                    id: 4,
                    names: 'Пламен Калайджиев',
                    photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40'
                },
                rating: 5,
                date_added: 1685017043000,
                comment:
                    'Горещо препоръчвам да го посетите, дори и да не сте особено религиозни. Архитектурата и историята на катедралата я превръщат в завладяващо културно преживяване.',
                comment_language: 'bg',
                attachment: {
                    source: 'https://i.ytimg.com/vi/uRKF_tGUhZw/hqdefault.jpg',
                    ratio: null,
                    type: 'video'
                }
            },
            {
                id: 5,
                author: {
                    id: 5,
                    names: 'Георги Йорданов',
                    photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40'
                },
                rating: 2,
                date_added: 1685017043000,
                comment:
                    'Разочарован съм от посещението си. Екстериорът беше хубав, но интериорът не беше впечатляващ и не беше добре поддържан. Не оправда очакванията ми.',
                comment_language: 'bg',
                attachment: {
                    source: '1-5.jpg',
                    ratio: 'invert',
                    type: 'photo'
                }
            },
            {
                id: 5,
                author: {
                    id: 5,
                    names: 'Мария Величкова',
                    photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40'
                },
                rating: 5,
                date_added: 1685017043000,
                comment:
                    'Едно от най-хубавите неща за храма е местоположението. Разположен е на хълм с изглед към града, осигуряващ спираща дъха гледка от територията.',
                comment_language: 'bg',
                attachment: {
                    source: null,
                    ratio: null,
                    type: null
                }
            }
        ]
    },
    {
        id: 2,
        slug: 'tsarevets',
        image: '/images/photos/2.jpg',
        photos: [
            {
                id: 1,
                image: '/images/photos/2-1.jpg',
                author: 'Архитектурно-музеен резерват "Царевец"',
                date_added: 1670777697
            },
            {
                id: 2,
                image: '/images/photos/2-2.jpg',
                author: 'Архитектурно-музеен резерват "Царевец"',
                date_added: 1670777697
            },
            {
                id: 3,
                image: '/images/photos/2-3.jpg',
                author: 'Архитектурно-музеен резерват "Царевец"',
                date_added: 1670777697
            },
            {
                id: 4,
                image: '/images/photos/2-4.jpg',
                author: 'Архитектурно-музеен резерват "Царевец"',
                date_added: 1670777697
            }
        ],
        locale: {
            bg: {
                title: 'Крепост "Царевец"',
                location: 'гр. Велико Търново'
            },
            en: {
                title: 'Tsarevets Fortress',
                location: 'Veliko Tarnovo City'
            }
        },
        user_score: 4.4,
        reviews_count: 262,
        visitors: 1853,
        category: {
            id: 1,
            slug: 'architecture',
            locale: {
                bg: {
                    title: 'Архитектура'
                },
                en: {
                    title: 'Architecture'
                }
            }
        },
        region: {
            id: 1,
            slug: 'stara-planina',
            locale: {
                bg: {
                    title: 'Стара Планина'
                },
                en: {
                    title: 'Stara Planina'
                }
            }
        },
        district: {
            id: 1,
            slug: 'veliko-tarnovo',
            locale: {
                bg: {
                    title: 'Велико Търново'
                },
                en: {
                    title: 'Veliko Tarnovo'
                }
            }
        },
        unesco: false,
        weather: [
            {
                date: getNextFiveDays(locale)[0],
                state: 'cloudy',
                temperature: [2, -3] // 0 = day, 1 = night
            },
            {
                date: getNextFiveDays(locale)[1],
                state: 'snow',
                temperature: [9, 1]
            },
            {
                date: getNextFiveDays(locale)[2],
                state: 'windy-cloudy',
                temperature: [12, 4]
            },
            {
                date: getNextFiveDays(locale)[3],
                state: 'snow',
                temperature: [14, 6]
            },
            {
                date: getNextFiveDays(locale)[4],
                state: 'partly-sunny',
                temperature: [9, -2]
            }
        ],
        coords: {
            latitude: 43.16662,
            longitude: 23.48327
        },
        altitude: 152,
        contents: [
            {
                id: 1,
                authors: [
                    {
                        id: 1,
                        names: 'Том Атанасов',
                        photo: 'https://gravatar.com/avatar/101ecaaeb9247c0da0285d295c2a2e80?size=30'
                    }
                ],
                locale: {
                    bg: {
                        title: 'Кратко резюме',
                        text: '<p>Крепостта Царевец е средновековна крепост, разположена във Велико Търново, България. Построен е през 12 век от Второто българско царство и е служил за основна резиденция на българските императори и духовен и политически център на империята. Крепостта е била защитена от масивна стена и няколко кули, а в стените й са били разположени царският дворец, патриаршеският дворец и редица други важни сгради. Крепостта играе решаваща роля в българската история, особено през 13 век, когато империята е в разцвета на своята мощ. През 14 век обаче крепостта пада под нашествието на османските турци, което бележи края на Второто българско царство. Въпреки загубата си от османците, крепостта Царевец остава важен символ на българската идентичност и съпротива. Днес той е основна туристическа атракция, привличаща посетители от цял свят, за да изследват историята му и да се любуват на впечатляващата му архитектура. Крепостта е частично реставрирана и сега е дом на редица музеи и експонати, както и звуково и светлинно шоу, което оживява нейната история.</p>'
                    },
                    en: {
                        title: 'Summary',
                        text: '<p>Tsarevets Fortress is a medieval fortress located in Veliko Tarnovo, Bulgaria. It was built in the 12th century by the Second Bulgarian Empire and served as the primary residence of the Bulgarian emperors and the spiritual and political center of the empire. The fortress was protected by a massive wall and several towers, and within its walls were located the palace of the tsar, the patriarchal palace, and a number of other important buildings. The fortress played a crucial role in Bulgarian history, particularly during the 13th century, when the empire was at the height of its power. However, in the 14th century, the fortress fell to the invading Ottoman Turks, marking the end of the Second Bulgarian Empire. Despite its loss to the Ottomans, Tsarevets Fortress remained an important symbol of Bulgarian identity and resistance. Today, it is a major tourist attraction, drawing visitors from all over the world to explore its history and admire its impressive architecture. The fortress has been partially restored and is now home to a number of museums and exhibits, as well as a sound and light show that brings its history to life.</p>'
                    }
                }
            },
            {
                id: 2,
                authors: [
                    {
                        id: 1,
                        names: 'Том Атанасов',
                        photo: 'https://gravatar.com/avatar/101ecaaeb9247c0da0285d295c2a2e80?size=30'
                    },
                    {
                        id: 2,
                        names: 'Александър Найденов',
                        photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=30'
                    }
                ],
                locale: {
                    bg: {
                        title: 'История',
                        text: '<p>Крепостта Царевец, разположена в древния град Велико Търново в България, е ярък пример за средновековна архитектура и мощен символ на българската идентичност и история.</p><p>Крепостта е построена през 12 век от Второто българско царство, по времето на цар Иван Асен II. Той е бил основна резиденция на българските императори и духовен и политически център на империята. Крепостта е била защитена от масивна стена и няколко кули, а в нейните стени са били разположени дворецът на царя, патриаршеският дворец и редица други важни сгради.</p><p>Крепостта Царевец е изиграла решаваща роля в Българската история, особено през 13 век, когато империята е в разцвета си. Крепостта е била място на няколко битки, включително успешната отбрана срещу Византийската империя през 1230 г. Въпреки това през 14 век крепостта пада от нахлуващите османски турци, отбелязвайки края на Второто българско царство.</p><p>Въпреки загубата си от османците, крепостта Царевец остава важен символ на българската идентичност и съпротива. През 19-ти и началото на 20-ти век, по време на Възраждането, крепостта се превръща в символ на българската борба за независимост от Османската империя.</p><p>Днес крепостта Царевец е основна туристическа атракция във Велико Търново, привлича посетители от цял свят, за да изследват историята му и да се възхищават на впечатляващата му архитектура. Крепостта е частично реставрирана и сега е дом на редица музеи и експонати, както и звуково и светлинно шоу, което оживява нейната история.</p><p>Една от най-забележителните характеристики на крепостта е патриаршеската църква "Св. Възнесение Господне", разположена на върха на хълма. Тази църква е построена през 13 век и е служила като главна църква на българските патриарси. Църквата е разрушена от османците през 14-ти век, но оттогава е реконструирана и възстановена.</p><p>Друга важна характеристика на крепостта е Балдуиновата кула, кръстена на латинския император Балдуин I, който е пленен от българи и е задържан там за кратко време. Тази кула е била използвана като затвор по време на Второто българско царство и като основна отбранителна структура по време на битки.</p><p>Освен историческото си значение, крепостта Царевец предлага и невероятна гледка към околния град и околностите. Посетителите могат да се изкачат до върха на хълма, за да се насладят на панорамната гледка или да разгледат криволичещите улички и тесни улички на крепостта, които предлагат поглед към ежедневието на средновековните жители.</p><p>Като архитектурен и исторически паметник, крепостта Царевец е задължителна дестинация за всеки, който посети Велико Търново. Неговата богата история, впечатляваща архитектура и спиращи дъха гледки го превръщат в истинска съкровищница на българската култура и наследство.</p>'
                    },
                    en: {
                        title: 'History',
                        text: "<p>Tsarevets Fortress, located in the ancient city of Veliko Tarnovo in Bulgaria, is a striking example of medieval architecture and a powerful symbol of Bulgarian identity and history.</p><p>The fortress was built in the 12th century by the Second Bulgarian Empire, during the reign of Tsar Ivan Asen II. It served as the primary residence of the Bulgarian emperors and the spiritual and political center of the empire. The fortress was protected by a massive wall and several towers, and within its walls were located the palace of the tsar, the patriarchal palace, and a number of other important buildings.</p><p>Tsarevets Fortress played a crucial role in Bulgarian history, particularly during the 13th century, when the empire was at the height of its power. The fortress was the site of several battles, including the successful defense against the Byzantine Empire in 1230. However, in the 14th century, the fortress fell to the invading Ottoman Turks, marking the end of the Second Bulgarian Empire.</p><p>Despite its loss to the Ottomans, Tsarevets Fortress remained an important symbol of Bulgarian identity and resistance. In the 19th and early 20th centuries, during the Bulgarian National Revival, the fortress became a symbol of the Bulgarian struggle for independence from the Ottoman Empire.</p><p>Today, Tsarevets Fortress is a major tourist attraction in Veliko Tarnovo, drawing visitors from all over the world to explore its history and admire its impressive architecture. The fortress has been partially restored and is now home to a number of museums and exhibits, as well as a sound and light show that brings its history to life.</p><p>One of the most striking features of the fortress is the Patriarchal Church of the Holy Ascension, located on the summit of the hill. This church was built in the 13th century and served as the main church of the Bulgarian patriarchs. The church was destroyed by the Ottomans in the 14th century, but has since been reconstructed and restored.</p><p>Another important feature of the fortress is the Baldwin's Tower, named after the Latin Emperor Baldwin I who was captured by the Bulgarians and was kept there for a short time. This tower was used as a prison during the Second Bulgarian Empire and as a primary defensive structure during battles.</p><p>In addition to its historical significance, Tsarevets Fortress also offers stunning views of the surrounding city and countryside. Visitors can climb to the top of the hill to take in the panoramic view, or explore the fortress's winding streets and narrow alleys, which offer a glimpse into the daily life of the medieval inhabitants.</p><p>As an architectural and historical monument, Tsarevets Fortress is a must-see destination for anyone visiting Veliko Tarnovo. Its rich history, impressive architecture, and breathtaking views make it a true treasure of Bulgarian culture and heritage.</p>"
                    }
                }
            }
        ],
        reviews: [
            {
                id: 1,
                author: {
                    id: 1,
                    names: 'Том Атанасов',
                    photo: 'https://gravatar.com/avatar/101ecaaeb9247c0da0285d295c2a2e80?size=40'
                },
                rating: 5,
                date_added: 1660815374000,
                comment:
                    'Наскоро посетих крепостта Царевец и останах очарован от историята и архитектурата. Крепостта е добре запазена и гледките от върха на хълма са направо спиращи дъха. Горещо препоръчвам да идете по време на звуково и светлинно шоу вечерта, тъй като то наистина оживява историята на крепостта. Като цяло, задължителна дестинация във Велико Търново!',
                comment_language: 'bg',
                attachment: {
                    source: '2-2.jpg',
                    ratio: 'normal',
                    type: 'photo'
                }
            },
            {
                id: 2,
                author: {
                    id: 2,
                    names: 'Александър Найденов',
                    photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40'
                },
                rating: 4,
                date_added: 1685017043000,
                comment:
                    'Крепостта Царевец е задължителна дестинация във Велико Търново. Крепостта е добре запазена и предлага много за разглеждане. Звуково-светлинното шоу вечер е задължително. Крепостта предлага поглед към историята на Второто българско царство и е мощен символ на българската идентичност и съпротива. Като цяло имах страхотно изживяване и горещо го препоръчвам на всеки, който посети Велико Търново.',
                comment_language: 'bg',
                attachment: {
                    source: null,
                    ratio: null,
                    type: null
                }
            },
            {
                id: 3,
                author: {
                    id: 3,
                    names: 'Петър Георгиев',
                    photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40'
                },
                rating: 2,
                date_added: 1685017043000,
                comment:
                    'Наскоро посетих крепостта Царевец и останах доста разочарован от преживяването си. Крепостта е впечатляваща, но тълпите бяха огромни и беше трудно да се насладите напълно на изживяването. Персоналът също изглеждаше незаинтересован да предоставя информация за историята на крепостта. Като цяло си заслужава да се посети, но не бих си дал труда да го видя отново.',
                comment_language: 'bg',
                attachment: {
                    source: null,
                    ratio: null,
                    type: null
                }
            },
            {
                id: 4,
                author: {
                    id: 4,
                    names: 'Пламен Калайджиев',
                    photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40'
                },
                rating: 5,
                date_added: 1685017043000,
                comment:
                    'Много ме впечатли реставрацията на крепостта Царевец. Крепостта е в отлично състояние и предлага много за разглеждане и изследване. Особено ми хареса да посетя патриаршеската църква „Свето Възнесение Господне“ и да се запозная с нейната история. Препоръчвам също да идете по време на звуково и светлинно шоу вечерта, беше наистина невероятно изживяване.',
                comment_language: 'bg',
                attachment: {
                    source: 'https://i.ytimg.com/vi/uRKF_tGUhZw/hqdefault.jpg',
                    ratio: null,
                    type: 'video'
                }
            },
            {
                id: 5,
                author: {
                    id: 5,
                    names: 'Георги Йорданов',
                    photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40'
                },
                rating: 2,
                date_added: 1685017043000,
                comment:
                    'Бях наистина развълнуван да посетя крепостта Царевец, но бях разочарован от тълпите и липсата на предоставена информация. Самата крепост е впечатляваща, но беше трудно да я оценя напълно с толкова много хора наоколо. Освен това открих, че персоналът не беше много полезен при предоставянето на информация за историята на крепостта. Като цяло си заслужава посещението, но не бих го поставил като основен приоритет.',
                comment_language: 'bg',
                attachment: {
                    source: '2-5.jpg',
                    ratio: 'normal',
                    type: 'photo'
                }
            },
            {
                id: 5,
                author: {
                    id: 5,
                    names: 'Мария Величкова',
                    photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40'
                },
                rating: 5,
                date_added: 1685017043000,
                comment:
                    'Крепостта Царевец беше един от акцентите в пътуването ми до България. Крепостта е добре запазена и предлага поглед към историята на Второто българско царство. Насладих се на аудио обиколката, която предостави много информация за историята на крепостта и хората, които са живели там. Определено бих препоръчала посещение на крепостта Царевец на всеки, който се интересува от история или архитектура.',
                comment_language: 'bg',
                attachment: {
                    source: null,
                    ratio: null,
                    type: null
                }
            }
        ]
    },
    {
        id: 3,
        slug: 'rilski-manastir',
        image: '/images/photos/3.jpg',
        photos: [
            {
                id: 1,
                image: '/images/photos/3-1.jpg',
                author: 'Андрей Андреев',
                date_added: 1670777697
            },
            {
                id: 2,
                image: '/images/photos/3-2.jpg',
                author: 'Андрей Андреев',
                date_added: 1670777697
            },
            {
                id: 3,
                image: '/images/photos/3-3.jpg',
                author: 'Андрей Андреев',
                date_added: 1670777697
            },
            {
                id: 4,
                image: '/images/photos/3-4.jpg',
                author: 'Андрей Андреев',
                date_added: 1670777697
            }
        ],
        locale: {
            bg: {
                title: 'Манастир "Свети Иван Рилски"',
                location: 'до гр. Рила'
            },
            en: {
                title: 'Rila Monastery Saint Ivan of Rila',
                location: 'next to Rila City'
            }
        },
        user_score: 4.8,
        reviews_count: 436,
        visitors: 4825,
        category: {
            id: 1,
            slug: 'religion',
            locale: {
                bg: {
                    title: 'Религия'
                },
                en: {
                    title: 'Religion'
                }
            }
        },
        region: {
            id: 1,
            slug: 'rila-pirin',
            locale: {
                bg: {
                    title: 'Рила и Пирин'
                },
                en: {
                    title: 'Rila & Pirin'
                }
            }
        },
        district: {
            id: 1,
            slug: 'kyustendil',
            locale: {
                bg: {
                    title: 'Кюстендил'
                },
                en: {
                    title: 'Kyustendil'
                }
            }
        },
        unesco: true,
        weather: [
            {
                date: getNextFiveDays(locale)[0],
                state: 'cloudy',
                temperature: [2, -3] // 0 = day, 1 = night
            },
            {
                date: getNextFiveDays(locale)[1],
                state: 'snow',
                temperature: [9, 1]
            },
            {
                date: getNextFiveDays(locale)[2],
                state: 'windy-cloudy',
                temperature: [12, 4]
            },
            {
                date: getNextFiveDays(locale)[3],
                state: 'snow',
                temperature: [14, 6]
            },
            {
                date: getNextFiveDays(locale)[4],
                state: 'partly-sunny',
                temperature: [9, -2]
            }
        ],
        coords: {
            latitude: 42.12823,
            longitude: 23.13548
        },
        altitude: 164,
        contents: [
            {
                id: 1,
                authors: [
                    {
                        id: 1,
                        names: 'Том Атанасов',
                        photo: 'https://gravatar.com/avatar/101ecaaeb9247c0da0285d295c2a2e80?size=30'
                    }
                ],
                locale: {
                    bg: {
                        title: 'Кратко резюме',
                        text: '<p>Рилският манастир, известен още като Свети Иван Рилски, е красив архитектурен обект, разположен в западната част на България в област Кюстендил. Основан е през 10 век и носи името на своя покровител Свети Иван Рилски, който е бил отшелник и духовен водач в региона през Средновековието. Манастирът достига своя връх през 14-ти и 15-ти век и се превръща в център на обучение и култура, с много известни учени и художници, минаващи през вратите му. Най-значимите промени настъпват през 19 век, когато манастирът е преустроен във възрожденски стил, съчетавайки елементи от средновековния и традиционния български стил. Комплексът включва църквата, жилищните сгради и отбранителните стени. Църквата е основната атракция със своите сложни стенописи и сложна украса, стенописите се считат за едни от най-добрите образци на средновековното българско изкуство. Сега манастирът е част от световното културно наследство на ЮНЕСКО, популярна туристическа дестинация и е истинско съкровище на българската култура и история.</p>'
                    },
                    en: {
                        title: 'Summary',
                        text: '<p>Rila Monastery, also known as Saint Ivan of Rila, is a beautiful architectural site located in the western part of Bulgaria in the Kyustendil province. It was founded in the 10th century, and is named after its patron saint, Saint Ivan of Rila, who was a hermit and a spiritual leader in the region during the Middle Ages. The monastery reached its peak during the 14th and 15th centuries, and became a center of learning and culture, with many famous scholars and artists passing through its doors. The most significant changes occurred in the 19th century, when the monastery was rebuilt in the Bulgarian National Revival style, blending elements of medieval and traditional Bulgarian styles. The complex includes the church, the residential buildings, and the defensive walls. The church is the main attraction with its elaborate frescoes and intricate decoration, the frescoes are considered some of the finest examples of medieval Bulgarian art. The monastery is now a UNESCO World Heritage Site, and a popular tourist destination, and it is a true treasure of Bulgarian culture and history.</p>'
                    }
                }
            },
            {
                id: 2,
                authors: [
                    {
                        id: 1,
                        names: 'Том Атанасов',
                        photo: 'https://gravatar.com/avatar/101ecaaeb9247c0da0285d295c2a2e80?size=30'
                    },
                    {
                        id: 2,
                        names: 'Александър Найденов',
                        photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=30'
                    }
                ],
                locale: {
                    bg: {
                        title: 'История',
                        text: '<p>Рилският манастир, известен още като Свети Иван Рилски, е зашеметяващо архитектурно бижу, разположено в западната част на България в област Кюстендил. Основан през 10 век, той е една от най-важните културно-исторически забележителности в страната. Манастирът носи името на своя покровител Свети Иван Рилски, който е бил отшелник и духовен водач в региона през Средновековието.</p><p>Историята на Рилския манастир е тясно свързана с живота на Св. Иван Рилски. Според легендата той е роден в началото на 9 век в малко селце в Рила планина. От малък той бил привлечен от монашеския начин на живот и прекарал много години като отшелник в планината. Неговата мъдрост и духовни учения привличат много последователи и в крайна сметка около него се сформира малка общност от монаси.</p><p>През 10 век монах на име Хрельо решава да построи манастир на мястото, където е живял Свети Иван като отшелник. Това поставя началото на Рилския манастир, който познаваме днес. Твърди се, че Хрельо е бил воден от Свети Иван в съня си, където светецът му показал местоположението на бъдещия манастир.</p><p>Рилският манастир достига своя разцвет през 14-ти и 15-ти век под управлението на известният български владетел Иван Александър. Той дава на манастира много привилегии и дарява значителна земя, което го прави един от най-богатите манастири в региона. Разцветът на манастира продължава през следващите векове и той се превръща в център на образованието и културата, като много известни учени и художници са минавали през вратите му.</p><p>Рилският манастир е претърпял много промени през вековете, с допълнения и се правят ремонти на оригиналните сгради. Най-значимите промени настъпват през 19 век, когато манастирът е възстановен във възрожденски стил, който се характеризира с богато украсена украса и използване на традиционни български мотиви. Резултатът е зашеметяващ архитектурен шедьовър, който съчетава елементи от средновековен и традиционен български стил.</p><p>Рилският манастир е комплекс от сгради, включващ църквата, жилищните сгради и отбранителните стени. Църквата е основната атракция на манастира със своите сложни стенописи и сложна украса. Стенописите, които датират от 15 век, се считат за едни от най-добрите образци на средновековното българско изкуство и са свидетелство за уменията и таланта на художниците, които са ги създали.</p><p>Жилищните сгради на манастир също си струва да посетите. Те включват килиите на монасите, трапезарията и кухнята. Тези сгради са прости и строги, отразявайки монашеския начин на живот на монасите.</p><p>Отбранителните стени на манастира са построени през 14 век, за да защитят комплекса от нашественици. Стените са дебели и високи, а от кулите се открива страхотна гледка към околния пейзаж.</p><p>През 20 век Рилският манастир е обявен за национален паметник и е грижливо съхраняван и защитен. Днес той е популярна туристическа дестинация и обект на световното културно наследство на ЮНЕСКО, привличащ посетители от цял свят, които идват да се възхитят на неговата архитектурна красота и богата история.</p><p>Рилският манастир е истинско съкровище на българската култура и история. Това е място, където човек може да стане свидетел на красотата на средновековното изкуство и архитектура и да научи за очарователната история на този регион. Манастирът е не само място с религиозно значение, но и културно-историческа забележителност, която трябва да бъде посетена от всеки, който се интересува от историята и културата на България.</p>'
                    },
                    en: {
                        title: 'History',
                        text: "<p>Rila Monastery, also known as Saint Ivan of Rila, is a stunning architectural gem located in the western part of Bulgaria in the Kyustendil province. Founded in the 10th century, it is one of the most important cultural and historical landmarks in the country. The monastery is named after its patron saint, Saint Ivan of Rila, who was a hermit and a spiritual leader in the region during the Middle Ages.</p><p>The history of Rila Monastery is closely linked to the life of Saint Ivan of Rila. According to legend, he was born in the early 9th century in a small village in the Rila Mountains. From a young age, he was drawn to a monastic lifestyle and spent many years living as a hermit in the mountains. His wisdom and spiritual teachings attracted many followers, and eventually, a small community of monks formed around him.</p><p>In the 10th century, a monk named Hrelyo decided to build a monastery on the spot where Saint Ivan had lived as a hermit. This marked the beginning of the Rila Monastery we know today. Hrelyo was said to have been guided by Saint Ivan in his dream, where the saint showed him the location of the future monastery.</p><p>The Rila Monastery reached its peak during the 14th and 15th centuries under the rule of the famous Bulgarian ruler Ivan Alexander. He granted the monastery with many privileges and donated a significant amount of land, making it one of the wealthiest monasteries in the region. The monastery's prosperity continued into the following centuries, and it became a center of learning and culture, with many famous scholars and artists passing through its doors.</p><p>The Rila Monastery has undergone many changes over the centuries, with additions and renovations being made to the original buildings. The most significant changes occurred in the 19th century, when the monastery was rebuilt in the Bulgarian National Revival style, which is characterized by its ornate decoration and use of traditional Bulgarian motifs. The result is a stunning architectural masterpiece that blends elements of medieval and traditional Bulgarian styles.</p><p>The Rila Monastery is a complex of buildings, including the church, the residential buildings, and the defensive walls. The church is the main attraction of the monastery, with its elaborate frescoes and intricate decoration. The frescoes, which date back to the 15th century, are considered some of the finest examples of medieval Bulgarian art and are a testament to the skill and talent of the artists who created them.</p><p>The residential buildings of the monastery are also worth visiting. They include the monks' cells, the refectory, and the kitchen. These buildings are simple and austere, reflecting the monastic lifestyle of the monks.</p><p>The defensive walls of the monastery were built in the 14th century to protect the complex from invaders. The walls are thick and high, and the towers offer a great view of the surrounding landscape.</p><p>In the 20th century, Rila Monastery was declared a national monument and has been carefully preserved and protected. Today, it is a popular tourist destination and a UNESCO World Heritage Site, attracting visitors from all over the world who come to admire its architectural beauty and rich history.</p><p>Rila Monastery is a true treasure of Bulgarian culture and history. It is a place where one can witness the beauty of medieval art and architecture, and learn about the fascinating history of this region. The monastery is not only a place of religious significance but also a cultural and historical landmark that should be visited by anyone who is interested in the history and culture of Bulgaria.</p>"
                    }
                }
            }
        ],
        reviews: [
            {
                id: 1,
                author: {
                    id: 1,
                    names: 'Том Атанасов',
                    photo: 'https://gravatar.com/avatar/101ecaaeb9247c0da0285d295c2a2e80?size=40'
                },
                rating: 5,
                date_added: 1660815374000,
                comment:
                    'Рилският манастир беше наистина спиращо дъха изживяване. Сложните стенописи и зашеметяващата архитектура ме оставиха в страхопочитание. Силно препоръчвам да посетите това историческо бижу.',
                comment_language: 'bg',
                attachment: {
                    source: '3-2.jpg',
                    ratio: 'normal',
                    type: 'photo'
                }
            },
            {
                id: 2,
                author: {
                    id: 2,
                    names: 'Александър Найденов',
                    photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40'
                },
                rating: 4,
                date_added: 1685017043000,
                comment:
                    'Манастирът беше още по-впечатляващ, отколкото си представях. Спокойната атмосфера и богатата история направиха посещението ми наистина незабравимо.',
                comment_language: 'bg',
                attachment: {
                    source: null,
                    ratio: null,
                    type: null
                }
            },
            {
                id: 3,
                author: {
                    id: 3,
                    names: 'Петър Георгиев',
                    photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40'
                },
                rating: 2,
                date_added: 1685017043000,
                comment:
                    'Бях разочарован от посещението си в Рилския манастир. Тълпите бяха огромни и беше трудно да се оцени напълно красотата на мястото.',
                comment_language: 'bg',
                attachment: {
                    source: null,
                    ratio: null,
                    type: null
                }
            },
            {
                id: 4,
                author: {
                    id: 4,
                    names: 'Пламен Калайджиев',
                    photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40'
                },
                rating: 5,
                date_added: 1685017043000,
                comment:
                    'Рилският манастир е нещо, което трябва да се види от всеки, който посети България. Комбинацията от религиозно и културно значение създава едно наистина смислено преживяване.',
                comment_language: 'bg',
                attachment: {
                    source: 'https://i.ytimg.com/vi/uRKF_tGUhZw/hqdefault.jpg',
                    ratio: null,
                    type: 'video'
                }
            },
            {
                id: 5,
                author: {
                    id: 5,
                    names: 'Георги Йорданов',
                    photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40'
                },
                rating: 5,
                date_added: 1685017043000,
                comment:
                    'Стенописите в църквата бяха истинско произведение на изкуството. Вниманието към детайла и наситените цветове спираха дъха. Силно препоръчвам да посетите Рилския манастир.',
                comment_language: 'bg',
                attachment: {
                    source: '3-5.jpg',
                    ratio: 'normal',
                    type: 'photo'
                }
            },
            {
                id: 5,
                author: {
                    id: 5,
                    names: 'Мария Величкова',
                    photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40'
                },
                rating: 5,
                date_added: 1685017043000,
                comment:
                    'Бях изумена от историята и красотата на Рилския манастир. Отбранителните стени и кули предлагаха страхотна гледка към околния пейзаж. Това определено беше един от акцентите в пътуването ми до България.',
                comment_language: 'bg',
                attachment: {
                    source: null,
                    ratio: null,
                    type: null
                }
            }
        ]
    },
    {
        id: 4,
        slug: 'shipka-monument',
        image: '/images/photos/4.jpg',
        photos: [
            {
                id: 1,
                image: '/images/photos/4-1.jpg',
                author: 'Неизвестен',
                date_added: 1670777697
            },
            {
                id: 2,
                image: '/images/photos/4-2.jpg',
                author: 'Неизвестен',
                date_added: 1670777697
            },
            {
                id: 3,
                image: '/images/photos/4-3.jpg',
                author: 'Неизвестен',
                date_added: 1670777697
            },
            {
                id: 4,
                image: '/images/photos/4-4.jpg',
                author: 'Неизвестен',
                date_added: 1670777697
            }
        ],
        locale: {
            bg: {
                title: 'Паметник на свободата "Шипка"',
                location: 'до гр. Шипка'
            },
            en: {
                title: 'Shipka Monument',
                location: 'next to Shipka City'
            }
        },
        user_score: 4.9,
        reviews_count: 154,
        visitors: 1245,
        category: {
            id: 1,
            slug: 'architecture',
            locale: {
                bg: {
                    title: 'Архитектура'
                },
                en: {
                    title: 'Architecture'
                }
            }
        },
        region: {
            id: 1,
            slug: 'valley-of-roses',
            locale: {
                bg: {
                    title: 'Долината на розите'
                },
                en: {
                    title: 'Тhe Valley of Roses'
                }
            }
        },
        district: {
            id: 1,
            slug: 'stara-zagora',
            locale: {
                bg: {
                    title: 'Стара Загора'
                },
                en: {
                    title: 'Stara Zagora'
                }
            }
        },
        unesco: false,
        weather: [
            {
                date: getNextFiveDays(locale)[0],
                state: 'cloudy',
                temperature: [2, -3] // 0 = day, 1 = night
            },
            {
                date: getNextFiveDays(locale)[1],
                state: 'snow',
                temperature: [9, 1]
            },
            {
                date: getNextFiveDays(locale)[2],
                state: 'windy-cloudy',
                temperature: [12, 4]
            },
            {
                date: getNextFiveDays(locale)[3],
                state: 'snow',
                temperature: [14, 6]
            },
            {
                date: getNextFiveDays(locale)[4],
                state: 'partly-sunny',
                temperature: [9, -2]
            }
        ],
        coords: {
            latitude: 42.74829,
            longitude: 25.3215
        },
        altitude: 256,
        contents: [
            {
                id: 1,
                authors: [
                    {
                        id: 1,
                        names: 'Том Атанасов',
                        photo: 'https://gravatar.com/avatar/101ecaaeb9247c0da0285d295c2a2e80?size=30'
                    }
                ],
                locale: {
                    bg: {
                        title: 'Кратко резюме',
                        text: '<p>Паметникът на Шипка е извисяващ се паметник, разположен в малкото българско село Шипка. Построен е в памет на храбростта и саможертвата на българския народ по време на Руско-турската война от 1877-1878 г. Паметникът се издига на 53 метра височина на мястото на битката при Шипченския проход, която е една от най-значимите битки на войната и повратна точка за независимостта на България. Войната се води между Руската империя и Османската империя и е предизвикана от желанието на Руската империя да разшири своята територия и влияние на Балканите, както и от нарастващото недоволство на християнското население в Османската империя. Тогава България е била провинция на Османската империя и е попаднала в центъра на конфликта. Битката при прохода Шипка е решаващ момент във войната, тъй като проходът е единственият жизнеспособен маршрут за руската армия да марширува към Константинопол, столицата на Османската империя. Османската армия е решена да защитава прохода и да попречи на руската армия да напредне, но българският народ се присъединява към руската армия в битката. Въпреки че са превъзхождани числено и оръжие, те успяват да победят османската армия и да поемат контрола над прохода. Паметникът на Шипка е построен през 1934 г. по проект на българския архитект Никола Лазаров, със статуя на български войник на върха, изработена от мед и покрита със злато. Заобиколен е от красив парк и разполага с музей, разказващ историята на битката при Шипченския проход и Руско-турската война.</p>'
                    },
                    en: {
                        title: 'Summary',
                        text: "<p>The Shipka Monument is a towering tribute located in the small Bulgarian village of Shipka. It was erected to commemorate the bravery and sacrifice of the Bulgarian people during the Russo-Turkish War of 1877-1878. The monument stands at a height of 53 meters on the site of the Battle of Shipka Pass, which was one of the most significant battles of the war and a turning point for Bulgaria's independence. The war was fought between the Russian Empire and the Ottoman Empire and sparked by the desire of the Russian Empire to expand its territory and influence in the Balkans, as well as by the growing discontent of the Christian population in the Ottoman Empire. Bulgaria was then a province of the Ottoman Empire and caught in the middle of the conflict. The Battle of Shipka Pass was a crucial moment in the war as the pass was the only viable route for the Russian army to march on Constantinople, the capital of the Ottoman Empire. The Ottoman army was determined to defend the pass and prevent the Russian army from advancing, but the Bulgarian people joined the Russian army in the fight. Despite being outnumbered and outgunned, they were able to defeat the Ottoman army and take control of the pass. The Shipka Monument was built in 1934, designed by the Bulgarian architect Nikola Lazarov, featuring a statue of a Bulgarian soldier at the top made of copper and covered in gold leaf. It is surrounded by a beautiful park and features a museum that tells the story of the Battle of Shipka Pass and the Russo-Turkish War.</p>"
                    }
                }
            },
            {
                id: 2,
                authors: [
                    {
                        id: 1,
                        names: 'Том Атанасов',
                        photo: 'https://gravatar.com/avatar/101ecaaeb9247c0da0285d295c2a2e80?size=30'
                    },
                    {
                        id: 2,
                        names: 'Александър Найденов',
                        photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=30'
                    }
                ],
                locale: {
                    bg: {
                        title: 'История',
                        text: '<p>Паметникът на Шипка, разположен в малкия български град Шипка, е величествен знак на почит към храбростта и саможертвата на българския народ по време на Руско-турската война от 1877-1878 г. Паметникът, който се издига на височина 53 метра, е издигнат на мястото на битката при Шипченския проход, една от най-значимите битки на войната и повратна точка за независимостта на България.</p><p>Руско-турската война, продължила от 1877 до 1878 г., се води между Руската империя и Османската империя. Войната е предизвикана от желанието на Руската империя да разшири своята територия и влияние на Балканите, както и от нарастващото недоволство на християнското население в Османската империя. България, която тогава е била провинция на Османската империя, е попаднала в центъра на конфликта.</p><p>Битката при прохода Шипка, водена през лятото на 1877 г., е решаващ момент във войната. Проходът, разположен в Стара планина, е единственият жизнеспособен маршрут за марша на руската армия към Константинопол, столицата на Османската империя. Османската армия, водена от Сюлейман паша, беше решена да защити прохода и да попречи на руската армия да напредне.</p><p>Българският народ, който страдаше под гнета на Османската империя, видя възможността да спечели тяхната свобода и се присъедини към руската армия в битката. Заедно те се изправят срещу османската армия в кървава и жестока битка, продължила няколко месеца. Въпреки че са числено превъзхождани и превъзхождани с оръжие, българите и руснаците успяват да победят османската армия и да овладеят прохода. Битката е повратна точка във войната и бележи началото на края на Османската империя на Балканите.</p><p>Паметникът на Шипка, построен през 1934 г., е издигнат в памет на храбростта и саможертвата на българите хора по време на битката при Шипченския проход. Паметникът, проектиран от българския архитект Никола Лазаров, е забележителна и внушителна конструкция, която се отличава със статуя на български войник на върха. Статуята, която се издига на височина 15 метра, е изработена от мед и е покрита със златни листа.</p><p>Паметникът е заобиколен от красив парк и е популярна дестинация както за туристите, така и за местните жители. Посетителите могат да се качат с лифт до върха на паметника, откъдето могат да се насладят на панорамна гледка към околността. В парка има и музей, който разказва историята на битката при Шипченския проход и Руско-турската война.</p><p>В заключение, Паметникът на Шипка е мощна и вълнуваща почит към храбростта и саможертвата на българина народ по време на Руско-турската война от 1877-1878 г. Паметникът, който е построен на мястото на битката при Шипченския проход, е символ на независимостта на България и спомен за жертвите, дадени за нейното постигане. Това е чудесен начин да си припомним миналото и историята на България.</p>'
                    },
                    en: {
                        title: 'History',
                        text: "<p>The Shipka Monument, located in the small Bulgarian city of Shipka, is a towering tribute to the bravery and sacrifice of the Bulgarian people during the Russo-Turkish War of 1877-1878. The monument, which stands at a height of 53 meters, was erected on the site of the Battle of Shipka Pass, one of the most significant battles of the war and a turning point for Bulgaria's independence.</p><p>The Russo-Turkish War, which lasted from 1877 to 1878, was fought between the Russian Empire and the Ottoman Empire. The war was sparked by the desire of the Russian Empire to expand its territory and influence in the Balkans, as well as by the growing discontent of the Christian population in the Ottoman Empire. Bulgaria, which was then a province of the Ottoman Empire, was caught in the middle of the conflict.</p><p>The Battle of Shipka Pass, fought in the summer of 1877, was a crucial moment in the war. The pass, located in the Balkan Mountains, was the only viable route for the Russian army to march on Constantinople, the capital of the Ottoman Empire. The Ottoman army, led by Suleiman Pasha, was determined to defend the pass and prevent the Russian army from advancing.</p><p>The Bulgarian people, who were suffering under the oppression of the Ottoman Empire, saw the opportunity to gain their freedom and joined the Russian army in the fight. Together, they faced the Ottoman army in a bloody and brutal battle that lasted for several months. Despite being outnumbered and outgunned, the Bulgarians and the Russians were able to defeat the Ottoman army and take control of the pass. The battle was a turning point in the war and marked the beginning of the end for the Ottoman Empire in the Balkans.</p><p>The Shipka Monument, built in 1934, was erected to commemorate the bravery and sacrifice of the Bulgarian people during the Battle of Shipka Pass. The monument, designed by the Bulgarian architect Nikola Lazarov, is a striking and imposing structure that features a statue of a Bulgarian soldier at the top. The statue, which stands at a height of 15 meters, is made of copper and is covered in gold leaf.</p><p>The monument is surrounded by a beautiful park and is a popular destination for tourists and locals alike. Visitors can take a lift to the top of the monument, where they can enjoy panoramic views of the surrounding area. The park also features a museum that tells the story of the Battle of Shipka Pass and the Russo-Turkish War.</p><p>In conclusion, the Shipka Monument is a powerful and moving tribute to the bravery and sacrifice of the Bulgarian people during the Russo-Turkish War of 1877-1878. The monument, which was built on the site of the Battle of Shipka Pass, is a symbol of Bulgaria's independence and a reminder of the sacrifices that were made to achieve it. It's a great way to remember the past and the history of Bulgaria.</p>"
                    }
                }
            }
        ],
        reviews: [
            {
                id: 1,
                author: {
                    id: 1,
                    names: 'Том Атанасов',
                    photo: 'https://gravatar.com/avatar/101ecaaeb9247c0da0285d295c2a2e80?size=40'
                },
                rating: 5,
                date_added: 1660815374000,
                comment:
                    'Наскоро посетих паметника на Шипка и трябва да кажа, че беше невероятно вълнуващо преживяване. Паметникът е наистина впечатляващ, а гледките от върха са спиращи дъха. Паркът и музеят също бяха добре поддържани и предоставяха много информация за историята на района. Определено бих препоръчал посещението на този паметник на всеки, който се интересува от българската история и култура.',
                comment_language: 'bg',
                attachment: {
                    source: '4-2.jpg',
                    ratio: 'normal',
                    type: 'photo'
                }
            },
            {
                id: 2,
                author: {
                    id: 2,
                    names: 'Александър Найденов',
                    photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40'
                },
                rating: 4,
                date_added: 1685017043000,
                comment:
                    'Паметникът на Шипка трябва да се види от всеки любител на историята. Самият паметник е впечатляващ, но музеят и паркът предоставят много контекст и основна информация. Бях особено впечатлен от аудиогида, който беше достъпен на много езици. Като цяло, чудесен начин да прекарате един следобед.',
                comment_language: 'bg',
                attachment: {
                    source: null,
                    ratio: null,
                    type: null
                }
            },
            {
                id: 3,
                author: {
                    id: 3,
                    names: 'Петър Георгиев',
                    photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40'
                },
                rating: 2,
                date_added: 1685017043000,
                comment:
                    'Наистина бях разочарован от посещението си на Паметника Шипка. Самият паметник е добре, но гледката от върха беше препречена от дървета. Музеят беше затворен, а паркът беше мръсен и неподдържан. Не бих препоръчал посещение на този паметник.',
                comment_language: 'bg',
                attachment: {
                    source: null,
                    ratio: null,
                    type: null
                }
            },
            {
                id: 4,
                author: {
                    id: 4,
                    names: 'Пламен Калайджиев',
                    photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40'
                },
                rating: 5,
                date_added: 1685017043000,
                comment:
                    'Много ме впечатли Паметникът на Шипка. Статуята на българския войник на върха е много мощна, а гледките от върха са невероятни. Музеят също беше много информативен и ми помогна да разбера значението на битката при Шипченския проход в голямата схема на българската история.',
                comment_language: 'bg',
                attachment: {
                    source: 'https://i.ytimg.com/vi/uRKF_tGUhZw/hqdefault.jpg',
                    ratio: null,
                    type: 'video'
                }
            },
            {
                id: 5,
                author: {
                    id: 5,
                    names: 'Георги Йорданов',
                    photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40'
                },
                rating: 5,
                date_added: 1685017043000,
                comment:
                    'Паметникът на Шипка е чудесно място за посещение, ако се интересувате от българската история. Паметникът е добре поддържан и гледките от върха са красиви. Музеят обаче би могъл да се актуализира, аудиогидът не работеше правилно и някои от експонатите не бяха в добро състояние.',
                comment_language: 'bg',
                attachment: {
                    source: '4-5.jpg',
                    ratio: 'invert',
                    type: 'photo'
                }
            },
            {
                id: 5,
                author: {
                    id: 5,
                    names: 'Мария Величкова',
                    photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40'
                },
                rating: 5,
                date_added: 1685017043000,
                comment:
                    'Паметникът на Шипка е чудесно място за посещение, но изкачването е малко тренировка. След като стигнете върха, гледките си заслужават. Паркът и музеят също са чудесен начин да научите повече за историята на района. Бих препоръчалa това място на всеки, който иска да научи повече за България.',
                comment_language: 'bg',
                attachment: {
                    source: null,
                    ratio: null,
                    type: null
                }
            }
        ]
    },
    {
        id: 5,
        slug: 'belogradchishkite-skali',
        image: '/images/photos/5.jpg',
        photos: [
            {
                id: 1,
                image: '/images/photos/5-1.jpg',
                author: 'Владислав Терзийски',
                date_added: 1670777697
            },
            {
                id: 2,
                image: '/images/photos/5-2.jpg',
                author: 'Пламен Петков',
                date_added: 1670777697
            },
            {
                id: 3,
                image: '/images/photos/5-3.jpg',
                author: 'Неизвестен',
                date_added: 1670777697
            },
            {
                id: 4,
                image: '/images/photos/5-4.jpg',
                author: 'Неизвестен',
                date_added: 1670777697
            }
        ],
        locale: {
            bg: {
                title: 'Белоградчишките скали',
                location: 'гр. Белоградчик'
            },
            en: {
                title: 'The Rocks of Belogradchik',
                location: 'Belogradchik City'
            }
        },
        user_score: 4.5,
        reviews_count: 84,
        visitors: 983,
        category: {
            id: 1,
            slug: 'nature-and-parks',
            locale: {
                bg: {
                    title: 'Природа и паркове'
                },
                en: {
                    title: 'Nature & Parks'
                }
            }
        },
        region: {
            id: 1,
            slug: 'danube',
            locale: {
                bg: {
                    title: 'Дунав'
                },
                en: {
                    title: 'Danube'
                }
            }
        },
        district: {
            id: 1,
            slug: 'vidin',
            locale: {
                bg: {
                    title: 'Видин'
                },
                en: {
                    title: 'Vidin'
                }
            }
        },
        unesco: false,
        weather: [
            {
                date: getNextFiveDays(locale)[0],
                state: 'cloudy',
                temperature: [2, -3] // 0 = day, 1 = night
            },
            {
                date: getNextFiveDays(locale)[1],
                state: 'snow',
                temperature: [9, 1]
            },
            {
                date: getNextFiveDays(locale)[2],
                state: 'windy-cloudy',
                temperature: [12, 4]
            },
            {
                date: getNextFiveDays(locale)[3],
                state: 'snow',
                temperature: [14, 6]
            },
            {
                date: getNextFiveDays(locale)[4],
                state: 'partly-sunny',
                temperature: [9, -2]
            }
        ],
        coords: {
            latitude: 43.62837,
            longitude: 22.67985
        },
        altitude: 195,
        contents: [
            {
                id: 1,
                authors: [
                    {
                        id: 1,
                        names: 'Том Атанасов',
                        photo: 'https://gravatar.com/avatar/101ecaaeb9247c0da0285d295c2a2e80?size=30'
                    }
                ],
                locale: {
                    bg: {
                        title: 'Кратко резюме',
                        text: '<p>Белоградчишките скали в Северозападна България са природно чудо, устояло на времето. Тези извисяващи се образувания от пясъчник и конгломерат са пленявали въображението на местните жители и посетителите от векове. Те са се образували преди милиони години в резултат на масивна тектонична промяна, а последвалата ерозия и изветряне създадоха уникалните форми и характеристики, които виждаме днес. В исторически план Белоградчишките скали са служили като естествена крепост за близкото селище по време на Римската империя и по-късно са разширени и укрепени от византийците за защита срещу варварски нашествия. През Средновековието скалите са служили за убежище на местното население по време на войни и конфликти, а по време на османската окупация са били използвани като затвор за политически дисиденти. В най-новата история районът е определен за природен резерват по време на комунизма, а след падането на комунизма през 1989 г. се превръща в популярна туристическа дестинация. Белоградчишките скали също са дом на разнообразен растителен и животински свят и няколко интересни пещери, включително пещерата Магура, която е известна със своите праисторически рисунки. В заключение, Белоградчишките скали са уникално и завладяващо природно чудо, което е изиграло важна роля в историята на България и продължава да бъде източник на вдъхновение и чудеса за посетителите.</p>'
                    },
                    en: {
                        title: 'Summary',
                        text: '<p>The Rocks of Belogradchik in northwest Bulgaria are a natural wonder that have stood the test of time. These towering sandstone and conglomerate formations have captured the imaginations of locals and visitors for centuries. They were formed millions of years ago as a result of a massive tectonic shift, and the erosion and weathering that followed created the unique shapes and features that we see today. Historically, the Belogradchik Rocks served as a natural fortress for the nearby settlement during Roman Empire and were later expanded and fortified by the Byzantines to defend against barbarian invasions. During the Middle Ages, the rocks served as a refuge for local population during times of war and conflict and during the Ottoman occupation it was used as a prison for political dissidents. In recent history, the area was designated as a nature reserve during the communist era and after the fall of communism in 1989, it became a popular tourist destination. The Belogradchik Rocks are also home to a diverse range of plant and animal life and several interesting caves including the Magura Cave, which is famous for its prehistoric paintings. In conclusion, the Rocks of Belogradchik are a unique and captivating natural wonder that have played a significant role in the history of Bulgaria and continue to be a source of inspiration and wonder for visitors.</p>'
                    }
                }
            },
            {
                id: 2,
                authors: [
                    {
                        id: 1,
                        names: 'Том Атанасов',
                        photo: 'https://gravatar.com/avatar/101ecaaeb9247c0da0285d295c2a2e80?size=30'
                    },
                    {
                        id: 2,
                        names: 'Александър Найденов',
                        photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=30'
                    }
                ],
                locale: {
                    bg: {
                        title: 'История',
                        text: '<p>Белоградчишките скали, разположени в северозападна България, са спиращо дъха природно чудо, устояло на времето. Тези извисяващи се пясъчни и конгломератни образувания, някои достигащи над 200 метра височина, пленяват въображението на местните жители и посетителите от векове.</p><p>Историята на Белоградчишките скали датира от древността, когато са били образувани в резултат на масивна тектонична промяна. Процесът на ерозия и изветряне, последвал в продължение на милиони години, е довел до уникалните форми и характеристики, които виждаме днес.</p><p>По време на Римската империя Белоградчишките скали са служили като естествена крепост, осигуряваща защита на близките селище Белоградчик. На мястото римляните построили крепост, която по-късно била разширена и укрепена от византийците. Тези укрепления са били използвани за защита срещу варварски нашествия и са служили като стратегическа точка за контрол на региона.</p><p>През Средновековието Белоградчишките скали стават убежище за местното население по време на войни и конфликти. Те са давали подслон на селяните, а естествената защита на скалите ги е затруднявала за превземане от нашествениците.</p><p>По време на османската окупация в България Белоградчишките скали са били използвани като затвор за политически дисиденти. Тежките условия и изолацията на затвора го превърнаха в страшно място сред населението.</p><p>Белоградчишките скали също са изиграли роля в най-новата история на България. По време на комунизма районът е обявен за природен резерват и е забранен за посетители. След падането на комунизма през 1989 г. обаче Белоградчишките скали стават популярна туристическа дестинация. Днес те привличат хиляди посетители всяка година, които идват да се полюбуват на естествената им красота и богата история.</p><p>Едно от най-впечатляващите неща за Белоградчишките скали е начинът, по който са били оформени от природата. Различните слоеве от пясъчник и конгломерат са изваяни в различни форми, от високи кули до широки плата. Различните цветове на скалите, от наситено червено до нежно жълто, създават хипнотизиращ контраст на фона на синьото небе.</p><p>Скалите на Белоградчик също са дом на разнообразен растителен и животински свят. Скалистите разкрития осигуряват местообитание за различни птици, включително застрашения белоглав лешояд. Околните гори са дом на диви свине, елени и дори от време на време мечки.</p><p>Белоградчишките скали също са дом на няколко интересни пещери, включително пещерата Магура, която е известна с праисторическите си рисунки, датиращи от Неолитна епоха. Пещерните рисунки изобразяват животни и символи, за които се смята, че са имали духовно или ритуално значение за древните хора, които са ги създали.</p><p>В заключение, Белоградчишките скали са уникално и завладяващо природно чудо, което е изиграло важна роля в историята на България. От служещи като естествена крепост през древни времена, до предоставяне на подслон на селяните по време на средновековни конфликти, до затвор по време на османската окупация, тези скали са свидетелствали за разнообразната и богата история на региона. Днес те продължават да бъдат източник на вдъхновение и чудеса за посетители от цял свят.</p>'
                    },
                    en: {
                        title: 'History',
                        text: "<p>The Rocks of Belogradchik, located in northwest Bulgaria, are a breathtaking natural wonder that have stood the test of time. These towering sandstone and conglomerate formations, some reaching over 200 meters in height, have captured the imaginations of locals and visitors alike for centuries.</p><p>The history of the Belogradchik Rocks dates back to the ancient times, when they were formed as a result of a massive tectonic shift. The process of erosion and weathering that followed over millions of years resulted in the unique shapes and features that we see today.</p><p>During the Roman Empire, the Belogradchik Rocks served as a natural fortress, providing protection for the nearby settlement of Belogradchik. The Romans built a fortress on the site, which was later expanded and fortified by the Byzantines. These fortifications were used to defend against barbarian invasions and served as a strategic point for the control of the region.</p><p>In the Middle Ages, the Belogradchik Rocks became a refuge for the local population during times of war and conflict. They provided shelter for the villagers, and the natural defenses of the rocks made them difficult for invaders to conquer.</p><p>During the Ottoman occupation of Bulgaria, the Belogradchik Rocks were used as a prison for political dissidents. The harsh conditions and isolation of the prison made it a feared place among the population.</p><p>The Rocks of Belogradchik have also played a role in Bulgaria's recent history. During the communist era, the area was designated as a nature reserve and was off-limits to the public. However, after the fall of communism in 1989, the Belogradchik Rocks became a popular tourist destination. Today, they attract thousands of visitors each year who come to admire their natural beauty and rich history.</p><p>One of the most striking things about the Belogradchik Rocks is the way in which they have been shaped by nature. The different layers of sandstone and conglomerate have been sculpted into a variety of forms, from tall spires to wide plateaus. The varying colors of the rocks, from deep reds to soft yellows, create a mesmerizing contrast against the blue sky.</p><p>The Rocks of Belogradchik are also home to a diverse range of plant and animal life. The rocky outcroppings provide a habitat for a variety of birds, including the endangered griffon vulture. The surrounding forests are home to wild boar, deer, and even the occasional bear.</p><p>The Belogradchik Rocks are also home to several interesting caves, including the Magura Cave which is famous for its prehistoric paintings dating back to the Neolithic era. The cave paintings depict animals and symbols that are thought to have had spiritual or ritual significance to the ancient people who created them.</p><p>In conclusion, the Rocks of Belogradchik are a unique and captivating natural wonder that have played a significant role in the history of Bulgaria. From serving as a natural fortress during ancient times, to providing shelter for villagers during medieval conflicts, to being a prison during the Ottoman occupation, these rocks have borne witness to the diverse and rich history of the region. Today, they continue to be a source of inspiration and wonder for visitors from all over the world.</p>"
                    }
                }
            }
        ],
        reviews: [
            {
                id: 1,
                author: {
                    id: 1,
                    names: 'Том Атанасов',
                    photo: 'https://gravatar.com/avatar/101ecaaeb9247c0da0285d295c2a2e80?size=40'
                },
                rating: 5,
                date_added: 1660815374000,
                comment:
                    'Белоградчишките скали са просто спиращи дъха. Природната красота и история на района създават едно наистина незабравимо преживяване. Горещо препоръчвам да посетите!',
                comment_language: 'bg',
                attachment: {
                    source: '5-2.jpg',
                    ratio: 'normal',
                    type: 'photo'
                }
            },
            {
                id: 2,
                author: {
                    id: 2,
                    names: 'Александър Найденов',
                    photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40'
                },
                rating: 4,
                date_added: 1685017043000,
                comment:
                    'Никога не съм виждал нещо подобно на Белоградчишките скали. Те наистина са чудо на природата и трябва да се видят от всеки, който посети България. Туристическите пътеки бяха добре поддържани и предлагаха страхотна гледка към скалите.',
                comment_language: 'bg',
                attachment: {
                    source: null,
                    ratio: null,
                    type: null
                }
            },
            {
                id: 3,
                author: {
                    id: 3,
                    names: 'Петър Георгиев',
                    photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40'
                },
                rating: 2,
                date_added: 1685017043000,
                comment:
                    'Бях разочарован от посещението си на Белоградчишките скали. Районът беше пренаселен, а обиколката с екскурзовод беше прибързана и неприятна.',
                comment_language: 'bg',
                attachment: {
                    source: null,
                    ratio: null,
                    type: null
                }
            },
            {
                id: 4,
                author: {
                    id: 4,
                    names: 'Пламен Калайджиев',
                    photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40'
                },
                rating: 5,
                date_added: 1685017043000,
                comment:
                    'Белоградчишките скали са скрит скъпоценен камък в България. Естествената красота на района е наистина хипнотизираща, а историческото значение добави завладяващ слой към изживяването.',
                comment_language: 'bg',
                attachment: {
                    source: 'https://i.ytimg.com/vi/uRKF_tGUhZw/hqdefault.jpg',
                    ratio: null,
                    type: 'video'
                }
            },
            {
                id: 5,
                author: {
                    id: 5,
                    names: 'Георги Йорданов',
                    photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40'
                },
                rating: 5,
                date_added: 1685017043000,
                comment:
                    'Семейството ми и аз си прекарахме страхотно, докато посетихме Белоградчишките скали. Туристическите пътеки бяха предизвикателни, но гледките си заслужаваха. Освен това ни хареса да научим повече за историята на района по време на обиколката с гид.',
                comment_language: 'bg',
                attachment: {
                    source: '5-5.jpg',
                    ratio: 'normal',
                    type: 'photo'
                }
            },
            {
                id: 5,
                author: {
                    id: 5,
                    names: 'Мария Величкова',
                    photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40'
                },
                rating: 5,
                date_added: 1685017043000,
                comment:
                    'Белоградчишките скали надхвърлиха очакванията ми. Природната красота на района беше спираща дъха, а историческото значение добави дълбочина към изживяването. Горещо препоръчвам да посетите и да направите обиколка с екскурзовод, за да оцените напълно всичко, което районът може да предложи.',
                comment_language: 'bg',
                attachment: {
                    source: null,
                    ratio: null,
                    type: null
                }
            }
        ]
    }
]

export default places
