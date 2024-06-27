### Приложение для поиска фильмов

**Цель**: Создать приложение для поиска фильмов, которое позволяет пользователям искать фильмы и отображать их подробную информацию. Пользователи могут просматривать список фильмов по своему запросу, нажимать на фильм, чтобы увидеть подробную информацию, и сохранять свои любимые фильмы для легкого доступа.

### Основные функции

1. **Поиск фильмов**: Пользователи могут искать фильмы, вводя запрос.
2. **Список фильмов**: Отображение списка фильмов на основе запроса.
3. **Подробности о фильме**: Просмотр подробной информации о выбранном фильме.
4. **Избранные фильмы**: Сохранение фильмов в список избранных и просмотр их позже.

### Инструменты и библиотеки

-   **React**: Основной фреймворк для создания приложения.
-   **Fetch**: Для выполнения API-запросов для получения данных о фильмах.
-   **React Router**: Для навигации между списком фильмов и подробным описанием.
-   **CSS**: Для стилизации приложения.
-   **localStorage**: Для сохранения избранных фильмов.

### Задачи и учебные цели

#### Задача 1: Настройка проекта на React

-   **Учебные цели**: Понимание настройки и структуры проекта.
-   **Подробности**:
    -   Используйте Create React App для инициализации проекта.
    -   Настройте базовую структуру проекта с папками components и assets.

#### Задача 2: Создание компонента строки поиска

-   **Учебные цели**: Работа с формами и состоянием.
-   **Подробности**:
    -   Создайте компонент `SearchBar`.
    -   Используйте `useState` для управления состоянием ввода.
    -   Обработайте отправку формы для запуска поиска фильмов.

#### Задача 3: Получение фильмов из API

-   **Учебные цели**: Получение данных и работа с асинхронными операциями.
-   **Подробности**:
    -   Используйте KINOPOISK API `https://kinopoiskapiunofficial.tech` для получения данных о фильмах на основе запроса.
    -   Используйте нативный `fetch` для выполнения HTTP-запросов.
    -   Обработайте состояния загрузки и ошибок.

#### Задача 4: Отображение списка фильмов

-   **Учебные цели**: Отрисовка списков и условная отрисовка.
-   **Подробности**:
    -   Создайте компонент `MovieList` для отображения списка фильмов.
    -   Пройдитесь по полученным данным о фильмах и отрендерите компонент `MovieCard` для каждого фильма.

#### Задача 5: Реализация просмотра деталей фильма

-   **Учебные цели**: Использование React Router для навигации.
-   **Подробности**:
    -   Настройте React Router для навигации между списком фильмов и страницей с деталями о фильме.
    -   Создайте компонент `MovieDetails` для отображения подробной информации о выбранном фильме.
    -   Передайте ID фильма как параметр маршрута и получите подробную информацию на основе этого ID.

#### Задача 6: Добавление функции избранных фильмов

-   **Учебные цели**: Управление состоянием и localStorage.
-   **Подробности**:
    -   Позвольте пользователям добавлять фильмы в список избранных.
    -   Используйте localStorage для сохранения избранных фильмов.
    -   Создайте компонент `Favorites` для отображения списка избранных фильмов.

#### Задача 7: Стилизация приложения

-   **Учебные цели**: Применение CSS и улучшение UI/UX.
-   **Подробности**:
    -   Используйте CSS или библиотеку CSS-in-JS для стилизации компонентов.
    -   Убедитесь, что приложение адаптируется к разным размерам экранов.

#### Задача 8: Оптимизация производительности

-   **Учебные цели**: Оптимизация приложений на React.
-   **Подробности**:
    -   Реализуйте дебаунсинг в строке поиска для уменьшения количества API-запросов.
    -   Используйте `React.memo` для предотвращения ненужных перерисовок.

### План реализации проекта

1. **Инициализация проекта**

    - Настройте проект с помощью Create React App.
    - Установите необходимые зависимости (`axios`, `react-router-dom` и т.д.).

2. **Компонент строки поиска**

    - Создайте компонент `SearchBar`.
    - Реализуйте управление состоянием ввода и обработку отправки формы.

3. **Получение фильмов**

    - Настройте API-ключ и базовый URL для API фильмов.
    - Реализуйте API-запрос в основном компоненте для получения фильмов на основе запроса.

4. **Отображение списка фильмов**

    - Создайте компоненты `MovieList` и `MovieCard`.
    - Отрендерите карточки фильмов на основе полученных данных.

5. **Просмотр деталей фильма**

    - Настройте React Router.
    - Создайте компонент `MovieDetails` для получения и отображения подробной информации о фильме.

6. **Функция избранных фильмов**

    - Реализуйте функциональность добавления и удаления фильмов из избранных.
    - Используйте localStorage для сохранения избранных фильмов.
    - Создайте компонент `Favorites` для отображения списка избранных фильмов.

7. **Стилизация**

    - Стилизуйте приложение с помощью CSS или библиотеки CSS-in-JS.
    - Обеспечьте адаптивный дизайн для различных размеров экранов.

8. **Оптимизация производительности**
    - Реализуйте дебаунсинг в строке поиска.
    - Используйте `React.memo` и другие методы оптимизации для улучшения производительности.

9. **Отправить на гитхаб**
    - Отправить на гитхаб и использовать github pages
