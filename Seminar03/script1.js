// Написать функцию, которой передаем, имя, фамилия и
// возраст, и получаем строку "Привет Иван Петров с
// возрастом 17" (только здесь данные, которые были
// переданы в функцию)

const hello = function (firstName, lastName, age) {
    return `Привет ${firstName} ${lastName} с возрастом ${age}`
}

console.log(hello("Ivan", "Ivanov", 25));
console.log(hello("Petr", "Petrov", 17));
console.log(hello("Semen", "Semenov", 45));
console.log('');

// Создайте функцию которая возводит переданное число в
// квадрат

// const pow = x => x*x;
const pow = function(x) { return x * x };

console.log(pow(2));
console.log(pow(3));
console.log(pow(4));
console.log('');

// Сделайте функцию, которая параметром принимает
// число и проверяет, положительное это число или
// отрицательное. В первом случае пусть функция выводит
// в консоль текст '+++', а во втором '---'.

// const posOrNeg = num => console.log(num >= 0 ? '+++' : '---');
const posOrNeg = num => {
    let res = num >= 0 ? '+++' : '---';
    console.log(res);
}

posOrNeg(123);
posOrNeg(-852);