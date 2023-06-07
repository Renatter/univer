import {
    createApp
} from 'vue'

import './style.css'
import App from './App.vue'
import router from './router/router'
import {
    createI18n
} from 'vue-i18n'
const i18n = createI18n({
    locale: 'ru',
    fallbackLocale: 'kz',
    messages: {
        ru: {
            header: {
                headerText: 'Традиция, успех, качество',
                login: 'Войти',
                reg: 'Регистрация',
                profil: 'Профиль',
                hotel: 'Общежитие',
                book: 'Бронировать',
                card: 'Пропуск',
                complaint: 'Жалоба',
                adminList: 'Список',
                request: 'Запросы',
                leave: 'Выход'

            },
            reg: {
                login: "Авторизоваться",
                email: 'Почта',
                pas: 'Пароль',
                show: 'Показать',
                join: 'Войти',
                reg: 'Регистрируйтесь',
                FirstName: 'Иия',
                LastName: 'Фамилия',
                Paul: 'Пол',
                man: 'Муж',
                girl: 'Жен',
                Corpus: 'Корпус',
                have: 'У меня есть аккаунт',
                group: 'Группа'
            },
            profil: {
                paul: 'Пол',
                dateReg: 'Дата регистрации',
                phn: 'Номер телефона',
                savePht: 'Нажмите Сохранить',
                email: 'Эл. почта',
                corpus: 'Корпус',
                group: 'Группа',
                room: 'Комната',
                roomStatus: 'сделайте бронирование',
                roomBook: 'Сделать бронирование',
                save: 'Сохранить',
                addPht: 'Добавить фото',
                obsh: 'Общежитие',
                floor: 'Этаж',
                waitAdmin: ' Ожидание ответа от администрации',
                cancelPay: ' Отменить оплату',
                toBook: 'Сделать бронирование',
                tool: 'Редактировать'

            },
            book: {
                title: 'Выбор мест',
                obsh1: 'Общежитие №1',
                obsh2: 'Общежитие №2',
                obsh3: 'Общежитие №3',
                floor1: '1 этаж',
                floor2: '2 этаж',
                floor3: '3 этаж',
                floor4: '4 этаж',
                room: 'Комната',
                occupied: 'мест',
                have: 'Бронированно',
                name: 'Имя',
                lastName: 'Фамилия',
                group: 'Группа',
                spend: 'Отправить документы',
                pay: 'Оплататить'
            },
            ticket: {
                title: 'Создать пропуск',
                choise: 'Выберите шаблон пропуска',
                chos: 'Выбран',
                enter: 'Нажмите Создать пропуск',
                make: 'Создать пропуск',
                downl: 'Скачать пропуск',
                delete: 'Очистить',
                dostup: ' Страница доступна только для членов общежития'

            },
            complaint: {
                title: 'Жалоба',
                dostup: " Страница доступна только для членов общежития"
            },
            zapros: {
                title: 'Отправка документов',
                udostak: 'Удостоверение личности',
                flur: 'Флюорография',
                studCard: 'Студенческий билет',
                downl: 'Загрузить',
                clear: 'Очистить',
                openDoc: 'Открыть документ',
                deleteDoc: 'Удалить',
                alert: 'все документы загружены можете отправлять',
                sharedDoc: 'Отправить документы',
                Rejected: 'Отклонен',
                Reason: 'Причина',
                repeat: 'Повторить',
                success: 'Можете бронировать',
                book: 'Бронировать',
                wait: 'ждите ответа от администрации'
            },
            pay: {
                title: 'Место ',
                pau: 'Оплата'
            },
            searchUser: {
                title: 'Список студентов',
                seacbtn: 'Поиск',
                name: 'Имя',
                lastName: 'Фамилия',
                group: 'Группа',
                next: 'Следующий',
                back: 'Назад',
                allUser: 'Все студенты',

            },
            zapros: {
                next: 'Следующий',
                back: 'Назад',
                title: "Запросы",
                seacbtn: 'Поиск',
                allUser: 'Все студенты',
                open: 'Открыть',
                name: 'Имя',
                lastName: 'Фамилия',
                group: 'Группа',
                udastak: 'Удостоверение',
                flur: 'Флюорография',
                studCard: "Студ. билет",
                open: 'Открыть',
                acept: 'Принять',
                rejec: 'ОТКЛОНИТЬ',
                reason: 'Причина отклонения заявки',
                otemena: 'Отмена'


            },
            complaints: {
                seacbtn: 'Поиск',
                next: 'cледующий',
                back: 'Назад',
                allUser: 'Все студенты',
                name: 'Имя',
                lastName: 'Фамилия',
                group: 'Группа',
                title: 'Жалоба',
                look: 'Посмотреть',
                accept: 'Сделано',
                otemne: 'Отмена'
            }


        },
        kz: {
            header: {
                headerText: 'Дәстүр, сәттілік, сапа',
                login: 'Кіру',
                reg: 'Тіркеу',
                profil: 'Профиль',
                hotel: 'Жатақхана',
                book: 'Брондау',
                card: 'Билет',
                complaint: 'Шағым',
                adminList: 'Тізім',
                request: 'Сұраулар',
                leave: 'Шығу'
            },
            reg: {
                login: "Кіру",
                email: 'Пошта',
                pas: 'Құпия сөз',
                show: 'Көрсету',
                Corpus: 'Корпус',
                join: 'Кіру',
                reg: 'Тіркелу',
                FirstName: 'Аты',
                LastName: 'Тегі',
                Paul: 'Жынысы',
                man: 'Ер',
                girl: 'Кыз',
                have: 'Менің есептік жазбам бар',
                group: 'Топ'

            },
            profil: {
                paul: 'Жынысы',
                dateReg: 'Тіркелген күні',
                phn: 'Телефон нөмірі',
                email: 'Эл. почта',
                savePht: 'Сақтау Түймесін Басыңыз',
                corpus: 'Корпус',
                group: 'Топ',
                room: 'Бөлме',
                roomStatus: 'брондау жасаңыз',
                roomBook: 'Брондау жасаңыз',
                save: 'Сақтау',
                addPht: 'Фотосурет қосыңыз',
                obsh: 'Жатақхана',
                floor: 'Қабат',
                waitAdmin: ' Әкімшіліктен жауап күту',
                cancelPay: ' Төлемді болдырмау',
                toBook: 'Брондау жасау',
                tool: 'Өңдеу'

            },
            book: {
                title: 'Орындарды таңдау',
                obsh1: '№1 жатақхана',
                obsh2: '№2 жатақхана',
                obsh3: '№3 жатақхана',
                floor1: '1 қабат',
                floor2: '2 қабат',
                floor3: '3 қабат',
                floor4: '4 қабат',
                room: 'Бөлме',
                occupied: 'орыннан',
                have: 'Брондалған',
                name: 'Аты',
                lastName: 'Тегi',
                group: '    Тобы',
                spend: 'Құжаттарды жіберу',
                pay: 'Төлеу'



            },
            ticket: {
                title: 'Билет жасау',
                choise: 'Билет үлгісін таңдаңыз',
                chos: 'Таңдалған',
                enter: 'Билет жасау түймесін басыңыз',
                make: 'Билет жасау',
                downl: 'Билетті жүктеу',
                delete: 'Тазалау',
                dostup: ' Бет тек жатақхана мүшелері үшін қол жетімді'
            },
            complaint: {
                title: 'Шағым',
                dostup: "Бет тек жатақхана мүшелері үшін қол жетімді"
            },
            zapros: {
                title: 'Құжаттарды жіберу',
                udostak: 'Жеке куәлік',
                flur: 'Флюорография',
                studCard: 'Студенттік билет',
                downl: 'Жүктеу',
                clear: 'Тазалау',
                openDoc: 'Құжатты ашу',
                deleteDoc: 'Жою',
                alert: 'Барлық құжаттар жүктелген жіберуге болады',
                sharedDoc: 'Құжаттарды жіберу',
                Rejected: 'Қабылданбады',
                Reason: 'Себебі',
                repeat: 'Қайталау',
                success: 'Брондауға болады',
                book: 'Брондау',
                wait: 'Әкімшіліктен жауап күтіңіз'

            },
            pay: {
                title: 'Орын ',
                pau: 'Төлем'
            },
            searchUser: {
                title: 'Студенттер тізімі',
                seacbtn: 'Іздеу',
                name: 'Аты',
                lastName: 'Тегі',
                group: 'Топ',
                next: 'Келесi',
                back: 'Артқа',
                allUser: 'Барлық студенттер',

            },
            zapros: {
                next: 'Келесi',
                open: 'Ашу',
                back: 'Артқа',
                title: "Сұраулар",
                seacbtn: 'Іздеу',
                allUser: 'Барлық студенттер',
                name: 'Аты',
                lastName: 'Тегі',
                group: 'Топ',
                udastak: 'Куәлік',
                flur: 'Флюорография',
                studCard: "Студ. билет",
                open: 'Ашу',
                acept: 'Қабылдау',
                rejec: 'Бас тарту',
                reason: 'Өтінімді қабылдамау себебі',
                otemena: 'Артқа'

            },
            complaints: {
                seacbtn: 'Іздеу',
                next: 'Келесi',
                back: 'Артқа',
                allUser: 'Барлық студенттер',
                name: 'Аты',
                lastName: 'Тегi',
                group: 'Топ',
                title: 'Шағым',
                look: 'Көру',
                accept: 'Жасалды',
                otemne: 'Артқа'
            }

        },
    }
})

createApp(App).use(router).use(i18n).mount('#app')