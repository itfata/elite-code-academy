const API_URL = "https://bot-xipc.onrender.com/lead";

const content = {
    uk: {
        nav: {
            home: "Головна",
            courses: "Курси",
            students: "Результати",
            about: "Про нас",
            cta: "Обрати курс",
            open: "Меню",
            close: "Закрити"
        },
        actions: {
            chooseCourse: "Обрати курс",
            studentResults: "Результати студентів",
            viewAllResults: "Дивитися всі результати",
            aboutAcademy: "Про Elite Code Academy",
            askQuestion: "Поставити запитання",
            learnMore: "Детальніше",
            startLearning: "Почати навчання",
            viewCase: "Дивитися кейс"
        },
        home: {
            hero: {
                eyebrow: "ELITE CODE ACADEMY",
                title: "Твій перший серйозний крок у світ технологій.",
                text: "Навчайся програмуванню через практику, підтримку ментора та реальні проєкти для портфоліо.",
                visualLabel: "learning flow",
                metricLabel: "Фокус курсу",
                metricNote: "модулів з практикою та фінальним проєктом",
                founderLabel: "Founder & Mentor"
            },
            proof: {
                eyebrow: "Реальна освіта",
                title: "Реальні студенти. Реальні проєкти. Реальний прогрес.",
                text: "Elite Code Academy побудована для тих, хто починає з нуля і хоче бачити конкретний результат, а не просто дивитися уроки."
            },
            why: {
                eyebrow: "Чому Elite Code Academy",
                title: "Тут початківець не губиться в теорії.",
                text: "Ми тримаємо навчання зрозумілим, структурованим і практичним: від першого рядка коду до власної роботи, яку не соромно показати."
            },
            courses: {
                eyebrow: "Напрямки навчання",
                title: "Два чіткі маршрути для старту.",
                text: "На головній лише короткий огляд. Повні програми, тарифи та форма заявки зібрані на окремій сторінці курсів."
            },
            journey: {
                eyebrow: "Як проходить навчання",
                title: "Один логічний шлях від заявки до власного проєкту."
            },
            students: {
                eyebrow: "Результати",
                title: "Вони теж починали з нуля.",
                text: "Ми використовуємо тільки ті студентські результати, які вже були в існуючому сайті та матеріалах проєкту."
            },
            testimonials: {
                eyebrow: "Відгуки",
                title: "Що говорять студенти після навчання."
            },
            founder: {
                eyebrow: "Meet the founder",
                title: "Катерина Руденко",
                lead: "Я створила Elite Code Academy, щоб програмування перестало здаватися чимось недосяжним для тих, хто лише починає.",
                text: "Тут студент не просто дивиться урок. Він пише код, отримує фідбек, проходить через труднощі з підтримкою і доходить до власного результату."
            },
            cta: {
                eyebrow: "Старт",
                title: "Твій перший проєкт може початися сьогодні.",
                text: "Обери напрямок і зроби перший крок у програмуванні."
            }
        },
        courses: {
            hero: {
                eyebrow: "Courses",
                title: "Обери напрямок. Ми допоможемо почати.",
                text: "Кожен курс побудований для початківця: зрозуміле пояснення, практика, підтримка та фінальний результат."
            },
            python: {
                eyebrow: "Python Foundations",
                title: "Від першого рядка коду до власних Python-проєктів.",
                lead: "Курс показує, як працює логіка програмування, і допомагає дійти до фінальної мінігри або власного невеликого застосунку.",
                format: "Self-Study або Full Support",
                forWhom: "Для тих, хто хоче зрозуміти основи програмування, навчитися мислити логікою коду і створити свій перший Python-проєкт.",
                learn: "Змінні, типи даних, умови, цикли, списки, словники, функції, модулі, базову структуру реального коду, а також що таке CRM-системи, GitHub і як з ними працювати.",
                build: "Фінальний проєкт на Python на базі пройдених тем. На чинному сайті це описано як власна мінігра."
            },
            frontend: {
                eyebrow: "Frontend Foundations",
                title: "Від структури HTML до адаптивного сайту.",
                lead: "Курс дає базу для створення перших вебсторінок і допомагає зрозуміти, як з нуля збирати чистий, читабельний інтерфейс.",
                format: "Basic або Pro Support",
                forWhom: "Для тих, хто хоче розібратися, як влаштовані сайти, і навчитися створювати власні адаптивні сторінки без досвіду.",
                learn: "Структуру HTML, стилізацію через CSS, роботу з текстом, зображеннями, формами, адаптивним layout через Flexbox, а також що таке CRM-системи, GitHub і як з ними працювати.",
                build: "Перший професійний адаптивний сайт як фінальний проєкт і основу для власного портфоліо."
            },
            shared: {
                modulesLabel: "Модулі",
                accessLabel: "Доступ",
                accessValue: "6 місяців",
                formatLabel: "Формат",
                forWhomTitle: "Для кого",
                learnTitle: "Що вивчиш",
                buildTitle: "Що створиш",
                curriculumEyebrow: "Curriculum",
                curriculumTitle: "Програма курсу",
                pricingEyebrow: "Pricing",
                pricingTitle: "Обери формат навчання",
                recommended: "Рекомендовано"
            },
            faq: {
                eyebrow: "FAQ",
                title: "Питання перед стартом"
            },
            apply: {
                eyebrow: "Application",
                title: "Готово почати навчання?",
                text: "Оберіть курс і тариф, залиште контакт, і ми надішлемо деталі навчання.",
                primary: "Почати навчання"
            }
        },
        students: {
            hero: {
                eyebrow: "Students",
                title: "Вони теж починали з нуля. Тепер вони створюють.",
                text: "Ця сторінка зібрана лише з підтверджених результатів, які вже були в існуючих матеріалах Elite Code Academy."
            },
            testimonials: {
                eyebrow: "Voices",
                title: "За кожним першим проєктом стоїть зрозумілий фідбек і практика.",
                text: "Не сухі коментарі заради коментарів, а нормальний людський розбір: що вже виходить, де ти застряг(ла) і як зробити краще."
            },
            cta: {
                eyebrow: "Next step",
                title: "Хочеш створити свій перший проєкт?",
                text: "Обери курс і почни рух від \"я не розумію код\" до \"я можу зробити це самостійно\"."
            }
        },
        about: {
            hero: {
                eyebrow: "About Elite Code Academy",
                title: "Середовище, де початківець бачить свій прогрес власними очима.",
                text: "Elite Code Academy існує для того, щоб перший крок у програмуванні був зрозумілим, практичним і людяним."
            },
            mission: {
                eyebrow: "Mission",
                title: "Ми створюємо середовище, де можна стартувати без страху.",
                text: "Навчання побудоване так, щоб студент не втрачав мотивацію на перших кроках і бачив, як теорія переходить у власний результат."
            },
            philosophy: {
                eyebrow: "Philosophy",
                title: "Практика важливіша за шум.",
                text: "У центрі навчання не гучні обіцянки, а зрозумілі пояснення, домашні завдання, розбір помилок і постійний рух до першого проєкту."
            },
            values: {
                eyebrow: "Values",
                title: "Що тримає Elite Code Academy разом"
            },
            founder: {
                eyebrow: "Founder & Mentor",
                lead: "Шлях у програмування не завжди починається з впевненості. І саме тому Elite Code Academy побудована на підтримці.",
                text1: "На чинному сайті Катерина прямо говорить, що колись сама не бачила себе в IT і навіть отримала 0 на іспиті з математики. Зараз цей досвід перетворився на спосіб пояснювати складні теми просто і без зверхності.",
                text2: "Роль ментора тут не зводиться до записаних уроків. Це допомога, розбір помилок, підтримка у складних місцях і фокус на тому, щоб студент дійшов до власної роботи."
            },
            story: {
                eyebrow: "Story of Founder & Mentor",
                text1: "Я довго не розуміла, ким хочу бути. Після іспиту з математики в мене стояв 0, і в той момент здавалося, що жоден університет не захоче мене взяти.",
                text2: "Я не планувала ставати айтішницею. Навпаки, мені здавалося, що це точно не моя дорога. Але життя направило мене саме туди, де я найбільше сумнівалася в собі.",
                text3: "Коли починаєш навчання з нуля, це важко. Ти постійно губишся, кидаєш, починаєш заново і не розумієш, чи це взагалі твоє. Саме тому я побудувала Elite Code Academy так, щоб людина не просто вчилася, а могла чесно зрозуміти: їй це справді підходить чи ні.",
                signature: "— Katya Rudenko"
            },
            cta: {
                eyebrow: "Start",
                title: "Готові обрати свій перший курс?",
                text: "Перейдіть до курсів або залиште заявку, щоб отримати деталі навчання."
            }
        },
        founder: {
            name: "Катерина Руденко"
        },
        footer: {
            title: "Elite Code Academy",
            text: "Місце, де початківці вчаться писати код через практику, підтримку та перші реальні проєкти.",
            links: "Сторінки",
            contact: "Контакти",
            rights: "© 2026 Elite Code Academy. Усі права захищені."
        },
        modal: {
            title: "Заявка на навчання",
            text: "Оберіть курс і формат, залиште контакт, і ми зв'яжемося з вами з деталями навчання.",
            course: "Курс",
            plan: "Тариф",
            name: "Ім'я",
            contact: "Telegram або телефон",
            submit: "Відправити заявку",
            close: "Закрити",
            successTitle: "Заявку отримано.",
            successText: "Ми зв'яжемося з тобою та надішлемо деталі навчання.",
            error: "Сталася помилка. Спробуйте ще раз або напишіть у Telegram."
        },
        videoModal: {
            close: "Закрити відео",
            playLabel: "Відкрити відео"
        },
        options: {
            chooseCourse: "Оберіть курс",
            choosePlan: "Оберіть тариф",
            python: "Python Foundations",
            frontend: "Frontend Foundations",
            self: "Self-Study",
            full: "Full Support",
            basic: "Basic",
            pro: "Pro Support"
        }
    },
    en: {
        nav: {
            home: "Home",
            courses: "Courses",
            students: "Students",
            about: "About",
            cta: "Choose course",
            open: "Menu",
            close: "Close"
        },
        actions: {
            chooseCourse: "Choose course",
            studentResults: "Student results",
            viewAllResults: "View all results",
            aboutAcademy: "About Elite Code Academy",
            askQuestion: "Ask a question",
            learnMore: "Learn more",
            startLearning: "Start learning",
            viewCase: "View case"
        },
        home: {
            hero: {
                eyebrow: "ELITE CODE ACADEMY",
                title: "Your first serious step into technology.",
                text: "Learn programming through practice, mentor support, and real projects for your portfolio.",
                visualLabel: "learning flow",
                metricLabel: "Course focus",
                metricNote: "modules with practice and a final project",
                founderLabel: "Founder & Mentor"
            },
            proof: {
                eyebrow: "Real education",
                title: "Real students. Real projects. Real progress.",
                text: "Elite Code Academy is built for people who start from zero and want to see concrete results, not just watch lessons."
            },
            why: {
                eyebrow: "Why Elite Code Academy",
                title: "Beginners do not get lost in theory here.",
                text: "Learning stays clear, structured, and practical: from the first line of code to a project you can confidently show."
            },
            courses: {
                eyebrow: "Learning directions",
                title: "Two clear routes for your start.",
                text: "The homepage keeps it concise. Full programs, pricing, and the application form live on the dedicated courses page."
            },
            journey: {
                eyebrow: "How learning works",
                title: "One clear path from application to your own project."
            },
            students: {
                eyebrow: "Results",
                title: "They also started from zero.",
                text: "We only use student results that already existed in the current site and project materials."
            },
            testimonials: {
                eyebrow: "Reviews",
                title: "What students say after learning."
            },
            founder: {
                eyebrow: "Meet the founder",
                title: "Kateryna Rudenko",
                lead: "I created Elite Code Academy so programming would stop feeling unreachable for people who are just starting.",
                text: "A student here does not just watch a lesson. They write code, get feedback, move through hard parts with support, and reach a real outcome."
            },
            cta: {
                eyebrow: "Start",
                title: "Your first project can begin today.",
                text: "Choose a direction and take your first step in programming."
            }
        },
        courses: {
            hero: {
                eyebrow: "Courses",
                title: "Choose your direction. We will help you start.",
                text: "Every course is built for beginners: clear explanation, practice, support, and a final result."
            },
            python: {
                eyebrow: "Python Foundations",
                title: "From your first line of code to your own Python projects.",
                lead: "This course shows how programming logic works and helps you reach a final mini-game or your own small application.",
                format: "Self-Study or Full Support",
                forWhom: "For those who want to understand programming basics, learn to think in code logic, and create a first Python project.",
                learn: "Variables, data types, conditions, loops, lists, dictionaries, functions, modules, the basic structure of real code, plus what CRM systems and GitHub are and how to work with them.",
                build: "A final Python project based on the topics covered. On the current site this is described as creating your own mini-game."
            },
            frontend: {
                eyebrow: "Frontend Foundations",
                title: "From HTML structure to a responsive website.",
                lead: "This course gives you the base for creating first web pages and understanding how to build a clean, readable interface from scratch.",
                format: "Basic or Pro Support",
                forWhom: "For those who want to understand how websites work and learn to build their own responsive pages without prior experience.",
                learn: "HTML structure, styling with CSS, working with text, images, forms, responsive layout with Flexbox, plus what CRM systems and GitHub are and how to work with them.",
                build: "Your first professional responsive website as a final project and a base for your own portfolio."
            },
            shared: {
                modulesLabel: "Modules",
                accessLabel: "Access",
                accessValue: "6 months",
                formatLabel: "Format",
                forWhomTitle: "Who it is for",
                learnTitle: "What you learn",
                buildTitle: "What you build",
                curriculumEyebrow: "Curriculum",
                curriculumTitle: "Course outline",
                pricingEyebrow: "Pricing",
                pricingTitle: "Choose your learning format",
                recommended: "Recommended"
            },
            faq: {
                eyebrow: "FAQ",
                title: "Questions before you start"
            },
            apply: {
                eyebrow: "Application",
                title: "Ready to start learning?",
                text: "Choose a course and plan, leave your contact, and we will send the learning details.",
                primary: "Start learning"
            }
        },
        students: {
            hero: {
                eyebrow: "Students",
                title: "They started from zero. Now they build.",
                text: "This page uses only verified outcomes that already existed in Elite Code Academy materials."
            },
            testimonials: {
                eyebrow: "Voices",
                title: "Every first project grows through feedback and practice.",
                text: "Not dry comments for the sake of comments, but real human guidance: what already works, where you got stuck, and how to make it better."
            },
            cta: {
                eyebrow: "Next step",
                title: "Want to build your first project?",
                text: "Choose a course and move from \"I do not understand code\" to \"I can build this myself.\""
            }
        },
        about: {
            hero: {
                eyebrow: "About Elite Code Academy",
                title: "An environment where beginners can see their progress with their own eyes.",
                text: "Elite Code Academy exists to make the first step into programming clear, practical, and human."
            },
            mission: {
                eyebrow: "Mission",
                title: "We create a space where you can start without fear.",
                text: "Learning is built so the student keeps motivation through the first steps and sees theory turn into a real result."
            },
            philosophy: {
                eyebrow: "Philosophy",
                title: "Practice matters more than noise.",
                text: "The center of learning is not loud promises, but clear explanations, homework, error review, and steady movement toward a first project."
            },
            values: {
                eyebrow: "Values",
                title: "What holds Elite Code Academy together"
            },
            founder: {
                eyebrow: "Founder & Mentor",
                lead: "The path into programming does not always begin with confidence. That is exactly why Elite Code Academy is built around support.",
                text1: "On the current site Kateryna openly says that she once did not see herself in IT and even scored 0 on a math exam. Today that experience has become a way to explain difficult topics simply and without distance.",
                text2: "The mentor role here is more than recorded lessons. It is help, feedback, support through difficult parts, and a focus on getting the student to a real piece of work."
            },
            story: {
                eyebrow: "Story of Founder & Mentor",
                text1: "For a long time, I did not know who I wanted to become. After my math exam, I had a 0, and at that moment it felt like no university would want to take me anywhere.",
                text2: "I was not planning to become an IT specialist. Quite the opposite, it felt like the one path that was not meant for me. But life pushed me exactly toward the place where I doubted myself the most.",
                text3: "When you start learning from zero, it is hard. You get lost, you quit, you begin again, and you keep wondering whether this is really for you. That is why I built Elite Code Academy in a way that helps a person not only learn, but honestly understand whether this path is truly theirs.",
                signature: "— Katya Rudenko"
            },
            cta: {
                eyebrow: "Start",
                title: "Ready to choose your first course?",
                text: "Go to the courses page or leave an application to receive the learning details."
            }
        },
        founder: {
            name: "Kateryna Rudenko"
        },
        footer: {
            title: "Elite Code Academy",
            text: "A place where beginners learn to write code through practice, support, and first real projects.",
            links: "Pages",
            contact: "Contact",
            rights: "© 2026 Elite Code Academy. All rights reserved."
        },
        modal: {
            title: "Course application",
            text: "Choose a course and plan, leave your contact, and we will get back to you with the learning details.",
            course: "Course",
            plan: "Plan",
            name: "Name",
            contact: "Telegram or phone",
            submit: "Send application",
            close: "Close",
            successTitle: "Application received.",
            successText: "We will contact you and send the learning details.",
            error: "Something went wrong. Please try again or contact us in Telegram."
        },
        videoModal: {
            close: "Close video",
            playLabel: "Open video"
        },
        options: {
            chooseCourse: "Choose a course",
            choosePlan: "Choose a plan",
            python: "Python Foundations",
            frontend: "Frontend Foundations",
            self: "Self-Study",
            full: "Full Support",
            basic: "Basic",
            pro: "Pro Support"
        }
    }
};

