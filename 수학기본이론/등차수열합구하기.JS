function answer(a, d, n){
    let index = -1;
    
    //등차수열만들기
    // let num;
    // for(let i=1; ; i++){
    //     num = a + d * ( i -1 );

    //     if(num > n){
    //         index = -1;
    //         break;
    //     }

    //     if(num == n){
    //         index = i;
    //         break;
    //     }
    // }

    if((n-a) % d == 0){
        index = (n-a)/d + 1;
    } else {
        index = -1;
    }

    return index;
}

let input = [
    [1,2,7],
    [2,3,10],
    [3,5,23],
];

for(let i = 0 ; i< input.length; i++){
    console.log(`#${i+1} ${answer(input[i][0], input[i][1], input[i][2])}`);
}


let result1;
function forloop(s, t, number){
    let acc = 0;

    for(let i=1;i<=number;i++){
        if(i==1){
            acc += s;
        }else {
            acc += t;
        }
    }

    return acc;
}

result = forloop(3, 2, 5);
console.log(result);

let result;
function recursive(s, t, number){
    if(number == 1){
        return s;
    }

    return recursive(s, t, number - 1) + t;
}

result = recursive(3,2,5);
console.log(result);