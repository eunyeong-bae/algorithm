let input = ['a','b','c'];
let count = 0;

function permutation(arr,s,r) {
    console.log('first',s,r)
    //1.=재귀를 멈출 조건
    if(s==r){
        count++;
        console.log(arr.join(' '));
        return;
    }
    
    //s : 실제로 내가 설정해야 할 요소의 위치
    //i : a,b,c

    //2.재귀함수
    for(let i=s; i<arr.length;i++){
        // console.log([arr[s], arr[i]])
        [arr[s], arr[i]] = [arr[i], arr[s]]; //swap
        console.log("first arr ", arr[s], arr[i])
        console.log("swap arr: ", arr)
        permutation(arr, s+1, r);
        // console.log("재귀 끝 : ", arr)
        [arr[s], arr[i]] = [arr[i], arr[s]]; //원상복귀
        console.log("second arr ", arr[s], arr[i])
        // console.log("재귀 끝 arr : ", arr)
    }
    /*
    s=0, r=2, i=0 ["a",]
    s=1, r=2, i=1 ["a","b"]
    s=2, r=2 ["a","b","c"]
    ---
     s=1, r=2, i=2 ["a","C"]
    s=2, r=2, i=1 ["a","c","b"]
    s=1, r=2 i =2 ["a","b",]
    ---
    s=0, r=2, i=1["b","a","c"]
    ...
    s=0; r=2, i=2 ["a"]
    */


    // for(let i=0; i<arr.length;i++){
    //     for(let j=0; j<arr.length;j++){
    //         if(i==j) continue;

    //         for(let k=0; k<arr.length;k++){
    //             if(i==k) continue;
    //             if(j==k) continue;
    //             console.log(arr[i],arr[j],arr[k])
    //             count++;
    //         }
    //     }
    // }

}

permutation(input, 0 ,2);
console.log(count);