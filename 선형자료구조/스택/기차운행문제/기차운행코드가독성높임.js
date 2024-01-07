//Array, peek, isempty 사용하기
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

function answer(train){
    //train <-- 우리가 이 순서로 나갈 수 있는지 판단할 수 있는 train 배열이 들어옴

    //1.들어왔다가 나가니까, stack을 만들어야 함
    let stack = []; // platform  역할
    let num = 0; // 들어간 train 수 카운트

    //2.train 만큼 for문을 돌면서, train이 나올 수 있는지 체크
    for(let i=0; i<train.length;i++){
        //if(train[i] === 나갈 수 있는 상태인 지 체크)
        while(stack.isEmpty() || stack.peek() < train[i]){
            stack.push(++num);
        }

        if(stack.peek() === train[i]){
            stack.pop();
        } else {
            return false;
        }
    }

    return true;
}

let input = [
    [1,2,3],
    [3,2,1],
    [3,1,2],
];

for(let i=0; i<input.length;i++){
    process.stdout.write(`#${i+1} `)
    console.log(answer(input[i]));
}