const pageLinks = [
    { key: "home", href: "index.html" },
    { key: "courses", href: "courses.html" },
    { key: "students", href: "students.html" },
    { key: "about", href: "about.html" }
];

const trustChips = {
    uk: ["Python", "Frontend", "Mentor Support", "Real Projects", "Certificate"],
    en: ["Python", "Frontend", "Mentor Support", "Real Projects", "Certificate"]
};

const proofCards = {
    uk: [
        { title: "Навчання з нуля", text: "Курси спроєктовані для тих, хто тільки починає і хоче розуміти кожен крок." },
        { title: "Практика замість перевантаження", text: "Після тем ідуть завдання, перевірка та поступове збирання власної роботи." },
        { title: "Підтримка ментора", text: "У форматах з підтримкою студент отримує розбір помилок і допомогу в складних місцях." }
    ],
    en: [
        { title: "Start from zero", text: "The courses are designed for people who are just beginning and want to understand each step." },
        { title: "Practice over overload", text: "Topics are followed by tasks, review, and gradual progress toward your own work." },
        { title: "Mentor support", text: "In supported plans, students receive feedback and help through the difficult parts." }
    ]
};

const featureCards = {
    uk: [
        { index: "01", title: "Зрозуміло з нуля", text: "Складні теми пояснюються простою мовою без зайвого шуму." },
        { index: "02", title: "Навчання через практику", text: "Ти не просто дивишся уроки, а пишеш код і закріплюєш теми завданнями." },
        { index: "03", title: "Підтримка ментора", text: "Є формат, де можна отримати перевірку, розбір і регулярний контакт." },
        { index: "04", title: "Фінальний проєкт", text: "Навчання закінчується власною роботою, а не просто списком пройдених тем." },
        { index: "05", title: "6 місяців доступу", text: "Матеріали залишаються відкритими, щоб проходити курс у власному темпі." },
        { index: "06", title: "Чіткий маршрут", text: "Два напрямки, зрозумілі тарифи й одна логічна дія: обрати курс і почати." }
    ],
    en: [
        { index: "01", title: "Clear from zero", text: "Complex topics are explained in simple language without unnecessary noise." },
        { index: "02", title: "Learning through practice", text: "You do not only watch lessons, you write code and reinforce topics through tasks." },
        { index: "03", title: "Mentor support", text: "There is a format where you can receive review, feedback, and regular support." },
        { index: "04", title: "Final project", text: "Learning ends with your own work, not only a list of topics completed." },
        { index: "05", title: "6 months of access", text: "Materials stay open so you can move through the course at your own pace." },
        { index: "06", title: "Clear route", text: "Two directions, clear pricing, and one logical action: choose a course and start." }
    ]
};

