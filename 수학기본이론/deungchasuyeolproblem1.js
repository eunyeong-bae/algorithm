//등차수열의 항 찾기

function answer(a,d,n){
    let index = -1;

    //등차수열 만들기
    let num;
    for(let i=1; ; i++){
        num = a + d * (i - 1);

        //못 찾음
        if(num > n) {
            index = -1;
            break;
        }

        //찾았다면
        if(num == n){
            index = i;
            break;
        }

        console.log(num);
    }

    //조건문으로만 찾기
    if((n - a) % d == 0){
        index = (n - a) / d  + 1;
    }else {
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

