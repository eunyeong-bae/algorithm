function answer(nums, target){
    //for 2 ---> O(n^2)
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length;j++){
            if(nums[i] + nums[j] == target){
                return [i,j]
            }
        }
    }

    //for 1 ---> O(n)
    //target = nums[i] + nums[j]
    // target - nums[i] = nums[j]
    let map = {}; 

    for(let i=0; i<nums.length;i++){
        if(map[target - nums[i]] != undefined){
            return [map[target - nums[i]], i];
        }

        map[nums[i]] = i;
    }


    return [];

}

let input = [
    [[2,7,11,15],9],
    [[3,2,4],6],
    [[3,3],6],
];


for(let i =0; i<input.length;i++){
    process.stdout.write(`#${i+1} `);
    console.log(answer(input[i][0], input[i][1]))
}