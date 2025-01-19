// function factorial(n){
//     if(n==0 || n==1){
//         return 1;
//     }
//     return n*factorial(n-1)
// }
// console.log(factorial(9));


function sumOfNatural(n){
    if(n==0) return 0
    return n+sumOfNatural(n-1)
};
console.log(sumOfNatural(5))