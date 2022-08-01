'use strict';


const mainFunction = callback =>{
    const num1 = +prompt('Введите первое число');
    const num2 = +prompt('Введите второе число');
    if (!isNaN(num1) && !isNaN(num2) && num1!== 0 &&  num2!== 0) return callback (num1,num2);
    throw new Error('Вы ввели не число');
}

const exponentiation = (num1, num2) => {
    const result = num1**num2;
    return alert(`${num1} в степени ${num2} = ${result}`);
}
const multiplay = (num1, num2) => {
    const result = num1*num2;
    return alert(`${num1} * ${num2} = ${result}`);
}

const division = (num1, num2) => {
    const result = num1/num2;
    return alert(`${num1} / ${num2} = ${result}`);
}

const modulo = (num1, num2) => {
    const result = num1%num2;
    return alert(`Остаток от деления ${num1} на ${num2} = ${result}`);
}

mainFunction(exponentiation);
mainFunction(multiplay);
mainFunction(division);
mainFunction(modulo);