const coursesData = {
    python: {
        themes: { uk: "Python Foundations", en: "Python Foundations" },
        result: {
            uk: "Від першого рядка коду до власних Python-проєктів.",
            en: "From your first line of code to your own Python projects."
        },
        modules: 23,
        format: { uk: "Self-Study або Full Support", en: "Self-Study or Full Support" },
        price: { uk: "від 1800 грн", en: "from 35 EUR" },
        href: "courses.html#python"
    },
    frontend: {
        themes: { uk: "Frontend Foundations", en: "Frontend Foundations" },
        result: {
            uk: "Від структури HTML до адаптивного сайту.",
            en: "From HTML structure to a responsive website."
        },
        modules: 15,
        format: { uk: "Basic або Pro Support", en: "Basic or Pro Support" },
        price: { uk: "від 1300 грн", en: "from 25 EUR" },
        href: "courses.html#frontend"
    }
};

const journeyData = {
    uk: [
        { step: "01", title: "Обираєш напрямок", text: "Python або HTML/CSS залежно від того, з чого хочеш почати." },
        { step: "02", title: "Проходиш матеріали", text: "Навчаєшся у своєму темпі з доступом до курсу на 6 місяців." },
        { step: "03", title: "Виконуєш практику", text: "Після тем ідуть домашні завдання та закріплення через код." },
        { step: "04", title: "Отримуєш фідбек", text: "У підтримуваних тарифах є перевірка, розбір і онлайн-зустрічі." },
        { step: "05", title: "Створюєш проєкт", text: "Фінал курсу зводиться до першої власної роботи та сертифіката." }
    ],
    en: [
        { step: "01", title: "Choose a direction", text: "Python or HTML/CSS depending on where you want to begin." },
        { step: "02", title: "Go through the material", text: "Study at your own pace with 6 months of course access." },
        { step: "03", title: "Do the practice", text: "Each topic is followed by homework and hands-on coding." },
        { step: "04", title: "Get feedback", text: "Supported plans include review, guidance, and online meetings." },
        { step: "05", title: "Build your project", text: "The course ends with your first finished work and a certificate." }
    ]
};

