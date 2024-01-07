function answer(height){
    let str = '\n';

    for(let i =0; i<height ; i++){
        //1. 공백 처리 " "
        for(let j=0; j<height - i - 1; j++){
            str += " "
        }
        
        //2. * 처리 "*" 2n + 1
        for(let j = 0; j< 2*i+1; j++){
            str += "*";
        }

        //3. 개행문자 추가
        str += '\n';
    }

    return str;
}

let input = [
    3,5,7
];

//1,1,2,2,2,8

for(let i =0; i<input.length;i++){
    console.log(`#${i+1} ${answer(input[i])}`)
}