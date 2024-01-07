let result;

//f(1) = 3, 등차 = 2, f(5) 값을 구하는 등차수열 예
// function forloop(s, t, number){
//     let acc = 0;

//     for(let i=1; i<=number; i++){
//         if(i == 1){
//             acc += s;
//         }else {
//             acc += t;
//         }

//         console.log(i, acc);
//     }

//     return acc;
// }

// result = forloop(3, 2, 5);

//재귀함수로 표현
function recursive(s, t, number){
    //멈출 조건
    if(number == 1){
        return s;
    }

    //반복 조건
    return recursive(s, t, number - 1) + t;
}

// number: 5 -> recursive(3, 2, 4) + 2 -> 9 + 2
// number: 4 -> recursive(3, 2, 3) + 2 -> 7 + 2
// number: 3 -> recursive(3, 2, 2) + 2 -> 5 + 2
// number: 2 -> recursive(3, 2, 1) + 2 -> 3 + 2
// number : 1 -> 3

result = recursive(3,2,5);
console.log(result);

