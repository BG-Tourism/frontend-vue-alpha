<template>
    <section class="location-heading">
        <div class="page-content">
            <ul class="breadcrumbs">
                <li>
                    <router-link :to="{ name: 'Homepage' }">
                        {{ $t('general.navigation.homepage') }}
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'Category', params: { slug: place.category.slug } }">
                        {{ $t('general.navigation.category', { category: place.category.locale[$i18n.locale].name }) }}
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'Place', params: { slug: place.slug } }">
                        {{ place.locale[$i18n.locale].title }}
                    </router-link>
                </li>
            </ul>

            <div class="title">
                <h1>{{ place.locale[$i18n.locale].title }}</h1>
                <aside>
                    <button>
                        <i class="icon-route" />
                        <div class="tooltip-container center">
                            <div class="tooltip-content">
                                {{ $t('page.place.buttons.map') }}
                            </div>
                        </div>
                    </button>
                    <button :class="['favorite', isFavorite ? 'active' : null]" @click.prevent="isFavorite = !isFavorite">
                        <i :class="isFavorite ? 'icon-heart-solid' : 'icon-heart'" />
                        <div class="tooltip-container right">
                            <div class="tooltip-content">
                                {{ isFavorite ? $t('page.place.buttons.favorite.undo') : $t('page.place.buttons.favorite.make') }}
                            </div>
                        </div>
                    </button>
                    <button>
                        <i class="icon-share" />
                        <div class="tooltip-container right">
                            <div class="tooltip-content">
                                {{ $t('page.place.buttons.share') }}
                            </div>
                        </div>
                    </button>
                </aside>
            </div>

            <ul class="information">
                <li class="rating">
                    <div class="information-holder">
                        <i class="icon-star-solid" />
                        <strong>{{ place.user_score.toFixed(1) }}</strong>
                        <span>{{ $t('page.place.reviews.text', place.reviews_count) }}</span>
                    </div>
                </li>
                <li>
                    <div class="information-holder">
                        <i class="icon-users" />
                        <span>{{ $t('page.place.visitors.score', place.visitors) }}</span>
                    </div>
                    <div class="tooltip-container center">
                        <div class="tooltip-content" v-html="$t('page.place.visitors.describe')" />
                    </div>
                </li>
                <li>
                    <div class="information-holder">
                        <i class="icon-location" />
                        <span>{{ place.locale[$i18n.locale].location }}</span>
                    </div>
                    <div class="tooltip-container center">
                        <div
                            class="tooltip-content"
                            v-html="
                                $t('general.unit.coords', {
                                    latitude: place.coords.latitude,
                                    longitude: place.coords.longitude
                                })
                            "
                        />
                    </div>
                </li>
                <li>
                    <div class="information-holder">
                        <i class="icon-weather-cloudy" />
                        <span>
                            {{
                                $t('page.place.weather.cloudy', {
                                    temperature: place.weather[0].temperature[0],
                                    unit: $t('general.unit.celsius')
                                })
                            }}
                        </span>
                    </div>
                    <div class="tooltip-container">
                        <div class="weather-days">
                            <div v-for="day in place.weather" :key="day" class="weather-day">
                                <span class="weather-heading">
                                    <span class="weather-title">
                                        {{ $t(`general.nameOfDay.${day.date.number}`) }}
                                    </span>
                                    <span class="weather-date">{{ day.date.long }}</span>
                                </span>
                                <div class="weather-icon">
                                    <i :class="'icon-weather-' + day.state" />
                                </div>
                                <span class="weather-degrees">
                                    <span class="weather-degree-day">
                                        {{ day.temperature[0] }}
                                        <small>{{ $t('general.unit.celsius') }}</small>
                                    </span>
                                    <span class="divider"></span>
                                    <span class="weather-degree-night">
                                        {{ day.temperature[1] }}
                                        <small>{{ $t('general.unit.celsius') }}</small>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="information-holder">
                        <i class="icon-mountain-altitude" />
                        <span>{{ place.altitude }} {{ $t('general.unit.altitude.short') }}</span>
                    </div>
                    <div class="tooltip-container center">
                        <div class="tooltip-content">
                            {{ $t('general.unit.altitude.long') }}
                        </div>
                    </div>
                </li>
                <li v-if="place.unesco">
                    <div class="information-holder">
                        <i class="icon-award" />
                        <span>{{ $t('page.place.unesco.label') }}</span>
                    </div>
                    <div class="tooltip-container center">
                        <div class="tooltip-content">
                            {{ $t('page.place.unesco.title') }}
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>

    <section class="location-gallery">
        <div class="page-content">
            <div class="wrapper">
                <div v-for="(photo, index) in place.photos" :key="photo.id" class="photo">
                    <picture @click.prevent="toggleGallery(photo.id)">
                        <img :src="`/images/photos/4-${photo.id}.jpg`" alt="" />
                    </picture>
                    <button v-if="index === 0" @click.prevent="toggleGallery(photo.id)">
                        <i class="icon-image" />
                        <span>{{ $t('page.place.photography.more') }}</span>
                    </button>
                    <p class="copyrights">
                        {{ $t('page.place.photography.author', { author: photo.author }) }}
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section class="location-contents">
        <div class="page-content">
            <div class="wrapper">
                <div class="table-of-contents">
                    <div class="holder">
                        <h2>{{ $t('page.place.contents.tableOfContents') }}</h2>
                        <ul>
                            <li v-for="(content, index) in place.contents" :key="index">
                                <a href="javascript:void(0);">
                                    {{ content.locale[$i18n.locale].title }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="contents">
                    <div v-for="(content, index) in place.contents" :key="index" class="content">
                        <div class="title">
                            <h1>{{ content.locale[$i18n.locale].title }}</h1>
                        </div>
                        <div class="markdown" v-html="content.locale[$i18n.locale].text"></div>
                    </div>
                </div>
                <div class="copyrights">
                    <p>
                        <i class="icon-alert-triangle" />
                        <span>{{ $t('page.place.contents.copyrights') }}</span>
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section class="location-reviews">
        <div class="page-content">
            <div class="wrapper">
                <div class="title flex">
                    <h2>{{ $t('page.place.reviews.title') }}</h2>
                    <p>{{ $t('page.place.reviews.description') }}</p>
                </div>
                <div class="list">
                    <div v-for="review in place.reviews" :key="review.id" class="item">
                        <div class="author">
                            <picture>
                                <img :src="review.author.photo" alt="" />
                            </picture>
                            <div class="info">
                                <h3>{{ review.author.names }}</h3>
                                <div class="rating" :title="$t('page.place.reviews.stars', review.rating)">
                                    <i
                                        v-for="(star, i) in 5"
                                        :key="i"
                                        :class="star <= review.rating ? 'icon-star-solid' : 'icon-star'"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="review">
                            <p>{{ review.comment }}</p>
                            <a v-if="review.attachment != null" href="javascript:void(0);">
                                <picture>
                                    <img :src="`/images/photos/${review.attachment}`" />
                                </picture>
                            </a>
                        </div>
                        <div class="dates">
                            <time>{{ $d(new Date(review.date_added), 'full', String(locale)) }}</time>
                        </div>
                    </div>
                </div>
                <div class="buttons">
                    <button>{{ $t('page.place.reviews.addReview') }}</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { computed, defineComponent, ref } from 'vue'
    import { useTitle } from '@vueuse/core'
    import { useI18n } from 'vue-i18n'

    import getNextFiveDays from '@/helpers/getNextFiveDays'

    import { useGeneralStore } from '@/stores/GeneralStore'

    export default defineComponent({
        setup() {
            const i18n = useI18n()
            const { locale } = useI18n({ useScope: 'global' })
            const store = useGeneralStore()
            const titleSuffix = store.titleSuffix

            const pageTitle = computed(() => {
                return i18n.t('page.place.pageTitle') + titleSuffix
            })

            const isFavorite = ref(false)
            const isGalleryOpened = ref(false)

            const place = {
                id: 1,
                slug: 'hram-pametnik-sveti-aleksandar-nevski',
                image: '/images/photos/4.jpg',
                photos: [
                    {
                        id: 1,
                        image: '/images/photos/4-1.jpg',
                        author: 'Александър Костов',
                        date_added: 1670777697
                    },
                    {
                        id: 2,
                        image: '/images/photos/4-2.jpg',
                        author: 'Александър Костов',
                        date_added: 1670777697
                    },
                    {
                        id: 3,
                        image: '/images/photos/4-3.jpg',
                        author: 'Александър Костов',
                        date_added: 1670777697
                    },
                    {
                        id: 4,
                        image: '/images/photos/4-4.jpg',
                        author: 'Александър Костов',
                        date_added: 1670777697
                    }
                ],
                user_score: 4.8,
                reviews_count: 125,
                visitors: 3255,
                category: {
                    id: 1,
                    slug: 'nature',
                    locale: {
                        bg: {
                            name: 'Природа'
                        },
                        en: {
                            name: 'Nature'
                        }
                    }
                },
                unesco: true,
                weather: [
                    {
                        date: getNextFiveDays(i18n.locale)[0],
                        state: 'cloudy',
                        temperature: [2, -3] // 0 = day, 1 = night
                    },
                    {
                        date: getNextFiveDays(i18n.locale)[1],
                        state: 'snow',
                        temperature: [9, 1]
                    },
                    {
                        date: getNextFiveDays(i18n.locale)[2],
                        state: 'windy-cloudy',
                        temperature: [12, 4]
                    },
                    {
                        date: getNextFiveDays(i18n.locale)[3],
                        state: 'snow',
                        temperature: [14, 6]
                    },
                    {
                        date: getNextFiveDays(i18n.locale)[4],
                        state: 'partly-sunny',
                        temperature: [9, -2]
                    }
                ],
                coords: {
                    latitude: 42.69577,
                    longitude: 23.33286
                },
                altitude: 559,
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
                        attachment: '4-2.jpg'
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
                        attachment: null
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
                        attachment: null
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
                        attachment: '4-6.jpg'
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
                        attachment: '4-7.jpg'
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
                        attachment: null
                    }
                ]
            }

            useTitle(pageTitle)

            const toggleGallery = (id) => {
                isGalleryOpened.value = !isGalleryOpened.value

                if (isGalleryOpened.value) {
                    console.log(`Gallery opened with Photo ID: ${id}.`)
                } else {
                    console.log(`Gallery closed with Photo ID: ${id}.`)
                }
            }

            return {
                locale,
                place,
                isFavorite,
                toggleGallery
            }
        }
    })
</script>
