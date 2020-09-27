"use strict";

const { default: ItemList } = require("./src/components/itemList");

//lesson7 общение с пользователеи

// alert('Hello'); предупреждение

// const result = confirm("Ты пидор?"); вопрос да/нет
// console.log(result);

// const answer = prompt("Сколько вам лет?", "18"); вопрос с инпутом и плейсхолдером
// console.log(answer);

// const answers = []; задаем массив
// answers[0] = prompt('Ваше имя?', ''); записывем данные в массив
// answers[1] = prompt('Ваша фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');
// document.write(answers); переписать html




// lesson 8 интерполяция ES6
// const category = 'Toys'; Подстановка переменных через ${xxx}

// console.log(`https://sumeurl.com/${category}/5`);

// const user = 'Ivan';
// alert(`привет, ${user}`)







//lesson 9 операторы
// console.log('arr' + ' - object');
//console.log(4 + +"5"); унарный плюс делает строку числом

// let incr = 10,
//    decr = 10;

//     incr++; или ++incr  инкремент увеличивает на 1
//     decr--; или --decr  декремент уменьшает на 1
//     console.log(incr++), сначала даст старое значение  потом увеличит
//      console.log(--decr);   сначала уменьшит потом выдаст значение


//    console.log(5%2); % возвращает остаток отделения

//console.log(2*4 == 8); == возвращает true или false не строго (бул типа данных) === строго

//&& И 
// || ИЛИ

// const isChecked = true,
//     isClose = false;

// console.log(isChecked && isClose);  возвращает true если оба значения true/ запинается на правде
// console.log(isChecked || isClose); возвращает true если хоть одно значение true/ запинается на лжи


// ! оператор отрицания

//  const isChecked = true,
//         isClose = false;

//  console.log(isChecked && !isClose); все равно вернет true потому что перед isClosed стоит !



//уроки 10и11 были про гит 

// lesson 12 начинаем создавать приложение

// let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '50');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// let movieFirst = prompt('Один из последних просмотренных фильмов', 'Терминатор 4');
// let movieRateFirst = prompt('На сколько оцениете его?', 'От 1 до 5');
// let movieSecond = prompt('Один из последних просмотренных фильмов', 'Нерв');
// let movieRateSecond = prompt('На сколько оцениете его?', 'От 1 до 5');

// personalMovieDB.movies[movieFirst] = movieRateFirst;
// personalMovieDB.movies[movieSecond] = movieRateSecond;

// console.log(personalMovieDB);






// lesson 13 условия


// if (4 == 4) {
//     console.log('ok!');
// } else {
//     console.log('Error');
// }


//const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('OK');
// }

// (num === 50) ? console.log('OK') : console.log('Error'); Тернарный аргумент

// const num = 50;// Не может сравнивать больше меньше
// switch (num) {
//     case 49:
//         console.log('Неверно');
//         break;
//     case 100: 
//         console.log('Неверно');
//         break;
//     case 50:
//         console.log('В точку!');
//         break;
//     default: 
//         console.log("Не в этот раз")
//         break;
// }



// lesson 14 циклы

//let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }


// do {
//     console.log(num);
//     num++;
// }
// while (num <55);

// for (let i = 1; i < 8; i++) {
//     console.log(num);
//     num++;
// }

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         //break; прерывает цикл
//         //continue; исключает значение 6 и продолжает дальше
//     }

//     console.log(i);

// }



// lesson 15 Практика. Условия и циклы
/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/



// Код возьмите из предыдущего домашнего задания

// let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// let questions = 0;

// while (questions < 2) {
//     let movieFirst = prompt('Один из последних просмотренных фильмов', '');
//     let movieRateFirst = prompt('На сколько оцениете его?', '');

//     if (movieFirst == "" || movieRateFirst == "") {
//         questions = 0;
//         alert('Ответте на вопросы заново');
//     } else if (movieFirst == null || movieRateFirst == null) {
//         questions = 0;
//         alert('Ответте на вопросы заново');
//     } else if (movieFirst.length > 50 || movieRateFirst.length > 50) {
//         questions = 0;
//         alert('Ответ должен быть короче 50 символов');
//     } else {
//         questions++;
// personalMovieDB.movies[movieFirst] = movieRateFirst;
// personalMovieDB.movies[movieSecond] = movieRateSecond;
//     }
//     
//Альтернативный вариант из курса 



// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }






// }


// if (personalMovieDB.count < 10) {
//     alert('Просмотрено довольно мало фильмов');
// } else if (personalMovieDB.count < 30) {
//     alert('Вы классический зритель');
// } else {
//     alert('Вы киноман');
// }


//Lesson 16 Функции.Стрелочные функции

// let num = 20;//глобальная переменная

// function showFirstMessage(text) { // function declaration
//     console.log(text);
//     let num = 20; //локальная переменная существует только внутри функции но 
//     //глобальная переменная может быть использована внутри функции
//     console.log(num); // сначала будет использована локальная функция (Замыкание функции) потом глобальная
// }

// showFirstMessage("Hello World!");
// console.log(num);

// function calc(a, b) {
//     return (a + b); // все что после return выполняться не будет
// }

// console.log(calc(8, 7));// выдаст суммудвухаргументов

// function ret(){
//     let num = 50;
//     //какой то длинный код
//     return num;// вывести результат вычислений
// }
// const anotherNum = ret();// вызов функции 

// //функции работают до того как они быливызваны (как var толькобез ошибок) они считываются в первую очередь

// const logger = function() { //function expression можно вызвать только после объявления

//     console.log('Hello');
// }

// logger();// вызов функции 

// const calc = (a, b) => {
//     console.log('Something');
//      return a + b; };// стрелочная функция запись для больших функций
// const calc2 = (a, b) => a + b ;// стрелочная функция запись для функций в 1 строчку





// Lesson 17 Методы и свойства строк и чисел
// методы - вспомогательные функции как я понял они уже есть в JS это как готовые шаблоны. Не бро, это функции внутри объекта
// свойства - вспомогательные значения
// их дохуя учить наизусть не нужно



// const str = 'test';
// const arr = [1, 2, 4];

// console.log(str.length);// выдает длину строки
// console.log(arr.length);// выдает количество элементов внутри массива
// // .length - свойство
// // методы вызываются как функции ()
// //console.log(str[2]);// покажет третий символ в строке


// console.log(str.toUpperCase());// применен методкоторый сделает все буквыстроки в апперкейсе
// // но не меняет саму строку str
// console.log(str.toLowerCase());// в нижний регистр

// const fruit = 'Some fruit';
// console.log(fruit.indexOf('fruit'));// ищет кусокстроки или буквы если не находит то выдает -1

// const logg = "Hello World";
// console.log(logg.slice(6, 11));// вырезать мир))
// console.log(logg.slice(6));// вырезать от 6 до конца строки

// console.log(logg.substring(6, 11));// то же самое что и слайс но не поддерживает отриц значения(отсчет справа)

// console.log(logg.substr(6, 4));// вырежет 4 символа начиная с 6 позиции

//есть еще splice(1, 1) он вырезает элемент массива илизаменяет его



//числа бля че так потно 

// const num = 12.2;
// console.log(Math.round(num));// округляет к ближайшему целому и возвращает 12 

// const test = "12.2px";
// console.log(parseInt(test)); // переводит в другую систему счисления если применить на строке вернет 12 
// console.log(parseFloat(test)); // переводит в десятичное значение с точкой вернет 12,2





//lesson18 Практика Используем функции
/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/



// Код возьмите из предыдущего домашнего задания

// let numberOfFilms ;

// function start () {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){//isNaN возвращает правду если записано не число
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };




// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//               b = prompt('На сколько оцените его?', '');

//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }

// rememberMyFilms();



// function detectPersonalLevel(){
//     if (personalMovieDB.count < 10) {
//         alert('Просмотрено довольно мало фильмов');
//     } else if (personalMovieDB.count < 30) {
//         alert('Вы классический зритель');
//     } else if(personalMovieDB.count >=30){
//             alert('Вы киноман');
//     } else {
//         console.log('Произошла ошибка');
//     }
// }

// detectPersonalLevel();


// function showMyDB(){// Мой вариант
//     if(personalMovieDB.privat == false){
//         console.log(personalMovieDB);
//     }
// }

// showMyDB();

// function writeYourGenres() {//Мой вариант
//     for(let i=0, gn=1; i < 3; i++, gn++ ) {   
//         const a = prompt('Ваш любимый жанр под номером ' + gn);
//         personalMovieDB.genres[i] = a;

//     }

// }

// function showMyDB (hidden) { //Вариант из курса
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {// Вариант из курса
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//     }
// }






//lesson 19 Callbck функции


// function first(){
//     //Do something
//     setTimeout(function() {// задержка
//         console.log(1);
//     }, 500);
// }

// function second(){
//     console.log(2);
// }

// first();//выполнится второй
// second();


// //Если функции в коде идут одна за другой они могут давать результат в разное время

// function learnJS(lang, callback) {// callback функция нужна длятого чтобы упоряочить выполнение функций
//     console.log(`Я учу: ${lang}`);
//     callback();// пока она ничего не делает.это просто аргумент
// }

// function done () {
//     console.log('Я прошел этот урок!');
// }

// learnJS('JavaScript', done);

// так одна функция не не начнется пока другая не завершитсвою работу
// вроде просто функция в функции





// Lesson 20 Объекты, деструктуризация объектов

// const options = {
//     name:'test',
//     width: 1024,
//     height:1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function(){
//         console.log("Test");
//     }
// };

// options.makeTest(); // запуск функции внутри объектаю Это метод

// const {border, bg} = options.colors;// Деструктуризация. Вытаскиваем свойства из вложенноего объекта
// console.log(border);// выдаст деструктурированное свойство без исользования options['colors']['border'] 

// console.log(Object.keys(options).length);// выдаст массив совсеми ключами объекта options, а length выдаст количество элементов(размер массива)

//console.log(options['colors']['border']);


// console.log(options.name);

// delete options.name;

// console.log(options);
// let counter = 0; // счетчик количества свойств
// for (let key in options){ // добираемся до объекта внутриобъекта
//     if(typeof(options[key]) === 'object') {
//         for(let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }

// }

// console.log(counter);





// 21 Lesson Массивы и псевдомассивы

// Псевдомасив выглядит также как и массив но не имеет никаких методов  


//const arr = [1, 2, 3, 6, 8];
// arr.sort(compareNum);// без аргументов сортирует по разрядам или алфавиту 
// console.log(arr);

// function compareNum(a, b){// функция для того чтобы сортировть по порядку по возрастающей
//     return a - b;
// }
// arr[99] = 0;
// console.log(arr.length);// свойство length выдает индекс последнего элемента + 1. Нельзя нарушатьпоследовательность в массиве

// arr.pop(); // удаляет последний элемент из массива
// arr.push(10); // добавляяет элемент в конец массива
// если работаешь сначалом массива то сбивается индекс так что редко используются методы для работы с началом массива

// for(let i = 0; i< arr.length; i++) {//перебрать все элементы внутри массива
//     console.log(arr[i]);
// }


// for (let value of arr) {// второй метод перебора for of не работает на объекты но работает на массивы и ему подобные тут можноиспользовать break
//     console.log(value);
// }

//  arr.forEach(function(item, i, arr) { // метод forEach третий способ перебора в котором задается функция которая будет применена для каждого элемента массива 
//     //его можно настроить подробнее: 3 аргумента: item - тот элемент который перебираем, i- номер по порядку, arr - ссылка на тот массив который перебираем 
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// const str = prompt('','');
// const products = str.split(',');// строка преобразуется в массив с разделителем который будет указан и если в исходной строке будет запятая то она будет делить элементы массива
// products.sort();// сортирует по алфавиту но сортирует как строки если это числа то по разрядам по возрастающей
//  console.log(products.join(';')); // выводит массив строкой с заданным разделителем





//Lesson 22 передача данных по ссылке или по значению, Spread оператор Копирование объектов

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b); покажет 10
// console.log(a); покажет 5

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj;// ссылка на obj

// copy.a = 10;

// console.log(copy);
// console.log(obj);
// тут ожидалось 2 разных значения а = 5 и а = 10 но везде 10 потому что изменяя что то внутри копии
//если это не примитивный тип данных вроде чилса или строки. В этом случае  const copy = obj; задает ссылку а не копирует obj


// function copy(mainObj) { // создаем новый объект перебирая свойства которые были в mainObj который мы передаем в эту функцию при ее применении
//     // это поверхностная копия.Есть еще и глубокие
//     let objCopy = {};


//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// // вот к примеру зачем нужен перебор
// почитай про for in и про for of

// const numbers = {
//     a: 2,
//     b: 5,
//     c:{
//        x: 7,
//        y:4 
//     }
// };

// const newNumbers = copy(numbers);// запускаем копирующую функцию

// newNumbers.a = 10;
// newNumbers.c.x = 10;// он сука поменяет и в оригинале numbers

// console.log(newNumbers);
// console.log(numbers);


// const add = {
//     d: 17,
//     e:20
// };

// //console.log(Object.assign(numbers, add));// соединяет 2 объекта

// const clone = (Object.assign({}, add));// еще одинспособ поверхностного копирования черезоединение объекта с пустым объектом

// clone.d = 20;

// // console.log(add);
// // console.log(clone);// это поверхностная копия 

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();// копирование массива вырезая его от начала до конца
//slice и splice посмотри чем отличаются
//Array.splice изменяет исходный массив и возвращает массив, содержащий удаленные элементы.
//Array.slice не изменяет исходный массив. Он просто возвращает новый массив элементов, который является подмножеством исходного массива.


// newArray[1] = 'afefh';

// console.log(newArray);
// console.log(oldArray);

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress','livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];// оператор разворота структуры

//  console.log(internet);

//  function log (a, b, c) {
//      console.log(a);
//      console.log(b);
//      console.log(c);
//  }

//   const num = [2, 5, 7];
//   console.log(...num);



// const array = ['a', 'b', 'c'];

// const array1 = [...array];// четвертый способ копирования

// const q = {
//     one: 1,
//     two: 2
// };

// const newObj = {...q};// эта херня может разворачивать и объекты. Не только массивы

// newObj.two = 3;

// console.log(newObj);







//lesson 23 основы ООП. Прототипно ориентрованное наследование

// let str = "some";

// let strObj = new String(str);

// console.log(typeof(str));// покажет что строка
// console.log(typeof(strObj));// покажет что объект

// //джаваскрипт сначала все запихивает в объект, что то ним делает а потом возвращает то что было

// // есть прототип а есть экземпляр прототипа как легковой автомобиль и бмв м3
// // так у любого массива будт прототип array ну у array прототип это объект
// //короче как каскадность. иерархия свойств. те методы которые можно применить к массиву наследуются от объекта

// console.dir([1, 2, 3]);



// const soldier = {// любой солдат
//     health: 400,
//     armor: 100,
//     sayHello: function(){// любой солдат умеет говорить привет
//         console.log('Hello');
//     }
// };


// const john = Object.create(soldier);// создать новый объект джон который будет прототипно наследоваться от солдата
// // const john = {// конкретный рядовой джон)
// //     health:100
// // };

// // john.__proto__ = soldier;// метод устарел

// console.log(john);// тут будет только health

// console.log(john.armor);// а сейчас он покажет свойство прототипа
// console.log(john.sayHello);// джон тожеумеет говорить привет как и любой солдат

// Object.setPrototypeOf(john, soldier);// нормальный новый способ установить прототип к уже созданному объекту





//Lesson 24 пратика Используем объекты

/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/


// мой вариант:


// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: true,
//     start: function () {

//         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', ''); // теперь записываем сразу в ебало

//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//         }
//     },
//     rememberMyFilms: function () {
//         for (let i = 0; i < 2; i++) {
//             const a = prompt('Один из последних просмотренных фильмов?', ''),
//                 b = prompt('На сколько оцените его?', '');

//             if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('done');
//             } else {
//                 console.log('error');
//                 i--;
//             }
//         }
//     },
//     detectPersonalLevel: function () {
//         if (personalMovieDB.count < 10) {
//             alert('Просмотрено довольно мало фильмов');
//         } else if (personalMovieDB.count < 30) {
//             alert('Вы классический зритель');
//         } else if (personalMovieDB.count >= 30) {
//             alert('Вы киноман');
//         } else {
//             console.log('Произошла ошибка');
//         }
//     },
//     showMyDB: function (hidden) {
//         if (!hidden) {
//             console.log(personalMovieDB);
//         }
//     },
//     writeYourGenres: function () { // можно еще записать через split и for c одной итерацией
//         for (let i = 1; i <= 3; i++) {
//             personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//             if (personalMovieDB.genres[i - 1] == '' || personalMovieDB.genres[i - 1] === null) {
//                 alert('Не оставляй пустую строку');
//                 i--;
//             }
//         }
//         personalMovieDB.genres.forEach(function (item, i, arr) {
//             console.log(`Любимый жанр #${i+1} - это ${item}`);
//         });
//     },
// вариант из урока
// writeYourGenres: function() {
//     for (let i = 1; i < 2; i++) {
//         let genre = prompt(`Ваш любимый жанр под номером ${i}`);

//         if (genre === '' || genre == null) {
//             console.log('Вы ввели некорректные данные или не ввели их вовсе');
//             i--;
//         } else {
//             personalMovieDB.genres[i - 1] = genre;
//         } 

// Альтернативный вариант из урока

// let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

// if (genres === '' || genres == null) {
//     console.log('Вы ввели некорректные данные или не ввели их вовсе');
//     i--;
// } else {
//     personalMovieDB.genres = genres.split(', ');
//     personalMovieDB.genres.sort();
// } 
// }

// personalMovieDB.genres.forEach((item, i) => {
//     console.log(`Любимый жанр ${i + 1} - это ${item}`);
// });
// }
// toggleVisibleMyDB: function () {
//     if (personalMovieDB.privat) { // === true здесь прописывать не обязательно
//         personalMovieDB.privat = false;
//     } else {
//         personalMovieDB.privat = true;
//     }
// }


// };

// personalMovieDB.toggleVisibleMyDB();

// personalMovieDB.showMyDB(personalMovieDB.privat);

// personalMovieDB.writeYourGenres();





//Lesson 25 отлавливаем ошибки в коде при помощи консоли разработчика.Breakpoints

//В консоли есть вкладка sources там можно посмотреть структуру документа и найти баги в коде
//там есть кнопки прокрутки которые могут показать как работают функции пошагово
// учить бесполезно все прийдет с опытом
// ключевое слово debugger делает брейкпоинт для консоли разработчика
// Короче пока нихуя не понятно


//Lesson 26 Динамическая типизация в JS

// Динамическая типизация это возможность одного типа данных превращаться в другой


// To string

//1)
// console.log(typeof(String(null)));// выдаст строку а не налл
// console.log(typeof(String(4)));// тоже выдаст строку а не число

//2) конкретинация сложение чего либо со строкой

// console.log(typeof(null + '')); // выдаст строку а не налл


// const num = 5;

// console.log("https://vk.com/catalog/" + num);// получим строку при сложении с числом

// const fontSize = 26 + 'px';

//To number

// 1)

// console.log(typeof(Number('4')));// выдаст намбер 

// 2 Унарный плюс 

// console.log(typeof(+"5")); // тоже выдаст число 

// 3
// console.log(typeof(parseInt('15px', 10)));// в десятичную систему

// let answer = +prompt("Hello", "");


//кстати все что мы получаем от пользователя будет строкой


// To boolean

// всегда ложь 0, "", null, undefined, NaN

// 1)
// let switcher = null;

// if (switcher){// сюда зайдет false 
//     console.log('Working...');
// }

// switcher = 1;

// if (switcher){// сюда зайдет true 
//     console.log('Working...');
// }



// // 2)

// console.log(typeof(Boolean('4')));// выдаст правду


// // 3)

// console.log(typeof(!!'44444')); // два знака отрицания дают тип boolean как унарный плюс дает тип намбер



//lesson 27 задачи с собеседований на понимание основ

// Какое будет выведено значение: let x = 5; alert( x++ ); ?  --- 5 
/// тут инкремент после пятерки поэтому сначала выдается пятерка а только потом увеличивается

// Чему равно такое выражение: [ ] + false - null + true ? --- NaN
/// когда мы работем с пустым массивом он первращается в пустую строку "" а если к пустой строке прибавить что то то это будет все равно строка
/// если вычесть из строки булиновое значение то получится NaN и если довабить еще одно тру товсе равно будет NaN

// Что выведет этот код: let y = 1; let x = y = 2; alert(x); ? --- 2
/// тут код идет справа налево. последовательное присваивание

// Чему равна сумма [ ] + 1 + 2?  --- "12"
/// пустой массив складывается с другими типами данных

// Что выведет этот код: alert( "1"[0] )? --- хз /// 1
/// тут мы обращаемся к строке как к массиву и вызываем первый символ

// Чему равно 2 && 1 && null && 0 && undefined ? --- null
// оператор && будет запинаться на лжи и выдает null

// Есть ли разница между выражениями? !!( a && b ) и (a && b)? ---- да /// нихуя.это разные вещи
///Оператор && возвращает первый из операндов, значение которого приводится к логическому false. 
///Если же оба операнда приводятся к true, то оператор && вернет последний операнд.
/// так что будет сравниваться булин true и результат &&

// Что выведет этот код: alert( null || 2 && 3 || 4 ); ? ---- 3
/// Тут еще надо смотреть таблицу приоритетов операторов у && приоритет выше так что он будет выполняться раньше ||
///null это фолс/ 2&&3 это 3/ а 3 это тру/ тру выдает || если оно ему попадается / так что ответ 3 
/// если не понятно дальше написано как работает || и &&

// a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ? ----  нет
///это 2 хранилища информации которые просто хранят одинаковые данные но они не равны

// Что выведет этот код: alert( +"Infinity" ); ? ---- плюс бесконечность как число

// Верно ли сравнение: "Ёжик" > "яблоко"? ---- нихуя 
/// тут сравнивается посимвольно по юникоду еще ис регистром.сравниваются коды в таблице

// Чему равно 0 || "" || 2 || undefined || true || falsе ? ---- 2
///Оператор || возвращает первый из операндов, значение которого может быть приведено к логическому true.
/// Если же оба операнда приводятся к логическому false, то оператор || вернет последнее значение.



//  Lesson28 получение элементов со страницы

//DOM - объектная модель документа

// const box = document.getElementById('box');// получить элемент из документа по айдишнику
// console.log(box);// в браузере выдаст этот элемент

// const btns = document.getElementsByTagName("button");// выдает псевдомассив всех элементов баттон по тэгу
// const btn = document.getElementsByTagName("button")[1];// получить только вторую кнопку

// console.log(btns[2]);// получить конкретный элемент из коллекции

// если элемент один на странице то все равно getElementsByTagName дает массив

// const circles = document.getElementsByClassName('circle');// получить элементы через класс выдаст коллекцию тоже если даже один походу


// const hearts = document.querySelectorAll('.heart');// крутая штука сюда можно добавить любой css селектор. Получим HTML коллекцию с методом ForEach

// hearts.forEach( item => {// выдаст все 3 элемента в консоль
//     console.log(item);
// });

// const oneHeart = document.querySelector(".heart");// выдаст один элемент - первый подходящий по этому запросу


// Lesson 29 Действия с элементами на странице

// const box = document.getElementById('box'),
//       btns = document.getElementsByTagName('button'),
//       circles = document.getElementsByClassName('circle'),
//       wrapper = document.querySelector(".wrapper"),
//       hearts = document.querySelectorAll(".heart"),
//       oneHeart = wrapper.querySelector("heart");// не обязательно искать через document

// console.dir(box);// посмотреть на элемент как на объект
//тут можно менять инлайн стили(которые в html)
// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

// box.style.cssText = "background-color:blue; width: 500px;";// тут можно писать прям css код

// btns[1].style.borderRadius = "50%";

//circles.style.backgroundColor = "red";// не сработает потому что к массиву обращаемся а не к объекту
// circles[1].style.backgroundColor = "red";

// for( let i = 0; i < hearts.length; i++){// можно менять свойства для нескольких элементов через такой цикл
//     hearts[i].style.backgroundColor = 'blue';
// }

// hearts.forEach(item =>{/// этот способ лучше для изменения нескольких элементов ноработет только с document.querySelectorAll
//     item.style.backgroundColor = 'blue';
// });


// const div = document.createElement('div');// сохраняет элемент внутри JSного файла. В круглых скобках название тега

// const text = document.createTextNode('Тут был я');// текстовые узлы. элементы без оболочки тега. исп редко

// div.classList.add('black');//ДОБАВЛЯЕМ КЛАСС К ЭЛЕМЕНТУ.КЛАСС УЖЕ СОЗДАН В СSS


//document.body.append(div);// добавляем наш див в конец бади в сам html
//wrapper.appendChild(div);// более устаревший метод добавить в конец родителя
// wrapper.append(div);// добавляем наш див c классом black в конец элемента с классом wrapper
//wrapper.prepend(div);// в начало элемента
// hearts[0].before(div);// перед первым сердечком
//hearts[1].after(div);// после второго сердечка

// wrapper.insertBefore(div, hearts[0]);// более старый метод добавления перед вскобках написано что вставлять и куда

//circles[0].remove();// удалить элемент
//wrapper.removeChild(hearts[1]);// старый метод удаления тут надо задавать родителя

//hearts[0].replaceWith(circles[0]);//заменить на
//wrapper.replaceChild(circles[0], hearts[0]);// старый способ тут надо задавать родителя тот элемент на который меняем и тот элемент который меняется


// div.innerHTML = '<h1>Hello world</h1>';// записать HTML в элемент. Но можно въеьаться и дать возможность пользователю управлять содержанием страницы


//div.textContent = "Hello"; // работет только на текст


//Вставляем кусок HTML кода перед или после определенных тегов// тут походу не переписываем как в innerHTML но есть еще +=
// div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>');//перед элементом
// div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>');// в начало элемента
// div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>');// в конец 
// div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');// после элемента
/// элемент.insertAdjacentHTML('ключевое слово', 'код');


//Lesson 30 Практика.Действия со страницей
/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */


// const movieDB = {
//     movies: [
//         "Логан",
//         "Лига справедливости",
//         "Ла-ла лэнд",
//         "Одержимость",
//         "Скотт Пилигрим против...",
//         'Аватар',
//         'Терминатор'

//     ]
// };

// const movieDBSorted = movieDB.movies.sort();
// const films = document.querySelectorAll('.promo__interactive-item');
// const filmsList = document.querySelector('.promo__interactive-list');
// const div = document.createElement('div');
// div.classList.add('delete');

// console.log(div);

// console.log(movieDBSorted);

// document.querySelector('.promo__adv').remove();
// document.querySelector('.promo__content').style.cssText = "width: calc(100% - 300px);";

// document.querySelector('.promo__genre').textContent = "драма";

// document.querySelector('.promo__bg').style.cssText = "background-image: url(img/bg.jpg);";



// for( let i = 0; i < films.length; i++){// первый вариант
//     films[i].textContent = movieDBSorted[i];
//     films[i].insertAdjacentHTML('beforeend', '<div class="delete"></div>');
//     films[i].insertAdjacentHTML('afterbegin', `${i+1}. `);
//  }


// и второй вариант сука сосать
// films.forEach(item =>{
//     item.remove();
// });

//или использовать для filmsList innerHTML но с пустой строкой

// for( let i = 0; i < movieDBSorted.length; i++){
//   const li = document.createElement('li');
//   const div = document.createElement('div');
//    li.classList.add('promo__interactive-item');
//    div.classList.add('delete');
//    filmsList.append(li);
//    li.append(div);
//    li.insertAdjacentHTML('afterbegin', `${i+1}. ${movieDBSorted[i]} `);


// }

//можно еще сделать через forEach innerHTML. вариант из курса толтко у него тут movieList 
//movieList.innerHTML = "";
//console.log(poster.innerHTML); // тут просто выдается код а не перезаписывается

//movieDB.movies.forEach((film, i) => {
//     movieList.innerHTML += `// += это тоже самое что  movieList.innerHTML + .... 
//Оператор: x += y 
//Значение: x = x + y
//     // если + перед = не будет то он каждый раз будет просто перезаписывать первый цикл
//         <li class="promo__interactive-item">${i + 1} ${film}
//             <div class="delete"></div>
//         </li>
//     `;
// });






//Урок 31 События и их обработчики

//Событие- это сигнал от браузера о том что что то произошло

//Обработчик события - это функция которая срабатывает как только какое то событие произошло

// 3 способа назначить обработчики событий

// прям в HTML в ебало никто не пишет

