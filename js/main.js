"usestrict";

// for (let i = 0; i < 3; i++) {
//     console.log(i + ' i');
//     for (let j = 0; j < 3; j++) {
//         console.log(j + ' j');
        
//     }
// }

first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 5; k++) {
            if (k === 2) continue first;
            console.log(`Third level: ${k}`);
        }
    }
}