const studentCases = {
    uk: [
        {
            name: "Стас",
            course: "Python Foundations",
            duration: "1 місяць",
            project: "Перша гра",
            video: "1.mp4",
            outcome: "На чинному сайті результат позначений як гра за 1 місяць.",
            quote: "Перший робочий проєкт після старту з нуля."
        },
        {
            name: "Олег",
            course: "Python Foundations",
            duration: "1 місяць",
            project: "Перша гра",
            video: "2.mp4",
            outcome: "Створив свою гру за 4 місяці навчання.",
            quote: "Результат у стислі терміни через практику."
        },
        {
            name: "Настя",
            course: "Python Foundations",
            duration: "3 місяці",
            project: "Гра",
            video: "3.mp4",
            outcome: "На існуючому сайті проєкт Насті позначений як гра за 3 місяці навчання.",
            quote: "Рух від базової логіки до завершеної роботи."
        },
        {
            name: "Арсен",
            course: "Frontend Foundations",
            duration: "5 тижнів",
            project: "Перший сайт",
            video: "99.MP4",
            outcome: "На існуючому сайті проєкт Арсена позначений як сайт за 5 тижнів.",
            quote: "Перший сайт, зроблений у процесі навчання."
        }
    ],
    en: [
        {
            name: "Stas",
            course: "Python Foundations",
            duration: "1 month",
            project: "First game",
            video: "1.mp4",
            outcome: "On the current site this result is presented as a game built in 1 month.",
            quote: "A first working project after starting from zero."
        },
        {
            name: "Oleg",
            course: "Python Foundations",
            duration: "1 month",
            project: "First game",
            video: "2.mp4",
            outcome: "Another Python student project that already existed on the previous site.",
            quote: "A tangible result built through practice."
        },
        {
            name: "Nastya",
            course: "Python Foundations",
            duration: "3 months",
            project: "Game",
            video: "3.mp4",
            outcome: "On the current site Nastya's project is shown as a game after 3 months of learning.",
            quote: "A move from basic logic to finished work."
        },
        {
            name: "Arsen",
            course: "Frontend Foundations",
            duration: "5 weeks",
            project: "First website",
            video: "99.MP4",
            outcome: "On the current site Arsen's project is shown as a website after 5 weeks.",
            quote: "A first website built during learning."
        }
    ]
};

const testimonials = {
    uk: [
        { text: "Курс класний, Катерина допомогла розібратись з усіма задачами. Elite Code Academy — найкращий проєкт для вивчення програмування з нуля.", author: "Марія" },
        { text: "Ментор пояснював складні теми доступно, перевіряв завдання та давав поради. Завдяки підтримці я зрозумів Python, та знаю куди далі хочу рухатись!", author: "Антон" },
        { text: "Вже можу писати маленькі програми швидше та якісніше. Мій логічний та алгоритмічний рівень значно покращився.", author: "Андрій" },
        { text: "Дуже сподобався курс! Було зрозуміло як і що робити. В майбутньому я би хотіла звʼязати свій шлях з цим. Дякую!", author: "Ольга" },
        { text: "Можу навчатися у своєму темпі — дуже зручно. Все пояснено людською мовою, мотивація зросла.", author: "Олександр" },
        { text: "Мене надихає, що я роблю сайти — маленькі, але я тільки починаю. Я думав, що HTML — це щось дуже важке, але я в захваті від того, що можу робити зараз.", author: "Арсен" }
    ],
    en: [
        { text: "Great course, Kateryna helped me understand every task. Elite Code Academy is one of the best ways to learn programming from scratch.", author: "Maria" },
        { text: "The mentor explained complex topics clearly, reviewed tasks, and gave advice. Thanks to the support, I understood Python and know where I want to move next.", author: "Anton" },
        { text: "I can already write small programs faster and better. My logical and algorithmic level improved a lot.", author: "Andrii" },
        { text: "I really liked the course. It was clear what to do and how to do it. In the future I would like to connect my path with this. Thank you!", author: "Olha" },
        { text: "I can study at my own pace, which is very convenient. Everything is explained in human language, and my motivation has grown.", author: "Oleksandr" },
        { text: "I am inspired by the fact that I make websites, small ones, but I am just starting. I thought HTML was very hard, but I am thrilled with what I can do now.", author: "Arsen" }
    ]
};

