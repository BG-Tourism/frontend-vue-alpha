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
          bg: {
            title: 'Крепости и руини',
          },
          en: {
            title: 'Fortresses and ruins',
          },
        },
      },
      {
        slug: 'monuments',
        locale: {
          bg: {
            title: 'Паметници',
          },
          en: {
            title: 'Monuments',
          },
        },
      },
      {
        slug: 'sanctuaries',
        locale: {
          bg: {
            title: 'Светилища',
          },
          en: {
            title: 'Sanctuaries',
          },
        },
      },
      {
        slug: 'historical-sites',
        locale: {
          bg: {
            title: 'Исторически местности',
          },
          en: {
            title: 'Historical sites',
          },
        },
      },
      {
        slug: 'tombs',
        locale: {
          bg: {
            title: 'Гробници',
          },
          en: {
            title: 'Tombs',
          },
        },
      },
      {
        slug: 'megaliths',
        locale: {
          bg: {
            title: 'Мегалити',
          },
          en: {
            title: 'Megaliths',
          },
        },
      },
      {
        slug: 'houses-and-palaces',
        locale: {
          bg: {
            title: 'Kъщи и дворци',
          },
          en: {
            title: 'Houses and palaces',
          },
        },
      },
      {
        slug: 'bridges-and-aqueducts',
        locale: {
          bg: {
            title: 'Mостове и акведукти',
          },
          en: {
            title: 'Bridges and aqueducts',
          },
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
          bg: {
            title: 'Църкви',
          },
          en: {
            title: 'Churches',
          },
        },
      },
      {
        slug: 'temples',
        locale: {
          bg: {
            title: 'Храмове',
          },
          en: {
            title: 'Temples',
          },
        },
      },
      {
        slug: 'mausoleums',
        locale: {
          bg: {
            title: 'Мавзолеи',
          },
          en: {
            title: 'Mausoleums',
          },
        },
      },
      {
        slug: 'orthodox-monasteries-and-chapels',
        locale: {
          bg: {
            title: 'Православни манастири и параклиси',
          },
          en: {
            title: 'Orthodox monasteries and chapels',
          },
        },
      },
      {
        slug: 'muslim-mosques',
        locale: {
          bg: {
            title: 'Мюсюлмански джамии',
          },
          en: {
            title: 'Muslim mosques',
          },
        },
      },
      {
        slug: 'jewish-synagogues',
        locale: {
          bg: {
            title: 'Еврейски синагоги',
          },
          en: {
            title: 'Jewish synagogues',
          },
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
          bg: {
            title: 'Музеи',
          },
          en: {
            title: 'Museums',
          },
        },
      },
      {
        slug: 'galleries',
        locale: {
          bg: {
            title: 'Галерии',
          },
          en: {
            title: 'Galleries',
          },
        },
      },
      {
        slug: 'libraries',
        locale: {
          bg: {
            title: 'Библиотеки',
          },
          en: {
            title: 'Libraries',
          },
        },
      },
      {
        slug: 'theaters',
        locale: {
          bg: {
            title: 'Театри',
          },
          en: {
            title: 'Theaters',
          },
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
          bg: {
            title: 'Планински обекти',
          },
          en: {
            title: 'Mountainous sites',
          },
        },
      },
      {
        slug: 'water-sites',
        locale: {
          bg: {
            title: 'Водни обекти',
          },
          en: {
            title: 'Water sites',
          },
        },
      },
      {
        slug: 'natural-formations',
        locale: {
          bg: {
            title: 'Природни образувания',
          },
          en: {
            title: 'Natural formations',
          },
        },
      },
      {
        slug: 'parks-and-gardens',
        locale: {
          bg: {
            title: 'Паркове и градини',
          },
          en: {
            title: 'Parks and gardens',
          },
        },
      },
      {
        slug: 'nature-reserves',
        locale: {
          bg: {
            title: 'Резервати',
          },
          en: {
            title: 'Nature reserves',
          },
        },
      },
      {
        slug: 'lifts',
        locale: {
          bg: {
            title: 'Лифтове',
          },
          en: {
            title: 'Lifts',
          },
        },
      },
      {
        slug: 'eco-trails',
        locale: {
          bg: {
            title: 'Екопътеки',
          },
          en: {
            title: 'Eco-trails',
          },
        },
      },
    ],
  },
]

export default categories
