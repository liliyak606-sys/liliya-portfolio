import { type Language } from '../i18n/types';

export interface ProjectGalleryItem {
  title: string;
  caption: string;
  image: string;
}

export interface ProjectVideoItem {
  title: string;
  caption: string;
  videoUrl: string;
  thumbnail: string;
}

export interface ProjectTaskItem {
  title: string;
  description: string;
  deliverables?: string[];
}

export interface ProjectResultItem {
  metric: string;
  label: string;
  desc: string;
}

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: string;
  badge: string;
  client: string;
  year: string;
  role: string;
  period: string;
  liveUrl: string;
  pdfUrl: string;
  heroImage: string;
  overview: {
    summary: string;
    challenge: string;
    solution: string;
  };
  tasks: ProjectTaskItem[];
  designSystem: {
    aesthetic: string;
    typography: string;
    colors: { name: string; hex: string; usage: string }[];
    features: string[];
  };
  gallery: ProjectGalleryItem[];
  videos?: ProjectVideoItem[];
  results: ProjectResultItem[];
  techStack: string[];
  nextProjectId: string;
  prevProjectId: string;
}

export const LOCALIZED_PROJECTS: Record<Language, Record<string, ProjectData>> = {
  ru: {
    'bunker-ice-ai': {
      id: 'bunker-ice-ai',
      title: 'Bunker 255 | ICE AI',
      subtitle: 'Айдентика бренда, логотип, веб-сайт и инвестиционные презентации для стартапа автономной киберзащиты',
      tagline: 'Интеллект, который защищает. Система, которая живёт.',
      category: 'BRAND IDENTITY & UX/UI DESIGN',
      badge: 'Стартап Bunker 255',
      client: 'Bunker 255 (Israel / Global)',
      year: '2025 — 2026',
      role: 'Айдентика бренда, логотип, сайт и презентации для инвесторов',
      period: '2025',
      liveUrl: 'https://ice-ai.onrender.com/',
      pdfUrl: 'https://github.com/liliyak606-sys/Liliya/blob/main/public/img/screencapture-ice-ai-onrender-2026-09-23-21_11_28.pdf',
      heroImage: '/projects/ice-preview.jpg',
      overview: {
        summary: 'В рамках проекта для стартапа Bunker 255 я с нуля разработала полную айдентику бренда, фирменный логотип, дизайн веб-сайта и серию мультиязычных презентаций для инвесторов. ICE AI представляет собой революционный самообучающийся организм внутри серверной инфраструктуры — живой страж с защитой 24/7 и голосовым/текстовым DevOps-ассистентом.',
        challenge: 'Сложный высокотехнологичный продукт кибербезопасности требовал сильного визуального позиционирования, понятного как техническим специалистам (CTO, DevOps), так и венчурным инвесторам. Нужно было разработать запоминающийся логотип, целостную айдентику, презентации для привлечения капитала и сайт с поддержкой трёх языков, включая RTL (иврит).',
        solution: 'Создана комплексная экосистема бренда: футуристичный логотип и айдентика ICE AI, цифровая дизайн-система в эстетике киберпанка, кликабельный адаптивный веб-сайт с мультиязычной поддержкой и структурированные презентации (Pitch Decks), наглядно демонстрирующие бизнес-модель и технологический прорыв.'
      },
      tasks: [
        {
          title: 'Разработка полной айдентики бренда & Фирменный логотип',
          description: 'С нуля создала логотип и фирменный стиль продукта ICE AI. Разработала визуальную метафору живого технологического ядра/стража, правила использования знака, геометрию логотипа, фирменную палитру (Cyber Cyan & Neural Purple) и правила брендинга.',
          deliverables: ['Фирменный логотип ICE AI (вектор & вариации)', 'Брендбук и правила использования знака', 'Фирменные цвета, градиенты и неоновые стили', 'Айдентика для цифровых и печатных носителей']
        },
        {
          title: 'Дизайн и проектирование веб-сайта (UX/UI)',
          description: 'Спроектировала полноценный веб-сайт продукта: от структуры и логики сценариев до финального адаптивного интерфейса. Реализовала интерактивные блоки «Режимы ИИ», аналитику угроз и форму связи с командой.',
          deliverables: ['Информационная архитектура и User Flows', 'Адаптивный дизайн для смартфонов, планшетов и десктопов', 'Интерактивные прототипы в Figma', 'Компонентная UI-система']
        },
        {
          title: 'Создание инвестиционных презентаций (Pitch Decks)',
          description: 'Разработала комплексные презентации для инвесторов и партнеров. Упаковала технологическую сложность проекта в наглядную визуальную историю с инфографикой, метриками (<0.1с реакция) и структурой монетизации.',
          deliverables: ['Инвестиционные презентации в PDF на русском, английском и иврите', 'Инфографика архитектуры киберзащиты и метрик', 'Слайды бизнес-модели и дорожной карты стартапа']
        },
        {
          title: 'Мультиязычность & RTL-адаптация (RU / EN / HE)',
          description: 'Спроектировала интерфейс сайта и слайды презентаций с учетом трех языков, включая полную адаптацию под письмо справа налево (RTL — иврит) с зеркалированием структуры и типографики.',
          deliverables: ['RTL-верстка навигации и контентных блоков', 'Шрифтовые пары (Space Grotesk, Inter, Heebo)', 'Переключатель языков и локализованные версии']
        },
        {
          title: 'Генерация графических ассетов и концепт-артов через ИИ',
          description: 'С помощью Midjourney и генеративных инструментов Adobe Photoshop создала концепт-арты цифрового стража, светящихся нод и потоков данных для сайта и промо-материалов.',
          deliverables: ['AI-концепты живого серверного стража', 'Фоновые светящиеся текстуры и сетки', 'Промо-графика для медиа']
        }
      ],
      designSystem: {
        aesthetic: 'Futuristic Cyberpunk / High-tech Cognitive Dark Theme',
        typography: 'Space Grotesk (Заголовки), Inter (Основной текст), Heebo (RTL Иврит)',
        colors: [
          { name: 'Void Black', hex: '#010409', usage: 'Основной глубокий фон' },
          { name: 'Cyber Cyan', hex: '#00FFFF', usage: 'Логотип, акценты, свечение стража' },
          { name: 'Neural Purple', hex: '#C084FC', usage: 'Когнитивные функции, ИИ-ассистент' },
          { name: 'Grid Border', hex: 'rgba(0, 255, 255, 0.1)', usage: 'Технические сетки и карточки' }
        ],
        features: [
          'Уникальный авторский логотип и фирменный знак стража',
          'Интерактивная сетка серверного пространства с фоновым свечением',
          'Живые переключатели режимов: Автономный страж 24/7 vs DevOps-ассистент',
          'Быстрое скачивание инвестиционных презентаций в 1 клик на 3 языках'
        ]
      },
      gallery: [
        {
          title: 'Главный экран: Логотип, бренд & Заголовок',
          caption: 'Фирменный логотип ICE AI, акцентный брендинг живого стража и интерактивная киберпанк-сетка.',
          image: '/projects/ice-page1.jpg'
        },
        {
          title: 'Аналитика рынка: Почему сейчас?',
          caption: 'Блок проблематики: Экспоненциальный рост угроз, человеческий фактор и цена ошибки в кибербезопасности.',
          image: '/projects/ice-page2.jpg'
        },
        {
          title: 'Режимы работы: Автономный Страж & Ассистент',
          caption: 'Презентация двух ключевых ролей ИИ: непрерывная активная оборона и диалоговый DevOps-ассистент.',
          image: '/projects/ice-page3.jpg'
        },
        {
          title: 'Инвестиционные метрики, команда & Футер',
          caption: 'Ключевые метрики скорости (<0.1с реакция, 100% автономность), блок команды и скачивание презентаций.',
          image: '/projects/ice-page4.jpg'
        }
      ],
      results: [
        {
          metric: '100% Brand',
          label: 'Полная айдентика',
          desc: 'Логотип, брендбук, цветовой код и визуальный стиль'
        },
        {
          metric: '3 языка',
          label: 'Мультиязычность & RTL',
          desc: 'Сайт и презентации на русском, английском и иврите'
        },
        {
          metric: 'Pitch Decks',
          label: 'Инвесторские пакеты',
          desc: 'Готовые презентации для привлечения раундов финансирования'
        },
        {
          metric: '< 0.1 с',
          label: 'Скорость реакции',
          desc: 'Наглядная демонстрация уникального торгового преимущества'
        }
      ],
      techStack: [
        'Разработка логотипа',
        'Айдентика бренда',
        'Figma UX/UI',
        'Pitch Decks (Инвесторские презентации)',
        'Design Systems',
        'Midjourney v6',
        'Photoshop Generative Fill',
        'RTL Adaptation (Hebrew)',
        'Tailwind CSS'
      ],
      nextProjectId: 'aura-tel-aviv',
      prevProjectId: 'ai-creative-media'
    },
    'aura-tel-aviv': {
      id: 'aura-tel-aviv',
      title: 'AURA | Tel Aviv',
      subtitle: 'Сайт «под ключ»: премиальный UX/UI дизайн, видео и фотоконтент, полностью сгенерированные с помощью ИИ',
      tagline: 'Архитектурный шедевр на побережье Средиземного моря.',
      category: 'TURNKEY WEB PRODUCT & AI PRODUCTION',
      badge: 'Сайт «под ключ» & AI Продакшн',
      client: 'AURA Residence Tel Aviv',
      year: '2025 — 2026',
      role: 'Сайт «под ключ»: UX/UI дизайн сайта, видео и фото с помощью ИИ',
      period: '2025',
      liveUrl: 'https://aura-tel-aviv.ai.studio/',
      pdfUrl: 'https://github.com/liliyak606-sys/Liliya/blob/main/public/img/screencapture-aura-tel-aviv-ai-studio-2026-09-23-21_26_33.pdf',
      heroImage: '/projects/aura-preview.jpg',
      overview: {
        summary: 'Проект AURA Tel Aviv выполнен мной полностью «под ключ»: от концепции и проектирования пользовательского опыта до финального интерактивного веб-сайта, а также полного фото- и видеопродакшна, созданного с помощью генеративного искусственного интеллекта. Все интерьеры пентхауса, экстерьерные виды, панорамы Средиземного моря и кинематографичные видеоролики были сгенерированы нейросетями без дорогостоящих выездных съемок.',
        challenge: 'Для презентации элитного архитектурного пентхауса на стадии продаж требовался визуальный контент высочайшего премиум-уровня: интерьеры, терраса с инфинити-бассейном, виды на закат и динамичные видеопролеты. Классическая съемка или 3D-рендеры в архитектурных бюро заняли бы месяцы и потребовали огромного бюджета.',
        solution: 'Реализован сквозной цикл разработки «под ключ»: генерация фотореалистичных интерьеров и экстерьеров через Midjourney/Photoshop, создание плавных кинематографичных видеороликов через Runway Gen-3/Kling, проектирование адаптивного UX/UI сайта, интерактивных поэтажных планов и 3D-тура по резиденции.'
      },
      tasks: [
        {
          title: 'Разработка сайта «под ключ» (Turnkey UX/UI Web Design)',
          description: 'Полный цикл создания веб-сайта: разработка информационной структуры, сценариев взаимодействия для VIP-клиентов, чистого адаптивного интерфейса и системы записи на закрытые показы.',
          deliverables: ['Проектирование пользовательского пути (CJM)', 'Адаптивный дизайн (Mobile & Desktop)', 'Дизайн-система в эстетике Mediterranean Luxury', 'Интерактивные компоненты и формы']
        },
        {
          title: 'Генерация фотоконтента интерьеров с помощью ИИ (AI Photography)',
          description: 'Сгенерировала серию ультра-фотореалистичных изображений резиденции: мастер-сьют, двусветная гостиная, терраса с инфинити-бассейном, гардеробная и панорамы заката над морем. Добилась точной консистентности материалов (травертин, мрамор, стекло, дерево).',
          deliverables: ['Фотосессия интерьеров пентхауса в высоком разрешении', 'Панорамные экстерьерные кадры побережья Тель-Авива', 'Постобработка и апскейл текстур через Photoshop Generative Fill']
        },
        {
          title: 'Генерация кинематографичных видео с помощью ИИ (AI Video)',
          description: 'Создала серию атмосферных видеороликов для сайта: пролеты камеры сквозь панорамное остекление, игра средиземноморского света, колыхание воды в бассейне и закатные таймлапсы с помощью Runway Gen-3 и Kling AI.',
          deliverables: ['Кинематографичные видеообложки и фоновые ролики', 'Анимация светотеневого рисунка и морского бриза', 'Финальный монтаж, цветокоррекция и саунд-дизайн']
        },
        {
          title: 'Интерактивный модуль планировок (Floor Plans & Zoning)',
          description: 'Спроектировала переключатель уровней резиденции: Нижний этаж (приватные зоны, спальни, лаунж) и Верхний этаж (терраса, бассейн, бар). Модуль позволяет исследовать зонирование в интерактивном формате.',
          deliverables: ['Векторные поэтажные планировки с точками обзора', 'Интерактивные маркеры метража и экспликации', 'Адаптация под тач-устройства (iPad / мобильные)']
        },
        {
          title: 'Интерактивный 3D-тур по резиденции & Конверсионная воронка',
          description: 'Спроектировала интерфейс виртуальной прогулки по комнатам пентхауса и минималистичную VIP-форму закрытого бронирования для конфиденциальной связи с консьержем.',
          deliverables: ['Интерфейсные элементы управления 3D-туром', 'VIP-форма персональной записи на показ', 'Сторителлинг концепции архитектора Авива Розена']
        }
      ],
      designSystem: {
        aesthetic: 'Mediterranean Luxury Modernism / Warm Minimalist Glass & Sunlight',
        typography: 'Editorial Serif (Акцентные заголовки роскоши), Inter / Space Grotesk (Параметры и навигация)',
        colors: [
          { name: 'Pure Chalk', hex: '#FFFFFF', usage: 'Светлое воздушное полотно' },
          { name: 'Warm Sand', hex: '#F9F8F6', usage: 'Фоны блоков, мрамор и травертин' },
          { name: 'Mediterranean Azure', hex: '#1E90FF', usage: 'Интерактивные акценты, маркеры воды' },
          { name: 'Obsidian Black', hex: '#000000', usage: 'Контрастная строгая типографика' }
        ],
        features: [
          '100% сгенерированный ИИ фото- и видеоряд премиального качества',
          'Интерактивный переключатель уровней и поэтажных планировок',
          'Виртуальный 3D-тур с обзором интерьеров на 360 градусов',
          'Быстрая запись на приватный закрытый просмотр пентхауса'
        ]
      },
      gallery: [
        {
          title: 'Первый экран: Жемчужина Тель-Авива',
          caption: 'AI-генерация: панорамное остекление, средиземноморский закат и премиальная навигация.',
          image: '/projects/aura-page1.jpg'
        },
        {
          title: 'Локация & Фотореалистичные интерьеры от ИИ',
          caption: 'Остров спокойствия в эпицентре жизни: 360° панорама морского горизонта и приватность.',
          image: '/projects/aura-page2.jpg'
        },
        {
          title: 'Интерактивный 3D Тур по пространствам',
          caption: 'Погружение в сгенерированные интерьеры: кухня, мастер-сьют, гардеробные и приватная зона.',
          image: '/projects/aura-page3.jpg'
        },
        {
          title: 'Интерактивные планировки уровней',
          caption: 'Модуль зонирования: переключение между нижним этажом и террасой с инфинити-бассейном.',
          image: '/projects/aura-page4.jpg'
        },
        {
          title: 'Архитектура как искусство жизни',
          caption: 'Цитата главного архитектора проекта Авива Розена и ключевые инженерные системы.',
          image: '/projects/aura-page5.jpg'
        },
        {
          title: 'VIP-бронирование закрытого просмотра & Футер',
          caption: 'Конфиденциальная связь с персональным агентом для закрытого визита.',
          image: '/projects/aura-page6.jpg'
        }
      ],
      results: [
        {
          metric: '100% под ключ',
          label: 'Полный цикл разработки',
          desc: 'Дизайн сайта, разработка, фото- и видеопродакшн'
        },
        {
          metric: 'AI Photo & Video',
          label: 'Нейросетевой продакшн',
          desc: 'Все интерьеры, панорамы и ролики созданы с помощью ИИ'
        },
        {
          metric: '2 уровня',
          label: 'Интерактивных планировок',
          desc: 'Удобное переключение между жилым уровнем и террасой'
        },
        {
          metric: '3D Tour',
          label: 'Виртуальное присутствие',
          desc: 'Интерактивное исследование пространств пентхауса'
        }
      ],
      techStack: [
        'Сайт «под ключ»',
        'UX/UI Web Design',
        'Midjourney v6 (AI Фотосъемка)',
        'Runway Gen-3 (AI Видео)',
        'Photoshop Generative Fill',
        'Интерактивные планировки',
        '3D Tour UI',
        'Tailwind CSS'
      ],
      nextProjectId: 'ai-creative-media',
      prevProjectId: 'bunker-ice-ai'
    },
    'ai-creative-media': {
      id: 'ai-creative-media',
      title: 'Photoshop & AI Creative Media',
      subtitle: 'Авторские работы в Adobe Photoshop и с помощью генеративного ИИ: концепт-арт, ретушь и динамичные видеокреативы',
      tagline: 'Синтез мастерства Adobe Photoshop и передовых генеративных нейросетей.',
      category: 'PHOTOSHOP & GENERATIVE AI MEDIA',
      badge: 'Photoshop & AI Продакшн',
      client: 'Коммерческие и авторские проекты',
      year: '2024 — 2026',
      role: 'AI Creator, Photoshop Specialist & Video Motion Artist',
      period: '2024 — 2026',
      liveUrl: 'https://raw.githubusercontent.com/liliyak606-sys/Liliya/refs/heads/main/public/img/photo_2026-09-23%2022.53.30.jpeg',
      pdfUrl: 'https://github.com/liliyak606-sys/Liliya/tree/main/public/img',
      heroImage: '/media/photo_1.jpeg',
      overview: {
        summary: 'Представленные работы созданы мной в Adobe Photoshop с интеграцией передовых инструментов генеративного искусственного интеллекта (Midjourney, Runway Gen-3, Kling AI, Topaz Video AI, Photoshop Generative Fill и нейрофильтры). Пайплайн объединяет профессиональную ретушь, работу с композицией, светом и цветом с возможностями нейросетевой анимации и видеомоушна.',
        challenge: 'Создание по-настоящему глубокого визуального контента требует выхода за рамки «сырых» генераций нейросетей. Только симбиоз точного промптинга, сложного композитинга в Photoshop, ручной доработки текстур и режиссуры видеопотока позволяет добиться коммерческого уровня детализации.',
        solution: 'Разработан авторский рабочий процесс: от генерации базовых смысловых слоев и консистентных образов до финального сведения в Photoshop (маски, ретушь кожи, прорисовка волос, точечная светотеневая коррекция) и анимации динамичных видеокадров с кастомным саунд-дизайном.'
      },
      tasks: [
        {
          title: 'Создание фотоарт-композиций в Adobe Photoshop & ИИ',
          description: 'Сложный многослойный композитинг: генерация концептов в Midjourney, ручная доработка в Photoshop через Generative Fill, пластику, Dodge & Burn, наложение текстур и прорисовку деталей.',
          deliverables: ['Глубокая художественная ретушь кожи и волос', 'Работа с картами освещения и цветовыми акцентами', 'Финальные изображения в полиграфическом и Ultra-HD качестве']
        },
        {
          title: 'Генерация кинематографичных видеороликов (AI Motion)',
          description: 'Постановка динамических вертикальных видео (9:16) с плавной частотой кадров 60fps, синхронным движением камеры, морфингом и саунд-дизайном через Runway Gen-3 и Kling AI.',
          deliverables: ['Вертикальные видеоролики для Reels, Shorts и рекламных кампаний', 'Апскейл и интерполяция кадров до кристальной четкости', 'Звуковое оформление и видеомонтаж в Premiere Pro']
        },
        {
          title: 'Интеграция ИИ в креативный пайплайн для брендов',
          description: 'Создание коммерческих вижуалов и промо-материалов, повышающих CTR рекламных кампаний и вовлеченность аудитории.',
          deliverables: ['Креативы для социальных сетей и таргетированной рекламы', 'Визуальный сторителлинг для брендов', 'Снижение себестоимости продакшна до 70%']
        }
      ],
      designSystem: {
        aesthetic: 'Cinematic Visual Art / High-End Photoshop Compositing & AI Motion',
        typography: 'Space Grotesk & Inter',
        colors: [
          { name: 'Pure Obsidian', hex: '#050508', usage: 'Глубокий контрастный фон' },
          { name: 'Vibrant Cyan / Blue', hex: '#1E90FF', usage: 'Световые акценты и свечение' },
          { name: 'Warm Amber & Skin', hex: '#E29D74', usage: 'Тона кожи и натуральный свет' },
          { name: 'High-Key White', hex: '#FFFFFF', usage: 'Хайлайты и контрастные блики' }
        ],
        features: [
          'Авторские работы в Adobe Photoshop с многослойным композитингом',
          'Интерактивный видеоплеер для просмотра вертикальных AI-видеороликов',
          'Полноэкранный зум для изучения мельчайших деталей ретуши и текстур',
          'Прямые ссылки на оригинальные файлы высокого разрешения на GitHub'
        ]
      },
      videos: [
        {
          title: 'AI Artist: Персонажи, бренды & AI-аватары (60 fps)',
          caption: 'Возможности AI artist: создание любого персонажа, интеграция любого бренда и одежды, рекламные креативы и реалистичные AI-аватары под любые задачи.',
          videoUrl: '/media/video_1.mp4',
          thumbnail: '/media/video_1_thumb.jpg'
        },
        {
          title: 'Процесс работы в Photoshop: Создание креатива и фото',
          caption: 'Наглядный процесс работы в Adobe Photoshop: разработка контента, сборка фото с нуля, сложная ретушь, пластика и сведение слоев.',
          videoUrl: '/media/video_2.mp4',
          thumbnail: '/media/video_2_thumb.jpg'
        }
      ],
      gallery: [
        {
          title: 'Photoshop & AI Artwork 01: Художественный портрет',
          caption: 'Создано в Adobe Photoshop с интеграцией генеративного ИИ: ультра-детализация, текстуры кожи, художественное освещение и тонирование.',
          image: '/media/photo_1.jpeg'
        },
        {
          title: 'Photoshop & AI Artwork 02: Fashion & Концепт-арт',
          caption: 'Коммерческий визуальный креатив: генеративный синтез образов, тонкая ретушь и цветовой баланс в Photoshop.',
          image: '/media/photo_2.jpeg'
        },
        {
          title: 'Кадр из ролика: AI Artist & Креативы',
          caption: 'Стоп-кадр авторской анимации: создание персонажа, брендовой стилистики и реалистичных AI-аватаров.',
          image: '/media/video_1_thumb.jpg'
        },
        {
          title: 'Кадр из ролика: Процесс в Photoshop',
          caption: 'Стоп-кадр процесса работы: разработка креатива, послойная ретушь и сборка фото в Adobe Photoshop.',
          image: '/media/video_2_thumb.jpg'
        }
      ],
      results: [
        {
          metric: 'Photoshop & AI',
          label: 'Авторский пайплайн',
          desc: 'Синтез нейросетей и профессионального композитинга'
        },
        {
          metric: '60 fps',
          label: 'Плавность видео',
          desc: 'Высокая частота кадров и кинематографичный моушн'
        },
        {
          metric: '10x',
          label: 'Скорость продакшна',
          desc: 'От идеи до финального ролика и постера в сжатые сроки'
        },
        {
          metric: 'Ultra-HD',
          label: 'Качество детализации',
          desc: 'Четкие текстуры для любых форматов отображения'
        }
      ],
      techStack: [
        'Adobe Photoshop',
        'Generative Fill & Neural Filters',
        'Midjourney v6',
        'Runway Gen-3 Alpha',
        'Kling AI',
        'Topaz Video AI',
        'Adobe Premiere Pro',
        'Цветокоррекция & Ретушь',
        'Саунд-дизайн'
      ],
      nextProjectId: 'bunker-ice-ai',
      prevProjectId: 'aura-tel-aviv'
    }
  },
  en: {
    'bunker-ice-ai': {
      id: 'bunker-ice-ai',
      title: 'Bunker 255 | ICE AI',
      subtitle: 'Brand identity, trademark logo, website design, and investment pitch decks for an autonomous cyber defense startup',
      tagline: 'Intelligence that defends. A system that lives.',
      category: 'BRAND IDENTITY & UX/UI DESIGN',
      badge: 'Bunker 255 Startup',
      client: 'Bunker 255 (Israel / Global)',
      year: '2025 — 2026',
      role: 'Brand identity, logo, website & investor pitch decks',
      period: '2025',
      liveUrl: 'https://ice-ai.onrender.com/',
      pdfUrl: 'https://github.com/liliyak606-sys/Liliya/blob/main/public/img/screencapture-ice-ai-onrender-2026-09-23-21_11_28.pdf',
      heroImage: '/projects/ice-preview.jpg',
      overview: {
        summary: 'For the startup Bunker 255, I created the complete brand identity from scratch, including the trademark logo, website design, and a series of multilingual investor pitch decks. ICE AI is a revolutionary self-learning organism inside server infrastructure — a living 24/7 guardian with a voice/text DevOps assistant.',
        challenge: 'A complex, high-tech cybersecurity product required a powerful visual identity that resonated equally with technical leaders (CTOs, DevOps) and venture capitalists. It demanded a memorable logo, a cohesive identity, pitch decks for fundraising, and a website supporting three languages including RTL (Hebrew).',
        solution: 'Crafted a comprehensive brand ecosystem: futuristic ICE AI logo and identity, a cyberpunk digital design system, a clickable responsive website with multilingual support, and structured pitch decks that clearly communicate the business model and technological leap.'
      },
      tasks: [
        {
          title: 'Complete Brand Identity & Trademark Logo',
          description: 'Created the logo and visual identity for ICE AI from scratch. Developed the visual metaphor of a living technological core/guardian, emblem usage guidelines, geometry, custom palette (Cyber Cyan & Neural Purple), and brand rules.',
          deliverables: ['ICE AI Logo (vector & variations)', 'Brandbook & logo usage rules', 'Brand colors, gradients & neon styling', 'Identity for digital & print media']
        },
        {
          title: 'UX/UI Website Design & Architecture',
          description: 'Architected the full product website: from user journey mapping to the final responsive interface. Implemented interactive "AI Modes" showcases, threat analytics visualization, and lead capture forms.',
          deliverables: ['Information architecture & User Flows', 'Responsive design for mobile, tablet, and desktop', 'Interactive Figma prototypes', 'Design system component library']
        },
        {
          title: 'Investor Pitch Decks & Fundraising Assets',
          description: 'Developed comprehensive pitch decks for investors and strategic partners. Packaged the technical depth into a clear, visually compelling narrative with architecture infographics, performance metrics (<0.1s reaction), and monetization models.',
          deliverables: ['Investor presentations in PDF in Russian, English, and Hebrew', 'Cyber defense architecture & metric infographics', 'Business model and startup roadmap slides']
        },
        {
          title: 'Multilingual & RTL Adaptation (RU / EN / HE)',
          description: 'Designed the website interface and presentation slide templates for three languages, including complete right-to-left (RTL) mirroring and typography for Hebrew.',
          deliverables: ['RTL layout for navigation and content blocks', 'Font pairings (Space Grotesk, Inter, Heebo)', 'Language switcher and localized copy']
        },
        {
          title: 'AI Concept Art & Visual Asset Generation',
          description: 'Using Midjourney and Adobe Photoshop generative tools, produced concept artwork of the digital cyber guardian, glowing server nodes, and data streams for the site and promotional collateral.',
          deliverables: ['AI concepts of the living server guardian', 'Glowing background textures and matrices', 'Promotional graphics for media campaigns']
        }
      ],
      designSystem: {
        aesthetic: 'Futuristic Cyberpunk / High-tech Cognitive Dark Theme',
        typography: 'Space Grotesk (Headlines), Inter (Body Text), Heebo (RTL Hebrew)',
        colors: [
          { name: 'Void Black', hex: '#010409', usage: 'Deep primary canvas' },
          { name: 'Cyber Cyan', hex: '#00FFFF', usage: 'Logo, accents, guardian illumination' },
          { name: 'Neural Purple', hex: '#C084FC', usage: 'Cognitive features & AI assistant' },
          { name: 'Grid Border', hex: 'rgba(0, 255, 255, 0.1)', usage: 'Technical grids and cards' }
        ],
        features: [
          'Bespoke original logo and guardian brand emblem',
          'Interactive server matrix with ambient back-lighting',
          'Live mode toggles: 24/7 Autonomous Guardian vs DevOps Assistant',
          'Instant 1-click investor deck downloads in 3 languages'
        ]
      },
      gallery: [
        {
          title: 'Hero Screen: Logo, Brand & Headline',
          caption: 'ICE AI trademark logo, prominent living guardian branding, and interactive cyberpunk matrix.',
          image: '/projects/ice-page1.jpg'
        },
        {
          title: 'Market Analytics: Why Now?',
          caption: 'Problem block: Exponential growth of threats, the human factor, and the cost of cyber breaches.',
          image: '/projects/ice-page2.jpg'
        },
        {
          title: 'Operating Modes: Autonomous Guardian & Assistant',
          caption: 'Presentation of two key AI roles: continuous active defense and conversational DevOps copilot.',
          image: '/projects/ice-page3.jpg'
        },
        {
          title: 'Investment Metrics, Team & Footer',
          caption: 'Key speed metrics (<0.1s reaction, 100% autonomy), core leadership team, and pitch downloads.',
          image: '/projects/ice-page4.jpg'
        }
      ],
      results: [
        {
          metric: '100% Brand',
          label: 'Complete Identity',
          desc: 'Logo, brand guidelines, color system, and visual aesthetic'
        },
        {
          metric: '3 Languages',
          label: 'Multilingual & RTL',
          desc: 'Site and pitch decks in Russian, English, and Hebrew'
        },
        {
          metric: 'Pitch Decks',
          label: 'Investor Packages',
          desc: 'Complete presentations for funding rounds'
        },
        {
          metric: '< 0.1 s',
          label: 'Reaction Speed',
          desc: 'Clear visual demonstration of unique value proposition'
        }
      ],
      techStack: [
        'Logo Design',
        'Brand Identity',
        'Figma UX/UI',
        'Pitch Decks',
        'Design Systems',
        'Midjourney v6',
        'Photoshop Generative Fill',
        'RTL Adaptation (Hebrew)',
        'Tailwind CSS'
      ],
      nextProjectId: 'aura-tel-aviv',
      prevProjectId: 'ai-creative-media'
    },
    'aura-tel-aviv': {
      id: 'aura-tel-aviv',
      title: 'AURA | Tel Aviv',
      subtitle: 'Turnkey website: premium UX/UI design, video and photo content fully generated with AI',
      tagline: 'An architectural masterpiece on the Mediterranean coast.',
      category: 'TURNKEY WEB PRODUCT & AI PRODUCTION',
      badge: 'Turnkey Website & AI Production',
      client: 'AURA Residence Tel Aviv',
      year: '2025 — 2026',
      role: 'Turnkey Website: UX/UI design, AI photo and video production',
      period: '2025',
      liveUrl: 'https://aura-tel-aviv.ai.studio/',
      pdfUrl: 'https://github.com/liliyak606-sys/Liliya/blob/main/public/img/screencapture-aura-tel-aviv-ai-studio-2026-09-23-21_26_33.pdf',
      heroImage: '/projects/aura-preview.jpg',
      overview: {
        summary: 'The AURA Tel Aviv project was executed by me on a complete turnkey basis: from concept and user experience design to the final interactive website, plus full photo and video production generated with artificial intelligence. All penthouse interiors, exterior views, Mediterranean panoramas, and cinematic videos were generated using neural networks without expensive on-location shoots.',
        challenge: 'To showcase a luxury architectural penthouse in the sales phase, ultra-high-end visual content was required: interiors, infinity pool terrace, sunset ocean panoramas, and dynamic video flythroughs. Traditional photoshoots or architectural 3D renders would have taken months and required huge budgets.',
        solution: 'Delivered an end-to-end turnkey development cycle: photorealistic interior and exterior generation via Midjourney/Photoshop, smooth cinematic videos through Runway Gen-3/Kling, responsive UX/UI website architecture, interactive floor plans, and a 3D residence tour.'
      },
      tasks: [
        {
          title: 'Turnkey UX/UI Web Design',
          description: 'Full cycle creation of the website: information architecture, interactive scenarios for VIP clients, clean responsive interface, and private viewing booking funnel.',
          deliverables: ['Customer Journey Mapping (CJM)', 'Responsive design (Mobile & Desktop)', 'Mediterranean Luxury design system', 'Interactive components and forms']
        },
        {
          title: 'AI Photography: Photorealistic Interior Generation',
          description: 'Generated a suite of ultra-photorealistic residence imagery: master suite, double-height living lounge, infinity pool terrace, walk-in closets, and ocean sunset panoramas with consistent materials (travertine, marble, glass, timber).',
          deliverables: ['High-resolution penthouse interior photoshoot', 'Panoramic exterior scenes of Tel Aviv coastline', 'Texture upscaling & cleanup in Photoshop Generative Fill']
        },
        {
          title: 'AI Video: Cinematic Video Flythroughs',
          description: 'Created evocative video reels for the website: camera flythroughs through panoramic floor-to-ceiling glass, Mediterranean sunlight reflections, pool water ripples, and sunset timelapses via Runway Gen-3 and Kling AI.',
          deliverables: ['Cinematic video headers and ambient background clips', 'Light & shadow motion and sea breeze simulation', 'Final editing, color grading, and sound design']
        },
        {
          title: 'Interactive Floor Plans & Level Zoning Module',
          description: 'Engineered an interactive level selector: Lower Level (private suites, bedrooms, lounge) and Upper Level (terrace, infinity pool, sky bar), enabling intuitive floor exploration.',
          deliverables: ['Vector architectural floor plans with view indicators', 'Interactive dimension markers and room legends', 'Touch-screen optimization (iPad & mobile)']
        },
        {
          title: 'Interactive 3D Residence Tour & Private Booking Funnel',
          description: 'Designed a virtual walkthrough of the penthouse rooms and an understated VIP reservation form for private concierge consultation.',
          deliverables: ['3D tour interactive controls and UI elements', 'Confidential VIP appointment booking form', 'Architect Aviv Rosen narrative storytelling']
        }
      ],
      designSystem: {
        aesthetic: 'Mediterranean Luxury Modernism / Warm Minimalist Glass & Sunlight',
        typography: 'Editorial Serif (Luxury Headlines), Inter / Space Grotesk (Navigation & Specs)',
        colors: [
          { name: 'Pure Chalk', hex: '#FFFFFF', usage: 'Light airy canvas' },
          { name: 'Warm Sand', hex: '#F9F8F6', usage: 'Block backgrounds, travertine & marble' },
          { name: 'Mediterranean Azure', hex: '#1E90FF', usage: 'Interactive accents & water markers' },
          { name: 'Obsidian Black', hex: '#000000', usage: 'Contrast refined typography' }
        ],
        features: [
          '100% AI-generated premium photo and video assets',
          'Interactive floor plan & level navigator',
          'Virtual 3D tour with 360-degree interior views',
          'Fast private VIP penthouse viewing reservation'
        ]
      },
      gallery: [
        {
          title: 'Hero Screen: The Jewel of Tel Aviv',
          caption: 'AI generation: panoramic glazing, Mediterranean sunset, and premium navigation.',
          image: '/projects/aura-page1.jpg'
        },
        {
          title: 'Prime Location & Photorealistic AI Interiors',
          caption: 'An island of tranquility in the center of life: 360° sea horizon panorama and privacy.',
          image: '/projects/aura-page2.jpg'
        },
        {
          title: 'Interactive 3D Tour Through Living Spaces',
          caption: 'Immersion into AI-crafted interiors: kitchen, master suite, dressing rooms, and private lounge.',
          image: '/projects/aura-page3.jpg'
        },
        {
          title: 'Interactive Dual-Level Floor Plans',
          caption: 'Zoning module: seamless toggling between lower living floor and upper pool terrace.',
          image: '/projects/aura-page4.jpg'
        },
        {
          title: 'Architecture as the Art of Living',
          caption: 'Quote from chief architect Aviv Rosen and overview of advanced engineering systems.',
          image: '/projects/aura-page5.jpg'
        },
        {
          title: 'VIP Private Viewing Reservation & Footer',
          caption: 'Confidential direct channel to dedicated concierge for exclusive on-site visits.',
          image: '/projects/aura-page6.jpg'
        }
      ],
      results: [
        {
          metric: '100% Turnkey',
          label: 'Full Development Cycle',
          desc: 'Web design, coding, photo and video production'
        },
        {
          metric: 'AI Photo & Video',
          label: 'Neural Production',
          desc: 'All interiors, panoramas, and videos created with AI'
        },
        {
          metric: '2 Levels',
          label: 'Interactive Floor Plans',
          desc: 'Seamless toggle between living quarters and pool terrace'
        },
        {
          metric: '3D Tour',
          label: 'Virtual Presence',
          desc: 'Interactive exploration of penthouse spaces'
        }
      ],
      techStack: [
        'Turnkey Website',
        'UX/UI Web Design',
        'Midjourney v6 (AI Photography)',
        'Runway Gen-3 (AI Video)',
        'Photoshop Generative Fill',
        'Interactive Floor Plans',
        '3D Tour UI',
        'Tailwind CSS'
      ],
      nextProjectId: 'ai-creative-media',
      prevProjectId: 'bunker-ice-ai'
    },
    'ai-creative-media': {
      id: 'ai-creative-media',
      title: 'Photoshop & AI Creative Media',
      subtitle: 'Original works in Adobe Photoshop and with generative AI: concept art, retouching, and dynamic video creatives',
      tagline: 'A synthesis of Adobe Photoshop mastery and cutting-edge generative neural networks.',
      category: 'PHOTOSHOP & GENERATIVE AI MEDIA',
      badge: 'Photoshop & AI Production',
      client: 'Commercial and original creative projects',
      year: '2024 — 2026',
      role: 'AI Creator, Photoshop Specialist & Video Motion Artist',
      period: '2024 — 2026',
      liveUrl: 'https://raw.githubusercontent.com/liliyak606-sys/Liliya/refs/heads/main/public/img/photo_2026-09-23%2022.53.30.jpeg',
      pdfUrl: 'https://github.com/liliyak606-sys/Liliya/tree/main/public/img',
      heroImage: '/media/photo_1.jpeg',
      overview: {
        summary: 'These featured works were created by me in Adobe Photoshop with the integration of cutting-edge generative artificial intelligence tools (Midjourney, Runway Gen-3, Kling AI, Topaz Video AI, Photoshop Generative Fill, and neural filters). The pipeline brings together professional retouching, composition, lighting, and color with AI motion and video generation.',
        challenge: 'Creating truly high-end visual content requires going beyond raw AI outputs. Only the synergy of exact prompting, complex Photoshop compositing, manual texture refining, and cinematic video direction achieves commercial-grade quality.',
        solution: 'Developed an original workflow: from generating base concept layers and consistent character looks to final assembly in Photoshop (masks, skin retouching, hair painting, precision Dodge & Burn) and animating dynamic video clips with custom sound design.'
      },
      tasks: [
        {
          title: 'Photo Art Compositing in Adobe Photoshop & AI',
          description: 'Complex multilayered compositing: generating concepts in Midjourney, manual finishing in Photoshop via Generative Fill, liquify, Dodge & Burn, texture layering, and detail painting.',
          deliverables: ['Deep artistic retouching of skin and hair', 'Lighting maps and color emphasis calibration', 'Final imagery in print & Ultra-HD quality']
        },
        {
          title: 'Cinematic Video Generation (AI Motion at 60 fps)',
          description: 'Directing dynamic vertical videos (9:16) with silky-smooth 60 fps frame rates, synchronized camera moves, morphing, and sound design via Runway Gen-3 and Kling AI.',
          deliverables: ['Vertical video clips for Reels, Shorts, and campaigns', 'Frame upscaling and interpolation to crystal clarity', 'Soundtrack design and Premiere Pro video editing']
        },
        {
          title: 'Integrating AI into Creative Pipelines for Brands',
          description: 'Crafting commercial visuals and promotional collateral that boost CTR in advertising campaigns and maximize audience engagement.',
          deliverables: ['Creatives for social media and targeted advertising', 'Visual storytelling for brand narratives', 'Production cost reduction of up to 70%']
        }
      ],
      designSystem: {
        aesthetic: 'Cinematic Visual Art / High-End Photoshop Compositing & AI Motion',
        typography: 'Space Grotesk & Inter',
        colors: [
          { name: 'Pure Obsidian', hex: '#050508', usage: 'Deep contrast background' },
          { name: 'Vibrant Cyan / Blue', hex: '#1E90FF', usage: 'Light accents & glow' },
          { name: 'Warm Amber & Skin', hex: '#E29D74', usage: 'Skin tones and natural light' },
          { name: 'High-Key White', hex: '#FFFFFF', usage: 'Highlights and contrast flares' }
        ],
        features: [
          'Original artwork in Adobe Photoshop with multilayer compositing',
          'Interactive video player for viewing vertical AI video reels',
          'Fullscreen zoom for exploring intricate retouching details and textures',
          'Direct links to original high-resolution files on GitHub'
        ]
      },
      videos: [
        {
          title: 'AI Artist: Characters, Brands & AI Avatars (60 fps)',
          caption: 'Capabilities of an AI artist: generating any character, brand clothing integration, commercial ads, and realistic AI avatars.',
          videoUrl: '/media/video_1.mp4',
          thumbnail: '/media/video_1_thumb.jpg'
        },
        {
          title: 'Photoshop Workflow: Creative & Photo Assembly',
          caption: 'Hands-on process in Adobe Photoshop: content creation, photo assembly from scratch, complex retouching, liquify, and layer blending.',
          videoUrl: '/media/video_2.mp4',
          thumbnail: '/media/video_2_thumb.jpg'
        }
      ],
      gallery: [
        {
          title: 'Photoshop & AI Artwork 01: High-Detail Fine Art Portrait',
          caption: 'Created in Adobe Photoshop with generative AI integration: ultra-detail, skin texture, artistic lighting, and grading.',
          image: '/media/photo_1.jpeg'
        },
        {
          title: 'Photoshop & AI Artwork 02: Fashion & Conceptual Art',
          caption: 'Commercial visual creative: generative synthesis of looks, refined retouching, and color balance in Photoshop.',
          image: '/media/photo_2.jpeg'
        },
        {
          title: 'Video Still: AI Artist & Creatives',
          caption: 'Still frame of original animation: character design, brand aesthetics, and realistic AI avatars.',
          image: '/media/video_1_thumb.jpg'
        },
        {
          title: 'Video Still: Photoshop Process',
          caption: 'Still frame of production workflow: creative conception, layered retouching, and photo assembly in Photoshop.',
          image: '/media/video_2_thumb.jpg'
        }
      ],
      results: [
        {
          metric: 'Photoshop & AI',
          label: 'Original Pipeline',
          desc: 'Synthesis of neural networks and pro compositing'
        },
        {
          metric: '60 fps',
          label: 'Video Smoothness',
          desc: 'High frame rate and cinematic motion'
        },
        {
          metric: '10x',
          label: 'Production Velocity',
          desc: 'From concept to final video and poster in record time'
        },
        {
          metric: 'Ultra-HD',
          label: 'Detail Quality',
          desc: 'Crisp textures for any display format'
        }
      ],
      techStack: [
        'Adobe Photoshop',
        'Generative Fill & Neural Filters',
        'Midjourney v6',
        'Runway Gen-3 Alpha',
        'Kling AI',
        'Topaz Video AI',
        'Adobe Premiere Pro',
        'Color Grading & Retouching',
        'Sound Design'
      ],
      nextProjectId: 'bunker-ice-ai',
      prevProjectId: 'aura-tel-aviv'
    }
  },
  he: {
    'bunker-ice-ai': {
      id: 'bunker-ice-ai',
      title: 'Bunker 255 | ICE AI',
      subtitle: 'זהות מותג, לוגו, עיצוב אתר אינטרנט ומצגות למשקיעים עבור סטארט-אפ הגנת סייבר אוטונומית',
      tagline: 'אינטליגנציה שמגינה. מערכת חיה.',
      category: 'BRAND IDENTITY & UX/UI DESIGN',
      badge: 'סטארט-אפ Bunker 255',
      client: 'Bunker 255 (Israel / Global)',
      year: '2025 — 2026',
      role: 'זהות מותג, לוגו, אתר ומצגות למשקיעים',
      period: '2025',
      liveUrl: 'https://ice-ai.onrender.com/',
      pdfUrl: 'https://github.com/liliyak606-sys/Liliya/blob/main/public/img/screencapture-ice-ai-onrender-2026-09-23-21_11_28.pdf',
      heroImage: '/projects/ice-preview.jpg',
      overview: {
        summary: 'במסגרת הפרויקט עבור סטארט-אפ Bunker 255, פיתחתי מאפס את זהות המותג המלאה, לוגו ייחודי, עיצוב אתר אינטרנט וסדרת מצגות רב-לשוניות למשקיעים. ICE AI מהווה אורגניזם לומד מהפכני בתוך תשתית השרתים — שומר סייבר חי 24/7 עם עוזר DevOps קולי וטקסטואלי.',
        challenge: 'מוצר סייבר טכנולוגי מורכב דרש מיצוב חזותי עוצמתי ומובן הן למומחים טכניים (CTO, DevOps) והן למשקיעי הון סיכון. נדרש לוגו בלתי נשכח, שפה מותגית אחידה, מצגות גיוס כספים ואתר התומך בשלוש שפות, כולל RTL (עברית).',
        solution: 'נוצרה מערכת מותג שלמה: לוגו וזהות עתידנית ל-ICE AI, מערכת עיצוב באסתטיקת סייברפאנק, אתר רספונסיבי אינטראקטיבי עם תמיכה רב-לשונית ומצגות משקיעים מובנות הממחישות בבירור את המודל העסקי ופריצת הדרך הטכנולוגית.'
      },
      tasks: [
        {
          title: 'פיתוח זהות מותג מלאה ולוגו מקורי',
          description: 'יצרתי מאפס את הלוגו והשפה החזותית של ICE AI. פיתחתי מטאפורה ויזואלית של ליבת אבטחה חיה, כללי שימוש בסמל, גיאומטריית לוגו, פלטה ייחודית (Cyber Cyan & Neural Purple) וספר מותג.',
          deliverables: ['לוגו ICE AI (וקטור וגרסאות שימוש)', 'ספר מותג וכללי שימוש בסמל', 'צבעי מותג, גרדיאנטים וסגנונות ניאון', 'זהות מותגית למדיה דיגיטלית ודפוס']
        },
        {
          title: 'אפיון ועיצוב אתר אינטרנט (UX/UI)',
          description: 'אפיינתי את אתר המוצר המלא: מארכיטקטורת המידע ותרשימי הזרימה ועד לממשק רספונסיבי מוגמר. יישמתי מודולים אינטראקטיביים של "מצבי AI", הצגת ניתוח איומים וטופס יצירת קשר.',
          deliverables: ['ארכיטקטורת מידע ו-User Flows', 'עיצוב רספונסיבי לסמארטפונים, טאבלטים ומחשבים', 'פרוטוטייפים אינטראקטיביים ב-Figma', 'מערכת רכיבי UI']
        },
        {
          title: 'יצירת מצגות גיוס הון למשקיעים (Pitch Decks)',
          description: 'פיתחתי מצגות מקיפות עבור משקיעים ושותפים אסטרטגיים. הפכתי את המורכבות הטכנולוגית לסיפור חזותי בהיר עם אינפוגרפיקות, מדדי ביצוע (תגובה בפחות מ-0.1 שנ׳) ומודל רווחיות.',
          deliverables: ['מצגות משקיעים ב-PDF ברוסית, אנגלית ועברית', 'אינפוגרפיקת ארכיטקטורת הגנת סייבר ומדדים', 'שקפי מודל עסקי ומפת דרכים של הסטארט-אפ']
        },
        {
          title: 'תמיכה בריבוי שפות והתאמת RTL (רוסית, אנגלית ועברית)',
          description: 'עיצבתי את ממשק האתר ואת שקפי המצגות בהתאמה לשלוש שפות, כולל התאמה מלאה לכתיבה מימין לשמאל (RTL — עברית) עם שיקוף מבנה וטיפוגרפיה.',
          deliverables: ['פריסת RTL של הניווט ובלוקי התוכן', 'שילובי גופנים (Space Grotesk, Inter, Heebo)', 'בורר שפות וגרסאות מתורגמות מלאות']
        },
        {
          title: 'יצירת נכסים גרפיים וקונספט-ארט באמצעות AI',
          description: 'באמצעות Midjourney וכלי Generative Fill של Photoshop יצרתי קונספט-ארט של שומר השרתים הדיגיטלי, צמתי נתונים זוהרים וזרימת מידע עבור האתר וחומרי הפרומו.',
          deliverables: ['קונספטים גנרטיביים של שומר השרתים החי', 'טקסטורות ורשתות זוהרות ברקע', 'גרפיקת פרומו לקמפיינים במדיה']
        }
      ],
      designSystem: {
        aesthetic: 'Futuristic Cyberpunk / High-tech Cognitive Dark Theme',
        typography: 'Space Grotesk (כותרות), Inter (טקסט רץ), Heebo (RTL עברית)',
        colors: [
          { name: 'Void Black', hex: '#010409', usage: 'רקע עמוק מרכזי' },
          { name: 'Cyber Cyan', hex: '#00FFFF', usage: 'לוגו, הדגשות וזוהר השומר' },
          { name: 'Neural Purple', hex: '#C084FC', usage: 'פונקציות קוגניטיביות ועוזר AI' },
          { name: 'Grid Border', hex: 'rgba(0, 255, 255, 0.1)', usage: 'רשתות טכניות וכרטיסים' }
        ],
        features: [
          'לוגו ייחודי ומקורי וסמל השומר החי',
          'רשת שרתים אינטראקטיבית עם תאורת רקע',
          'מעבר בין מצבי פעולה: שומר אוטונומי 24/7 מול עוזר DevOps',
          'הורדה מהירה בקליק אחד של מצגות משקיעים ב-3 שפות'
        ]
      },
      gallery: [
        {
          title: 'מסך ראשי: לוגו, מותג וכותרת ראשית',
          caption: 'לוגו מקורי של ICE AI, מיתוג עוצמתי של שומר הסייבר ורשת סייברפאנק אינטראקטיבית.',
          image: '/projects/ice-page1.jpg'
        },
        {
          title: 'ניתוח שוק: למה דווקא עכשיו?',
          caption: 'בלוק הבעיה: צמיחה מעריכית באיומים, הגורם האנושי ומחיר טעויות באבטחת מידע.',
          image: '/projects/ice-page2.jpg'
        },
        {
          title: 'מצבי פעולה: שומר אוטונומי ועוזר אישי',
          caption: 'הצגת שני תפקידי ה-AI המרכזיים: הגנה פעילה רציפה ועוזר שיחה חכם ל-DevOps.',
          image: '/projects/ice-page3.jpg'
        },
        {
          title: 'מדדי השקעה, צוות ופוטר',
          caption: 'מדדי מהירות מרכזיים (תגובה בפחות מ-0.1 שנ׳, 100% אוטונומיה), בלוק הצוות והורדת מצגות.',
          image: '/projects/ice-page4.jpg'
        }
      ],
      results: [
        {
          metric: '100% Brand',
          label: 'זהות מותג מלאה',
          desc: 'לוגו, ספר מותג, קוד צבע ושפה חזותית'
        },
        {
          metric: '3 שפות',
          label: 'מולטי-שפות ו-RTL',
          desc: 'אתר ומצגות ברוסית, אנגלית ועברית'
        },
        {
          metric: 'Pitch Decks',
          label: 'חבילות למשקיעים',
          desc: 'מצגות מוכנות לגיוס סבבי מימון'
        },
        {
          metric: '< 0.1 שנ׳',
          label: 'מהירות תגובה',
          desc: 'המחשה מוחשית של היתרון התחרותי'
        }
      ],
      techStack: [
        'עיצוב לוגו',
        'זהות מותג',
        'Figma UX/UI',
        'מצגות משקיעים',
        'מערכות עיצוב',
        'Midjourney v6',
        'פוטושופ Generative Fill',
        'התאמת RTL (עברית)',
        'Tailwind CSS'
      ],
      nextProjectId: 'aura-tel-aviv',
      prevProjectId: 'ai-creative-media'
    },
    'aura-tel-aviv': {
      id: 'aura-tel-aviv',
      title: 'AURA | Tel Aviv',
      subtitle: 'אתר "תחת מפתח": עיצוב UX/UI פרימיום, תוכן וידאו ותמונות שנוצרו במלואם באמצעות AI',
      tagline: 'יצירת מופת אדריכלית על חוף הים התיכון.',
      category: 'TURNKEY WEB PRODUCT & AI PRODUCTION',
      badge: 'אתר תחת מפתח & הפקת AI',
      client: 'AURA Residence Tel Aviv',
      year: '2025 — 2026',
      role: 'אתר תחת מפתח: עיצוב UX/UI, צילום ווידאו ב-AI',
      period: '2025',
      liveUrl: 'https://aura-tel-aviv.ai.studio/',
      pdfUrl: 'https://github.com/liliyak606-sys/Liliya/blob/main/public/img/screencapture-aura-tel-aviv-ai-studio-2026-09-23-21_26_33.pdf',
      heroImage: '/projects/aura-preview.jpg',
      overview: {
        summary: 'פרויקט AURA Tel Aviv בוצע על ידי במלואו "תחת מפתח": מהקונספט ועיצוב חוויית המשתמש ועד לאתר האינטראקטיבי המוגמר, כולל הפקת תמונות ווידאו מלאה שנוצרה כולה באמצעות בינה מלאכותית גנרטיבית. כל חללי הפנטהאוז, נופי הים התיכון והסרטונים הקולנועיים נוצרו ברשתות נוירונים ללא ימי צילום יקרים בשטח.',
        challenge: 'להצגת פנטהאוז אדריכלי יוקרתי בשלב המכירות נדרש תוכן ויזואלי ברמת פרימיום עליונה: פנים המגורים, מרפסת עם בריכת אינפיניטי, שקיעות מעל הים וטיסות מצלמה דינמיות. צילום קלאסי או הדמיות תלת-ממד היו אורכים חודשים וכרוכים בתקציבי עתק.',
        solution: 'יושם מחזור פיתוח מלא מקצה לקצה: יצירת חללים פוטוריאליסטיים דרך Midjourney/Photoshop, הפקת סרטוני וידאו קולנועיים חלקים ב-Runway Gen-3/Kling, עיצוב UX/UI רספונסיבי, תוכניות קומה אינטראקטיביות וסיור 3D במתחם.'
      },
      tasks: [
        {
          title: 'פיתוח אתר אינטרנט מלא תחת מפתח (UX/UI Web Design)',
          description: 'מחזור יצירה שלם של האתר: פיתוח ארכיטקטורת מידע, תרחישי אינטראקציה ללקוחות VIP, ממשק רספונסיבי נקי ומערכת הרשמה לביקורים פרטיים.',
          deliverables: ['מיפוי מסע לקוח (CJM)', 'עיצוב רספונסיבי (מובייל ודסקטופ)', 'מערכת עיצוב באסתטיקת יוקרה ים-תיכונית', 'רכיבים וטפסים אינטראקטיביים']
        },
        {
          title: 'הפקת צילומי פנים באמצעות AI (AI Photography)',
          description: 'יצרתי סדרת צילומים פוטוריאליסטיים מרהיבים של המתחם: סוויטת מאסטר, סלון רחב ידיים, מרפסת עם בריכת אינפיניטי, חדרי ארונות ופנורמות שקיעה מעל הים בעקביות מדויקת של חומרי גלם (טרוורטין, שיש, זכוכית, עץ).',
          deliverables: ['צילומי פנים של הפנטהאוז ברזולוציה גבוהה', 'פריימים פנורמיים של קו החוף בתל אביב', 'עיבוד ועריכת טקסטורות ב-Photoshop Generative Fill']
        },
        {
          title: 'הפקת סרטוני וידאו קולנועיים ב-AI (AI Video)',
          description: 'יצרתי סדרת סרטונים אטמוספריים עבור האתר: טיסות מצלמה דרך זיגוג פנורמי, משחקי אור ים-תיכוני, תנועת מים בבריכה וטיימלאפסים של שקיעה באמצעות Runway Gen-3 ו-Kling AI.',
          deliverables: ['קליפים קולנועיים לרקע וכותרות וידאו', 'הנפשת תאורה, צללים ובריזה ימית', 'עריכה סופית, דירוג צבע ועיצוב סאונד']
        },
        {
          title: 'מודול תוכניות קומה וחלוקת אזורים אינטראקטיבי',
          description: 'אפיינתי בורר מפלסים עבור הפנטהאוז: מפלס תחתון (אזורים פרטיים, חדרי שינה, לאונג׳) ומפלס עליון (מרפסת גג, בריכה, בר שמיים). המודול מאפשר לחקור את חלוקת החלל באופן אינטראקטיבי.',
          deliverables: ['תוכניות קומה וקטוריות עם נקודות מבט', 'סמני שטח ומפרטי חדרים אינטראקטיביים', 'התאמה מלאה למסכי מגע (אייפד ומובייל)']
        },
        {
          title: 'סיור תלת-ממדי אינטראקטיבי ומשפך תיאום ביקור VIP',
          description: 'עיצבתי ממשק סיור וירטואלי בחדרי הפנטהאוז וטופס הרשמה דיסקרטי לתיאום ביקור פרטי עם הקונסיירז׳.',
          deliverables: ['רכיבי ממשק לשליטה בסיור התלת-ממדי', 'טופס VIP אישי לתיאום פגישה', 'סטוריטלינג של קונספט האדריכל אביב רוזן']
        }
      ],
      designSystem: {
        aesthetic: 'Mediterranean Luxury Modernism / Warm Minimalist Glass & Sunlight',
        typography: 'Editorial Serif (כותרות יוקרה), Inter / Space Grotesk (פרמטרים וניווט)',
        colors: [
          { name: 'Pure Chalk', hex: '#FFFFFF', usage: 'משטח בהיר ואוורירי' },
          { name: 'Warm Sand', hex: '#F9F8F6', usage: 'רקעי בלוקים, שיש וטרוורטין' },
          { name: 'Mediterranean Azure', hex: '#1E90FF', usage: 'הדגשות אינטראקטיביות ומים' },
          { name: 'Obsidian Black', hex: '#000000', usage: 'טיפוגרפיה חדה ויוקרתית' }
        ],
        features: [
          '100% תמונות ווידאו שנוצרו ב-AI באיכות פרימיום',
          'מעבר אינטראקטיבי בין מפלסים ותוכניות קומה',
          'סיור תלת-ממדי וירטואלי עם מבט 360 מעלות',
          'תיאום מהיר של ביקור VIP פרטי בפנטהאוז'
        ]
      },
      gallery: [
        {
          title: 'מסך ראשי: פנינת תל אביב',
          caption: 'יצירת AI: זיגוג פנורמי, שקיעה ים-תיכונית וניווט פרימיום.',
          image: '/projects/aura-page1.jpg'
        },
        {
          title: 'מיקום ועיצובי פנים פוטוריאליסטיים ב-AI',
          caption: 'אי של שלווה בלב הפועם של העיר: פנורמה של 360 מעלות אל האופק ופרטיות מרבית.',
          image: '/projects/aura-page2.jpg'
        },
        {
          title: 'סיור תלת-ממדי אינטראקטיבי בחללים',
          caption: 'צלילה לחללים שנוצרו ב-AI: מטבח, סוויטת הורים, חדרי ארונות ולאונג׳ פרטי.',
          image: '/projects/aura-page3.jpg'
        },
        {
          title: 'תוכניות קומה אינטראקטיביות',
          caption: 'מודול אזורים: מעבר קל בין מפלס המגורים למרפסת עם בריכת האינפיניטי.',
          image: '/projects/aura-page4.jpg'
        },
        {
          title: 'אדריכלות כאמנות החיים',
          caption: 'ציטוט מהאדריכל הראשי אביב רוזן וסקירת המערכות ההנדסיות המובילות.',
          image: '/projects/aura-page5.jpg'
        },
        {
          title: 'תיאום ביקור VIP פרטי ופוטר',
          caption: 'קשר דיסקרטי עם סוכן אישי לתיאום ביקור סגור במתחם.',
          image: '/projects/aura-page6.jpg'
        }
      ],
      results: [
        {
          metric: '100% תחת מפתח',
          label: 'מחזור פיתוח שלם',
          desc: 'עיצוב אתר, פיתוח, הפקת תמונות ווידאו'
        },
        {
          metric: 'AI Photo & Video',
          label: 'הפקה גנרטיבית',
          desc: 'כל החללים, הפנורמות והסרטונים נוצרו ב-AI'
        },
        {
          metric: '2 מפלסים',
          label: 'תוכניות קומה אינטראקטיביות',
          desc: 'מעבר קל בין קומת המגורים למרפסת הבריכה'
        },
        {
          metric: '3D Tour',
          label: 'נוכחות וירטואלית',
          desc: 'סיור אינטראקטיבי בחללי הפנטהאוז'
        }
      ],
      techStack: [
        'אתר תחת מפתח',
        'UX/UI Web Design',
        'Midjourney v6 (צילום AI)',
        'Runway Gen-3 (וידאו AI)',
        'פוטושופ Generative Fill',
        'תוכניות קומה אינטראקטיביות',
        '3D Tour UI',
        'Tailwind CSS'
      ],
      nextProjectId: 'ai-creative-media',
      prevProjectId: 'bunker-ice-ai'
    },
    'ai-creative-media': {
      id: 'ai-creative-media',
      title: 'Photoshop & AI Creative Media',
      subtitle: 'עבודות מקוריות ב-Adobe Photoshop ובאמצעות AI גנרטיבי: קונספט-ארט, ריטוש וקריאייטיב וידאו דינמי',
      tagline: 'סינתזה בין מיומנות ב-Adobe Photoshop לרשתות נוירונים גנרטיביות מתקדמות.',
      category: 'PHOTOSHOP & GENERATIVE AI MEDIA',
      badge: 'Photoshop & AI Production',
      client: 'פרויקטים מסחריים ומקוריים',
      year: '2024 — 2026',
      role: 'AI Creator, Photoshop Specialist & Video Motion Artist',
      period: '2024 — 2026',
      liveUrl: 'https://raw.githubusercontent.com/liliyak606-sys/Liliya/refs/heads/main/public/img/photo_2026-09-23%2022.53.30.jpeg',
      pdfUrl: 'https://github.com/liliyak606-sys/Liliya/tree/main/public/img',
      heroImage: '/media/photo_1.jpeg',
      overview: {
        summary: 'העבודות המוצגות נוצרו על ידי ב-Adobe Photoshop בשילוב כלי בינה מלאכותית גנרטיבית מובילים (Midjourney, Runway Gen-3, Kling AI, Topaz Video AI, פוטושופ Generative Fill ופילטרים נוירונליים). תהליך העבודה משלב ריטוש מקצועי, קומפוזיציה, תאורה וצבע עם יכולות הנפשה וידאו מתקדמות.',
        challenge: 'יצירת תוכן ויזואלי עמוק באמת דורשת מעבר לפלטים הגולמיים של ה-AI. רק שילוב של פרומפטינג מדויק, קומפוזיטינג מורכב בפוטושופ, עיבוד טקסטורות ידני ובימוי וידאו מאפשרים להגיע לרמת גימור מסחרית.',
        solution: 'פותח תהליך עבודה ייחודי: מיצירת שכבות בסיס ודמויות עקביות ועד הרכבה סופית בפוטושופ (מסכות, ריטוש עור, ציור שיער, תיקוני אור וצל ממוקדים) והנפשת סרטוני וידאו דינמיים עם עיצוב סאונד מותאם אישית.'
      },
      tasks: [
        {
          title: 'יצירת קומפוזיציות פוטו-ארט ב-Adobe Photoshop ו-AI',
          description: 'קומפוזיטינג רב-שכבתי מורכב: יצירת קונספטים ב-Midjourney, ליטוש ידני ב-Photoshop דרך Generative Fill, פיסול, Dodge & Burn, שילוב טקסטורות וציור פרטים.',
          deliverables: ['ריטוש אמנותי עמוק של עור ושיער', 'עבודה עם מפות תאורה והדגשות צבע', 'תמונות מוגמרות באיכות דפוס ו-Ultra-HD']
        },
        {
          title: 'הפקת סרטוני וידאו קולנועיים (AI Motion ב-60 fps)',
          description: 'בימוי סרטונים אנכיים דינמיים (9:16) בקצב פריימים חלק של 60fps, תנועת מצלמה מסונכרנת, מורפינג ועיצוב סאונד באמצעות Runway Gen-3 ו-Kling AI.',
          deliverables: ['סרטונים אנכיים ל-Reels, Shorts וקמפיינים שיווקיים', 'שדרוג חדות ואינטרפולציית פריימים לרמת קריסטל', 'עריכת סאונד ומונטאז׳ וידאו ב-Premiere Pro']
        },
        {
          title: 'הטמעת AI בצינור הקריאייטיב עבור מותגים',
          description: 'יצירת תוכן ויזואלי מסחרי וחומרי פרומו המגדילים את ה-CTR בקמפיינים ואת מעורבות הקהל.',
          deliverables: ['קריאייטיבים לרשתות חברתיות ופרסום ממומן', 'סטוריטלינג ויזואלי למותגים', 'הוזלת עלויות הפקה של עד 70%']
        }
      ],
      designSystem: {
        aesthetic: 'Cinematic Visual Art / High-End Photoshop Compositing & AI Motion',
        typography: 'Space Grotesk & Inter',
        colors: [
          { name: 'Pure Obsidian', hex: '#050508', usage: 'רקע ניגודי עמוק' },
          { name: 'Vibrant Cyan / Blue', hex: '#1E90FF', usage: 'הדגשות אור וזוהר' },
          { name: 'Warm Amber & Skin', hex: '#E29D74', usage: 'גווני עור ותאורה טבעית' },
          { name: 'High-Key White', hex: '#FFFFFF', usage: 'ברק והבהובים ניגודיים' }
        ],
        features: [
          'עבודות מקוריות ב-Adobe Photoshop עם קומפוזיטינג רב-שכבתי',
          'נגן וידאו אינטראקטיבי לצפייה בסרטוני AI אנכיים',
          'זום מסך מלא לבחינת פרטי הריטוש והמרקמים העדינים ביותר',
          'קישורים ישירים לקבצי המקור ברזולוציה מלאה ב-GitHub'
        ]
      },
      videos: [
        {
          title: 'AI Artist: דמויות, מותגים ואווטארים (60 fps)',
          caption: 'יכולות ה-AI artist: יצירת כל דמות, שילוב מותגים ובגדים, קריאייטיבים שיווקיים ואווטארים ריאליסטיים לכל צורך עסקי.',
          videoUrl: '/media/video_1.mp4',
          thumbnail: '/media/video_1_thumb.jpg'
        },
        {
          title: 'תהליך עבודה בפוטושופ: יצירת קריאייטיב והרכבת תמונה',
          caption: 'הצצה לתהליך העבודה המעשי ב-Photoshop: פיתוח תוכן, הרכבת תמונה מאפס, ריטוש, פיסול ואיחוד שכבות.',
          videoUrl: '/media/video_2.mp4',
          thumbnail: '/media/video_2_thumb.jpg'
        }
      ],
      gallery: [
        {
          title: 'פוטושופ ו-AI יצירה 01: פורטרט אמנותי',
          caption: 'נוצר ב-Adobe Photoshop בשילוב בינה מלאכותית: פירוט שיא, טקסטורות עור, תאורה אמנותית ודירוג צבע.',
          image: '/media/photo_1.jpeg'
        },
        {
          title: 'פוטושופ ו-AI יצירה 02: אופנה וקונספט-ארט',
          caption: 'קריאייטיב ויזואלי מסחרי: סינתזה גנרטיבית של דמויות, ריטוש מעודן ואיזון צבעים בפוטושופ.',
          image: '/media/photo_2.jpeg'
        },
        {
          title: 'פריים מהסרטון: AI Artist וקריאייטיב',
          caption: 'פריים מתוך הנפשה מקורית: יצירת דמות, סגנון מותגי ואווטארים פוטוריאליסטיים.',
          image: '/media/video_1_thumb.jpg'
        },
        {
          title: 'פריים מהסרטון: תהליך העבודה בפוטושופ',
          caption: 'פריים מתוך תהליך העבודה: תכנון הקריאייטיב, ריטוש שכבתי והרכבת התמונה ב-Adobe Photoshop.',
          image: '/media/video_2_thumb.jpg'
        }
      ],
      results: [
        {
          metric: 'Photoshop & AI',
          label: 'תהליך עבודה מקורי',
          desc: 'שילוב בינה מלאכותית וקומפוזיטינג מקצועי'
        },
        {
          metric: '60 fps',
          label: 'תנועת וידאו חלקה',
          desc: 'קצב פריימים גבוה ומדיה קולנועית'
        },
        {
          metric: 'פי 10',
          label: 'מהירות הפקה',
          desc: 'מהרעיון ועד לסרטון ופוסטר מוכנים בזמן שיא'
        },
        {
          metric: 'Ultra-HD',
          label: 'איכות פירוט וחדות',
          desc: 'טקסטורות חדות לכל מסך ופורמט תצוגה'
        }
      ],
      techStack: [
        'Adobe Photoshop',
        'Generative Fill & Neural Filters',
        'Midjourney v6',
        'Runway Gen-3 Alpha',
        'Kling AI',
        'Topaz Video AI',
        'Adobe Premiere Pro',
        'תיקוני צבע וריטוש',
        'עיצוב סאונד'
      ],
      nextProjectId: 'bunker-ice-ai',
      prevProjectId: 'aura-tel-aviv'
    }
  }
};

export const PROJECTS = LOCALIZED_PROJECTS.en || LOCALIZED_PROJECTS.ru;

export function getProjects(lang: Language = 'en'): Record<string, ProjectData> {
  return LOCALIZED_PROJECTS[lang] || LOCALIZED_PROJECTS.en || LOCALIZED_PROJECTS.ru;
}

export function getProject(id: string, lang: Language = 'en'): ProjectData | undefined {
  const currentLangProjects = LOCALIZED_PROJECTS[lang] || LOCALIZED_PROJECTS.en || LOCALIZED_PROJECTS.ru;
  return currentLangProjects[id] || (LOCALIZED_PROJECTS.en && LOCALIZED_PROJECTS.en[id]) || LOCALIZED_PROJECTS.ru[id];
}
