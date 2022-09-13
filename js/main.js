'use strict';

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};

const jonh = Object.create(soldier);

// const jonh = {
//     health: 100
// }

// jonh.__proto__ = soldier; // Old ver

Object.setPrototypeOf(jonh, soldier)

jonh.sayHello()