// 2 способ но тут если мы назначим обработчик дважды то он перезапишется
//  const btn = document.querySelector('button'),
//        overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('Пошел нахуй');
//     console.log('Click');
// };


//Теперь как правильно назначать обработчик.

// btn.addEventListener('click', () => { // первый аргумент это название события а второй это колбек функция(обработчик) а третьим аргументом можно добавлять опции
//     alert("Click");
// } ); 

// btn.addEventListener('click', () => { // Этот неперезаписывается и выполняет по порядку
//     alert("Second click");
// } ); 

// btn.addEventListener('click', (e) => { // объект - событие передается первым в аргументы 
//     console.log('Hover');
//    console.log(e.target);// сразу получаем доступ к этому элементу если происходит заданное событие
//     e.target.remove();
// }); 

//События в джаваскрипте выполняются в порядке очереди





// let i = 0;

// const deleteElement = (e) => {
//     console.log(e.target);// тут 2раза выдаст баттон если ткнуть в кнопку.Используется чаще
//console.log(e.currentTarget);//сука как объяснить самому себе разницу. а тут выдаст сначала баттон потом див 
//console.log(e.type);
// i++;//событие сработает 1 раз и удалится:
// if (i===1) {
//     btn.removeEventListener('click',deleteElement);// удалить обработчик
// }
// };

//btn.addEventListener('click', deleteElement);// назначить обработчик
// то же самое что и код выше но с переменной и возможностью удалить именно этот ивентлистенер
//overlay.addEventListener('click', deleteElement);// вешаем обработчик на обертку
//всплытие событий - если одинаковое  событие примененно к вложенным друг в друга 
//элементам то сначала применяется к вложенному элементу и после поднимается выше по иерархии


// const link = document.querySelector('a');// сначала получаем элемент
// link.addEventListener('click', function(event){
//     event.preventDefault();// отмена стандартного поведения браузера
//     console.log(event.target);
// })




// чтобы повесить обработчики событийна несколько элементов то надо перебрать массив через фоич например

// const btns = document.querySelectorAll('button');

// btns.forEach(btnItem =>{
//     btnItem.addEventListener('click', deleteElement, {once: true});// тут есть третий аргумент once. Обработчик сработает только 1 раз
// });




//Урок 32 Навигация по DOM элементам дата атрибуты преимущество фор и оф
// Сразу пишу что нода это строка кода перенос строки или элемент

// console.log(document.body);
// console.log(document.documentElement);// выведет весь HTML
// console.log(document.body.childNodes);// выдаст псевдомассив детей бади text в этом массиве это перенос строки

//нужно различать ДОМ узлы и дом элементы узел мы можем его не видеть


// console.log(document.body.firstChild); // тут это перенос строки
// console.log(document.body.firstElementChild);// а тут уже именно элемент первый
// console.log(document.body.lastChild);// тут это скрипт
// console.log(document.body.lastElementChild);


// console.log(document.querySelector('#current').parentNode);// получить ноду родителя
//console.log(document.querySelector('#current').parentElement);// получить родительский элемент
// console.log(document.querySelector('#current').parentNode.parentNode);// получить прародителя

// в HTML5 можно добавлять атрибуты data-чтото="3 или true"

// console.log(document.querySelector('[data-current="3"]'));//получить залупу
// console.log(document.querySelector('[data-current="3"]').nextSibling); // получить то что за залупой но тут выдаст перенос строки потому что эта хрень выдает узлы или текстовые ноды
// console.log(document.querySelector('[data-current="3"]').previousSibling);// нода перед 
// нода это хз что то вроде строки кода но можетбытьпустойстрокой

//C чайлднодс нет фишек с элементами поэтому ее надо делать вручную
//Естьслучаи когдамы неможемиспользовать forEach
// for of может использовать брейк и континью

// for(let node of document.body.childNodes){// так мы получим все ноды но без перносов строк
//     if(node.nodeName == '#text'){// это он подсмотрел в браузере в свойствах собъекта
//         continue;
//     }
//     console.log(node);
// }





//Урок 33 Используем события 
/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */


// Возьмите свой код из предыдущей практики


// let movieDB = {
//     movies: [
//         "Логан",
//         "Лига справедливости",
//         "Ла-ла лэнд",
//         "Одержимость",
//         "Скотт Пилигрим против..."
//     ]
// };






// const adv = document.querySelectorAll('.promo__adv img'),
//     poster = document.querySelector('.promo__bg'),
//     genre = poster.querySelector('.promo__genre'),
//     movieList = document.querySelector('.promo__interactive-list');

// adv.forEach(item => {
//     item.remove();
// });

// genre.textContent = 'драма';

// poster.style.backgroundImage = 'url("img/bg.jpg")';




// // ну поехали

// movieDB.movies.forEach((item,i) => {// всю муви дб делаем в ловер кейс чтобы не сбивалась сортировка
//     movieDB.movies[i] = item.toLowerCase();
// });


// const reWriteMovieList = function () {// делаем большую функцию
//     movieList.innerHTML = ""; // переписываем список как в прошлом задании
//     const movieDBSorted = movieDB.movies.sort();//сортируем мувис и делаем новую переменную



//     movieDBSorted.forEach((film, i) => {// на каждый элемент списка создаем текст HTML += делает так чтобы код не перезаписывался
//         movieList.innerHTML += `
//         <li class="promo__interactive-item">${i + 1} ${film}
//             <div class="delete"></div>
//         </li>
//     `;
//     });

//     const delBtns = document.querySelectorAll('.delete');//получаем каждую мусорку

//     delBtns.forEach( (item,i) => {// вешаем обработчик на каждую мусорку

//     item.addEventListener('click', function (event) {// при клике произойдет следущее
//        const delIndex = +item.parentElement.textContent.slice(0, 1) - 1;// через жопу получаю индекс из текста в HTML
//        movieDB.movies.splice(delIndex, 1);// загуглил метод который вырезает по индксу из списка
//        reWriteMovieList();//вызываю перезаписыватель из списка 

//     });

// });

// };

// reWriteMovieList();//при загрузке страницы сразу вызываю перезаписыватель который все пронумерует,просортирует и повесит обработчики

// // теперь кнопка 
// const btn = document.querySelector('.add button'); // сначала получаем элемент

// btn.addEventListener('click', function (event) {
//     event.preventDefault(); // отмена стандартного поведения браузера
//     const inputValue = document.querySelector('.adding__input').value;// получаем значение инпута
//     inputValue.toLowerCase();// данные от юзера тоже надо в ловеркейс 
//     if (inputValue.length > 21) { //длина члена
//         const inputValueSliced = inputValue.slice(0, 21) + '...';// если член длиннее 21 то он обрезается
//         movieDB.movies.push(inputValueSliced);// запихиваем обрезанный член в список
//     } else {
//         movieDB.movies.push(inputValue);// необрезанный фильм короче 21
//     }

//     reWriteMovieList();// рерайтим

//     document.querySelector('.adding__input').value = ''; // опустошаем инпут

//     const chBox = document.querySelector('[type="checkbox"]');/// получаем чекбокс в переменнную

//     if (chBox.checked){// проверяем на чекнутость. тут выдает либо тру либо фолс
//         console.log(`Добавляем любимый фильм`);
//     }

//     chBox.checked = false;// при нажатии накнопку чекбокс опустошится
//     });





// с мусорной корзиной ахаха охуеть получилось 


// теперь как сделали в уроке

// document.addEventListener('DOMContentLoaded', () => {// ждем загрузки всего документа но без изображений а лишь потом запускаем код

//     const movieDB = {
//         movies: [
//             "Логан",
//             "Лига справедливости",
//             "Ла-ла лэнд",
//             "Одержимость",
//             "Скотт Пилигрим против..."
//         ]
//     };
/// получил все знчения в начале
// const adv = document.querySelectorAll('.promo__adv img'),
//     poster = document.querySelector('.promo__bg'),
//     genre = poster.querySelector('.promo__genre'),
//     movieList = document.querySelector('.promo__interactive-list'),
//     addForm = document.querySelector('form.add'),
//     addInput = addForm.querySelector('.adding__input'),
//     checkbox = addForm.querySelector('[type="checkbox"]');

// addForm.addEventListener('submit', (event) => {// повесил вункцию на форму а не на инпут
//     event.preventDefault();

//     let newFilm = addInput.value;//получил значения инпута
//     const favorite = checkbox.checked;// значение чекбокса

//     if (newFilm) {// тут если просто нажимается кнопка и ничего не написано то ничего непроисходит

//         if (newFilm.length > 21) {// проверка на длину инпута
//             newFilm = `${newFilm.substring(0, 22)}...`;// сабстринг вроде то же самое что и слайс 
//         }

//         if (favorite) {// проверка чекбокса
//             console.log("Добавляем любимый фильм");
//         }

//         movieDB.movies.push(newFilm);// запихиваем в список
//         sortArr(movieDB.movies);// сортируем список

//         createMovieList(movieDB.movies, movieList);// вызывает функцию по перезаписи HTML
//     }

//     event.target.reset();//вот так можно ресетить форму

// });
// тут он оборачивает все  в функции с аргументами
//     const deleteAdv = (arr) => {
//         arr.forEach(item => {
//             item.remove();
//         });
//     };

//     const makeChanges = () => {
//         genre.textContent = 'драма';

//         poster.style.backgroundImage = 'url("img/bg.jpg")';
//     };

//     const sortArr = (arr) => {
//         arr.sort();
//     };

//     function createMovieList(films, parent) {
//         parent.innerHTML = "";
//         sortArr(films);

//         films.forEach((film, i) => {
//             parent.innerHTML += `
//                 <li class="promo__interactive-item">${i + 1} ${film}
//                     <div class="delete"></div>
//                 </li>
//             `;
//         });

//         document.querySelectorAll('.delete').forEach((btn, i) => {// вешает обработчик накаждую мусорку
//             btn.addEventListener('click', () => {
//                 btn.parentElement.remove();
//                 movieDB.movies.splice(i, 1);// хитрый пидр сделал как я но индекс отпросто взял из i а я задрачивался

//                 createMovieList(movieDB.movies, movieList);// это типо рекрсия но ты сам догадался
//             });
//         });
//     }

//     deleteAdv(adv);
//     makeChanges();
//     createMovieList(movieDB.movies, movieList);

// });









// Lesson 34 События на мобильных устройствах 





// используется например на сладерах
// touchstart начало касания
// touchmove движение с касанием
// tochend отрыв пальца
// tochenter как ховер только с пальцем
// touchleave когда ховер с пальцем выходят за пределы элемента
// touchcansel когда палец выходит за пределы браузера

// window.addEventListener("DOMContentLoaded", () =>{
//     const box = document.querySelector('.box');

//     box.addEventListener('touchstart', (e) => {
//         console.log('start');
//         console.log(e.touches);// дает объект в котором есть количество пальцев  
//     });

//     box.addEventListener('touchmove', (e) => {
//         console.log(e.targetTouches[0].pageX);// тут обратились к первому пальцу и вывели координаты по иксу
//         // тут например можно прикрутить к слайдеру
//     });

//     box.addEventListener('touchend', (e) => {
//         console.log('end');
//     });
// });



//e.touches объект спальцами Touchlist 
//e.targetTouches все пальцыкоторые взаимодействуют с этим элементом
//e.changedTouches список пальцев которые участвуют в текущем событии
// это походу чтобы реализовывать щепотку и подобные




//Lesson 35 Async defer и динамические скрипты

//HTML страница загружается сверху вниз 
//если скрипт повесить наверх то могут быть ошибки
// но если слабый инет и м��ого верстки то будут проблемы с загрузкой
//Есть HTML атрибут defer для скрипта который находится в HTML наверху
// defer - сообщает браузеру чтобы он загружал скрипт в фоновом режиме
// скрипты с таким атрибутом срабатывают после загрузки страницы и теперь скрипты можно засовывать даже в башку


//async тут скрипты не ждут ничего и загружаются как только до него дойдет страница и запускается сразу после загрузки асинхронность нужна к примеру для метрик

//такие скрипты загружаются как async если не присвоен фолс

// function loadScript(src) {
//     const script = document.createElement('script'); //создаем скрипт в JS который будет динамически загружаться
//     script.src = src; // Подписываем ему атрибут src
//     script.async = false; // так скрипт будет вести себя как обычный. Ассинхронность отключена
//     document.body.append(script); //добавляем его в документ

// }

// loadScript('js/test.js');
// loadScript('js/some.js');


// такой подход гарантируетпоследовательную загрузку динамических скриптов




//Lesson 37 ClassList и делегироваие событий
// верстку он сюда не прикрепил так что если что смотри по видосу
// const btns = document.querySelectorAll('.button');
// const wrapper = document.querySelector(".btn-block");// получаем родителя всех кнопок
// console.log(btns[0].classList.length);// выдаст количество классов
//console.log(btns[0].classList.item(0));// получить класс который распологается под определенным индексом
// console.log(btns[0].classList.add('one__class', 'other__class'));// добавить класс
// console.log(btns[1].classList.remove('red'));// убрать класс
// console.log(btns[0].classList.toggle('red'));// тогглим. убираем или добавляем класс в зависимости от его наличия


// if(btns[1].classList.contains('red')) {// сделать что то если у второй кнопки есть класс ред
//     console.log('red');
// }

// btns[0].addEventListener('click', () => {// похожее на гамбургер поведение
//     // if (!btns[1].classList.contains('red')){
//     //     btns[1].classList.add('red');
//     // } else {
//     //     btns[1].classList.remove('red');
//     // }

//     btns[1].classList.toggle('red');// тоггл это то же самое
// });

// // console.log(btns[0].className);//устарело дает строку классов

// // ща будет про делегирование где мы назначаем функцию для потомков а не вешаем обработчик накаждый элемент
// // вспоминаем практикум с мусорками

// wrapper.addEventListener('click', (event) => {// вешаем обработчик на родителя // теперь клик на родителя не работает но работает клик на любую кнопку
//     console.dir(event.target);// тутможно посмотреть на таргт клика как на объект. Там будет показано tagName: 'BUTTON'
//     if (event.trarget && event.target.tagName == "BUTTON") {// в HTML структуре не все элементы поддерживаютсобытие клика не заморачивайся
//         console.log('hello');

//     }
// });

// const btn = document.createElement('button');// теперь динамически добавленные кнопки тоже поддерживают это событие
// btn.classList.add('red');
// wrapper.append(btn);

// //но если через обычный перебор добавить обработчик то динамические кнопки не сработают прям как с мусорками




// wrapper.addEventListener('click', (event) => {// вешаем обработчик на родителя
//     console.dir(event.target);
//     if (event.trarget && event.target.classList.contains('blue')) {// можно добавлять и другие условия для делегирования
//         console.log('hello');

//     }
// });

// wrapper.addEventListener('click', (event) => {// вешаем обработчик на родителя
//     console.dir(event.target);
//     if (event.trarget && event.target.matches('button.red')) {// тут указываются селекторы 
//         console.log('hello');

//     }
// });






//Lesson 38 Создаем табы в новом проекте

/// 3 задачи
//функция которая скрывает ненужные табы
//Показать нужные табы
//назначить обработчики событий на нужные кноки

// window.addEventListener('DOMContentLoaded', function() {

//     // Tabs

// 	let tabs = document.querySelectorAll('.tabheader__item'),
// 		tabsContent = document.querySelectorAll('.tabcontent'),
// 		tabsParent = document.querySelector('.tabheader__items');

// 	function hideTabContent() {

//         tabsContent.forEach(item => {// скрываем табы
//             item.classList.add('hide');// выдаем нужные классы 
//             item.classList.remove('show', 'fade');// тоггл кстати тут нельзя использовать
//         });

//         tabs.forEach(item => {//убираеем класс active укаждого таба
//             item.classList.remove('tabheader__item_active');
//         });
// 	}

// 	function showTabContent(i=0) {// показать табы i=0 значитчто если функция вызывается без аргумента топо умолчанию выставится значение которое указано
//         tabsContent[i].classList.add('show', 'fade');
//         tabsContent[i].classList.remove('hide');
//         tabs[i].classList.add('tabheader__item_active');
//     }

//     hideTabContent();
//     showTabContent();

// 	tabsParent.addEventListener('click', function(event) {// делегирование через родителя на все кнопки справа
// 		const target = event.target;// чтобы постоянноне писать евент.таргет
// 		if(target && target.classList.contains('tabheader__item')) {// тут проверка содержание класса внутри родителя определяем что мы точно кликнулив таб
//             tabs.forEach((item, i) => {// надо определить номер таба чтобы знать какой показывать
//                 if (target == item) {// если кликнутый таб равен перебераемому то вызываем функции
//                     hideTabContent();// прячем все табы
//                     showTabContent(i);// показваем тот который совпал с кликаемым
//                 }
//             });
// 		}
// 	});
// });








//Урок 39 Время выполнения скриптов

// const timerId = setTimeout(function (text){
//     console.log(text)
// }, 20000,'hello');// время ставится в милисекундах первый аргумент функции setTimeout  это что произойдет а второйаргумент это отсрочка 
// // третий аргумент это то что передается в заданную функцию


// const timerId2 = setTimeout(logger, 2000, "Hello");// первым аргументом можно передавать готовую функцию


// function logger (text) {
//     console.log(text);

// }


// setTimeout(logger, 20000,'hello');// сработает и без переменной

// clearInterval(timerId);// тут мы сбрасываем таймер но обращаемся по переменной он работает и на разовые таймеры и на интервалы 

// const btn = document.querySelector('.btn');


// let timerId3;// глобальная переменная которуюможно будет использовать в клеар интервал
// btn.addEventListener('click', () => {//счетчик пойдет после клика на кнопку 
//     // const timerId = setTimeout(logger,2000);
//     const timerId3 = setInterval(logger, 2000);

// });



// clearInterval(timerId3);//используемая переменная должна бытьзадана глобально чтобысработать а не локально внутри функции
// но клеар интервал не будет работать пока он идет в потоке синхронного кода

// let i = 0; // чтобы посчитать сколько раз уже повторился сет интервал


// function logger () {
//     if(i === 3) {
//         clearInterval(timerId3);// если logger выполнится 3 раза то сработает клеар интервал
//     }
//     console.log('text');
//     i++;

// }

//рекурсивный сет таймаут это значит что внутри себя он сам себя запускает
//но еслик примеру функция делается 3 секунда а интервал 0,5 то интервала не будет он уже пройдет

// let id =  setTimeout(function log () {// работает так же как и сет интервал функциябудет дожидатьсявыполнения действий потом ждать назначенное время и запускаться снова даже если функция выполняется 30 секунд
//     console.log('Hello');
//     id = setTimeout(log,500);
// }, 500);


//Делаем анимацию

//синий квадратик перемещается в правый нижний угол 

// function myAnimation() {
//     const elem = document.querySelector('.box');
//     let pos = 0;
//     const id = setInterval(frame,10);//двигаем квадратик каждые 10мс
//      function frame () {
//          if(pos == 300){// конечное значение когда анимация останавливается
//              clearInterval();
//          } else {
//              pos++;
//              elem.style.top = pos + "px";
//              elem.style.left = pos + "px";
//          }
//      }
// }

// btn.addEventListener('click', myAnimation); // при клике на кнопку запустится анмация


// //в цссе делайанимации и не веебывайся потом прилепишь класс








// Урок40  работа с датами

// let now = new Date(); // покажет текущую дату и время если в фунцию ничего не передается

// console.log(now);

// now = new Date('2020-08-29');// покажет конкретное число но не время

// console.log(now);

// now = new Date('2020, 8, 30, 20');// нихуя непонял как ре вводит все коряво
// console.log(now);

// now = new Date(0);// первое января 1970г 0 милисекунд с начала отсчета

// console.log(now);

// now = new Date(-9999999999999);//1653 год это вот столькомили секунд до 1970)

// console.log(now);


//методы гетеры

// now = new Date('2020-08-29');
// new Date.parse('2020-08-29');// еще один способ задания даты

// console.log(now.getFullYear());// 2020в формате 4 цифр
// console.log(now.getMonth());//месяц
// console.log(now.getDate());// число месяца
// console.log(now.getDay());// суббота
// console.log(now.getUTCHours());// в часовом поясе +0

// console.log(now.getTimezoneOffset());// разница с главным поясом в минутах выдаст -180
// console.log(now.getTime());//1598709799376 количество милисекунд которые прошли  1970 года

//методы сетеры то же самое но get меняем на set

// console.log(now.setHours(18, 40));// часы. и минуты сюд тоже можно писать но не стоит
// console.log(now);


// let start = new Date();

// for (let i = 0; i <10000000; i++) {  // загружаем систему циклом
//     let some = i ** 3;// ** возвести в степень 
// }

// let end = new Date();

// alert(`Цикл отработал за ${end - start} миллисекунд`);
// // короче можно вычитать дату из даты




//Lesson 41 таймер обратного отсчета на сайте
// window.addEventListener('DOMContentLoaded', function() {

//     // Tabs

// 	let tabs = document.querySelectorAll('.tabheader__item'),
// 		tabsContent = document.querySelectorAll('.tabcontent'),
// 		tabsParent = document.querySelector('.tabheader__items');

// 	function hideTabContent() {

//         tabsContent.forEach(item => {// скрываем табы
//             item.classList.add('hide');// выдаем нужные классы 
//             item.classList.remove('show', 'fade');// тоггл кстати тут нельзя использовать
//         });

//         tabs.forEach(item => {//убираеем класс active укаждого таба
//             item.classList.remove('tabheader__item_active');
//         });
// 	}

// 	function showTabContent(i=0) {// показать табы i=0 значитчто если функциявызываетсябезаргумента топо умолчанию выставится значение которое указано
//         tabsContent[i].classList.add('show', 'fade');
//         tabsContent[i].classList.remove('hide');
//         tabs[i].classList.add('tabheader__item_active');
//     }

//     hideTabContent();
//     showTabContent();

// 	tabsParent.addEventListener('click', function(event) {// делегирование через родителя на все кнопки справа
// 		const target = event.target;// чтобы постоянноне писать евент.таргет
// 		if(target && target.classList.contains('tabheader__item')) {// тут проверка содержание класса внутри родителя определяем что мы точно кликнулив таб
//             tabs.forEach((item, i) => {// надо определить номер таба чтобы знать какой показывать
//                 if (target == item) {// если кликнутый таб равен перебераемому то вызываем функции
//                     hideTabContent();// прячем все табы
//                     showTabContent(i);// показваем тот который совпал с кликаемым
//                 }
//             });
// 		}
//     });



//     //Timer

//     const deadline = '2020-10-1';

//     function getTimeRemaining(endtime) {
//         const t = Date.parse(endtime) - Date.parse(new Date()),
//             days = Math.floor( (t/(1000*60*60*24)) ),// округление доближайшего целого
//             seconds = Math.floor( (t/1000) % 60 ),// % возвращает остаток от деления
//             minutes = Math.floor( (t/1000/60) % 60 ),// если не влезает в час то тоже возвращается остаток
//             hours = Math.floor( (t/(1000*60*60) % 24) );// тут если что то не будет влезать в целый день то вернется остаток

//         return {// функция возвращает объект 
//             'total': t,
//             'days': days,
//             'hours': hours,
//             'minutes': minutes,
//             'seconds': seconds
//         };
//     }

//     function getZero(num){// подставляем 0 если значение меньше 10 чтобы не торчала цифра
//         if (num >= 0 && num < 10) { 
//             return '0' + num;
//         } else {
//             return num;
//         }
//     }

//     function setClock(selector, endtime) {// функция которая получает элементы и записвает в них рассчитанное время

//         const timer = document.querySelector(selector),
//             days = timer.querySelector("#days"),
//             hours = timer.querySelector('#hours'),
//             minutes = timer.querySelector('#minutes'),
//             seconds = timer.querySelector('#seconds'),
//             timeInterval = setInterval(updateClock, 1000);// интервал обновления чтобы часы переписывались каждую секунду

//         updateClock();// сразу вызываем функциючтобыневидеть верстку а сразу переписать таймер

//         function updateClock() {// переписываем HTML
//             const t = getTimeRemaining(endtime);// заряжаем сюда рассчитаный объект и переписываем HTML

//             days.innerHTML = getZero(t.days);//передаем в подставлятель нулей значение из рассчетов
//             hours.innerHTML = getZero(t.hours);
//             minutes.innerHTML = getZero(t.minutes);
//             seconds.innerHTML = getZero(t.seconds);

//             if (t.total <= 0) {// если время уже вышло то таймер больше не переписывается
//                 clearInterval(timeInterval);
//             }
//         }
//     }

//     setClock('.timer', deadline);// вызываем функцию

// });






//Урок 42 Параметры документа, окна и работа с ним

// есть понятия document window screen

// const box = document.querySelector('.box'),
//       btn = document.querySelector('button');

//есть картинка которая показывает как можно получать высотуи ширину
// const width = box.clientWidth;// обращайвнимание какие свойства бордер бокс в цсс и величины
// const height = box.clientHeight;

// const width = box.offsetWidth;// с бордером марджином и полосой  прокрутки 
// const height = box.offsetHeight;// видимая часть

// const width = box.scrollWidth;// в горизонтальние проскроленное значение не входит толщина вертикальной прокрутки
// const height = box.scrollHeight;// полностью проскроленное значение


// btn.addEventListener('click', () => {// после клика инлайн высота установится на полную высоту прокрутки
//      box.style.height = box.scrollHeight + "px";
//     console.log(box.scrollTop);// при клике покажет сколько пролистал типо сколькосверху торчит и не видно
// });

//есть еще скроллыпо по отношению к странице


// console.log(box.getBoundingClientRect());// покажет координаты к примеру right это значение от левой границы окна браузера до правой границы элемента но он считает координаты не как в цсс а наоборот 
// console.log(box.getBoundingClientRect().top);// только значение топа


// const style = window.getComputedStyle(box);// все цсс стили которые можно только посмотреть 
// console.log(style.display);// посмотреть конкретный стиль

// const style = window.getComputedStyle(box, "тутможно указать псевдоэлемент");


// console.log(document.scrollTop);// нихера не покажет у document нет свойства scrolltop
// console.log(document.documentElement.scrollTop);// теперь покажет это значение можно устанавливать например 
// document.documentElement.scrollTop = 0;// отправить наверх

// window.scrollBy(0, 400);// относительный скролл скроллить к аргументам x, y. Работает от текущей позиции
// window.scrollTo(0, 400); // абсолютный скролл 




// Урок 43, 44 Создаем модальное окно
// сначалаккаждой кнопке которая должна вызыывать модальное окно надо прилепить атрибут data-modal в Html

// window.addEventListener('DOMContentLoaded', function () {

//     // Tabs

//     let tabs = document.querySelectorAll('.tabheader__item'),
//         tabsContent = document.querySelectorAll('.tabcontent'),
//         tabsParent = document.querySelector('.tabheader__items');

//     function hideTabContent() {

//         tabsContent.forEach(item => { // скрываем табы
//             item.classList.add('hide'); // выдаем нужные классы 
//             item.classList.remove('show', 'fade'); // тоггл кстати тут нельзя использовать
//         });

//         tabs.forEach(item => { //убираеем класс active укаждого таба
//             item.classList.remove('tabheader__item_active');
//         });
//     }

//     function showTabContent(i = 0) { // показать табы i=0 значитчто если функциявызываетсябезаргумента топо умолчанию выставится значение которое указано
//         tabsContent[i].classList.add('show', 'fade');
//         tabsContent[i].classList.remove('hide');
//         tabs[i].classList.add('tabheader__item_active');
//     }

//     hideTabContent();
//     showTabContent();

//     tabsParent.addEventListener('click', function (event) { // делегирование через родителя на все кнопки справа
//         const target = event.target; // чтобы постоянноне писать евент.таргет
//         if (target && target.classList.contains('tabheader__item')) { // тут проверка содержание класса внутри родителя определяем что мы точно кликнулив таб
//             tabs.forEach((item, i) => { // надо определить номер таба чтобы знать какой показывать
//                 if (target == item) { // если кликнутый таб равен перебераемому то вызываем функции
//                     hideTabContent(); // прячем все табы
//                     showTabContent(i); // показваем тот который совпал с кликаемым
//                 }
//             });
//         }
//     });



//     //Timer

//     const deadline = '2020-10-1';

//     function getTimeRemaining(endtime) {
//         const t = Date.parse(endtime) - Date.parse(new Date()),
//             days = Math.floor((t / (1000 * 60 * 60 * 24))), // округление доближайшего целого
//             seconds = Math.floor((t / 1000) % 60), // % возвращает остаток от деления
//             minutes = Math.floor((t / 1000 / 60) % 60), // если не влезает в час то тоже возвращается остаток
//             hours = Math.floor((t / (1000 * 60 * 60) % 24)); // тут если что то не будет влезать в целый день то вернется остаток

