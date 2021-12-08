'use strict';
let attempts = 0; //число попыток
let number = Math.floor(Math.random() * 100);
console.log(number);
const isNumber = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num); //проверка на число
};

function resetGame() {
   attempts = 10; //число попыток
   number = Math.floor(Math.random() * 100);
}

function start(Number) {

    function twoB() {

        if (attempts > 0) {

            let userNumber = prompt("Угадай число от 1 до 100");
            if (userNumber === null) {
                alert('Игра окончена');
                return;
            }
            while(!isNumber(userNumber)) {
                alert('Введи число!');
                return twoB(); //рекурсия - twoB вызывает twoB (т.е. саму себя)
            }

            if (+userNumber > Number) {
                attempts--;
                alert('Загаданное число меньше. Осталось попыток: ' + attempts);
                return twoB();
            } else if (userNumber < Number && userNumber !== 0) {
                attempts--;
                alert('Загаданное число больше. Осталось попыток: ' + attempts);
                return twoB();
            } else if (userNumber === " ") {
                alert('Введи число!');
                return twoB();
            } /*else if (userNumber === null) {
                alert('Игра окончена');
                return;
            } */else if (userNumber === 0) {
                twoB();
                return;
            }
            let restart = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
                if (restart) {
                    resetGame();
                    start(number);
                    return;
                } else {
                    alert('Игра окончена');
                }

        } else if (attempts === 0) {

            let restart = confirm('Попытки закончились, хотите сыграть еще?');
                if (restart) {
                    resetGame();
                    start(number);
                    return;
                } else {
                    alert('Игра окончена');
                }
        }
    }
    twoB();
}
resetGame();
start(number);
//КОНСОЛЬ
console.log(number);
