let input = [1,2,3,4];
let output = [];
let count = 0;

function combination(arr, data, s, idx, r){
    //1 멈춰야하고
    if(s == r){
        count++;
        console.log(data);
        return;
    }

    //2 재귀
    for(let i=idx; arr.length - i >= r- s ; i++){
        data[s] = arr[i];
        combination(arr, data, s+1, i+1, r);
    }
}

combination(input, output, 0,0,2);
console.log(count);
