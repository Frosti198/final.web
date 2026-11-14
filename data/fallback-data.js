/**
 * Fallback dataset & CORS-safe JSON loader.
 * Attempts real fetch() over HTTP/HTTPS (Live Server / GitHub Pages) and
 * transparently falls back to window.NOMADWAY_DATA when opened via file://.
 */
window.NOMADWAY_DATA = {
  "destinations": [
    {
      "id": "burabay",
      "category": "nature",
      "image": "assets/images/img_forest.jpg",
      "priceUsd": 140,
      "durationDays": 2,
      "rating": 4.9,
      "coords": {
        "lat": 53.0833,
        "lon": 70.3
      },
      "title": {
        "en": "Burabay Pine Sanctuary",
        "ru": "Сосновый заповедник Бурабай",
        "kz": "Бурабай қарағайлы қорығы"
      },
      "region": {
        "en": "Akmola Region",
        "ru": "Акмолинская область",
        "kz": "Ақмола облысы"
      },
      "difficulty": {
        "en": "Easy",
        "ru": "Лёгкий",
        "kz": "Жеңіл"
      },
      "description": {
        "en": "Granite cliffs, crystal-clear pine lakes, and panoramic hikes over Okzhetpes and Bolektau ridges.",
        "ru": "Гранитные скалы, хрустальные лесные озёра и панорамные маршруты на Окжетпес и Болектау.",
        "kz": "Гранитті жартастар, мөлдір қарағайлы көлдер және Оқжетпес пен Бөлектау шыңдарына серуен."
      },
      "highlights": {
        "en": [
          "Bolektau Summit Panorama",
          "Lake Borovoe Kayak Loop",
          "Abylai Khan Glade"
        ],
        "ru": [
          "Панорама вершины Болектау",
          "Каякинг по озеру Боровое",
          "Поляна Абылай хана"
        ],
        "kz": [
          "Бөлектау шыңының панорамасы",
          "Бурабай көлінде каякинг",
          "Абылай хан алаңы"
        ]
      }
    },
    {
      "id": "charyn",
      "category": "desert",
      "image": "assets/images/img_nature.jpg",
      "priceUsd": 185,
      "durationDays": 2,
      "rating": 4.8,
      "coords": {
        "lat": 43.3522,
        "lon": 79.0789
      },
      "title": {
        "en": "Charyn Canyon Expedition",
        "ru": "Экспедиция в Чарынский каньон",
        "kz": "Шарын шатқалы экспедициясы"
      },
      "region": {
        "en": "Almaty Region",
        "ru": "Алматинская область",
        "kz": "Алматы облысы"
      },
      "difficulty": {
        "en": "Moderate",
        "ru": "Средний",
        "kz": "Орташа"
      },
      "description": {
        "en": "Walk through the 12-million-year-old Valley of Castles carved into fiery terracotta sandstone.",
        "ru": "Прогулка по Долине Замков возрастом 12 млн лет среди огненно-терракотовых скал.",
        "kz": "12 миллион жылдық Қамалдар аңғарындағы қызыл құмтас жартастары арасындағы саяхат."
      },
      "highlights": {
        "en": [
          "Valley of Castles Sunset",
          "Charyn River Eco-Camp",
          "Relict Ash Grove"
        ],
        "ru": [
          "Закат в Долине Замков",
          "Эко-лагерь у реки Чарын",
          "Реликтовая ясеневая роща"
        ],
        "kz": [
          "Қамалдар аңғарындағы күн батысы",
          "Шарын өзенінің эколагері",
          "Ерен тоғайы"
        ]
      }
    },
    {
      "id": "astana",
      "category": "city",
      "image": "assets/images/img_city.jpg",
      "priceUsd": 95,
      "durationDays": 1,
      "rating": 4.7,
      "coords": {
        "lat": 51.1694,
        "lon": 71.4491
      },
      "title": {
        "en": "Astana Futuristic Skyline",
        "ru": "Футуристическая Астана",
        "kz": "Астананың заманауи келбеті"
      },
      "region": {
        "en": "Astana",
        "ru": "Астана",
        "kz": "Астана"
      },
      "difficulty": {
        "en": "Easy",
        "ru": "Лёгкий",
        "kz": "Жеңіл"
      },
      "description": {
        "en": "Architectural tour across EXPO Nur Alem, Baiterek Tower, Astana IT University hub, and Ishim embankment.",
        "ru": "Архитектурный маршрут: EXPO Нур Алем, Байтерек, кампус Astana IT University и набережная Есиля.",
        "kz": "EXPO Нұр Әлем, Бәйтерек, Astana IT University кампусы және Есіл жағалауы бойынша сәулет туры."
      },
      "highlights": {
        "en": [
          "EXPO Nur Alem Sphere",
          "Baiterek Observation Deck",
          "Left Bank Night Lights"
        ],
        "ru": [
          "Сфера EXPO Нур Алем",
          "Смотровая площадка Байтерек",
          "Огни левого берега"
        ],
        "kz": [
          "EXPO Нұр Әлем сферасы",
          "Бәйтерек шолу алаңы",
          "Сол жағалау шамдары"
        ]
      }
    },
    {
      "id": "big-almaty",
      "category": "alpine",
      "image": "assets/images/img_weather.jpg",
      "priceUsd": 160,
      "durationDays": 1,
      "rating": 4.9,
      "coords": {
        "lat": 43.0506,
        "lon": 76.985
      },
      "title": {
        "en": "Big Almaty Lake Alpine Trek",
        "ru": "Альпийский трек к БАО",
        "kz": "Үлкен Алматы көліне альпілік жорық"
      },
      "region": {
        "en": "Ile-Alatau",
        "ru": "Иле-Алатау",
        "kz": "Іле Алатауы"
      },
      "difficulty": {
        "en": "Challenging",
        "ru": "Сложный",
        "kz": "Күрделі"
      },
      "description": {
        "en": "High-altitude turquoise glacier reservoir at 2,511 meters framed by snow-capped Tian Shan peaks.",
        "ru": "Высокогорное бирюзовое ледниковое озеро на высоте 2511 м среди снежных пиков Тянь-Шаня.",
        "kz": "Тянь-Шаньның қарлы шыңдары қоршаған 2511 м биіктіктегі көгілдір мұздық көлі."
      },
      "highlights": {
        "en": [
          "2,511m Turquoise Basin",
          "Tian Shan Observatory Ridge",
          "Alpine Pine Picnic"
        ],
        "ru": [
          "Бирюзовая чаша 2511 м",
          "Обсерватория Тянь-Шаня",
          "Пикник среди тянь-шаньских елей"
        ],
        "kz": [
          "2511 м көгілдір көл",
          "Тянь-Шань обсерваториясы",
          "Қарағайлы алқапта демалыс"
        ]
      }
    },
    {
      "id": "kolsai",
      "category": "nature",
      "image": "assets/images/img_camera.jpg",
      "priceUsd": 220,
      "durationDays": 3,
      "rating": 5.0,
      "coords": {
        "lat": 42.9875,
        "lon": 78.3236
      },
      "title": {
        "en": "Kolsai & Kaindy Emerald Lakes",
        "ru": "Изумрудные озёра Кольсай и Каинды",
        "kz": "Көлсай мен Қайыңды зүбәржат көлдері"
      },
      "region": {
        "en": "Almaty Region",
        "ru": "Алматинская область",
        "kz": "Алматы облысы"
      },
      "difficulty": {
        "en": "Moderate",
        "ru": "Средний",
        "kz": "Орташа"
      },
      "description": {
        "en": "Horseback trails between cascading mountain lakes and the iconic sunken spruce forest of Kaindy.",
        "ru": "Конные тропы между каскадом горных озёр и знаменитым затопленным еловым лесом Каинды.",
        "kz": "Тау көлдерінің каскады мен Қайыңдыдағы су астындағы шыршалы орманға атты сапар."
      },
      "highlights": {
        "en": [
          "Sunken Forest of Kaindy",
          "Kolsai 1 to Kolsai 2 Hike",
          "Saty Village Guesthouse"
        ],
        "ru": [
          "Затопленный лес Каинды",
          "Трек Кольсай-1 — Кольсай-2",
          "Гостеприимство села Саты"
        ],
        "kz": [
          "Қайыңды су асты орманы",
          "Көлсай-1 — Көлсай-2 жаяу жолы",
          "Саты ауылындағы қонақ үй"
        ]
      }
    },
    {
      "id": "turkestan",
      "category": "city",
      "image": "assets/images/img_campus.jpg",
      "priceUsd": 175,
      "durationDays": 2,
      "rating": 4.8,
      "coords": {
        "lat": 43.2973,
        "lon": 68.2517
      },
      "title": {
        "en": "Turkestan Silk Road Heritage",
        "ru": "Наследие Шёлкового пути в Туркестане",
        "kz": "Түркістан — Ұлы Жібек жолы мұрасы"
      },
      "region": {
        "en": "Turkestan Region",
        "ru": "Туркестанская область",
        "kz": "Түркістан облысы"
      },
      "difficulty": {
        "en": "Easy",
        "ru": "Лёгкий",
        "kz": "Жеңіл"
      },
      "description": {
        "en": "UNESCO Mausoleum of Khoja Ahmed Yasawi, Karavansaray waterways, and ancient Otrar ruins.",
        "ru": "Мавзолей Ходжи Ахмеда Ясави (ЮНЕСКО), каналы Караван-сарая и древнее городище Отырар.",
        "kz": "Қожа Ахмет Ясауи кесенесі (ЮНЕСКО), Керуен-сарай арналары және ежелгі Отырар қалашығы."
      },
      "highlights": {
        "en": [
          "Yasawi UNESCO Complex",
          "Otrar Archaeological Park",
          "Traditional Ceramic Workshop"
        ],
        "ru": [
          "Комплекс Ясави (ЮНЕСКО)",
          "Городище Отырар",
          "Мастер-класс по керамике"
        ],
        "kz": [
          "Ясауи кесенесі (ЮНЕСКО)",
          "Отырар археологиялық паркі",
          "Қыш шеберханасы"
        ]
      }
    },
    {
      "id": "bozzhyra",
      "category": "desert",
      "image": "assets/images/img_coffee.jpg",
      "priceUsd": 290,
      "durationDays": 3,
      "rating": 4.9,
      "coords": {
        "lat": 43.4167,
        "lon": 54.0667
      },
      "title": {
        "en": "Mangystau Bozzhyra Plateau",
        "ru": "Плато Бозжыра в Мангистау",
        "kz": "Маңғыстаудағы Бозжыра үстірті"
      },
      "region": {
        "en": "Mangystau",
        "ru": "Мангистау",
        "kz": "Маңғыстау"
      },
      "difficulty": {
        "en": "Challenging",
        "ru": "Сложный",
        "kz": "Күрделі"
      },
      "description": {
        "en": "Surreal white chalk fangs rising from an ancient seabed with stargazing camps under zero light pollution.",
        "ru": "Белоснежные меловые останцы на дне древнего океана Тетис и ночёвка под звёздным небом.",
        "kz": "Ежелгі Тетис мұхитының түбіндегі ақ бор жартастар мен жұлдызды аспан астындағы лагерь."
      },
      "highlights": {
        "en": [
          "Bozzhyra Fangs Overlook",
          "Torysh Valley of Balls",
          "Milky Way Desert Camp"
        ],
        "ru": [
          "Панорама «Клыки Бозжыры»",
          "Долина шаров Торыш",
          "Ночёвка под Млечным Путём"
        ],
        "kz": [
          "Бозжыра азулары панорамасы",
          "Торыш шарлар алқабы",
          "Құс жолы астындағы түнеу"
        ]
      }
    },
    {
      "id": "shymbulak",
      "category": "alpine",
      "image": "assets/images/img_workspace.jpg",
      "priceUsd": 150,
      "durationDays": 2,
      "rating": 4.8,
      "coords": {
        "lat": 43.1286,
        "lon": 77.0811
      },
      "title": {
        "en": "Shymbulak Ridge Workation",
        "ru": "Горный воркейшн на Шымбулаке",
        "kz": "Шымбұлақ таулы воркейшні"
      },
      "region": {
        "en": "Almaty",
        "ru": "Алматы",
        "kz": "Алматы"
      },
      "difficulty": {
        "en": "Easy",
        "ru": "Лёгкий",
        "kz": "Жеңіл"
      },
      "description": {
        "en": "Combine high-speed coworking terraces at 2,260m with Medeu cable car climbs to Talgar Pass (3,200m).",
        "ru": "Совместите коворкинг-террасы на высоте 2260 м с подъёмом от Медеу на Талгарский перевал (3200 м).",
        "kz": "2260 м биіктіктегі коворкинг террасаларын Медеу мен Талғар асуына (3200 м) көтерілумен үйлестіріңіз."
      },
      "highlights": {
        "en": [
          "Talgar Pass 3,200m Gondola",
          "Medeu Ice Rink Vista",
          "Mountain Espresso Lounge"
        ],
        "ru": [
          "Гондола на Талгарский перевал",
          "Вид на каток Медеу",
          "Горная эспрессо-терраса"
        ],
        "kz": [
          "Талғар асуына аспалы жол",
          "Медеу мұз айдыны көрінісі",
          "Таулы кофе террасасы"
        ]
      }
    },
    {
      "id": "altyn-emel",
      "category": "desert",
      "image": "assets/images/img_nature.jpg",
      "priceUsd": 210,
      "durationDays": 2,
      "rating": 4.9,
      "coords": {
        "lat": 43.8833,
        "lon": 78.5833
      },
      "title": {
        "en": "Altyn-Emel Singing Dune",
        "ru": "Поющий бархан Алтын-Эмель",
        "kz": "Алтынемел — Айғайқұм"
      },
      "region": {
        "en": "Jetisu Region",
        "ru": "Жетысу",
        "kz": "Жетісу облысы"
      },
      "difficulty": {
        "en": "Moderate",
        "ru": "Средний",
        "kz": "Орташа"
      },
      "description": {
        "en": "Climb the 150-meter acoustic sand ridge, explore chalky Aktau mountains, and spot wild kulan herds.",
        "ru": "Подъём на 150-метровый поющий бархан, белые горы Актау и наблюдение за дикими куланами.",
        "kz": "150 метрлік Айғайқұм жотасына шығу, Ақтау бор таулары мен жабайы құландарды бақылау."
      },
      "highlights": {
        "en": [
          "150m Singing Sand Ridge",
          "Aktau Chalk Canyon",
          "Katutau Volcanic Rocks"
        ],
        "ru": [
          "150-метровый Поющий бархан",
          "Меловые горы Актау",
          "Вулканические скалы Катутау"
        ],
        "kz": [
          "150 м Айғайқұм жотасы",
          "Ақтау бор шатқалы",
          "Қатутау жанартау жартастары"
        ]
      }
    }
  ],
  "guides": {
    "guides": [
      {
        "id": "guide-askar",
        "name": "Askar Nurmukhammed",
        "image": "assets/images/photo.jpg",
        "languages": [
          "EN",
          "RU",
          "KZ"
        ],
        "experienceYears": 4,
        "rating": 4.95,
        "role": {
          "en": "Lead Route Architect & Digital Nomad",
          "ru": "Ведущий архитектор маршрутов",
          "kz": "Жетекші маршрут сәулетшісі"
        },
        "specialty": {
          "en": "Astana Urban Architecture & Burabay Trails",
          "ru": "Архитектура Астаны и тропы Бурабая",
          "kz": "Астана сәулеті және Бурабай соқпақтары"
        }
      },
      {
        "id": "guide-madina",
        "name": "Madina Suleimenova",
        "image": "assets/images/img_recipes.jpg",
        "languages": [
          "EN",
          "KZ"
        ],
        "experienceYears": 6,
        "rating": 4.92,
        "role": {
          "en": "Alpine & Eco-Tourism Specialist",
          "ru": "Специалист по горному эко-туризму",
          "kz": "Таулы эко-туризм маманы"
        },
        "specialty": {
          "en": "Kolsai Lakes, Kaindy & Ile-Alatau Glaciers",
          "ru": "Озёра Кольсай, Каинды и ледники Иле-Алатау",
          "kz": "Көлсай, Қайыңды және Іле Алатауы мұздықтары"
        }
      },
      {
        "id": "guide-timur",
        "name": "Timur Kassenov",
        "image": "assets/images/img_books.jpg",
        "languages": [
          "EN",
          "RU"
        ],
        "experienceYears": 7,
        "rating": 4.89,
        "role": {
          "en": "Silk Road & Desert Expedition Lead",
          "ru": "Гид по Шёлковому пути и пустыням",
          "kz": "Ұлы Жібек жолы және шөл экспедициясының гиді"
        },
        "specialty": {
          "en": "Turkestan UNESCO Sites & Mangystau Canyons",
          "ru": "Памятники Туркестана и каньоны Мангистау",
          "kz": "Түркістан ескерткіштері және Маңғыстау шатқалдары"
        }
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": {
          "en": "Which season offers the mildest trekking weather across Charyn Canyon and Mangystau?",
          "ru": "Какой сезон лучше всего подходит для трекинга в Чарыне и Мангистау?",
          "kz": "Шарын шатқалы мен Маңғыстауда жаяу саяхатқа ең қолайлы маусым қайсы?"
        },
        "options": {
          "en": [
            "Mid-July midday heat",
            "Spring (April–May) & Autumn (September–October)",
            "January blizzard"
          ],
          "ru": [
            "Полдень середины июля",
            "Весна (апрель–май) и осень (сентябрь–октябрь)",
            "Январская метель"
          ],
          "kz": [
            "Шілде айының түскі ыстығы",
            "Көктем (сәуір–мамыр) және күз (қыркүйек–қазан)",
            "Қаңтардағы боран"
          ]
        },
        "correctIndex": 1
      },
      {
        "id": 2,
        "question": {
          "en": "What altitude does Big Almaty Lake sit at above sea level?",
          "ru": "На какой высоте над уровнем моря находится Большое Алматинское озеро?",
          "kz": "Үлкен Алматы көлі теңіз деңгейінен қандай биіктікте орналасқан?"
        },
        "options": {
          "en": [
            "~500 meters",
            "~2,511 meters",
            "~6,900 meters"
          ],
          "ru": [
            "~500 метров",
            "~2 511 метров",
            "~6 900 метров"
          ],
          "kz": [
            "~500 метр",
            "~2 511 метр",
            "~6 900 метр"
          ]
        },
        "correctIndex": 1
      },
      {
        "id": 3,
        "question": {
          "en": "Which UNESCO monument anchors the spiritual center of Turkestan?",
          "ru": "Какой памятник ЮНЕСКО является духовным центром Туркестана?",
          "kz": "Түркістанның рухани орталығы саналатын ЮНЕСКО ескерткіші қайсы?"
        },
        "options": {
          "en": [
            "Mausoleum of Khoja Ahmed Yasawi",
            "Baiterek Tower",
            "Medeu Ice Complex"
          ],
          "ru": [
            "Мавзолей Ходжи Ахмеда Ясави",
            "Башня Байтерек",
            "Комплекс Медеу"
          ],
          "kz": [
            "Қожа Ахмет Ясауи кесенесі",
            "Бәйтерек мұнарасы",
            "Медеу мұз айдыны"
          ]
        },
        "correctIndex": 0
      },
      {
        "id": 4,
        "question": {
          "en": "Why is Lake Kaindy famous among photographers worldwide?",
          "ru": "Чем озеро Каинды прославилось среди фотографов всего мира?",
          "kz": "Қайыңды көлі әлем фотографтары арасында несімен танымал?"
        },
        "options": {
          "en": [
            "Submerged spruce trunks rising out of turquoise water",
            "Lava geysers",
            "Floating sand dunes"
          ],
          "ru": [
            "Затопленными стволами елей в бирюзовой воде",
            "Лавовыми гейзерами",
            "Плавучими дюнами"
          ],
          "kz": [
            "Көгілдір судан шығып тұрған шырша діңдерімен",
            "Лава гейзерлерімен",
            "Жүзбелі құм төбелерімен"
          ]
        },
        "correctIndex": 0
      },
      {
        "id": 5,
        "question": {
          "en": "Which essential rule ensures safe mountain hiking in Ile-Alatau?",
          "ru": "Какое правило обязательно для безопасного похода в горах Иле-Алатау?",
          "kz": "Іле Алатауы тауларында қауіпсіз серуендеу үшін қай ереже маңызды?"
        },
        "options": {
          "en": [
            "Bring layered windproof gear, offline maps, and extra water",
            "Wear dress shoes and leave after sunset",
            "Skip checking weather telemetry"
          ],
          "ru": [
            "Взять многослойную одежду, офлайн-карты и запас воды",
            "Выйти на закате в городской обуви",
            "Не проверять прогноз погоды"
          ],
          "kz": [
            "Қабатты жел өткізбейтін киім, офлайн карта және су алу",
            "Күн батқанда жеңіл аяқ киіммен шығу",
            "Ауа райын тексермеу"
          ]
        },
        "correctIndex": 0
      }
    ]
  },
  "translations": {
    "en": {
      "brand_tagline": "Smart Travel & Trip OS",
      "nav_home": "Home",
      "nav_destinations": "Destinations",
      "nav_planner": "Trip Planner",
      "nav_guides": "Guides & Quiz",
      "nav_contact": "Book Tour",
      "nav_theme_label": "Theme",
      "hero_badge": "Astana IT University • Web Technologies 1 Final Project",
      "hero_title": "Discover Kazakhstan With Real-Time Precision",
      "hero_subtitle": "Explore curated routes across canyons, alpine lakes, and futuristic skylines. Check live weather telemetry, customize your 3-day drag-and-drop itinerary, and book with local specialists.",
      "hero_cta_explore": "Explore Destinations",
      "hero_cta_planner": "Open Trip Planner",
      "weather_title": "Live Weather Telemetry",
      "weather_subtitle": "Powered by Open-Meteo Public API",
      "weather_wind": "Wind",
      "weather_status_live": "Live API",
      "weather_status_cached": "Fallback Data",
      "stats_routes": "Curated Expeditions",
      "stats_travelers": "Happy Travelers",
      "stats_regions": "Kazakhstan Regions",
      "stats_rating": "Avg Guide Rating",
      "quiz_mini_badge": "Interactive Finder",
      "quiz_mini_title": "Find Your Ideal Route in 15 Seconds",
      "quiz_mini_desc": "Pick your preferred landscape and pace — our JS engine matches you with the highest-rated destination.",
      "quiz_q_terrain": "Preferred Landscape",
      "quiz_q_pace": "Trip Duration",
      "quiz_btn_match": "Find My Match",
      "dest_page_badge": "Dynamic JSON Catalog",
      "dest_page_title": "Curated Destinations & Expeditions",
      "dest_page_subtitle": "Filter by terrain, search in real time, sort dynamically with animated transitions, and add stops directly to your Trip Planner.",
      "filter_all": "All",
      "filter_nature": "Nature & Lakes",
      "filter_desert": "Canyons & Desert",
      "filter_city": "City & Culture",
      "filter_alpine": "Alpine Peaks",
      "search_placeholder": "Search by destination, region, or highlight...",
      "sort_recommended": "Sort: Recommended",
      "sort_price_asc": "Price: Low to High",
      "sort_price_desc": "Price: High to Low",
      "sort_rating": "Highest Rated",
      "sort_duration": "Shortest Duration",
      "btn_details": "View Details",
      "btn_add_trip": "Add to Planner",
      "no_results": "No destinations match your current filter or search query.",
      "modal_highlights": "Key Highlights",
      "modal_region": "Region",
      "modal_difficulty": "Difficulty",
      "modal_duration": "Duration",
      "modal_price": "Estimated Price",
      "modal_close": "Close",
      "planner_badge": "Drag & Drop Workspace",
      "planner_title": "Interactive 3-Day Trip Planner",
      "planner_subtitle": "Drag destinations between the catalog pool and Day 1–3 columns (or use quick move buttons), track your budget live, and copy your shareable itinerary.",
      "planner_budget_label": "Target Budget (USD)",
      "planner_spent_label": "Planned Cost",
      "planner_copy_btn": "Copy Itinerary",
      "planner_sample_btn": "Load Sample Trip",
      "planner_reset_btn": "Clear Board",
      "planner_pool_title": "Available Stops",
      "planner_day1": "Day 1 — Arrival & Kickoff",
      "planner_day2": "Day 2 — Core Expedition",
      "planner_day3": "Day 3 — Scenic Finale",
      "planner_empty_drop": "Drop experiences here",
      "guides_badge": "Local Specialists & Readiness",
      "guides_title": "Meet Our Expedition Guides & Test Your Readiness",
      "guides_subtitle": "Certified local experts across Astana, Almaty, and Mangystau, plus an interactive travel knowledge quiz and FAQ.",
      "quiz_section_title": "Kazakhstan Travel Readiness Quiz",
      "quiz_submit_btn": "Check Answers",
      "quiz_reset_btn": "Retake Quiz",
      "faq_title": "Frequently Asked Questions",
      "faq_q1": "How does live weather integration work on NomadWay?",
      "faq_a1": "The home widget calls the Open-Meteo REST API asynchronously using Fetch to retrieve real-time temperature and wind telemetry for Astana, Almaty, and Aktau, with automatic cached fallback when offline.",
      "faq_q2": "Are my language, theme, and itinerary saved automatically?",
      "faq_a2": "Yes. Your chosen language (EN/RU/KZ), Dark/Light mode, accent color, and 3-day Drag & Drop itinerary are persisted in browser localStorage across all 5 pages.",
      "faq_q3": "Can I use the Trip Planner on mobile touchscreens?",
      "faq_a3": "Yes! In addition to jQuery UI Drag & Drop on desktop, every planner card provides quick Day 1/2/3 assignment buttons so touch and keyboard users have full control.",
      "contact_badge": "Custom Tour Booking",
      "contact_title": "Reserve Your Personalized Expedition",
      "contact_subtitle": "Complete the validated booking form below. Client-side JavaScript rules verify every field in real time before triggering your confirmation receipt.",
      "form_name": "Full Name *",
      "form_email": "Email Address *",
      "form_phone": "Phone Number *",
      "form_dest": "Primary Destination *",
      "form_date": "Preferred Start Date *",
      "form_travelers": "Travelers *",
      "form_notes": "Special Requests & Notes (min 20 chars) *",
      "form_consent": "I agree to NomadWay itinerary processing terms and expedition safety guidelines.",
      "form_submit": "Confirm Booking Request",
      "form_success_title": "Booking Confirmed!",
      "form_success_desc": "Your custom itinerary request has been logged. Check the toast confirmation and reference ID below.",
      "footer_desc": "Interactive multi-page travel platform created for Web Technologies 1 (Front End) Final Project at Astana IT University by Askar Nurmukhammed (IT-2514).",
      "footer_pages": "Pages",
      "footer_features": "Tech Stack",
      "footer_customizer": "Live Theme Customizer",
      "footer_rights": "NomadWay Platform • Prepared by Askar Nurmukhammed (IT-2514)",
      "step1_title": "1. Browse JSON Routes",
      "step1_desc": "Filter 9 curated regions by terrain, rating, and live price.",
      "step2_title": "2. Build 3-Day Plan",
      "step2_desc": "Drag & drop stops into Day 1–3 with instant budget tracking.",
      "step3_title": "3. Live Weather & Go",
      "step3_desc": "Verify real-time Open-Meteo telemetry and reserve in 1 minute.",
      "weather_highlights_title": "Why Travelers Pick NomadWay",
      "wh_1_title": "Verified Local Routes",
      "wh_1_desc": "GPS-checked trails across 14 regions with transparent pricing.",
      "wh_2_title": "Bilingual Field Guides",
      "wh_2_desc": "Certified specialists fluent in English, Russian, and Kazakh.",
      "wh_3_title": "Adaptive Weather Routing",
      "wh_3_desc": "Instant itinerary adjustment when mountain conditions shift.",
      "featured_badge": "Top Rated Picks",
      "featured_title": "Most Popular Expeditions",
      "featured_view_all": "View All 9 Routes",
      "reviews_badge": "Traveler Feedback",
      "reviews_title": "Recent Expedition Stories",
      "rev_1_text": "\"The 3-day Drag & Drop planner and live weather telemetry made our Almaty–Charyn loop effortless.\"",
      "rev_2_text": "\"Instant Kazakh/Russian language toggle helped our whole family coordinate Burabay stops together.\"",
      "rev_3_text": "\"Clear budget progress bar and custom checklist saved us hours before departing to Mangystau.\"",
      "opt_day_1": "1 Day Express",
      "opt_day_2": "Up to 2 Days",
      "opt_day_3": "3 Days Expedition",
      "cat_summary_showing": "Showing",
      "cat_summary_avg_price": "Avg Price",
      "cat_summary_avg_rating": "Avg Rating",
      "season_guide_title": "Best Time to Visit by Region",
      "season_spring": "Spring (Apr–May): Charyn, Altyn-Emel, Turkestan & Mangystau",
      "season_summer": "Summer (Jun–Aug): Kolsai, Kaindy, Big Almaty Lake & Burabay",
      "season_autumn": "Autumn (Sep–Oct): Golden Tian Shan & Astana Urban Walks",
      "season_winter": "Winter (Dec–Mar): Shymbulak Ridge & Medeu Alpine Complex",
      "planner_breakdown_title": "Day-by-Day Route Breakdown",
      "planner_checklist_title": "Smart Expedition Checklist",
      "planner_checklist_hint": "Auto-persisted in localStorage • Gear adapts to your planned stops",
      "field_notes_badge": "Regional Field Notes",
      "field_notes_title": "Essential Preparation Before Departure",
      "fn_1_title": "Steppe Hospitality",
      "fn_1_desc": "Carry small cash in KZT for rural guesthouses in Saty and Turkestan villages.",
      "fn_2_title": "Alpine Layering",
      "fn_2_desc": "Above 2,200m temperatures drop fast after 16:00 — pack a windproof shell.",
      "fn_3_title": "Desert Hydration",
      "fn_3_desc": "Bring 2L+ water per traveler and offline maps in Charyn & Bozzhyra.",
      "contact_included_title": "Included in Every Expedition",
      "inc_1": "Certified EN / RU / KZ expedition guide",
      "inc_2": "4x4 transfer & national park eco-permits",
      "inc_3": "Free weather-window date rescheduling",
      "inc_4": "24/7 Astana dispatch coordination",
      "contact_sla_title": "2-Hour Response Guarantee",
      "contact_sla_desc": "Inquiries submitted Monday–Saturday receive a tailored route PDF & cost breakdown within 2 hours."
    },
    "ru": {
      "brand_tagline": "Умный планировщик туров",
      "nav_home": "Главная",
      "nav_destinations": "Маршруты",
      "nav_planner": "Планировщик",
      "nav_guides": "Гиды и квиз",
      "nav_contact": "Бронь тура",
      "nav_theme_label": "Тема",
      "hero_badge": "Astana IT University • Финальный проект Web Technologies 1",
      "hero_title": "Откройте Казахстан с точностью в реальном времени",
      "hero_subtitle": "Исследуйте авторские маршруты по каньонам, горным озёрам и современным городам. Следите за живой погодой через API, собирайте 3-дневный план методом Drag & Drop и бронируйте туры.",
      "hero_cta_explore": "Смотреть маршруты",
      "hero_cta_planner": "Открыть планировщик",
      "weather_title": "Погода в реальном времени",
      "weather_subtitle": "Данные Open-Meteo Public API",
      "weather_wind": "Ветер",
      "weather_status_live": "Live API",
      "weather_status_cached": "Резервные данные",
      "stats_routes": "Авторских маршрутов",
      "stats_travelers": "Довольных туристов",
      "stats_regions": "Регионов Казахстана",
      "stats_rating": "Средний рейтинг гидов",
      "quiz_mini_badge": "Умный подбор",
      "quiz_mini_title": "Подберите идеальный маршрут за 15 секунд",
      "quiz_mini_desc": "Выберите желаемый ландшафт и длительность — скрипт сразу подберёт лучший вариант из JSON-каталога.",
      "quiz_q_terrain": "Тип ландшафта",
      "quiz_q_pace": "Длительность поездки",
      "quiz_btn_match": "Подобрать тур",
      "dest_page_badge": "Динамический JSON-каталог",
      "dest_page_title": "Локации и экспедиции",
      "dest_page_subtitle": "Фильтруйте по категориям, ищите по ключевым словам, сортируйте с плавной анимацией и добавляйте точки в свой планировщик.",
      "filter_all": "Все",
      "filter_nature": "Природа и озёра",
      "filter_desert": "Каньоны и пустыни",
      "filter_city": "Города и культура",
      "filter_alpine": "Горные вершины",
      "search_placeholder": "Поиск по названию, региону или тегу...",
      "sort_recommended": "Сортировка: Рекомендуемые",
      "sort_price_asc": "Цена: по возрастанию",
      "sort_price_desc": "Цена: по убыванию",
      "sort_rating": "Высокий рейтинг",
      "sort_duration": "Сначала короткие",
      "btn_details": "Подробнее",
      "btn_add_trip": "В планировщик",
      "no_results": "По вашему запросу маршруты не найдены.",
      "modal_highlights": "Ключевые точки",
      "modal_region": "Регион",
      "modal_difficulty": "Сложность",
      "modal_duration": "Длительность",
      "modal_price": "Ориентировочная цена",
      "modal_close": "Закрыть",
      "planner_badge": "Интерактивная доска Drag & Drop",
      "planner_title": "Планировщик маршрута на 3 дня",
      "planner_subtitle": "Перетаскивайте локации из каталога в колонки День 1–3 (или используйте кнопки быстрого переноса), контролируйте бюджет и копируйте готовый план.",
      "planner_budget_label": "Бюджет поездки (USD)",
      "planner_spent_label": "Итого по плану",
      "planner_copy_btn": "Копировать план",
      "planner_sample_btn": "Загрузить пример",
      "planner_reset_btn": "Очистить доску",
      "planner_pool_title": "Доступные локации",
      "planner_day1": "День 1 — Прибытие и старт",
      "planner_day2": "День 2 — Основная экспедиция",
      "planner_day3": "День 3 — Финальные виды",
      "planner_empty_drop": "Перетащите карточку сюда",
      "guides_badge": "Эксперты и подготовка",
      "guides_title": "Наши гиды и тест готовности к путешествию",
      "guides_subtitle": "Сертифицированные специалисты в Астане, Алматы и Мангистау, интерактивный квиз и ответы на частые вопросы.",
      "quiz_section_title": "Квиз: готовы ли вы к экспедиции по Казахстану?",
      "quiz_submit_btn": "Проверить ответы",
      "quiz_reset_btn": "Пройти заново",
      "faq_title": "Частые вопросы",
      "faq_q1": "Как работает интеграция живой погоды на сайте?",
      "faq_a1": "Виджет на главной странице асинхронно обращается через Fetch к публичному API Open-Meteo для Астаны, Алматы и Актау, а при отсутствии сети автоматически использует резервные данные.",
      "faq_q2": "Сохраняются ли язык, тема и собранный маршрут?",
      "faq_a2": "Да. Выбранный язык (EN/RU/KZ), тёмная/светлая тема, акцентный цвет и доска планировщика сохраняются в localStorage браузера на всех 5 страницах.",
      "faq_q3": "Удобен ли планировщик на телефоне без мыши?",
      "faq_a3": "Да! Помимо перетаскивания jQuery UI на десктопе, у каждой карточки есть быстрые кнопки назначения на День 1, 2 или 3.",
      "contact_badge": "Заявка на индивидуальный тур",
      "contact_title": "Забронируйте персональную экспедицию",
      "contact_subtitle": "Заполните форму ниже — клиентская JavaScript-валидация проверяет каждое поле в реальном времени и запускает анимацию подтверждения.",
      "form_name": "Полное имя *",
      "form_email": "Электронная почта *",
      "form_phone": "Номер телефона *",
      "form_dest": "Основное направление *",
      "form_date": "Дата начала поездки *",
      "form_travelers": "Количество гостей *",
      "form_notes": "Пожелания к маршруту (мин. 20 символов) *",
      "form_consent": "Я согласен с правилами обработки заявки и требованиями безопасности маршрута.",
      "form_submit": "Отправить заявку",
      "form_success_title": "Заявка успешно отправлена!",
      "form_success_desc": "Ваш запрос на маршрут сохранён. Номер подтверждения показан ниже.",
      "footer_desc": "Интерактивная многостраничная веб-платформа, разработанная для Final Project по курсу Web Technologies 1 в Astana IT University. Автор: Аскар Нурмухаммед (IT-2514).",
      "footer_pages": "Разделы",
      "footer_features": "Технологии",
      "footer_customizer": "Настройка акцента темы",
      "footer_rights": "NomadWay Platform • Выполнил: Аскар Нурмухаммед (IT-2514)",
      "step1_title": "1. Выберите JSON-маршрут",
      "step1_desc": "Фильтруйте 9 локаций по ландшафту, рейтингу и цене.",
      "step2_title": "2. Соберите план на 3 дня",
      "step2_desc": "Перетаскивайте точки в День 1–3 с контролем бюджета.",
      "step3_title": "3. Живая погода и бронь",
      "step3_desc": "Проверьте прогноз Open-Meteo и отправьте заявку за минуту.",
      "weather_highlights_title": "Почему выбирают NomadWay",
      "wh_1_title": "Проверенные маршруты",
      "wh_1_desc": "GPS-треки по 14 регионам Казахстана с прозрачной ценой.",
      "wh_2_title": "Мультиязычные гиды",
      "wh_2_desc": "Специалисты со свободным EN, RU и KZ в каждом туре.",
      "wh_3_title": "Адаптация к погоде",
      "wh_3_desc": "Быстрая корректировка плана при смене горных условий.",
      "featured_badge": "Выбор путешественников",
      "featured_title": "Популярные экспедиции",
      "featured_view_all": "Все 9 маршрутов",
      "reviews_badge": "Отзывы гостей",
      "reviews_title": "Впечатления из недавних поездок",
      "rev_1_text": "«Планировщик Drag & Drop и живая погода сделали наш маршрут Алматы–Чарын максимально удобным.»",
      "rev_2_text": "«Мгновенное переключение на казахский и русский помогло всей семье согласовать остановки в Бурабае.»",
      "rev_3_text": "«Шкала бюджета и чек-лист снаряжения сэкономили несколько часов перед поездкой в Мангистау.»",
      "opt_day_1": "Экспресс 1 день",
      "opt_day_2": "До 2 дней",
      "opt_day_3": "Экспедиция 3 дня",
      "cat_summary_showing": "Показано",
      "cat_summary_avg_price": "Средняя цена",
      "cat_summary_avg_rating": "Средний рейтинг",
      "season_guide_title": "Лучшее время по регионам",
      "season_spring": "Весна (апр–май): Чарын, Алтын-Эмель, Туркестан и Мангистау",
      "season_summer": "Лето (июн–авг): Кольсай, Каинды, БАО и Бурабай",
      "season_autumn": "Осень (сен–окт): Золотой Тянь-Шань и прогулки по Астане",
      "season_winter": "Зима (дек–мар): Шымбулак и высокогорный каток Медеу",
      "planner_breakdown_title": "Сводка маршрута по дням",
      "planner_checklist_title": "Умный чек-лист снаряжения",
      "planner_checklist_hint": "Сохраняется в localStorage • Подстраивается под выбранные локации",
      "field_notes_badge": "Полевые заметки",
      "field_notes_title": "Важная подготовка перед выездом",
      "fn_1_title": "Гостеприимство в аулах",
      "fn_1_desc": "Имейте наличные в тенге для гостевых домов в Саты и Туркестане.",
      "fn_2_title": "Слои для гор",
      "fn_2_desc": "Выше 2200 м после 16:00 быстро холодает — берите ветрозащитную куртку.",
      "fn_3_title": "Вода в пустыне",
      "fn_3_desc": "Берите от 2 л воды на человека и офлайн-карты для Чарына и Бозжыры.",
      "contact_included_title": "Включено в каждую экспедицию",
      "inc_1": "Сертифицированный гид (EN / RU / KZ)",
      "inc_2": "Внедорожный трансфер и эко-сборы нацпарков",
      "inc_3": "Бесплатный перенос даты при непогоде",
      "inc_4": "Круглосуточный координатор в Астане",
      "contact_sla_title": "Ответ в течение 2 часов",
      "contact_sla_desc": "Все заявки с Пн по Сб получают детальный маршрут и расчёт стоимости за 2 часа."
    },
    "kz": {
      "brand_tagline": "Ақылды саяхат жүйесі",
      "nav_home": "Басты бет",
      "nav_destinations": "Бағыттар",
      "nav_planner": "Жоспарлаушы",
      "nav_guides": "Гидтер мен квиз",
      "nav_contact": "Тур брондау",
      "nav_theme_label": "Тақырып",
      "hero_badge": "Astana IT University • Web Technologies 1 Қорытынды жоба",
      "hero_title": "Қазақстанды нақты уақыт дәлдігімен ашыңыз",
      "hero_subtitle": "Шатқалдар, тау көлдері мен заманауи қалалар бойынша үздік бағыттарды зерттеңіз. API арқылы ауа райын бақылап, Drag & Drop көмегімен 3 күндік жоспар құрыңыз.",
      "hero_cta_explore": "Бағыттарды көру",
      "hero_cta_planner": "Жоспарлаушыны ашу",
      "weather_title": "Нақты уақыттағы ауа райы",
      "weather_subtitle": "Open-Meteo Public API деректері",
      "weather_wind": "Жел",
      "weather_status_live": "Live API",
      "weather_status_cached": "Резерв дерек",
      "stats_routes": "Таңдаулы бағыттар",
      "stats_travelers": "Риза саяхатшылар",
      "stats_regions": "Қазақстан өңірлері",
      "stats_rating": "Орташа гид рейтингі",
      "quiz_mini_badge": "Жылдам таңдау",
      "quiz_mini_title": "15 секундта мінсіз бағытыңызды табыңыз",
      "quiz_mini_desc": "Қалаған табиғат түрі мен уақытты таңдаңыз — жүйе JSON-каталогтан үздік нұсқаны ұсынады.",
      "quiz_q_terrain": "Табиғат түрі",
      "quiz_q_pace": "Сапар ұзақтығы",
      "quiz_btn_match": "Бағытты табу",
      "dest_page_badge": "Динамикалық JSON каталог",
      "dest_page_title": "Таңдаулы бағыттар мен экспедициялар",
      "dest_page_subtitle": "Санат бойынша сүзгіден өткізіңіз, лезде іздеңіз, анимациямен сұрыптаңыз және жоспарлаушыға қосыңыз.",
      "filter_all": "Барлығы",
      "filter_nature": "Табиғат және көлдер",
      "filter_desert": "Шатқалдар мен шөл",
      "filter_city": "Қала және мәдениет",
      "filter_alpine": "Тау шыңдары",
      "search_placeholder": "Бағыт, өңір немесе кілт сөз бойынша іздеу...",
      "sort_recommended": "Сұрыптау: Ұсынылған",
      "sort_price_asc": "Баға: арзаннан қымбатқа",
      "sort_price_desc": "Баға: қымбаттан арзанға",
      "sort_rating": "Жоғары рейтинг",
      "sort_duration": "Қысқа мерзімді",
      "btn_details": "Толығырақ",
      "btn_add_trip": "Жоспарға қосу",
      "no_results": "Сұранысыңыз бойынша бағыттар табылмады.",
      "modal_highlights": "Негізгі орындар",
      "modal_region": "Өңір",
      "modal_difficulty": "Күрделілік",
      "modal_duration": "Ұзақтығы",
      "modal_price": "Болжалды бағасы",
      "modal_close": "Жабу",
      "planner_badge": "Drag & Drop жұмыс тақтасы",
      "planner_title": "3 күндік сапар жоспарлаушысы",
      "planner_subtitle": "Бағыттарды 1–3 күн бағандарына сүйреп апарыңыз (немесе жылдам батырмаларды қолданыңыз), бюджетті бақылаңыз және жоспарды көшіріп алыңыз.",
      "planner_budget_label": "Мақсатты бюджет (USD)",
      "planner_spent_label": "Жоспарланған сома",
      "planner_copy_btn": "Жоспарды көшіру",
      "planner_sample_btn": "Үлгі жүктеу",
      "planner_reset_btn": "Тақтаны тазарту",
      "planner_pool_title": "Қолжетімді орындар",
      "planner_day1": "1-күн — Келген сәт және бастау",
      "planner_day2": "2-күн — Негізгі экспедиция",
      "planner_day3": "3-күн — Қорытынды сапар",
      "planner_empty_drop": "Карточканы осында сүйреңіз",
      "guides_badge": "Жергілікті мамандар мен тест",
      "guides_title": "Экспедиция гидтері және саяхатқа дайындық тесті",
      "guides_subtitle": "Астана, Алматы және Маңғыстау өңірлерінің кәсіби гидтері, интерактивті квиз және жиі қойылатын сұрақтар.",
      "quiz_section_title": "Квиз: Қазақстан бойынша саяхатқа дайынсыз ба?",
      "quiz_submit_btn": "Жауаптарды тексеру",
      "quiz_reset_btn": "Қайта өту",
      "faq_title": "Жиі қойылатын сұрақтар",
      "faq_q1": "Сайттағы нақты уақыттағы ауа райы қалай жұмыс істейді?",
      "faq_a1": "Басты беттегі виджет Fetch арқылы Open-Meteo API-іне сұрау жіберіп, Астана, Алматы және Ақтау қалаларының температурасы мен желін көрсетеді.",
      "faq_q2": "Тіл, тақырып режимі және жоспарым сақтала ма?",
      "faq_a2": "Иә. Таңдалған тіл (EN/RU/KZ), Қараңғы/Жарық режим, түс акценті және 3 күндік жоспар браузердің localStorage жадында барлық 5 бетте сақталады.",
      "faq_q3": "Жоспарлаушыны смартфонда қолдану ыңғайлы ма?",
      "faq_a3": "Иә! ДК-де jQuery UI Drag & Drop қолжетімді, ал мобильді құрылғыларда әр карточкада 1/2/3-күнге жылдам ауыстыру батырмалары бар.",
      "contact_badge": "Жеке тур брондау",
      "contact_title": "Жеке экспедицияңызды брондаңыз",
      "contact_subtitle": "Төмендегі форманы толтырыңыз — JavaScript валидациясы әр өрісті нақты уақытта тексеріп, растау анимациясын іске қосады.",
      "form_name": "Толық аты-жөніңіз *",
      "form_email": "Электрондық пошта *",
      "form_phone": "Телефон нөмірі *",
      "form_dest": "Негізгі бағыт *",
      "form_date": "Басталу күні *",
      "form_travelers": "Саяхатшылар саны *",
      "form_notes": "Арнайы тілектер мен ескертпелер (кемі 20 таңба) *",
      "form_consent": "Мен NomadWay өтінім өңдеу шарттары мен маршрут қауіпсіздігі ережелерімен келісемін.",
      "form_submit": "Брондауды растау",
      "form_success_title": "Өтінім сәтті расталды!",
      "form_success_desc": "Сіздің жеке маршрут сұранысыңыз тіркелді. Растау нөмірі төменде көрсетілген.",
      "footer_desc": "Astana IT University Web Technologies 1 (Front End) қорытынды жобасы аясында әзірленген көпбетті интерактивті платформа. Автор: Асқар Нұрмұхаммед (IT-2514).",
      "footer_pages": "Беттер",
      "footer_features": "Технологиялар",
      "footer_customizer": "Түс акцентін баптау",
      "footer_rights": "NomadWay Platform • Орындаған: Асқар Нұрмұхаммед (IT-2514)",
      "step1_title": "1. JSON-бағытты таңдаңыз",
      "step1_desc": "9 бағытты табиғат, рейтинг және баға бойынша сүзіңіз.",
      "step2_title": "2. 3 күндік жоспар құрыңыз",
      "step2_desc": "Бюджетті бақылай отырып, 1–3 күнге сүйреп орналастырыңыз.",
      "step3_title": "3. Тікелей ауа райы және бронь",
      "step3_desc": "Open-Meteo деректерін тексеріп, 1 минутта өтінім беріңіз.",
      "weather_highlights_title": "Неліктен NomadWay таңдалады?",
      "wh_1_title": "Тексерілген бағыттар",
      "wh_1_desc": "Қазақстанның 14 өңіріндегі GPS-тректер мен ашық бағалар.",
      "wh_2_title": "Үш тілді гидтер",
      "wh_2_desc": "Әр экспедицияда ағылшын, орыс және қазақ тілді мамандар.",
      "wh_3_title": "Ауа райына бейімделу",
      "wh_3_desc": "Таудағы ауа райы өзгерсе, жоспарды лезде икемдеу.",
      "featured_badge": "Үздік таңдау",
      "featured_title": "Танымал экспедициялар",
      "featured_view_all": "Барлық 9 бағыт",
      "reviews_badge": "Саяхатшылар пікірі",
      "reviews_title": "Соңғы экспедиция әсерлері",
      "rev_1_text": "«Drag & Drop жоспарлаушысы мен тікелей ауа райы Алматы–Шарын сапарын өте жеңілдетті.»",
      "rev_2_text": "«Қазақ және орыс тілдеріне лезде ауысу отбасымызбен Бурабай бағытын келісуге көмектесті.»",
      "rev_3_text": "«Бюджет жолағы мен жабдық тізімі Маңғыстауға шығар алдында көп уақыт үнемдеді.»",
      "opt_day_1": "1 күндік экспресс",
      "opt_day_2": "2 күнге дейін",
      "opt_day_3": "3 күндік экспедиция",
      "cat_summary_showing": "Көрсетілуде",
      "cat_summary_avg_price": "Орташа баға",
      "cat_summary_avg_rating": "Орташа рейтинг",
      "season_guide_title": "Өңірлер бойынша үздік маусым",
      "season_spring": "Көктем (сәу–мам): Шарын, Алтынемел, Түркістан және Маңғыстау",
      "season_summer": "Жаз (мау–там): Көлсай, Қайыңды, ҮАК және Бурабай",
      "season_autumn": "Күз (қыр–қаз): Алтын Тянь-Шань және Астана серуендері",
      "season_winter": "Қыс (жел–нау): Шымбұлақ және Медеу мұз айдыны",
      "planner_breakdown_title": "Күндер бойынша бағыт есебі",
      "planner_checklist_title": "Ақылды жабдық тізімі",
      "planner_checklist_hint": "localStorage-та сақталады • Таңдалған орындарға бейімделеді",
      "field_notes_badge": "Сапар жазбалары",
      "field_notes_title": "Жолға шығар алдындағы маңызды кеңестер",
      "fn_1_title": "Ауыл қонақжайлылығы",
      "fn_1_desc": "Саты мен Түркістан ауылдарындағы қонақ үйлер үшін теңгемен қолма-қол ақша алыңыз.",
      "fn_2_title": "Таулы киім қабаты",
      "fn_2_desc": "2200 м-ден жоғары биіктікте 16:00-ден кейін салқындайды — жел өткізбейтін күрте алыңыз.",
      "fn_3_title": "Шөлдегі су қоры",
      "fn_3_desc": "Шарын мен Бозжыра үшін әр адамға 2 л+ су және офлайн-карта жүктеңіз.",
      "contact_included_title": "Әр экспедицияға кіреді",
      "inc_1": "Сертификатталған гид (EN / RU / KZ)",
      "inc_2": "4x4 көлік және ұлттық парк рұқсаттары",
      "inc_3": "Ауа райына байланысты күнді тегін ауыстыру",
      "inc_4": "Астанадағы 24/7 үйлестіру қызметі",
      "contact_sla_title": "2 сағат ішінде жауап кепілдігі",
      "contact_sla_desc": "Дүйсенбі–сенбі аралығындағы өтінімдерге 2 сағатта бағыт пен баға есебі жіберіледі."
    }
  }
};

window.loadJsonResource = async function(url, fallbackKey) {
  if (window.location.protocol !== "file:") {
    try {
      const response = await fetch(url, { cache: "no-store" });
      if (response.ok) {
        return await response.json();
      }
    } catch (err) {
      console.warn("Fetch fallback activated for", url, err);
    }
  }
  return window.NOMADWAY_DATA[fallbackKey];
};
