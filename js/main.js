/* 
    Задача:

    У вас есть небольшой кусочек данных о торговом центре, которые записаны в объекте shoppingMallData. 
    Они содержат массив с данными о магазинах, где указана 
    длина и ширина помещения; высоту помещения; стоимость отопления за 1 кубический метр и бюджет на оплату отопления за месяц.

    Основная задача - это написать функцию isBudgetEnough, которая буде возвращать строку. 
    Если бюджета хватает для отопления всего объема торгового центра - выводится 'Бюджета достаточно', если нет - 'Бюджета недостаточно'. И все 🙂

    Но эта задача содержит несколько подзадач внутри:

    - вычисление общей площади всех магазинов, которая вычисляется как длина магазина, умноженная на его ширину;

    - вычисление общего объема торгового центра, так как цена отопления указана в кубических метрах;

    - определение того, хватает ли бюджета на оплату такого объема;

    - все числа идут без единиц измерения для упрощения, просто цифры и все;

    - функция должна продолжать работать, даже если изменяется количество магазинов, высота, бюджет или подставляется вообще другой объект.


    2) Задача:

    У вас есть список учеников, которые хотят поиграть в игру:

    const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
    Но команд может быть только 3 по 3 человека. 
    Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.

    Внутри она сначала сортирует имена по алфавиту. 
    Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку. 
    Эти группы должны быть массивами. 
    Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.

    Пример:

    sortStudentsByGroups(students)  =>

    [
    [ 'Andrew', 'Ann', 'Bernard' ],
    [ 'Cris', 'Josh', 'Mark' ],
    [ 'Peter', 'Sam', 'Sandra' ],
    'Оставшиеся студенты: Takesi'
    ]
    Если убрать одно студента из списка, то результат будет:

    [
    [ 'Andrew', 'Ann', 'Bernard' ],
    [ 'Cris', 'Josh', 'Mark' ],
    [ 'Peter', 'Sam', 'Sandra' ],
    'Оставшиеся студенты: -'
    ]
    А если добавить одного, то:

    [
    [ 'Andrew', 'Ann', 'Bernard' ],
    [ 'Cris', 'Josh', 'Mark' ],
    [ 'Peter', 'Sam', 'Sandra' ],
    'Оставшиеся студенты: Takesi, Somebody'
    ]
    То есть, меняется содержимое строки. Все оставшиеся ученики попадают туда.

    Задача интересная, немного заковыристая, но все необходимое для неё мы уже проходили. 
    Просто распишите логику действий строка за строкой.
*/

'use strict';

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 10000
}

function isBudgetEnough(data) {
    let sum = 0;
    let msg;
    let {shops} = data;
    let {moneyPer1m3} = data;
    let {budget} = data;

    for ( let key in shops) {
        let w = shops[key].width;
        let l = shops[key].length;

        sum += w * l * data.height;
    }

    if (sum * moneyPer1m3 < budget) {
        msg = 'Бюджета достаточно';
    } else {
        msg = 'Бюджета недостаточно';
    }

    return msg
}

// console.log(isBudgetEnough(shoppingMallData));

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Somebody'];

function sortStudentsByGroups(arr) {
    arr = arr.sort();
    let newArr = [];
    let a = [], b = [], c = [];
    let msg = '';
    let some = [];
    for( let i = 0; i < arr.length; i++ ) {
        if ( i < 3) {
            a.push(arr[i]);
        } else if ( i < 6 ) {
            b.push(arr[i]);
        } else if ( i < 9 ) {
            c.push(arr[i]);
            msg = `Оставшиеся студенты: -`
        } else {
            console.log(arr[i]);
            some.push(arr[i]);
            msg = `Оставшиеся студенты: ${some.join(', ')}`;
        }
    }
    newArr.push(a, b, c, msg);

    return newArr;
}   

// sortStudentsByGroups(students)

function Money() {
    let b = 300;
    let bPrc = 5400;
    let prc = 10800;

    // 10800 - 100
    // 5400  - 5
    // 

    return m;
}