const feedbackNotes = {
    uk: [
        { text: "Тут не просто кажуть «неправильно». Тут пояснюють, що саме варто поправити і чому." },
        { text: "Якщо щось не виходить, ти не лишаєшся один на один з помилкою. Є розбір і напрямок, куди рухатись далі." },
        { text: "Фідбек не тисне, а допомагає. Після нього стає спокійніше і зрозуміліше, що робити наступним кроком." }
    ],
    en: [
        { text: "It is not just \"this is wrong.\" It is a clear explanation of what to adjust and why." },
        { text: "If something does not work, you are not left alone with the mistake. There is review and a direction for the next step." },
        { text: "The feedback is not there to pressure you. It is there to make the next step feel clearer and calmer." }
    ]
};

const curriculum = {
    python: {
        uk: [
            ["01", "Перші кроки", "Встановлення Python та знайомство з редакторами коду VS Code та PyCharm."],
            ["02", "Основи логіки", "Арифметичні операції, змінні та робота з типами даних."],
            ["03", "Умови та цикли", "If/Else, For, While та логіка ухвалення рішень у коді."],
            ["04", "Списки та словники", "Організація даних та базові структури для реальних задач."],
            ["05", "Функції та модулі", "Повторне використання коду і більш структурований підхід."],
            ["06", "Фінальний проєкт", "Створення власної мінігри: від ідеї до робочого файлу."]
        ],
        en: [
            ["01", "First steps", "Installing Python and getting familiar with VS Code and PyCharm."],
            ["02", "Logic basics", "Arithmetic operations, variables, and working with data types."],
            ["03", "Conditions and loops", "If/Else, For, While, and decision making in code."],
            ["04", "Lists and dictionaries", "Organizing data and using basic structures for real tasks."],
            ["05", "Functions and modules", "Reusing code and working in a more structured way."],
            ["06", "Final project", "Creating your own mini-game from idea to working file."]
        ]
    },
    frontend: {
        uk: [
            ["01", "Анатомія сайту", "Структура HTML, робота з текстом, посиланнями та зображеннями."],
            ["02", "Магія стилів CSS", "Селектори, кольори, шрифти та оформлення блоків."],
            ["03", "Flexbox Layout", "Сучасне розташування елементів і побудова сіток."],
            ["04", "Форми та інтерактив", "Поля вводу, кнопки та збір даних від користувача."],
            ["05", "Фінальний проєкт", "Верстка першого професійного адаптивного сайту."]
        ],
        en: [
            ["01", "Site anatomy", "HTML structure and working with text, links, and images."],
            ["02", "CSS style magic", "Selectors, colors, fonts, and visual styling."],
            ["03", "Flexbox layout", "Modern positioning and building responsive layouts."],
            ["04", "Forms and interaction", "Inputs, buttons, and collecting user data."],
            ["05", "Final project", "Building your first professional responsive website."]
        ]
    }
};

const pricing = {
    python: {
        uk: [
            {
                id: "self",
                name: "Self-Study",
                price: "1800 грн",
                recommended: false,
                features: ["23 модулі", "Детальна перевірка домашніх завдань", "Сертифікат", "6 місяців доступу до курсу"]
            },
            {
                id: "full",
                name: "Full Support",
                price: "3500 грн",
                recommended: true,
                features: ["23 модулі", "Плановані онлайн-зустрічі", "Детальна перевірка домашніх завдань", "Допомога з фінальним проєктом", "Сертифікат", "6 місяців доступу до курсу"]
            }
        ],
        en: [
            {
                id: "self",
                name: "Self-Study",
                price: "35 EUR",
                recommended: false,
                features: ["23 modules", "Detailed homework review", "Certificate", "6 months of access"]
            },
            {
                id: "full",
                name: "Full Support",
                price: "69 EUR",
                recommended: true,
                features: ["23 modules", "Scheduled online meetings", "Detailed homework review", "Final project support", "Certificate", "6 months of access"]
            }
        ]
    },
    frontend: {
        uk: [
            {
                id: "basic",
                name: "Basic",
                price: "1300 грн",
                recommended: false,
                features: ["15 модулів", "Відеолекції та конспекти", "Навчання самостійно", "Сертифікат", "6 місяців доступу до курсу"]
            },
            {
                id: "pro",
                name: "Pro Support",
                price: "2900 грн",
                recommended: true,
                features: ["15 модулів", "Заплановані онлайн-зустрічі", "Розбір твого коду ментором", "Сертифікат", "6 місяців доступу до курсу"]
            }
        ],
        en: [
            {
                id: "basic",
                name: "Basic",
                price: "25 EUR",
                recommended: false,
                features: ["15 modules", "Video lessons and notes", "Self-paced learning", "Certificate", "6 months of access"]
            },
            {
                id: "pro",
                name: "Pro Support",
                price: "57 EUR",
                recommended: true,
                features: ["15 modules", "Scheduled online meetings", "Code review by mentor", "Certificate", "6 months of access"]
            }
        ]
    }
};

