// function prime(N) {
//     if (N == 1) {
//         return `${N} is neither prime nor composite number`;
//     }
//     else {
//         for (let i = 0; i <= N; i++) {
//             if ((N % 2) == 0) {
//                 return `${N} is not a prime number`;
//             }
//             else {
//                 return `${N} is a prime number`;
//             }
//         }
//     }
// }
// console.log(prime(7))

//----------------------------------------------------------------------------------------

// function prime(n) {
//     if (n == 1) return false;
//     for (let i=2; i*i<=n; i++) {
//         if (n%i==0) return `${n} is Not a prime number`;
//         return `${n} is a prime number`;
//     }
// }
// console.log(prime(7));

//---------------------------------------------------------------------------------------------

function isPrime(n) {
    if (n == 1) return false;
    if ((n == 2) || (n == 3)) return true;
    if (((n%2) == 0) || ((n%3) == 0)) return false;
    for (let i=5; i*i<=n; i+=6){
        if (((n%i)==0) || ((n%i+2)==0)) return false;
    }
    return true;
}
console.log(isPrime(15));