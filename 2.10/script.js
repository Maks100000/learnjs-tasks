// название JavaScript
let officialNameJS = prompt('Какое «официальное» название JavaScript?');
if (officialNameJS == 'ECMAScript') {
   alert('Верно!');
} else {
    alert("Не знаете? ECMAScript!");
}

// знак числа
let numberInput = prompt('Введите число!');
if (numberInput > 0) {
    alert('1');
} else if (numberInput < 0) {
    alert('-1');
} else if (numberInput == 0) {
    alert('0');
} else {
    alert('Это не число?!');
}

// Перепишите конструкцию if с использованием условного оператора '?'
let result;
let b = prompt('Введите число!');
result = (typeof +b != 'number') ? 'Это не число!': (0 + b < 4) ? 'Мало': 'Много';
alert(result);

// Перепишите if..else с использованием нескольких операторов '?'
let message;
let login
message = (login == 'Сотрудник') ? 'Привет': (login == 'Директор') ? 'Здравствуйте': (login == '') ? 'Нет логина': '';
