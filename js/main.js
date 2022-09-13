/*
    1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.
    showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'
    Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'

    2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.
    Пример:
        standardizeStrings(favoriteCities)  выведет в консоль
            lisbon
            rome
            milan
            dublin
    Это частая задача в реальности, так как от пользователя нам могут прийти ответы в самых разных форматах. 
    В том числе и с разными буквами :) Поэтому нам нужно привести строки в один формат для правильной работы.

    3) Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.
        Пример:

        const someString = 'This is some strange string';
        reverse(someString) => 'gnirts egnarts emos si sihT'
    
        4) Представьте такую реальную ситуацию. 
        У вас есть банкомат, который выдает деньги из двух разных банков в разных валютах. 
        Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:

        const baseCurrencies = ['USD', 'EUR'];
        const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
        Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента: 
        первый - это массив со всеми доступными валютами из двух банков сразу (сейчас представим, что они не могут повторяться), 
        второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате. 
        Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'. Функция возвращает строку в нужном виде.

        Пример:

        availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
        Вернет строку:

        Доступные валюты:
        UAH
        RUB
        Заметьте:

        - CNY (юань) исчез из списка валют, значит такая валюта закончилась

        - После валюты: стоит перенос строки \n, и после каждой валюты тоже. Это важно для тестов

        - Данные для первого аргумента должны приходить сразу из двух банков, причем сначала baseCurrencies, потом additionalCurrencies по порядку
*/

'use strict';

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = 'Семья пуста';
    if(arr.length > 0) {
        str = `Семья состоит из: ${arr.join(' ')}`;
    }
    return str;
}

// showFamily(family);


const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    return arr.map(item => console.log(item.toLowerCase()))
}

// standardizeStrings(favoriteCities);

const someString = 'This is some strange string';

function reverse(str) {
    let msg = 'Ошибка';
    if(typeof str !== 'string') return msg;
    return str.split('').reverse().join('');
}

// reverse(someString);

const baseCurrencies = ['UAH', 'RUB', 'CNY'];
const additionalCurrencies = ['CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    arr.forEach(function(curr, i) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });

    return str;
}

console.log(availableCurr(baseCurrencies, additionalCurrencies));