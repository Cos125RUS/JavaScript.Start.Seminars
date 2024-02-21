// task01

// const week = {
//     1: 'Понедельник',
//     2: 'Вторник',
//     3: 'Среда',
//     4: 'Четверг',
//     5: 'Пятница',
//     6: 'Суббота',
//     7: 'Воскресенье'
// }
// console.log(week[2]);

// const user = {
//     name: 'John',
//     surname: 'Smith',
//     age: 30,
//     toString: function() {
//         console.log(`${this.surname}-${this.name}-${this.age}`);
//     }
// };
// user.toString();

// user.patronymic = prompt('Enter patronymic');
// console.log(user);


// task02

// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// const obj = {}
// for (let i = 0; i < arr1.length; i++) {
//     obj[arr1[i]] = arr2[i]
// }
// console.log(obj);

// const obj = {x: 1, y: 2, z: 3};
// for(const key in obj) {
//     obj[key] = obj[key] * 2;
// }
// console.log(obj);


// task03

// const obj = {
//     key1: {
//         key1: 1,
//         key2: 2,
//         key3: 3,
//     },
//     key2: {
//         key1: 4,
//         key2: 5,
//         key3: 6,
//     },
//     key3: {
//         key1: 7,
//         key2: 8,
//         key3: 9,
//     },
// }

// let sum = 0;

// for (const key in obj) {
//     if (typeof obj[key] === 'object') {
//         for (const innerKey in obj[key]) {
//             sum += obj[key][innerKey];
//         }
//     }
// }
// console.log(sum);


// task04

const riddles = {
    question: 'How are you?',
    answer: 'Kolya',
    tries: 0,
    askQuestion: function () {
        let answer = prompt(this.question);
        if (answer === this.answer) {
            console.log('You are win!');
        } else {
            if (this.tries !== 2) {
                this.tries++;
                this.askQuestion();
            } else {
                console.log('You are loose!');
            }

        }
    }
};

riddles.askQuestion();