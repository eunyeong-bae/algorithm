if(!Array.prototype.peek){
    Array.prototype.peek = function() {
        return this[this.length - 1];
    }
}

if(!Array.prototype.isEmpty){
    Array.prototype.isEmpty = function() {
        return this.length === 0;
    }
}

function answer(str){
    let result = [];

    //1. "(" 있을 땐, stack 에 넣고 ")"만나면 기존 스택과 함께 빼야함
    let stack = [];

    for(let i=0; i<str.length; i++){
        if(str[i] === '('){
            stack.push(i);
        } else if(str[i] === ')'){
            if(stack.isEmpty()){
                return [];
            }
            result.push([stack.pop(), i]);
        }
    }

    //")" 수행이 끝났음에도 stack 값이 남아있다면,
    //"(" 가 남아있으니, 빈 배열 리턴
    if(!stack.isEmpty()) {
        return [];
    }

    return result;
}

let input = [
    "(a+b)",
    "(a*(b+C)+d)",
    "(a*(b+c)+d+(e)",
    "(a*(b+c)+d)+e)",
    "(a*(b+c)+d)+(e*(f+g))",
];

for(let i=0; i<input.length; i++){
    process.stdout.write(`#${i+1} `);
    console.log(answer(input[i]));
}