const faqData = {
    uk: [
        ["Чи потрібен досвід у програмуванні?", "Ні. Курси розраховані на новачків, а пояснення побудовані від базових кроків."],
        ["Скільки триває навчання?", "Доступ до курсу надається на 6 місяців, щоб навчатися у власному темпі."],
        ["Як проходить навчання?", "Ти отримуєш матеріали, виконуєш завдання й поступово рухаєшся програмою. У форматах з підтримкою є допомога ментора."],
        ["Чи будуть домашні завдання та практика?", "Так. Практика є основою навчання: студент реально пише код, а не лише читає теорію."],
        ["Що я зможу після курсу?", "Після завершення ти матимеш базові навички Python або HTML/CSS та перші роботи для портфоліо."],
        ["Чи можна навчатися з телефону?", "Читати матеріали можна, але для практики зручніше використовувати ноутбук або ПК."],
        ["Що робити, якщо я застрягну?", "У тарифах з підтримкою можна звернутися до ментора і отримати розбір та допомогу."],
        ["Як записатися на курс?", "Оберіть курс і тариф, відкрийте форму заявки та залиште свій контакт." ]
    ],
    en: [
        ["Do I need programming experience?", "No. The courses are designed for beginners and explanations start from the basics."],
        ["How long does learning last?", "You receive 6 months of access so you can study at your own pace."],
        ["How does the learning process work?", "You receive materials, do tasks, and move through the program. Supported plans include mentor help."],
        ["Will there be homework and practice?", "Yes. Practice is the core of learning: students write code, not just read theory."],
        ["What will I be able to do after the course?", "After finishing, you will have basic Python or HTML/CSS skills and first portfolio work."],
        ["Can I study from a phone?", "You can read materials from a phone, but practice is much more comfortable on a laptop or PC."],
        ["What if I get stuck?", "On supported plans you can ask the mentor for help and feedback."],
        ["How do I enroll?", "Choose a course and plan, open the application form, and leave your contact details."]
    ]
};

const valueCards = {
    uk: [
        { title: "Зрозумілість", text: "Курс повинен бути відкритим для людини без досвіду." },
        { title: "Практичність", text: "Кожна тема має вести до дії, а не зависати у повітрі." },
        { title: "Людяність", text: "Підтримка важлива не менше за матеріали." },
        { title: "Результат", text: "Навчання має завершуватися конкретною власною роботою." }
    ],
    en: [
        { title: "Clarity", text: "A course should stay accessible to someone without prior experience." },
        { title: "Practicality", text: "Every topic should lead to action rather than hang in abstraction." },
        { title: "Human support", text: "Support matters as much as the material itself." },
        { title: "Result", text: "Learning should end in a concrete piece of work of your own." }
    ]
};

let currentLang = localStorage.getItem("selectedLang") || "uk";

function t(path) {
    return path.split(".").reduce((value, part) => value && value[part], content[currentLang]) || "";
}

function renderNav() {
    const navRoot = document.getElementById("site-nav");
    if (!navRoot) return;
    const page = document.body.dataset.page;
    navRoot.innerHTML = `
        <header class="site-nav">
            <div class="site-nav-shell" id="site-nav-shell">
                <div class="nav-row">
                    <a class="brand" href="index.html" aria-label="Elite Code Academy">
                        <img src="logo-mark.png" alt="Elite Code Academy logo">
                        <div class="brand-copy">
                            <strong>ELITE CODE</strong>
                            <span>ACADEMY</span>
                        </div>
                    </a>
                    <button class="nav-toggle" type="button" id="nav-toggle" aria-expanded="false" aria-label="${t("nav.open")}">+</button>
                    <nav class="nav-links" aria-label="Primary">
                        ${pageLinks.map(link => `<a class="nav-link ${page === link.key ? "is-active" : ""}" href="${link.href}">${t(`nav.${link.key}`)}</a>`).join("")}
                    </nav>
                    <div class="nav-actions">
                        <div class="lang-switch" aria-label="Language switcher">
                            <button class="lang-btn ${currentLang === "uk" ? "is-active" : ""}" data-lang="uk" type="button">UA</button>
                            <button class="lang-btn ${currentLang === "en" ? "is-active" : ""}" data-lang="en" type="button">EN</button>
                        </div>
                        <a class="btn btn-secondary" href="courses.html#courses">${t("nav.cta")}</a>
                    </div>
                </div>
            </div>
        </header>
    `;

    const shell = document.getElementById("site-nav-shell");
    const toggle = document.getElementById("nav-toggle");
    if (toggle && shell) {
        toggle.addEventListener("click", () => {
            const isOpen = shell.classList.toggle("is-open");
            toggle.setAttribute("aria-expanded", String(isOpen));
            toggle.setAttribute("aria-label", isOpen ? t("nav.close") : t("nav.open"));
            toggle.textContent = isOpen ? "−" : "+";
        });
    }

    navRoot.querySelectorAll("[data-lang]").forEach(button => {
        button.addEventListener("click", () => {
            currentLang = button.dataset.lang;
            localStorage.setItem("selectedLang", currentLang);
            renderPage();
        });
    });
}

function renderFooter() {
    const footerRoot = document.getElementById("site-footer");
    if (!footerRoot) return;
    footerRoot.innerHTML = `
        <footer class="footer">
            <div class="footer-shell">
                <div class="footer-grid">
                    <div>
                        <p class="eyebrow">${t("footer.title")}</p>
                        <p>${t("footer.text")}</p>
                    </div>
                    <div>
                        <p class="eyebrow">${t("footer.links")}</p>
                        <div class="footer-links">
                            ${pageLinks.map(link => `<a class="footer-link" href="${link.href}">${t(`nav.${link.key}`)}</a>`).join("")}
                        </div>
                    </div>
                    <div>
                        <p class="eyebrow">${t("footer.contact")}</p>
                        <div class="footer-socials">
                            <a class="footer-link" href="https://www.instagram.com/elite_code_academy/" target="_blank" rel="noreferrer">Instagram</a>
                            <a class="footer-link" href="https://t.me/itffata" target="_blank" rel="noreferrer">Telegram</a>
                            <a class="footer-link" href="https://www.tiktok.com/@elite.code.academ?_r=1&_t=ZN-98xKhb9iac2" target="_blank" rel="noreferrer">TikTok</a>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">${t("footer.rights")}</div>
            </div>
        </footer>
    `;
}

function renderModal() {
    const root = document.getElementById("application-modal-root");
    if (!root) return;
    root.innerHTML = `
        <div class="application-modal" id="application-modal" aria-hidden="true">
            <div class="application-modal__panel" role="dialog" aria-modal="true" aria-labelledby="application-title">
                <div class="application-modal__head">
                    <div>
                        <p class="eyebrow">Application</p>
                        <h2 id="application-title">${t("modal.title")}</h2>
                        <p>${t("modal.text")}</p>
                    </div>
                    <button class="application-modal__close" type="button" id="application-close" aria-label="${t("modal.close")}">×</button>
                </div>
                <form class="application-form" id="application-form">
                    <div class="field-group">
                        <label class="field-label" for="application-course">${t("modal.course")}</label>
                        <select class="field" id="application-course" name="course" required>
                            <option value="">${t("options.chooseCourse")}</option>
                            <option value="${t("options.python")}">${t("options.python")}</option>
                            <option value="${t("options.frontend")}">${t("options.frontend")}</option>
                        </select>
                    </div>
                    <div class="field-group">
                        <label class="field-label" for="application-plan">${t("modal.plan")}</label>
                        <select class="field" id="application-plan" name="plan" required>
                            <option value="">${t("options.choosePlan")}</option>
                        </select>
                    </div>
                    <div class="field-group">
                        <label class="field-label" for="application-name">${t("modal.name")}</label>
                        <input class="field" id="application-name" name="name" required>
                    </div>
                    <div class="field-group">
                        <label class="field-label" for="application-contact">${t("modal.contact")}</label>
                        <input class="field" id="application-contact" name="contact" required>
                    </div>
                    <button class="btn btn-primary" type="submit">${t("modal.submit")}</button>
                    <div class="application-success" id="application-success">
                        <strong>${t("modal.successTitle")}</strong>
                        <p>${t("modal.successText")}</p>
                    </div>
                </form>
            </div>
        </div>
    `;

    bindModal();
    bindVideoModal();
}

