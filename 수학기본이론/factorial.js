let result ;

function recursive(number){
    if(number == 1){
        return 1;
    }

    return recursive(number - 1) * number;
}

result = recursive(5); // 5! => 5 x 4 x 3 x 2 x 1
console.log(result);