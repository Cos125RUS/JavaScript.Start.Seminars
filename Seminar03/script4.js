// Сделайте функцию, которая принимает параметром число от 1 до 7,
// а возвращает день недели на русском языке.

let week = num => {
    if (num === 1) {
        return "понедельник";
    } else if (num === 2) {
        return "вторник";
    } else if (num === 3) {
        return "среда";
    } else if (num === 4) {
        return "четверг";
    } else if (num === 5) {
        return "пятница";
    } else if (num === 6) {
        return "суббота";
    } else if (num === 7) {
        return "воскресенье";
    } else return "Нет такого дня недели";
}

let week2 = num => {
    let result = null;
    switch (num) {
        case 1:
            result = "понедельник";
            break;
        case 2:
            result = "вторник";
            break;
        case 3:
            result = "среда";
            break;
        case 4:
            result = "четверг";
            break;
        case 5:
            result = "пятница";
            break;
        case 6:
            result = "суббота";
            break;
        case 7:
            result = "воскресенье";
            break;
        default:
            result = "Нет такого дня недели";
    }
    return result;
}

console.log(week2('2'));
console.log(week2(1));
console.log(week2(5));
console.log(week2(9));
console.log('');

/*Написать функцию, которой передаем имя и она возвращает
приветствие в зависимости от времени суток (Доброе
утро\день\вечер\ночи Иван)*/

let hello = name => {
    let result = null;
    let time = new Date().getHours();
    if (time < 10 && time > 6) {
        result = `Доброе утро ${name}`;
    } else if (time < 18 && time > 9) {
        result = `Добрый день ${name}`;
    } else if (time < 23 && time > 17) {
        result = `Добрый вечер ${name}`;
    } else result = `Доброй ночи ${name}. Иди спать!`;
    return result;
}

console.log(hello("Valerii"));;