//         return { // функция возвращает объект 
//             'total': t,
//             'days': days,
//             'hours': hours,
//             'minutes': minutes,
//             'seconds': seconds
//         };
//     }

//     function getZero(num) { // подставляем 0 если значение меньше 10 чтобы не торчала цифра
//         if (num >= 0 && num < 10) {
//             return '0' + num;
//         } else {
//             return num;
//         }
//     }

//     function setClock(selector, endtime) { // функция которая получает элементы и записвает в них рассчитанное время

//         const timer = document.querySelector(selector),
//             days = timer.querySelector("#days"),
//             hours = timer.querySelector('#hours'),
//             minutes = timer.querySelector('#minutes'),
//             seconds = timer.querySelector('#seconds'),
//             timeInterval = setInterval(updateClock, 1000); // интервал обновления чтобы часы переписывались каждую секунду

//         updateClock(); // сразу вызываем функциючтобыневидеть верстку а сразу переписать таймер

//         function updateClock() { // переписываем HTML
//             const t = getTimeRemaining(endtime); // заряжаем сюда рассчитаный объект и переписываем HTML

//             days.innerHTML = getZero(t.days); //передаем в подставлятель нулей значение из рассчетов
//             hours.innerHTML = getZero(t.hours);
//             minutes.innerHTML = getZero(t.minutes);
//             seconds.innerHTML = getZero(t.seconds);

//             if (t.total <= 0) { // если время уже вышло то таймер больше не переписывается
//                 clearInterval(timeInterval);
//             }
//         }
//     }

//     setClock('.timer', deadline); // вызываем функцию



//Modals.Пробую сам. Получилось
// const buttons = document.querySelectorAll('[data-modal]');// получили кнопки
// const modal = document.querySelector('.modal');//получили модалку

// function toggler () {// собака - открывака - закрывака
//     modal.classList.toggle('show');// тогглер класса
// }

// buttons.forEach ((item,) => {//вешаем обработчк на каждую кнопку который вызывает тогглер по клику
//     item.addEventListener('click', toggler);
// });

//Modals.Из урока
// const modalTrigger = document.querySelectorAll('[data-modal]'),
//     modal = document.querySelector('.modal'),
//     modalCloseBtn = document.querySelector('[data-close]');

// modalTrigger.forEach(btn => {
//     btn.addEventListener('click', function () {
//         modal.classList.add('show');
//         modal.classList.remove('hide');
//         document.body.style.overflow = 'hidden'; //отрубаем скролл
//     });

//     function closeModal() {//собака - закрывака
//         modal.classList.add('hide');
//         modal.classList.remove('show');
//         document.body.style.overflow = ''; //врубаем скролл
//     }

//     modalCloseBtn.addEventListener('click', closeModal);

//     modal.addEventListener('click', (e) => { // если клик попадает по подложке то окно закрывается
//         if (e.target === modal) {
//             closeModal();// собака закрывака
//         }
//     });

//     document.addEventListener('keydown', (e) => {//при клавише escape нажатой окно тоже закрывается. Можно найти таблицу в интернете
//         if (e.code === "Escape" && modal.classList.contains('show')) {// работет толькотогда когда модальное окно открыто 
//             closeModal();
//         }
//     });
// });


//Модалс скролл мой вариант 

// const checkScroll = function checkScroll () {// собака - скролопроверяка - модальное окно открывака
//     console.log(document.documentElement.scrollTop);

//     if(document.documentElement.scrollTop > 3000) {

//         modal.classList.add('show');
//         modal.classList.remove('hide');
//         document.body.style.overflow = 'hidden';
//         document.removeEventListener('scroll',checkScroll);//суициднуться
//     }
// };



//  document.addEventListener('scroll', checkScroll);



//Модалс скролл вариант из урока

// Modal

//     const modalTrigger = document.querySelectorAll('[data-modal]'),
//         modal = document.querySelector('.modal'),
//         modalCloseBtn = document.querySelector('[data-close]');

//     modalTrigger.forEach(btn => {
//         btn.addEventListener('click', openModal);


//         function closeModal() {
//             modal.classList.add('hide');
//             modal.classList.remove('show');
//             document.body.style.overflow = '';
//         }

//         function openModal() {
//             modal.classList.add('show');
//             modal.classList.remove('hide');
//             document.body.style.overflow = 'hidden';
//             clearInterval(modalTimerId); //если пользователь сам открыл модальное окно то таймер обнуляется
//         }

//         modalCloseBtn.addEventListener('click', closeModal);

//         modal.addEventListener('click', (e) => {
//             if (e.target === modal) {
//                 closeModal();
//             }
//         });

//         document.addEventListener('keydown', (e) => {
//             if (e.code === "Escape" && modal.classList.contains('show')) {
//                 closeModal();
//             }
//         });

//         const modalTimerId = setTimeout(openModal, 3000); // тут он вынес опен модал в отдельную функцию и задал таймаут 

//         function showModalByScroll() {
//             if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) { // определяем чтопользователь долисталдо конца
//                 //первое это то что прокручено выше  второе этовысота того что видно сейчас третье - вся высота сайта
//                 openModal();
//                 window.removeEventListener('scroll', showModalByScroll); // убираем обработчик
//             }
//         }
//         window.addEventListener('scroll', showModalByScroll);
//     }); // кстати {once:true} тутнеподходит

// });







//45 Урок Функции-конструкторы

//Функция -объект по своей сути

// const num = new Number(3);// это будетобъект намбер укоторого value 3

// const num = new Function(3);// это тожебудет объект очень старый синтаксис

