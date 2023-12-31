import { answerTypes } from './answerTypes';

export const resultTypes = {
    [answerTypes.Sales]: {
        type: answerTypes.Sales,
        label: 'Продажи и развитие бизнеса',
        positions: [
            {
                label: 'Аккаунт-менеджмент/продажи в канале E-commerce',
                description: 'На этой позиции ты будешь отвечать за продажу продукции' +
                    ' PepsiCo на маркетплейсах и в сервисах доставки.',
            },
            {
                label: 'Развитие бизнеса и продажи в канале Away from Home',
                description: 'На этой позиции ты будешь развивать отношения ' +
                    'с текущими клиентами, завоевывать новых и внедрять диджитал инструменты для увеличения продаж.'
            },
            {
                label: 'Развитие бизнеса и управление категориями',
                description: 'На этой позиции ты будешь анализировать данные по продажам, ' +
                    'поддерживать запуск новинок, создавать selling story.'
            }
        ]
    },
    [answerTypes.Marketing]: {
        type: answerTypes.Marketing,
        label: 'Маркетинг и продвижение',
        positions: [
            {
                label: 'Бренд-маркетинг',
                description: 'На этой позиции ты будешь работать над развитием ' +
                    'любимых брендов: от разработки новых вкусов, дизайнов и ' +
                    'стратегии продвижения до анализа их финансовых показателей.',
            },
            {
                label: 'Продвижение и активации в E-commerce',
                description: 'На этой позиции ты будешь работать над увеличением ' +
                    'продаж брендов в  онлайне с помощью продвижения и цифрового мерчендайзинга.'
            }
        ]
    },
    [answerTypes.Analytics]: {
        type: answerTypes.Analytics,
        label: 'Аналитика и стратегия',
        positions: [
            {
                label: 'Категорийный менеджмент в электронной коммерции',
                description: 'На этой позиции ты будешь на основе Аналитики 360 ' +
                    'работать над стратегией продаж и продвижения продуктов PepsiCo в онлайн-пространстве.',
            },
            {
                label: 'Исследования рынка и потребителей',
                description: 'На этой позиции ты будешь исследовать рынок, конкурентов, внешнюю ' +
                    'среду и предпочтения аудитории, чтобы находить инсайты для роста компании.'
            },
            {
                label: 'Аналитика продаж',
                description: 'Ты будешь анализировать динамику продаж, ставить ' +
                    'KPI по плану продаж для торговых команд и находить возможности для роста выручки.'
            },
            {
                label: 'Стратегическое управление выручкой',
                description: 'На этой позиции ты будешь разрабатывать ' +
                    'решения по управлению выручкой и работать с архитектурой цен и ассортимента.'
            },
            {
                label: 'Стратегия',
                description: 'На этой позиции ты будешь помогать внедрять стратегию в молочном бизнесе ' +
                    'PepsiCo: анализировать бизнес-процессы, разрабатывать планы и инструменты управления проектами.'
            }
        ]
    },
    [answerTypes.Production]: {
        type: answerTypes.Production,
        label: 'Производство, пищевые технологии и безопасность',
        positions: [
            {
                label: 'Технология и поддержка производства, Молочная продукция',
                description: 'На этой позиции ты будешь оптимизировать все этапы и технологию производства, ' +
                    'вести технологическую отчетность и поддерживать запуск новых продуктов.'
            },
            {
                label: 'Исследования и разработка продуктов.',
                description: 'На этой позиции ты будешь разрабатывать новые вкусы и рецепты напитков, ' +
                    'организовывать дегустации и оформлять документацию для производства.'
            },
            {
                label: 'Нормативно-техническое регулирование продукции (Regulatory)',
                description: 'На этой позиции ты будешь контролировать соответствие продукции PepsiCo ' +
                    'государственным требованиям и обеспечивать ее сертифцикацией для выхода на рынок.',
            },
            {
                label: 'Управление АСУТП',
                description: 'На этой позиции ты будешь обеспечивать ' +
                    'надежность оборудования, а также автоматизацию и бесперебойность работы производства.'
            },
            {
                label: 'Охрана труда и экологическая безопасность',
                description: 'На этой позиции ты будешь отвечать за безопасность ' +
                    'сотрудников и производства, а также развитие культуры безопасности.'
            }
        ]
    },
    [answerTypes.Logic]: {
        type: answerTypes.Logic,
        label: 'Логистика и цепи поставок',
        positions: [
            {
                label: 'Клиентский сервис в цепях поставок',
                description: 'На этой позиции ты будешь развивать клиентский ' +
                    'сервис для партнеров, обеспечивая своевременность доставок и наличие продуктов на полках.',
            },
            {
                label: 'Планирование производства',
                description: 'На этой позиции ты будешь формировать планы производства на основе прогнозов ' +
                    'и аналитики, а также поддерживать запуски продуктов и планировать их объемы.'
            },
            {
                label: 'Логистика',
                description: 'На этой позиции ты будешь изучать функционал доставки и ' +
                    'специфику складов, контролировать сбор и отгрузку продукции и работать с автопарком.'
            }
        ]
    },
    [answerTypes.HR]: {
        type: answerTypes.HR,
        label: 'HR',
        positions: [
            {
                label: '',
                description: 'На этой позиции ты будешь отвечать за поддержку ключевых ' +
                    'HR-процессов и участвовать в проектах по орагнизационным изменениям, ' +
                    'развитию и вовлечению сотрудников.',
            },
        ]
    },

}