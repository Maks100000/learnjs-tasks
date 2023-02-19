// проверка значения из диапазона
let age = prompt('введите значение age');
if (age >= 14 && age <= 90){
    alert(true);}

// проверка значения вне диапазона use '!'
age = prompt('введите значение age');
if (!(age >= 14) || !(age <= 90)) {alert(false);};

// проверка значения вне диапазона !use '!'
age = prompt('введите значение age');
if (age < 14 || age > 90) {alert(false);};

// проверка логина
let login = prompt('Кто там?');
let loginAdmin = 'Админ';
let passwordAdmin = 'Я Главный';
if (login == loginAdmin){
    passwordUser = prompt('Пароль?');
    if (passwordUser == passwordAdmin) {
        alert('Здравствуйте!');
    } else if (passwordUser == null || passwordUser == '') {
        alert('Отменено');
    } else {alert('Неверный пароль!')}
} else if (login == null || login == '') {
    alert('Отменено');
} else {alert('Я вас не знаю');}
