function answer(length){
    let result = [];

    for(let i=0; i<length; i++){
        result[i] = [];
    }

    /*
        2.반복문 패턴 구현
         1) length 길이만큼 시작해서 숫자를 채워준다
         2) length - 1, 방향바꿔주고, 짝수만큼 실행
         3) length == 0, 프로그램이 멈춘다.
    */

    let direction = 1;
    let  x,y,num;
    x=y=num= 0;
    x--;

    while(1){
        for(let i=0; i<length; i++){
            x += direction;
            result[y][x] = ++num;
        }

        length--;

        if(length <= 0) break;

        for(let j=0; j<length;j++){
            y+= direction;
            result[y][x] = ++num;
        }

        direction *= -1;
    }

    return result;
}

let input = [
    3,5,6
];

//1,1,2,2,2,8

for(let i =0; i<input.length;i++){
    process.stdout.write(`#${i+1} `);
    console.log(answer(input[i]))
}