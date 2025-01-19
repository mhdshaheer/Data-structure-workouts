function reverseString(value){
    console.log('Original string:',value)
    let stack = [];
    for(let i=0;i<value.length;i++){
        stack.push(value[i])
    }
    let reverseValue = '';
    while(stack.length>0){
        reverseValue += stack.pop()
    }
    return reverseValue
}

console.log('Reversed string:',reverseString('i know everything'))