import { answerTypes } from './answerTypes';

export const QUESTIONS_AMOUNT = 5;
export const questions = [
    {
        id: '0',
        text: 'Самое важное и ответственное в начале любого пути — первый шаг. ' +
            'Как и Хогвартс, PepsiCo вмещает в себя огромное количество возможностей! ' +
            'В таком разнообразии важно не только знать, к чему хочешь прийти, но и понимать, ' +
            'с чего стоит начать.\nИтак, каким будет твой первый шаг?',
        pointsAmount: 1,
        answers: [
            {
                id: 0,
                text: 'Предложу модернизацию айдентики любимого продукта, ' +
                    'чтобы показать, что попал в PepsiCo неслучайно!',
                points: [answerTypes.Sales, answerTypes.Analytics, answerTypes.Marketing],
            },
            {
                id: 1,
                text: 'Изучу процесс производства любимых брендов, ' +
                    'чтобы определить, что можно улучшить или автоматизировать',
                points: [answerTypes.Production],
            },
            {
                id: 2,
                text: 'Займусь маршрутизацией поставок линеек продуктов в новые города, ' +
                    'чтобы помогать компании расширяться!',
                points: [answerTypes.Logic],
            },
            {
                id: 3,
                text: 'Предложу организационные изменения, чтобы сделать корпоративную культуру еще более эффективной!',
                points: [answerTypes.HR],
            },
        ]
    },
    {
        id: '1',
        text: 'Гиппогриф — существо, которое могут приручить только настоящие специалисты. ' +
            'Не пугайся, самих гиппогрифов в PepsiCo ещё не видели. Но здесь точно знают, ' +
            'что такой же трепетный и профессиональный подход нужен для выполнения задач, ' +
            'а в случае трудностей в течение стажировки рядом будет опытный бадди, готовый ' +
            'подсказать. А с чем из этого ты можешь справиться лучше всего без сторонней помощи?',
        pointsAmount: 1,
        answers: [
            {
                id: 0,
                text: 'С анализом данных о покупателях и составлением  планов продаж',
                points: [answerTypes.Sales, answerTypes.Analytics, answerTypes.Marketing],
            },
            {
                id: 1,
                text: 'С идентификацией узких мест в технологиях и безопасности производства',
                points: [answerTypes.Production]
            },
            {
                id: 2,
                text: 'С контролем своевременности прибытия транспорта и полноты клиентских заказов',
                points: [answerTypes.Logic],
            },
            {
                id: 3,
                text: 'С организацией обучения и развития персонала',
                points: [answerTypes.HR],
            },
        ]
    },
    {
        id: '2',
        text: 'История PespiCo хранит в себе много интересных событий. В период обучения на ' +
            'онбординге все стараются узнать максимум информации, но даже после красочных ' +
            'историй хочется вживую увидеть события, повлиявшие на развитие компании. ' +
            'Представь, что у тебя в руках оказался маховик времени. Куда ты обязательно отправишься?',
        pointsAmount: 3,
        answers: [
            {
                id: 0,
                text: 'Хочу увидеть, как проходили переговоры с первым клиентом, ' +
                    'с которым был заключен договор на поставку. Там можно узнать много интересного',
                points: [answerTypes.Sales, answerTypes.Analytics, answerTypes.Marketing],
            },
            {
                id: 1,
                text: 'Хочу побывать на тестировании первого продукта PepsiCo и ' +
                    'поучаствовать в подборе идеальной рецептуры!',
                points: [answerTypes.Production]
            },
            {
                id: 2,
                text: 'Хочу увидеть, в какие магазины и по каким маршрутам доставляли первые напитки компании!',
                points: [answerTypes.Logic],
            },
            {
                id: 3,
                text: 'Хочу побывать на самом первом обучении сотрудников PepsiCo, ' +
                    'чтобы узнать, как создавались корпоративные ценности и традиции',
                points: [answerTypes.HR],
            },
        ]
    },
    {
        id: `${answerTypes.Analytics}-0`,
        text: 'Заклинания правды — страшная вещь, особенно когда рекрутер спрашивает тебя о твоём будущем... ' +
            'Через год стажировки ты можешь услышать вопрос о том, как ты видишь свое развитие в компании. ' +
            'Как ты ответишь на него?',
        pointsAmount: 5,
        answers: [
            {
                id: 0,
                text: 'Я буду с легкостью находить возможности роста на ' +
                    'переговорах с новыми клиентами, чтобы заключать взаимовыгодные контракты',
                points: [answerTypes.Marketing, answerTypes.Sales]
            },
            {
                id: 1,
                text: 'Я хочу научиться разрабатывать дизайн и упаковку так, ' +
                    'чтобы наши продукты всегда были в тренде и достигали KPI по продажам',
                points: [answerTypes.Marketing, answerTypes.Sales]
            },
            {
                id: 2,
                text: 'За год стажировки изучу данные за последние годы настолько, что с молниеносной ' +
                    'скоростью смогу давать рекомендации по скидкам в торговых точках для максимизации прибыли',
                points: [answerTypes.Analytics]
            },
            {
                id: 3,
                text: 'За год стажировки изучу данные за последние годы настолько, что с молниеносной ' +
                    'скоростью смогу давать рекомендации по скидкам в торговых точках для максимизации прибыли',
                points: [answerTypes.Analytics]
            },
        ]
    },
    {
        id: `${answerTypes.Sales}-0`,
        text: 'Заклинания правды — страшная вещь, особенно когда рекрутер спрашивает тебя о твоём будущем... ' +
            'Через год стажировки ты можешь услышать вопрос о том, как ты видишь свое развитие в компании. ' +
            'Как ты ответишь на него?',
        pointsAmount: 5,
        answers: [
            {
                id: 0,
                text: 'Я буду с легкостью находить возможности роста на ' +
                    'переговорах с новыми клиентами, чтобы заключать взаимовыгодные контракты',
                points: [answerTypes.Marketing, answerTypes.Sales]
            },
            {
                id: 1,
                text: 'Я хочу научиться разрабатывать дизайн и упаковку так, ' +
                    'чтобы наши продукты всегда были в тренде и достигали KPI по продажам',
                points: [answerTypes.Marketing, answerTypes.Sales]
            },
            {
                id: 2,
                text: 'За год стажировки изучу данные за последние годы настолько, что с молниеносной ' +
                    'скоростью смогу давать рекомендации по скидкам в торговых точках для максимизации прибыли',
                points: [answerTypes.Analytics]
            },
            {
                id: 3,
                text: 'За год стажировки изучу данные за последние годы настолько, что с молниеносной ' +
                    'скоростью смогу давать рекомендации по скидкам в торговых точках для максимизации прибыли',
                points: [answerTypes.Analytics]
            },
        ]
    },
    {
        id: `${answerTypes.Marketing}-0`,
        text: 'Заклинания правды — страшная вещь, особенно когда рекрутер спрашивает тебя о твоём будущем... ' +
            'Через год стажировки ты можешь услышать вопрос о том, как ты видишь свое развитие в компании. ' +
            'Как ты ответишь на него?',
        pointsAmount: 5,
        answers: [
            {
                id: 0,
                text: 'Я буду с легкостью находить возможности роста на ' +
                    'переговорах с новыми клиентами, чтобы заключать взаимовыгодные контракты',
                points: [answerTypes.Marketing, answerTypes.Sales]
            },
            {
                id: 1,
                text: 'Я хочу научиться разрабатывать дизайн и упаковку так, ' +
                    'чтобы наши продукты всегда были в тренде и достигали KPI по продажам',
                points: [answerTypes.Marketing, answerTypes.Sales]
            },
            {
                id: 2,
                text: 'За год стажировки изучу данные за последние годы настолько, что с молниеносной ' +
                    'скоростью смогу давать рекомендации по скидкам в торговых точках для максимизации прибыли',
                points: [answerTypes.Analytics]
            },
            {
                id: 3,
                text: 'За год стажировки изучу данные за последние годы настолько, что с молниеносной ' +
                    'скоростью смогу давать рекомендации по скидкам в торговых точках для максимизации прибыли',
                points: [answerTypes.Analytics]
            },
        ]
    },
    {
        id: `${answerTypes.Analytics}-1`,
        text: 'В PepsiCo тебя никогда не бросят с незнакомой задачей — бадди обязательно ' +
            'поможет тебе разобраться и усвоить информацию. В этом он похож на выручай-комнату: ' +
            'знает ответ на любой твой вопрос и пришлет наглядное пояснение к самой сложной задаче. ' +
            'А с какой задачей ты вероятнее всего справишься и без помощи наставника?',
        pointsAmount: 1,
        answers: [
            {
                id: 0,
                text: 'С созданием формул для подсчета прибыльности в период скидок',
                points: [answerTypes.Analytics]
            },
            {
                id: 1,
                text: 'С созданием наглядных презентаций по достижению KPI в торговых точках',
                points: [answerTypes.Analytics]
            },
            {
                id: 2,
                text: 'Со сбором информации от других отделов — я отличный коммуникатор!',
                points: [answerTypes.Analytics]
            }
        ]
    },
    {
        id: `${answerTypes.Sales}-1`,
        text: 'В PepsiCo тебя никогда не бросят с незнакомой задачей — бадди обязательно ' +
            'поможет тебе разобраться и усвоить информацию. В этом он похож на выручай-комнату: ' +
            'знает ответ на любой твой вопрос и пришлет наглядное пояснение к самой сложной задаче. ' +
            'А с какой задачей ты вероятнее всего справишься и без помощи наставника?',
        pointsAmount: 1,
        answers: [
            {
                id: 0,
                text: 'С составлением картинки идеальной выкладки нашего продукта на полке магазина',
                points: [answerTypes.Sales]
            },
            {
                id: 1,
                text: 'С апдейтом анализа конкурентов, очень люблю следить за новинками рынка!',
                points: [answerTypes.Marketing]
            },
            {
                id: 2,
                text: 'С созданием рекомендаций по цепляющему описанию наших продуктов в ' +
                    'сервисах доставки — так их точно захотят купить!',
                points: [answerTypes.Marketing]
            }
        ]
    },
    {
        id: `${answerTypes.Marketing}-1`,
        text: 'В PepsiCo тебя никогда не бросят с незнакомой задачей — бадди обязательно ' +
            'поможет тебе разобраться и усвоить информацию. В этом он похож на выручай-комнату: ' +
            'знает ответ на любой твой вопрос и пришлет наглядное пояснение к самой сложной задаче. ' +
            'А с какой задачей ты вероятнее всего справишься и без помощи наставника?',
        pointsAmount: 1,
        answers: [
            {
                id: 0,
                text: 'С составлением картинки идеальной выкладки нашего продукта на полке магазина',
                points: [answerTypes.Sales]
            },
            {
                id: 1,
                text: 'С апдейтом анализа конкурентов, очень люблю следить за новинками рынка!',
                points: [answerTypes.Marketing]
            },
            {
                id: 2,
                text: 'С созданием рекомендаций по цепляющему описанию наших продуктов в ' +
                    'сервисах доставки — так их точно захотят купить!',
                points: [answerTypes.Marketing]
            }
        ]
    },
    {
        id: `${answerTypes.Production}-0`,
        text: 'На стажировке PepsiCo есть направления на любой вкус. Это отличная ' +
            'возможность найти друзей из разных отделов, ведь именно так получается настоящее ' +
            'волшебство! А чем в PepsiCo будут заниматься твои лучшие друзья?',
        pointsAmount: 0,
        answers: [
            {
                id: 0,
                text: 'Будут заниматься настройкой и программированием производсвтенного оборудования',
                points: [answerTypes.Production]
            },
            {
                id: 1,
                text: 'Будут проводить инструктажи по охране труда',
                points: [answerTypes.Production]
            },
            {
                id: 2,
                text: 'Будут искать новые способы упаковки, чтобы наши продукты хранились еще дольше',
                points: [answerTypes.Production]
            },
            {
                id: 3,
                text: 'Будут взаимодействовать с органами власти по вопросам качества продукции',
                points: [answerTypes.Production]
            }
        ]
    },
    {
        id: `${answerTypes.Production}-1`,
        text: 'В Хогвартсе каждый колдует по-своему: кто-то палочкой, кто-то руками, ' +
            'а кто-то одним лишь заклинанием. В PepsiCo тоже ценят уникальность специалистов, ' +
            'ведь именно благодаря ей появляются команды таких разных настоящих профессионалов ' +
            'по всей России. А как ты будешь колдовать?',
        pointsAmount: 0,
        answers: [
            {
                id: 0,
                text: 'Настрою все оборудование и процессы так, что не останется ни капли отходов',
                points: [answerTypes.Production]
            },
            {
                id: 1,
                text: 'Буду следить за экологической обстановкой и соблюдением норм труда',
                points: [answerTypes.Production]
            },
            {
                id: 2,
                text: 'Буду разрабатывать новые рецептуры продуктов и улучшать уже существующие',
                points: [answerTypes.Production]
            }
        ]
    },
    {
        id: `${answerTypes.Logic}-0`,
        text: 'Даже в волшебном мире есть запретные леса. Говорят, ' +
            'в них легко забыть обо всем на свете и потеряться. Напоминает любимое дело, ' +
            'не правда ли? Кстати, в PepsiCo постоянно проводят тренинги и лекции, ' +
            'чтобы сотрудники могли повышать свою экспертность и быть в курсе последних ' +
            'изменений рынка.Что для тебя звучит настолько интересно, чтобы нырнуть в тему с головой?',
        pointsAmount: 0,
        answers: [
            {
                id: 0,
                text: 'Настривать систему учета, чтобы на складах все было на месте и ничего не потерялось',
                points: [answerTypes.Logic]
            },
            {
                id: 1,
                text: 'Настраивать системы прогнозирования, чтобы наши клиенты получили нужное количество продукции',
                points: [answerTypes.Logic]
            },
            {
                id: 2,
                text: 'Выстраивать партнерские отношения с торговыми сетями',
                points: [answerTypes.Logic]
            }
        ]
    },
    {
        id: `${answerTypes.Logic}-1`,
        text: 'В PepsiCo тебя никогда не бросят с незнакомой задачей — бадди обязательно поможет тебе разобраться ' +
            'и усвоить информацию. В этом он похож на выручай-комнату: знает ответ на любой твой вопрос и пришлет ' +
            'наглядное пояснение к самой сложной задаче. А с какой задачей ты вероятнее всего справишься и без ' +
            'помощи наставника?',
        pointsAmount: 0,
        answers: [
            {
                id: 0,
                text: 'У меня отлично развиты навыки коммуникации, поэтому я точно справлюсь с подбором ' +
                    'идеальных кандидатов под открытые вакансии',
                points: [answerTypes.Logic]
            },
            {
                id: 1,
                text: 'Я легко осваиваю новые приложения, поэтому электронный документооборот — моя стихия',
                points: [answerTypes.Logic]
            },
            {
                id: 2,
                text: 'У меня аналитический склад ума! Я точно справлюсь с анализом информации об ' +
                    'объемах продаж и производства',
                points: [answerTypes.Logic]
            }
        ]
    },
    {
        id: `${answerTypes.HR}-0`,
        text: 'Даже в волшебном мире есть запретные леса. Говорят, в них легко забыть обо ' +
            'всем на свете и потеряться. Напоминает любимое дело, не правда ли? Кстати, в ' +
            'PepsiCo постоянно проводят тренинги и лекции, чтобы сотрудники могли повышать ' +
            'свою экспертность и быть в курсе последних изменений рынка.Что для тебя звучит ' +
            'настолько интересно, чтобы нырнуть в тему с головой?',
        pointsAmount: 0,
        answers: [
            {
                id: 0,
                text: 'Искать таланты среди сотрудников и мотивировать их на развитие в компании',
                points: [answerTypes.HR]
            },
            {
                id: 1,
                text: 'Анализировать расходы на персонал и работать с бюджетом на следующий год',
                points: [answerTypes.HR]
            },
            {
                id: 2,
                text: 'Управлять трудовыми кейсами',
                points: [answerTypes.HR]
            }
        ]
    },
    {
        id: `${answerTypes.HR}-1`,
        text: 'В PepsiCo тебя никогда не бросят с незнакомой задачей — бадди обязательно ' +
            'поможет тебе разобраться и усвоить информацию. В этом он похож на выручай-комнату: ' +
            'знает ответ на любой твой вопрос и пришлет наглядное пояснение к самой сложной задаче. ' +
            'А с какой задачей ты вероятнее всего справишься и без помощи наставника?',
        answers: [
            {
                id: 0,
                text: 'У меня отлично развиты навыки коммуникации, поэтому я легко проведу вдохновляющий тренинг ' +
                    'по культуре и ценностям для сотрудников',
                points: [answerTypes.HR]
            },
            {
                id: 1,
                text: 'Я легко осваиваю новые приложения, поэтому электронный документооборот — моя стихия',
                points: [answerTypes.HR]
            },
            {
                id: 2,
                text: 'У меня структурное мышление, поэтому я с легкостью справляюсь с ' +
                    'составлением организационных структур нового отдела',
                points: [answerTypes.HR]
            }
        ]
    }
];