function getPlansForCourse(courseValue) {
    const options = content[currentLang].options;
    if (courseValue === options.python) {
        return [
            { value: options.self, label: options.self },
            { value: options.full, label: options.full }
        ];
    }
    if (courseValue === options.frontend) {
        return [
            { value: options.basic, label: options.basic },
            { value: options.pro, label: options.pro }
        ];
    }
    return [];
}

function bindModal() {
    const modal = document.getElementById("application-modal");
    const closeButton = document.getElementById("application-close");
    const form = document.getElementById("application-form");
    const success = document.getElementById("application-success");
    const courseSelect = document.getElementById("application-course");
    const planSelect = document.getElementById("application-plan");

    const populatePlans = (selectedCourse, planOverride = "") => {
        planSelect.innerHTML = `<option value="">${t("options.choosePlan")}</option>`;
        getPlansForCourse(selectedCourse).forEach(plan => {
            const option = document.createElement("option");
            option.value = plan.value;
            option.textContent = plan.label;
            if (planOverride === plan.value) option.selected = true;
            planSelect.appendChild(option);
        });
    };

    const openModal = (courseKey = "", planKey = "") => {
        success.classList.remove("is-visible");
        form.reset();
        const options = content[currentLang].options;
        const mappedCourse = courseKey ? options[courseKey] : "";
        const mappedPlan = planKey ? options[planKey] : "";
        if (mappedCourse) {
            courseSelect.value = mappedCourse;
            populatePlans(mappedCourse, mappedPlan);
        } else {
            populatePlans("");
        }
        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");
    };

    const closeModal = () => {
        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
    };

    document.querySelectorAll(".js-open-application").forEach(button => {
        button.addEventListener("click", () => openModal(button.dataset.course || "", button.dataset.plan || ""));
    });

    closeButton.addEventListener("click", closeModal);
    modal.addEventListener("click", event => {
        if (event.target === modal) closeModal();
    });

    courseSelect.addEventListener("change", () => populatePlans(courseSelect.value));

    form.addEventListener("submit", async event => {
        event.preventDefault();
        const course = courseSelect.value;
        const plan = planSelect.value;
        const name = document.getElementById("application-name").value.trim();
        const contact = document.getElementById("application-contact").value.trim();

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    contact,
                    course: `${course}${plan ? ` (${plan})` : ""}`,
                    lang: currentLang
                })
            });

            if (!response.ok) throw new Error("Request failed");
            success.classList.add("is-visible");
            form.reset();
            populatePlans("");
        } catch (error) {
            alert(t("modal.error"));
        }
    });

    const params = new URLSearchParams(window.location.search);
    const courseParam = params.get("course");
    const planParam = params.get("plan");
    if (window.location.hash === "#apply") {
        openModal(courseParam || "", planParam || "");
    }
}

function renderTranslatedText() {
    document.documentElement.lang = currentLang;
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const value = t(element.dataset.i18n);
        if (value) element.textContent = value;
    });
}

function renderHeroChips() {
    const chips = document.getElementById("hero-chips");
    if (!chips) return;
    chips.innerHTML = trustChips[currentLang].map(item => `<span class="chip">${item}</span>`).join("");
}

function renderProofCards() {
    const root = document.getElementById("proof-grid");
    if (!root) return;
    root.innerHTML = proofCards[currentLang].map(card => `
        <article class="proof-card reveal">
            <strong>${card.title}</strong>
            <p>${card.text}</p>
        </article>
    `).join("");
}

function renderFeatureCards() {
    const root = document.getElementById("feature-stack");
    if (!root) return;
    root.innerHTML = featureCards[currentLang].map(card => `
        <article class="feature-card reveal">
            <span class="feature-index">${card.index}</span>
            <strong>${card.title}</strong>
            <p>${card.text}</p>
        </article>
    `).join("");
}

function renderCoursePreview() {
    const root = document.getElementById("course-preview-grid");
    if (!root) return;
    root.innerHTML = Object.entries(coursesData).map(([key, course]) => `
        <article class="course-preview-card reveal">
            <div>
                <p class="eyebrow">${course.themes[currentLang]}</p>
                <strong>${course.themes[currentLang]}</strong>
                <p>${course.result[currentLang]}</p>
                <div class="course-preview-meta">
                    <span class="meta-pill">${course.modules} ${currentLang === "uk" ? "модулів" : "modules"}</span>
                    <span class="meta-pill">${course.format[currentLang]}</span>
                    <span class="meta-pill">${course.price[currentLang]}</span>
                </div>
            </div>
            <div>
                <a class="btn btn-secondary" href="${course.href}">${t("actions.learnMore")}</a>
                <button class="btn btn-primary js-open-application" type="button" data-course="${key}" data-plan="${key === "python" ? "self" : "basic"}">${t("actions.chooseCourse")}</button>
            </div>
        </article>
    `).join("");
}

function renderJourney(rootId) {
    const root = document.getElementById(rootId);
    if (!root) return;
    root.innerHTML = journeyData[currentLang].map(item => `
        <article class="journey-card reveal">
            <p class="journey-step">${item.step}</p>
            <strong>${item.title}</strong>
            <p>${item.text}</p>
        </article>
    `).join("");
}

