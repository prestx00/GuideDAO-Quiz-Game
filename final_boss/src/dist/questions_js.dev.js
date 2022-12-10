"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var questionsJS = [{
  questionText: 'let text = "JavaScript"; console.log(text.length) выведет?',
  answerOptions: [{
    answerText: '10',
    isCorrect: true
  }, {
    answerText: '9',
    isCorrect: false
  }, {
    answerText: '11',
    isCorrect: false
  }, {
    answerText: '8',
    isCorrect: false
  }]
}, {
  questionText: '"GORE-TEX".substring(5) вернет?',
  answerOptions: [{
    answerText: 'TEX',
    isCorrect: true
  }, {
    answerText: '-TEX',
    isCorrect: false
  }, {
    answerText: 'GORE-',
    isCorrect: false
  }, {
    answerText: 'GORE-T',
    isCorrect: false
  }]
}, {
  questionText: 'Какой из этих методов массива возвращает новый массив, длина которого совпадает с исходным?',
  answerOptions: [{
    answerText: '.map()',
    isCorrect: true
  }, {
    answerText: '.include()',
    isCorrect: false
  }, {
    answerText: '.join()',
    isCorrect: false
  }, {
    answerText: '.find()',
    isCorrect: false
  }]
}, {
  questionText: 'function addOne(number = 0) {return number + 1}; Что будет, если вызвать без аргумента?',
  answerOptions: [{
    answerText: '1',
    isCorrect: true
  }, {
    answerText: 'NaN',
    isCorrect: false
  }, {
    answerText: '0',
    isCorrect: false
  }, {
    answerText: 'undefined',
    isCorrect: false
  }]
}, {
  questionText: 'const sum = (a, b) => {a + b}; sum(1,2) вернет?',
  answerOptions: [{
    answerText: 'undefined',
    isCorrect: true
  }, {
    answerText: '3',
    isCorrect: false
  }, {
    answerText: 'NaN',
    isCorrect: false
  }, {
    answerText: '0',
    isCorrect: false
  }]
}, {
  questionText: 'const name = "   Beeple Crap "; name.trim() вернет?',
  answerOptions: [{
    answerText: '"Beeple Crap"',
    isCorrect: true
  }, {
    answerText: '"eeple Crap"',
    isCorrect: false
  }, {
    answerText: '"Beeple Cra"',
    isCorrect: false
  }, {
    answerText: '"BeepleCrap"',
    isCorrect: false
  }]
}, {
  questionText: 'Что делает строчный метод .split(x)?',
  answerOptions: [{
    answerText: 'разбивает строку на элементы массива, используя разделитель из параметра для определения границ между элементами',
    isCorrect: true
  }, {
    answerText: 'заменяет только первый встреченный параметр x',
    isCorrect: false
  }, {
    answerText: 'заменяет все встреченные параметры на x',
    isCorrect: false
  }, {
    answerText: 'обрезает строку с первого параметра x',
    isCorrect: false
  }]
}, {
  questionText: 'Для преобразования массива в строку обычно нужна комбинация методов ...?',
  answerOptions: [{
    answerText: '.map() и .join()',
    isCorrect: true
  }, {
    answerText: '.map() и .include()',
    isCorrect: false
  }, {
    answerText: '.map() и .split()',
    isCorrect: false
  }, {
    answerText: '.map() и .replace()',
    isCorrect: false
  }]
}, {
  questionText: 'Чтобы прочитать динамическое свойство объекта нужно использовать ....... , обычный синтаксис с точкой не подойдет',
  answerOptions: [{
    answerText: 'квадратные скобки []',
    isCorrect: true
  }, {
    answerText: 'фигурные скобки {}',
    isCorrect: false
  }, {
    answerText: 'оператор нулевого слияния ??',
    isCorrect: false
  }, {
    answerText: 'спред оператор ...',
    isCorrect: false
  }]
}, {
  questionText: 'В классах ключевое слово super позволяет классу-наследнику ...?',
  answerOptions: [{
    answerText: 'стать super звездой',
    isCorrect: false
  }, {
    answerText: 'вызывать функции родительского класса',
    isCorrect: true
  }, {
    answerText: 'получить доступ ко всем переменным родительского класса',
    isCorrect: false
  }, {
    answerText: 'изменять данные в родительском классе',
    isCorrect: false
  }]
}];
var _default = questionsJS;
exports["default"] = _default;