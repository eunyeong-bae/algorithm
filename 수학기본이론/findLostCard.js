//잃어버린 카드 찾기

//템플릿 코드
function answer(a,b,c){
    let number = 0;

    //sort
    num = [a,b,c];
    num.sort((x,y) => x-y);

    //코드 구현 시작
    
    //1. get d -> 등차값 찾기
    let d = 0;
    for(let i =1; i<num.length;i++){
        d += num[i] - num[i-1];
    }
    d /= num.length;

    //2. 빈 index 찾기
    let index = num[2] - num[1] > num[1] - num[0] ? 2 : 1;

    //1. 이전 값 + d
    number = num[0] + d * index;

    // 구현 종료

    return number;
}

//main code
let input = [
    [1,7, 10],
    [3,8,18],
    [2,5,11],
];

for(let i =0; i< input.length; i++){
    console.log(`#${i+1} ${answer(input[i][0], input[i][1], input[i][2])}`);
}