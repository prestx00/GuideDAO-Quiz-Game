const questionsSol = [
    {
        questionText: 'Что такое ReactDOM?',
        answerOptions: [
            { answerText: 'Библиотека для написания мобильных приложений', isCorrect: false },
            { answerText: 'Фреймворк для связи реакта и DOM', isCorrect: false },
            { answerText: 'Библиотека-прослойка для связи реакта и DOM браузера', isCorrect: true },
            { answerText: 'Фреймворк для обслуживания мобильных приложений', isCorrect: false },
        ],
    },
    {
        questionText: 'JSX-элемент - это?',
        answerOptions: [
            { answerText: 'обычный объект', isCorrect: true },
            { answerText: 'массив данных', isCorrect: false },
            { answerText: 'переменная', isCorrect: false },
            { answerText: 'функция', isCorrect: false },
        ],
    },
    {
        questionText: 'Что такое пропсы?',
        answerOptions: [
            { answerText: 'массивы, которые передаются в функции ', isCorrect: false },
            { answerText: 'переменные', isCorrect: false },
            { answerText: 'объект, задаваемый компоненты в качестве аргумента', isCorrect: true },
            { answerText: 'объект, который передается функции в качестве контекста', isCorrect: false },
        ],
    },
    {
        questionText: 'Как правильно деструктурировать объект?',
        answerOptions: [
            { answerText: 'const [a, b] = x', isCorrect: false },
            { answerText: 'const {a, b} = x', isCorrect: true },
            { answerText: 'const "a, b" = x', isCorrect: false },
            { answerText: 'const _a, _b = x', isCorrect: false },
        ],
    },
    {
        questionText: 'Вызов useState() возвращает массив из двух элементов: текущее значение и ...?',
        answerOptions: [
            { answerText: 'функцию', isCorrect: true },
            { answerText: 'массив', isCorrect: false },
            { answerText: 'объект', isCorrect: false },
            { answerText: 'строку', isCorrect: false },
        ],
    },
    {
        questionText: 'Замыкание происходит, когда ...?',
        answerOptions: [
            { answerText: 'в переменной лежит объект', isCorrect: false },
            { answerText: 'функция содержит другую функцию', isCorrect: true },
            { answerText: 'объект содержит другой объект', isCorrect: false },
            { answerText: 'массив передается через пропсы в компонент', isCorrect: false },
        ],
    },
    {
        questionText: 'onClick должен использоваться только для .... для доступности',
        answerOptions: [
            { answerText: '<p>', isCorrect: false },
            { answerText: '<span>', isCorrect: false },
            { answerText: '<button>', isCorrect: true },
            { answerText: '<input>', isCorrect: false },
        ],
    },
    {
        questionText: 'Является ли помещение useState() в if-условия правильным решением?',
        answerOptions: [
            { answerText: 'да', isCorrect: false },
            { answerText: 'нет', isCorrect: true },
            { answerText: 'иногда можно', isCorrect: false },
            { answerText: 'можно, но если никто не увидит', isCorrect: false },
        ],
    },
    {
        questionText: '{} === {} вернет ...?',
        answerOptions: [
            { answerText: 'false', isCorrect: true },
            { answerText: 'true', isCorrect: false },
            { answerText: 'NaN', isCorrect: false },
            { answerText: 'undefined', isCorrect: false },
        ],
    },
    {
        questionText: 'Рефы - это ?',
        answerOptions: [
            { answerText: 'указатель на отрендеренный элемент DOM', isCorrect: true },
            { answerText: 'пример использования кода', isCorrect: false },
            { answerText: 'указатель на переменную', isCorrect: false },
            { answerText: 'один из методов массива', isCorrect: false },
        ],
    }
];

export default questionsSol;