//for loop 반복문 기반 이진 검색 구현
function binarySearch_loop(arr, n){
    let lowIndex = 0;
    let midIndex = 0;
    let highIndex = arr.length - 1;

    while( lowIndex <= highIndex){
        midIndex = Math.floor((lowIndex + highIndex)/2);

        if(arr[midIndex] > n){
            highIndex = midIndex - 1;
        } else if(arr[midIndex] < n) {
            //찾으려는 값 n이 중간값보다 오른쪽에 있으니, 
            //lowindex를 증가시켜줘야함
            lowIndex = midIndex + 1;
        } else {
            return midIndex;
        }
    }

    return -1;
}

//recursive 재귀 함수 기반 이진 검색 구현
function binarySearch_recursive(
    arr, n, lowIndex=0, highIndex=arr.length -1)
{
    if(highIndex < lowIndex) return -1;
    
    let midIndex = Math.floor((lowIndex + highIndex)/2);

    if(arr[midIndex] > n) {
        return binarySearch_recursive(arr, n, lowIndex, midIndex -1);
    } else if(arr[midIndex] < n) {
        return binarySearch_recursive(arr, n, midIndex+1, highIndex);
    } else {
        return midIndex;
    }
}

/* test code */
let array = [0,1,2,3,4,5,6,7,8,9];

console.log(binarySearch_loop(array, 0));
console.log(binarySearch_loop(array, 3));
console.log(binarySearch_loop(array, 7));
console.log(binarySearch_loop(array, 10));

console.log(binarySearch_recursive(array, 0));
console.log(binarySearch_recursive(array, 3));
console.log(binarySearch_recursive(array, 7));
console.log(binarySearch_recursive(array, 10));