let arr = [1,2,3,4,5];
console.log(arr);
console.log(reverseA(arr));

function reverseA(arr) {
    let arr2 = [];

    let n = arr.length-1;
    let ind = 0;
    for (i = n; i >= 0; i--) {
        arr2[ind++] = arr[i];
    }
    return arr2;
}