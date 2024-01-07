let swap = function(arr, idx_1, idx_2){
    let tmp = arr[idx_1];
    arr[idx_1] = arr[idx_2];
    arr[idx_2] = tmp;
};

let ascending = function(x,y){
    return x > y;
};

let descending = function(x,y){
    return x < y;
};

let quickSort = function(arr, compare, s=0, e =arr.length - 1){
    let start = s; //index
    let pivot = arr[e]; //value

    for(let i =s; i<=e;i++){
        if(compare(pivot, arr[i])){
            swap(arr, start, i);
            start++;
        }
    }
    swap(arr, start, e);

    if(start - 1 >s){
        quickSort(arr, compare, s, start - 1);
    }
    if(start + 1 < e){
        quickSort(arr, compare, start + 1, e);
    }
};

/* test code */
let init_array = [6,5,1,3,2,4];

let array;

let sorting = [ quickSort];
let order = [ascending, descending];
for(let i=0; i<sorting.length; i++){
    for(let j=0; j<order.length;j++){
        console.log(sorting[i].name, order[i].name);

        array = [...init_array];
        sorting[i](array, order[j]);
        console.log(array);
    }
}