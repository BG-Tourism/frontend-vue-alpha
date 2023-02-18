const categories = [
  {
    slug: 'architecture',
    places_count: Math.floor(Math.random() * 100),
    locale: {
      bg: {
        title: 'Архитектура',
      },
      en: {
        title: 'Architecture',
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
      },
      en: {
        title: 'Religion',
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
      },
      en: {
        title: 'Culture',
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
      },
      en: {
        title: 'Nature',
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
