const movieItems = [
    {
        id: 0,
        urlImg: '/images/movie-items/item1.jpg',
        name: 'Мульт в кино. Выпуск №103. Некогда грустить!',
        genre: 'Комедия',
    },
    {
        id: 1,
        urlImg: '/images/movie-items/batman.jpg',
        name: 'Новый Бэтмен',
        description: 'Бэтмен-человек летучая мышь, вымышленный герой, персонаж вселенной DC. Первое его появление было в Detective Comics №27 в 1939м году в мае, практически одновременно с Суперменом, с того самого времени они и идут бок о бок! Бэтмен был создан художником Бобом Кейном совместно с писателем Биллом Фингером'
    },
    {
        id: 2,
        urlImg: '/images/movie-items/holliwood.jpg',
        name: 'Однажды... в Голливуде',
        country: 'США, Германия',
        genre: 'Комедия',
        description: 'Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии.'
    },
    {
        id: 3,
        urlImg: '/images/movie-items/striptizershi.jpg',
        name: 'Стриптизёрши'
    },
    {
        id: 4,
        urlImg: '/images/movie-items/item1.jpg',
        name: 'Мульт в кино. Выпуск №103. Некогда грустить!'
    },
    {
        id: 5,
        urlImg: '/images/movie-items/batman.jpg',
        name: 'Новый Бэтмен'
    },
    {
        id: 6,
        urlImg: '/images/movie-items/holliwood.jpg',
        name: 'Однажды... в Голливуде'
    },
    {
        id: 7,
        urlImg: '/images/movie-items/striptizershi.jpg',
        name: 'Стриптизёрши'
    },
];
const channelItems = [
    {
        id: 0,
        img: '/images/tv/first_channel.jpg',
        name: '1 канал',
        listProgramms: [
            {
                id: 0,
                time: '13:00',
                name: 'Новости (с субтитрами)'
            },
            {
                id: 1,
                time: '14:00',
                name: 'Давай поженимся'
            },
            {
                id: 2,
                time: '15:00',
                name: 'Другие новости'
            },
        ]
    },
    {
        id: 1,
        img: '/images/tv/2x2.jpg',
        name: '2x2',
        listProgramms: [
            {
                id: 3,
                time: '13:00',
                name: 'МУЛЬТ ТВ. Сезон 4, 7 серия'
            },
            {
                id: 4,
                time: '14:00',
                name: 'ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия'
            },
            {
                id: 5,
                time: '15:00',
                name: 'БУРДАШЕВ. Сезон 1, 20 серия'
            },
        ]
    },
    {
        id: 2,
        img: '/images/tv/rbc.jpg',
        name: 'РБК',
        listProgramms: [
            {
                id: 6,
                time: '13:00',
                name: 'ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЗС'
            },
            {
                id: 7,
                time: '14:00',
                name: 'ДЕНЬ. Главные темы'
            },
            {
                id: 8,
                time: '15:00',
                name: 'Главные новости'
            },
        ]
    },
    {
        id: 3,
        img: '/images/tv/amedia.jpg',
        name: 'AMEDIA PREMIUM',
        listProgramms: [
            {
                id: 9,
                time: '13:00',
                name: 'Клиент всегда мёртв'
            },
            {
                id: 10,
                time: '14:00',
                name: 'Голодные игры: Сойка-пересмешница. Часть I'
            },
            {
                id: 11,
                time: '15:00',
                name: 'Секс в большом городе'
            },
        ]
    }
];
const genreItems = [
    {
        id: 0,
        name: "Комедии",
        gradient: {
            from: '#F2C94C',
            to: '#F29A4A',
        },
        imgPath: '/icons/icon1.png'
    },
    {
        id: 1,
        name: "Драмы",
        gradient: {
            from: '#F2994A',
            to: '#EB5757',
        },
        imgPath: '/icons/icon2.png'
    },
    {
        id: 2,
        name: "Фантастика",
        gradient: {
            from: '#56CCF2',
            to: '#2F80ED',
        },
        imgPath: '/icons/icon3.png'
    },
    {
        id: 3,
        name: "Ужасы",
        gradient: {
            from: '#828282',
            to: '#333333',
        },
        imgPath: '/icons/icon4.png'
    }
];

export {movieItems, channelItems, genreItems};