// function User(name, id){// функция-конструктор
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = () =>{
//         console.log(`Hello ${this.name}`);
//     };
// }

// User.prototype.exit = function(name) {// прототип. все потомки будут иметь эту функцию это не setPrototype тут мы добавляем методы в уже существующий объект
//     // Вместо этого можно записать как ключ и свойство объекта кстати 
//     console.log(`Пользователь ${this.name} ушел`);
// };

// const Ivan = new User('ivan', 28);//создание новых объектов через конструктор
// const Alex = new User('Alex', 20);// просто вводимаргументы и получаем шаблонный объект


// Ivan.exit();

// Ivan.hello();

// есть классы в новыхверсиях языка выше написана версия как это работает "под капотом" 
// можно записывать это проще 



//46 Урок Контекст вызова this

// this- место для функционирования. Контекст вызова

// function showThis (a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         // return this.a + this.b;// если так то получим в консоль undefined
//         return a + b;//замыкание - когда функция ищетаргументы внутри себя потом снаружи
//     }
//     console.log(sum());
// }

// showThis(4, 5);


// const obj = {
//     a:20,
//     b:15,
//     sum:function(){
//         console.log(this);// если мы используем метод внутри объекта то this будеет ссылаться на объект в котором он вызван
//     }
// };
// obj.sum();

// const obj = {
//     a:20,
//     b:15,
//     sum:function(){
//         function shout(){
//             console.log(this);// а тут уже контекст вызова будет undefined 
//         }
//         shout();
//     }
// };


// function User(name, id){// функция-конструктор из прошлого урока
//     this.name = name;// внутри такой функции this это только что созданый новый объект 
//     this.id = id;
//     this.human = true;
//     this.hello = function (){
//         console.log('Hello!'+ this.name);// тут тоже this- это создаваемый объект
//     }

// }
// let ivan = new User('Ivan', 23);// в THIS тут подставляется  этот создаваемый объект


// console.log(this);
// // без "use strict" получим this = window вконсоль как глобальный объет
// // если стрикт включен то получим this = undefined
// // контекст у методов объекта - сам объект
// // this в конструкторах и классах это новый экземпляр объекта
// // Ручная привязка this: call, apply, bind

// function sayName(surname) {
//     console.log(this);//// 
//     console.log(this.name + surname);
// }

// const user = {
//     name:'John'
// };
// // контролирем контекст вызова
// sayName.call(user,'Smith');// передаем контекст вызова который мы хотим передать в эту функцию
// sayName.apply(user, ['Smith']);// тут аргументы передаются в массиве
// //разница только в синтаксисе



// function count(num) {
//     return this*num;
// }

// const double = count.bind(2);// создаем новую функцию double на основе заданной с жестко заданным значением this
// console.log(double(13));// передаем в double число которое нужно удвоить









// const btn = document.querySelector('button');

// btn.addEventListener('click', function () {
//     console.log(this);//функция записана вклассическом варианте. тут контекст вызова - сам элемент на котором произошло событие. Тоже самое что e.target

// });
// // меняем на стрелочную функцию 
// btn.addEventListener('click',  (e) => {
//     console.log(e.target);// контекст вызова потеряется и станет undefined если используетсястрелочная функция
//     //тут подходит только e.target и this не проканает

// });

// //Это вырезка из кода выше
// const obj = {
//     a:20,
//     b:15,
//     sum:function(){
//         console.log(this);// если мы используем метод внутри объекта то this будеет ссылаться наобъект в котором он вызван
//     }
// };
// obj.sum();

// const obj = {
//     a:20,
//     b:15,
//     sum:function(){
//         function shout(){
//             console.log(this);// а тут уже контекст вызова будет undefined 
//         }
//         shout();
//     }
// };


// //у стрелочной функции нет своего контекста вызова она берет его у своего родителя


// const obj = {
//     num: 5,
//     sayNumber: function() {
//         const say = () => {
//             console.log(this.num);// контекст вызова будет не undefined. Тут this - родительский объект  потому что функция стрелочная
//         };

//         say();
//     }
// };

// obj.sayNumber();







// const double = (a) => {
//     return a * 2;
// };

// // этот кодможно записать так:
// const double = (a) => a * 2// return подставится автоматически

// const double = a => a * 2// если 1 аргумент то можно писать даже без скобок





//Классы ES 6

//Классы - синтаксическая обертка конструктора

// class Rectagle {
//     constructor(height, width) {// тут задаем аргументы которые будут приходить извне при создании экземпляра класса
//         this.height = height;
// //         this.width = width;

//     }
//     calcArea(){// в классе методы задаются без двоеточий или ключевого слова function
//         return this.height * this.width;// this здесь новый создаваемый объект
//     }
// }


// class ColoredRectngleWithText extends Rectagle{ //наследование/ расширение
//     //тут надо переписать аргументы но методы занаследуются сами
//     constructor(height, width, text, bgColor) {
//         super(height, width);//идет первой строчкой в конструкторе переносит код из материнского класса чтобы его не копировать
//         this.text = text;
//         this.bgColor = bgColor
//     }
//     showMyPros(){
//         console.log(`Текст: ${this.text}, цвет ${this.bgColor}`);
//     }
// }

// const div = new ColoredRectngleWithText(25,10, 'Hello World', 'red');

// div.showMyPros();
// console.log(div.calcArea());

// const square = new Rectagle(10, 10);// используем класс - конструктор
// const long  = new Rectagle(20, 100);
// console.log(long.calcArea());//метод будет работать на любой объект созданный через этот класс
// console.log(square.calcArea());// вызываем метод нашего класса






// Урок 48 Используем классы в реальной работе


//Короче надо шаблонизировать карточки на сайте и создавать их только передавая аргументы


//Ну походусначала надо сделать класс и на основе объекта из этого класса написать код 
// const menuItems = document.querySelector(".menu__field .container");

// menuItems.innerHTML = '';

// class MenuItem {
//     constructor(img, subtitle, description, price) {
//         this.img = img;
//         this.subtitle = subtitle;
//         this.description = description;
//         this.price = price;
//     }

//     addMyItem() {
//         menuItems.innerHTML += `
//         <div class="menu__item">
//             <img src="img/tabs/${this.img}.jpg" alt="${this.img}">
//             <h3 class="menu__item-subtitle">Меню "${this.subtitle}"</h3>
//             <div class="menu__item-descr">${this.description}</div>
//             <div class="menu__item-divider"></div>
//             <div class="menu__item-price">
//                 <div class="menu__item-cost">Цена:</div>
//                 <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
//             </div>
//         </div>`
//     }

// }

// const fitnessMenu = new MenuItem('vegy', 'Фитнес', 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', '1000');

// fitnessMenu.addMyItem();

// const burgerMenu = new MenuItem('burger','ЖирМакс','Ни в чем себе не отказывайте.Чем больше живот, тем больше в вас счастья!Ни в чем себе не отказывайте.Чем больше живот, тем больше в вас счастья!Ни в чем себе не отказывайте.Чем больше живот, тем больше в вас счастья!Ни в чем себе не отказывайте.Чем больше живот, тем больше в вас счастья!','1500');

// burgerMenu.addMyItem();
// const burgerMenu2 = new MenuItem('elite','ЭлитБуржуй','Ни в чем себе не отказывайте.Чем больше живот, тем больше в вас счастья!Ни в чем себе не отказывайте.Чем больше живот, тем больше в вас счастья!Ни в чем себе не отказывайте.Чем больше живот, тем больше в вас счастья!Ни в чем себе не отказывайте.Чем больше живот, тем больше в вас счастья!','3000');
// burgerMenu2.addMyItem();



// Так атеперь из курса
// Используем классы для создание карточек меню

//  class MenuCard {//создали класс
//     constructor(src, alt, title, descr, price, parentSelector) {
//         this.src = src;
//         this.alt = alt;
//         this.title = title;
//         this.descr = descr;
//         this.price = price;
//         this.parent = document.querySelector(parentSelector);//тут добавили выбор куда записывать Html
//         this.transfer = 27;//курс гривны
//         this.changeToUAH(); // вызов функции прям в классе
//     }

//     changeToUAH() {//функция первода  валют
//         this.price = this.price * this.transfer; 
//     }

//     render() {// функция которая заливает в HtML
//         const element = document.createElement('div');//див - обертка
//         element.innerHTML = `
//             <div class="menu__item">
//                 <img src=${this.src} alt=${this.alt}>
//                 <h3 class="menu__item-subtitle">${this.title}</h3>
//                 <div class="menu__item-descr">${this.descr}</div>
//                 <div class="menu__item-divider"></div>
//                 <div class="menu__item-price">
//                     <div class="menu__item-cost">Цена:</div>
//                     <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
//                 </div>
//             </div>
//         `;// ну тут я также сделал только через +=
//         this.parent.append(element);// запихнуть этот див в парент который будет передаваться аргументом
//     }
// }


// //ну адальше создаем объекты и вызываем рендер
// new MenuCard(
//     "img/tabs/vegy.jpg",
//     "vegy",
//     'Меню "Фитнес"',
//     'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
//     9,
//     ".menu .container"
// ).render();

// new MenuCard(
//     "img/tabs/post.jpg",
//     "post",
//     'Меню "Постное"',
//     'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
//     14,
//     ".menu .container"
// ).render();

// new MenuCard(
//     "img/tabs/elite.jpg",
//     "elite",
//     'Меню “Премиум”',
//     'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
//     21,
//     ".menu .container"
// ).render();










//Лессон 49 Rest оператор и параметры по умолчанию




//spread оператор ... раскладывает массив
//rest отдельные элменты собирает в массив

// const log = function(a, b, ...rest) {//допустим мы не знаем какие аргументы будут в этой функции точно
//     console.log(a, b, rest);
// }
// log('basic', 'второй бейзик', 'третий', "четвертый");// >>> basic второй бейзик [ 'третий', 'четвертый' ]


// function calcOrDouble(number, basis){
//     basis = basis || 2;//если базисне задан то оператор || вернет 2 потому что 2 - правда 
//     console.log(number*basis);
// }

// calcOrDouble(3, 5);// >>>> 15
// calcOrDouble(3);// >>> 6

// function calcOrDouble(number, basis=2){// в ЕС6 можно задавать аргумент по умолчанию так
//     console.log(number*basis);
// }

// calcOrDouble(3);// >>>> 6

//Теперь на практике по коду из предыдущего урока

// class MenuCard {
//     constructor(src, alt, title, descr, price, parentSelector, ... classes) {// добавляем rest оператор. Он ксатати неподдерживает дефолтные значения
//         this.src = src;
//         this.alt = alt;
//         this.title = title;
//         this.descr = descr;
//         this.price = price;
//         this.classes = classes;
//         this.parent = document.querySelector(parentSelector);
//         this.transfer = 27;
//         this.changeToUAH(); 
//     }

//     changeToUAH() {
//         this.price = this.price * this.transfer; 
//     }

//     render() {
//         const element = document.createElement('div');//див - обертка
//         if(this.classes.length === 0){// если в классы ничего не было передано - пустой массив
//             this.element = "menu__item";// дефолтный класс записываем в объект 
//             element.classList.add(this.element);//этот класс пришиваем к обертке
//         }else {// если передали хоть один класс то запускаем перебор 
//             this.classes.forEach(className => element.classList.add(className));
//             //this.classes - это массив из rest оператора. Мы его перебираем через forEach className - перебираемый элемент массивав данный момент и через стрелочную функцию добавляем каждый класс
//             //в Html убираем внешнююобертку с классом menu__item

//         }
//         element.innerHTML = `
//             <img src=${this.src} alt=${this.alt}>
//             <h3 class="menu__item-subtitle">${this.title}</h3>
//             <div class="menu__item-descr">${this.descr}</div>
//             <div class="menu__item-divider"></div>
//             <div class="menu__item-price">
//                 <div class="menu__item-cost">Цена:</div>
//                 <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
//             </div>
//         `;
//         this.parent.append(element);
//     }
// }



// new MenuCard(
//     "img/tabs/vegy.jpg",
//     "vegy",
//     'Меню "Фитнес"',
//     'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
//     9,
//     ".menu .container",
//     'menu__item'//в каждое создание новой карточки добавляем класс menu__item
// ).render();

// new MenuCard(
//     "img/tabs/post.jpg",
//     "post",
//     'Меню "Постное"',
//     'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
//     14,
//     ".menu .container",
//     'menu__item',//в каждое создание новой карточки добавляем класс menu__item
//     'big'//можно добавлять сколько угодно классов
// ).render();

// new MenuCard(
//     "img/tabs/elite.jpg",
//     "elite",
//     'Меню “Премиум”',
//     'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
//     21,
//     ".menu .container",
//     'menu__item'//в каждое создание новой карточки добавляем класс menu__item
// ).render();

//еще надо сделать так чтобы по дефолту добавлялся класс menu__item чтобы верстка не сломалась если его не укажут




//Урок 50 Локальные сервера

//Сервер - бек энд часть
// Хостинг - арендованное место на сервере
//локальные сервера дают такой же функционал как на хостинге для тестирования
// post запросы без сервера не оБрабатываются



//Урок 51 JSON 
//JSON- javascript object notation
//это набор пар ключ - значение


// const persone = {
//     name: 'Alex',
//     tel: '+74658884658'
// };


//Допустим вот этот объект надо передать на сервер

// надо конвертировать объект в нужный формат

// console.log(JSON.stringify(persone));// >>> {"name":"Alex","tel":"+74658884658"} это тот же самый объект но в двойных кавычках


// //теперь допустим нам с сервераприходит JSON
// console.log(JSON.parse(JSON.stringify(persone)));// >>> { name: 'Alex', tel: '+74658884658' } нормальный объект

// глубокие копии подъезжают

// const persone = {// делаем вложенный объект который будем копировать
//     name: 'Alex',
//     tel: '+74658884658',
//     parents: {
//         mom:'Olga',
//         dad:'Mike'
//     }

// };

// const clone = JSON.parse(JSON.stringify(persone));// стрингифаем и парсим первоначальный объект и будет глубокий клон 
// clone.parents.mom = 'Ann';
// console.log(persone);
// console.log(clone);



//Урок 52 Пощадите AJAX и общение с сервером
// короче нам что то надо делать без перезагрузки страницы.Например подгружать товары из интернет магазина при фильтрации
//AJAX (аббревиатура от «Asynchronous Javascript And Xml»
//HTTP запросы

// const inputRub = document.querySelector('#rub'),
//     inputUsd = document.querySelector('#usd');


// inputRub.addEventListener('input', () => {
//     const request = new XMLHttpRequest(); // создание запроса через конструктор
//     // настройки запроса на сервер
//     request.open('GET', 'js/current.json'); // 1- method(GET и POST) 2 - url(относительно HTML) 3 - async 4 - login 5 - password
//     // теперь что именно мы отправляем 
//     request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); // это HTTP заголовок. Не ебу что это такое
//     request.send(); // тут в аргументе передается что то если используется POST


// теперь надо разобрать полученные от сервера данные
// request.addEventListener('readystatechange', () =>{//отслеживает статус готовности обработки запроса событие срабатывает когда readyState меняет значение
//     if(request.readyState === 4 && request.status === 200){// проверяем готовность и успешность обработки запроса. Если все готово и без ошибок
//         console.log(request.response);// показать ответ сервера
//         const data = JSON.parse(request.response);// конвертировать в нормальный объект
//         inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);// записать ответ в value инпута с usd c округлением до 2 знаков
//     } else {
//         inputUsd.value = "Что - то наебнулось";// Всегда оповещайпользователя
//     }
// });

// status - 404 например. это ответы от сервера по коду
// statusText - текстровое описание ответа от сервера "not found"
// response - ответ от сервера 
// readyState - состояния запроса от 0 до 4 4 - done


// альтернативный вар используется чаще
//     request.addEventListener('load', () => { //это событие простосрабатывает когда запрос завершен а нена каких то  этапах
//         if (request.status === 200) { // тут только статус проверяем а не этапы если все заебись то:
//             console.log(request.response); // показать ответ сервера
//             const data = JSON.parse(request.response); // конвертировать в нормальный объект
//             inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2); // записать ответ в value инпута с usd c округлением до 2 знаков
//         } else {
//             inputUsd.value = "Что - то наебнулось";
//         }
//     });

// });





//Урок 53 реализация скрипта отправки данных на сервер


// короче делаем чтоб формы отправлялись без перезагрузки


// Forms
// const forms = document.querySelectorAll('form');// получаем формы
// const message = {// объект в котором будет список фразв различных ситуациях 
//     loading: 'Загрузка...',
//     success: 'Спасибо! Скоро мы с вами свяжемся',
//     failure: 'Что-то пошло не так...'
// };

// forms.forEach(item => {// под каждую форму из массива подвязываем нашу функцию по отправке данных 
//     postData(item);// передаем каждую форму
// });

// function postData(form) {//функция по отправке данных на сервер
//     form.addEventListener('submit', (e) => {// обработчик события отправки формы
//         e.preventDefault();// отмена стандартного поведения 

//         let statusMessage = document.createElement('div');// в этот элемент будет записываться статус из объекта
//         statusMessage.classList.add('status');//Дальше походу это будет стилизоваться
//         statusMessage.textContent = message.loading;
//         form.appendChild(statusMessage);// закидываем этот див в форму

//         const request = new XMLHttpRequest();// создаем объект запроса  данных насервер
//         request.open('POST', 'server.php');// настраиваем запрос
//         request.setRequestHeader('Content-type', 'application/json; charset=utf-8');// когда используется связка xmlhttp реквест и form-data не нужноустанавливать заголовок 
//         //вот про вот эту шапку надо расшарить.Нихуя не понятно даже в гугле.Это видимо старая тема
//         //ААААААААААААААААААААААаа боже блять чтопроисходит?????????7спасите
//         const formData = new FormData(form);//собираем данные с формы через специальный конструктор. Но в атрибутах инпута всегда должен быть name иначе конструктор не сработает
//         // можно отправлять данные просто в таком формате а можно в джейсоне



//         const object = {};// переделваем FormData в JSON потому что почеловечески это сделать нельзя
//         formData.forEach(function(value, key){
//             object[key] = value;
//         });
//         const json = JSON.stringify(object);// а вот теперь можно конвертировать

//         request.send(json);// отправвляем JSON
//         //там еще сервер PHP надобыло переделывать



//         request.addEventListener('load', () => {// по окончании обработки запроса
//             if (request.status === 200) {//если статус 200
//                 console.log(request.response);//показываем в консоль ответ с сервера
//                 statusMessage.textContent = message.success;// переписываем месседж
//                 form.reset();// обнуляем форму
//                 setTimeout(() => {// удаляем сообщение о статусе через 2 секунды
//                     statusMessage.remove();
//                 }, 2000);
//             } else {
//                 statusMessage.textContent = message.failure;// переписываем месседж если все наебнулось
//             }
//         });
//     });
// }





// Урок 54 красивое оповещение пользователя
// window.addEventListener('DOMContentLoaded', function() {

//     // Tabs

//     let tabs = document.querySelectorAll('.tabheader__item'),
//         tabsContent = document.querySelectorAll('.tabcontent'),
//         tabsParent = document.querySelector('.tabheader__items');

//     function hideTabContent() {

//         tabsContent.forEach(item => {
//             item.classList.add('hide');
//             item.classList.remove('show', 'fade');
//         });

//         tabs.forEach(item => {
//             item.classList.remove('tabheader__item_active');
//         });
//     }

//     function showTabContent(i = 0) {
//         tabsContent[i].classList.add('show', 'fade');
//         tabsContent[i].classList.remove('hide');
//         tabs[i].classList.add('tabheader__item_active');
//     }

//     hideTabContent();
//     showTabContent();

//     tabsParent.addEventListener('click', function(event) {
//         const target = event.target;
//         if(target && target.classList.contains('tabheader__item')) {
//             tabs.forEach((item, i) => {
//                 if (target == item) {
//                     hideTabContent();
//                     showTabContent(i);
//                 }
//             });
//         }
//     });

//     // Timer

//     const deadline = '2020-05-11';

//     function getTimeRemaining(endtime) {
//         const t = Date.parse(endtime) - Date.parse(new Date()),
//             days = Math.floor( (t/(1000*60*60*24)) ),
//             seconds = Math.floor( (t/1000) % 60 ),
//             minutes = Math.floor( (t/1000/60) % 60 ),
//             hours = Math.floor( (t/(1000*60*60) % 24) );

//         return {
//             'total': t,
//             'days': days,
//             'hours': hours,
//             'minutes': minutes,
//             'seconds': seconds
//         };
//     }

//     function getZero(num){
//         if (num >= 0 && num < 10) { 
//             return '0' + num;
//         } else {
//             return num;
//         }
//     }

//     function setClock(selector, endtime) {

//         const timer = document.querySelector(selector),
//             days = timer.querySelector("#days"),
//             hours = timer.querySelector('#hours'),
//             minutes = timer.querySelector('#minutes'),
//             seconds = timer.querySelector('#seconds'),
//             timeInterval = setInterval(updateClock, 1000);

//         updateClock();

//         function updateClock() {
//             const t = getTimeRemaining(endtime);

//             days.innerHTML = getZero(t.days);
//             hours.innerHTML = getZero(t.hours);
//             minutes.innerHTML = getZero(t.minutes);
//             seconds.innerHTML = getZero(t.seconds);

//             if (t.total <= 0) {
//                 clearInterval(timeInterval);
//             }
//         }
//     }

//     setClock('.timer', deadline);

//     // Modal

//     const modalTrigger = document.querySelectorAll('[data-modal]'),
//         modal = document.querySelector('.modal');

//     modalTrigger.forEach(btn => {
//         btn.addEventListener('click', openModal);
//     });

//     function closeModal() {
//         modal.classList.add('hide');
//         modal.classList.remove('show');
//         document.body.style.overflow = '';
//     }

//     function openModal() {
//         modal.classList.add('show');
//         modal.classList.remove('hide');
//         document.body.style.overflow = 'hidden';
//         clearInterval(modalTimerId);
//     }

//     modal.addEventListener('click', (e) => {
//         if (e.target === modal || e.target.getAttribute('data-close') == "") {//там где добавляли закрывание поподложке добавляем закрывание по крестику
//             // типо цель клика должна быть с атрибутом дата клоз и быть пустой строокой
//             //теперь дае в новосозданном модальном окне обработчик будет работать
//             closeModal();
//         }
//     });

//     document.addEventListener('keydown', (e) => {
//         if (e.code === "Escape" && modal.classList.contains('show')) { 
//             closeModal();
//         }
//     });

//     const modalTimerId = setTimeout(openModal, 300000);
//     // Изменил значение, чтобы не отвлекало

//     function showModalByScroll() {
//         if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
//             openModal();
//             window.removeEventListener('scroll', showModalByScroll);
//         }
//     }
//     window.addEventListener('scroll', showModalByScroll);

//     // Используем классы для создание карточек меню

//     class MenuCard {
//         constructor(src, alt, title, descr, price, parentSelector, ...classes) {
//             this.src = src;
//             this.alt = alt;
//             this.title = title;
//             this.descr = descr;
//             this.price = price;
//             this.classes = classes;
//             this.parent = document.querySelector(parentSelector);
//             this.transfer = 27;
//             this.changeToUAH(); 
//         }

//         changeToUAH() {
//             this.price = this.price * this.transfer; 
//         }

//         render() {
//             const element = document.createElement('div');

//             if (this.classes.length === 0) {
//                 this.classes = "menu__item";
//                 element.classList.add(this.classes);
//             } else {
//                 this.classes.forEach(className => element.classList.add(className));
//             }

//             element.innerHTML = `
//                 <img src=${this.src} alt=${this.alt}>
//                 <h3 class="menu__item-subtitle">${this.title}</h3>
//                 <div class="menu__item-descr">${this.descr}</div>
//                 <div class="menu__item-divider"></div>
//                 <div class="menu__item-price">
//                     <div class="menu__item-cost">Цена:</div>
//                     <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
//                 </div>
//             `;
//             this.parent.append(element);
//         }
//     }

//     new MenuCard(
//         "img/tabs/vegy.jpg",
//         "vegy",
//         'Меню "Фитнес"',
//         'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
//         9,
//         ".menu .container"
//     ).render();

//     new MenuCard(
//         "img/tabs/post.jpg",
//         "post",
//         'Меню "Постное"',
//         'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
//         14,
//         ".menu .container"
//     ).render();

//     new MenuCard(
//         "img/tabs/elite.jpg",
//         "elite",
//         'Меню “Премиум”',
//         'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
//         21,
//         ".menu .container"
//     ).render();

//     // Forms

//     const forms = document.querySelectorAll('form');
//     const message = {
//         loading: 'icons/spinner.svg',// адрес к картинке
//         success: 'Спасибо! Скоро мы с вами свяжемся',
//         failure: 'Что-то пошло не так...'
//     };

//     forms.forEach(item => {
//         postData(item);
//     });

//     function postData(form) {
//         form.addEventListener('submit', (e) => {
//             e.preventDefault();

//             let statusMessage = document.createElement('img');// вместо дива img тег
//             statusMessage.src = message.loading;
//             statusMessage.style.cssText = `
//                 display: block;
//                 margin: 0 auto;
//             `;
//             form.insertAdjacentElement('afterend', statusMessage);// append неиспользуем чтобы верстка не плющилась 

//             const request = new XMLHttpRequest();
//             request.open('POST', 'server.php');
//             request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//             const formData = new FormData(form);

//             const object = {};
//             formData.forEach(function(value, key){
//                 object[key] = value;
//             });
//             const json = JSON.stringify(object);

//             request.send(json);

//             request.addEventListener('load', () => {
//                 if (request.status === 200) {
//                     console.log(request.response);
//                     showThanksModal(message.success);//вставляем нашу функцию
//                     statusMessage.remove();
//                     form.reset();
//                 } else {
//                     showThanksModal(message.failure);// и сюда
//                 }
//             });
//         });
//     }
// // вот отсюданачинается
//     function showThanksModal(message) {
//         const prevModalDialog = document.querySelector('.modal__dialog'); // получаем блок в модальном окне

//         prevModalDialog.classList.add('hide');// скрываем структуру обычного модального окна
//         openModal();// открываем модальное окно но уже без контента

//         const thanksModal = document.createElement('div');// создаем блок - обертку
//         thanksModal.classList.add('modal__dialog');// класс который применен к модалке в верстке применяется к новому модальному окну
//         thanksModal.innerHTML = `
//             <div class="modal__content">
//                 <div class="modal__close" data-close>×</div>
//                 <div class="modal__title">${message}</div>
//             </div>
//         `;// чтобы крестик в верстке работал при динамической подстановке надо сделать делегирование событий выше где прописывался код для модальных окон 
//         document.querySelector('.modal').append(thanksModal);// вставляем модальное окно которое сверстали
//         setTimeout(() => {//через 4 секнды убираем элемент 
//             thanksModal.remove();
//             prevModalDialog.classList.add('show');// старое модальное показываем
//             prevModalDialog.classList.remove('hide');
//             closeModal();
//         }, 4000);
//     }
// });





// Урок 55 Promise ES6

// Callback hell- когда очень много асинхронного кода

// console.log('Запрос данных...');

// const req = new Promise(function (resolve, reject) {/// создаем обещание и помещаем 2 таких аргумента вместо которых будет подставляться функция
//     //resolve если все збс reject если все хуево

//     setTimeout(() => {// это имитация запроса на сервер
//         console.log('Подготовка данных...');

//         const product = {
//             name: 'TV',
//             price: 2000
//         };

//         resolve(product);// ато аргумент - функция которая будет передаваться
//         //тут в функцию передаются какието данные которые заретёрнятся
        
//     }, 2000);

// });
// //сюда приходит product из resolve затем он модифицируется опять через промис req2 и возвращается в req2.then
// req.then((product)=> {// метод then принимает внутрь себя такой аргумент с функцией который называется resolve
//    const req2 = new Promise((resolve,reject)=> {
//     setTimeout(() => {
//         product.status = 'order';
//         resolve(product);
//     }, 2000);
//    })
// })//метод который выполняется на промисе в случае положительного исхода. внутрь помещается функция которая будет передаваться в resolve

// req2.then(data => {//принимаем модифицированный продукт и выводим его в консоль
//    console.log(data); 
// });



// //вроде этот код ничем не отличается от колбек хелла
// // преимущество промисов в том что их можно возвращать по цепочке


// req.then((product) => { 
//     return new Promise((resolve, reject) => {//тут мы не стали создавать переменную req2 а написали return
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//         }, 2000);
//     });
// }).then(data => { // вставляем бывший req2 сюда
//     data.modyfy = true;// можно добавлять не только асинхронный код с таймаутами или временем выполнения как запрос на сервер  
//     return data;//возвращаем
// }).then(data => {// опять принимаем и выводим
//     console.log(data);
// });


// // он говорит что такой код удобнее
// //все четко следует друг за другом

// //теперь про reject


// req.then((product) => { 
//     return new Promise((resolve, reject) => {//тут мы не стали создавать переменную req2 а написали return
//         setTimeout(() => {
//             product.status = 'order';
//             reject();
//         }, 2000);
//     });
// }).then(data => { // вставляем бывший req2 сюда
//     data.modyfy = true;// можно добавлять не только асинхронный код с таймаутами или временем выполнения как запрос на сервер  
//     return data;//возвращаем
// }).then(data => {// опять принимаем и выводим
//     console.log(data);
// }).catch(()=>{//Пишем catch в конце сюда приходит реджект если на любом этапе кода что то пойдет не так
//     console.error("Произошла ошибка")
// }).finally( ()=> {// прописывается в конце и работает при любом исходе - положительном или даже если что то наебнется
//     console.log('Finally');
//     //тут можно например очиститьформу
// });



// const test = time => {
//     return new Promise( resolve =>{
//         setTimeout(() => resolve(), time);
//     });
// };

// test(1000).then(() => console.log('1000ms'));
// test(2000).then(() => console.log('2000ms'));

// Promise.all([test(1000), test(2000)]).then(() => {// Принимает в себя массив с промисами . эта хрень нужна для того чтобы убедиться что все они выполнены
//     // ждем загрузки всех промисов и только потом что то делаем
//     console.log('ALL');
// });

// Promise.race([test(1000), test(2000)]).then(() => {// Принимает в себя массив с промисами 
//     // после загрузки первого промиса сразу делаем что то не дожидаясь второго
//     console.log('ALL'); 
// });
// второй промис тоже работает но в консоль ALL попадает через секунду




//Урок 56 Fetch API

//ну эта херня круче чем xmlhttpRequest
// API - application programmic interface
//Интерфейс какого то ПО или приложения
//Набор данных и возможностей который предоставляет нам готовое решение
//Короче готовые методы и свойства

//Есть сайт JSON placeholder базаданных к которой можно обращаться для тестирования

// fetch('https://jsonplaceholder.typicode.com/todos/1')// если не указывать никаких параметров то то классический гет запрос
// //из первойстрочки возвращается промис
// //итак мыполучаем ответ
//   .then(response => response.json())//у фетча есть метод .json. конвертирует из JSONа  Он возвращает промис. Наоснове которого можно построить дальнейшую цепочку 
//   .then(json => console.log(json))// получаем обычный джаваскриптовый объект в консоль




// window.addEventListener('DOMContentLoaded', function() {


//     // Forms

//     const forms = document.querySelectorAll('form');
//     const message = {
//         loading: 'img/form/spinner.svg',
//         success: 'Спасибо! Скоро мы с вами свяжемся',
//         failure: 'Что-то пошло не так...'
//     };

//     forms.forEach(item => {
//         postData(item);
//     });

//     function postData(form) {
//         form.addEventListener('submit', (e) => {
//             e.preventDefault();

//             let statusMessage = document.createElement('img');
//             statusMessage.src = message.loading;
//             statusMessage.style.cssText = `
//                 display: block;
//                 margin: 0 auto;
//             `;
//             form.insertAdjacentElement('afterend', statusMessage);
        
//             const formData = new FormData(form);

//             const object = {};// тутконвертируем только если отправляем в JSONе
//             formData.forEach(function(value, key){
//                 object[key] = value;
//             });
//             //Нувотон собсно фетч запрос вместо XmlHTTPRequest
//             //Если внутри фетча промис попадает на ошибку которая связана с хттп протоколом он не перейдет в reject только если реально что то наебнулось
//             // В след уроке разбирается эта херня
//             fetch('server.php', {// в этот объект добавляются настройки.Их много но основыные это метод и бади 
//                 method: 'POST',//метод
//                 headers: {// заголовки определяют какой контент мы отправляем.Заголовки нужны если отправляем JSON Тоже идут в объекте
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(object)//переводим в JSON формат  данные из формы. Задаем это в настройки фетча
//                 //все - запрос отправлен
//                 //раньше мы смотрели реквест статус 200 и когда событие совершалось выполняли определенные действия
//             })
//             .then(data => data.text())// еще одинметод фетча который превращает ответ от запроса в текст
//             .then(data => {//дата - это респонс из промиса
//                 console.log(data);// выводим респонс в консоль
//                 showThanksModal(message.success);
//                 statusMessage.remove();
//             }).catch(() => {//при ошибке выводим это
//                 showThanksModal(message.failure);
//             }).finally(() => {//ну и влюбом случае очищаем форму
//                 form.reset();
//             });
//         });
//     }

//     function showThanksModal(message) {
//         const prevModalDialog = document.querySelector('.modal__dialog');

//         prevModalDialog.classList.add('hide');
//         openModal();

//         const thanksModal = document.createElement('div');
//         thanksModal.classList.add('modal__dialog');
//         thanksModal.innerHTML = `
//             <div class="modal__content">
//                 <div class="modal__close" data-close>×</div>
//                 <div class="modal__title">${message}</div>
//             </div>
//         `;
//         document.querySelector('.modal').append(thanksModal);
//         setTimeout(() => {
//             thanksModal.remove();
//             prevModalDialog.classList.add('show');
//             prevModalDialog.classList.remove('hide');
//             closeModal();
//         }, 4000);
//     }
// });




//Урок 57 методы перебора массивов


//Про forEach не забываемок)
//фо ич перебирает массив но не возвращает новый

//filter


// const names = ['Kate', 'Olga', 'Nika', 'VeroNIKA'];

// const shortNames = names.filter(function (item) {// аргумент item это каждый отдельный прербираемый элемент массива
//     return item.length < 5;// вернуть все имена длина которых меньше 5 символов и сформировать из них новый массив
// });

// console.log(shortNames);



// map позволяет взять исходный массив и изменить каждый элемент внутри него

// const answers = ['IvAn', 'AnaA', 'HellO'];

// const result = answers.map(item => {// Каждый элемент в ловеркейс
//     return item.toLowerCase()
// });

// console.log(result);


// every/some возвращают либо true либо false

// const some = [4, 'qwq', 'irikf'];

// console.log(some.some(item => typeof(item) === 'number'));// >>> true если хоть один элемент подходит по критериям. в такой стрелочной функкции return подставляется сам

// console.log(some.every(item => typeof(item) === 'number'));// >>> true если все элементы подходят по условию


//reduce схлопывает массив в одно значение


// const arr = [4, 5, 1, 3, 2, 6];
// // первый аргумент sum - сумма всех элементов. Изнаячально равен 0. 
// //current это как item в переборе

// const  res = arr.reduce((sum, current) => sum + current);
// console.log(res);

// теперь reduce со строками

// const arr = ['apple', 'pear', 'pulm'];
// //допустим нам надо сделатьсписок через запятую
// const res = arr.reduce((sum, current) => `${sum}, ${current}`);

// console.log(res);

// const arr = [4, 5, 1, 3, 2, 6];
// const  res = arr.reduce((sum, current) => sum + current, 3);// 3 - это начпльное значение.То есть 4 будет прибавляться к 3 а не к 0 как было по умолчанию
//  console.log(res);




// const obj = {
//     ivan:'persone',
//     ann:'persone',
//     dog:'animal',
//     cat:'animal'
// };

// Допустим задача достать имена людей

// const newArr = Object.entries(obj);// превращет объект в массив массивов

// console.log(newArr);



// const newArr = Object.entries(obj)
// .filter(item => item[1] === 'persone')// чейнинг//массив с 2 массивами где второй элемент равен стороке 'persone'
// .map(item => item[0]);// теперь каждый массив возвращаем только с первым элементом

// console.log(newArr);// получим в консоль массив с 2 массивами где второй элемент равен стороке 'persone'





//Урок 58 Подробно про npm и проект. JSON сервер

//npm - кусочки готового кода которые можно вставлять себе в проект

//добавили файл с настройками в проект package.json и установили короче через консоль джейсон сервер

// нихуя не понял запоминать не собираюсь

//вроде это чтобы эмулировать бек энд


//прикрепили базу данных впроект и установили большую папку с готовыми кусками кода
//по хорошему ее надо настроить чтобы она в гит не пушилась но у меня все наебнулось с гитом


//итак обращаемся  к базе


// fetch('http://localhost:3000/menu')// этот адрес показывается при открытии этогофайла через джейсон сервер через коноль
// .then(data => data.json())// разджейсониваем)
// .then(res => console.log(res));






//Урок 59 получение данных с сервера Async/Await ES8\

// тут 2 части: используем фетч для постинга ну и собираем карточки по запросу наервер 


//Короче задача получить данные от сервера и записать на основе этих данных карточки 
// npxjson-server --watch db.json пиши в консоль потому что командаиз курса у тебя не работает 

// window.addEventListener('DOMContentLoaded', function() {

//     // Tabs
    
// 	let tabs = document.querySelectorAll('.tabheader__item'),
// 		tabsContent = document.querySelectorAll('.tabcontent'),
// 		tabsParent = document.querySelector('.tabheader__items');

// 	function hideTabContent() {
        
//         tabsContent.forEach(item => {
//             item.classList.add('hide');
//             item.classList.remove('show', 'fade');
//         });

//         tabs.forEach(item => {
//             item.classList.remove('tabheader__item_active');
//         });
// 	}

// 	function showTabContent(i = 0) {
//         tabsContent[i].classList.add('show', 'fade');
//         tabsContent[i].classList.remove('hide');
//         tabs[i].classList.add('tabheader__item_active');
//     }
    
//     hideTabContent();
//     showTabContent();

// 	tabsParent.addEventListener('click', function(event) {
// 		const target = event.target;
// 		if(target && target.classList.contains('tabheader__item')) {
//             tabs.forEach((item, i) => {
//                 if (target == item) {
//                     hideTabContent();
//                     showTabContent(i);
//                 }
//             });
// 		}
//     });
    
//     // Timer

//     const deadline = '2020-05-11';

//     function getTimeRemaining(endtime) {
//         const t = Date.parse(endtime) - Date.parse(new Date()),
//             days = Math.floor( (t/(1000*60*60*24)) ),
//             seconds = Math.floor( (t/1000) % 60 ),
//             minutes = Math.floor( (t/1000/60) % 60 ),
//             hours = Math.floor( (t/(1000*60*60) % 24) );

//         return {
//             'total': t,
//             'days': days,
//             'hours': hours,
//             'minutes': minutes,
//             'seconds': seconds
//         };
//     }

//     function getZero(num){
//         if (num >= 0 && num < 10) { 
//             return '0' + num;
//         } else {
//             return num;
//         }
//     }

//     function setClock(selector, endtime) {

//         const timer = document.querySelector(selector),
//             days = timer.querySelector("#days"),
//             hours = timer.querySelector('#hours'),
//             minutes = timer.querySelector('#minutes'),
//             seconds = timer.querySelector('#seconds'),
//             timeInterval = setInterval(updateClock, 1000);

//         updateClock();

//         function updateClock() {
//             const t = getTimeRemaining(endtime);

//             days.innerHTML = getZero(t.days);
//             hours.innerHTML = getZero(t.hours);
//             minutes.innerHTML = getZero(t.minutes);
//             seconds.innerHTML = getZero(t.seconds);

//             if (t.total <= 0) {
//                 clearInterval(timeInterval);
//             }
//         }
//     }

//     setClock('.timer', deadline);

//     // Modal

//     const modalTrigger = document.querySelectorAll('[data-modal]'),
//         modal = document.querySelector('.modal');

//     modalTrigger.forEach(btn => {
//         btn.addEventListener('click', openModal);
//     });

//     function closeModal() {
//         modal.classList.add('hide');
//         modal.classList.remove('show');
//         document.body.style.overflow = '';
//     }

//     function openModal() {
//         modal.classList.add('show');
//         modal.classList.remove('hide');
//         document.body.style.overflow = 'hidden';
//         clearInterval(modalTimerId);
//     }

//     modal.addEventListener('click', (e) => {
//         if (e.target === modal || e.target.getAttribute('data-close') == "") {
//             closeModal();
//         }
//     });

//     document.addEventListener('keydown', (e) => {
//         if (e.code === "Escape" && modal.classList.contains('show')) { 
//             closeModal();
//         }
//     });

//     const modalTimerId = setTimeout(openModal, 300000);
//     // Изменил значение, чтобы не отвлекало

//     function showModalByScroll() {
//         if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
//             openModal();
//             window.removeEventListener('scroll', showModalByScroll);
//         }
//     }
//     window.addEventListener('scroll', showModalByScroll);

//     // Используем классы для создание карточек меню

//     class MenuCard {
//         constructor(src, alt, title, descr, price, parentSelector, ...classes) {
//             this.src = src;
//             this.alt = alt;
//             this.title = title;
//             this.descr = descr;
//             this.price = price;
//             this.classes = classes;
//             this.parent = document.querySelector(parentSelector);
//             this.transfer = 27;
//             this.changeToUAH(); 
//         }

//         changeToUAH() {
//             this.price = this.price * this.transfer; 
//         }

//         render() {
//             const element = document.createElement('div');

//             if (this.classes.length === 0) {
//                 this.classes = "menu__item";
//                 element.classList.add(this.classes);
//             } else {
//                 this.classes.forEach(className => element.classList.add(className));
//             }

//             element.innerHTML = `
//                 <img src=${this.src} alt=${this.alt}>
//                 <h3 class="menu__item-subtitle">${this.title}</h3>
//                 <div class="menu__item-descr">${this.descr}</div>
//                 <div class="menu__item-divider"></div>
//                 <div class="menu__item-price">
//                     <div class="menu__item-cost">Цена:</div>
//                     <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
//                 </div>
//             `;
//             this.parent.append(element);
//         }
//     }

//     getResource('http://localhost:3000/menu')// вызываем функцию и вставляем путь из JSON сервера 
//         .then(data => {// разу используем те данные которые прийдут с сервера из функции написанной ниже 
//             data.forEach(({img, altimg, title, descr, price}) => {// метод фо ич переберет, деструктуризирет объект который пришелс сервера и передаст инфу в конструктор карточек насайте который их уже запишет в HTML
//                 new MenuCard(img, altimg, title, descr, price, ".menu .container").render();// вызываем конструктор для каждого объекта внутри массива который прийдет из сервера. НУ и потом рендер
//                 //тут используется синтаксис деструктуризации обхекта чтобывытащить отдельные свойства в качестве отдельных элементов
//             });
//         });

//         // второй вариант создания карточек через функцию а не класс - конструктор. Сходу. Сразу в ебало
//     // getResource('http://localhost:3000/menu')
//     //     .then(data => createCard(data));

//     // function createCard(data) {
//     //     data.forEach(({img, altimg, title, descr, price}) => {
//     //         const element = document.createElement('div');

//     //         element.classList.add("menu__item");

//     //         element.innerHTML = `
//     //             <img src=${img} alt=${altimg}>
//     //             <h3 class="menu__item-subtitle">${title}</h3>
//     //             <div class="menu__item-descr">${descr}</div>
//     //             <div class="menu__item-divider"></div>
//     //             <div class="menu__item-price">
//     //                 <div class="menu__item-cost">Цена:</div>
//     //                 <div class="menu__item-total"><span>${price}</span> грн/день</div>
//     //             </div>
//     //         `;
//     //         document.querySelector(".menu .container").append(element);
//     //     });
//     // }

//     // Forms

//     const forms = document.querySelectorAll('form');
//     const message = {
//         loading: 'img/form/spinner.svg',
//         success: 'Спасибо! Скоро мы с вами свяжемся',
//         failure: 'Что-то пошло не так...'
//     };

//     forms.forEach(item => {
//         bindPostData(item);// на каждую форму вешаем эту функцию
//     });

//     //async тут обозначает что будет асинхронный код. Всегда идет в парес await. Async пишется в самом начале и говорит что дальше будет код который надо будет дождаться
//     const postData = async (url, data) => {//эта функция будет настраивать наш запрос после трансформировать его и возвращать
//         let res = await fetch(url, {// в эту переменную помещаем промис от фетча и записываем аргументы которые будут передаваться в эту функцию при вызове 
//             // записываем адрем фетча и бади как аргументы
//             //помни что это асинхронный код и мы не знаем сколько будет идти фетч
//             //и если дальше будет идти код то он будет обрабатывать пустую переменную res
//             //поэтому пишем await чтобы код дожидался результата запроса
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: data
//         });
    
//         return await res.json();// возвращаем промис отсюда чтобы потом обработать через цепочку .then'ов
//         // await тут стоит для того чтобы дождаться конвертирования вместо того чтобы сразу передавать этот промис
//     };

//     async function getResource(url) {// эта функция чтобы получать карточки с сервера
//         let res = await fetch(url);// делаем запрос, дожидаемся его окончания
//     // если фетч сталкивается с ошибкой в http запросе то он не выдает catch. Типо это для него не ошибка.Дальше мы это фиксим
//         if (!res.ok) {//у промиса который возвращается из фетча есть свойство .ok типо все заебись
//             throw new Error(`Could not fetch ${url}, status: ${res.status}`);//new Error это объект ошибки вовнутрь помещается текст ошибки которую надо выдать.
//             //throw выкидывает эту ошибку. у этого промиса есть свойство .status ну его и помещаем в сообщение об ошибке
//         }
    
//         return await res.json();// трансформируем в нормальный джаваскриптовый объект и возвращаем предварительно подождав окончания конвертации
//     }

//     function bindPostData(form) {//переименовали в "Привязать какой то постинг дат"
//         form.addEventListener('submit', (e) => {
//             e.preventDefault();

//             let statusMessage = document.createElement('img');
//             statusMessage.src = message.loading;
//             statusMessage.style.cssText = `
//                 display: block;
//                 margin: 0 auto;
//             `;
//             form.insertAdjacentElement('afterend', statusMessage);
        
//             const formData = new FormData(form);

//             const json = JSON.stringify(Object.fromEntries(formData.entries()));// другойспособ перебора formData. Применяем метод entries на formData и делаем из него массив массивовкак показано ниже
//             //далее к этой херне  применяем Object.fromEntries чтобы сделать его обратно объектом а после этого мы этот объект преврвщаем в JSON и отправляем нахуй на сервер
//             // к примеру как работает Object.Entries
//             // const obj = {a:23, b:50}
//             // console.log(Object.entries(obj));// >>> [ [ 'a', 23 ], [ 'b', 50 ] ]
//             postData('http://localhost:3000/requests', json)//вызываем postData и передаем аргументы
//             // обращаемся через json server
//             .then(data => {// дальше оповещаем пользователя тут понятно
//                 console.log(data);
//                 showThanksModal(message.success);
//                 statusMessage.remove();
//             }).catch(() => {
//                 showThanksModal(message.failure);
//             }).finally(() => {
//                 form.reset();
//             });
//         });
//     }

//     function showThanksModal(message) {
//         const prevModalDialog = document.querySelector('.modal__dialog');

//         prevModalDialog.classList.add('hide');
//         openModal();

//         const thanksModal = document.createElement('div');
//         thanksModal.classList.add('modal__dialog');
//         thanksModal.innerHTML = `
//             <div class="modal__content">
//                 <div class="modal__close" data-close>×</div>
//                 <div class="modal__title">${message}</div>
//             </div>
//         `;
//         document.querySelector('.modal').append(thanksModal);
//         setTimeout(() => {
//             thanksModal.remove();
//             prevModalDialog.classList.add('show');
//             prevModalDialog.classList.remove('hide');
//             closeModal();
//         }, 4000);
//     }
// });








//Урок 60.Библиотеки.Axios


//Библиотека - участок кода который решает определенную проблему - готовое решение
// по размеру могут быть совсем разные
//Библиотека всегда помещается перед главным скриптом в HTML
// Axious помогает работать с сервером.Много вещей не нужно прописывать вручную

//Итак копирую часть кода из предыдущего урока но без моих комментариев


// Используем классы для создания карточек меню

// class MenuCard {
//     constructor(src, alt, title, descr, price, parentSelector, ...classes) {
//         this.src = src;
//         this.alt = alt;
//         this.title = title;
//         this.descr = descr;
//         this.price = price;
//         this.classes = classes;
//         this.parent = document.querySelector(parentSelector);
//         this.transfer = 27;
//         this.changeToUAH(); 
//     }

//     changeToUAH() {
//         this.price = this.price * this.transfer; 
//     }

//     render() {
//         const element = document.createElement('div');

//         if (this.classes.length === 0) {
//             this.classes = "menu__item";
//             element.classList.add(this.classes);
//         } else {
//             this.classes.forEach(className => element.classList.add(className));
//         }

//         element.innerHTML = `
//             <img src=${this.src} alt=${this.alt}>
//             <h3 class="menu__item-subtitle">${this.title}</h3>
//             <div class="menu__item-descr">${this.descr}</div>
//             <div class="menu__item-divider"></div>
//             <div class="menu__item-price">
//                 <div class="menu__item-cost">Цена:</div>
//                 <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
//             </div>
//         `;
//         this.parent.append(element);
//     }
// }
// // комментируем вот эту тему и будем делать тоже самое но через библиотеку 
// // getResource('http://localhost:3000/menu')
// //     .then(data => {
// //         data.forEach(({img, altimg, title, descr, price}) => {
// //             new MenuCard(img, altimg, title, descr, price, ".menu .container").render();
// //         });
// //     });


// axios.get('http://localhost:3000/menu') // обращаемся к переменной заданной из файла библиотеки
//     .then(data => {// ну дальше полученный объект из этого запроса мы заливаем на сайт и строим из него карточки  
//         data.data.forEach(({// 2 разо обращаемся к data первое это аргумент then'а. Второй раз обращаемся к data внутри волученного объекта с сервера потому что они приходит подробнее с разными свойствами(можешь посмотреть в браузере) 
//             img,altimg,title,descr,price}) => {//деструктурируем полученнй массив чтобы по отдельности запихивать свойства в конструктор
//             new MenuCard(img, altimg, title, descr, price, ".menu .container").render();//ну и запихиваем эти свойства в конструктор
//         });
//     });
    
//     // методы обработки ошибок конвератция и вся вот эта дрочь идут уже без нашего участия 

// // Forms

// const forms = document.querySelectorAll('form');
// const message = {
//     loading: 'img/form/spinner.svg',
//     success: 'Спасибо! Скоро мы с вами свяжемся',
//     failure: 'Что-то пошло не так...'
// };

// forms.forEach(item => {
//     bindPostData(item);
// });

// const postData = async (url, data) => {
//     let res = await fetch(url, {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: data
//     });

//     return await res.json();
// };

// async function getResource(url) {
//     let res = await fetch(url);

//     if (!res.ok) {
//         throw new Error(`Could not fetch ${url}, status: ${res.status}`);
//     }

//     return await res.json();
// }

// function bindPostData(form) {
//     form.addEventListener('submit', (e) => {
//         e.preventDefault();

//         let statusMessage = document.createElement('img');
//         statusMessage.src = message.loading;
//         statusMessage.style.cssText = `
//             display: block;
//             margin: 0 auto;
//         `;
//         form.insertAdjacentElement('afterend', statusMessage);
    
//         const formData = new FormData(form);

//         const json = JSON.stringify(Object.fromEntries(formData.entries()));

//         postData('http://localhost:3000/requests', json)
//         .then(data => {
//             console.log(data);
//             showThanksModal(message.success);
//             statusMessage.remove();
//         }).catch(() => {
//             showThanksModal(message.failure);
//         }).finally(() => {
//             form.reset();
//         });
//     });
// }

// function showThanksModal(message) {
//     const prevModalDialog = document.querySelector('.modal__dialog');

//     prevModalDialog.classList.add('hide');
//     openModal();

//     const thanksModal = document.createElement('div');
//     thanksModal.classList.add('modal__dialog');
//     thanksModal.innerHTML = `
//         <div class="modal__content">
//             <div class="modal__close" data-close>×</div>
//             <div class="modal__title">${message}</div>
//         </div>
//     `;
//     document.querySelector('.modal').append(thanksModal);
//     setTimeout(() => {
//         thanksModal.remove();
//         prevModalDialog.classList.add('show');
//         prevModalDialog.classList.remove('hide');
//         closeModal();
//     }, 4000);
// }







//Урок 61 создаем слайдер.Вариант 1
//ну делаю сам значит 

// //Получаем все слайды
// const slides = document.querySelectorAll('.offer__slide');
// //получаю стрелки
// const slidePrev = document.querySelector('.offer__slider-prev'),
//       slideNext = document.querySelector('.offer__slider-next');

// const current = document.querySelector('#current');
// const total = document.querySelector('#total')

// function hideSlides() {//собака - слайдо закрывака

//     slides.forEach(item => {
//         item.classList.add('hide');
//         item.classList.remove('show', 'fade');
//     });
// };


// function showSlides(i=0) {// собака слайдо - открывака 
//     slides[i].classList.add('show', 'fade');
//     slides[i].classList.remove('hide');
// }


// hideSlides();
// showSlides();

// let slideIndex = 0;

// slideNext.addEventListener('click',  function () {
//     slideIndex++;
//     if(slideIndex === slides.length){
//         slideIndex = 0;
//     }
//     hideSlides();
//     showSlides(slideIndex);
//     current.textContent = `${getZero(slideIndex + 1)}`;
    
//  });

//  slidePrev.addEventListener('click',  function () {
//     slideIndex--;
//     if(slideIndex === -1){
//         slideIndex = slides.length - 1;
//     }
//     hideSlides();
//     showSlides(slideIndex);
//     current.textContent = `${getZero(slideIndex + 1)}`;
    
//  });



// function getZero(num) { // подставляем 0 если значение меньше 10 чтобы не торчала цифра
//     if (num >= 0 && num < 10) {
//         return '0' + num;
//     } else {
//         return num;
//     }
// }

// total.textContent = `${getZero(slides.length)}`// общее количество слайдов

// ну вроде все работает нормально

// теперь как из урока

 // Slider

//  let slideIndex = 1;// так здесь индекс сразу 1
//  const slides = document.querySelectorAll('.offer__slide'),
//      prev = document.querySelector('.offer__slider-prev'),
//      next = document.querySelector('.offer__slider-next'),
//      total = document.querySelector('#total'),
//      current = document.querySelector('#current');
// // переменные те же самые все
//  showSlides(slideIndex);

//  if (slides.length < 10) {// подставлятель нулей для тотала
//      total.textContent = `0${slides.length}`;
//  } else {
//      total.textContent = slides.length;
//  }

//  function showSlides(n) {// 1 функция в которую передается слайд индекс
//      if (n > slides.length) {
//          slideIndex = 1;
//      }
//      if (n < 1) {
//          slideIndex = slides.length;
//      }
// // проверялки у него в 1 функции
//      slides.forEach((item) => item.style.display = 'none');

//      slides[slideIndex - 1].style.display = 'block'; // Как ваша самостоятельная работа - переписать на использование классов show/hide
     
//      if (slides.length < 10) {//подставлятель нулей для каррента
//          current.textContent =  `0${slideIndex}`;
//      } else {
//          current.textContent =  slideIndex;
//      }
//  }

//  function plusSlides (n) {// короче у кнопки меняют только индекс через 1 функцию
//      showSlides(slideIndex += n);
//  }

//  prev.addEventListener('click', function(){
//      plusSlides(-1);
//  });

//  next.addEventListener('click', function(){
//      plusSlides(1);
//  });





// Урок 62. Слайдер 2.0
// короче  идея как с замком с колесом и циферками
// есть внешний элемент в HTML offer__slider-wrapper у него оверфлоу хидден
// есть внутренний элемент offer__slider-inner который по ширине больше чем внешний и содержит все слайды 
// при клике на стрелочку будет происходить transform внутренней обертки и она будет смещаться
 // Slider

//  let offset = 0;
//  let slideIndex = 1;

//  const slides = document.querySelectorAll('.offer__slide'),
//      prev = document.querySelector('.offer__slider-prev'),
//      next = document.querySelector('.offer__slider-next'),
//      total = document.querySelector('#total'),
//      current = document.querySelector('#current'),
//      slidesWrapper = document.querySelector('.offer__slider-wrapper'),//внешний(окошко)
//      width = window.getComputedStyle(slidesWrapper).width,// это ширина окошка выводим ее через getComputedStyle(slidesWrapper).width выдает примененные стили
//      slidesField = document.querySelector('.offer__slider-inner');// внутренний

//  if (slides.length < 10) {
//      total.textContent = `0${slides.length}`;
//      current.textContent =  `0${slideIndex}`;
//  } else {
//      total.textContent = slides.length;
//      current.textContent =  slideIndex;
//  }
 
//  slidesField.style.width = 100 * slides.length + '%';// это ширина блока который будет содержать все слайды
//  slidesField.style.display = 'flex';// чтобы сделать их в строчку
//  slidesField.style.transition = '0.5s all';// добавляем плавности

//  slidesWrapper.style.overflow = 'hidden';// чтобы не торчало

//  slides.forEach(slide => {// к каждому слайду утанавливаем определенную ширину из переменной
//      slide.style.width = width;
//  });

//  next.addEventListener('click', () => {
//      if (offset == (+width.slice(0, width.length - 2) * (slides.length - 1))) {// в переменной шарины лежит значение "500px" поэтому мы обрезаем пиксели чтобы получить число. Ну адальше умножаем на количество слайдов
//      //так мы определаяем когда вся лентапрокручена и возвращаем ее в начало
//          offset = 0;
//      } else {
//          offset += +width.slice(0, width.length - 2); // если лента еще не закончилась то смещаем ее на ширину внешней обертки
//          // += оператор добавления
//      }

//      slidesField.style.transform = `translateX(-${offset}px)`;// добавляем стиль который перемещает нашу ленту
// // ну а это уже счетчик слайдов
//      if (slideIndex == slides.length) {
//          slideIndex = 1;
//      } else {
//          slideIndex++;
//      }
// // а это добавлятель нулей
//      if (slides.length < 10) {
//          current.textContent =  `0${slideIndex}`;
//      } else {
//          current.textContent =  slideIndex;
//      }
//  });

//  prev.addEventListener('click', () => {
//      if (offset == 0) {// тут то же самое но наоборот
//          offset = +width.slice(0, width.length - 2) * (slides.length - 1);
//      } else {
//          offset -= +width.slice(0, width.length - 2);// -= оператор отнимания
//      }

//      slidesField.style.transform = `translateX(-${offset}px)`;

//      if (slideIndex == 1) {
//          slideIndex = slides.length;
//      } else {
//          slideIndex--;
//      }

//      if (slides.length < 10) {
//          current.textContent =  `0${slideIndex}`;
//      } else {
//          current.textContent =  slideIndex;
//      }
//  });






//Урок 63 навигация для слайдов

//Получаем как элемент весь слайдер.Делаеем его релатив/готово
// обертка для этих точек + абсолютное позиционирование/готово
//Перебирающий метод - количество точек должно быть равно количеству слайдов/готово
// каждой точке атрибут чтобы они были связаны/готово
//класс активности / готово
// кликаем в каждую из точек - перемещаемся на соответствующий слайд/ готово. Потно


//Slider

// let offset = 0;
// let slideIndex = 1;

// const slides = document.querySelectorAll('.offer__slide'),
//     prev = document.querySelector('.offer__slider-prev'),
//     next = document.querySelector('.offer__slider-next'),
//     total = document.querySelector('#total'),
//     current = document.querySelector('#current'),
//     slidesWrapper = document.querySelector('.offer__slider-wrapper'), //внешний(окошко)
//     width = window.getComputedStyle(slidesWrapper).width, // это ширина окошка выводим ее через getComputedStyle(slidesWrapper).width выдает примененные стили
//     slidesField = document.querySelector('.offer__slider-inner'), // внутренний
//     wholeSlider = document.querySelector('.offer__slider'); // получили слайдер целиком


// if (slides.length < 10) {
//     total.textContent = `0${slides.length}`;
//     current.textContent = `0${slideIndex}`;
// } else {
//     total.textContent = slides.length;
//     current.textContent = slideIndex;
// }

// slidesField.style.width = 100 * slides.length + '%'; // это ширина блока который будет содержать все слайды
// slidesField.style.display = 'flex'; // чтобы сделать их в строчку
// slidesField.style.transition = '0.5s all'; // добавляем плавности

// slidesWrapper.style.overflow = 'hidden'; // чтобы не торчало

// slides.forEach(slide => { // к каждому слайду утанавливаем определенную ширину из переменной
//     slide.style.width = width;
// });

// next.addEventListener('click', () => {
//     if (offset == (+width.slice(0, width.length - 2) * (slides.length - 1))) { // в переменной шарины лежит значение "500px" поэтому мы обрезаем пиксели чтобы получить число. Ну адальше умножаем на количество слайдов
//         //так мы определаяем когда вся лентапрокручена и возвращаем ее в начало
//         offset = 0;
//     } else {
//         offset += +width.slice(0, width.length - 2); // если лента еще не закончилась то смещаем ее на ширину внешней обертки
//         // += оператор добавления
//     }

//     slidesField.style.transform = `translateX(-${offset}px)`; // добавляем стиль который перемещает нашу ленту

//     dots.forEach(item => {//убарлвсе классы актив
//         item.classList.remove('dots__active');
//     });
       

//     // ну а это уже счетчик слайдов
//     if (slideIndex == slides.length) {
//         slideIndex = 1;
//     } else {
//         slideIndex++;
//     }

//     dots[slideIndex - 1].classList.add('dots__active');// уже после рассчета добавляем класс

//     // а это добавлятель нулей
//     if (slides.length < 10) {
//         current.textContent = `0${slideIndex}`;
//     } else {
//         current.textContent = slideIndex;
//     }
// });

// prev.addEventListener('click', () => {
//     if (offset == 0) { // тут то же самое но наоборот
//         offset = +width.slice(0, width.length - 2) * (slides.length - 1);
//     } else {
//         offset -= +width.slice(0, width.length - 2); // -= оператор отнимания
//     }

//     slidesField.style.transform = `translateX(-${offset}px)`;

//     dots.forEach(item => {//убарлвсе классы актив
//         item.classList.remove('dots__active');
//     });

//     if (slideIndex == 1) {
//         slideIndex = slides.length;
//     } else {
//         slideIndex--;
//     }

//     dots[slideIndex - 1].classList.add('dots__active');// уже после рассчета добавляем класс.Бинго нахуй


//     if (slides.length < 10) {
//         current.textContent = `0${slideIndex}`;
//     } else {
//         current.textContent = slideIndex;
//     }
// });

// //поехали
// wholeSlider.style.position = 'relative';

// const dotsWrapper = document.createElement('div');
// dotsWrapper.classList.add('carousel-indicators');
// // dotsWrapper.style.position = "absolute";
// // dotsWrapper.style.bottom = "-50px";
// // dotsWrapper.style.left =  '100px';
// wholeSlider.append(dotsWrapper);

// slides.forEach(() => {
//    const dot = document.createElement('div');
//    dot.classList.add('dot');
//    dotsWrapper.append(dot);
// })

// slidesField.style.transform = `translateX(0px)`;//этобы этот стиль был всегда а не добавлялся после смещения но вроде будет работать и без него
// const dots = document.querySelectorAll('.dot');//вот эту штуку можно писать толко после того как все точки сформируется на странице
// dots[0].classList.add('dots__active');
// dotsWrapper.addEventListener('click', function(event) {// делегирование через родителя на все кнопки
//     const target = event.target;// чтобы постоянноне писать евент.таргет
    
//     if(target && target.classList.contains('dot')) {// тут проверка содержания класса внутри родителя определяем что мы точно кликнули в дот
//         dots.forEach((item, i) => {// надо определить номер дота чтобы знать какой показывать
//             if (target == item) {// если кликнутый дот равен перебераемому то вызываем функции
//                 offset = (+width.slice(0, width.length - 2) * i);
//                slidesField.style.transform = `translateX(-${offset}px)`;
//                dots.forEach(item=>{
//                 item.classList.remove('dots__active');
//                });
//                target.classList.add('dots__active');

//                slideIndex = i + 1;

//                if (slides.length < 10) {
//                    current.textContent = `0${slideIndex}`;
//                } else {
//                    current.textContent = slideIndex;
//                }

               

//             }

//         });
//     }
// });



//Теперь как сделал Ваня

// Slider

// let offset = 0;
// let slideIndex = 1;

// const slides = document.querySelectorAll('.offer__slide'),
//     slider = document.querySelector('.offer__slider'), //тоже получил родителя
//     prev = document.querySelector('.offer__slider-prev'),
//     next = document.querySelector('.offer__slider-next'),
//     total = document.querySelector('#total'),
//     current = document.querySelector('#current'),
//     slidesWrapper = document.querySelector('.offer__slider-wrapper'),
//     width = window.getComputedStyle(slidesWrapper).width,
//     slidesField = document.querySelector('.offer__slider-inner');

// if (slides.length < 10) {
//     total.textContent = `0${slides.length}`;
//     current.textContent = `0${slideIndex}`;
// } else {
//     total.textContent = slides.length;
//     current.textContent = slideIndex;
// }

// slidesField.style.width = 100 * slides.length + '%';
// slidesField.style.display = 'flex';
// slidesField.style.transition = '0.5s all';

// slidesWrapper.style.overflow = 'hidden';

// slides.forEach(slide => {
//     slide.style.width = width;
// });

// slider.style.position = 'relative'; // позишн релатив для родителя

// const indicators = document.createElement('ol'), // тут список а не дивы
//     dots = [];// вместо кверри селектор олл.Это настоящиймассив и унего есть метод push
// indicators.classList.add('carousel-indicators'); // тут он не стал добавлять в цсс а сразу написал в JS
// indicators.style.cssText = `
//      position: absolute;
//      right: 0;
//      bottom: 0;
//      left: 0;
//      z-index: 15;
//      display: flex;
//      justify-content: center;
//      margin-right: 15%;
//      margin-left: 15%;
//      list-style: none;
//  `; // Если хотите - добавьте в стили, но иногда у нас нет доступа к стилям
// slider.append(indicators);

// for (let i = 0; i < slides.length; i++) { // делает доты на основе количества слайдов просто через фор
//     const dot = document.createElement('li');
//     dot.setAttribute('data-slide-to', i + 1); // добавил к каждой точке атрибут я не стал это делать. Оказывается можно указывать значение этого атрибута
//     dot.style.cssText = `
//          box-sizing: content-box;
//          flex: 0 1 auto;
//          width: 30px;
//          height: 6px;
//          margin-right: 3px;
//          margin-left: 3px;
//          cursor: pointer;
//          background-color: #fff;
//          background-clip: padding-box;
//          border-top: 10px solid transparent;
//          border-bottom: 10px solid transparent;
//          opacity: .5;
//          transition: opacity .6s ease;
//      `;
//     if (i == 0) {// это что то вроде класа active
//         dot.style.opacity = 1;
//     }
//     indicators.append(dot);
//     dots.push(dot);// засовываем в массив
// }

// next.addEventListener('click', () => {
//     if (offset == (+width.slice(0, width.length - 2) * (slides.length - 1))) {
//         offset = 0;
//     } else {
//         offset += +width.slice(0, width.length - 2);
//     }

//     slidesField.style.transform = `translateX(-${offset}px)`;

//     if (slideIndex == slides.length) {
//         slideIndex = 1;
//     } else {
//         slideIndex++;
//     }

//     if (slides.length < 10) {
//         current.textContent = `0${slideIndex}`;
//     } else {
//         current.textContent = slideIndex;
//     }

//     dots.forEach(dot => dot.style.opacity = ".5");// вместо класса эктив
//     dots[slideIndex - 1].style.opacity = 1;
// });

// prev.addEventListener('click', () => {
//     if (offset == 0) {
//         offset = +width.slice(0, width.length - 2) * (slides.length - 1);
//     } else {
//         offset -= +width.slice(0, width.length - 2);
//     }

//     slidesField.style.transform = `translateX(-${offset}px)`;

//     if (slideIndex == 1) {
//         slideIndex = slides.length;
//     } else {
//         slideIndex--;
//     }

//     if (slides.length < 10) {
//         current.textContent = `0${slideIndex}`;
//     } else {
//         current.textContent = slideIndex;
//     }

//     dots.forEach(dot => dot.style.opacity = ".5");// вместо класса active
//     dots[slideIndex - 1].style.opacity = 1;
// });

// dots.forEach(dot => {// тут он не стал делать наследование
//     dot.addEventListener('click', (e) => {
//         const slideTo = e.target.getAttribute('data-slide-to');// получает атрибут для слайд индекса

//         slideIndex = slideTo;
//         offset = +width.slice(0, width.length - 2) * (slideTo - 1);// ну что то вроде моего кода но не через порядковый номер перебора а через атрибут

//         slidesField.style.transform = `translateX(-${offset}px)`;//смещение ну тут уменя так же

//         if (slides.length < 10) {// подставлятель нулей 
//             current.textContent = `0${slideIndex}`;
//         } else {
//             current.textContent = slideIndex;// меняем индикатор сверху
//         }

//         dots.forEach(dot => dot.style.opacity = ".5");// это как класс актив
//         dots[slideIndex - 1].style.opacity = 1;
//     });
// });



//Урок 64 Сохраняем данные без БД. Работа с LocalStorage

//LocalStorage - свойство глобального объекта window

//Есть вкладка Application в браузере и там локал сторейдж
// там 2 поля key и value то есть это обычный объект
// в него помещается около 5 мб данных 

// // записываем данные в лс
// localStorage.setItem('number', 5);// первый атрибут это ключ авторой это значение

// //получаем данные

// localStorage.getItem('number');// получаем 5

// //удаляем данные
// localStorage.removeItem('number');


// //очищаем хранилище

// localStorage.clear();




// // допустим есть форма на сайте
// const checkbox = document.querySelector('#checkbox'),
//     form = document.querySelector('form'),
//     change = document.querySelector('#color'); // эта кнопка меняет цвет формы

//     if(localStorage.getItem('isChecked')) {// если в локал сторейдж есть такое значение то. Если его там нет то выдаст null
//         checkbox.checked = true;// короче каждый раз при загрузке страницы проверяем есть ли галочка выставляем ее если свойство там есть
//     }

//     if (localStorage.getItem('bg') === 'changed'){ //при заходе на страницу проверяем хранилище и если что перекрашиваем
//         form.style.backgroundColor = 'red';
//     }

// // надо чтобы если поставили чекбокс то он был с галочкой даже после пререзагрузки 
// // цвет формы тоже не должен изменяться даже после перезахода

// checkbox.addEventListener('change', () => {
//     localStorage.setItem('isChecked', true);// если вешают галочку то это записываем в хранилище
// });


// change.addEventListener('click', () => {
//     if (localStorage.getItem('bg') === 'changed') { //если цвет формы изменен то убираем это свойство
//         localStorage.removeItem('bg');
//         form.style.backgroundColor = 'white';
//     } else { // если на эту кнопку не нажимали(цвет формы не изменен) то добавляется айтем в хранилище и меняется бекграунд
//         localStorage.setItem('bg', 'chanded');
//         form.style.backgroundColor = 'red';
//     };
// });


// const persone = {
//     name: 'Alex',
//     age: 25
// };

// const serializedPersone = JSON.stringify(persone);// туда надо засовывать JSON

// localStorage.setItem('alex', serializedPersone);// сохраняем объект в хранилище

// console.log(JSON.parse(localStorage.getItem('alex')));// получаем оттуда и разшифровываем





// //Урок 65.Регулярные выражения


// // Позволяют удобно работать со строками
// // 2 части
// // 1 паттерн 2 флаги

// new RegExp('pattern', 'flags'); // этим синтаксисом никто не пользуется
// /pattern/f // этот синтаксис используют все

// const ans = prompt('Введите ваше имя');

// const reg = /n/;

// console.log(ans.search(reg));// >>>> выдаст позицию первого найденного символа если не найдет то выдаст -1

// const reg = /n/i;
// //флаги
// //i - найти вне зависимости от регистра
// //g - найти несколько вхождений (глобал)
// //m - многострочный режим
// console.log(ans.search(reg));// с методом search g не работает он ищет первое совпадение

// const reg = /n/ig;
// console.log(ans.match(reg));// дает больше инфы и если есть флаг глобальности то выдаст массив со всеми результатами


// const pass = prompt('Password');

// console.log (pass.replace(/./g, '*'));// в replace первый аргумент идет то на что мы хотим заменить 
// //второй аргумент - на что
// // в регулярных выражениях  если стоит точка внутри /./ то это значит мы берем все элементы которые попадут в строку
// //чтоб взять точку то надо экранировать этот символ /\./ 
// // экранировать надо \ ^ & | если их не экранировать то они будут давать свои фишки надо читать документацию

// console.log('12-34-56'.replace(/-/g, ':'));// заменить все дефисы на двоеточия

// // методы которые относятся к регулярным выражениям
// const ans = prompt('Введите хоть что то');

// const reg = /n/ig;
// console.log(reg.test(ans));// вернет либо true либо false в зависимости от того найдет ли он паттерн в строке или нет


// //классы в регулярных выражениях
// // \d - diggits ищем цифры
// // \w - words ищем все слова. Все буквы
// // \s - spaces ищем все пробелы

// //const reg = / /ig;// можно искать пробел


// const ans = prompt('Введите число');

// const reg = /\d/g;
// console.log(ans.match(reg));//ищем все цифры в строке

// const str ="My name is R2D2";

// console.log(str.match(/\w\d\w\d/i)); // ищем букву цифру букву цифру


// // обратные классы
// //  \D все не числа
// // \W все не буквы


// //теперь переделаем код для слайдера

// next.addEventListener('click', () => {
//     if (offset == +width.replace(/\D/g, '') * (slides.length - 1)) {// вместо того чтобы делать slice заменяем все не числа на пустую строку (там роде 650px)
//         offset = 0;
//     } else {
//         offset += +width.replace(/\D/g, '');
//     }
// });


// const string = '9 баб я выебал в 22 года'; 

// function strModifyer(str){
//     str =  +str.replace(/\D/g, '');
//     return str;
// }
// console.log(strModifyer(string));// >>> 922



// Урок 66 создаем калькулятор на сайте Часть1

//  Calculator


//  вначале проставили айдишники и атрибуты в HTML
//  const result = document.querySelector('.calculating__result span');// получаем спан результата
//  let sex = 'female',// задаем переменные для формулы баба и ратио стоят по умолчанию
//      height, weight, age,
//      ratio = 1.375;
// // будет 2 функции. Одна будет брать инфу от кнопок другая из инпутов


//  function calcTotal() {
//      if (!sex || !height || !weight || !age || !ratio) {// если хоть что то не заполнено то рассчеты не ведутся
//          result.textContent = '____'; // Можете придумать что угодно
//          return;// это чтобы превать функцию. Если она увидит ретёрн то все дальнейшие действия продолжаться не будут 
//      }
//      if (sex === 'female') {// если все данные заполнены то используются эти формулы из статьи
//          result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);//это если баба
//      } else {
//          result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);//это если не баба
//      }
//  }

//  calcTotal();
// // эта функция будет получать инфу из дивов и записывать ее в переменнные
//  function getStaticInformation(parentSelector, activeClass) { // эта функция написана с такими аргументами протому что она будет применена для двух блоков.Пола и выбора активности
//      const elements = document.querySelectorAll(`${parentSelector} div`);//получаем элементы внутри блока который будет передан в функцию

//      elements.forEach(elem => {//на каждый элемент внутри
//          elem.addEventListener('click', (e) => {//вешаем обработчик событий.
//             //делегирование тут не стали применять потому что там будет дрочь с подложкой.Если промахнуться то окрасится весь родительский див
//              if (e.target.getAttribute('data-ratio')) {// получаем атрибут кликнутого элемента.Если он есть
//                  ratio = +e.target.getAttribute('data-ratio');// записываем его в ратио
//              } else {
//                  sex = e.target.getAttribute('id');//если его нет то это значит что мы кликнули на пол и получаем айдишник записываем его во пол
//              }
 
//              elements.forEach(elem => {// при клике на любой элемент у всех убираем класс эктив
//                  elem.classList.remove(activeClass);
//              });
 
//              e.target.classList.add(activeClass);// добавляем на тот который кликнули
 
//              calcTotal();// вызываем калькулятор 
//          });
//      });
//  }
// // запускаем на 2 блока
//  getStaticInformation('#gender', 'calculating__choose-item_active');
//  getStaticInformation('.calculating__choose_big', 'calculating__choose-item_active');
// // теперь функция которая обрабатывает инпуты

//  function getDynamicInformation(selector) {
//      const input = document.querySelector(selector);// получаем инпут по селектору который передается через аргумент

//      input.addEventListener('input', () => {// на инпут вешаем обработчик который реагирует на любое изменение значения внутри
//          switch(input.getAttribute('id')) {// получаем айдишник инпута и проверяем его
//              case "height"://если это рост то его записываем в переменную
//                  height = +input.value;
//                  break;// дальше функцию останавливаем
//              case "weight":// если вес то в вес записываем
//                  weight = +input.value;
//                  break;
//              case "age":// если возраст то в возраст
//                  age = +input.value;
//                  break;
//          }

//          calcTotal();// опять врубаем калькулятор
//      });
//  }
// // запускаем функцию для каждого инпута
//  getDynamicInformation('#height');
//  getDynamicInformation('#weight');
//  getDynamicInformation('#age');





//Урок 67 Калькулятор часть 2


// Calculator


// const result = document.querySelector('.calculating__result span');
    
// let sex, height, weight, age, ratio;

// // тут переменная не сразу жестко устанавливется а сначала проверяется в хранилище
// if (localStorage.getItem('sex')) {
//     sex = localStorage.getItem('sex');
// } else {
//     sex = 'female';
//     localStorage.setItem('sex', 'female');
// }

// if (localStorage.getItem('ratio')) {
//     ratio = localStorage.getItem('ratio');
// } else {
//     ratio = 1.375;
//     localStorage.setItem('ratio', 1.375);
// }

// function calcTotal() {
//     if (!sex || !height || !weight || !age || !ratio) {
//         result.textContent = '____';
//         return;
//     }
//     if (sex === 'female') {
//         result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
//     } else {
//         result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
//     }
// }

// calcTotal();


// //Ставим классы активности на нужные кнопки
// function initLocalSettings(selector, activeClass) {
//     const elements = document.querySelectorAll(selector);

//     elements.forEach(elem => {
//         elem.classList.remove(activeClass);//ну а эта функция убирает класс эктив у всех элементов
//         if (elem.getAttribute('id') === localStorage.getItem('sex')) {// проверяет айди на соответствие с хранилищем
//             elem.classList.add(activeClass);
//         }
//         if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {//та же проверка на соответствие с атрибутом
//             elem.classList.add(activeClass);
//         }
//     });
// }
// //вызов этой функции 2 раза
// initLocalSettings('#gender div', 'calculating__choose-item_active');
// initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');

// // тут делаем так чтобы кнопки запоминались в localStorage

// function getStaticInformation(selector, activeClass) {
//     const elements = document.querySelectorAll(selector);

//     elements.forEach(elem => {
//         elem.addEventListener('click', (e) => {
//             if (e.target.getAttribute('data-ratio')) {
//                 ratio = +e.target.getAttribute('data-ratio');
//                 localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));//вот тут сохранаем ратио в сет айтем из атриута HTML
//             } else {
//                 sex = e.target.getAttribute('id');
//                 localStorage.setItem('sex', e.target.getAttribute('id'));// если ратио нет в HTML то сохраняем айдишник
//             }

//             elements.forEach(elem => {
//                 elem.classList.remove(activeClass);
//             });

//             e.target.classList.add(activeClass);

//             calcTotal();
//         });
//     });
// }

// getStaticInformation('#gender div', 'calculating__choose-item_active');
// getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');


// //если строка пытается трансформироваться то она преваращается в NaN
// //NaN в логическом контексте фолс поэтому когда мы в инпут пишем буквы ты срабатывает прочерк
// // если юзер вводит какую то лажу сделаем так чтобы инпут подсвечивался красным
// function getDynamicInformation(selector) {
//     const input = document.querySelector(selector);

//     input.addEventListener('input', () => {
//         if (input.value.match(/\D/g)) {//пытаемся найти все не числа в инпуте
//             input.style.border = "1px solid red";//если нашли то красим бордер инпута
//         } else {
//             input.style.border = 'none';//если исправил то убирается красная обводка
//         }
//         switch(input.getAttribute('id')) {
//             case "height":
//                 height = +input.value;
//                 break;
//             case "weight":
//                 weight = +input.value;
//                 break;
//             case "age":
//                 age = +input.value;
//                 break;
//         }

//         calcTotal();
//     });
// }

// getDynamicInformation('#height');
// getDynamicInformation('#weight');
// getDynamicInformation('#age');







//Урок 68.Геттеры и сетеры(свойства объектов)

// Объекты состоят из свойств и методов
//Есть еще свойства - данные. и свойства - акцессоры

// const persone = {
//     name:'Alex',
//     age: 25,

//     get userAge() {// короче вот эта херня это свойство = акцессор. Выдает возраст этого объекта
//         return this.age;
//     },

//     set userAge(num) {//задаются они парно.Тут дта херня делает такчто приссваивает значение для этого объекта
//         this.age = num;
//     }
// }

// //get и set это ключевые слова - подсвечиваются сиреневым

// console.log(persone.userAge);// вызывается как свойство а задается как функция
// console.log(persone.userAge = 30);// можно получать а можно присваивать.Но ключевое слово писать не нужно он сам понимает что нужно сделать


// //ну эти штуки нужны чтобы вытаскивать и преобразовывать информацию точечно и не писать выборку каждый раз 
// //при планировании сложного функционала




// // Урок 69 Инкапсуляция

// //Инкапсуляция - это один из принципов ООП

// //Чтобы программу не сломали, ее внутренности скрываются.А мы используем лишь ее результат

// function User(name, age) {// делаем функцию - конструктор
//     this.name = name;
//     this.age = age;

//     this.say = function(){// делаем метод 
//         console.log(`Имя пользователя: ${this.name}, возраст ${this.age}`);
//     };
// }

// const ivan = new User('Ivan', 27);// используем конструктор

// console.log(ivan.name);
// console.log(ivan.age);

// ivan.name = 'Alex';
// ivan.age = 30;

// ivan.say();
// // все меняется все считывается

// //Инкапсуляция
// function User(name, age) {
//     this.name = name;
//     let userAge = age;// теперь это переменная а не контекст вызова

//     this.say = function(){
//         console.log(`Имя пользователя: ${this.name}, возраст ${userAge}`);
//     };
// }




// const ivan = new User('Ivan', 27);

// console.log(ivan.name);
// console.log(ivan.userAge);//undefined

// ivan.name = 'Alex';
// ivan.age = 30;

// ivan.say();//>>> Имя пользователя: Alex, возраст 27 
// //Возраст нельзя поментять и даже получить



// // теперь внутри объекта сделаем 2 метода
// function User(name, age) {
//     this.name = name;
//     let userAge = age;// теперь это переменная а не контекст вызова

//     this.say = function(){
//         console.log(`Имя пользователя: ${this.name}, возраст ${userAge}`);
//     };

//     this.getAge = function(){
//         return userAge;
//     }

//     this.setAge = function(age){//сюда можно добавить любые проверки
//         if(typeof age === 'number' && age > 0 && age < 110){
//             userAge = age;// и только тогда запишется
//         }else {
//             console.log('Недопустимое значение');
//         }
//     }
// }




// const ivan = new User('Ivan', 27);

// console.log(ivan.name);
// console.log(ivan.userAge);//undefined
// console.log(ivan.getAge());//выдаст 27 

// ivan.name = 'Alex';
// ivan.age = 50;//нухуя не изменит
// ivan.setAge(45);// а это изменит но через проверку

// ivan.say();//>>> Имя пользователя: Alex, возраст 45





// class User {
//     constructor(name, age) {
//         this.name = name;
//        // let userAge = age; // такая запись не будет правильно отрабатывать 
//         //this.userAge// такое свойство станет публичным
//         this._age = age;// такая фишка сделает его непубличным но оно будет работать в методах
//     }


//     say() {
//         console.log(`Имя пользователя: ${this.name}, возраст ${this._age}`);
//     }

//     get age() {// переписываем как геттер
//         return this._age;
//     }

//     set age(age) {//переписываем как сеттер
//         if (typeof age === 'number' && age > 0 && age < 110) {
//             this._age = age; 
//         }
//         else {
//             console.log('Недопустимое значение');
//         }
//     }
// }


// const ivan = new User('Ivan', 27);

// console.log(ivan.name);
// //ivan.userAge = 99;// тут возраст установится просто так. потому что с классами фишка с переменной вместо this не канает
// console.log(ivan.age);// геттер
// ivan.age = 90;// сеттер
// console.log(ivan.age);// >>> 90
// ivan.say();


// если перед age поставить псевдопробел _age  то все геттеры и сеттеры обходятся стороной.И это хакбро)
//классы пока что в этом плане дырявее чем функции конструкторы.Там переменная забронирована




//есть экспериментальный синтаксис - поля классов
// еще одна копия класса
// class User {
//     constructor(name, age) {
//         this.name = name;
//         this._age = age;
//     }

//     #surname = 'Koltakov';// пишем surname за пределами конструктора// эту херню нельзя получить или изменить без гетера или сетера или спец метода

//     say = () => {//стрелочная функция чтобы не терять контексты. Это породу связано со свойствами then встрелочной функции(предыдущие уроки про then)
//         console.log(`Имя пользователя: ${this.name}${this.#surname}, возраст ${this._age}`);// тут можно использовать
//     }

//     get age() {
//         return this._age;
//     }

//     set age(age) {
//         if (typeof age === 'number' && age > 0 && age < 110) {
//             this._age = age; 
//         }
//         else {
//             console.log('Недопустимое значение');
//         }
//     }
// }


// const ivan = new User('Ivan', 27);

// console.log(ivan.surname);//обращаемся к свойству но без решетки получаем undefined
// console.log(ivan.#surname);// получим ошибку
// ivan.say();






//Урок 70.Прием "модуль" зачем и как его использовать

//модуль используется для того чтобы скрыть  внутренние детали реализации скрипта

// модули самодостаточны и независимы
// обеспечивают чистоту глобального пространства
// допустим есть библиотека подключенная кнашему скрипту
//в нем есть глобальная переменная add. Мы этого не знаем
//  создаем такую же переменную add в своем скрипте и получаем ошибку 



// const number = 1; // переменная в глобальной области 

// (function () {// это анонимная самовызывающаяся функция сосвоей областьювидимости
//     const number = 2;
//     console.log(number);//>>> 2
//     console.log(number + 3);//>>> 5
// }());

// console.log(number);//>>>1

// // так это вроде замкание 


// //использоваие объектного интерфейса
// //мы модуль(анонимную самовызывающуюся функцию) записываем в переменную и в эту переменну возвращаем методы доступные снаружи
// const user = (function(){
//     const privat = function (){
//         console.log('I am privat');
//     };
//     return {// возвращем в user объект в котором есть метод
//         sayHello: privat
//     };
// }());

// user.sayHello();


//Урок 71 Webpack.Собираем наш проект

//commonJS- этоспособ экспротрировать и импротировать функции между файлами
// в видосе расписано как устанавливать и пользоваться этим npm
// тут я не смогу все описать 
//есть инфа в папке src

//короче есть файл webpack.config.js
// 'use strict';

// let path = require('path');

// module.exports = {
//   mode: 'development',//режим в котором работает вебппак.Есть developement и production
//   entry: './js/script.js',// тот файл с которого будем начинать. Поумолчанию индекс.js
//   output: {//конфигурируем точто получится в итоге
//     filename: 'bundle.js',//имя файла
//     path: __dirname + '/dist/js'//путь куда сохранять
//   },
//   watch: true,// если тру то он автоматически будет пресохранять и пересобирать при изменении

//   devtool: "source-map",// // хранит информацию об исходниках из которых собирался проект

//   module: {}////непонятнаааааа
// };



// итакю.Есть глобально установленный вебпак
// есть настроенный конфиг
// теперь надо большой файл разбить намаленькие кусочки 


// создали папку modules и прокрошили тудавесь проект обернули в функцию и экспортировали

// тут оставляем толко это 
// через синтаксис commonJS импротируем каждую функцию из modules
//следим чтобы совпадали названия
// window.addEventListener('DOMContentLoaded', function() {
//     const tabs = require('./modules/tabs'),
//           modal = require('./modules/modal'),
//           timer = require('./modules/timer'),
//           cards = require('./modules/cards'),
//           calc = require('./modules/calc'),
//           forms = require('./modules/forms'),
//           slider = require('./modules/slider');
// //вызываем каждую функцию
//     tabs();
//     modal();
//     timer();
//     cards();
//     calc();
//     forms();
//     slider();
// });

//итак я пересобрал проект все скрипты работают кроме openModal потому что там идет зависимость




//Урок 72 ES 6 modules 
//еще один способ формировать модули

// в папке test разбираю способы импрота и экспорта

//итак есть main.js из которого экспортируется
// export let one = 1;//первый синтаксис

// let two = 2;

// export {two};// второй синтаксис

// export function sayHi (){
//     console.log('Hello');
// }

// export default function sayHi (){//написали дефолт дальше смотрим как импортируется
//     console.log('Hello');
// }
// // экспорт по умолчанию должен быть только один

//есть script.js в котором это все испортируется

// import {one as first, two} from './main';// as это преименование при импорте
// //импортируется объект и деструктурируется 
// import sayHi from "./main"; // импорт если написан дефолт

// console.log(`${first} and ${two}` );


// import * as data from './main';//импортировать все как объект data

// console.log(`${data.one} and ${data.sayHi} `);


// sayHi();//вызываем импортированную функцию


// включается вебпак 
// и рабочим файлом становится bundle.js(его и привязываем к HTML)


//есть атрибут type = "module" в HTML он делает так чтобы браузер попытался прочитать их без вебпака
// но в импртах и экспортах надо писать уже путь с типом файла




//Урок 73 Собираем проект и фиксим баги 
//Это самый сложный урок на данный момент

//В 71 уроке был вот такой синтаксис

//чтобы все правильно отрабатывало должно быть запущено MAMP JSON Server и WebPack

// window.addEventListener('DOMContentLoaded', function() {
//     const tabs = require('./modules/tabs'),
//           modal = require('./modules/modal'),
//           timer = require('./modules/timer'),
//           cards = require('./modules/cards'),
//           calc = require('./modules/calc'),
//           forms = require('./modules/forms'),
//           slider = require('./modules/slider');
// //вызываем каждую функцию
//     tabs();
//     modal();
//     timer();
//     cards();
//     calc();
//     forms();
//     slider();
// })


//теперь вот такой синтаксис импорта ES6

// import tabs from './modules/tabs';
// import modal from './modules/modal';
// import timer from './modules/timer';
// import cards from './modules/cards';
// import calc from './modules/calc';
// import forms from './modules/forms';
// import slider from './modules/slider';
// import {openModal} from './modules/modal'
// window.addEventListener('DOMContentLoaded', function() {
//     const modalTimerId = setTimeout( () => openModal('modal', modalTimerId), 300000);// тут стрелочная функция сделана чтобы можно было передать аргументы в опен модал а не просто написать openModal без скобочек.Наебываем сет таймаут как с обработчиком событий
//     //если простыми словами то через 30000 милисекунд запустится стрелочная функция которая внутри себя запустит openModal
// // эту херню надо будет передавать в forms и modal модули 

// //вызываем каждую функцию
//     tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
//     modal('[data-modal]','.modal', modalTimerId);// тут через аргументы делаем чтобы избежать багов
//     timer('.timer', "2020-10-04");
//     cards();
//     calc();
//     forms('form', modalTimerId);
//     slider({// тут передаем все аргументы слайдера через деструктуризацию
//         container: '.offer__slider',
//         nextArrow: '.offer__slider-next',
//         slide: '.offer__slide',
//         prevArrow: '.offer__slider-prev',
//         totalCounter: '#total',
//         currentCounter:'#current',
//         wrapper: '.offer__slider-wrapper',
//         field: '.offer__slider-inner',

//     });
// });


//в этом уроке прыгаем по папке modules и фиксим баги
//весь прикол в том что модулидолжны быть независимы друг от друга и нужно стараться не использовать жестко забитых переменных в функциях а передавать их в аргументах


// так сам я однозначно не вывезу такое дерьмо с таймером 
// чтобы такого  не было надо писать независимые друг от друга модули и не использовать глобальные переменные
//ну если вкратце тонам надо было отключать показ модального окна если пользователь уже его кликнул
// в целиковом файле были одни переменные и использовались они в разных модулях 
// тут было сделано так чтобы эта переменная(setTimerID) передавалась от главного script.js файла и использоавлась внутри функций как аргумент 


// еще мы вырезали функции которые работают с сервером и занесли их в services

// в слайдере тоже все сделали через деструктуризацию



//Урок 74 Формируем портфолио на GitHub

// Гитхаб это соцсеть. Там можно создавать портфолио заливать отдельные модули с описаниями 
//короче надо разобраться с гитом и пересмотреть предыдущий урок 




//Урок75 Ощибки.Как избежать поломки своего кода

//Даже на самых популярных и крутых сайтах есть ошибки
//Они могут положить весь скрипт


// try {//конструкция трай - кетч берет и пробует выполнить код если не получается выполняет то что написано в кетч
//     console.log('Normal');
//     console.log(a);//это ошибка
//     console.log('result');//не покажется
// } catch(error) {//error - это объект ошибки
//     console.log(error);//>>> ReferenceError: a is not defined
//     console.log(error.name);// название ошиби
//     console.log(error.message);//объяснение ошибки
//     console.log(error.stack);//все вместе со ссылкой на строку
// } finally {
//     console.log('finally');// выполнится при любом развитии событий
// }
// // после такой конструкции код не перестает работать в вообще а просто выполняет кетч и двигается дальше
// console.log(a);// если ошибка просто так написана то скрипт завалится
// console.log('something');



// //если сомневаешься в каком то участке кода - используй эту технологию

// // допустим у тебя много страниц
// //в скрипте есть получение элементов которые есть на однних страницах а на других их просто нет

// document.querySelector('.active').addEventListener('click', () => {
//     console.log('click');
// });

// console.log('Normal');
// // тут на страничке где кнопка с классом активности есть все будет норм
// // там где такой кнопки нет ты получишь ошибку

// //вот тут надо использовать try/catch

// try {// пробуем навесить обработчик
// document.querySelector('.active').addEventListener('click', () => {
//     console.log('click');
// });
// } catch(e) {//если его нет то выводим в консоль объект ошибки
//     console.log(e);
// }

// //код рабоотает дальше
// console.log('Normal');








//Урок 76 как превратить кож ES6+ в старый формат ЕS5. Babel, Core.js и полифиллы


//Оптимизация кода под старые браузеры

//Babel - трансплиттер

// полифиллы - участки кода которые эмулируют поведение современных стандартов

//короче эту штуку надо подключать к сборщикам проектов по гайду как npm

// в общем опять подрубаются куча библиотек которые запоминать нет смысла
//делается это в основном по гайду не забивай голову



// есть еще инфа про подключение полифиллов отдельно но я прописывать не стал
// там через консоль устанавливается этот npm изатем он имрортируется в главный JS файл






//Урок 77 Современные библиотеки и фреймворки



//фреймворк - большая библиотека которая ограничивает структуру проекта
// но помогает создавать сингл пейдж аппликейшоны

//есть Angular React Vue.js 

//эти штуки делают веб приложения которые работают прям в браузере
// прикол в том что можно делать много чего не переходя при этом на другие страницы

//как в гугл почте или авиасейлс

//Angular 

//самый тяжелый 
// порог вхождения максимальный 
//чтобы начать работу с Angular надо знать и использовать:
// - node.js
// - TypeScript
// - WebPack
// - MVC pattern 
// - Angular




//React 

// -использует комбинацию джаваскрипта и верстки в своем синтаксисе
// -Стоит на первом месте по трендам
//Препроцессор JSX
//Babel
//Webpack
//React
//Документация на русском




//VueJS


//прост в обучении
//Webpack
//Vue




//Урок 78 Jquery

//http://jquery.page2page.ru/

//там есть таблица с функциями 

//короче это красивая синтаксическая обертка нативного джаваскрипта

//итак бро работа сводится к получению элементов и последующим с ними манипуляциями 
//так и любая библиотека

// Но jquery уже устарел и используется для поддержки крупных проектов которые были написаны на нем ранее





//Урок 79 Функции Генераторы



// function* generator() {
//     yield 'S';
//     yield 'C';
//     yield 'r';
//     yield 'i';
//     yield 'p';
//     yield 't';
// }


// const str = generator();
// console.log(str.next());//>>> { value: 'S', done: false }
// console.log(str.next());//>>> { value: 'C', done: false }
// console.log(str.next());//>>> { value: 'r', done: false }
// console.log(str.next());
// console.log(str.next().value);//>>> p
// console.log(str.next());//>>> { value: 't', done: false }
// console.log(str.next());//>>> { value: undefined, done: true }



// function* count(n) {
//     for(let i = 0; i < n; i++) {
//         yield i;
//     }
// }

// const counter = count(7);

// console.log(counter.next().value);//при вызове сработает только одна итерация цикла

// console.log(counter.next().value);

// console.log(counter.next().value);



// for (let k of count(7)) {//запустить функцию - генератор максимальное количество раз
//     console.log(k);
// }





//Урок 80 Анимации JS

//requestAnimationFrame это более продвинутая технология которая более оптимизирована

// const btn = document.querySelector('.btn'),
//       elem = document.querySelector('.box');  
// let pos = 0;

// function myAnimation() {//функция из старого урока
//     let pos = 0;

//     const id = setInterval(frame, 10);
//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + 'px';
//         }
//     }
// }

// function myAnimation() {//алгоритм действия анимации тот же самый
//     pos++;//увеличиваем pos на единичку
//     elem.style.top = pos + "px";//устанавливаем значение для инлайн стилей
//     elem.style.left = pos + 'px';
//     // дальше был запуск сет интервала.Сейчас не нужен
//     if (pos < 300) {//если позиция меньше чем 300 то анимация запускается
//         requestAnimationFrame(myAnimation);//запуск анимации
//     }
// }

// btn.addEventListener('click', () => requestAnimationFrame(myAnimation));//после клика по кнопке анимация запускается в первый раз и зацикливается
// //тут тоже делается наебка обработчика с линейной функцией которая оборачивает запуск функции
// //в обработчике должнп быть ссылка на функцию а не ее запуск ()
// let id = requestAnimationFrame(myAnimation);//в переменной id будет уникальный идентификатор этой анимации
// cancelAnimationFrame(id);//через него можно ее остановить







//Урок 81 Event loop подробная работа синхронных и асинхронных операций


// console.log(1);//1

// setTimeout(() => {
//     console.log('timeout');//3
// }, 2000);

// setTimeout(() => {
//     console.log('timeout__4000');//4
// }, 4000);


// console.log(2);//2


// //Асинхронные это те которые по таймауту или запросы на сервер

// //корче походу все что делается не сразу по загрузке страницы


// //есть сайт Loupe где показывается замедленно как выполняется асинхронный код

// //если есть очень тяжелая задача то она может остановить работу всего скрипта
// // короче можно заблокировать call stack и все остальное будет попадать в очередь

// // Пока колстак не освободится мы ничего не можем делать на странице


// setTimeout(()=> {//эта хрень пойдет сначала в web Apis а потом уже попадет в очередь
//     console.log(1);//2
// },0);//если 0 то там JS сам поставит 4мс

// console.log(2);// 1






//Урок 82 работаем с готовым кодом
//В мире куча готовых решений и использовать их быстрее и выгоднее
//Знание нативного джаваскрипта помогает подключать разбираться и настраивать эти готовые решения



//Слайдеры
//Их уже дохуя написали за тебя
//Slick работает с jquery
//tiny-slider работает без библиотек на чистом джей эсе
//glideJS
//итд

//смотрим документацию
//подключаем как npm 
//импортируем в скрипт
//настраиваем
//можно подключать их дефолтные стили

// готовься их донастраивать под себя





































































//REACT



//Урок 85

//реакт нужен чтобы делать веб приложения которые работают прям на странице без перезагрузки

//Реакт использует перпроцессор JSX- помесь HTML иджаваскрипта
// Элементы созданные из реакта гораздо легче нативных элементов для браузера(Если рассматривать их как объект)
//Разница в размерах в сотни раз
//Например для каждого нативного элемента браузер прописывает ВСЕ стили которые могут быть применены к нему

//Реакт исопльзует стандарты ES 6-8.Вспоминаем

//3 вида переменных let const и var
//var существует еще до того как она была создана

//Стрелочные функции не имеют собственного контекста вызова This

//Методы map и filter-методы перебора map и filter

//filter


// const names = ['Kate', 'Olga', 'Nika', 'VeroNIKA'];

// const shortNames = names.filter(function (item) {// аргумент item это каждый отдельный прербираемый элемент массива
//     return item.length < 5;// вернуть все имена длина которых меньше 5 символов и сформировать из них новый массив
// });

// console.log(shortNames);



// //map позволяет взять исходный массив и изменить каждый элемент внутри него

// const answers = ['IvAn', 'AnaA', 'HellO'];

// const result = answers.map(item => {// Каждый элемент в ловеркейс
//     return item.toLowerCase()
// });

// console.log(result);



// //Интерполяцию тоже не забываем

// function fetchData(data, count = 0){//count = 0 это то же самое по умолчанию
//     count = count || 0;// наебалово системы через или. Если ничего не передано то по дефолту будет 0 а не undefined
//     console.log(`Данные: ${data} в количестве ${count}`)
// }
// fetchData('something');//>>> Данные: something в количестве undefined

// //Rest пареметр.Ты его уже тоже знаешь

// function max (a, b, ...numbers) {// принимаем неограниченное количество аргументов и записываем их в массив
//     console.log(numbers);//>>>>[ 3, 4, 10, 15 ]
// }
// //рест оператор должен быть только 1 и стоять после всех аргументов которые принимает функция
// max(1, 2, 3, 4, 10, 15);



// //Есть еше spread оператор


// const arr1 = [1, 2, 5];
// const arr2 = [45, 6, 8];
// const res = Math.max(1,...arr1, 10, ...arr2);
// console.log(res);//>>> 45
// // надо найти самое большое значение из этих 2 массивов

// //Эта херня работает и для объектов

// const user = {
//     name: 'default',
//     pass: 'qwerty',
//     rights:'user'
// };

// const admin = {
//     name: 'admin',
//     pass: 'root'
// };

// const avatar = "Photo";
// const res = Object.assign(user, admin);//раньше писали так
// console.log(res);//>>>> { name: 'admin', pass: 'root', rights: 'user' }


// const res2 = Object.assign({}, user, admin);
// console.log(res2);//то же самое


// const res3 = {...user, ...admin, avatar};//{ name: 'admin', pass: 'root', rights: 'user', avatar: 'Photo' }
// console.log(res3);//То же самое




// const x = 25, y = 10;
// const coords = {
//     x: x,
//     y: y
// };

// console.log(coords);//>>>{ x: 25, y: 10 }

// const coords2 = {
//     x,//если свойство объекта называется как переменная которая в него помешается то можно не писать ключ:свойство
//     y,
//     calcSquare(){// можно вот так задавать методы в объектах
//         console.log(this.x * this.y);//>>>> 250
//     }
// };
// console.log(coords2);//>>>{ x: 25, y: 10 }


// //деструктуризаця-- когда надо использовать свойство объекта вне самого объекта
// //короче у нас свойства объекта становятся переменными

// const user = {
//     name: 'default',
//     pass: 'qwerty',
//     rights:'user'
// };

// console.log(user.name);//можно добираться через точку

// const name = user.name; // можно записать в переменную

// const {name, pass, rights} = user;// создадутся 3 переменные после = пишется название объекта который мы деструктурируем


// const user = {
//     name: {
//         first: 'Sam',
//         second: 'Fisher'
//     },
//     pass: 'qwerty',
//     rights:'user'
// };


// const {name:{first,second}, pass, rights} = user;//тут деструктурируем объект внутри объекта


// function connect({//деструктуризация + дефолтные значения
//     //теперь можно влюбом порядке передавать параметры
//     host = 'local host',
//     port = 3000,
//     user = 'default'
// } ={}) { //передаем объект в аргументы. Присвоили значение по умолчанию пустого объекта чтобы если нихуя не передали все равно не было ошибки
//         console.log(`Host: ${host}, port: ${port}, user: ${user}`)
//         //>>>>Host: local host, port: 65877877, user: default
// }

// connect({
//     port: 65877877
// })





// //Деструктуризацию можно использовать и для массивов

// const numbers = [3,4,6,7,7];

// // const [a, b, c] = numbers;

// // console.log(a, b, c);//>>> 3 4 6

// const [, , c] = numbers;

// console.log(c);//>>> 6


// // //если масив в массиве
// const numbers = [[3,4],6,[7,7]];
// // numbers[0][0]//раньше добирались до элементов вот так


// const [[a, b], ,[c, d]] = numbers;

// console.log(a,b,c,d);//>>>> 3 4 7 7



// const country = {
//     name: 'England',
//     population: 2000000,
//     gender: {
//         male: ['15%', '40%'],
//         female: ['16%', '29%'],
//     }
// }

// //Допустим надо вытащить проценты
// //country.gender.male[0]

// const {gender:{male: [maleUnder18, maleAdult], female:[femUnder18, femAdult]}} = country;


// console.log(maleUnder18, femAdult);//>>>15% 29%




//Урок 86 Домашнее задание

// ///Короче надо переписать вот этот код с новыми стандартами


// var employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

// var employersNames = [];
// for (var i = 0; i < employers.length; i++) {
// 	if (employers[i].length > 0 && employers[i].length != '') {
// 		employersNames.push(employers[i]);
// 	}
// }
// for (var i = 0; i < employersNames.length; i++) {
// 	employersNames[i] = employersNames[i].toLowerCase().trim();
// }

// var sponsors = {
//     cash: [40000, 5000, 30400, 12000],
//     eu: ['SRL', 'PLO', 'J&K'],
//     rus: ['RusAuto', 'SBO']
// };



// function calcCash(own) {
//     own = own || 0;
//     var everyCash = Array.prototype.slice.call(arguments);
//     var total = own;
//     for (var i = 0; i < everyCash[1].length; i++) {
//         total += +everyCash[1][i];
//     }
//     return total;
// }


// var money = calcCash(null, sponsors.cash);



// function makeBusiness(owner, director, cash, emp) {
//     director = director || 'Victor';
//     var sumSponsors = sponsors.eu.concat(sponsors.rus, 'unexpected sponsor');
//     console.log('We have a business. Owner: ' + owner + ', director: ' + director + '. Our budget: ' + cash + '. And our employers: ' +
//     emp);
//     console.log('And we have a sponsors: ');
//     console.log.apply(null, sumSponsors);
//     console.log('Note. Be careful with ' + sponsors.eu[0] + ". It's a huge risk.");
// }
// makeBusiness.apply(null, ['Sam', null, money, employersNames]);


// //Переписываем



// const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];//тут просто как конст

// let employersNames = employers.filter(function (item) {//Тут фильтер вместо перебора
//     return item.length > 0
// });

// employersNames = employersNames.map(item => {//мэп вместо перебора
//     return item.toLowerCase().trim()//трим делает все без дырок
// });


// const sponsors = {
//     cash: [40000, 5000, 30400, 12000],
//     eu: ['SRL', 'PLO', 'J&K'],
//     rus: ['RusAuto', 'SBO']
// };

// const {cash, eu, rus} = sponsors;//деструктуризация на 3 переменных


// function calcCash(own = 0, ...everyCash) {//rest + значение по умолчанию

//      own = everyCash.reduce((sum, current) => sum + current);// редьюс схлопывает и выводит сумму
//     return own;
// }

// const money = calcCash(null, ...cash);//spread

// console.log(money);


// function makeBusiness({owner, director = 'Victor', cash, emp}) {//деструктуризируем переданный при вызове объект
//     const sumSponsors = [...eu, ...rus, 'unexpected sponsor'];//spread на переменные чтобы все склеить в 1 массив
//     //дальше интерполяция джоин чтобы разделить пробелами и вывести массив строкой
//     console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}
// And we have a sponsors:
// ${sumSponsors.join(' ')}
// Note. Be careful with ${eu[0]}. It's a huge risk.`);
// }
// makeBusiness({//передаем объект который дальше будет деструктурирован
//     owner:'Sam',
//     cash: money,
//     emp: employersNames
// });


// //Теперь как сделал Ванька

// const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];//тут так же

// const employersNames = employers.filter(employer => employer).map((item) => item.toLowerCase().trim());//в одну строку ебанул.и фильтер как то по выебному записал

// let sponsors = {
//     cash: [40000, 5000, 30400, 12000],
//     eu: ['SRL', 'PLO', 'J&K'],
//     rus: ['RusAuto', 'SBO']
// };

// const {cash, eu, rus} = sponsors;//я тоже так сделал ))

// const sumSponsors = [...eu, ...rus, 'unexpected sponsor'];//ну тут так же

// const calcCash = (cash = 0) => cash.reduce((a, b) => a + b);//тоже через редьюс сделал но опять в 1 строчку
// // сразу передал кеш а не разворачивал а потом сворачивал

// const money = calcCash(cash);

// //тут все так же у меня
// const makeBusiness = ({cash, emp, owner = 'Sam', director = 'Victor'}) => {
//     console.log(`We have a business. Owner: ${owner} , director: ${director} . Our budget: ${cash} . And our employers: ${emp}
// And we have a sponsors: ${sumSponsors}
// Note. Be careful with ${eu[0]}. It's a huge risk.`);
// };
// makeBusiness({cash: money, emp: employersNames});

// //У меня получилось точь в точь а у Ваньки меньше строчек
// //Пославлю себе пятерку но теперь буду стараться писать все в строку







//Урок 87. Модульная структура, зачем она нужна в React. Собираем проект

//Короче приложение дробится на модули.Например Сайдбар.Модули не зависимы друг от друга


//вспоминаем классы


// function button(){
//     return 'button';
// }

// class Slider {
//     constructor(width, height, count){//сюда записываются аргументы которые мы передаем в класс
//         this.width = width;
//         this.height = height;
//         this.count = count;
//     }
//     nextSlide(){//методы класса
//         console.log('Moving forward');
//     }
//     prevSlide() {
//         console.log('Moving back')
//     }

//     whoAMI(){
//         console.log(this.width, this.height, this.count);
//     }
// }


// // const slider = new Slider(600, 400, 5),
// //       someSlider = new Slider(300, 450, 10);


// // slider.whoAMI();
// // someSlider.whoAMI();


// class AutoSlider extends Slider{//наследование
//     constructor(width, height, count, auto){//все равно надо переписывать аргументы
//         super(width, height, count);//Эта залупа переносит из родителького слайда свойства
//         this.auto = auto;
//     }
//     play(){//методы переписывать не надо. Они наследуются
//         console.log(`Autoplay: ${this.auto}`);
//     }
// }

// const slider = new AutoSlider(500, 500, 4, true);
// slider.whoAMI();
// slider.play();


// export {button as btn, Slider};//отсюда экспортируем в index.js принимаем
// // export default Slider;// бывает только 1 в файле

//теперь принимаем типо из index.js
// import {btn , Slider as sl} from '../js/script';//указываем относительный путь откуда/ as переименовывает
// const slider = new sl(400, 300, 5);//используем то что импротировали
// import * as total from '../js/script';// импортировать все как объект который будет содержать 2 метода
//import Slider from '../js/script';//импорт по умолчанию


// import React, {Component} from 'react';//импорт из зависимостей (установленных npm) не требует того чтобы путь был прописан
// //тут комбинируется импорт по умолчанию выборочный импорт



//подрубили вебпак npm install webpack webpack-cli --save-dev 
//бабель  тоже подрубили 

//Есть такая херня как createReactApp  она похожу все сама делает и подрубает и настраивает все npm на папку которую ты выберешь
//Но ее нельзя использовть внутри других проектов

//Команды для ее запуска
// npm i create-react-app -g(глобально)
// npx create-react-app my-app
// cd my-app
// npm start




//Урок 88 JSX

// import React from 'react';//реакт подрубается на каждой странице даже если не используется
// //если используется препроцессор JSX его надо импротировать
// import ReactDOM from 'react-dom';
// import './index.css';
// // import App from './App';

// // const elem = (//если этот элемент занимает несколько строк то он должен быть в круглых скобках
// //       <div>
//             // {/* <h2>Hello World</h2>//В ебало сразу прописывается верстка */}
// //             <input type="text" placeholder="Type here"/>
// //             <button/>
// //       </div>
// //       //JSX элементы должны быть обернуты в какой то один тег
// // )
// // const elem = React.createElement('h2', null, 'Hello World!!!');// То же самое но в другом синтаксисе без перпроцессора JSX и Babel




// //В реакте все элементы должны быть компонентами - быть отдельными функциями которые называются с большой буквы
// const Header = () => {
//   // const scr = '<script>alert("Error!")</script>'//типо вредоносный скрипт
// // return <h2>{scr}</h2>//но хуй там потому что тот html кторый мы пишем всегда превращается в строку
// return <h2>Hello World</h2>
// }

// const Field = () => {
//   const holder = "Enter here"
//   const styledField = {//стили запихиваем в объект
//     width: '300px'
//   }

//   return  <input 
//   style={styledField}//передаем инлайн стили в инпут
//   type="text"
//   placeholder={holder}//такая вставка в реакте похожа на интерполяцию
//   autoComplete=""//Пишутся в таком формате
//   className="first"// аналог класса в HtML проиписывается именно так
//   htmlFor=""//аналог FOR в html
//   />
// }

// const Btn = () => {
//   const text = "Log in";//переменная
//   const res = () => {//функция
//     return 'Log in, please'
//   }
//   const p = <p>Log in</p>//элемент
//   const logged = false;
//   return  <button>{logged ? "Enter" : text}</button>// Вот так вставляется что угодно. В фигурные скобки можно запихивать переменные функции элементы выражения
//   //объекты во внктрь реакт элементов помещать нельзя
//   //сейчас там тернарный оператор (синтаксически сокращенная запись условия if)
// }

// //Ну вот после того как все компоненты прописаны все заворацивается в 1 див и используется вот в таком синтаксисе
// const App = () => {
//   return (
//     <div>
//       <Header/>
//       <Field/>
//       <Btn/>
//     </div>
//   )
// }


// //Ну а эта херня по ходу стоит в конце и закидывает все элементы на страницу
// ReactDOM.render(<App/>, document.getElementById('root'));



//Урок 89 JSX
//Короче сделали новый проект разбили его на кусочки в папке components расписали каждый кусок
//как отдельную функцию
// соединили в app js куда подтягиваются все экспорты и собираются в 1 структуру
//после этого он уже собирается через вебпак и бейбель
//в конце подключили стили
// ну в общем создается компонент затем экспортируется и применяется в общем файле
//Если будет непонятно - тыкайся в папке jsx-practice



//Урок 91. Свойства и состояния компонентов. События в React | Теория


// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// // import App from './components/app/';//тут вебпак будет искать по умолчанию индекс.js поэтому если делаешь через него то имя файла можно не прописывать




// // function WhoAmI(props){//у компонентов есть вот такая фича. Сюда походу передается объект. при использовании этого компонента прописывается прям в тег как атрибуты
// //   //можно еще ебануть деструктуризацию
// //   return (//такая обертка нужна для того чтобы не городить дивы.Можно оставить вообше только <></>
// //   <React.Fragment>
// //     <h1>My name is {props.name} , surname {props.surname}</h1>
// //     <a href={props.link}>My profile</a>

// //   </React.Fragment>
// //   )
// // }
// //функции со своими пропсами менять динамически нельзя

// //переписываем функцию(компонент) WhoAmI в класс чтобы она могла меняться динамически
// class WhoAmI extends Component{//эта  хрень  сделана для того чтобы у нее наследовались методы от реакт компонента
//   constructor(props){
//     super(props);
//     this.state = {//это уникальное состояние компонента.У каждого своё
//       years: 26,
//       nationality: 'uk'

//     }
//     //на каждую кнопку надо повесить обработчик событий и тут определяется какой обработчик за какую кнопку отвечает
//     //this.nextYear = this.nextYear.bind(this);
//     //ЧТО ТЫ ТАКОЕ????
//     //это был первый способ привязать контекст вызова


//     //второй способ.Понятнее
//   //   this.nextYear = () => {//задаем свойство объекта
//   //     this.setState(state => ({//стрелочная функция дырявая в плане контекста вызова поэтому this тут не надо биндить

//   //       years: ++state.years
//   //     }))
//   //   }

//   }

//   //Третий способ.Экспериментальный

//   nextYear = () => {// записываем за пределами конструктора и используем стрелочную функцию
//     this.setState(state => ({

//       years: ++state.years
//     }))
//   }

//   // nextYear() {//увеличиваем соостояние по кнопке
//   //   console.log(1);
//   //  // this.state.years++//такой мув выдаст ошибку и состояние перезаписать не получится
//   // this.setState(state => ({//вот так надо менять state.Про скобки не забывай
//   //   //state аргумент это текущее состояние
//   //   years: ++state.years
//   // }))
//   // }
//   render(){
//     const {name, surname, link} = this.props
//     const {years} = this.state;
//     return (//такая обертка нужна для того чтобы не городить дивы.Можно оставить вообше только <></>
//       <React.Fragment>
//         <button onClick={this.nextYear}>++</button>
//         <h1>My name is {name} , surname {surname}, years = {years}</h1>
//         <a href={link}>My profile</a>
    
//       </React.Fragment>
//       )
//   }
// }

// const All = () => {
//   return (
//     <>
//       <WhoAmI name="John" surname="Smith" link="pornhub.com"/> 
//       <WhoAmI name="Ivan" surname="Smith" link="pornhub.com"/> 
//       <WhoAmI name="Alex" surname="Zikov" link="vk.com"/> 
//     </>
//   )
// }





// ReactDOM.render(<All/>, document.getElementById('root'));




//Урок 93 Делаем приложение динамическим
//Тут записать не получится.Все делалось в нескольких файлах 
//делали так, чтобы кнопки в лист айтемах работали: вешали обработчики и изменяли состояния
//Сделали так чтобы посты рендерились из 1 объекта который будет приходить с сервера
//Я сделал много записей в самих файлах.Лучше прочитать их




//App

// import React from 'react';
// import AppHeader from '../app-header/app-header';
// import SearchPanel from '../search-panel/search-panel';
// import PostStatusFilter from '../post-status-filter/post-status-filter';
// import PostList from '../post-list/post-list'
// import PostAddForm from '../post-add-form/post-add-form';
// import './app.css';
// const App = () => {

//     //допустим следующая переменная пришла с сервера
//     const data = [//вот этот массив передадим как пропс при вызове пост листа когда уже собираются все компоненты
//         {label:"Going to learn react", important: true, id:"qweqwrwrwr"},//у объектов должны быть айдишники чтобы реакт знал что надо перерисовывать и оставлял то что перерисовывать  не обязательно при обновлении информации
//         {label:"That is so good", important: false, id:"kihkhil"},//это не цифры по порядку а набор символов
//         {label:"I need a break...", important: false, id:"sxzscdz"}
//     ];

//     return(
//             <div className="app">
//                 <AppHeader/>
//                 <div className="search-panel d-flex">
//                     <SearchPanel/>
//                     <PostStatusFilter/>
//                 </div>
//                 <PostList posts={data}/>
//                 <PostAddForm/>
//             </div>
//     )
// }

// export default App;





//PostlistItem
// import React, {Component} from 'react';
// import './post-list-item.css'

// //Чтобы у постов были свойства.ЧТобы они не были статичными надо переписать пост лист айтем под класс а  не функцию

// export default class PostListItem extends Component{
//     constructor (props) {
//         super(props);
//         //В конструкторе ключевое слово super() используется как функция, вызывающая родительский конструктор. Её необходимо вызвать до первого обращения к ключевому слову this в теле конструктора. Ключевое слово super также может быть использовано для вызова функций родительского объекта.
//         this.state = {//создаем состояние объекта
//             important:false,
//             like:false

//         }
//         this.onImportant = this.onImportant.bind(this);//Используем первый способ привязать обработчик к объекту
//         this.onLike = this.onLike.bind(this);
//     }
// //прописываем метод - обработчик
//     onImportant() {//когда кликаем на кнопку вызывается этот метод
//         //он работает с нашим стейтом
//         //записан вне конструктора в специальном синтаксисе
//         //внутри сет стейт принимает в себя функцию стрелку, которая в виде аргумента принимает в себя стейт и деструктурирует на импортант и изменяет его на противоположный
//         //круглые скобки вконце это синтаксис JSX
//         this.setState(({important})=>({
//             important: !important
//         }))
//     }

//     //такой же обработчик но на лайки
//     onLike() {

//         this.setState(({like})=>({
//             like: !like
//         }))
//     }


//     render(){//рендер - это главный метод компонента.В него переписывается функция
//         const{label} = this.props;//Это пропс только у класса который расширяет реакт компонент.При вызове это передается как пропсы
//         const{important, like} = this.state; // important и лайк при рендере вытаскиваем из состояния
//         let classNames = 'app-list-item d-flex justify-content-between';// эта переменная будет динамически изменяться в нее записываются все классы в зависимости от условий
//         if (important) {//  формируем строку в зависимости от условия если есть импортант то добавляем это в список классов с пробелом
//             classNames += ' important'
//         }

//         if(like){
//             classNames += ' like';
//         }

//         return (
//             <div className={classNames}>
//             <span
//              className='app-list-item-label'
//              onClick={this.onLike}>
//                 {label}
//             </span>
//             <div className="d-flex justify-content-center align-items-center">
//                 <button 
//                 type="buttton" 
//                 className="btn-star btn-sm"
//                 onClick={this.onImportant}>
//                     <i className="fa fa-star"></i>
//                 </button>
//                 <button type="buttton" className="btn-trash btn-sm">
//                     <i className="fa fa-trash-o"></i>
//                 </button>
//                 <i className="fa fa-heart"></i>

//             </div>


//         </div>

//         )//теперь на кнопку можно повесить обработчик событий который будет вызывать метод этого классв
//     }
// }

// //Эта функция останется закомментированной. Из нее переписывали класс
// // const PostListItem = ({label, important = false}) => {//пропс передается при вызове компонента. в данном случае передаем по цепочке от "сервера"
// //     //если при вызове не передается important то он по умолчанию фолс

// //     let classNames = 'app-list-item d-flex justify-content-between';// эта переменная будет динамически изменяться в нее записываются все классы в зависимости от условий
// //     if (important) {//  формируем строку в зависимости от условия если есть импортант то добавляем это в список классов с пробелом
// //         classNames += ' important'
// //     }
// //     return(
// //         <div className={classNames}>
// //             <span className='app-list-item-label'>
// //                 {label}
// //             </span>
// //             <div className="d-flex justify-content-center align-items-center">
// //                 <button type="buttton" className="btn-star btn-sm">
// //                     <i className="fa fa-star"></i>
// //                 </button>
// //                 <button type="buttton" className="btn-trash btn-sm">
// //                     <i className="fa fa-trash-o"></i>
// //                 </button>
// //                 <i className="fa fa-heart"></i>

// //             </div>


// //         </div>
// //     )
// // }

// // export default PostListItem;





//PostLit

// import React from 'react';
// import PostListItem from '../post-list-item/post-list-item';
// import './post-list.css'
// const PostList = ({posts}) => {// эти пропсы будут приходить из App/ По идее должны приходить с сервера

//     const elements = posts.map((item) => {
//         //перебираем исходный массив который передается с пропсами и для каждого элемента записываем структуру
//         //возвращаем  в переменную новый массив

//         const {id, ...itemProps}=item;// разорвали айтем на отдельный айдишник и через рест походу помещаем все остальные пропсы в отдельную переменную
//         return (//тут к каждому элементу цепляем айдишник и в пост лист айтем разворачиваем и передаем пропсы
//             <li key={id} className="list-group-item">
//               <PostListItem {...itemProps}/>
//             </li>
//         )
//     })
//     return (
//         <ul className="app-list list-group">
//             {elements}
//         </ul>
//     )
// }

// export default PostList;





//Урок93 93. Подключаем стили и знакомимся с styled-components | Теория

//npm install node-sass --save
//такая команда подрубает sass к нашему проекту
//import style from "App.module.css"; если название прописано так то можно подрубать несколько сss файлов
//дальше эта штука используется как объект className={style.app}
//app это класс который там прописан


//есть такая штука как реакт бутстрап называется reactstrap
//https://reactstrap.github.io/
//npm install reactstrap bootstrap@4 --save
//устанавливается вместе с бутстрапом 
//там готовые стили
//на их сайте есть документация
//там написано как все использовать
//import 'bootstrap/dist/css/bootstrap.css';// это прописываем в index.js главный
//import React from 'react';
// import { Button } from 'reactstrap';

// const Example = (props) => {
//   return (
//     <div>
//       <Button color="primary">primary</Button>{' '}
//       <Button color="secondary">secondary</Button>{' '}
//       <Button color="success">success</Button>{' '}
//       <Button color="info">info</Button>{' '}
//       <Button color="warning">warning</Button>{' '}
//       <Button color="danger">danger</Button>{' '}
//       <Button color="link">link</Button>
//     </div>
//   );
// }

// export default Example;




//В общем не еби себе голову юзай готовые компоненты
//Это очень сильно ускоряет разработку


//У них есть на сайте еще вкладка layout 
//она работает как модульная сетка и тут можно прям в реакте в ебало делать лейаут




//Styled Components

// import styled from 'styled-components';

// const AppBlock = styled.div`
//     margin: 0 auto;
//     max-width: 800px;

// `;

//а это типо наследование и каскадность
// const StyledAppBlock = styled(AppBlock)`
// background-color: gray;
// `

// return(
//     <AppBlock>//применяем компонент который создали через стайлд компонентс
//         <AppHeader/>
//         <div className="search-panel d-flex">
//             <SearchPanel/>
//             <PostStatusFilter/>
//         </div>
//         <PostList posts={data}/>
//         <PostAddForm/>
//     </AppBlock>
// )





//Эта херня поддерживает вложенности и условия

// const Header = styled.div`
// display: flex;
// align-items: flex-end;
// justify-content: space-between;
// h1 {
//     font-size: 26px;
//     color: ${props => props.colored ? 'red' : 'black'};
//     :hover{
//         color:blue;
//     }
// }
// h2 {
//     font-size: 1.2rem;
//     color: grey;
// }
// `





//Урок 94.Собственные события.Иммутабельность(неизменяемость стейта напрямую)


//Надо сделать так чтобы при нажатии на мусорку пост удалаялся и со страницы и с сервера
//кнопка с мусоркой находится в пост лист айтеме
//пост находится в app.js они никак не связаны
//надо чтобы между этими компонентами было взаимодействие
//идея в том чтобы была цепочка
//post-list-item>>>post-list>>>app.js>>>рендер страницы заново
//На нижнем уровне есть событие на кнопке 
//на среднем уровне она берет айди элемента который приписывался при создании
//на верхнем уровне она выполняется и удаляет элемент

//чтобы удаление работало надо переписать App как класс чтобы у него были стейты

//Дальше про безболезненное изменение стейтов

//прикладываю app.js с моими комментариями из урока


//APP.JS
// import React, {Component} from 'react';
// import AppHeader from '../app-header/app-header';
// import SearchPanel from '../search-panel/search-panel';
// import PostStatusFilter from '../post-status-filter/post-status-filter';
// import PostList from '../post-list/post-list'
// import PostAddForm from '../post-add-form/post-add-form';
// import './app.css';
// import styled from 'styled-components';
// //Делаем компонент див к которому применяем стили через стайлд компонентс
// const AppBlock = styled.div`
//     margin: 0 auto;
//     max-width: 800px;

// `;
// // //а это типо наследование и каскадность
// // const StyledAppBlock = styled(AppBlock)`
// // background-color: gray;
// // `

// export default class App extends Component {//переписали функцию как класс
//     constructor (props) {
//         super(props); //суперконструктор родителя
//         this.state = {//перенесли массив дата в состояния
//             data: [
//                 {label: "Going to learn react",important: true,id: 1},
//                 {label: "That is so good",important: false, id: 2},
//                 {label: "I need a break...", important: false,id: 3}
//             ]
//         };
//         this.deleteItem = this.deleteItem.bind(this);//методы которые должны сработать после обработчика событий надо биндить
//         this.addItem = this.addItem.bind(this);//биндим обработчик на добавление
//         this.maxId = 4;//начиная от этого айди будут генерироваться новые посты.Но это колхоз потому что обычно айдишники генерируются на серверной стороне
//     }

//     deleteItem(id){//этот метод будет изменять состояние - удалять пост
//         this.setState(({data}) => {//надо найти индекс который будем удалять
//             //в методе findIndex elem - каждый элемент массива. Ну и там мы сравниваем айдишники каждого элемента с тем который приходит снизу при клике на треш
//             //когда они совпали мы индекс записываем в переменную
//             const index = data.findIndex(elem => elem.id === id);
//             // data.splice(index, 1);//вырезаем элемент по индексу через сплайс
//             // return {// возвращаем в стейт объект где data уже с вырезанным элементом
//             //     data: data
//             // }
//             //и все вроде бы заебись но нельзя менять стейт напрямую - это  в будущем приведет к ошибкам
//             //надо делать по другому:

//             const before =  data.slice(0, index);// получаем в эту переменную массив который был до того элемента который мы удаляем
//             const after  = data.slice(index + 1);// все что после него

//             const newArr = [...before, ...after];//новый мессив уже без удаленного элемента

//             return {// разница в том что мы не меняем стейт напрямую а заменяем массив внутри объекта
//                 data: newArr
//             }
//         });
//     }


//     addItem(body){//тут создается еще один элемент массива data. К нему прихерачивается сгенерированный айдишник ну и изменяется стейт
//        const newItem = {
//            label: body,
//            important: false,
//            id: this.maxId++
//        } 

//        this.setState(({data}) => {//просто запушить элемент нельзя - нарушится иммутабельность
//         const newArr =[...data, newItem];//новый массив с добавленным элементом
//         return{//возвращаем в стейт новый массив
//             data:newArr
//         }
//         //когда стейт меняется реакт сам перерендеривает страницу

//        })
//     }



//     render(){//рендер по ходу должен быть в каждом классе в реакте.Но это не точно
//         //для PostAddForm тоде делаем пропс в котором передаем метод добавления нового поста
//         return(
//             <AppBlock>
//                 <AppHeader/>
//                 <div className="search-panel d-flex">
//                     <SearchPanel/>
//                     <PostStatusFilter/>
//                 </div>
            
//                 <PostList 
//                 posts={this.state.data}
//                 onDelete={this.deleteItem}
//                 />
//                 <PostAddForm 
//                 onAdd={this.addItem}
//                 />
//             </AppBlock>
//         )
//     }

// }

//Оставляем эту функцию в комментах - она будет переписана как класс
// const App = () => {

//     //допустим следующая переменная пришла с сервера
//     const data = [//вот этот массив передадим как пропс при вызове пост листа когда уже собираются все компоненты
//         {label:"Going to learn react", important: true, id:"qweqwrwrwr"},//у объектов должны быть айдишники чтобы реакт знал что надо перерисовывать и оставлял то что перерисовывать  не обязательно при обновлении информации
//         {label:"That is so good", important: false, id:"kihkhil"},//это не цифры по порядку а набор символов
//         {label:"I need a break...", important: false, id:"sxzscdz"}
//     ];

//     return(//У компонента PostList тоже есть пропс onDelete уже на уровне app.js
//             <AppBlock>
//                 <AppHeader/>
//                 <div className="search-panel d-flex">
//                     <SearchPanel/>
//                     <PostStatusFilter/>
//                 </div>
            
//                 <PostList 
//                 posts={data}
//                 onDelete={id => console.log(id)}
//                 />
//                 <PostAddForm/>
//             </AppBlock>
//     )
// }

// export default App;






//Урок 95 Формы в реакте
//Надо пробросить данные о лайкнутых постах и их количестве в главный компонент app.js
//короче сделали так чтобы лойсы и импортанты обрабатывались на уровне app.js и изменяли свое внутреннее состояяние 
// тут нет смысла писать что я сделал еше раз
//проше посмотреть и перечитать каждый компонент






//Урок 96. Начинаем работать с сервером. Fetch API

//Ну фетч мы вроде изучали
//Рассказывает про JSONPlaceholder
//Вспоминаем xmlHTTPRequest и fetch

//Копирую сюда часть урока


//Урок 56 Fetch API

// ну эта херня круче чем xmlhttpRequest
// API - application programmic interface
// Интерфейс какого то ПО или приложения
// Набор данных и возможностей который предоставляет нам готовое решение
// Короче готовые методы и свойства

// Есть сайт JSON placeholder базаданных к которой можно обращаться для тестирования
//Все что связано с сервером надо запускать через сервер
// fetch("https://jsonplaceholder.typicode.com/posts/1")// если не указывать никаких параметров то то классический гет запрос

// //из первойстрочки возвращается промис
// //итак мыполучаем ответ и обрабатывем его
// //респонс- это ответ от сервера который передается в .then
//   .then(response => response.json())//у фетча есть метод .json. конвертирует из JSONа  Он возвращает промис. Наоснове которого можно построить дальнейшую цепочку 
// //   .then(response => response.text())//так ответ от сервера прийдет в текстовом формате а не в формате объекта
//   .then(json => console.log(json))// получаем обычный джаваскриптовый объект в консоль




// //то был гет, теперь пост
// let url = "https://jsonplaceholder.typicode.com/posts/";
// let data = {username:'example'};

// fetch(url,{//вторым аргументом передается объект с настройками запроса
//     method:'POST',//указали метод
//     body: JSON.stringify(data),//у поста должен быть бади.Тут мы его еще превращаем в джейсон
//     headers:{//в виде обеъекта прописываем те заголовки которые необходимы при запросе
//         "Content-Type":'application/json'//надо будет про это погуглить
//     }
// })

//   .then(response => response.json())//разджейсониваем
//   .then(json => console.log("success", json))//если все норм выводим разджейсоненый ответ
//   .catch(error => console.error('Error', error))//в случае ошибки берем ее и выводим в консоль через функцию



//дальше прикол про асинхронность
// const getResource = (url) => {//эта функция будет фетчить по юрлу и ретернить разджейсоненый результат
//     const res = fetch(url),//команда фетч асинхронная
//           some = res.json();//следующая команда сразу идет за другой
//     return some;//поэтому some возвращается пустым
// };

// //в результате если запустить это то получим ощибку
// getResource("https://jsonplaceholder.typicode.com/posts/1")
// .then(res => console.log("success", res))//если все норм выводим разджейсоненый ответ
// .catch(error => console.error('Error', error))//в случае ошибки берем ее и выводим в консоль через функцию


//ЧТобы избавиться от этой проблемы придумали async/await

// const getResource = async (url) => {//async говорит что сейчас будет асинхронная операция
//     const res = await fetch(url),// await указывает на ту самую асинхронную функцию которую надо дождаться
//           some =await res.json();// промис - тоже асинхронный код поэтому его тоже ждем
//     return some;//теперь в some запишется то что нужно
// };

// getResource("https://jsonplaceholder.typicode.com/posts/1")
// .then(res => console.log("success", res))//если все норм выводим разджейсоненый ответ
// .catch(error => console.error('Error', error))//в случае ошибки берем ее и выводим в консоль через функцию




//для фетча даже если он получает 404 ошибку это нормально.Так что ее надо обрабатывать в ручную

// const getResource = async (url) => {
//     const res = await fetch(url);
//     if (!res.ok){// если что то не ок. ок это такой метод у res(ответа от сервера) если ничего не наебнулось вернет тру
//         throw new Error(`Could not fetch ${url}, status: ${res.status}`)//выкидываем ошибку через специальный конструктор
//         //Error: Could not fetch https://jsonplaceholder.typicode.com/posts/10000, status: 404
//     }
//     const some = await res.json();
//     return some;
// };

// getResource("https://jsonplaceholder.typicode.com/posts/10000")//тут ставим 10к чтобы получить ошибку
// .then(res => console.log("success", res))
// .catch(error => console.error(error))


//теперь если что то пойдет не так то фетч не будет молчать а покажет ошибку





//Дальше происходит говяжья колбаса
//https://anapioficeandfire.com/

// class GotService {//класс у которого есть методы по получению инфы
//     constructor(){
//         this._apiBase = "https://www.anapioficeandfire.com/api";
//         //нижнее подчеркивание говорит другим разработчикам о том что это статичные данные и их трогать не нужно
//     }
//     async getResource (url) {
//             const res = await fetch(`${this._apiBase}${url}`);//формируем путь из базового адресса и кастомной части которую передает пользователь
//             if (!res.ok){ 
//                 throw new Error(`Could not fetch ${url}, status: ${res.status}`)//выкидываем ошибку через специальный конструктор
                
//             }
        
//             return await res.json();
//     };

//     getAllCharacters(){
//         return this.getResource("/characters?page=5&pageSize=10");//?page=5&pageSize=10 какой то специальный запрос чтобы пропустить первых персонажей из базы данных
//     }


//     getCharacter(id){
//         return this.getResource(`/characters/${id}`)
//     }

// }

// const got = new GotService();//используем класс

// got.getAllCharacters()//используем метод класса
// .then(res => console.log(res));//выводим в консоль результат
// // //Получаем вот такой массив из объектов
// //0: {url: "https://www.anapioficeandfire.com/api/characters/41", name: "Aegon IV", gender: "Male", culture: "", born: "135 AC, at King's Landing", …}
// // 1: {url: "https://www.anapioficeandfire.com/api/characters/42", name: "Aegon Targaryen", gender: "Male", culture: "Valyrian", born: "In 281 AC or 282 AC, at Dragonstone", …}
// // 2: {url: "https://www.anapioficeandfire.com/api/characters/43", name: "Aegon Targaryen", gender: "Male", culture: "Valyrian", born: "In 26 AC", …}
// // 3: {url: "https://www.anapioficeandfire.com/api/characters/44", name: "Aegon Targaryen", gender: "Male", culture: "Valyrian", born: "", …}
// // 4: {url: "https://www.anapioficeandfire.com/api/characters/45", name: "Aegon Targaryen", gender: "Male", culture: "Valyrian", born: "In or between 50 AC and 59 AC", …}
// // 5: {url: "https://www.anapioficeandfire.com/api/characters/46", name: "Aegon V", gender: "Male", culture: "", born: "200 AC, at King's Landing", …}
// // 6: {url: "https://www.anapioficeandfire.com/api/characters/47", name: "Aegor Rivers", gender: "Male", culture: "", born: "In 172 AC", …}
// // 7: {url: "https://www.anapioficeandfire.com/api/characters/48", name: "Aelinor Penrose", gender: "Female", culture: "Valyrian", born: "", …}
// // 8: {url: "https://www.anapioficeandfire.com/api/characters/49", name: "Aemma Arryn", gender: "Female", culture: "", born: "In 82 AC", …}
// // 9: {url: "https://www.anapioficeandfire.com/api/characters/50", name: "Aemon Blackfyre", gender: "Male", culture: "Valyrian", born: "In 184 AC", …}

// got.getCharacter(30)//получаем 1 перса по айди 
//     .then(res => console.log(res));



//  got.getAllCharacters()
//     .then(res => {//выведем имя каждого персонажа из массива
//         console.log(res.forEach(item => console.log(item.name)));
//     });



//дальше делаем новое реакт приложение по исходникам









//Урок 97. Продолжаем работать с сервером. Работа с API.Делаем randomChar.js

//итак, мы создали новое приложение подключили реакт страп с бутстрап 4 и стайлд компонентс.
//Переписывать все в стайлд компонентс я не стал. оставил подключенные css файлы

//добавили тансформаторы данных в получатели данных с сервера
//сделали прогрузку рандомного персонажа
//loading.io - сервис по созданию спиннеров загрузки
//скопировали спиннер как цсс  сделали его отдельным компонентом, импортировали и применили уже в верстке когда вызывается главный рендаер










//Урок 99. Жизненный цикл компонентов

//Компонент появляется на странице
//компонент обновляется new props setState
//компонент удаляется
//этап ошибки

//Лайв сайкл Хуки
//componentDidMount()- функция которая что то делает когда компонент появляется на странице
//componentDidUpdate()- делает что то при обновлении
//componentWillUnmount() - когда компонент удалается
//componentDidCatch() - когда произошла ошибка
//В 95% случаев используются эти хуки


//есть такая команда npm run build 
// вебпак соберет папку build которую можно заливать на сервер


//Если в реакте что то наебнулось то в продакшене он уже ничего не покажет
//поэтому надо отлавливать ошибки 



//Границы ошибок
//Если каждый компонент внутри себя содержит свой componentDidCatch()
//То выключится только этот компонент а не вся страница
//componentDidCatch() обрабатвает внутри методов жизненного цикла и методов рендер
//не отлавливает ошибки в лично прописанных методах
//не отлавливает ошибки в асинхронных операциях (Запросы к серверу итд)









//Урок 100 100. Паттерны React
//Паттерны - шаблоны для рационального построения приложения
//С ними код чище и понятнее
//class Example extends Component {
//     render(){
//         return this.props.children
//     }
// }
// ReactDOM.render(<Example>
//     <h1>Props children</h1>
// </Example>, document.getElementById('root'));

//В пропс чилрен можно передавать все что угодно
// Тут писать уже нереально




//Урок 101 React Router
// Измнения в url должны оставаться даже если у нас одностраничное приложение

//React Router - это библиотека
//Узнает какой компонент надо отобразить на экране 
//Обновляет Url 



//Урок 102. Дополнительно: Свойства по умолчанию.Default props
//Default props это то же самое как параметрыпо умолчанию в функциях
//если пропс не был передан по умолчанию 

// RandomChar.defaultProps= {
//     interval: 15000
// }



// //Эта херня проверяет тип данных пропсов чтобы в интервал попало именно число
// RandomChar.propTypes ={
//     //props - список всех проперти которые приходят в компонент
//     //propName - имя какого то определенного проперти
//     // component name - имя компонента(RandomChar)
//     interval:(props, propName, componentName) => {
//         const value = props[propName];// получаем текущее значение интервала из всех пропсов
//         if(typeof value === 'number' && !isNaN(value)) {// если наш велью точно число
//             return null
//         }
//         //если проверка не прошла то мы увидим вот такое сообщение
//         return new TypeError(`${componentName}: ${propName}`)
//     }
// }

//Библиотека которая сама проверяет типы приходящих пропсов
//npm install prop-types
// ItemList.defaultProps = {
//     onItemSelected: () =>{}
//     }

// ItemList.propTypes ={
//     onItemSelected:PropTypes.func,// проверяем функция ли приходящий пропс
//     // getData:PropTypes.arrayOf(PropTypes.object)//для примера проверяем на массив оъектов
// }

////На какие совпадения можно проверять смотри в документации у них на сайте



//Урок 103 Компоненты высшего порядка


// const f = (a) => {
//     console.log(a);
//     return (b) => {
//         console.log(a + b)
//     }
// }

// f(1)(2);// двойной вызов функции в функции


// const f = () => {
  
//     return ItemList;
// }


// //Таким образом мы отделим логику от рендерящей части
// //компонент будет работать точно так же
// const withData = (View, getData) => {
//     return class extends Component{//возвращаем безымянный класс
//         //все itemList в этом компоненте меняются на data
//         state = {
//             data: null,
//             error: false
//         }
//         componentDidMount() {
//             console.log(this.props);//у этого компонента все так же есть пропсы которые передааются с других компонентов            
//             getData()
//                 .then((data) => {
//                     this.setState({
//                         data,
//                         error: false
//                     });
//                 })
//                 .catch(() => {this.onError()});
//         }
       
//         render(){//айтем лист примет все пропсы функции f
//             const {data, error} = this.state;

//             if(error){
//                 return <ErrorMessage/>
//             }
    
//             if(!data) {
//                 return <Spinner/>
//             }
//             //Теперь передаем не ItemList а компонент который будет приходить из аргумента
//             return <View {...this.props} data ={data}/>
//         }
//     }
// }


// const{getAllCharacters} = new gotService();
// export default withData(ItemList, getAllCharacters);//передаем компонент айтем лист который будет подставляться в функцию аргументом и в гет дату тоже передаем функцию

// //теперь можно эту штуку вынести в отдельный компонент и использовать во всем приложении
// // нухуя не понял но очень интересно





// ///Урок 104.Хуки(Не те которые жизненного цикла)
// // Хуки - технология перехвата стандартного поведения какого то действия и его изменения


// // Когда что то формируется динамически в этот процесс можно вмешаться и добавить свои изменения
// //Хуки - функции которые позволяют не создавать классовых компонентов вообще

// // Классовые компоненты создаются тогда когда необходимо внутреннее состояние компонентов

// //В хуках есть юз стейт - заменяет стейт

// //Хуки эффектов(useEffect) - комбинация лайвсайкл хуков.Срабатывает каждый раз когда компонент появляется обновляется и удаляется
// //Это были 2 базовых хука.Есть еще хук контекста но об этом позже
// //Можно создавать собственные хуки

// //Хуки можно юзать только в компонентах - функциях а не в классах

// //Хуки вызываются только на верхних уровнях


// import React, {useState, useEffect} from 'react'


// function App(){



//     // Юз стейт нам возвращает массив поэтому его мы деструктурируем
// const [count, setCount] = useState(0);
// const [data, refreshData] = useState([{name:'Ivan', sex: 'male'}])
// //count - состояние счетчика(типо state)
// //setCount - кастомная функция. в скобочки передается что то вроде сет стейта
// //useState(0) -хук который единственным аргументом принимает в себя начальное состояние
// //Этот хук возвращает массив в котором 2 записи 
// // первое - начальное состояние а второе функция которую можно назвать как угодно
// //типо первая переменная это состояние. Второе это сет стейт
// //setCount не объединяет старое и новое состояние в отличие от сет стейта
// //в refreshData аргумент data это текущее состояние вроде


// // useEffect(() => {// срабатывает каждый раз когда компонент появляется обновляется и удаляется
  
// //     // updateChar();
// //     // let timerId = setInterval(updateChar, 15000);
// //     // return () => {//когда мы возвращаем функцию из юз эффект это типо как componentWillUnmount
// //     //     clearInterval(timerId);
// //     // }
// // })

// //ЛУчше так не делать. Но вроде сработало
// if (data) {
//     useEffect(() => {
//         console.log(data);
//     });
// }
// //делай так вмето варианта выше потому что хуки должны быть на верхнем уровне вложенности
// useEffect(() => {
//     if (data){
//         console.log(data);
//     }
    
// });// хук юз эффект в качестве второго аргумента принимает ту часть которую надо проверять на предыдущий стейт и если он не изменился то ничего не делать как в componentDidUpdate чтобы избежать бесконечного цикла.Тамдолжно быть примитивное значение
    //если значение не булевое строка или число то эта хрень не сработает(второй аргумент юз эффекта)
    //если передать пустой массив то он будет говорить хуку что эффект надо выполнить только при появлении объекта или его исчезновении


//     return(// во втором баттоне не забываем про иммутабельность и не изменяем стейт напрямую
//         //вместо этого делаем новый массив из старого с добавлением нового объекта
//         //пуш бы не проканал
//         //data.map сделает верстку для каждого элемента массива data
//         <>
//         <div>
//             <p>Вы кликнули {count} раз</p>
//             <button onClick={() => setCount(count + 1)}>Кликни меня</button>
//         </div>
//         <div>Name:{data[0].name} , sex: {data[0].sex}</div>
//         {data.map(item => {
//             return (
//                 <div>
//                     Name:{item.name} , sex: {item.sex}
//                 </div>
//             )
//         })}
//         <button onClick={() => refreshData(data => ([...data,{name:'Alex', sex:'Male'}]))}>
//             Добваить данные
//         </button>
//         </>
//     );

// }

// export default App;








//Урок 105. Основные принципы Redux

// npm install redux react-redux
// удалили все нахуй оставили только html и index.js
//подключили бутстрап в хтмле
//<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>


// import {createStore} from 'redux';
// console.log('Hello redux');
// const initialState = 0;//начальное значение счетчика

// const reducer = (state, action) => {
//   //state - само состояние
//   //action - что делать с этим состоянием
//   if(action.type === 'INC'){//если тип экшона INC то делаем вот это
//     return state + 1
//   }
//   return 0;//Если не инк то 0 выдаст
// }

//{type:'INC'} то действие которое надо совершить
// let state = reducer(initialState,{type:'INC'});
// console.log(state);//>>>1
// state = reducer(state,{type:'INC'});
// console.log(state);///>>> 2
// state = reducer(state,{type:'INC'});
// console.log(state);///>>> 3
// state = reducer(state,{type:'NEINC'});
// console.log(state);//>>> 0




// const reducer = (state = 0, action) => {// если указан параметр по умолчанию то initialState не нужен

//   switch(action.type){//множественная проверка экшонов
//     case "INC":
//       return state + 1
//     default://если ничего не подошло то делаем это
//       return state;
//   }
  
// }


// let state = reducer(undefined,{});// тут заретернит 0 по дефолту
// console.log(state);//>>>0
// state = reducer(state,{type:'INC'});
// console.log(state);///>>> 1
// state = reducer(state,{type:'INC'});
// console.log(state);///>>> 2
// state = reducer(state,{type:'NEINC'});
// console.log(state);//>>> 2





// и на этом этапе мы еще не использовали редакс
//редьюсер должен зависеть только от своих аргументов
// const reducer = (state = 0, action) => {

//   switch(action.type){
//     case "INC":
//       return state + 1;
//     case 'DEC':
//       return state - 1;
//     case 'RND'://рандомим число
//      // return state + Math.floor(Math.random() * 10) вот так писать нельзя потому что редьсер будет зависеть от рандомной величины
//     return state + action.value;// теперь редьюсер чист и достает рандом из экшона который передается из обработчика кнопки
//      default:
//       return state;
//   }
  
// }

// const inc = () =>{//экшон криэйтер
//   return {
//     type:'INC'
//   }
// }
// const dec = () =>({type:'DEC'});//запись эквивалентна той что выше
// const rnd = (value) =>{//не забываем принять велью(рандомное число)
//   return {
//     type:'RND',
//     value
//   }
// }

// const store = createStore(reducer);// в качестве аргумента эта штука принимает редьюсер. Сделает объект со своими полезными функциями
// //вешаем обработчики на наши кнопки
// document.getElementById('inc').addEventListener('click', () => {
//   store.dispatch(inc())//засунули экшон криэйтер в диспатч
// });

// document.getElementById('dec').addEventListener('click', () => {
//   store.dispatch(dec())
// });

// document.getElementById('rnd').addEventListener('click', () => {
//   const value = Math.floor(Math.random() * 10);
//   store.dispatch(rnd(value));//rnd (value) заретернит нам нужный экшон
// });
// const update = () =>{// захуячиваем стейт в верстку
//   document.getElementById('counter').textContent = store.getState()
// }
// store.subscribe(update);//каждый раз когда стор изменяется будем исполнять функцию апдейт

// // console.log(store.getState());// >>> 0 - текущий стейт
// // console.log(store);//{dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, Symbol(observable): ƒ}

// // store.dispatch({type:'INC'})//вот так вызывается экшон из нашего объекта store
// // console.log(store.getState());//>> 1
// // //dispatch запускает редьюсер внутри стора


// // store.subscribe(() => {//внутрь передается колбек функция.
// //   //типо подписка.внутренняя функция будет вызываться каждый раз когда изменяется стор
// //   console.log(store.getState());
// // })
// // //все разы будет показывать стейт в консоли
// // store.dispatch({type:'INC'})
// // store.dispatch({type:'INC'})
// // store.dispatch({type:'INC'})







//Урок 106 Figma
//Там короче можно делать дизайны и вытаскивать оттуда css стили





//107. Соединяем React и Redux
//сделали actions.js в src
//reducer тоже отдельно


// import {createStore} from 'redux';
// // console.log('Hello redux');
// // const initialState = 0;//начальное значение счетчика

// // const reducer = (state, action) => {
// //   //state - само состояние
// //   //action - что делать с этим состоянием
// //   if(action.type === 'INC'){//если тип экшона INC то делаем вот это
// //     return state + 1
// //   }
// //   return 0;//Если не инк то 0 выдаст
// // }

// //{type:'INC'} то действие которое надо совершить
// // let state = reducer(initialState,{type:'INC'});
// // console.log(state);//>>>1
// // state = reducer(state,{type:'INC'});
// // console.log(state);///>>> 2
// // state = reducer(state,{type:'INC'});
// // console.log(state);///>>> 3
// // state = reducer(state,{type:'NEINC'});
// // console.log(state);//>>> 0




// // const reducer = (state = 0, action) => {// если указан параметр по умолчанию то initialState не нужен

// //   switch(action.type){//множественная проверка экшонов
// //     case "INC":
// //       return state + 1
// //     default://если ничего не подошло то делаем это
// //       return state;
// //   }
  
// // }


// // let state = reducer(undefined,{});// тут заретернит 0 по дефолту
// // console.log(state);//>>>0
// // state = reducer(state,{type:'INC'});
// // console.log(state);///>>> 1
// // state = reducer(state,{type:'INC'});
// // console.log(state);///>>> 2
// // state = reducer(state,{type:'NEINC'});
// // console.log(state);//>>> 2





// // и на этом этапе мы еще не использовали редакс
// //редьюсер должен зависеть только от своих аргументов
// const reducer = (state = 0, action) => {

//   switch(action.type){
//     case "INC":
//       return state + 1;
//     case 'DEC':
//       return state - 1;
//     case 'RND'://рандомим число
//      // return state + Math.floor(Math.random() * 10) вот так писать нельзя потому что редьсер будет зависеть от рандомной величины
//     return state + action.value;// теперь редьюсер чист и достает рандом из экшона который передается из обработчика кнопки
//      default:
//       return state;
//   }
  
// }

// const inc = () =>{//экшон криэйтер
//   return {
//     type:'INC'
//   }
// }
// const dec = () =>({type:'DEC'});//запись эквивалентна той что выше
// const rnd = (value) =>{//не забываем принять велью(рандомное число)
//   return {
//     type:'RND',
//     value
//   }
// }

// const store = createStore(reducer);// в качестве аргумента эта штука принимает редьюсер. Сделает объект со своими полезными функциями
// //вешаем обработчики на наши кнопки
// document.getElementById('inc').addEventListener('click', () => {
//   store.dispatch(inc())//засунули экшон криэйтер в диспатч
// });

// document.getElementById('dec').addEventListener('click', () => {
//   store.dispatch(dec())
// });

// document.getElementById('rnd').addEventListener('click', () => {
//   const value = Math.floor(Math.random() * 10);
//   store.dispatch(rnd(value));//rnd (value) заретернит нам нужный экшон
// });
// const update = () =>{// захуячиваем стейт в верстку
//   document.getElementById('counter').textContent = store.getState()
// }
// store.subscribe(update);//каждый раз когда стор изменяется будем исполнять функцию апдейт

// // console.log(store.getState());// >>> 0 - текущий стейт
// // console.log(store);//{dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, Symbol(observable): ƒ}

// // store.dispatch({type:'INC'})//вот так вызывается экшон из нашего объекта store
// // console.log(store.getState());//>> 1
// // //dispatch запускает редьюсер внутри стора


// // store.subscribe(() => {//внутрь передается колбек функция.
// //   //типо подписка.внутренняя функция будет вызываться каждый раз когда изменяется стор
// //   console.log(store.getState());
// // })
// // //все разы будет показывать стейт в консоли
// // store.dispatch({type:'INC'})
// // store.dispatch({type:'INC'})
// // store.dispatch({type:'INC'})





//Урок 106 дз
// import {createStore} from 'redux';

// // редюсер
// const counter = (state = 0, action) => {
//     switch (action.type){
//         case 'INC':
//             return state + 1;
//         case 'DEC':
//             return state - 1;
//         case 'RES':
//             return 0;
//         default:
//             return state;
//     }
// }

// //  создаем хранилище
// let store = createStore(counter);

// // Вспомогательные функции
// const inc = () => ( {type: 'INC'} );
// const dec = () => ( {type: 'DEC'} );
// const res = () => ( {type: 'RES'} );

// //  Проверяем нажатия кнопок
// document.getElementById('inc').addEventListener('click', () => {
//     store.dispatch( inc() );
// });

// document.getElementById('dec').addEventListener('click', () => {
//     store.dispatch( dec() );
// });

// document.getElementById('res').addEventListener('click', () => {
//     store.dispatch( res() );
// });

// //  функция обновляет counter
// const update = () =>{
//     document.getElementById('counter').textContent = store.getState();
// }

// // при каждом изменении
// store.subscribe(update);





//Урок 107. Соединяем React и Redux
// import {createStore, bindActionCreators} from 'redux';
// import counter from './reducer';// вытаскивем редьюсер
// // import {inc,dec,res} from './actions'; // это было частично
// import * as actions from './actions';//вытаскиваем все экшон криэйтеры и записываем их в объект actions



// //вырезали редьюсер



// let store = createStore(counter);
// const {dispatch} = store;// деструктуриремся)

// //функция для создания функций подобных incDispatch. ПРОПИСАЛИ ДЛЯ НАГЛЯДНОСТИ. ЕЕ МОЖНО ВЫТАЩИТЬ ИЗ РЕДАКСА
// // const bindActionCreator = (creator, dispatch) => (...args) => {//...args это аргументы криэйтора(рест параметр). Если они есть то они передаются сюда
// //   dispatch(creator(...args));//короче берет пришедший диспатч и запихивает в него криэйтор с его аргументами
// // }


// //До этого было так
// // document.getElementById('inc').addEventListener('click', () => {
// //     store.dispatch( inc() );
// // });


// //Теперь:
// // const incDispatch = () => dispatch(inc());//захардкориваем инк диспатч
// // const decDispatch = () => dispatch(dec());
// // const resDispatch = () => dispatch(res());
// // const incDispatch = bindActionCreators(inc, dispatch);// теперь через биндер то же самое.Биндер можно вытащить из редакса
// // const decDispatch = bindActionCreators(dec, dispatch);
// // const resDispatch = bindActionCreators(res, dispatch);
// //теперь делаем так чтобы код не повторялся
// // const {incDispatch, decDispatch, resDispatch} = bindActionCreators(// эта штука возвращает нам объект который потом(сразу) можно деструктурировать и вытащить готовые функции
// //   {
// //     incDispatch: inc,//название функции: сама функция(импортированная из экшонсов)
// //     decDispatch: dec,
// //     resDispatch: res
// //   }
// //   , dispatch);
// //а теперь делаем так чтобы все экшонсы запихивались в этот первый объект
// //actions который мы импортировали выглядит вот так
// // actions = {
// //   inc: inc,
// //   dec: dec,
// //   res: res
// // }

// const {inc, dec, res} = bindActionCreators(actions, dispatch);// actions мы импортировали толпой.
//  //{inc, dec, res} - теперь обернутые в диспатч функции


// //Вырезали экшон криэйтеры и переместили их в экшон js

// //Делаем так чтобы обработчики не знали ничего о редаксе - они просто запускают попадающую в них функцию
// // document.getElementById('inc').addEventListener('click', incDispatch);// теперь не расписываем а просто вставляем готовые диспатчи которые будут запускать редьюсер

// // document.getElementById('dec').addEventListener('click', decDispatch);

// // document.getElementById('res').addEventListener('click', resDispatch);//тут еще можно передавать аргументы как было с рандомом
// document.getElementById('inc').addEventListener('click', inc);

// document.getElementById('dec').addEventListener('click', dec);

// document.getElementById('res').addEventListener('click', res);

// const update = () =>{
//     document.getElementById('counter').textContent = store.getState();
// }


// store.subscribe(update);





///Теперь  копирую этот код но без объянений
//дальше будем реакт добавлять
//сделали counter.js
//Ну ессно подрубаем реакт и реакт дом
// import React from 'react';
// import ReactDOM from 'react-dom';
// import {createStore} from 'redux';
// import {Provider} from 'react-redux';// ЭТА ШТУКА КОТОРАЯ НУЖНА ЧТОБЫ ПЕРЕДАВАТЬ ПАРАМЕТРЫ ПО ИЕРАРХИИ НИЖЕ 
// import reducer from './reducer';
// // import * as actions from './actions';
// // import Counter from './components/counter';
// import App  from './components/app';


// let store = createStore(reducer);
// // const {dispatch} = store;


// // const {inc, dec, res} = bindActionCreators(actions, dispatch);

// //Получатели и обработчики больше не нужны
// // document.getElementById('inc').addEventListener('click', inc);
// // document.getElementById('dec').addEventListener('click', dec);
// // document.getElementById('res').addEventListener('click', res);

// // const update = () =>{//Рендер будет срабатывать каждый раз когда срабатывает update а он в свою очеред засабскрайблен на изменения стора
// // выбираем что зарендерить и куда
// // передаем с пропсами обработчики(диспатчеры)
// //Тут мы рендерим App но пропсы должны попасть в Counter
// //store, update и subscribe всегда остаются в index.js
// ReactDOM.render(//обернули App в провайдер чтобы передать store по иерархии куда надо(в Counter)
// //Provider делает так чтобы любой компонент который находится внутри обернутого App имел доступ к store
// //// connect работает в паре с Provider который дает возможность коннекту принимать данные из стора напрямую из любого места иерархии

// <Provider store={store}>
//     <App/>
// </Provider>, document.getElementById('root'));// выбираем что зарендерить и куда
// // }//это закрывающий тег функции апдейт которая больше не нужна


// //Апдейт и сабскрайб не нужны теперь потому что они уже включены в Провайдер
// // update();// первый раз прорисовываем верстку
// // store.subscribe(update);


// //дальше делается папка компонентс и app.js и заменяются импорты








//Урок 108. React Context

//Контекст выполнения


//Есть спооб передавать пропсы не по цепочке а задавать из на самом верхнем уровне и использовать внизу иерархии

//Есть компонет который содержит все другие компоненты
<App>
    {/* Обернули все в провайдер. В нем устанавливаем значение которое будем считывать в элементах ниже  */}
    <Provider value={lang}>
        <MainPage>
            <Blog>

            </Blog>
        </MainPage>


        <ContactsPage>
            {/* Консьюмер нужен для того чтобы считать значение из провайдера и не передавать его при этом по цепочке */}
            <Consumer>
                {/* Внутри фигурных скобок задается функция которая принимает прпс сверху и возвращает ( отрисовывает нужный компонент) */}
                {

                    (lang)=>{
                        return(//тут уже можно использовать значение лэнг из аргументов
                            
                            <Adress lang={lang}>

                            </Adress>
                        )
                    }

                }
            </Consumer>
        </ContactsPage>
    </Provider>


</App>


//Такое часто применяется при работе с выбором языков или тем






//Context.js - отдельный компонент

// import React from 'react';
// //В этой переменной есть Provider и Consumer
// const MyContext = React.createContext();// вот так создается контекст

// export default MyContext;

// //На верхнем уровне вот так(В App.js)
// //В компонентах которые используют контекст он импортируется
// import MyContext from 'url';

// //value всегда должен оставаться value
// <MyContext.Provider value={"Ivan"}>
//     <KomponentNaUrovenNize/>
// </MyContext.Provider>



// //Теперь на уровне где применяем
// //Это способ для функционального компонента
// import React from 'react';
// import MyContext from 'url';
// const Name = () =>{
//     return (
//         <MyContext.Consumer>
//             {
//                 (value) => {
//                     return(
//                         <div className="name">
//                             My name is {value}
//                         </div>
//                     )
//                 }
//             }
//         </MyContext.Consumer>
//     )   
// }


// //ВТОРОЙ СПОСОБ С КЛАССОВЫМ КОМПОНЕНТОМ

// //Меняется только нижний(принимающий) компонент
// //Тут консьюмер не нужен
// import React, {Component} from 'react';
// import MyContext from 'url';

// class Name extends Component {

//     render() {
//         return (

//             < div className = "name" >
//                 {/* Вместо value тут this.context */}
//                  My name is {this.context} 
//             </div>

//         }
//     }

// }
          
// Name.contextType = MyContext;//Заклиинание конторое помещает MyContext в этот компонент чтоб его там применять как консьюмер только через this.context










//Урок 109. Начинаем создавать новое приложение React + Redux





// Сделали react-redux-food приложение и подрубили sass

