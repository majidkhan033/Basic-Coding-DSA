// 1. N Natural Number

function Natural(num) {
    let a = 1;
    while(a<=100){
        console.log(a);
        ++a
    }    
}
console.log(Natural(100));


// 2. Multiple table
function tab(m) {
    for (i=1;i<=10;i++){
        let mul = i*m;
        console.log(`${m} x ${i} = ${mul}`)
    }
}
tab (2)

function natural(number){
    let i =1;
    while(i<=10){
        console.log(`${number} * ${i} = ${number * i}`)
        i++;

    }
}


// 3. Program to reverse an array

let a = [1, 2, 3, 4];
let b = [];
 
console.log("a: ");
console.log(a);
 
    for (let i = a.length - 1; i >= 0; i--) {
        b.push(a[i]);
    }
 
    console.log("b: ");
    console.log(b);


// 4. Average of an array (sum of arr / length of array)

function avg(arr) {
    let sum = 0;
    for (let i=0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(avg([1,2,3,4,5]))


// 5. Elements greater than avg sum of an array

function greaterThanAvg(arr) {
    let avgNo = avg(arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > avgNo) {
            console.log(arr[i]);
        }
    }
}


//6 .Find largest number in an array

function greatest(arr) {
    let largest = arr[0];

    for (let i = 0; i<arr.length; i++){
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    console.log(greatest(arr[1,3,4,50]));
}
// console.log(greatest(arr[1,3,4,50]));


// 7. Program to find the smallest number among three numbers.

function smallest() {
    let a = 5; b = 7, c = 9;

    if ((a <= b) && (a <= c)){
        return a;
    }
    else if ((b <= a) && (b <= c)){
        return b;
    }
    else {
        return a;
    }
}
console.log(smallest())


//8. Find the given element in an array and return it's index if present else -1;

