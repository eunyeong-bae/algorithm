function answer(nums){
    console.log("dd",nums)
    let result = [];

    //1. 최소값 찾기
    let minNum = Number.MAX_SAFE_INTEGER;
    for(i=0; i<nums.length;i++){
        if(minNum > nums[i]){
            minNum = nums[i]
        }
    }

    //2.key 값 찾기
    let count = 0; //index로 접근하기
    for(let i=0; i<nums.length;i++){
        if(minNum === nums[i]){
            // result.push(i);

            //index로 접근하기
            result[count++] = i;
        }
    }

    return result;
}

let input = [
    [5,2,10,2],
    [4,5,7,4,8],
    [11,15,12,16,11,12],
];

for(let i =0; i<input.length;i++){
    process.stdout.write(`#${i+1} `);
    console.log(answer(input[i]))
}