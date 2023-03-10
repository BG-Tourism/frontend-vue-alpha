const categories = [
  {
    slug: 'architecture',
    places_count: Math.floor(Math.random() * 100),
    locale: {
      bg: {
        title: 'Архитектура',
        description: 'Открий архитектурното наследство на България чрез нейните древни крепости, величествени къщи и дворци и впечатляващи мостове и акведукти, всеки със свой уникален дизайн и богата история.',
      },
      en: {
        title: 'Architecture',
        description: 'Discover Bulgaria\'s architectural heritage through its ancient fortresses, grand houses and palaces, and impressive bridges and aqueducts, each with its own unique design and rich history.',
      },
    },
    subcategories: [
      {
        slug: 'fortresses-and-ruins',
        locale: {
          bg: 'Крепости и руини',
          en: 'Fortresses and ruins',
        },
      },
      {
        slug: 'monuments',
        locale: {
          bg: 'Паметници',
          en: 'Monuments',
        },
      },
      {
        slug: 'sanctuaries',
        locale: {
          bg: 'Светилища',
          en: 'Sanctuaries',
        },
      },
      {
        slug: 'historical-sites',
        locale: {
          bg: 'Исторически местности',
          en: 'Historical sites',
        },
      },
      {
        slug: 'tombs',
        locale: {
          bg: 'Гробници',
          en: 'Tombs',
        },
      },
      {
        slug: 'megaliths',
        locale: {
          bg: 'Мегалити',
          en: 'Megaliths',
        },
      },
      {
        slug: 'houses-and-palaces',
        locale: {
          bg: 'Kъщи и дворци',
          en: 'Houses and palaces',
        },
      },
      {
        slug: 'bridges-and-aqueducts',
        locale: {
          bg: 'Mостове и акведукти',
          en: 'Bridges and aqueducts',
        },
      },
    ],
  },
  {
    slug: 'religion',
    places_count: Math.floor(Math.random() * 100),
    locale: {
      bg: {
        title: 'Религия',
        description: 'Потопи се в красотата на религиозните забележителности на България, които включват църкви, храмове, манастири, джамии и синагоги, всяка със свой собствен уникален архитектурен стил и културно значение.',
      },
      en: {
        title: 'Religion',
        description: 'Immerse yourself in the beauty of Bulgaria\'s religious landmarks, which include churches, temples, monasteries, mosques, and synagogues, each with its own unique architectural style and cultural significance.',
      },
    },
    subcategories: [
      {
        slug: 'churches',
        locale: {
          bg: 'Църкви',
          en: 'Churches',
        },
      },
      {
        slug: 'temples',
        locale: {
          bg: 'Храмове',
          en: 'Temples',
        },
      },
      {
        slug: 'mausoleums',
        locale: {
          bg: 'Мавзолеи',
          en: 'Mausoleums',
        },
      },
      {
        slug: 'orthodox-monasteries-and-chapels',
        locale: {
          bg: 'Православни манастири и параклиси',
          en: 'Orthodox monasteries and chapels',
        },
      },
      {
        slug: 'muslim-mosques',
        locale: {
          bg: 'Мюсюлмански джамии',
          en: 'Muslim mosques',
        },
      },
      {
        slug: 'jewish-synagogues',
        locale: {
          bg: 'Еврейски синагоги',
          en: 'Jewish synagogues',
        },
      },
    ],
  },
  {
    slug: 'culture',
    places_count: Math.floor(Math.random() * 100),
    locale: {
      bg: {
        title: 'Култура',
        description: 'Наслади се на оживената културна сцена на България чрез нейните музеи, галерии, библиотеки и театри, които показват художественото творчество и културното наследство на страната.',
      },
      en: {
        title: 'Culture',
        description: 'Experience Bulgaria\'s vibrant cultural scene through its museums, galleries, libraries, and theaters, which showcase the country\'s artistic creativity and cultural heritage.',
      },
    },
    subcategories: [
      {
        slug: 'museums',
        locale: {
          bg: 'Музеи',
          en: 'Museums',
        },
      },
      {
        slug: 'galleries',
        locale: {
          bg: 'Галерии',
          en: 'Galleries',
        },
      },
      {
        slug: 'libraries',
        locale: {
          bg: 'Библиотеки',
          en: 'Libraries',
        },
      },
      {
        slug: 'theaters',
        locale: {
          bg: 'Театри',
          en: 'Theaters',
        },
      },
    ],
  },
  {
    slug: 'nature',
    places_count: Math.floor(Math.random() * 100),
    locale: {
      bg: {
        title: 'Природа',
        description: 'Впусни се в пътешествие на изследване и откриване през дивата природа на България, където зашеметяващите планински вериги, криволичещи пътеки и спокойните паркове и градини предлагат бягство от градската суматоха и суетата, предоставяйки естествено убежище на всички, които го търсят.',
      },
      en: {
        title: 'Nature',
        description: 'Embark on a journey of exploration and discovery through Bulgaria\'s untamed wilderness, where stunning mountain ranges, winding trails, and serene parks and gardens offer an escape from the city\'s hustle and bustle, providing a natural sanctuary to all those who seek it.',
      },
    },
    subcategories: [
      {
        slug: 'mountainous-sites',
        locale: {
          bg: 'Планински обекти',
          en: 'Mountainous sites',
        },
      },
      {
        slug: 'water-sites',
        locale: {
          bg: 'Водни обекти',
          en: 'Water sites',
        },
      },
      {
        slug: 'natural-formations',
        locale: {
          bg: 'Природни образувания',
          en: 'Natural formations',
        },
      },
      {
        slug: 'parks-and-gardens',
        locale: {
          bg: 'Паркове и градини',
          en: 'Parks and gardens',
        },
      },
      {
        slug: 'nature-reserves',
        locale: {
          bg: 'Резервати',
          en: 'Nature reserves',
        },
      },
      {
        slug: 'lifts',
        locale: {
          bg: 'Лифтове',
          en: 'Lifts',
        },
      },
      {
        slug: 'eco-trails',
        locale: {
          bg: 'Екопътеки',
          en: 'Eco-trails',
        },
      },
    ],
  },
]

export default categories
