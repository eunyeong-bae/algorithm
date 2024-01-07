function Dictionary(items = {}){
    this.items = items;
}

Dictionary.prototype.has = function(key){
    return this.items.hasOwnProperty(key);
}

Dictionary.prototype.set = function(key, value){
    return this.items[key] = value;
}


function answer(class_1, class_2){
    let result = [];

    // class_2에 대한 key/value 형태로 저장 -> 학생이 있느지 없는지 확인 (seT)
    let tmp = new Dictionary();
    for(let i=0; i<class_2.length;i++){
        tmp.set(class_2[i], true);
    }

    // class_1 for class_2 dictionary 학생 있는지 없는지 유무 통해 빠르게 확인(has) 가능
    for(let i=0; i<class_1.length;i++){
        if(tmp.has(class_1[i])){
            result.push(class_1[i]);
        }
    }

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