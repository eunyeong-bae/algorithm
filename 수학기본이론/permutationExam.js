let input = ['a','b','c'];
let count = 0;

function permutation(arr, s, r){
    //멈출 조건
    if(s == r){
        count++;
        console.log(arr.join(' '));
        return;
    }

    //반복시킬 조건
    for(let i=0; i<arr.length; i++){
        [arr[s], arr[i]] = [arr[i],arr[s]]; //swap
        permutation(arr, s+1, r);
        [arr[s], arr[i]] = [arr[i],arr[s]]; //돌리기
    }
}

permutation(input, 0, 2);
// permutation(input, 0 ,2);
console.log(count);