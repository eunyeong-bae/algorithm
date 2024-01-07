let input = [1,2,3,4];
let output = [];
let count = 0;

function combination(arr,data,s,idx,r){
    //start 위치 s
    //내가 뽑아야할 갯수 r
    //idx 이전 행렬에서 스타팅 인덱스

    //재귀함수 사용
    if(s==r){
        count++;
        console.log(data);
        return;
    }

    for(let i=idx; arr.length - i >= r-s;i++){
        data[s] = arr[i];
        combination(arr, data, s+1, i+1, r);
    }
    
    //for 갯수 -> 뽑기 갯수와 동일
    // for(let i=0; i<arr.length; i++){
    //     for(let j=i+1; j<arr.length; j++){
    //         count++;
    //         console.log(arr[i], arr[j]);
    //     }
    // }
}

combination(input, output, 0,0,2);
console.log(count);