function renderStudentCards(rootId, limit = null) {
    const root = document.getElementById(rootId);
    if (!root) return;
    const cases = limit ? studentCases[currentLang].slice(0, limit) : studentCases[currentLang];
    root.innerHTML = cases.map(student => `
        <article class="student-card reveal">
            <button class="student-visual student-visual-button js-open-video" type="button" data-video-src="${student.video}" data-video-title="${student.project}" aria-label="${t("videoModal.playLabel")}">
                <video class="student-video js-student-video" muted playsinline loop preload="metadata" poster="">
                    <source src="${student.video}" type="video/mp4">
                </video>
                <span>${student.project}</span>
            </button>
            <div class="student-meta">
                <span>${student.name}</span>
                <span>${student.duration}</span>
            </div>
            <strong>${student.course}</strong>
            <p>${student.outcome}</p>
            <div class="student-quote">${student.quote}</div>
        </article>
    `).join("");
}

function initStudentVideoAutoplay() {
    const videos = document.querySelectorAll(".js-student-video");
    if (!videos.length) return;

    const playVideo = video => {
        video.muted = true;
        const playPromise = video.play();
        if (playPromise && typeof playPromise.catch === "function") {
            playPromise.catch(() => {});
        }
    };

    if (!("IntersectionObserver" in window)) {
        videos.forEach(playVideo);
        return;
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const video = entry.target;
            if (entry.isIntersecting && entry.intersectionRatio > 0.45) {
                playVideo(video);
            } else {
                video.pause();
            }
        });
    }, { threshold: [0.45, 0.7] });

    videos.forEach(video => observer.observe(video));
}

function bindVideoModal() {
    if (document.getElementById("student-video-modal")) return;

    const modal = document.createElement("div");
    modal.className = "video-modal";
    modal.id = "student-video-modal";
    modal.setAttribute("aria-hidden", "true");
    modal.innerHTML = `
        <div class="video-modal__panel" role="dialog" aria-modal="true" aria-labelledby="student-video-title">
            <div class="video-modal__head">
                <strong id="student-video-title"></strong>
                <button class="application-modal__close" type="button" id="student-video-close" aria-label="${t("videoModal.close")}">×</button>
            </div>
            <video class="video-modal__player" id="student-video-player" controls playsinline preload="metadata"></video>
        </div>
    `;
    document.body.appendChild(modal);

    const player = document.getElementById("student-video-player");
    const title = document.getElementById("student-video-title");
    const closeButton = document.getElementById("student-video-close");

    const closeModal = () => {
        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
        player.pause();
        player.removeAttribute("src");
        player.load();
    };

    document.querySelectorAll(".js-open-video").forEach(button => {
        button.addEventListener("click", () => {
            const src = button.dataset.videoSrc;
            const heading = button.dataset.videoTitle || "";
            if (!src) return;
            title.textContent = heading;
            player.src = src;
            modal.classList.add("is-open");
            modal.setAttribute("aria-hidden", "false");
            const playPromise = player.play();
            if (playPromise && typeof playPromise.catch === "function") {
                playPromise.catch(() => {});
            }
        });
    });

    closeButton.addEventListener("click", closeModal);
    modal.addEventListener("click", event => {
        if (event.target === modal) closeModal();
    });
    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && modal.classList.contains("is-open")) {
            closeModal();
        }
    });
}

function renderTestimonials(rootId, count = 3) {
    const root = document.getElementById(rootId);
    if (!root) return;
    root.innerHTML = testimonials[currentLang].slice(0, count).map(item => `
        <article class="testimonial-card reveal">
            <p>${item.text}</p>
            <footer>— ${item.author}</footer>
        </article>
    `).join("");
}

function renderQuotes() {
    const root = document.getElementById("student-quotes");
    if (!root) return;
    root.innerHTML = testimonials[currentLang].slice(0, 4).map(item => `
        <article class="quote-card reveal">
            <p>${item.text}</p>
            <footer>— ${item.author}</footer>
        </article>
    `).join("");
}

function renderFeedbackNotes() {
    const root = document.getElementById("feedback-notes");
    if (!root) return;
    root.innerHTML = feedbackNotes[currentLang].map(item => `
        <article class="quote-card reveal">
            <p>${item.text}</p>
        </article>
    `).join("");
}

function renderCurriculum(rootId, courseKey) {
    const root = document.getElementById(rootId);
    if (!root) return;
    root.innerHTML = curriculum[courseKey][currentLang].map(item => `
        <article class="curriculum-item reveal">
            <div class="curriculum-index">${item[0]}</div>
            <div>
                <strong>${item[1]}</strong>
                <p>${item[2]}</p>
            </div>
        </article>
    `).join("");
}

function renderPricing(rootId, courseKey) {
    const root = document.getElementById(rootId);
    if (!root) return;
    root.innerHTML = pricing[courseKey][currentLang].map(plan => `
        <article class="pricing-card reveal ${plan.recommended ? "is-recommended" : ""}">
            ${plan.recommended ? `<span class="pricing-badge">${t("courses.shared.recommended")}</span>` : ""}
            <strong>${plan.name}</strong>
            <div class="price-value">${plan.price}</div>
            <ul>
                ${plan.features.map(feature => `<li>${feature}</li>`).join("")}
            </ul>
            <button class="btn btn-primary js-open-application" type="button" data-course="${courseKey}" data-plan="${plan.id}">${t("actions.startLearning")}</button>
        </article>
    `).join("");
}

function renderFaq() {
    const root = document.getElementById("faq-list");
    if (!root) return;
    root.innerHTML = faqData[currentLang].map(item => `
        <details class="faq-item reveal">
            <summary>${item[0]}</summary>
            <p>${item[1]}</p>
        </details>
    `).join("");
}

function renderValues() {
    const root = document.getElementById("value-grid");
    if (!root) return;
    root.innerHTML = valueCards[currentLang].map(item => `
        <article class="value-card reveal">
            <strong>${item.title}</strong>
            <p>${item.text}</p>
        </article>
    `).join("");
}

function observeReveals() {
    const items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
        items.forEach(item => item.classList.add("is-visible"));
        return;
    }
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.16 });
    items.forEach(item => observer.observe(item));
}

function renderPage() {
    renderNav();
    renderTranslatedText();
    renderHeroChips();
    renderProofCards();
    renderFeatureCards();
    renderCoursePreview();
    renderJourney("journey-grid");
    renderJourney("about-journey");
    renderStudentCards("home-students-grid", 4);
    renderStudentCards("students-page-grid");
    renderTestimonials("testimonial-track", 3);
    renderQuotes();
    renderFeedbackNotes();
    renderCurriculum("python-curriculum", "python");
    renderCurriculum("frontend-curriculum", "frontend");
    renderPricing("python-pricing", "python");
    renderPricing("frontend-pricing", "frontend");
    renderFaq();
    renderValues();
    renderFooter();
    renderModal();
    observeReveals();
    initStudentVideoAutoplay();
}

document.addEventListener("DOMContentLoaded", renderPage);
