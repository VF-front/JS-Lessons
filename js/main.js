/*
    1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.
    '1 month'
    2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.
    "Язык js изучен на 20% Язык php изучен на 10%"

    3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. 
    При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.

    Пример:

    personalPlanPeter.showAgeAndLangs(personalPlanPeter)
    => 'Мне 29 и я владею языками: RU ENG'

    Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре (большими буквами). Если данные в объекте поменяются, то и сообщение тоже изменится.

    P.S. Дальше по курсу мы научимся удобно обращаться из метода к самому объекту, в котором он расположен. Но пока делаем это менее удобным способом)
*/

'use strict';

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        let str = '';
        let lang = '';
        const {age} = plan;
        const {languages} = plan.skills;

        languages.forEach(item => lang += ` ${item.toUpperCase()}`);
        
        str = `Мне ${age} и я владею языками:${lang}`
        return str;
    }
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter)

function showExperience(plan) {
    return `${plan.skills.exp}`
}

// showExperience(personalPlanPeter)

function showProgrammingLangs(plan) {
    let str = '';
    const {programmingLangs} = plan.skills;
    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }
    return str;
}

// showProgrammingLangs(personalPlanPeter);

