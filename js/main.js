"usestrict";

function firstTask(num) {

    for (let i = 5; i <= num; i++) {
        console.log(i)
    }

}

secondTask = num => {
    for (let i = 20; i >= num; i--) {
        if (i === 13) break;
        console.log(i)
    }
}

thirdTask = num => {
    for (let i = 1; i <= num; i++) {
        if( i % 2) continue

        console.log(i);
    }
}

fourthTask = num => {
    let i = 2;
    while ( i <= num ) {
        if ( i % 2 ) {
            console.log(i)
        }
        i++;
    }
}

fourthTask(16);
// thirdTask(10);
// secondTask(10);
// firstTask(10);