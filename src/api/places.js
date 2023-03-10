import i18n from '../locales/index.js'

import getNextFiveDays from '@/helpers/getNextFiveDays'

const locale = i18n.locale

const places = [
  {
    slug: 'sveti-aleksandar-nevski',
    image: '/images/photos/1.jpg',
    locale: {
      bg: {
        title: 'Храм-паметник "Свети Александър Невски"',
        location: 'гр. София',
      },
      en: {
        title: 'St. Alexander Nevsky Temple-Monument',
        location: 'Sofia City',
      },
    },
    categories: ['architecture', 'religion'],
    subcategories: ['sanctuaries', 'temples'],
    region: 'sofia',
    municipality: 'sofia',
    photos: [
      {
        image: '/images/photos/1-1.jpg',
        author: 'Министерство на туризма на Република България',
        date_added: 1670777697,
      },
      {
        image: '/images/photos/1-2.jpg',
        author: 'Министерство на туризма на Република България',
        date_added: 1670777697,
      },
      {
        image: '/images/photos/1-3.jpg',
        author: 'Министерство на туризма на Република България',
        date_added: 1670777697,
      },
      {
        image: '/images/photos/1-4.jpg',
        author: 'Министерство на туризма на Република България',
        date_added: 1670777697,
      },
    ],
    user_score: 3.5,
    reviews_count: Math.floor(Math.random() * 100),
    visitors: Math.floor(Math.random() * 1000),
    unesco: true,
    weather: [
      {
        date: getNextFiveDays(locale)[0],
        state: 'cloudy',
        temperature: [2, -3], // 0 = day, 1 = night
      },
      {
        date: getNextFiveDays(locale)[1],
        state: 'snow',
        temperature: [9, 1],
      },
      {
        date: getNextFiveDays(locale)[2],
        state: 'windy-cloudy',
        temperature: [12, 4],
      },
      {
        date: getNextFiveDays(locale)[3],
        state: 'snow',
        temperature: [14, 6],
      },
      {
        date: getNextFiveDays(locale)[4],
        state: 'partly-sunny',
        temperature: [9, -2],
      },
    ],
    coords: {
      latitude: 42.695808,
      longitude: 23.332811,
    },
    altitude: Math.floor(Math.random() * 1000),
    markdown_content: {
      authors: [
        {
          names: 'Васил Тухчиев',
          email: 'email@xen.gg',
          github_profile: 'https://google.bg/',
        },
        {
          names: 'Омуртаг Китов',
          email: 'email@xen.gg',
          github_profile: 'https://google.bg/',
        },
        {
          names: 'Елеонета Васовa',
          email: 'email@xen.gg',
          github_profile: 'https://google.bg/',
        },
      ],
      locale: {
        bg: '<h3>Кратко резюме</h3><p>Храм-паметникът "Свети Александър Невски" в София, България, е религиозна сграда, построена в началото на 20-ти век в чест на средновековния руски княз Александър Невски. Тя е ярък образец на българската възрожденска архитектура и е най-голямата източноправославна катедрала на Балканите. Историята на храм-паметника датира от края на 19 век, когато България се стреми да утвърди своята национална идентичност. Строежът на храма започва през 1882 г. и завършва през 1912 г. Проектът е финансиран от руския цар Александър II. В криптата на храм-паметника се съхраняват тленните останки на български народни герои. Тук се намира и Българската академия на науките.</p><h3>История</h3><p>Храм-паметникът Свети Александър Невски в София, България е красива и емблематична религиозна сграда, разположена в сърцето на града. Построена в началото на 20-и век, тази източноправославна църква е в знак на почит към средновековния руски княз Александър Невски, който се слави с военните си победи над нахлуващите тевтонски рицари.</p><p>Храм-паметникът е ярък образец на българската възрожденска архитектура със своите високи златни куполи и сложна резба. Това е най-голямата източноправославна катедрала на Балканите и нейното величие и красота я правят задължителна дестинация за посетителите на София.</p><p>Историята на храм-паметника „Свети Александър Невски“ датира от края на 19 век, когато българският народ се стреми да утвърди своята национална идентичност и да се освободи от властта на Османската империя. Руският княз Александър Невски е възприеман като герой, който успешно е защитил своя народ от чужди нашественици и затова е избран за символ на българската борба за независимост.</p><p>Строежът на храм-паметника започва през 1882 г., а официално е завършен през 1912 г. Проектът е финансиран от руския цар Александър II, който иска да почете своя съименник и да подкрепи българския народ в стремежа му към независимост.</p><p>Храм-паметникът се намира на хълм в центъра на София, като местоположението му е внимателно подбрано, за да бъде лесно видимо и достъпно за хората от града. Интериорът на храма е също толкова впечатляващ, колкото и екстериорът, със своите богато украсени фрески, красиви витражи и сложни дърворезби. Главният олтар на храма е посветен на Свети Александър Невски, има и параклис, посветен на Света София, покровителката на града.</p><p>Една от най-интересните особености на храм-паметника „Свети Александър Невски“ е неговата крипта, в която се съхраняват тленните останки на български национални герои и други важни личности. Първоначално криптата е била предназначена да бъде последното място за почивка на самия княз Александър Невски, но тленните му останки така и не са пренесени в София. Вместо това криптата е дом на други герои от българския народ, включително революционера Васил Левски и поета Христо Ботев.</p><p>Освен своето религиозно и историческо значение, храм-паметникът „Свети Александър Невски“ е и важна културна и художествена забележителност в София. В храм-паметника се помещава Българската академия на науките, която е създадена през 1869 г. и е най-старото и престижно висше учебно заведение в страната. Академията се помещава в красива сграда до храма, а нейните членове са сред най-уважаваните учени и изследователи в България.</p><p>Храм-паметникът „Свети Александър Невски“ е красив и вдъхновяващ пример за българската възрожденска архитектура и е задължителна дестинация за всеки, който посети София. Неговата богата история, красив дизайн и важно културно и религиозно значение го правят истинско съкровище на града.</p>',
        en: '<h3>Summary</h3><p>The Saint Alexander Nevsky Temple-Monument in Sofia, Bulgaria is a religious building built in the early 20th century in tribute to the medieval Russian prince Alexander Nevsky. It is a striking example of Bulgarian National Revival architecture and is the largest Eastern Orthodox cathedral in the Balkans. The temple-monument\'s history dates back to the late 19th century when Bulgaria was seeking to establish its own national identity. Construction of the temple began in 1882 and was completed in 1912. The project was funded by the Russian Tsar Alexander II. The temple-monument\'s crypt contains the remains of Bulgarian national heroes. It is also home to the Bulgarian Academy of Sciences.</p><h3>History</h3><p>The Saint Alexander Nevsky Temple-Monument in Sofia, Bulgaria is a beautiful and iconic religious building located in the heart of the city. Built in the early 20th century, this Eastern Orthodox church is a tribute to the medieval Russian prince Alexander Nevsky, who is celebrated for his military victories over the invading Teutonic Knights.</p><p>The temple-monument is a striking example of Bulgarian National Revival architecture, with its tall golden domes and intricate carvings. It is the largest Eastern Orthodox cathedral in the Balkans, and its grandeur and beauty make it a must-see destination for visitors to Sofia.</p><p>The history of the Saint Alexander Nevsky Temple-Monument dates back to the late 19th century, when the Bulgarian people were seeking to establish their own national identity and break free from the rule of the Ottoman Empire. The Russian prince Alexander Nevsky was seen as a hero who had successfully defended his people against foreign invaders, and so he was chosen as the symbol of the Bulgarian struggle for independence.</p><p>Construction of the temple-monument began in 1882, and it was officially completed in 1912. The project was funded by the Russian Tsar Alexander II, who wanted to honor his namesake and support the Bulgarian people in their quest for independence.</p><p>The temple-monument is located on a hill in the center of Sofia, and its location was carefully chosen to be easily visible and accessible to the people of the city. The interior of the temple is just as impressive as the exterior, with its ornate frescoes, beautiful stained glass windows, and intricate carvings. The main altar of the temple is dedicated to Saint Alexander Nevsky, and there is also a chapel dedicated to Saint Sofia, the patron saint of the city.</p><p>One of the most interesting features of the Saint Alexander Nevsky Temple-Monument is its crypt, which contains the remains of Bulgarian national heroes and other important figures. The crypt was originally intended to be the final resting place of Prince Alexander Nevsky himself, but his remains were never brought to Sofia. Instead, the crypt is home to the remains of other heroes of the Bulgarian people, including the revolutionary Vasil Levski and the poet Hristo Botev.</p><p>In addition to its religious and historical significance, the Saint Alexander Nevsky Temple-Monument is also an important cultural and artistic landmark in Sofia. The temple-monument is home to the Bulgarian Academy of Sciences, which was established in 1869 and is the country\'s oldest and most prestigious institution of higher learning. The academy is housed in a beautiful building adjacent to the temple, and its members are among the most respected scholars and researchers in Bulgaria.</p><p>The Saint Alexander Nevsky Temple-Monument is a beautiful and inspiring example of Bulgarian National Revival architecture, and it is a must-see destination for anyone visiting Sofia. Its rich history, beautiful design, and important cultural and religious significance make it a true treasure of the city.</p>',
      },
    },
    reviews: [
      {
        author: {
          names: 'Том Атанасов',
          photo: 'https://gravatar.com/avatar/101ecaaeb9247c0da0285d295c2a2e80?size=40',
        },
        rating: 5,
        date_added: 1660815374000,
        comment: 'Храм-паметникът "Свети Александър Невски" в София е впечатляваща и красива православна катедрала. Трябва да се види, когато посещавате града.',
        comment_language: 'bg',
        attachment: {
          source: '1-2.jpg',
          ratio: 'normal',
          type: 'photo',
        },
      },
      {
        author: {
          names: 'Александър Найденов',
          photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40',
        },
        rating: 4,
        date_added: 1685017043000,
        comment: 'Бях поразен от величието на храм-паметника "Свети Александър Невски" в София. Златните куполи и сложните детайли по екстериора са наистина зашеметяващи.',
        comment_language: 'bg',
        attachment: {
          source: null,
          ratio: null,
          type: null,
        },
      },
      {
        author: {
          names: 'Петър Георгиев',
          photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40',
        },
        rating: 5,
        date_added: 1685017043000,
        comment: 'Интериорът на храм-паметника "Свети Александър Невски" в София е също толкова впечатляващ, колкото и екстериорът. Стенописите и иконите спират дъха, а атмосферата е спокойна.',
        comment_language: 'bg',
        attachment: {
          source: null,
          ratio: null,
          type: null,
        },
      },
      {
        author: {
          names: 'Пламен Калайджиев',
          photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40',
        },
        rating: 5,
        date_added: 1685017043000,
        comment: 'Горещо препоръчвам да го посетите, дори и да не сте особено религиозни. Архитектурата и историята на катедралата я превръщат в завладяващо културно преживяване.',
        comment_language: 'bg',
        attachment: {
          source: 'https://i.ytimg.com/vi/uRKF_tGUhZw/hqdefault.jpg',
          ratio: null,
          type: 'video',
        },
      },
      {
        author: {
          names: 'Георги Йорданов',
          photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40',
        },
        rating: 2,
        date_added: 1685017043000,
        comment: 'Разочарован съм от посещението си. Екстериорът беше хубав, но интериорът не беше впечатляващ и не беше добре поддържан. Не оправда очакванията ми.',
        comment_language: 'bg',
        attachment: {
          source: '1-5.jpg',
          ratio: 'invert',
          type: 'photo',
        },
      },
      {
        author: {
          names: 'Мария Величкова',
          photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40',
        },
        rating: 5,
        date_added: 1685017043000,
        comment: 'Едно от най-хубавите неща за храма е местоположението. Разположен е на хълм с изглед към града, осигуряващ спираща дъха гледка от територията.',
        comment_language: 'bg',
        attachment: {
          source: null,
          ratio: null,
          type: null,
        },
      },
    ],
  },
  {
    slug: 'tsarevets',
    image: '/images/photos/2.jpg',
    locale: {
      bg: {
        title: 'Крепост "Царевец"',
        location: 'гр. Велико Търново',
      },
      en: {
        title: 'Tsarevets Fortress',
        location: 'Veliko Tarnovo City',
      },
    },
    categories: ['architecture'],
    subcategories: ['fortresses-and-ruins', 'historical-sites'],
    region: 'stara-planina',
    municipality: 'veliko-tarnovo',
    photos: [
      {
        image: '/images/photos/2-1.jpg',
        author: 'Архитектурно-музеен резерват "Царевец"',
        date_added: 1670777697,
      },
      {
        image: '/images/photos/2-2.jpg',
        author: 'Архитектурно-музеен резерват "Царевец"',
        date_added: 1670777697,
      },
      {
        image: '/images/photos/2-3.jpg',
        author: 'Архитектурно-музеен резерват "Царевец"',
        date_added: 1670777697,
      },
      {
        image: '/images/photos/2-4.jpg',
        author: 'Архитектурно-музеен резерват "Царевец"',
        date_added: 1670777697,
      },
    ],
    user_score: 4.4,
    reviews_count: Math.floor(Math.random() * 100),
    visitors: Math.floor(Math.random() * 1000),
    unesco: false,
    weather: [
      {
        date: getNextFiveDays(locale)[0],
        state: 'cloudy',
        temperature: [2, -3], // 0 = day, 1 = night
      },
      {
        date: getNextFiveDays(locale)[1],
        state: 'snow',
        temperature: [9, 1],
      },
      {
        date: getNextFiveDays(locale)[2],
        state: 'windy-cloudy',
        temperature: [12, 4],
      },
      {
        date: getNextFiveDays(locale)[3],
        state: 'snow',
        temperature: [14, 6],
      },
      {
        date: getNextFiveDays(locale)[4],
        state: 'partly-sunny',
        temperature: [9, -2],
      },
    ],
    coords: {
      latitude: 43.08385,
      longitude: 25.6525,
    },
    altitude: 210,
    markdown_content: {
      authors: [
        {
          names: 'Теодосий Пикянски',
          email: 'email@xen.gg',
          github_profile: 'https://google.bg/',
        },
      ],
      locale: {
        bg: '<h2>Царевец: Средновековна крепост в Северна България</h2><p>Царевец е историческо място, разположено във Велико Търново, Северна България. Това е средновековна крепост на хълм със същото име, извисяваща се на 206 метра (676 фута) над морското равнище. Мястото е служило като основната крепост и най-здравата крепост на Второто българско царство от 1185 до 1393 г. Днес то е популярна туристическа атракция, посещавана от много хора, които се интересуват от богатата история на България.История на Царевец</p><p>Хълмът Царевец има дълго и историческо минало. Най-ранните доказателства за човешко присъствие на хълма датират от 2-ро хилядолетие пр.н.е. През 4 век е заселен, а в края на 5 век е построен византийски град. Строежът на българската крепост започва през 12 век. След създаването на Второто българско царство със столица Велико Търново, крепостта става най-важната в България, често сравнявана по великолепие с Рим и Константинопол.</p><p>Но през 1393 г. крепостта е обсадена от османските сили в продължение на три месеца, преди най-накрая да бъде превзета и опожарена на 17 юли, което бележи падането на Българското царство.</p><h3>Оформление на Царевец</h3><p>Царевец има три входа. Главният вход се намира от най-източната страна на хълма. Комплексът на замъка е разположен в центъра, ограден от вътрешна каменна стена, две бойни кули и два входа - северен и южен. Състои се от тронна зала, църква на замъка и стаята на краля. Цялата крепост е опасана от дебели стени, достигащи до 3,6 метра (12 фута) и се обслужва от три порти. Дворецът е в централната и равнинна част на хълма, представляващ затворен комплекс, опасан от крепостна стена, две кули и два входа, главен от север и един от юг. Той включваше тронна зала, дворцова църква и кралска жилищна част и обхващаше 4872 квадратни метра (52 440 квадратни фута).</p><p>На върха на хълма е патриаршията, комплекс с площ от около 3000 квадратни метра (32 000 квадратни фута). Катедралата &quot;Възнесение Господне&quot;, построена върху останките на късноримска базилика, е реконструирана през 1981 г. и изписана през 1985 г.</p><h3>Други структури и атракции</h3><p>Балдуиновата кула е съвременна реконструкция на средновековна кула, построена по модела на кулата в Червен и построена през 1930 г. Тя се намира в югоизточната част на крепостта и е на мястото на оригиналната средновековна кула, където намира смъртта си латинският император Балдуин I от Константинопол като пленник на Калоян Български.</p><p>През Средновековието по склоновете на хълма Царевец са били разположени жилищни сгради, занаятчийски работилници и множество църкви и манастири. Археолозите са разкрили 400 жилищни сгради, обособени по квартали, над 22 църкви и 4 манастира. На хълма се намира и Скалата на екзекуцията, издигната над река Янтра, от която са избутвани на смърт предателите.</p><p>Аудиовизуалният спектакъл „Звук и светлина“ е вечерна атракция, която използва три лазера, пъстри светлини, драматична музика и църковни камбани, за да разкаже историята за падането на Търново под османско робство. Мащабното шоу се организира на Царевец от 1985 г.</p><h3>Признание и почести</h3><p>Царевец е една от най-популярните туристически атракции в България, привличаща хиляди посетители всяка година. Той също така е признат за своето историческо и културно значение, получавайки няколко отличия и обозначения.</p><p>През 1964 г. българското правителство обявява Царевец за национален паметник на културата. През 1977 г. е включен в програмата &quot;Стоте туристически обекта на България&quot;, списък на най-атрактивните и значими туристически дестинации в страната.</p><p>През 2007 г. Царевец е включен в предварителния списък на ЮНЕСКО за световно наследство. Номинацията признава изключителната универсална стойност на обекта и значението му за човешката история и култура.</p><p>През 2014 г. Царевец беше избран за българския кандидат за Наградата на Европейския съюз за културно наследство / Наградите Европа Ностра, престижна годишна награда, която отличава изключителни проекти за културно наследство в цяла Европа.</p><h3>Други атракции</h3><p>Освен самата крепост Царевец, в околността има още няколко забележителности.</p><p>Близкият град Велико Търново е очарователен и исторически град с богато културно наследство. Той разполага с разнообразие от музеи, галерии и културни институции, както и оживен център на града с магазини, ресторанти и кафенета.</p><p>Село Арбанаси, разположено само на няколко километра от Велико Търново, е друга популярна атракция. Това е добре запазено историческо село, което датира от 17-ти век и разполага с разнообразие от традиционни къщи, църкви и други културни обекти.</p><p>И накрая, близката река Янтра предлага разнообразие от дейности на открито, включително туризъм, риболов и каяк.</p><h3>Заключение</h3><p>Царевец е завладяващ и исторически значим обект, който предлага на посетителите да надникнат в богатото културно наследство на България. Неговата впечатляваща крепост, красиви църкви и зашеметяващи гледки го правят задължителна дестинация за всеки, който пътува до България. Независимо дали сте любител на историята, ентусиаст на архитектурата или просто търсите красиво място за разглеждане, Царевец със сигурност ще ви впечатли.</p>',
        en: '<h2>Tsarevets: A Medieval Stronghold in Northern Bulgaria</h2><p>Tsarevets is a historical site located in Veliko Tarnovo, northern Bulgaria. It is a medieval fortress on a hill with the same name, towering 206 metres (676 ft) above sea level. The site served as the primary fortress and strongest bulwark of the Second Bulgarian Empire from 1185 to 1393. Today, it is a popular tourist attraction, visited by many who are interested in Bulgaria&#39;s rich history.History of Tsarevets</p><p>The hill of Tsarevets has a long and storied past. The earliest evidence of human presence on the hill dates back to the 2nd millennium BC. In the 4th century, it was settled, and a Byzantine city was constructed near the end of the 5th century. Construction of the Bulgarian stronghold began in the 12th century. After the establishment of the Second Bulgarian Empire with its capital in Veliko Tarnovo, the fortress became the most important one in Bulgaria, often compared with Rome and Constantinople in magnificence.</p><p>However, in 1393, the fortress was besieged by Ottoman forces for three months before finally being conquered and burnt down on 17 July, which marked the fall of the Bulgarian Empire.</p><h3>Layout of Tsarevets</h3><p>Tsarevets has three entrances. The main entrance is located on the easternmost side of the hill. The castle complex is located in the centre, surrounded by an internal stone wall, two battle towers and two entrances - north and south. It consists of a throne hall, a castle church and the king&#39;s chamber. The whole stronghold is girdled by thick walls reaching up to 3.6 metres (12 ft) and was served by three gates. The palace is on the hill&#39;s central and plain part, which was a closed complex encircled by a fortified wall, two towers and two entrances, a main one from the north and one from the south. It featured a throne room, a palace church and a royal residential part and encompassed 4,872 square metres (52,440 sq ft).</p><p>On the top of the hill is the patriarchate, a complex with an area of about 3,000 square metres (32,000 sq ft). The Cathedral of the Ascension of the Lord, built on the remains of a late Roman basilica, was reconstructed in 1981 and painted in 1985.</p><h3>Other Structures and Attractions</h3><p>Baldwin&#39;s Tower is a modern reconstruction of a medieval tower modeled after the tower in Cherven and built in 1930. It is in the southeastern part of the fortress and is at the place of the original medieval tower where Latin Emperor Baldwin I of Constantinople found his death as a prisoner of Kaloyan of Bulgaria.</p><p>During the Middle Ages, residential buildings, craftsman&#39;s workshops and numerous churches and monasteries were situated on the slopes of the Tsarevets hill. Archaeologists have discovered 400 residential buildings, differentiated in quarters, over 22 churches and 4 monasteries. Execution Rock is also located on the hill, an outcropping over the Yantra River from which traitors were pushed to their deaths.</p><p>The Sound and Light audiovisual show is an attraction carried out in the evening that uses three lasers, variegated lights, dramatic music and church bells to tell the story of the fall of Tarnovo to the Ottomans. The large-scale show has been organized at Tsarevets since 1985.</p><h3>Recognition and Honours</h3><p>Tsarevets is one of the most popular tourist attractions in Bulgaria, attracting thousands of visitors each year. It has also been recognized for its historical and cultural significance, receiving several honors and designations.</p><p>In 1964, the Bulgarian government declared Tsarevets a national monument of culture. In 1977, it was included in the Hundred Tourist Sites of Bulgaria program, a list of the most attractive and important tourist destinations in the country.</p><p>In 2007, Tsarevets was included in the tentative list of UNESCO World Heritage Sites. The nomination recognizes the site&#39;s outstanding universal value and its significance to human history and culture.</p><p>In 2014, Tsarevets was selected as the Bulgarian nominee for the European Union Prize for Cultural Heritage / Europa Nostra Awards, a prestigious annual award that recognizes outstanding cultural heritage projects across Europe.</p><h3>Other Attractions</h3><p>Aside from Tsarevets fortress itself, there are several other attractions located in the surrounding area.</p><p>The nearby town of Veliko Tarnovo is a charming and historic town with a rich cultural heritage. It features a variety of museums, galleries, and cultural institutions, as well as a bustling city center with shops, restaurants, and cafes.</p><p>The Arbanasi Village, located just a few kilometers from Veliko Tarnovo, is another popular attraction. It is a well-preserved historic village that dates back to the 17th century and features a variety of traditional houses, churches, and other cultural sites.</p><p>Finally, the nearby Yantra River offers a variety of outdoor activities, including hiking, fishing, and kayaking.</p><h3>Conclusion</h3><p>Tsarevets is a fascinating and historically significant site that offers visitors a glimpse into Bulgaria&#39;s rich cultural heritage. Its impressive fortress, beautiful churches, and stunning views make it a must-visit destination for anyone traveling to Bulgaria. Whether you&#39;re a history buff, an architecture enthusiast, or simply looking for a beautiful place to explore, Tsarevets is sure to impress.</p>',
      },
    },
    reviews: [
      {
        author: {
          names: 'Том Атанасов',
          photo: 'https://gravatar.com/avatar/101ecaaeb9247c0da0285d295c2a2e80?size=40',
        },
        rating: 5,
        date_added: 1660815374000,
        comment: 'Наскоро посетих крепостта Царевец и останах очарован от историята и архитектурата. Крепостта е добре запазена и гледките от върха на хълма са направо спиращи дъха. Горещо препоръчвам да идете по време на звуково и светлинно шоу вечерта, тъй като то наистина оживява историята на крепостта. Като цяло, задължителна дестинация във Велико Търново!',
        comment_language: 'bg',
        attachment: {
          source: '2-2.jpg',
          ratio: 'normal',
          type: 'photo',
        },
      },
      {
        author: {
          names: 'Александър Найденов',
          photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40',
        },
        rating: 4,
        date_added: 1685017043000,
        comment: 'Крепостта Царевец е задължителна дестинация във Велико Търново. Крепостта е добре запазена и предлага много за разглеждане. Звуково-светлинното шоу вечер е задължително. Крепостта предлага поглед към историята на Второто българско царство и е мощен символ на българската идентичност и съпротива. Като цяло имах страхотно изживяване и горещо го препоръчвам на всеки, който посети Велико Търново.',
        comment_language: 'bg',
        attachment: {
          source: null,
          ratio: null,
          type: null,
        },
      },
      {
        author: {
          names: 'Петър Георгиев',
          photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40',
        },
        rating: 2,
        date_added: 1685017043000,
        comment: 'Наскоро посетих крепостта Царевец и останах доста разочарован от преживяването си. Крепостта е впечатляваща, но тълпите бяха огромни и беше трудно да се насладите напълно на изживяването. Персоналът също изглеждаше незаинтересован да предоставя информация за историята на крепостта. Като цяло си заслужава да се посети, но не бих си дал труда да го видя отново.',
        comment_language: 'bg',
        attachment: {
          source: null,
          ratio: null,
          type: null,
        },
      },
      {
        author: {
          names: 'Пламен Калайджиев',
          photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40',
        },
        rating: 5,
        date_added: 1685017043000,
        comment: 'Много ме впечатли реставрацията на крепостта Царевец. Крепостта е в отлично състояние и предлага много за разглеждане и изследване. Особено ми хареса да посетя патриаршеската църква „Свето Възнесение Господне“ и да се запозная с нейната история. Препоръчвам също да идете по време на звуково и светлинно шоу вечерта, беше наистина невероятно изживяване.',
        comment_language: 'bg',
        attachment: {
          source: 'https://i.ytimg.com/vi/uRKF_tGUhZw/hqdefault.jpg',
          ratio: null,
          type: 'video',
        },
      },
      {
        author: {
          names: 'Георги Йорданов',
          photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40',
        },
        rating: 2,
        date_added: 1685017043000,
        comment: 'Бях наистина развълнуван да посетя крепостта Царевец, но бях разочарован от тълпите и липсата на предоставена информация. Самата крепост е впечатляваща, но беше трудно да я оценя напълно с толкова много хора наоколо. Освен това открих, че персоналът не беше много полезен при предоставянето на информация за историята на крепостта. Като цяло си заслужава посещението, но не бих го поставил като основен приоритет.',
        comment_language: 'bg',
        attachment: {
          source: '2-5.jpg',
          ratio: 'normal',
          type: 'photo',
        },
      },
      {
        author: {
          names: 'Мария Величкова',
          photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40',
        },
        rating: 5,
        date_added: 1685017043000,
        comment: 'Крепостта Царевец беше един от акцентите в пътуването ми до България. Крепостта е добре запазена и предлага поглед към историята на Второто българско царство. Насладих се на аудио обиколката, която предостави много информация за историята на крепостта и хората, които са живели там. Определено бих препоръчала посещение на крепостта Царевец на всеки, който се интересува от история или архитектура.',
        comment_language: 'bg',
        attachment: {
          source: null,
          ratio: null,
          type: null,
        },
      },
    ],
  },
  {
    slug: 'rilski-manastir',
    image: '/images/photos/3.jpg',
    locale: {
      bg: {
        title: 'Манастир "Свети Иван Рилски"',
        location: 'до гр. Рила',
      },
      en: {
        title: 'Rila Monastery Saint Ivan of Rila',
        location: 'next to Rila City',
      },
    },
    categories: ['religion'],
    subcategories: ['orthodox-monasteries-and-chapels'],
    region: 'rila-pirin',
    municipality: 'rila',
    photos: [
      {
        image: '/images/photos/3-1.jpg',
        author: 'Андрей Андреев',
        date_added: 1670777697,
      },
      {
        image: '/images/photos/3-2.jpg',
        author: 'Андрей Андреев',
        date_added: 1670777697,
      },
      {
        image: '/images/photos/3-3.jpg',
        author: 'Андрей Андреев',
        date_added: 1670777697,
      },
      {
        image: '/images/photos/3-4.jpg',
        author: 'Андрей Андреев',
        date_added: 1670777697,
      },
    ],
    user_score: 5.0,
    reviews_count: Math.floor(Math.random() * 100),
    visitors: Math.floor(Math.random() * 1000),
    unesco: true,
    weather: [
      {
        date: getNextFiveDays(locale)[0],
        state: 'cloudy',
        temperature: [2, -3], // 0 = day, 1 = night
      },
      {
        date: getNextFiveDays(locale)[1],
        state: 'snow',
        temperature: [9, 1],
      },
      {
        date: getNextFiveDays(locale)[2],
        state: 'windy-cloudy',
        temperature: [12, 4],
      },
      {
        date: getNextFiveDays(locale)[3],
        state: 'snow',
        temperature: [14, 6],
      },
      {
        date: getNextFiveDays(locale)[4],
        state: 'partly-sunny',
        temperature: [9, -2],
      },
    ],
    coords: {
      latitude: 42.13348,
      longitude: 23.34019,
    },
    altitude: 1162,
    markdown_content: {
      authors: [
        {
          names: 'Нано Римпопов',
          email: 'email@xen.gg',
          github_profile: 'https://google.bg/',
        },
        {
          names: 'Параскев Бърборков',
          email: 'email@xen.gg',
          github_profile: 'https://google.bg/',
        },
      ],
      locale: {
        bg: '<h2>Манастир &quot;Свети Иван Рилски&quot;</h2><p>Манастирът „Свети Йоан Рилски“, известен още като Рилски манастир „Свети Иван Рилски“, е значим източноправославен манастир, разположен в югозападната част на Рила в България. Манастирът носи името на своя основател, отшелника Иван Рилски (876 – 946 г.) и се намира в дълбоката долина на река Рилска („Рилска река“) на територията на природен парк „Рилски манастир“. Той е най-големият и известен източноправославен манастир в България, приютяващ около 60 монаси.</p><h3>Историческо значение</h3><p>Основан през 10 век, Рилският манастир се счита за един от най-важните културно-исторически и архитектурни паметници на България. Той е бил подкрепян и уважаван от българските владетели през цялата история, а почти всеки цар от Второто българско царство е правил големи дарения на манастира, превръщайки го в културен и духовен център на българското национално самосъзнание.</p><p>Най-старите сгради в комплекса датират от първата половина на 14 век, по времето на цар Петър I (927-968). Идването на османците в края на 14 век води до многобройни набези и разрушаването на манастира в средата на 15 век. Той е възстановен в края на 15 век с помощта на дарения от султана Мара Бранкович, Руската православна църква и манастира Росикон на Света гора.</p><p>По време на Възраждането (18-19 век) манастирът е опожарен през 1833 г. и възстановен между 1834 и 1862 г. с помощта на заможни българи от цялата страна, под ръководството на известния архитект Алекси Рилец.</p><h3>Архитектурни характеристики</h3><p>Комплексът заема площ от 8800 м² и е с правоъгълна форма, съсредоточен върху вътрешния двор (3200 м²), където се намират кулата и главната църква. Основната църква на манастира е построена в средата на 19 век и има пет купола, три олтара и два странични параклиса. Един от най-ценните предмети в църквата е позлатения иконостас, известен със своята дърворезба, чието създаване отнема пет години от четирима майстори.</p><p>Стенописите в църквата са дело на много майстори от Банско, Самоков и Разлог, сред които известните братя Захари Зограф и Димитър Зограф. Църквата е дом и на много ценни икони, датиращи от 14-ти до 19-ти век. Портиците в двора имат мамелюкско влияние с раираната живопис и куполите, които стават по-популярни в Османската империя след завладяването на Египет.</p><p>Четириетажната (без сутерена) жилищна част на комплекса се състои от 300 стаи, четири параклиса, игуменска стая и други сервизни помещения.</p><h3>Туристическа забележителност</h3><p>Рилският манастир е ключова туристическа атракция в България, като само през 2008 г. е привлякъл около 900 000 посетители. Изобразен е на обратната страна на банкнотата от 1 лев, емисия 1999 г. Манастирският комплекс е считан за един от най-големите шедьоври на българската възрожденска архитектура и е обявен за национален исторически паметник през 1976 г. През 1976 г. е включен в списъка на ЮНЕСКО за световно наследство. 1983 г., а от 1991 г. е изцяло на подчинение на Светия Синод на Българската православна църква.</p><h3>Известни посетители</h3><p>През годините Рилският манастир е посрещал много известни посетители от цял свят, включително папа Йоан Павел II, който посети манастира по време на поклонението си в България през 2002 г. Манастирът е служил и като скривалище на българските революционери по време на османското владичество.</p><h3>Рилският манастир днес</h3><p>Днес Рилският манастир продължава да бъде действащ манастир и основна туристическа атракция в България. Отворен е за посетители и предлага екскурзоводско обслужване на комплекса, както и нощувки за желаещите да пренощуват в манастира. Манастирът разполага и с музей, който показва неговата история, изкуство и архитектура.</p><p>Всяка година на 18 август манастирът отбелязва празника на Свети Иван Рилски със специална литургия и литийно шествие. Манастирът също така е домакин на различни културни събития през цялата година, включително концерти, изложби и лекции.</p><p>През последните години манастирът е изправен пред някои предизвикателства, свързани с туризма, включително пренаселеност и увреждане на природната среда. Полагат се усилия за справяне с тези проблеми и осигуряване на устойчиво управление на манастира и околностите му.</p><h3>Заключение</h3><p>Рилският манастир е забележителен културен и духовен център, изиграл важна роля в българската история и национално самосъзнание. Неговата зашеметяваща архитектура, ценно изкуство и артефакти и богата история го правят задължителна дестинация за всеки, който се интересува от българската култура и източноправославното християнство.</p>',
        en: '<h2>Rila Monastery &quot;Sveti Ivan Rilski&quot;</h2><p>The Monastery of Saint John of Rila, also known as Rila Monastery &quot;Sveti Ivan Rilski,&quot; is a significant Eastern Orthodox monastery located in the southwestern Rila Mountains of Bulgaria. The monastery is named after its founder, the hermit Ivan of Rila (876 – 946 AD), and is situated in the deep valley of the Rilska River (&quot;Rila River&quot;) inside the Rila Monastery Nature Park. It is the largest and most famous Eastern Orthodox monastery in Bulgaria, housing around 60 monks.</p><h3>Historical Significance</h3><p>Founded in the 10th century, the Rila Monastery is considered one of Bulgaria&#39;s most important cultural, historical, and architectural monuments. It has been supported and respected by Bulgarian rulers throughout history, and almost every tsar of the Second Bulgarian Empire made large donations to the monastery, making it a cultural and spiritual center of Bulgarian national consciousness.</p><p>The oldest buildings in the complex date back to the first half of the 14th century, during the reign of Tsar Peter I (927-968). The arrival of the Ottomans in the late 14th century led to numerous raids and the destruction of the monastery in the mid-15th century. It was rebuilt in the late 15th century with the help of donations from the Sultana Mara Branković, the Russian Orthodox Church, and the Rossikon monastery of Mount Athos.</p><p>During the Bulgarian National Revival (18th-19th century), the monastery was destroyed by fire in 1833 and then reconstructed between 1834 and 1862 with the help of wealthy Bulgarians from across the country, under the famous architect Alexi Rilets.</p><h3>Architectural Features</h3><p>The complex occupies an area of 8,800 m² and is rectangular in form, centered on the inner yard (3,200 m²), where the tower and the main church are situated. The main church of the monastery was built in the mid-19th century and has five domes, three altars, and two side chapels. One of the most precious items inside the church is the gold-plated iconostasis, famous for its wood-carving, the creation of which took five years by four handicraftsmen.</p><p>The frescoes in the church are the work of many masters from Bansko, Samokov, and Razlog, including the famous brothers Zahari Zograf and Dimitar Zograf. The church is also home to many valuable icons, dating from the 14th to the 19th century. Porticos in the courtyard have Mamluk influence with the striped painting and the domes, which became more popular in the Ottoman Empire after the conquest of Egypt.</p><p>The four-story (not counting the basement) residential part of the complex consists of 300 chambers, four chapels, an abbot&#39;s room, and other service premises.</p><h3>Tourist Attraction</h3><p>The Rila Monastery is a key tourist attraction in Bulgaria, attracting around 900,000 visitors in 2008 alone. It is depicted on the reverse of the 1 lev banknote, issued in 1999. The monastery complex is regarded as one of the foremost masterpieces of Bulgarian National Revival architecture and was declared a national historical monument in 1976. It became a UNESCO World Heritage Site in 1983 and has been entirely subordinate to the Holy Synod of the Bulgarian Orthodox Church since 1991.</p><h3>Notable Visitors</h3><p>Over the years, Rila Monastery has welcomed many notable visitors from around the world, including Pope John Paul II, who visited the monastery during his pilgrimage to Bulgaria in 2002. The monastery also served as a hiding place for Bulgarian revolutionaries during the Ottoman rule.</p><h3>Rila Monastery Today</h3><p>Today, Rila Monastery continues to be an active monastery and a major tourist attraction in Bulgaria. It is open to visitors and offers guided tours of the complex, as well as accommodations for those who wish to spend the night in the monastery. The monastery also operates a museum that showcases its history, art, and architecture.</p><p>Every year, on August 18, the monastery celebrates the feast day of Saint Ivan of Rila with a special liturgy and a procession. The monastery also hosts various cultural events throughout the year, including concerts, exhibitions, and lectures.</p><p>In recent years, the monastery has faced some challenges related to tourism, including overcrowding and damage to the natural environment. Efforts are being made to address these issues and ensure the sustainable management of the monastery and its surroundings.</p><h3>Conclusion</h3><p>The Rila Monastery is a remarkable cultural and spiritual center that has played an important role in Bulgarian history and national consciousness. Its stunning architecture, valuable art and artifacts, and rich history make it a must-visit destination for anyone interested in Bulgarian culture and Eastern Orthodox Christianity.</p>',
      },
    },
    reviews: [
      {
        author: {
          names: 'Том Атанасов',
          photo: 'https://gravatar.com/avatar/101ecaaeb9247c0da0285d295c2a2e80?size=40',
        },
        rating: 5,
        date_added: 1660815374000,
        comment: 'Рилският манастир беше наистина спиращо дъха изживяване. Сложните стенописи и зашеметяващата архитектура ме оставиха в страхопочитание. Силно препоръчвам да посетите това историческо бижу.',
        comment_language: 'bg',
        attachment: {
          source: '3-2.jpg',
          ratio: 'normal',
          type: 'photo',
        },
      },
      {
        author: {
          names: 'Александър Найденов',
          photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40',
        },
        rating: 4,
        date_added: 1685017043000,
        comment: 'Манастирът беше още по-впечатляващ, отколкото си представях. Спокойната атмосфера и богатата история направиха посещението ми наистина незабравимо.',
        comment_language: 'bg',
        attachment: {
          source: null,
          ratio: null,
          type: null,
        },
      },
      {
        author: {
          names: 'Петър Георгиев',
          photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40',
        },
        rating: 2,
        date_added: 1685017043000,
        comment: 'Бях разочарован от посещението си в Рилския манастир. Тълпите бяха огромни и беше трудно да се оцени напълно красотата на мястото.',
        comment_language: 'bg',
        attachment: {
          source: null,
          ratio: null,
          type: null,
        },
      },
      {
        author: {
          names: 'Пламен Калайджиев',
          photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40',
        },
        rating: 5,
        date_added: 1685017043000,
        comment: 'Рилският манастир е нещо, което трябва да се види от всеки, който посети България. Комбинацията от религиозно и културно значение създава едно наистина смислено преживяване.',
        comment_language: 'bg',
        attachment: {
          source: 'https://i.ytimg.com/vi/uRKF_tGUhZw/hqdefault.jpg',
          ratio: null,
          type: 'video',
        },
      },
      {
        author: {
          names: 'Георги Йорданов',
          photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40',
        },
        rating: 5,
        date_added: 1685017043000,
        comment: 'Стенописите в църквата бяха истинско произведение на изкуството. Вниманието към детайла и наситените цветове спираха дъха. Силно препоръчвам да посетите Рилския манастир.',
        comment_language: 'bg',
        attachment: {
          source: '3-5.jpg',
          ratio: 'normal',
          type: 'photo',
        },
      },
      {
        author: {
          names: 'Мария Величкова',
          photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40',
        },
        rating: 5,
        date_added: 1685017043000,
        comment: 'Бях изумена от историята и красотата на Рилския манастир. Отбранителните стени и кули предлагаха страхотна гледка към околния пейзаж. Това определено беше един от акцентите в пътуването ми до България.',
        comment_language: 'bg',
        attachment: {
          source: null,
          ratio: null,
          type: null,
        },
      },
    ],
  },
  {
    slug: 'shipka-monument',
    image: '/images/photos/4.jpg',
    locale: {
      bg: {
        title: 'Паметник на свободата "Шипка"',
        location: 'до гр. Шипка',
      },
      en: {
        title: 'Shipka Monument',
        location: 'next to Shipka City',
      },
    },
    categories: ['architecture'],
    subcategories: ['monuments'],
    region: 'valley-of-roses',
    municipality: 'kazanlak',
    photos: [
      {
        image: '/images/photos/4-1.jpg',
        author: 'Неизвестен',
        date_added: 1670777697,
      },
      {
        image: '/images/photos/4-2.jpg',
        author: 'Неизвестен',
        date_added: 1670777697,
      },
      {
        image: '/images/photos/4-3.jpg',
        author: 'Неизвестен',
        date_added: 1670777697,
      },
      {
        image: '/images/photos/4-4.jpg',
        author: 'Неизвестен',
        date_added: 1670777697,
      },
    ],
    user_score: 4.9,
    reviews_count: Math.floor(Math.random() * 100),
    visitors: Math.floor(Math.random() * 1000),
    unesco: false,
    weather: [
      {
        date: getNextFiveDays(locale)[0],
        state: 'cloudy',
        temperature: [2, -3], // 0 = day, 1 = night
      },
      {
        date: getNextFiveDays(locale)[1],
        state: 'snow',
        temperature: [9, 1],
      },
      {
        date: getNextFiveDays(locale)[2],
        state: 'windy-cloudy',
        temperature: [12, 4],
      },
      {
        date: getNextFiveDays(locale)[3],
        state: 'snow',
        temperature: [14, 6],
      },
      {
        date: getNextFiveDays(locale)[4],
        state: 'partly-sunny',
        temperature: [9, -2],
      },
    ],
    coords: {
      latitude: 42.74829,
      longitude: 25.3215,
    },
    altitude: Math.floor(Math.random() * 1000),
    markdown_content: {
      authors: [
        {
          names: 'Светлю Монтянов',
          email: 'email@xen.gg',
          github_profile: 'https://google.bg/',
        },
        {
          names: 'Ингемунд Овнарски',
          email: 'email@xen.gg',
          github_profile: 'https://google.bg/',
        },
      ],
      locale: {
        bg: '<h3>Кратко резюме</h3><p>Паметникът на Шипка е извисяващ се паметник, разположен в малкото българско село Шипка. Построен е в памет на храбростта и саможертвата на българския народ по време на Руско-турската война от 1877-1878 г. Паметникът се издига на 53 метра височина на мястото на битката при Шипченския проход, която е една от най-значимите битки на войната и повратна точка за независимостта на България. Войната се води между Руската империя и Османската империя и е предизвикана от желанието на Руската империя да разшири своята територия и влияние на Балканите, както и от нарастващото недоволство на християнското население в Османската империя. Тогава България е била провинция на Османската империя и е попаднала в центъра на конфликта. Битката при прохода Шипка е решаващ момент във войната, тъй като проходът е единственият жизнеспособен маршрут за руската армия да марширува към Константинопол, столицата на Османската империя. Османската армия е решена да защитава прохода и да попречи на руската армия да напредне, но българският народ се присъединява към руската армия в битката. Въпреки че са превъзхождани числено и оръжие, те успяват да победят османската армия и да поемат контрола над прохода. Паметникът на Шипка е построен през 1934 г. по проект на българския архитект Никола Лазаров, със статуя на български войник на върха, изработена от мед и покрита със злато. Заобиколен е от красив парк и разполага с музей, разказващ историята на битката при Шипченския проход и Руско-турската война.</p><h3>История</h3><p>Паметникът на Шипка, разположен в малкия български град Шипка, е величествен знак на почит към храбростта и саможертвата на българския народ по време на Руско-турската война от 1877-1878 г. Паметникът, който се издига на височина 53 метра, е издигнат на мястото на битката при Шипченския проход, една от най-значимите битки на войната и повратна точка за независимостта на България.</p><p>Руско-турската война, продължила от 1877 до 1878 г., се води между Руската империя и Османската империя. Войната е предизвикана от желанието на Руската империя да разшири своята територия и влияние на Балканите, както и от нарастващото недоволство на християнското население в Османската империя. България, която тогава е била провинция на Османската империя, е попаднала в центъра на конфликта.</p><p>Битката при прохода Шипка, водена през лятото на 1877 г., е решаващ момент във войната. Проходът, разположен в Стара планина, е единственият жизнеспособен маршрут за марша на руската армия към Константинопол, столицата на Османската империя. Османската армия, водена от Сюлейман паша, беше решена да защити прохода и да попречи на руската армия да напредне.</p><p>Българският народ, който страдаше под гнета на Османската империя, видя възможността да спечели тяхната свобода и се присъедини към руската армия в битката. Заедно те се изправят срещу османската армия в кървава и жестока битка, продължила няколко месеца. Въпреки че са числено превъзхождани и превъзхождани с оръжие, българите и руснаците успяват да победят османската армия и да овладеят прохода. Битката е повратна точка във войната и бележи началото на края на Османската империя на Балканите.</p><p>Паметникът на Шипка, построен през 1934 г., е издигнат в памет на храбростта и саможертвата на българите хора по време на битката при Шипченския проход. Паметникът, проектиран от българския архитект Никола Лазаров, е забележителна и внушителна конструкция, която се отличава със статуя на български войник на върха. Статуята, която се издига на височина 15 метра, е изработена от мед и е покрита със златни листа.</p><p>Паметникът е заобиколен от красив парк и е популярна дестинация както за туристите, така и за местните жители. Посетителите могат да се качат с лифт до върха на паметника, откъдето могат да се насладят на панорамна гледка към околността. В парка има и музей, който разказва историята на битката при Шипченския проход и Руско-турската война.</p><p>В заключение, Паметникът на Шипка е мощна и вълнуваща почит към храбростта и саможертвата на българина народ по време на Руско-турската война от 1877-1878 г. Паметникът, който е построен на мястото на битката при Шипченския проход, е символ на независимостта на България и спомен за жертвите, дадени за нейното постигане. Това е чудесен начин да си припомним миналото и историята на България.</p>',
        en: '<h3>Summary</h3><p>The Shipka Monument is a towering tribute located in the small Bulgarian village of Shipka. It was erected to commemorate the bravery and sacrifice of the Bulgarian people during the Russo-Turkish War of 1877-1878. The monument stands at a height of 53 meters on the site of the Battle of Shipka Pass, which was one of the most significant battles of the war and a turning point for Bulgaria\'s independence. The war was fought between the Russian Empire and the Ottoman Empire and sparked by the desire of the Russian Empire to expand its territory and influence in the Balkans, as well as by the growing discontent of the Christian population in the Ottoman Empire. Bulgaria was then a province of the Ottoman Empire and caught in the middle of the conflict. The Battle of Shipka Pass was a crucial moment in the war as the pass was the only viable route for the Russian army to march on Constantinople, the capital of the Ottoman Empire. The Ottoman army was determined to defend the pass and prevent the Russian army from advancing, but the Bulgarian people joined the Russian army in the fight. Despite being outnumbered and outgunned, they were able to defeat the Ottoman army and take control of the pass. The Shipka Monument was built in 1934, designed by the Bulgarian architect Nikola Lazarov, featuring a statue of a Bulgarian soldier at the top made of copper and covered in gold leaf. It is surrounded by a beautiful park and features a museum that tells the story of the Battle of Shipka Pass and the Russo-Turkish War.</p><h3>History</h3><p>The Shipka Monument, located in the small Bulgarian city of Shipka, is a towering tribute to the bravery and sacrifice of the Bulgarian people during the Russo-Turkish War of 1877-1878. The monument, which stands at a height of 53 meters, was erected on the site of the Battle of Shipka Pass, one of the most significant battles of the war and a turning point for Bulgaria\'s independence.</p><p>The Russo-Turkish War, which lasted from 1877 to 1878, was fought between the Russian Empire and the Ottoman Empire. The war was sparked by the desire of the Russian Empire to expand its territory and influence in the Balkans, as well as by the growing discontent of the Christian population in the Ottoman Empire. Bulgaria, which was then a province of the Ottoman Empire, was caught in the middle of the conflict.</p><p>The Battle of Shipka Pass, fought in the summer of 1877, was a crucial moment in the war. The pass, located in the Balkan Mountains, was the only viable route for the Russian army to march on Constantinople, the capital of the Ottoman Empire. The Ottoman army, led by Suleiman Pasha, was determined to defend the pass and prevent the Russian army from advancing.</p><p>The Bulgarian people, who were suffering under the oppression of the Ottoman Empire, saw the opportunity to gain their freedom and joined the Russian army in the fight. Together, they faced the Ottoman army in a bloody and brutal battle that lasted for several months. Despite being outnumbered and outgunned, the Bulgarians and the Russians were able to defeat the Ottoman army and take control of the pass. The battle was a turning point in the war and marked the beginning of the end for the Ottoman Empire in the Balkans.</p><p>The Shipka Monument, built in 1934, was erected to commemorate the bravery and sacrifice of the Bulgarian people during the Battle of Shipka Pass. The monument, designed by the Bulgarian architect Nikola Lazarov, is a striking and imposing structure that features a statue of a Bulgarian soldier at the top. The statue, which stands at a height of 15 meters, is made of copper and is covered in gold leaf.</p><p>The monument is surrounded by a beautiful park and is a popular destination for tourists and locals alike. Visitors can take a lift to the top of the monument, where they can enjoy panoramic views of the surrounding area. The park also features a museum that tells the story of the Battle of Shipka Pass and the Russo-Turkish War.</p><p>In conclusion, the Shipka Monument is a powerful and moving tribute to the bravery and sacrifice of the Bulgarian people during the Russo-Turkish War of 1877-1878. The monument, which was built on the site of the Battle of Shipka Pass, is a symbol of Bulgaria\'s independence and a reminder of the sacrifices that were made to achieve it. It\'s a great way to remember the past and the history of Bulgaria.</p>',
      },
    },
    reviews: [
      {
        author: {
          names: 'Том Атанасов',
          photo: 'https://gravatar.com/avatar/101ecaaeb9247c0da0285d295c2a2e80?size=40',
        },
        rating: 5,
        date_added: 1660815374000,
        comment: 'Наскоро посетих паметника на Шипка и трябва да кажа, че беше невероятно вълнуващо преживяване. Паметникът е наистина впечатляващ, а гледките от върха са спиращи дъха. Паркът и музеят също бяха добре поддържани и предоставяха много информация за историята на района. Определено бих препоръчал посещението на този паметник на всеки, който се интересува от българската история и култура.',
        comment_language: 'bg',
        attachment: {
          source: '4-2.jpg',
          ratio: 'normal',
          type: 'photo',
        },
      },
      {
        author: {
          names: 'Александър Найденов',
          photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40',
        },
        rating: 4,
        date_added: 1685017043000,
        comment: 'Паметникът на Шипка трябва да се види от всеки любител на историята. Самият паметник е впечатляващ, но музеят и паркът предоставят много контекст и основна информация. Бях особено впечатлен от аудиогида, който беше достъпен на много езици. Като цяло, чудесен начин да прекарате един следобед.',
        comment_language: 'bg',
        attachment: {
          source: null,
          ratio: null,
          type: null,
        },
      },
      {
        author: {
          names: 'Петър Георгиев',
          photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40',
        },
        rating: 2,
        date_added: 1685017043000,
        comment: 'Наистина бях разочарован от посещението си на Паметника Шипка. Самият паметник е добре, но гледката от върха беше препречена от дървета. Музеят беше затворен, а паркът беше мръсен и неподдържан. Не бих препоръчал посещение на този паметник.',
        comment_language: 'bg',
        attachment: {
          source: null,
          ratio: null,
          type: null,
        },
      },
      {
        author: {
          names: 'Пламен Калайджиев',
          photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40',
        },
        rating: 5,
        date_added: 1685017043000,
        comment: 'Много ме впечатли Паметникът на Шипка. Статуята на българския войник на върха е много мощна, а гледките от върха са невероятни. Музеят също беше много информативен и ми помогна да разбера значението на битката при Шипченския проход в голямата схема на българската история.',
        comment_language: 'bg',
        attachment: {
          source: 'https://i.ytimg.com/vi/uRKF_tGUhZw/hqdefault.jpg',
          ratio: null,
          type: 'video',
        },
      },
      {
        author: {
          names: 'Георги Йорданов',
          photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40',
        },
        rating: 5,
        date_added: 1685017043000,
        comment: 'Паметникът на Шипка е чудесно място за посещение, ако се интересувате от българската история. Паметникът е добре поддържан и гледките от върха са красиви. Музеят обаче би могъл да се актуализира, аудиогидът не работеше правилно и някои от експонатите не бяха в добро състояние.',
        comment_language: 'bg',
        attachment: {
          source: '4-5.jpg',
          ratio: 'invert',
          type: 'photo',
        },
      },
      {
        author: {
          names: 'Мария Величкова',
          photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40',
        },
        rating: 5,
        date_added: 1685017043000,
        comment: 'Паметникът на Шипка е чудесно място за посещение, но изкачването е малко тренировка. След като стигнете върха, гледките си заслужават. Паркът и музеят също са чудесен начин да научите повече за историята на района. Бих препоръчалa това място на всеки, който иска да научи повече за България.',
        comment_language: 'bg',
        attachment: {
          source: null,
          ratio: null,
          type: null,
        },
      },
    ],
  },
  {
    slug: 'belogradchishkite-skali',
    image: '/images/photos/5.jpg',
    locale: {
      bg: {
        title: 'Белоградчишките скали',
        location: 'гр. Белоградчик',
      },
      en: {
        title: 'The Rocks of Belogradchik',
        location: 'Belogradchik City',
      },
    },
    categories: ['architecture', 'nature'],
    subcategories: ['fortresses-and-ruins', 'historical-sites', 'mountainous-sites', 'natural-formations'],
    region: 'danube',
    municipality: 'vidin',
    photos: [
      {
        image: '/images/photos/5-1.jpg',
        author: 'Владислав Терзийски',
        date_added: 1670777697,
      },
      {
        image: '/images/photos/5-2.jpg',
        author: 'Пламен Петков',
        date_added: 1670777697,
      },
      {
        image: '/images/photos/5-3.jpg',
        author: 'Неизвестен',
        date_added: 1670777697,
      },
      {
        image: '/images/photos/5-4.jpg',
        author: 'Неизвестен',
        date_added: 1670777697,
      },
    ],
    user_score: 4.5,
    reviews_count: Math.floor(Math.random() * 100),
    visitors: Math.floor(Math.random() * 1000),
    unesco: false,
    weather: [
      {
        date: getNextFiveDays(locale)[0],
        state: 'cloudy',
        temperature: [2, -3], // 0 = day, 1 = night
      },
      {
        date: getNextFiveDays(locale)[1],
        state: 'snow',
        temperature: [9, 1],
      },
      {
        date: getNextFiveDays(locale)[2],
        state: 'windy-cloudy',
        temperature: [12, 4],
      },
      {
        date: getNextFiveDays(locale)[3],
        state: 'snow',
        temperature: [14, 6],
      },
      {
        date: getNextFiveDays(locale)[4],
        state: 'partly-sunny',
        temperature: [9, -2],
      },
    ],
    coords: {
      latitude: 43.6231151,
      longitude: 22.6780466,
    },
    altitude: Math.floor(Math.random() * 1000),
    markdown_content: {
      authors: [
        {
          names: 'Замфир Младенов',
          email: 'email@xen.gg',
          github_profile: 'https://google.bg/',
        },
        {
          names: 'Фили Милачков',
          email: 'email@xen.gg',
          github_profile: 'https://google.bg/',
        },
      ],
      locale: {
        bg: '<h3>Кратко резюме</h3><p>Белоградчишките скали в Северозападна България са природно чудо, устояло на времето. Тези извисяващи се образувания от пясъчник и конгломерат са пленявали въображението на местните жители и посетителите от векове. Те са се образували преди милиони години в резултат на масивна тектонична промяна, а последвалата ерозия и изветряне създадоха уникалните форми и характеристики, които виждаме днес. В исторически план Белоградчишките скали са служили като естествена крепост за близкото селище по време на Римската империя и по-късно са разширени и укрепени от византийците за защита срещу варварски нашествия. През Средновековието скалите са служили за убежище на местното население по време на войни и конфликти, а по време на османската окупация са били използвани като затвор за политически дисиденти. В най-новата история районът е определен за природен резерват по време на комунизма, а след падането на комунизма през 1989 г. се превръща в популярна туристическа дестинация. Белоградчишките скали също са дом на разнообразен растителен и животински свят и няколко интересни пещери, включително пещерата Магура, която е известна със своите праисторически рисунки. В заключение, Белоградчишките скали са уникално и завладяващо природно чудо, което е изиграло важна роля в историята на България и продължава да бъде източник на вдъхновение и чудеса за посетителите.</p><h3>История</h3><p>Белоградчишките скали, разположени в северозападна България, са спиращо дъха природно чудо, устояло на времето. Тези извисяващи се пясъчни и конгломератни образувания, някои достигащи над 200 метра височина, пленяват въображението на местните жители и посетителите от векове.</p><p>Историята на Белоградчишките скали датира от древността, когато са били образувани в резултат на масивна тектонична промяна. Процесът на ерозия и изветряне, последвал в продължение на милиони години, е довел до уникалните форми и характеристики, които виждаме днес.</p><p>По време на Римската империя Белоградчишките скали са служили като естествена крепост, осигуряваща защита на близките селище Белоградчик. На мястото римляните построили крепост, която по-късно била разширена и укрепена от византийците. Тези укрепления са били използвани за защита срещу варварски нашествия и са служили като стратегическа точка за контрол на региона.</p><p>През Средновековието Белоградчишките скали стават убежище за местното население по време на войни и конфликти. Те са давали подслон на селяните, а естествената защита на скалите ги е затруднявала за превземане от нашествениците.</p><p>По време на османската окупация в България Белоградчишките скали са били използвани като затвор за политически дисиденти. Тежките условия и изолацията на затвора го превърнаха в страшно място сред населението.</p><p>Белоградчишките скали също са изиграли роля в най-новата история на България. По време на комунизма районът е обявен за природен резерват и е забранен за посетители. След падането на комунизма през 1989 г. обаче Белоградчишките скали стават популярна туристическа дестинация. Днес те привличат хиляди посетители всяка година, които идват да се полюбуват на естествената им красота и богата история.</p><p>Едно от най-впечатляващите неща за Белоградчишките скали е начинът, по който са били оформени от природата. Различните слоеве от пясъчник и конгломерат са изваяни в различни форми, от високи кули до широки плата. Различните цветове на скалите, от наситено червено до нежно жълто, създават хипнотизиращ контраст на фона на синьото небе.</p><p>Скалите на Белоградчик също са дом на разнообразен растителен и животински свят. Скалистите разкрития осигуряват местообитание за различни птици, включително застрашения белоглав лешояд. Околните гори са дом на диви свине, елени и дори от време на време мечки.</p><p>Белоградчишките скали също са дом на няколко интересни пещери, включително пещерата Магура, която е известна с праисторическите си рисунки, датиращи от Неолитна епоха. Пещерните рисунки изобразяват животни и символи, за които се смята, че са имали духовно или ритуално значение за древните хора, които са ги създали.</p><p>В заключение, Белоградчишките скали са уникално и завладяващо природно чудо, което е изиграло важна роля в историята на България. От служещи като естествена крепост през древни времена, до предоставяне на подслон на селяните по време на средновековни конфликти, до затвор по време на османската окупация, тези скали са свидетелствали за разнообразната и богата история на региона. Днес те продължават да бъдат източник на вдъхновение и чудеса за посетители от цял свят.</p>',
        en: '<h3>Summary</h3><p>The Rocks of Belogradchik in northwest Bulgaria are a natural wonder that have stood the test of time. These towering sandstone and conglomerate formations have captured the imaginations of locals and visitors for centuries. They were formed millions of years ago as a result of a massive tectonic shift, and the erosion and weathering that followed created the unique shapes and features that we see today. Historically, the Belogradchik Rocks served as a natural fortress for the nearby settlement during Roman Empire and were later expanded and fortified by the Byzantines to defend against barbarian invasions. During the Middle Ages, the rocks served as a refuge for local population during times of war and conflict and during the Ottoman occupation it was used as a prison for political dissidents. In recent history, the area was designated as a nature reserve during the communist era and after the fall of communism in 1989, it became a popular tourist destination. The Belogradchik Rocks are also home to a diverse range of plant and animal life and several interesting caves including the Magura Cave, which is famous for its prehistoric paintings. In conclusion, the Rocks of Belogradchik are a unique and captivating natural wonder that have played a significant role in the history of Bulgaria and continue to be a source of inspiration and wonder for visitors.</p><h3>History</h3><p>The Rocks of Belogradchik, located in northwest Bulgaria, are a breathtaking natural wonder that have stood the test of time. These towering sandstone and conglomerate formations, some reaching over 200 meters in height, have captured the imaginations of locals and visitors alike for centuries.</p><p>The history of the Belogradchik Rocks dates back to the ancient times, when they were formed as a result of a massive tectonic shift. The process of erosion and weathering that followed over millions of years resulted in the unique shapes and features that we see today.</p><p>During the Roman Empire, the Belogradchik Rocks served as a natural fortress, providing protection for the nearby settlement of Belogradchik. The Romans built a fortress on the site, which was later expanded and fortified by the Byzantines. These fortifications were used to defend against barbarian invasions and served as a strategic point for the control of the region.</p><p>In the Middle Ages, the Belogradchik Rocks became a refuge for the local population during times of war and conflict. They provided shelter for the villagers, and the natural defenses of the rocks made them difficult for invaders to conquer.</p><p>During the Ottoman occupation of Bulgaria, the Belogradchik Rocks were used as a prison for political dissidents. The harsh conditions and isolation of the prison made it a feared place among the population.</p><p>The Rocks of Belogradchik have also played a role in Bulgaria\'s recent history. During the communist era, the area was designated as a nature reserve and was off-limits to the public. However, after the fall of communism in 1989, the Belogradchik Rocks became a popular tourist destination. Today, they attract thousands of visitors each year who come to admire their natural beauty and rich history.</p><p>One of the most striking things about the Belogradchik Rocks is the way in which they have been shaped by nature. The different layers of sandstone and conglomerate have been sculpted into a variety of forms, from tall spires to wide plateaus. The varying colors of the rocks, from deep reds to soft yellows, create a mesmerizing contrast against the blue sky.</p><p>The Rocks of Belogradchik are also home to a diverse range of plant and animal life. The rocky outcroppings provide a habitat for a variety of birds, including the endangered griffon vulture. The surrounding forests are home to wild boar, deer, and even the occasional bear.</p><p>The Belogradchik Rocks are also home to several interesting caves, including the Magura Cave which is famous for its prehistoric paintings dating back to the Neolithic era. The cave paintings depict animals and symbols that are thought to have had spiritual or ritual significance to the ancient people who created them.</p><p>In conclusion, the Rocks of Belogradchik are a unique and captivating natural wonder that have played a significant role in the history of Bulgaria. From serving as a natural fortress during ancient times, to providing shelter for villagers during medieval conflicts, to being a prison during the Ottoman occupation, these rocks have borne witness to the diverse and rich history of the region. Today, they continue to be a source of inspiration and wonder for visitors from all over the world.</p>',
      },
    },
    reviews: [
      {
        author: {
          names: 'Том Атанасов',
          photo: 'https://gravatar.com/avatar/101ecaaeb9247c0da0285d295c2a2e80?size=40',
        },
        rating: 5,
        date_added: 1660815374000,
        comment: 'Белоградчишките скали са просто спиращи дъха. Природната красота и история на района създават едно наистина незабравимо преживяване. Горещо препоръчвам да посетите!',
        comment_language: 'bg',
        attachment: {
          source: '5-2.jpg',
          ratio: 'normal',
          type: 'photo',
        },
      },
      {
        author: {
          names: 'Александър Найденов',
          photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40',
        },
        rating: 4,
        date_added: 1685017043000,
        comment: 'Никога не съм виждал нещо подобно на Белоградчишките скали. Те наистина са чудо на природата и трябва да се видят от всеки, който посети България. Туристическите пътеки бяха добре поддържани и предлагаха страхотна гледка към скалите.',
        comment_language: 'bg',
        attachment: {
          source: null,
          ratio: null,
          type: null,
        },
      },
      {
        author: {
          names: 'Петър Георгиев',
          photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40',
        },
        rating: 2,
        date_added: 1685017043000,
        comment: 'Бях разочарован от посещението си на Белоградчишките скали. Районът беше пренаселен, а обиколката с екскурзовод беше прибързана и неприятна.',
        comment_language: 'bg',
        attachment: {
          source: null,
          ratio: null,
          type: null,
        },
      },
      {
        author: {
          names: 'Пламен Калайджиев',
          photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40',
        },
        rating: 5,
        date_added: 1685017043000,
        comment: 'Белоградчишките скали са скрит скъпоценен камък в България. Естествената красота на района е наистина хипнотизираща, а историческото значение добави завладяващ слой към изживяването.',
        comment_language: 'bg',
        attachment: {
          source: 'https://i.ytimg.com/vi/uRKF_tGUhZw/hqdefault.jpg',
          ratio: null,
          type: 'video',
        },
      },
      {
        author: {
          names: 'Георги Йорданов',
          photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40',
        },
        rating: 5,
        date_added: 1685017043000,
        comment: 'Семейството ми и аз си прекарахме страхотно, докато посетихме Белоградчишките скали. Туристическите пътеки бяха предизвикателни, но гледките си заслужаваха. Освен това ни хареса да научим повече за историята на района по време на обиколката с гид.',
        comment_language: 'bg',
        attachment: {
          source: '5-5.jpg',
          ratio: 'normal',
          type: 'photo',
        },
      },
      {
        author: {
          names: 'Мария Величкова',
          photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40',
        },
        rating: 5,
        date_added: 1685017043000,
        comment: 'Белоградчишките скали надхвърлиха очакванията ми. Природната красота на района беше спираща дъха, а историческото значение добави дълбочина към изживяването. Горещо препоръчвам да посетите и да направите обиколка с екскурзовод, за да оцените напълно всичко, което районът може да предложи.',
        comment_language: 'bg',
        attachment: {
          source: null,
          ratio: null,
          type: null,
        },
      },
    ],
  },
  {
    slug: 'chudnite-mostove',
    image: '/images/photos/no-photo.jpg',
    locale: {
      bg: {
        title: 'Чудните мостове',
        location: 'до Забърдо',
      },
      en: {
        title: 'The Wonderful Bridges',
        location: 'next to Zabardo',
      },
    },
    categories: ['architecture'],
    subcategories: ['bridges-and-aqueducts'],
    region: 'rhodopes',
    municipality: 'rodopi',
    photos: [
      {
        image: '/images/photos/no-photo.jpg',
        author: 'Неизвестен',
        date_added: 1670777697,
      },
      {
        image: '/images/photos/no-photo.jpg',
        author: 'Неизвестен',
        date_added: 1670777697,
      },
      {
        image: '/images/photos/no-photo.jpg',
        author: 'Неизвестен',
        date_added: 1670777697,
      },
      {
        image: '/images/photos/no-photo.jpg',
        author: 'Неизвестен',
        date_added: 1670777697,
      },
    ],
    user_score: 4.5,
    reviews_count: Math.floor(Math.random() * 100),
    visitors: Math.floor(Math.random() * 1000),
    unesco: false,
    weather: [
      {
        date: getNextFiveDays(locale)[0],
        state: 'cloudy',
        temperature: [2, -3], // 0 = day, 1 = night
      },
      {
        date: getNextFiveDays(locale)[1],
        state: 'snow',
        temperature: [9, 1],
      },
      {
        date: getNextFiveDays(locale)[2],
        state: 'windy-cloudy',
        temperature: [12, 4],
      },
      {
        date: getNextFiveDays(locale)[3],
        state: 'snow',
        temperature: [14, 6],
      },
      {
        date: getNextFiveDays(locale)[4],
        state: 'partly-sunny',
        temperature: [9, -2],
      },
    ],
    coords: {
      latitude: 41.8194202,
      longitude: 24.5822032,
    },
    altitude: Math.floor(Math.random() * 1000),
    markdown_content: {
      authors: [
        {
          names: 'Маноло Месаров',
          email: 'email@xen.gg',
          github_profile: 'https://google.bg/',
        },
      ],
      locale: {
        bg: '<h3>Заглавие</h3><p>text</p>',
        en: '<h3>Title</h3><p>text</p>',
      },
    },
    reviews: [
      {
        author: {
          names: 'Том Атанасов',
          photo: 'https://gravatar.com/avatar/101ecaaeb9247c0da0285d295c2a2e80?size=40',
        },
        rating: 5,
        date_added: 1660815374000,
        comment: 'text',
        comment_language: 'bg',
        attachment: {
          source: '5-2.jpg',
          ratio: 'normal',
          type: 'photo',
        },
      },
      {
        author: {
          names: 'Александър Найденов',
          photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40',
        },
        rating: 4,
        date_added: 1685017043000,
        comment: 'text',
        comment_language: 'bg',
        attachment: {
          source: null,
          ratio: null,
          type: null,
        },
      },
      {
        author: {
          names: 'Петър Георгиев',
          photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40',
        },
        rating: 2,
        date_added: 1685017043000,
        comment: 'text',
        comment_language: 'bg',
        attachment: {
          source: null,
          ratio: null,
          type: null,
        },
      },
      {
        author: {
          names: 'Пламен Калайджиев',
          photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40',
        },
        rating: 5,
        date_added: 1685017043000,
        comment: 'text',
        comment_language: 'bg',
        attachment: {
          source: 'https://i.ytimg.com/vi/uRKF_tGUhZw/hqdefault.jpg',
          ratio: null,
          type: 'video',
        },
      },
      {
        author: {
          names: 'Георги Йорданов',
          photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40',
        },
        rating: 5,
        date_added: 1685017043000,
        comment: 'text',
        comment_language: 'bg',
        attachment: {
          source: '5-5.jpg',
          ratio: 'normal',
          type: 'photo',
        },
      },
      {
        author: {
          names: 'Мария Величкова',
          photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40',
        },
        rating: 5,
        date_added: 1685017043000,
        comment: 'text',
        comment_language: 'bg',
        attachment: {
          source: null,
          ratio: null,
          type: null,
        },
      },
    ],
  },
  {
    slug: 'church-of-christ-pantocrator',
    image: '/images/photos/7.jpg',
    locale: {
      bg: {
        title: 'Църквата "Христос Пантократор"',
        location: 'гр. Несебър',
      },
      en: {
        title: 'Church of Christ Pantocrator',
        location: 'Nessebar City',
      },
    },
    categories: ['architecture', 'religion'],
    subcategories: ['sanctuaries', 'churches'],
    region: 'bourgas-black-sea',
    municipality: 'nesebar',
    photos: [
      {
        image: '/images/photos/7-1.jpg',
        author: 'Неизвестен',
        date_added: 1670777697,
      },
      {
        image: '/images/photos/7-2.jpg',
        author: 'Неизвестен',
        date_added: 1670777697,
      },
      {
        image: '/images/photos/7-3.jpg',
        author: 'Неизвестен',
        date_added: 1670777697,
      },
      {
        image: '/images/photos/7-4.jpg',
        author: 'Неизвестен',
        date_added: 1670777697,
      },
    ],
    user_score: 4.5,
    reviews_count: Math.floor(Math.random() * 100),
    visitors: Math.floor(Math.random() * 1000),
    unesco: false,
    weather: [
      {
        date: getNextFiveDays(locale)[0],
        state: 'cloudy',
        temperature: [2, -3], // 0 = day, 1 = night
      },
      {
        date: getNextFiveDays(locale)[1],
        state: 'snow',
        temperature: [9, 1],
      },
      {
        date: getNextFiveDays(locale)[2],
        state: 'windy-cloudy',
        temperature: [12, 4],
      },
      {
        date: getNextFiveDays(locale)[3],
        state: 'snow',
        temperature: [14, 6],
      },
      {
        date: getNextFiveDays(locale)[4],
        state: 'partly-sunny',
        temperature: [9, -2],
      },
    ],
    coords: {
      latitude: 42.658697,
      longitude: 27.7333567,
    },
    altitude: Math.floor(Math.random() * 1000),
    markdown_content: {
      authors: [
        {
          names: 'Шпилко Муев',
          email: 'email@xen.gg',
          github_profile: 'https://google.bg/',
        },
      ],
      locale: {
        bg: '<h3>Кратко резюме</h3><p>Църквата "Христос Пантократор" е средновековна източноправославна църква, разположена в град Несебър в България. Построена е през 13-14 век и е известна с пищната си външна украса. Църквата е посветена на Христос Пантократор, което на гръцки означава „Владетел на всичко“ и е построена с помощта на камъни и тухлена зидария, строителна техника, известна като opus mixtum. Църквата е проектирана в късновизантийски кръст в квадратен стил и е с размери 16 на 6,90 метра или 14,20 на 4,80 метра. Дебелината на стените на църквата е 0,80 метра, а цветът на тухлите придава на църквата румен вид.</p><p>Църквата се отличава с нартекс и вила, която има правоъгълен издължен план и купол, който е с осмоъгълна форма и стои на видно място в центъра на целата. Най-забележителната особеност на църквата е нейната богата и цветна външна украса, която е най-пищна в източната страна на апсидата. Източната стена включва редуващи се ивици от тухли и дялани камъни, слепи арки, четирилистни флорални мотиви, триъгълни орнаменти, кръгла тюркоазена керамика и тухлени свастични фризове. Включването на свастики в украсата се счита за необичайно и се обяснява със средновековната употреба на символа като символ на слънцето.</p><p>Удължените северна и южна стена включват тухлени слепи арки и голяма арка, съседна на куполът с колонен прозорец в средата. Куполът също има осем прозореца и е богат на декоративни детайли и керамика. Външната украса на църквата включва и прозорци над долните арки на северната и южната фасада.</p><p>Църквата "Христос Пантократор" сега е художествена галерия и е част от античния град Несебър, обект на световното наследство на ЮНЕСКО. От 1927 г. е под държавна закрила като "народна старина" и е обявен за един от паметниците на културата с национално значение на България. Църквата остава до голяма степен непокътната и се смята за една от най-добре запазените църкви в България от Средновековието.</p><h3>История</h3><p>Църквата "Христос Пантократор" в Несебър, България, е зашеметяващ пример за средновековна източноправославна архитектура. Разположена на брега на Черно море, тя е част от Световното културно наследство на ЮНЕСКО Старинен Несебър и се счита за една от най-добре запазените средновековни църкви в България. Църквата, сега художествена галерия, е построена в края на 13 или началото на 14 век и е най-известна със своята богата и богато украсена външна украса. В това есе ще разгледаме историята, архитектурата и украсата на църквата „Христос Пантократор“ и защо тя остава значима културна забележителност в България.</p><p>Църквата „Христос Пантократор“ е посветена на Христос като „ Владетел на всички“, а построяването му обикновено се отнася към средата на 14 век по време на управлението на българския цар Иван Александър. Църквата се намира на ул. "Месембрия" близо до входа на стария град на Несебър и е една от многото атракции, на които посетителите на древния град могат да се насладят. Църквата е под държавна закрила от 1927 г., а през 1964 г. е обявена за „народна старина“. Тя е с приблизителни размери 16 на 6,90 метра и дебелина на стените 0,80 метра. Църквата се отличава с нартекс, вила с по същество правоъгълен издължен план и осмоъгълен купол, който стои на видно място в центъра на вилата. Интегрираната камбанария е разположена на върха на нартекса, както е типично за византийската църковна архитектура, и се простира от правоъгълната основна конструкция. Първоначално камбанарията е била правоъгълна, но сега е частично разрушена.</p><p>Външните стени на църквата Христос Пантократор са най-впечатляващата характеристика на църквата, а източната страна е най-богато украсена. По протежение на източната стена вървят редуващи се ивици от тухли и дялани камъни, слепи арки, флорални мотиви, триъгълни орнаменти, кръгла тюркоазена керамика и фризове от тухлени свастики. Северната и южната стена също имат тухлени слепи арки, голяма арка в съседство с купола и прозорци над долните арки. Куполът разполага с осем прозореца, по един за всяка от страните му, и голям брой декоративни детайли и керамика.</p><p>Украсата на църквата Христос Пантократор се счита за една от най-отличителните й характеристики. Използването на редуващи се ивици от тухли и камъни създава оптичен модел, а насложените аркади на източната стена са оприличени на акведукт от учения Робърт Г. Оустерхаут. Включването на свастики в украсата е уникална характеристика и те се обясняват като символ на Слънцето, използван през средновековието.</p><p>Богатата външна украса на църквата е само малка част от това, което прави църквата на Христос Пантократор е значима културна забележителност в България. Неговата история, местоположение и зашеметяваща архитектура го правят задължително посещение за туристите в Несебър. Като художествена галерия, тя предоставя на посетителите възможност да разгледат произведения на български художници, добавяйки допълнително културно измерение към посещението им.</p><p>В заключение, църквата „Христос Пантократор“ в Несебър е зашеметяващ пример за средновековието Източноправославна архитектура, която остава важна културна забележителност в България. Неговата богата и богато украсена външна украса, съчетана с местоположението му в древния град Несебър и ролята му на художествена галерия, го правят задължително посещение за туристи. Тази църква е свидетелство за архитектурните и художествени постижения на средновековна България и е забележителен пример за красотата и уменията на средновековните майстори, които са я построили.</p>',
        en: '<h3>Summary</h3><p>The Church of Christ Pantocrator is a medieval Eastern Orthodox church located in the town of Nesebar in Bulgaria. It was constructed in the 13th to 14th century and is famous for its lavish exterior decoration. The church was dedicated to Christ Pantocrator, which means "Ruler of All" in Greek, and was built using stones and brickwork, a construction technique known as opus mixtum. The church is designed in late Byzantine cross-in-square style and measures 16 by 6.90 meters or 14.20 by 4.80 meters. The walls of the church are 0.80 meters thick and the colour of the bricks gives the church a ruddy appearance.</p><p>The church features a narthex and a cella, which has a rectangular elongated plan, and a dome that is octagonal in shape and stands prominently in the center of the cella. The most notable feature of the church is its rich and colourful exterior decoration, which is most lavish on the east side of the apse. The east wall features alternating strips of bricks and carved stones, blind arches, four-leaved floral motifs, triangular ornaments, circular turquoise ceramics, and brick swastika friezes. The inclusion of swastikas in the decoration is considered unusual and is explained by the medieval use of the symbol as a symbol of the sun.</p><p>The elongated north and south walls include brick blind arches and a large arch adjacent to the dome with a columned window in the middle. The dome also features eight windows and is rich in ornamental details and ceramics. The church\'s exterior decoration also includes windows above the lower arches of the north and south facades.</p><p>The church of Christ Pantocrator is now an art gallery and forms part of the Ancient City of Nesebar UNESCO World Heritage Site. It has been under state protection since 1927 as a "national antiquity" and is listed as one of Bulgaria\'s monuments of culture of national importance. The church remains largely intact and is considered one of Bulgaria\'s best-preserved churches from the Middle Ages.</p><h3>History</h3><p>The Church of Christ Pantocrator in Nesebar, Bulgaria is a stunning example of medieval Eastern Orthodox architecture. Located on the Black Sea coast, it is part of the Ancient Nesebar UNESCO World Heritage Site and is considered one of Bulgaria\'s best preserved medieval churches. The church, now an art gallery, was built in the late 13th or early 14th century, and is most famous for its rich and ornate exterior decoration. In this essay, we will explore the history, architecture, and decoration of the Church of Christ Pantocrator and why it remains a significant cultural landmark in Bulgaria.</p><p>The Church of Christ Pantocrator is dedicated to Christ as the "Ruler of All," and its construction is usually attributed to the mid-14th century during the rule of Tsar Ivan Alexander of Bulgaria. The church is located on Mesembria Street near the entrance to Nesebar\'s old town, and is one of the many attractions that visitors to the ancient city can enjoy. The church has been under state protection since 1927 and was designated a "national antiquity" in 1964.</p><p>The church is designed in the late Byzantine cross-in-square style and is constructed from stones and brickwork. It is approximately 16 by 6.90 meters in size and its walls are 0.80 meters thick. The church features a narthex, a cella with an essentially rectangular elongated plan, and an octagonal dome that stands prominently in the center of the cella. The integrated bell tower is located on top of the narthex, as was typical in Byzantine church architecture, and extends from the rectangular main structure. The bell tower was originally rectangular but is now partially ruined.</p><p>The Church of Christ Pantocrator\'s exterior walls are the most striking feature of the church, and the east side is the most ornately decorated. Interchanging strips of bricks and carved stones, blind arches, floral motifs, triangular ornaments, circular turquoise ceramics, and brick swastika friezes run along the east wall. The north and south walls also feature brick blind arches, a large arch adjacent to the dome, and windows above the lower arches. The dome features eight windows, one for each of its sides, and a large number of ornamental details and ceramics.</p><p>The decoration of the Church of Christ Pantocrator is considered to be one of its most distinctive features. The use of interchanging strips of bricks and stones creates an optical pattern, and the superimposed arcades on the east wall are likened to an aqueduct by scholar Robert G. Ousterhout. The inclusion of swastikas in the decoration is a unique feature, and they are explained as a symbol of the Sun used in medieval times.</p><p>The church\'s rich exterior decoration is just a small part of what makes the Church of Christ Pantocrator a significant cultural landmark in Bulgaria. Its history, location, and stunning architecture make it a must-visit for tourists to Nesebar. As an art gallery, it provides visitors with the opportunity to view works by Bulgarian artists, adding an extra cultural dimension to their visit.</p><p>In conclusion, the Church of Christ Pantocrator in Nesebar is a stunning example of medieval Eastern Orthodox architecture that remains an important cultural landmark in Bulgaria. Its rich and ornate exterior decoration, combined with its location in the ancient city of Nesebar and its role as an art gallery, make it a must-visit for tourists. This church is a testament to the architectural and artistic achievements of medieval Bulgaria and is a remarkable example of the beauty and skill of the medieval craftsmen who built it.</p>',
      },
    },
    reviews: [
      {
        author: {
          names: 'Том Атанасов',
          photo: 'https://gravatar.com/avatar/101ecaaeb9247c0da0285d295c2a2e80?size=40',
        },
        rating: 5,
        date_added: 1660815374000,
        comment: 'Тази църква е абсолютно зашеметяваща! Сложните произведения на изкуството и зашеметяващите стенописи ме оставиха в страхопочитание. Силно препоръчвам да посетите, ако сте в Несебър.',
        comment_language: 'bg',
        attachment: {
          source: '7-2.jpg',
          ratio: 'normal',
          type: 'photo',
        },
      },
      {
        author: {
          names: 'Александър Найденов',
          photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40',
        },
        rating: 4,
        date_added: 1685017043000,
        comment: 'Бях приятно изненадан от красотата и спокойствието на църквата „Христос Пантократор“. Тя е скрито бижу в Несебър и си заслужава да бъде посетена.',
        comment_language: 'bg',
        attachment: {
          source: null,
          ratio: null,
          type: null,
        },
      },
      {
        author: {
          names: 'Петър Георгиев',
          photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40',
        },
        rating: 2,
        date_added: 1685017043000,
        comment: 'Бях разочарован от състоянието на църквата. Въпреки че стенописите са все още красиви, самата църква имаше нужда от сериозен ремонт и поддръжка.',
        comment_language: 'bg',
        attachment: {
          source: null,
          ratio: null,
          type: null,
        },
      },
      {
        author: {
          names: 'Пламен Калайджиев',
          photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40',
        },
        rating: 5,
        date_added: 1685017043000,
        comment: 'Тази църква беше един от акцентите на пътуването ми до Несебър. Спокойната атмосфера и великолепната архитектура го превърнаха в едно наистина духовно изживяване.',
        comment_language: 'bg',
        attachment: {
          source: 'https://i.ytimg.com/vi/uRKF_tGUhZw/hqdefault.jpg',
          ratio: null,
          type: 'video',
        },
      },
      {
        author: {
          names: 'Георги Йорданов',
          photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40',
        },
        rating: 5,
        date_added: 1685017043000,
        comment: 'Църквата на Христос Пантократор е задължително посещение, ако се интересувате от история и религия. Древните фрески и сложните резби са наистина забележителни.',
        comment_language: 'bg',
        attachment: {
          source: '7-5.jpg',
          ratio: 'invert',
          type: 'photo',
        },
      },
      {
        author: {
          names: 'Мария Величкова',
          photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40',
        },
        rating: 5,
        date_added: 1685017043000,
        comment: 'Църквата „Христос Пантократор“ беше един от най-уникалните и красиви религиозни обекти, които съм посещавала. Горещо бих я препоръчала на всеки, който посети Несебър.',
        comment_language: 'bg',
        attachment: {
          source: null,
          ratio: null,
          type: null,
        },
      },
    ],
  },
  {
    slug: 'pliska-national-historical-and-archaeological-reserve',
    image: '/images/photos/8.jpg',
    locale: {
      bg: {
        title: 'Национален историко-археологически резерват "Плиска"',
        location: 'гр. Плиска',
      },
      en: {
        title: 'National Historical and Archaeological Reserve "Pliska"',
        location: 'Pliska City',
      },
    },
    categories: ['architecture', 'nature'],
    subcategories: ['historical-sites', 'nature-reserves'],
    region: 'varna-black-sea',
    municipality: 'novi-pazar',
    photos: [
      {
        image: '/images/photos/8-1.jpg',
        author: 'Лиляна Узунова',
        date_added: 1670777697,
      },
      {
        image: '/images/photos/8-2.jpg',
        author: 'Свилен Енев',
        date_added: 1670777697,
      },
      {
        image: '/images/photos/8-3.jpg',
        author: 'Лиляна Узунова',
        date_added: 1670777697,
      },
      {
        image: '/images/photos/8-4.jpg',
        author: 'Лиляна Узунова',
        date_added: 1670777697,
      },
    ],
    user_score: 4.5,
    reviews_count: Math.floor(Math.random() * 100),
    visitors: Math.floor(Math.random() * 1000),
    unesco: false,
    weather: [
      {
        date: getNextFiveDays(locale)[0],
        state: 'cloudy',
        temperature: [2, -3], // 0 = day, 1 = night
      },
      {
        date: getNextFiveDays(locale)[1],
        state: 'snow',
        temperature: [9, 1],
      },
      {
        date: getNextFiveDays(locale)[2],
        state: 'windy-cloudy',
        temperature: [12, 4],
      },
      {
        date: getNextFiveDays(locale)[3],
        state: 'snow',
        temperature: [14, 6],
      },
      {
        date: getNextFiveDays(locale)[4],
        state: 'partly-sunny',
        temperature: [9, -2],
      },
    ],
    coords: {
      latitude: 43.388379,
      longitude: 27.130847,
    },
    altitude: Math.floor(Math.random() * 1000),
    markdown_content: {
      authors: [
        {
          names: 'Херодот Възвъзов',
          email: 'email@xen.gg',
          github_profile: 'https://google.bg/',
        },
        {
          names: 'Паскал Самоходов',
          email: 'email@xen.gg',
          github_profile: 'https://google.bg/',
        },
        {
          names: 'Лалко Тъпчилещов',
          email: 'email@xen.gg',
          github_profile: 'https://google.bg/',
        },
        {
          names: 'Маню Зенгинов',
          email: 'email@xen.gg',
          github_profile: 'https://google.bg/',
        },
      ],
      locale: {
        bg: '<h3>Кратко резюме</h3><p>Плиска е първата столица на Първото българско царство през Средновековието. Според легендата е основан от Аспарух Български в края на 7 век, но това не е потвърдено от археологията. В началото на 9-ти век Плиска е заобиколена от отбранителна стена и е допълнително оградена с външна земна насипа с каменна облицовка. През 811 г. византийската армия разграбва и опожарява Плиска, но тя е възстановена от Омуртаг, който използва сполии от близките римски сгради. След като Борис I приема християнството през 864 г., религиозните сгради на Плиска са адаптирани за християнски нужди и е построена Голямата базилика, заедно с манастир. Плиска бавно е изоставена, след като цар Симеон I основава новата си столица в Преслав. През 680 г. българите, водени от Аспарух, нахлуват в земи, които сега са част от днешна България, и Византийската империя е принудена да подпише договор, признаващ българската държава през 681 г. Плиска е столица на Първото българско царство от 681 до 893 г. сл. Хр. и е с площ от 21,8 km2. Плиска преживява почти един век на растеж, но това не е мирна епоха, тъй като българите и Византийската империя са в състояние на постоянна война. Походът на император Никифор I през 811 г. завършва с опожаряването на царската резиденция в Плиска. По-късно през 9 век езическите храмове в Плиска вероятно започват да се превръщат в християнски църкви. Борис I създава Плисковската книжовна школа и когато се разболява и се оттегля в манастир, синът му Владимир прави опит да възстанови езичеството. През този период голямата каменна базилика в Плиска е силно повредена. Плиска е превзета в началото на второто хилядолетие от Теодорокан и Никифор Ксифий, слагайки край на Първото българско царство.</p><h3>История</h3><p>Плиска, разположена в област Шумен в България, е малък град, който някога е заемал важно място в историята на Първото българско царство. Плиска е първата столица на Българската империя, основана от хан Аспарух, и служи като политически и културен център на империята повече от двеста години, от 681 до 893 г. сл. Хр. Градът е бил известен със своите внушителни земни укрепления, които ограждат по-малко каменно укрепление, в което се помещават дворец, храмове и други сгради, принадлежащи на аристокрацията.</p><p>Историята на Плиска е тясно свързана с възхода на Първото българско царство и множеството битки между империята и Византийската империя. Осми и девети век са време на постоянен конфликт между двете империи, като византийците предприемат няколко кампании срещу българите, включително особено опустошителна атака, водена от император Никифор I през 811 г., която води до опожаряването на царската резиденция в Плиска. Въпреки това българите, водени от хан Крум, в крайна сметка успяват да прогонят нашествениците и да си върнат града.</p><p>По време на управлението на Борис I Плиска преживява културна и религиозна трансформация. Борис приема християнството през 864 г., а езическите храмове в града са превърнати в християнски църкви. През 886 г. основава Плисковската книжовна школа, която по-късно при преместването на столицата е преместена в Преслав. Въпреки временния опит на сина на Борис Владимир да възстанови езичеството, покръстването в крайна сметка е успешно и в Плиска е построена Голямата базилика, голяма каменна църква.</p><p>Въпреки това, като Първото българско царство продължила да расте и да се разширява, Плиска започнала да губи значението си. В края на IX век синът на Борис Симеон I основава нова столица в Преслав и Плиска постепенно запустява. Превзет е в началото на второто хилядолетие от Теодорокан и Никифор Ксифий, по време на походите на византийския император Василий Българоубиец, белязали края на Първото българско царство.</p><p>Днес Плиска е малък град с богата история, която до голяма степен е забравена. Археологическите му останки обаче дават ценна представа за културната, политическата и религиозната история на Първото българско царство. Укрепленията, дворецът и Голямата базилика са сред най-важните останки, които все още могат да се видят на мястото и служат като осезаеми напомняния за миналото значение на града.</p><p>В заключение, Плиска е очарователен град изиграла решаваща роля в историята на Първото българско царство. Въпреки малкия си размер и относителната неизвестност, градът някога е бил процъфтяващ център на политика, култура и религия, а останките му предлагат прозорец в миналото. Въпреки че голяма част от историята на Плиска може да е забравена, нейните впечатляващи крепостни стени, дворец и базилика са свидетелство за миналото значение на града и богатото наследство на Първото българско царство.</p>',
        en: '<h3>Summary</h3><p>Pliska was the first capital of the First Bulgarian Empire during the Middle Ages. According to legend, it was founded by Asparuh of Bulgaria in the late 7th century, although this is not substantiated by archaeology. By the early 9th century, Pliska was surrounded by a defensive wall and was further enclosed by an outer earthwork with stone revetment. In 811, the Byzantine army sacked and burned Pliska, but it was rebuilt by Omurtag who used spolia from nearby Roman buildings. After Boris I converted to Christianity in 864, the religious buildings of Pliska were adapted for Christian use and the Great Basilica was constructed, along with a monastery. Pliska was slowly abandoned after the tsar Simeon I founded his new capital at Preslav. In the year 680, the Bulgars, led by Asparukh, invaded lands now part of modern-day Bulgaria and the Byzantine empire was forced to sign a treaty recognizing the Bulgar state in 681. Pliska was the capital of the First Bulgarian Empire from 681 to 893 AD and had an area of 21.8 km2. Pliska experienced nearly a century of growth but this was not a peaceful era as the Bulgars and Byzantine Empire were in constant state of war. Emperor Nikephoros I\'s campaign in 811 resulted in the burning of the royal residence in Pliska. Later in the 9th century, the pagan temples in Pliska likely began to be converted to Christian churches. Boris I founded the Pliska Literary School and when he fell ill and retired to a monastery, his son Vladimir attempted to reestablish paganism. During this period, the large stone basilica at Pliska was heavily damaged. Pliska was captured at the turn of the 2nd millennium by Theodorokanos and Nikephoros Xiphias, ending the First Bulgarian Empire.</p><h3>History</h3><p>Pliska, located in the Shumen Province of Bulgaria, is a small town that once held a significant place in the history of the First Bulgarian Empire. Pliska was the first capital of the Bulgarian Empire, founded by Khan Asparukh, and served as the political and cultural center of the empire for over two hundred years, from 681 to 893 AD. The town was known for its impressive earthen ramparts, which enclosed a smaller stone fortification that housed a palace, temples, and other buildings belonging to the aristocracy.</p><p>The history of Pliska is closely tied to the rise of the First Bulgarian Empire and the many battles that took place between the empire and the Byzantine Empire. The eighth and ninth centuries were a time of constant conflict between the two empires, with the Byzantines launching several campaigns against the Bulgarians, including a particularly devastating attack led by Emperor Nikephoros I in 811 that resulted in the burning of the royal residence in Pliska. However, the Bulgarians, led by Khan Krum, were eventually able to drive out the invaders and reclaim the city.</p><p>Under the rule of Boris I, Pliska experienced a cultural and religious transformation. Boris converted to Christianity in 864, and the pagan temples in the city were converted into Christian churches. In 886, he founded the Pliska Literary School, which was later moved to Preslav when the capital was relocated. Despite a temporary attempt by Boris\' son Vladimir to reestablish paganism, the conversion to Christianity was ultimately successful, and the Great Basilica, a large stone church, was constructed in Pliska.</p><p>However, as the First Bulgarian Empire continued to grow and expand, Pliska began to lose its importance. In the late ninth century, Boris\' son Simeon I founded a new capital at Preslav, and Pliska gradually became abandoned. It was captured at the turn of the second millennium by Theodorokanos and Nikephoros Xiphias, during the campaigns of the Byzantine Emperor Basil the Bulgar-Slayer, which marked the end of the First Bulgarian Empire.</p><p>Today, Pliska is a small town with a rich history that has largely been forgotten. However, its archaeological remains provide valuable insights into the cultural, political, and religious history of the First Bulgarian Empire. The ramparts, the palace, and the Great Basilica are among the most important remains that can still be seen at the site, serving as tangible reminders of the town\'s past significance.</p><p>In conclusion, Pliska is a fascinating town that played a crucial role in the history of the First Bulgarian Empire. Despite its small size and relative obscurity, the town was once a thriving center of politics, culture, and religion, and its remains offer a window into the past. While much of Pliska\'s history may have been forgotten, its impressive ramparts, palace, and basilica stand as testimony to the town\'s past significance and the rich heritage of the First Bulgarian Empire.</p>',
      },
    },
    reviews: [
      {
        author: {
          names: 'Том Атанасов',
          photo: 'https://gravatar.com/avatar/101ecaaeb9247c0da0285d295c2a2e80?size=40',
        },
        rating: 5,
        date_added: 1660815374000,
        comment: 'Наскоро посетих това място и бях поразен от красотата и спокойствието. Беше перфектното бягство от шума и суетата на града. Силно препоръчвам посещение.',
        comment_language: 'bg',
        attachment: {
          source: '8-2.jpg',
          ratio: 'normal',
          type: 'photo',
        },
      },
      {
        author: {
          names: 'Александър Найденов',
          photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40',
        },
        rating: 4,
        date_added: 1685017043000,
        comment: 'Пейзажът на това място е спиращ дъха. Бях във възторг от зашеметяващите гледки и спокойната атмосфера. Направих много снимки и определено ще се върна скоро.',
        comment_language: 'bg',
        attachment: {
          source: null,
          ratio: null,
          type: null,
        },
      },
      {
        author: {
          names: 'Петър Георгиев',
          photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40',
        },
        rating: 2,
        date_added: 1685017043000,
        comment: 'Бях малко разочарован от посещението си на това място. Съоръженията не бяха толкова чисти, колкото се надявах, а персоналът изглеждаше незаинтересован да ни помогне. Не бих го препоръчал.',
        comment_language: 'bg',
        attachment: {
          source: null,
          ratio: null,
          type: null,
        },
      },
      {
        author: {
          names: 'Пламен Калайджиев',
          photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40',
        },
        rating: 5,
        date_added: 1685017043000,
        comment: 'Това място е задължително посещение за всеки, който обича природата и красивите пейзажи. Персоналът беше невероятно любезен и отзивчив, правейки изживяването ни още по-добро.',
        comment_language: 'bg',
        attachment: {
          source: 'https://i.ytimg.com/vi/uRKF_tGUhZw/hqdefault.jpg',
          ratio: null,
          type: 'video',
        },
      },
      {
        author: {
          names: 'Георги Йорданов',
          photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40',
        },
        rating: 5,
        date_added: 1685017043000,
        comment: 'Съоръженията на това място бяха първокласни и надминаха очакванията ми. Бях впечатлен от вниманието към детайла и чистотата. Силно препоръчително!',
        comment_language: 'bg',
        attachment: {
          source: '8-5.jpg',
          ratio: 'normal',
          type: 'photo',
        },
      },
      {
        author: {
          names: 'Мария Величкова',
          photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40',
        },
        rating: 5,
        date_added: 1685017043000,
        comment: 'Прекарах чудесно на това място. Красотата на околностите беше съчетана само с топлото гостоприемство на персонала. Ще се върна скоро, за да му се насладя отново!',
        comment_language: 'bg',
        attachment: {
          source: null,
          ratio: null,
          type: null,
        },
      },
    ],
  },
  {
    slug: 'plovdiv-ancient-theater',
    image: '/images/photos/9.jpg',
    locale: {
      bg: {
        title: 'Античен театър - Пловдив',
        location: 'гр. Пловдив',
      },
      en: {
        title: 'Ancient Theater - Plovdiv',
        location: 'Plovdiv City',
      },
    },
    categories: ['architecture', 'culture'],
    subcategories: ['historical-sites', 'theaters'],
    region: 'trakia',
    municipality: 'plovdiv',
    photos: [
      {
        image: '/images/photos/9-1.jpg',
        author: 'Владислав Терзийски',
        date_added: 1670777697,
      },
      {
        image: '/images/photos/9-2.jpg',
        author: 'The Paradise of Bulgaria',
        date_added: 1670777697,
      },
      {
        image: '/images/photos/9-3.jpg',
        author: 'Неизвестен',
        date_added: 1670777697,
      },
      {
        image: '/images/photos/9-4.jpg',
        author: 'Община Пловдив',
        date_added: 1670777697,
      },
    ],
    user_score: 4.5,
    reviews_count: Math.floor(Math.random() * 100),
    visitors: Math.floor(Math.random() * 1000),
    unesco: false,
    weather: [
      {
        date: getNextFiveDays(locale)[0],
        state: 'cloudy',
        temperature: [2, -3], // 0 = day, 1 = night
      },
      {
        date: getNextFiveDays(locale)[1],
        state: 'snow',
        temperature: [9, 1],
      },
      {
        date: getNextFiveDays(locale)[2],
        state: 'windy-cloudy',
        temperature: [12, 4],
      },
      {
        date: getNextFiveDays(locale)[3],
        state: 'snow',
        temperature: [14, 6],
      },
      {
        date: getNextFiveDays(locale)[4],
        state: 'partly-sunny',
        temperature: [9, -2],
      },
    ],
    coords: {
      latitude: 42.1468,
      longitude: 24.7511,
    },
    altitude: Math.floor(Math.random() * 1000),
    markdown_content: {
      authors: [
        {
          names: 'Маноло Месаров',
          email: 'email@xen.gg',
          github_profile: 'https://google.bg/',
        },
      ],
      locale: {
        bg: '<h3>Заглавие</h3><p>text</p>',
        en: '<h3>Title</h3><p>text</p>',
      },
    },
    reviews: [
      {
        author: {
          names: 'Том Атанасов',
          photo: 'https://gravatar.com/avatar/101ecaaeb9247c0da0285d295c2a2e80?size=40',
        },
        rating: 5,
        date_added: 1660815374000,
        comment: 'text',
        comment_language: 'bg',
        attachment: {
          source: '9-2.jpg',
          ratio: 'normal',
          type: 'photo',
        },
      },
      {
        author: {
          names: 'Александър Найденов',
          photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40',
        },
        rating: 4,
        date_added: 1685017043000,
        comment: 'text',
        comment_language: 'bg',
        attachment: {
          source: null,
          ratio: null,
          type: null,
        },
      },
      {
        author: {
          names: 'Петър Георгиев',
          photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40',
        },
        rating: 2,
        date_added: 1685017043000,
        comment: 'text',
        comment_language: 'bg',
        attachment: {
          source: null,
          ratio: null,
          type: null,
        },
      },
      {
        author: {
          names: 'Пламен Калайджиев',
          photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40',
        },
        rating: 5,
        date_added: 1685017043000,
        comment: 'text',
        comment_language: 'bg',
        attachment: {
          source: 'https://i.ytimg.com/vi/uRKF_tGUhZw/hqdefault.jpg',
          ratio: null,
          type: 'video',
        },
      },
      {
        author: {
          names: 'Георги Йорданов',
          photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40',
        },
        rating: 5,
        date_added: 1685017043000,
        comment: 'text',
        comment_language: 'bg',
        attachment: {
          source: '9-5.jpg',
          ratio: 'invert',
          type: 'photo',
        },
      },
      {
        author: {
          names: 'Мария Величкова',
          photo: 'https://gravatar.com/avatar/e1dee3092e2726a4e58e99f63c8f4807?size=40',
        },
        rating: 5,
        date_added: 1685017043000,
        comment: 'text',
        comment_language: 'bg',
        attachment: {
          source: null,
          ratio: null,
          type: null,
        },
      },
    ],
  },
]

export default places
