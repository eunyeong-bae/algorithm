function answer(class_1, class_2){
    let result = [];

    return result;
}

let input = [
    [
        ["Kali", "Oliver","Naomi"],
        ["Oliver", "Naomi", "Maya"],
    ],
    [
        ["Roxy", "Olga","Kara", "Nana"],
        ["Oliver", "Roxy", "Kara","Nana", "Maya"],
    ],
    [
        ["Roxy", "Ravi","Nana", "Rei","Karis","Mana","Naomi"],
        ["Olga", "Nana", "Rei", "Oliver","Kali","Rei","Kara"],
    ],
];

for(let i=0; i<input.length;i++){
    process.stdout.write(`#${i+1} `);
    console.log(answer(input[i][0], input[i][1]));
}